import React from "react";
import "./App.css";

interface IAppState {}
interface IAppProps {}

class App extends React.PureComponent<IAppProps, IAppState> {
  render() {
    return <div className="App"></div>;
  }
}
export default App;