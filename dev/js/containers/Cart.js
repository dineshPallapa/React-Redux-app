import React from 'react';
import {connect} from 'react-redux';

import Product from './Product'

class Cart extends React.Component{
  render() {
    return(
      <div>
        
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  products: state.products
}



export default connect(mapStateToProps)(Cart);