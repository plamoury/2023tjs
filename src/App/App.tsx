import { MemeInterface, MemeSVGViewer } from "orsys-tjs-meme";
import { DummyMeme } from "./interfaces/dummyMeme";
import React from "react";
import "./App.css";
import Header from "./components/ui/Header/Header";
import MemeForm from "./components/feature/MemeForm/MemeForm";
import FlexHLayout from "./components/layout/FlexHLayout/FlexHLayout";

interface IAppState {
  meme: MemeInterface;
}
interface IAppProps {}

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { meme: DummyMeme };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <FlexHLayout myStyle={{ height: "89vh" }}>
          <MemeSVGViewer image={undefined} meme={this.state.meme} />
          <MemeForm
            meme={this.state.meme}
            onValueChange={(newMeme: MemeInterface) => {
              this.setState({ meme: newMeme });
            }}
          />
        </FlexHLayout>
      </div>
    );
  }
}
export default App;
