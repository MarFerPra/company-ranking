var React = require("react");
var $ = require('jQuery');

module.exports = React.createClass({

    getInitialState: function() {
      return{
        users: []
      }
    },
    componentDidMount: function(){
      this.fetchUsersList();

      $(document).on('update-user-list', this.fetchUsersList);
    },

    fetchUsersList: function() {
      $.ajax({
        url: '/api/users',
        type: 'GET',
        success: function(response){
          this.setState({
            users: response
          });
          console.log(response);
        }.bind(this)
      })
    },


    render: function() {
        return (
            <div>
                <h5 className="text-center">
                    <strong>Users List</strong>
                </h5>

                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Id</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.users ? this.state.users.map(function(user){
                        return(
                          <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user._id}</td>
                          </tr>
                        )
                      }) : null }
                    </tbody>
                </table>
            </div>
        )
    }
});
