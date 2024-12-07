import React from 'react'
import Counter from './components/Counter';
import ToggleButton from './ToggleButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <div class="contnet">
          <h1>Hello World!</h1>
          <Counter/>
          <ToggleButton/>
          
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
