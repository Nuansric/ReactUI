// Include React
var React = require("react");

var Signup = React.createClass({
  render: function() {
    return (
     <div className="signUpBackground">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">

          <form className="submitForm" id="moveToBottom">

            <div className="form-group">
            
              <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
            </div>

            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
            </div>

            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
            </div>

            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Validate Email"/>
            </div>

            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>

            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" Validate Password"/>
            </div>
           
          </form>


          </div>
        </div>
      </div>






        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
      </div>
  


    );
  }
});

module.exports = Signup;