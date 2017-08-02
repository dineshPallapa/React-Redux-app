import React,{component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends React.Component{
  render() {
    return(
      <ul>
      <li>{this.props.user.first}</li>
      </ul>
    );
  }
}
function mapStateToProps(state) {
    console.log(state)
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetails);