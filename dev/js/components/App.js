import React from 'react';
import UserList from '../containers/user-details';
import UserDetails from '../containers/user-list';
import CoursePage from '../containers/coursePage';
import {CounterButton} from './CounterButton'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this   )
  }
  ComponentDidMount() {
    window.addEventListener('resize',this.onResize)
  }

  shouldComponentUpdate() {

  }
  onResize(e) {
    console.log(e)
  }
  render() {
    return(
      <div>
        <h1> Redux ur complete</h1> <hr />
        <h1> user list</h1>
        <h1> user selected</h1>
        <UserDetails />
        <UserList />
        <CoursePage />
        <CounterButton />
      </div>
    );
  }
}



export default App