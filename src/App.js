import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header/header";
import Hello from "./components/HelloPage/helloPage";
import TabsForShedule from "./components/TabsForSchedule/tabsForShedule"
import BusStation from "./components/TabsForSchedule/ListNumbers/busStationPage/busStation"


const App = (props) => {

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" render = {()=> <Hello/>} />
          <Route exact path="/timetables"
            render = { () => <TabsForShedule state={props.state}/>   }/>
          <Route exact path="/timetables/stoppoints/:id"
            render = { (data)=> <BusStation
             addStopPointMethod = {props.addStopPointMethod}
             st={data}
             getStopPointsMethod = {props.getStopPointsMethod}
             clearStopPointMethod = {props.clearStopPointMethod}
             /> }
            />
        </div>
      </BrowserRouter>
      );
  }
export default App;
