/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import i18next from 'i18next';
import { MainPage } from './components/MainPage/MainPage';
import { Header } from './components/Header/Header';
import { NetworkIndicator } from './components/NetworkIndicator/NetworkIndicator';
import { SideBar } from './components/SideBar/SideBar';
import { ResultScreen } from './components/ResultScreen/ResultScreen';
import { PUBLIC_URL, offlineComponentTimeout } from './@core/constants';
import { GetResult } from './@core/interfaces';
import data from './en.json';
import './App.scss';
import './components/SideBar/SideBar.scss';

const App: React.FC = () => {
  const [isPlaying, isPlayingToggle] = useState<boolean>(false);
  const [isOffline, isOfflineToggle] = useState<boolean>(false);
  const [swModaleView, setModaleView] = useState(false);
  const [sideBarVisible, changeSideBarVisibility] = useState<boolean>(false);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [viewResultScreen, setViewResultScreen] = useState<boolean>(false);
  const [isBlocking, setIsBlocking] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');
  const [language, setLanguage] = useState('en');
  const [offlineContentVisible, setOfflineContentVisible] = useState(false);

  const setAppLanguage = (lang: string) => {
    i18next.init({
      lng: lang,
      resources: data,
    });
    setLanguage(language);
  };
  const offlineContentVisibilityToggle = (flag: boolean) => {
    setOfflineContentVisible(flag);
  };

  const setIsOffline = () => isOfflineToggle(true);
  const setIsOnline = () => {
    isOfflineToggle(false);
    offlineContentVisibilityToggle(false);
  };
  const sideBarToggle = () => changeSideBarVisibility(!sideBarVisible);
  const setModaleViewToggle = (value: boolean) => setModaleView(value);
  const setMode = () => {
    isPlayingToggle(!isPlaying);
    if (isGameStarted === true) setIsGameStarted(false);
  };
  const gameStartedToggle = () => {
    setIsGameStarted(!isGameStarted);
    setResult('');
  };
  const resultScreenVisibilityToggle = () => {
    setViewResultScreen(!viewResultScreen);
    if (isPlaying) setMode();
  };
  const getResult: GetResult = (res) => setResult(res);
  const setIsBlockingToggle = (flag: boolean) => setIsBlocking(flag);

  window.addEventListener('offline', setIsOffline, false);
  window.addEventListener('online', setIsOnline, false);

  useEffect(() => {
    setAppLanguage('en');
  });

  useEffect(() => {
    if (isOffline) setTimeout(() => offlineContentVisibilityToggle(true), offlineComponentTimeout);
  }, [isOffline]);

  const askUserToUpdate = (reg: ServiceWorkerRegistration) => {
    console.log('ddddd');
    setModaleViewToggle(true);
    const okButton = document.getElementById('okButton') as HTMLButtonElement;
    okButton.onclick = () => {
      reg.waiting?.postMessage({ type: 'SKIP_WAITING' });
      setModaleViewToggle(false);
    };
  };

  window.addEventListener('load', async () => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      try {
        const reg = await navigator.serviceWorker.register(
          `${process.env.PUBLIC_URL}/service-worker.js`
        );
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                askUserToUpdate(reg); // shows update message
              }
            };
          }
        };
        console.log('success', reg);
      } catch (e) {
        console.log('fail');
      }
    }
  });

  const onReloadCancel = () => {
    console.log('reload-cancel');
    setModaleViewToggle(false);
  };

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('controller-changed');
    window.location.reload();
  });

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <div
        className="App"
        style={{
          backgroundImage: `url(${PUBLIC_URL}/background.jpg`,
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <header>
          <div className={`${sideBarVisible ? 'SideBar active' : 'SideBar'}`}>
            <SideBar isPlaying={isPlaying} cbToggle={sideBarToggle} />
          </div>
          <Header
            offlineContentVisible={offlineContentVisible}
            isGameStarted={isGameStarted}
            setIsBlockingToggle={setIsBlockingToggle}
            isPlaying={isPlaying}
            sideBarToggle={sideBarToggle}
            setModeToggle={setMode}
          />
        </header>
        <main>
          <>
            <div className={`UpdateSWContainer${swModaleView ? ' view' : ' hide'}`}>
              <div className="UpdateSWMessage">
                <span>{i18next.t('swReloadMessage')}</span>
                <div className="UpdateSWButtons">
                  <button className="UpdateButton" id="okButton" type="button">
                    OK
                  </button>
                  <button className="UpdateButton" type="button" onClick={onReloadCancel}>
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </>
          <NetworkIndicator isOffline={isOffline} />
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
                offlineContentVisible={offlineContentVisible}
                isOffline={isOffline}
                isPlaying={isPlaying}
                isGameStarted={isGameStarted}
                gameStartedToggle={gameStartedToggle}
                resultScreenVisibilityToggle={resultScreenVisibilityToggle}
                getResult={getResult}
                setIsBlockingToggle={setIsBlockingToggle}
                isBlocking={isBlocking}
              />
            )}
          />
          <Route
            path="/category/:id"
            render={() => (
              <MainPage
                offlineContentVisible={offlineContentVisible}
                isOffline={isOffline}
                isPlaying={isPlaying}
                isGameStarted={isGameStarted}
                gameStartedToggle={gameStartedToggle}
                resultScreenVisibilityToggle={resultScreenVisibilityToggle}
                getResult={getResult}
                isBlocking={isBlocking}
                setIsBlockingToggle={setIsBlockingToggle}
              />
            )}
          />
          <ResultScreen
            resultScreenVisibilityToggle={resultScreenVisibilityToggle}
            viewResultScreen={viewResultScreen}
            finalResult={result}
          />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
