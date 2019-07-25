import React from 'react';
import electron from 'electron';
import logo from './logo.svg';
import './App.css';

// console.log(electron)
const App: React.FC = () => {
  // const name:string = '1'
  return (
    <div className="App">
      <div>
        <p>文件管理</p>
      </div>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
