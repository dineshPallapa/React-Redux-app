import {combineReducers} from 'redux'
import products from './productReducer'
import cart from './cartReducer'


const allReducers = combineReducers({
  products,
  cart
})


export default allReducers;