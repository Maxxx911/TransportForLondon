import React from "react";
import Header from "./header";


const API_KEY = "4e8a04bb22cc01212b079df026d6ee9c";
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

let gettingAllTransport = async (e) => {
  e.preventDefault();
  //const API_URL = await
 // fetch(`https://api.tfl.gov.uk/line/${number}/stoppoints`);
  const api_bus_url = await
  fetch("https://api.tfl.gov.uk/line/mode/bus/status");
  const bus_data = await api_bus_url.json();
  console.log(bus_data);
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
    betwenZeroAndOneHungreed.sort();
    betwenOneHungreedAndTwoHungreed.sort();
    betwenTwoHungreedAndThreeHungreed.sort();
    betwenThreeHungreedAndFourHungreed.sort();
    betwenFourHungreedAndFiveHungreed.sort();
    betwenFiveHungreedAndSixHungreed.sort();
    betwenSixHungreedAndSevenHungreed.sort();
    betwenSevenHungreedAndEightHungreed.sort();
    betwenEightHungreedAndNineHungreed.sort();
    aboveNineHungreed.sort();

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
}



//добавить border для divа
const MainComponent = (props) =>{
  return(
    <div  >
    <Header/>
      <br/>
      <div className="container App_div_block"  >
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#btwn0_100" >0-100</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwn101_200">101-200</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwn201_300">201-300</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwn301_400">301-400</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwn401_500">401-500</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwn501_600">501-600</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwn601_700">601-700</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwn701_800">701-800</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwn801_900">801-900</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwn900_1000">900-1000</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwnA_K">A-K</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#btwnN_Z">N-Z</a>
          </li>
          </ul>
          <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade active show" id="btwn0_100">

          </div>
          <div className="tab-pane fade" id="btwn101_200">
          </div>
          <div className="tab-pane fade" id="btwn201_300">
            </div>
          <div className="tab-pane fade" id="btwn301_400">
            </div>
          <div className="tab-pane fade" id="btwn401_500">
            </div>
          <div className="tab-pane fade" id="btwn501_600">
            </div>
          <div className="tab-pane fade" id="btwn601_700">
            </div>
          <div className="tab-pane fade" id="btwn701_800">
            </div>
          <div className="tab-pane fade" id="btwn801_900">
            </div>
          <div className="tab-pane fade" id="btwn900_1000">
            </div>
          <div className="tab-pane fade" id="btwnA_K">
            </div>
          <div className="tab-pane fade" id="btwnN_Z">
            </div>
          </div>
        </div>
    </div>
    );
}
export default MainComponent;
