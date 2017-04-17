// Include React
var React = require("react");

var Login = React.createClass({
  render: function() {
    return (
      <div className="bottomBackground">
      <div className="container">
           <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <center>
                        <form className="submitForm">

                            <div className="form-group">
                         
                                 <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>

                            </div>

                             <div className="form-group">
            
                                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>

                            </div>
                            <div className="form-group">
            
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className="buttonsGrouped">
                             
                                    <button type="submit" className="btn btn-default pull-right">Submit</button>
                             
                             
                                     <button type="submit" className="btn btn-default pull-right" id="signUp">Sign Up</button>
                             
                            </div>
                        
                         </form>
                    </center>

                </div>
            </div>
    </div>
    </div>
    );
  }
});

module.exports = Login;