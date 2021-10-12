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
  const setMode = () => isPlayingToggle(!isPlaying);

  return (
    <BrowserRouter>
      <div className="App">
        <div className={`${sideBarVisible ? 'SideBar active' : 'SideBar'}`}>
          <SideBar isPlaying={isPlaying} cbToggle={sideBarToggle} />
        </div>
        <Header cb={setMode} sideBarToggle={sideBarToggle} setModeToggle={setMode} />
        <Route exact path="/" component={MainPage} />
        <Route path="/category/:id" component={MainPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
