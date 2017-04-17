// Include React
var React = require("react");
var Home = require("../Home");
var Echoes = require("../Echoes");

CheckCookies : void function (){

    var IsCookieValid = true;

};

var DefaultComponent = React.createClass({
  render: function() {

    if(CheckCookies() == true)
      return ({Home});
    else
      return ({Echoes});
  }
});



module.exports = DefaultComponent;
