import React from "react";
import Info from "./component/info";
import Form from "./component/form";
import BusStation from "./component/busStation";


const API_KEY = "4e8a04bb22cc01212b079df026d6ee9c";

function compareNumeric(a,b){
  if(a>b) return 1;
  if(a<b) return -1;
}
class App extends React.Component {

 gettingAllTransport = async (e) => {
   e.preventDefault();
   const number = e.target.elements.num.value;
   //const API_URL = await
  // fetch(`https://api.tfl.gov.uk/line/${number}/stoppoints`);
   const api_bus_url = await
   fetch("https://api.tfl.gov.uk/line/mode/bus/status");
   const bus_data = await api_bus_url.json();
   console.log(bus_data);
   var betwenZeroAndOneHungreed = [];
   var betwenOneHungreedAndTwoHungreed = [];
   var betwenTwoHungreedAndThreeHungreed = [];
   var betwenThreeHungreedAndFourHungreed = [];
   var betwenFourHungreedAndFiveHungreed = [];
   var betwenFiveHungreedAndSixHungreed = [];
   var betwenSixHungreedAndSevenHungreed = [];
   var betwenSevenHungreedAndEightHungreed = [];
   var betwenEightHungreedAndNineHungreed = [];
   var aboveNineHungreed = [];
   var betwenLetterAAndLetterN = [];
   var betwenLetterNAndLetterZ = [];
   for(var i=0;i<bus_data.length;i++){
     if(bus_data[i].name < 'N' & bus_data[i].name > 'A' ) betwenLetterAAndLetterN.push(bus_data[i].name);
     if(bus_data[i].name < 'Z' & bus_data[i].name > 'N' ) betwenLetterNAndLetterZ.push(bus_data[i].name);
     if(+bus_data[i].name <= 100) betwenZeroAndOneHungreed.push(+bus_data[i].name);
     if(+bus_data[i].name > 100 & +bus_data[i].name <= 200 ) betwenOneHungreedAndTwoHungreed.push(+bus_data[i].name);
     if(+bus_data[i].name > 200 & +bus_data[i].name <= 300 ) betwenTwoHungreedAndThreeHungreed.push(+bus_data[i].name);
     if(+bus_data[i].name > 300 & +bus_data[i].name <= 400 ) betwenThreeHungreedAndFourHungreed.push(+bus_data[i].name);
     if(+bus_data[i].name > 400 & +bus_data[i].name <= 500 ) betwenFourHungreedAndFiveHungreed.push(+bus_data[i].name);
     if(+bus_data[i].name > 500 & +bus_data[i].name <= 600 ) betwenFiveHungreedAndSixHungreed.push(+bus_data[i].name);
     if(+bus_data[i].name > 600 & +bus_data[i].name <= 700 ) betwenSixHungreedAndSevenHungreed.push(+bus_data[i].name);
     if(+bus_data[i].name > 700 & +bus_data[i].name <= 800 ) betwenSevenHungreedAndEightHungreed.push(+bus_data[i].name);
     if(+bus_data[i].name > 800 & +bus_data[i].name <= 900 ) betwenEightHungreedAndNineHungreed.push(+bus_data[i].name);
     if(+bus_data[i].name > 900 & +bus_data[i].name <= 1000 ) aboveNineHungreed.push(+bus_data[i].name);
     }
     betwenZeroAndOneHungreed.sort(compareNumeric);
     betwenOneHungreedAndTwoHungreed.sort(compareNumeric);
     betwenTwoHungreedAndThreeHungreed.sort(compareNumeric);
     betwenThreeHungreedAndFourHungreed.sort(compareNumeric);
     betwenFourHungreedAndFiveHungreed.sort(compareNumeric);
     betwenFiveHungreedAndSixHungreed.sort(compareNumeric);
     betwenSixHungreedAndSevenHungreed.sort(compareNumeric);
     betwenSevenHungreedAndEightHungreed.sort(compareNumeric);
     betwenEightHungreedAndNineHungreed.sort(compareNumeric);
     aboveNineHungreed.sort(compareNumeric);

    console.log(betwenZeroAndOneHungreed);
    console.log(betwenOneHungreedAndTwoHungreed);
    console.log(betwenTwoHungreedAndThreeHungreed);
    console.log(betwenThreeHungreedAndFourHungreed);
    console.log(betwenFourHungreedAndFiveHungreed);
    console.log(betwenFiveHungreedAndSixHungreed);
    console.log(betwenSixHungreedAndSevenHungreed);
    console.log(betwenSevenHungreedAndEightHungreed);
    console.log(betwenEightHungreedAndNineHungreed);
    console.log(aboveNineHungreed);
    console.log(betwenLetterAAndLetterN);
    console.log(betwenLetterNAndLetterZ);
    if('N'>"1") console.log("yes");
    //Разбить на разные скрипты 
}

 render() {
    return (
      <div>
        <Info />
        <Form stopMethod = {this.gettingAllTransport} />
        <BusStation />
        <h2>Hello</h2>
      </div>
      );
  }
}
export default App;
