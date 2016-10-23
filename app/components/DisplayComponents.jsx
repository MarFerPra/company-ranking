var React = require("react");
var UserList = require('./DisplayComponents/UserList.jsx');
var CompanyList = require('./DisplayComponents/CompanyList.jsx');

module.exports = React.createClass({

    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading text-center">DB Information</div>
                <div className="panel-body actions-wrapper">
                    <div className="row">
                        <div className="col-md-12"><UserList /></div>

                        <div className="col-md-12">
                            <div className="horizontal-line"></div>
                        </div>

                        <div className="col-md-12"><CompanyList /></div>

                    </div>
                </div>
            </div>
        )
    }
});
