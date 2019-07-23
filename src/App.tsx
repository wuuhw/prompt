import React from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable
console.log((window as any).require)
// const electron = (window as any).require('electron');
// console.log(electron)
// const fs = electron.remote.require('fs');
// const ipcRenderer  = electron.ipcRenderer;


const App: React.FC = () => {
  const name:string = '1'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>我构建的地一个桌面应用</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
