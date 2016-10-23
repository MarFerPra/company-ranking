var React = require("react");

module.exports = React.createClass({

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
          url: '',
          data: {
            userName: this.state.userName,
            userEmail: this.state.userEmail
          },
          success: function(response){
            this.setState({
              userName: null,
              userEmail: null
            });
            console.log(response);
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
                      />

                    <input type="text"
                      className="form-control centered-input"
                      id="user-email"
                      placeholder="Email"
                      onChange={this.handleChange}
                      />
                </div>

                <button type="button"
                 onClick={this.handleSubmit}
                 className="btn btn-primary btn-sm">
                  Create
                 </button>

            </div>
        )
    }
});
