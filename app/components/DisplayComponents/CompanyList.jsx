var React = require("react");
var $ = require('jQuery');

module.exports = React.createClass({

    getInitialState: function() {
        return {companies: []}
    },

    componentDidMount: function(){
      this.fetchCompanyList();

      $(document).on('update-company-list', this.fetchCompanyList);
    },

    fetchCompanyList: function() {
      $.ajax({
        url: '/api/companies',
        type: 'GET',
        success: function(response){
          this.setState({
            companies: response
          });
        }.bind(this)
      })
    },


    render: function() {
        return (
            <div>
                <h5 className="text-center">
                    <strong>Company List</strong>
                </h5>

                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">Score</th>
                            <th className="text-center">Id</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.companies ? this.state.companies.map(function(company){
                        return(
                          <tr>
                              <td>{company.name}</td>
                              <td>{company.total_score}</td>
                              <td>{company._id}</td>
                            </tr>
                        )
                      }) : null }
                    </tbody>
                </table>
            </div>
        )
    }
});
