import React,{component} from 'react';
import {connect} from 'react-redux';

class UserList extends React.Component{
  render() {
    return(
      <ul>
      <li>{this.props.user.first}</li>
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserList);