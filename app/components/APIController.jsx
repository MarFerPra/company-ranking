var React = require("react");
var ActionComponents = require('./ActionComponents.jsx')
var DisplayComponents = require('./DisplayComponents.jsx')

module.exports = React.createClass({

    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 centered-text">
                        <MessagePanel/>
                    </div>
                    <div className="col-md-6">
                        <ActionComponents/>
                    </div>
                    <div className="col-md-6">
                        <DisplayComponents/>
                    </div>
                </div>
            </div>
        )
    }
});

var MessagePanel = React.createClass({
    render: function() {
        return (
            <div>
                This is the message panel
            </div>
        )
    }
});
