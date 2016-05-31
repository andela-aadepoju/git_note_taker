var React = require('react')
var Router = require('react-router')
var ReactDom = require('react-dom')

var SearchGithub = React.createClass({
  mixins: [Router.Navigation],
  handleSubmit: function() {
    var username = ReactDom.findDOMNode(this.refs.username).value
    ReactDom.findDOMNode(this.refs.username).value = ''
    this.transitionTo('profile', {username})
  },
  render: function() {
    return(
      <div className='col-md-12'>
        <form onSubmit={this.handleSubmit}>
          <div className='col-md-7 form-group'>
            <input type='text' className='form-control' ref='username' />
          </div>
          <div className='form-group col-md-5'>
            <button type='submit' className='btn btn-block btn-info'>
              Search Github
            </button>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = SearchGithub;
