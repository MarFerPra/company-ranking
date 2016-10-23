var React = require("react");
var CreateUser = require('./ActionComponents/CreateUser.jsx');
var CreateCompany = require('./ActionComponents/CreateCompany.jsx');
var VoteCompany = require('./ActionComponents/VoteCompany.jsx');

module.exports = React.createClass({

    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading text-center">ACTIONS</div>
                <div className="panel-body actions-wrapper">
                    <div className="row">
                        <div className="col-md-12"><CreateUser displayMessage={this.props.displayMessage} /></div>

                        <div className="col-md-12">
                            <div className="horizontal-line"></div>
                        </div>

                        <div className="col-md-12"><CreateCompany displayMessage={this.props.displayMessage} /></div>

                        <div className="col-md-12">
                            <div className="horizontal-line"></div>
                        </div>

                        <div className="col-md-12"><VoteCompany displayMessage={this.props.displayMessage} /></div>
                    </div>
                </div>
            </div>
        )
    }
});
