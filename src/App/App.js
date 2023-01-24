import React from 'react';
import Button from './components/ui/Button/Button';
import './App.css';

class App extends React.PureComponent {
  counter = 0;
  render() {
    return (
      <div className="App">
        Voici le nb de click : {this.counter}
        <hr />
        <Button onButtonClick={() => {
          this.counter--;
          console.log(this.counter);
          // mauvais usage parce que synchrone
          // à eviter
          this.forceUpdate();
        }}>Click+1</Button>
        <Button>Click-1</Button>
      </div>
    );
  }
}
// function App() {
//   /** Dans react le /App equivaut a /public
//    * qd react pousse les composant ils seront placés au meme niveau que public
//    * qd le path commence par "/" on vise le repertoire public
//    * sinon on descend dans les path ../../..
//    */
//   let counter = 0;

//   // besoin d'une valeur etatique 
//   // avant on ne pouvait le faire qu'avec les class (désué)
//   // mais maintenant on utilise les valeur etatique
//   return (
//     <div className="App">
//       Voici le nb de click : {counter}
//       <hr />
//       <Button onButtonClick={() => {
//         counter--;
//         console.log(counter);
//       }}>Click+1</Button>
//       <Button>Click-1</Button>
//     </div>
//   );
// }

export default App;
