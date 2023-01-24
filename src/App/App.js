import React from 'react';
import Button from './components/ui/Button/Button';
import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }
  }
  render() {
    return (
      <div className="App">
        Voici le nb de click : {this.state.counter}
        <hr />
        <Button onButtonClick={() => {
          // le setState ne fait qu'un remplacement d'objet Asynchrone
          // pas de garantie sur le rendu pour etre effectif
          this.setState({ counter: this.state.counter - 1 });
          console.log(this.state.counter);
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
