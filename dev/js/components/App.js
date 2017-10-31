import React from 'react';
import CounterButton from './CounterButton'
import SubmitButton from './SubmitButton'

class App extends React.Component {
  render() {
    return(
      <div>
        <CounterButton/>
        <SubmitButton/>
        <h1> Redux ur complete</h1>
      </div>
    );
  }
}



export default App