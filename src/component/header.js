import React from "react";

class Header extends React.Component{
	render(){
		return(

			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container">
			<img src="./bus_icon.jpg"/>
  			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  			</button>
  			<div className="collapse navbar-collapse" id="navbarColor01">
    			<ul className="navbar-nav mr-auto">
      			<li className="nav-item active">
        			<a className="nav-link" >React App<span className="sr-only">(current)</span></a>
      			</li>
      			<li className="nav-item">
        			<a className="nav-link" href="#">Timetables</a>
      			</li>
      			<li className="nav-item">
        			<a className="nav-link" href="#">Pricing</a>
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
}

export default Header;