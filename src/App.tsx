/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { Header } from './components/Header/Header';
import { NetworkIndicator } from './components/NetworkIndicator/NetworkIndicator';
import { SideBar } from './components/SideBar/SideBar';
import { ResultScreen } from './components/ResultScreen/ResultScreen';
import { PUBLIC_URL } from './@core/constants';
import { GetResult } from './@core/interfaces';
import './App.scss';
import './components/SideBar/SideBar.scss';

const App: React.FC = () => {
  const [isPlaying, isPlayingToggle] = useState<boolean>(false);
  const [isOffline, isOfflineToggle] = useState<boolean>(false);
  const [sideBarVisible, changeSideBarVisibility] = useState<boolean>(false);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [viewResultScreen, setViewResultScreen] = useState<boolean>(false);
  const [isBlocking, setIsBlocking] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');

  const setIsOffline = () => isOfflineToggle(true);
  const setIsOnline = () => isOfflineToggle(false);
  const sideBarToggle = () => changeSideBarVisibility(!sideBarVisible);
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
            isGameStarted={isGameStarted}
            setIsBlockingToggle={setIsBlockingToggle}
            isPlaying={isPlaying}
            sideBarToggle={sideBarToggle}
            setModeToggle={setMode}
          />
        </header>
        <main>
          <NetworkIndicator viewNetworkStatus={isOffline} />
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
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
