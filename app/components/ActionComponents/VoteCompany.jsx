var React = require("react");
var $ = require('jQuery');

module.exports = React.createClass({

  getInitialState: function(){
  return{
    userName: "",
    companyName: "",
    companyScore: ""
  }
},

    handleChange: function(event){
      if(event.target.id === 'company-name'){
        this.setState({
          companyName: event.target.value
        })
      }

      if(event.target.id === 'user-name'){
        this.setState({
          userName: event.target.value
        })
      }

      if(event.target.id === 'company-score'){
        this.setState({
          companyScore: event.target.value
        })
      }

    },

    handleSubmit: function(event){
      if(this.state.companyName && this.state.companyScore && this.state.userName){
        $.ajax({
          url: '/api/company/vote',
          data: {
            userName: this.state.userName,
            companyName: this.state.companyName,
            companyScore: this.state.companyScore
          },
          success: function(response){
            this.setState({
              userName: "",
              companyName: "",
              companyScore: ""
            }, this.props.displayMessage(response));
            console.log(response);
          }.bind(this)
        })
      }
    },

    render: function() {
        return (
            <div className="text-center">
                <h5>
                  <strong>Vote company</strong>
                </h5>
                <div className="form-group">
                    <input
                      type="text"
                      className="form-control centered-input"
                      id="user-name"
                      placeholder="User name"
                      value={this.state.userName}
                      onChange={this.handleChange}
                      />

                      <input type="text"
                        className="form-control centered-input"
                        id="company-name"
                        placeholder="Company name"
                        onChange={this.handleChange}
                        value={this.state.companyName}
                        />

                    <input type="text"
                      className="form-control centered-input"
                      id="company-score"
                      placeholder="Score"
                      onChange={this.handleChange}
                      value={this.state.companyScore}
                      />
                </div>

                <button type="button"
                 onClick={this.handleSubmit}
                 className="btn btn-primary btn-sm">
                  Vote
                 </button>

            </div>
        )
    }
});
