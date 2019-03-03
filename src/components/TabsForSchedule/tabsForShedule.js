import React from "react";
import ListNumbers from "./ListNumbers/listNumbers"

const TabsForShedule = (props) =>{

  return(
    <div  >
      <br/>
      <div className="container"  >
        <ul className="nav nav-tabs text-center">
          <li className="nav-item">
            <a className="nav-link active text-black" data-toggle="tab" href="#btwn0_100" >0-100</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwn101_200">101-200</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwn201_300">201-300</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwn301_400">301-400</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwn401_500">401-500</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwn501_600">501-600</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwn601_700">601-700</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwn701_800">701-800</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwn801_900">801-900</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwn900_1000">900-1000</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwnA_K">A-K</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" data-toggle="tab" href="#btwnN_Z">N-Z</a>
          </li>
          </ul>
          <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade active show" id="btwn0_100">
              <ListNumbers testArray={props.state.tabsForShedulePage.btwn0_100}/>
          </div>
          <div className="tab-pane fade" id="btwn101_200">
            <ListNumbers testArray={props.state.tabsForShedulePage.btwn101_200}/>
          </div>
          <div className="tab-pane fade" id="btwn201_300">
            <ListNumbers testArray={props.state.tabsForShedulePage.btwn201_300}/>
            </div>
          <div className="tab-pane fade" id="btwn301_400">
          <ListNumbers testArray={props.state.tabsForShedulePage.btwn301_400}/>
            </div>
          <div className="tab-pane fade" id="btwn401_500">
          <ListNumbers testArray={props.state.tabsForShedulePage.btwn401_500}/>
            </div>
          <div className="tab-pane fade" id="btwn501_600">
          <ListNumbers testArray={props.state.tabsForShedulePage.btwn501_600}/>
            </div>
          <div className="tab-pane fade" id="btwn601_700">
          <ListNumbers testArray={props.state.tabsForShedulePage.btwn601_700}/>
            </div>
          <div className="tab-pane fade" id="btwn701_800">
          <ListNumbers testArray={props.state.tabsForShedulePage.btwn701_800}/>
            </div>
          <div className="tab-pane fade" id="btwn801_900">
          <ListNumbers testArray={props.state.tabsForShedulePage.btwn801_900}/>
            </div>
          <div className="tab-pane fade" id="btwn900_1000">
          <ListNumbers testArray={props.state.tabsForShedulePage.btwn901_1000}/>
            </div>
          <div className="tab-pane fade" id="btwnA_K">
          <ListNumbers testArray={props.state.tabsForShedulePage.btwnA_K}/>
            </div>
          <div className="tab-pane fade" id="btwnN_Z">
            <ListNumbers testArray={props.state.tabsForShedulePage.btwnN_Z}/>
            </div>
          </div>
        </div>
    </div>
    );
}
export default TabsForShedule;
