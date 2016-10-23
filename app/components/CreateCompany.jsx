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
      if(this.state.companyName && this.state.companyDescription){
        $.ajax({
          url: '',
          data: {
            companyName: this.state.companyName,
            companyDescription: this.state.companyDescription
          },
          success: function(response){
            this.setState({
              companyName: null,
              companyDescription: null
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
                  <strong>Create Company</strong>
                </h5>
                <div className="form-group">
                    <input
                      type="text"
                      className="form-control centered-input"
                      id="company-name"
                      placeholder="Name"
                      onChange={this.handleChange}
                      />

                    <input type="text"
                      className="form-control centered-input"
                      id="company-description"
                      placeholder="Description"
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
