import React from 'react';
import './App.css';
import Gugudan from './Gugudan';
import JoinWords from './JoinWords';
import Gugudan_hook from './Gugudan_hook';
import JoinWord_hook from './JoinWords_hook';


function App() {
  return (
    <div className="App">
      <Gugudan />
      <Gugudan_hook />
      <JoinWords />
      <JoinWord_hook />
    </div>
  );
}

export default App;


// rm -f ./.git/index.lock
// git add .
// git commit -m "text"
// git push