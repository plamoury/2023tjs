import { MemeInterface, ImageInterface } from "orsys-tjs-meme";
import { DummyMeme } from "./interfaces/dummyMeme";
import React from "react";
import "./App.css";
import Header from "./components/ui/Header/Header";
import MemeForm from "./components/feature/MemeForm/MemeForm";
import FlexHLayout from "./components/layout/FlexHLayout/FlexHLayout";
import { REST_ADR } from "./config/config";
import { store, uneValeurASupprimerApresImplementation } from "./store/store";
import Button from "./components/ui/Buttonts/Button";
import { addImage } from "./store/listes";
import MemeSVGViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";

interface IAppState {}
interface IAppProps {}

class App extends React.PureComponent<IAppProps, IAppState> {
  render() {
    return (
      <div className="App">
        <Button
          onButtonClick={() => {
            store.dispatch(
              addImage({
                h: 1000,
                w: 50,
                url: "dfg.jpg",
                id: 123,
                name: "coucou",
              })
            );
          }}
          children={"addimg"}
        />
        <Header />
        <FlexHLayout myStyle={{ height: "89vh" }}>
          <MemeSVGViewer />
          <MemeForm />
        </FlexHLayout>
      </div>
    );
  }
}
export default App;
