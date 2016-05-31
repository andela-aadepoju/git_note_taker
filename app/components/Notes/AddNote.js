var React = require('react')
var ReactDom = require('react-dom')

var AddNote = React.createClass({
  propTypes:{
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  handleSubmit: function() {
    var newNote = ReactDom.findDOMNode(this.refs.note).value
    ReactDom.findDOMNode(this.refs.note).value = ''
    this.props.addNote(newNote)
  },
  render: function() {
    return(
      <div className='input-group'>
        <input type='text' className="form-control" ref='note' placeholder='Add New Note' />
        <span className='input-group-btn'>
          <button className='btn btn-info' type='button' onClick={this.handleSubmit}>
            Submit
          </button>
        </span>
      </div>
    )
  }
})

module.exports = AddNote;
