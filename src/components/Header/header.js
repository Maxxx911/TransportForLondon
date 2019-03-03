import React from "react";
import {NavLink} from "react-router-dom";

const Header = (props) =>{
		return(

			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container">
  			<div className="collapse navbar-collapse" id="navbarColor01">
    			<ul className="navbar-nav mr-auto">
      			<li className="nav-item active">
        			<NavLink to="/"  className="nav-link" >React App<span className="sr-only">(current)</span></NavLink>
      			</li>

      			<li className="nav-item">
        			<NavLink className="nav-link"  to="/">Home</NavLink>
      			</li>
      			<li className="nav-item">
        			<NavLink className="nav-link" to="/timetables" >Timetables</NavLink>
      			</li>
      			<li className="nav-item">
        			<a className="nav-link" href="#">About</a>
      			</li>
    			</ul>
  			</div>
				</div>
			</nav>

		);
	}

export default Header;
