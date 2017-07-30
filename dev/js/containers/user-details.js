import React,{component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../actions/index'

class UserDetails extends React.Component{
  loopUsers() {
    console.log(this.props.users)
    return this.props.users.map((user) => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first}</li>
      );
    })
  }
  render() {
    return(
      <ul>
      <li>hi</li>
        {this.loopUsers()}
      </ul>

    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch)
}
export default connect(mapStateToProps,mapDispatch)(UserDetails);