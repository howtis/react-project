import logo from './logo.svg';
import Hello from './Hello.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload. </p>
        <Hello />
      </header>
    </div>
  );
}

export default App;
