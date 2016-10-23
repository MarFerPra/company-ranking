var React = require("react");
var CreateUser = require('./CreateUser.jsx');
var CreateCompany = require('./CreateCompany.jsx');
var VoteCompany = require('./VoteCompany.jsx');

module.exports = React.createClass({

    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading text-center">ACTIONS</div>
                <div className="panel-body actions-wrapper">
                    <div className="row">
                        <div className="col-md-12"><CreateUser /></div>

                        <div className="col-md-12">
                            <div className="horizontal-line"></div>
                        </div>

                        <div className="col-md-12"><CreateCompany /></div>

                        <div className="col-md-12">
                            <div className="horizontal-line"></div>
                        </div>

                        <div className="col-md-12"><VoteCompany /></div>
                    </div>
                </div>
            </div>
        )
    }
});
