var React = require("react");
var $ = require('jQuery');

module.exports = React.createClass({

  getInitialState: function(){
    return{
      companyName: "",
      companyDescription: ""
    }
  },

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
      if(this.state.companyName && this.state.companyDescription){
        $.ajax({
          url: '/api/companies',
          type: 'POST',
          data: {
            name: this.state.companyName,
            description: this.state.companyDescription
          },
          success: function(response){
            
            if(response.success){
              $(document).trigger('update-company-list')
            }

            this.setState({
              companyName: "",
              companyDescription: ""
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
                  <strong>Create Company</strong>
                </h5>
                <div className="form-group">
                    <input
                      type="text"
                      className="form-control centered-input"
                      id="company-name"
                      placeholder="Name"
                      onChange={this.handleChange}
                      value={this.state.companyName}
                      />

                    <input type="text"
                      className="form-control centered-input"
                      id="company-description"
                      placeholder="Description"
                      onChange={this.handleChange}
                      value={this.state.companyDescription}
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
