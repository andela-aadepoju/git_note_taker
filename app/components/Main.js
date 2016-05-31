var React = require('react')
var ReactDom = require('react-dom')
var RouteHandler = require('react-router').RouteHandler
var SearchGithub = require('./SearchGithub')

var Main = React.createClass({
  render: function() {
    return(
      <div className='main-container'>
        <div className='row'>
          <nav className='navbar navbar-inverse' role='navigation'>
            <div className='col-sm-7 col-sm-offset-2' style={{marginTop: 15}}>
              <SearchGithub />
            </div>
          </nav>
          <div className='container'>
            <RouteHandler />
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Main;
