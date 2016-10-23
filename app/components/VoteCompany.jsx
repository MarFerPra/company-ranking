var React = require("react");

module.exports = React.createClass({

    handleChange: function(event){
      if(event.target.id === 'company-name'){
        this.setState({
          companyName: event.target.value
        })
      }

      if(event.target.id === 'company-description'){
        this.setState({
          companyDescription: event.target.value
        })
      }
    },

    handleSubmit: function(event){
      if(this.state.companyName && this.state.companyScore && this.state.userName){
        $.ajax({
          url: '',
          data: {
            userName: this.state.userName,
            companyName: this.state.companyName,
            companyScore: this.state.companyScore
          },
          success: function(response){
            this.setState({
              userName: null,
              companyName: null,
              companyScore: null
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
                  <strong>Vote company</strong>
                </h5>
                <div className="form-group">
                    <input
                      type="text"
                      className="form-control centered-input"
                      id="user-name"
                      placeholder="User name"
                      onChange={this.handleChange}
                      />

                      <input type="text"
                        className="form-control centered-input"
                        id="company-name"
                        placeholder="Company name"
                        onChange={this.handleChange}
                        />

                    <input type="text"
                      className="form-control centered-input"
                      id="company-score"
                      placeholder="Score"
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
