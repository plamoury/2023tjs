import { MemeInterface, MemeSVGViewer, ImageInterface } from "orsys-tjs-meme";
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

interface IAppState {
  meme: MemeInterface;
  images: Array<ImageInterface>;
}
interface IAppProps {}

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      meme: DummyMeme,
      images: [],
    };
  }
  componentDidMount(): void {
    /*    console.log(uneValeurASupprimerApresImplementation);
    fetch(`${REST_ADR}/images`)
      .then(
        (r) => r.json(),
        (r) => []
      )
      .then((ar) => this.setState({ images: ar }));
      */
  }
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
          <MemeSVGViewer
            basePath="/img/meme/"
            image={this.state.images.find((e) => {
              return e.id === this.state.meme.imageId;
            })}
            meme={this.state.meme}
          />
          <MemeForm
            meme={this.state.meme}
            images={this.state.images}
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
