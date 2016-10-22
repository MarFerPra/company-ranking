var React = require("react");
var ReactDOM = require("react-dom");

var APIController = require("./APIController.jsx");

function mountComponents(){
  ReactDOM.render(<APIController />, document.getElementById("api-controller"));
}

mountComponents();
