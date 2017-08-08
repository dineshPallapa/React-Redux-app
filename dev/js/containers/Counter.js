import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
  constructor() {
    super();
    this.state ={
      increasing: false
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val })
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    console.log("SCU")
    return nextProps.val%4 === 0;
  }
  componentWillUpdate(prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
    console.log("CWU")
  }
  update() {
    ReactDOM.render(<Counter val={this.props.val+1}/>, document.getElementById('root') )
  }
  render() {
    console.log(this.state.increasing)
    return(
      <div>
        <button onClick={this.update.bind(this)}>{this.props.val}</button>
      </div>
    )
  }
}

Counter.defaultProps={val: 0}

export default Counter;