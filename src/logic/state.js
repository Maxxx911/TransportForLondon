import React from "react";
import axios from "axios";

let store ={
  _state: {
    tabsForShedulePage:{
      btwn0_100: [],
      btwn101_200: [],
      btwn201_300: [],
      btwn301_400: [],
      btwn401_500: [],
      btwn501_600: [],
      btwn601_700: [],
      btwn701_800: [],
      btwn801_900: [],
      btwn901_1000: [],
      btwnA_K: [],
      btwnN_Z: []
    },
     allBus: [],
     stoppoints: [],
   },

   getState(){
     return this._state;
   },
   addStopPoint(stopPoint){
     this._state.stoppoints.push(stopPoint);
     this._reRenderTree();
   },
   getStopPoints(){
    return this._state.stoppoints;
  },
  _reRenderTree(){
    console.log("rrend");
  },
  clearStopPoint(){
    this._state.stoppoints = [];
    this._reRenderTree();
  },
  addBtwn0_100 (number){
    this._state.tabsForShedulePage.btwn0_100.push(number);
    this._reRenderTree();
  },
  addBtwn101_200 (number){
    this._state.tabsForShedulePage.btwn101_200.push(number);
    this._reRenderTree();
  },
  addBtwn201_300 (number){
    this._state.tabsForShedulePage.btwn201_300.push(number);
    this._reRenderTree();
  },
  addBtwn301_400 (number){
    this._state.tabsForShedulePage.btwn301_400.push(number);
    this._reRenderTree();
  },
  addBtwn401_500 (number){
    this._state.tabsForShedulePage.btwn401_500.push(number);
    this._reRenderTree();
  },
  addBtwn501_600 (number){
    this._state.tabsForShedulePage.btwn501_600.push(number);
    this._reRenderTree();
  },
  addBtwn601_700 (number){
    this._state.tabsForShedulePage.btwn601_700.push(number);
    this._reRenderTree();
  },
  addBtwn701_800 (number){
    this._state.tabsForShedulePage.btwn701_800.push(number);
    this._reRenderTree();
  },
  addBtwn801_900 (number){
    this._state.tabsForShedulePage.btwn801_900.push(number);
    this._reRenderTree();
  },
  addBtwn901_1000 (number){
    this._state.tabsForShedulePage.btwn901_1000.push(number);
    this._reRenderTree();
  },
  addBtwnA_K (number){

    this._state.tabsForShedulePage.btwnA_K.push(number);
    this._reRenderTree();
  },
  addBtwnN_Z (number){
    this._state.tabsForShedulePage.btwnN_Z.push(number);
    this._reRenderTree();
  },
  _sortBusNumber(bus_data){
     for(var i=0;i<bus_data.length;i++){
       if(bus_data[i].name>="A" & bus_data[i].name<="K"){
         this.addBtwnA_K(bus_data[i].name);
       }else if (bus_data[i].name>"N" & bus_data[i].name<="Z") {
         this.addBtwnN_Z(bus_data[i].name);
       }else if (+bus_data[i].name>0 & +bus_data[i].name<=100) {
         this.addBtwn0_100(bus_data[i].name);
       }else if (+bus_data[i].name>100 & +bus_data[i].name<=200) {
         this.addBtwn101_200(bus_data[i].name);
       }else if (+bus_data[i].name>200 & +bus_data[i].name<=300) {
         this.addBtwn201_300(bus_data[i].name);
       }else if (+bus_data[i].name>300 & +bus_data[i].name<=400) {
         this.addBtwn301_400(bus_data[i].name);
       }else if (+bus_data[i].name>400 & +bus_data[i].name<=500) {
         this.addBtwn401_500(bus_data[i].name);
       }else if (+bus_data[i].name>500 & +bus_data[i].name<=600) {
         this.addBtwn501_600(bus_data[i].name);
       }else if (+bus_data[i].name>600 & +bus_data[i].name<=700) {
         this.addBtwn601_700(bus_data[i].name);
       }else if (+bus_data[i].name>700 & +bus_data[i].name<=800) {
         this.addBtwn701_800(bus_data[i].name);
       }else if (+bus_data[i].name>800 & +bus_data[i].name<=900) {
         this.addBtwn801_900(bus_data[i].name);
       }else if (+bus_data[i].name>900 & +bus_data[i].name<=1000) {
         this.addBtwn901_1000(bus_data[i].name);
       }
     }
   },

   subscribe(observer){
     this._reRenderTree = observer;
   },

  async download (){
    const api_url = await fetch("https://api.tfl.gov.uk/line/mode/bus/status").
    then(response => response.json())
    .then(data => this._sortBusNumber(data));
  }
}





window.store = store;
export default store;
