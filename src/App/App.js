import React from 'react';
import Button from './components/ui/Button/Button';
import './App.css';

function App() {
  /** Dans react le /App equivaut a /public
   * qd react pousse les composant ils seront placés au meme niveau que public
   * qd le path commence par "/" on vise le repertoire public
   * sinon on descend dans les path ../../..
   */
  return (
    <div className="App">
      Demat Breizh
      <hr/>
      <Button>ClickMe<br/>please</Button>
      <Button><img src="/img/deadicon.png" alt='sdfsdfsdf'/></Button>
      <Button children="toto"/>
    </div>
  );
}

export default App;
