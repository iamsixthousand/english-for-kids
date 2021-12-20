/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { languageSetAC } from './state/appConfigAC';
import {
  isPlayingSetAC,
  isGameStartedSetAC,
  isBlockingSetAC,
  setResultAC,
} from './state/gameProcessAC';
import {
  sideBarVisibilitySetAC,
  resultScreenVisibilitySetAC,
  swModaleVisibilitySetAC,
} from './state/elementsVisibilityAC';
import { checkOfflineMiddleWareAC } from './state/offlineAC';
import { MainPage } from './components/MainPage/MainPage';
import { Header } from './components/Header/Header';
import { NetworkIndicator } from './components/NetworkIndicator/NetworkIndicator';
import { SideBar } from './components/SideBar/SideBar';
import { LoadingLine } from './components/LoadingLine/LoadingLine';
import { ResultScreen } from './components/ResultScreen/ResultScreen';
import { UpdateSWMessage } from './components/UpdateSWMessage/UpdateSWMessage';
import { PUBLIC_URL } from './@core/constants';
import { GetResult, AppState } from './@core/interfaces';
import data from './en.json';
import * as serviceWorkerRegistration from './service-worker-registration';
import './App.scss';
import './components/SideBar/SideBar.scss';

const App: React.FC = () => {
  // *****************************STATE*****************************
  const dispatch = useDispatch();
  const isPlaying = useSelector((store: AppState) => store.gameProcess.isPlaying);
  const isGameStarted = useSelector((store: AppState) => store.gameProcess.isGameStarted);
  const sideBarVisible = useSelector((store: AppState) => store.elementVisibility.sideBarVisible);
  const resultScreenVisible = useSelector(
    (store: AppState) => store.elementVisibility.resultScreenVisible
  );
  const isOffline = useSelector((store: AppState) => store.offline.isOffline);
  const result = useSelector((store: AppState) => store.gameProcess.result);

  // ********************CALLBACKS************************************

  const setAppLanguage = (lang: string) => {
    i18next.init({
      lng: lang,
      resources: data,
    });
    dispatch(languageSetAC(lang));
  };

  const sideBarToggle = () => dispatch(sideBarVisibilitySetAC(!sideBarVisible));
  const setModaleViewToggle = (value: boolean) => dispatch(swModaleVisibilitySetAC(value));
  const setMode = () => {
    dispatch(isPlayingSetAC(!isPlaying));
    if (isGameStarted === true) dispatch(isGameStartedSetAC(false));
  };
  const gameStartedToggle = () => {
    dispatch(isGameStartedSetAC(!isGameStarted));
    dispatch(setResultAC(''));
  };

  const resultScreenVisibilityToggle = () => {
    dispatch(resultScreenVisibilitySetAC(!resultScreenVisible));
    if (isPlaying) setMode();
  };
  const getResult: GetResult = (res) => dispatch(setResultAC(res));
  const setIsBlockingToggle = (flag: boolean) => dispatch(isBlockingSetAC(flag));

  useEffect(() => {
    dispatch(checkOfflineMiddleWareAC());
  });

  useEffect(() => {
    setAppLanguage('en');
    return () => setAppLanguage('en');
  });

  const askUserToUpdate = (reg: ServiceWorkerRegistration) => {
    setModaleViewToggle(true);
    const okButton = document.getElementById('okButton') as HTMLButtonElement;
    okButton.onclick = () => {
      reg.waiting?.postMessage({ type: 'SKIP_WAITING' });
      setModaleViewToggle(false);
    };
  };

  serviceWorkerRegistration.register(askUserToUpdate);

  const onReloadCancel = () => {
    setModaleViewToggle(false);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${PUBLIC_URL}/background.jpg`,
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <header>
        <div
          data-testid={`SideBar${sideBarVisible ? ' active' : ''}`}
          className={`SideBar${sideBarVisible ? ' active' : ''}`}
        >
          <SideBar cbToggle={sideBarToggle} />
        </div>
        <Header
          setIsBlockingToggle={setIsBlockingToggle}
          sideBarToggle={sideBarToggle}
          setModeToggle={setMode}
        />
      </header>
      <main>
        <LoadingLine />
        <UpdateSWMessage onReloadCancel={onReloadCancel} />
        <NetworkIndicator />
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              gameStartedToggle={gameStartedToggle}
              resultScreenVisibilityToggle={resultScreenVisibilityToggle}
              getResult={getResult}
              setIsBlockingToggle={setIsBlockingToggle}
            />
          )}
        />
        <Route
          path="/category/:id"
          render={() => (
            <MainPage
              gameStartedToggle={gameStartedToggle}
              resultScreenVisibilityToggle={resultScreenVisibilityToggle}
              getResult={getResult}
              setIsBlockingToggle={setIsBlockingToggle}
            />
          )}
        />
        <ResultScreen
          resultScreenVisibilityToggle={resultScreenVisibilityToggle}
          finalResult={result}
        />
      </main>
    </div>
  );
};

export default App;
