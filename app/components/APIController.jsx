var React = require("react");
var $ = require('jQuery');
var ActionComponents = require('./ActionComponents.jsx');
var DisplayComponents = require('./DisplayComponents.jsx');

module.exports = React.createClass({

    getInitialState: function() {
        return {message: null}
    },

    displayMessage: function(msg) {
        this.setState({message: msg});
    },

    render: function() {
      console.log("rendering.")
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 centered-text">
                            { this.state.message
                                ? (<MessagePanel text={this.state.message.text} success={this.state.message.success} />)
                                : null}
                        </div>
                        <div className="col-md-6">
                            <ActionComponents displayMessage={this.displayMessage}/>
                        </div>
                        <div className="col-md-6">
                            <DisplayComponents displayMessage={this.displayMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

var MessagePanel = React.createClass({

  componentDidUpdate: function(){
    setTimeout(function(){
      $('.message-panel').slideUp();
    }, 5000);
  },

    renderSuccess: function() {
        return (
            <div className="text-center message-panel success-message">
                <p className="message-text">{this.props.text}</p>
            </div>
        )
    },

    renderWarning: function() {
        return (
            <div className="text-center message-panel warning-message">
                <p className="message-text">{this.props.text}</p>
            </div>
        )
    },

    render: function() {
        return (
            <div>
                { this.props.success ? this.renderSuccess() : this.renderWarning() }
            </div>
        )
    }
});
