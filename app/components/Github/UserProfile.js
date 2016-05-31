var React = require('react')

var UserProfile = React.createClass({
  propTypes:{
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function(){
    return(
      <div>
        <h3>User Profile</h3>
        <ul className='list-group'>
          {this.props.bio.avatar_url && <li className='list-group-item'><img src={this.props.bio.avatar_url} className='img-thumbnail'/></li>}
          {this.props.bio.name && <li className='list-group-item'> <h4>Name: {this.props.bio.name}</h4></li>}
          {this.props.bio.login && <li className='list-group-item'> <h4>Username: {this.props.bio.login}</h4></li>}
          {this.props.bio.email && <li className='list-group-item'> <h4>Email: {this.props.bio.email}</h4></li>}
          {this.props.bio.location && <li className='list-group-item'> <h4>Location: {this.props.bio.location}</h4></li>}
          {this.props.bio.company && <li className='list-group-item'> <h4>Company: {this.props.bio.company}</h4></li>}
          {this.props.bio.followers && <li className='list-group-item'> <h4>Followers: {this.props.bio.followers}</h4></li>}
          {this.props.bio.following && <li className='list-group-item'> <h4>Following: {this.props.bio.following}</h4></li>}
          {this.props.bio.public_repos && <li className='list-group-item'> <h4>Public Repos: {this.props.bio.public_repos}</h4></li>}
          {this.props.bio.public_repos && <li className='list-group-item'> <h4>Blog: <a href={this.props.bio.blog} target='_blank'>{this.props.bio.blog}</a></h4></li>}

        </ul>
      </div>
    )
  }
})

module.exports = UserProfile;
