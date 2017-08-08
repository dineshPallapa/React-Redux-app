import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import Product from './Product';
import handleClick from '../actions/index'

class Products extends React.Component{
  
  handleClick(id) {
  }
  render() {
    return(
      <div>
        <div>
          {this.props.products.map((product) => {
            return (
              <Product key={product.id} {...product} handleClick  = {this.props.handleClick(product.id)} />
            )
           }  
          )}
          <button onClick={this.props.handleClick}>Add to cart</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}
function mapDispatchToProps(dispatch){
  console.log(handleClick)
  return bindActionCreators({handleClick: handleClick}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);