import React from 'react';

export default class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }
  componentDidUpdate() {
    console.log("Didupdated")
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log("updated")
    console.log(nextProps.color)
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  } 

  render() {
    console.log("render")
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

