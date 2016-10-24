var React = require("react");
var $ = require('jQuery');

module.exports = React.createClass({

  getInitialState: function(){
    return{
      userName: "",
      userEmail: ""
    }
  },

    handleChange: function(event){
      if(event.target.id === 'user-name'){
        this.setState({
          userName: event.target.value
        })
      }

      if(event.target.id === 'user-email'){
        this.setState({
          userEmail: event.target.value
        })
      }
    },

    handleSubmit: function(event){
      if(this.state.userName && this.state.userEmail){
        $.ajax({
          url: '/api/users',
          type: 'POST',
          data: {
            name: this.state.userName,
            email: this.state.userEmail
          },
          success: function(response){

            if(response.success){
              $(document).trigger('update-user-list')
            }

            this.setState({
              userName: "",
              userEmail: ""
            }, this.props.displayMessage(response));
          }.bind(this)
        })
      }
    },

    render: function() {
        return (
            <div className="text-center">
                <h5>
                  <strong>Create User</strong>
                </h5>
                <div className="form-group">
                    <input
                      type="text"
                      className="form-control centered-input"
                      id="user-name"
                      placeholder="Name"
                      onChange={this.handleChange}
                      value={this.state.userName}
                      />

                    <input type="text"
                      className="form-control centered-input"
                      id="user-email"
                      placeholder="Email"
                      onChange={this.handleChange}
                      value={this.state.userEmail}
                      />
                </div>

                <button type="button"
                 onClick={this.handleSubmit}
                 className="btn btn-primary btn-sm">
                  Submit
                 </button>

            </div>
        )
    }
});
