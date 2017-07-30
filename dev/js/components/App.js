import React from 'react';
import UserList from '../containers/user-details'
import UserDetails from '../containers/user-list'
class App extends React.Component {
  render() {
    return(
      <div>
        <h1> Redux ur complete</h1> <hr />
        <h1> user list</h1>
        <h1> user selected</h1>
        <UserList />
        <UserDetails />

      </div>
    );
  }
}



export default App