// Include React
var React = require("react");

var Home = React.createClass({
  render: function() {
    return (
      <div className="container">
                 <div className="topBackground">
                    <center>
                      <img src="images/echoingWall.svg" className="logo"/>
                    </center>
                    <center>
                      <a href="#/Home/Login" id="loginButton" className="btn btn-warning btn-sm">Login</a>
                       <a href="#/Home/Signup" id="signButton" className="btn btn-success btn-sm">Signup></a>
                    </center>
                </div>
                <div>
                {this.props.children}
                </div>
               
      </div>
    );
  }
});

module.exports = Home;
