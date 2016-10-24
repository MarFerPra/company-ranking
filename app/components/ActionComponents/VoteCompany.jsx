var React = require("react");
var $ = require('jQuery');

module.exports = React.createClass({

  getInitialState: function(){
  return{
    userId: "",
    companyId: "",
    companyScore: ""
  }
},

    handleChange: function(event){
      if(event.target.id === 'company-id'){
        this.setState({
          companyId: event.target.value
        })
      }

      if(event.target.id === 'user-id'){
        this.setState({
          userId: event.target.value
        })
      }

      if(event.target.id === 'company-score'){
        this.setState({
          companyScore: event.target.value
        })
      }

    },

    handleSubmit: function(event){
      if(this.state.companyId && this.state.companyScore && this.state.userId){
        $.ajax({
          url: '/api/company/vote',
          type: 'POST',
          data: {
            user_id: this.state.userId,
            company_id: this.state.companyId,
            score: this.state.companyScore
          },
          success: function(response){

            if(response.success){
              $(document).trigger('update-company-list')
            }

            this.setState({
              userId: "",
              companyId: "",
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
                      id="user-id"
                      placeholder="User id"
                      value={this.state.userId}
                      onChange={this.handleChange}
                      />

                      <input type="text"
                        className="form-control centered-input"
                        id="company-id"
                        placeholder="Company id"
                        onChange={this.handleChange}
                        value={this.state.companyId}
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
