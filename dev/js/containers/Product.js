import React from 'react';


class Product extends React.Component{
  render() {
    console.log(this.props.handleClick)
    return(
      <div>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default Product;