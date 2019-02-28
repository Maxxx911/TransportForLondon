import React from "react";
import Info from "./component/info";
import Form from "./component/form";
import BusStation from "./component/busStation";
import Header from "./component/header";
import SharedBlockBusRoute from "./component/sharedBlockBusRoute"
import AboveNine from "./component/listBusNumberComponents/aboveNineComponents"
import MainComponent from "./component/mainComponent"

const App = () => {
    return (
      <div>
        <Header/>
        <div className="App_div_block">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner cover">
              <h1 className="cover-heading">Cover your page.</h1>
              <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
              <p className="lead">
                <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
              </p>
            </main>
          </div>
        </div>
      </div>
      );
  }
export default App;
