import React from 'react';


class ReactChildren extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <Parent>
        <h1>Hi</h1>
        <h1>Hello</h1>
        <h1>Bye</h1>
      </Parent>
    );
  }
}

class Parent extends React.Component {
  render() {
    /* let items = this.props.children.map(child => child) *//* for single child*/
    let items = React.Children.map(this.props.children, child => child)
    console.log(items)
    return(
      <div>
        {this.p}
      </div>
    );
  }
}


export default ReactChildren