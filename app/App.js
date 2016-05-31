var React = require('react')
var Router = require('react-router')
var ReactDom = require('react-dom')
var routes = require('./config/routes')

Router.run(routes, function(Root){
  ReactDom.render(<Root />, document.getElementById('app'))
})
