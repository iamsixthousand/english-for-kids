import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { ResultScreen } from './components/ResultScreen/ResultScreen';
import { PUBLIC_URL } from './constants/constants';
import { GetResult } from './interfaces/interfaces';
import './App.scss';
import './components/SideBar/SideBar.scss';

const App: React.FC = () => {
  const [isPlaying, isPlayingToggle] = useState<boolean>(false);
  const [sideBarVisible, changeSideBarVisibility] = useState<boolean>(false);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [viewResultScreen, setViewResultScreen] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');

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

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <div
        className="App"
        style={{
          backgroundImage: `url(${PUBLIC_URL}/background.jpg`,
          backgroundRepeat: 'repeat',
        }}
      >
        <header>
          <div className={`${sideBarVisible ? 'SideBar active' : 'SideBar'}`}>
            <SideBar isPlaying={isPlaying} cbToggle={sideBarToggle} />
          </div>
          <Header isPlaying={isPlaying} sideBarToggle={sideBarToggle} setModeToggle={setMode} />
        </header>
        <main>
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
