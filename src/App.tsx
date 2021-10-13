import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import './App.css';

import './components/SideBar/SideBar.css';

const App: React.FC = () => {
  const [isPlaying, isPlayingToggle] = useState<boolean>(false);
  const [sideBarVisible, changeSideBarVisibility] = useState<boolean>(false);

  const sideBarToggle = () => changeSideBarVisibility(!sideBarVisible);
  const setMode = () => {
    isPlayingToggle(!isPlaying);
  };

  return (
    <BrowserRouter basename="/english-for-kids">
      <div className="App">
        <header>
          <div className={`${sideBarVisible ? 'SideBar active' : 'SideBar'}`}>
            <SideBar isPlaying={isPlaying} cbToggle={sideBarToggle} />
          </div>
          <Header cb={setMode} sideBarToggle={sideBarToggle} setModeToggle={setMode} />
        </header>
        <main>
          <Route exact path="/" render={() => <MainPage isPlaying={isPlaying} />} />
          <Route path="/category/:id" render={() => <MainPage isPlaying={isPlaying} />} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
