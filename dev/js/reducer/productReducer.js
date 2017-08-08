let intialState = [
  {id:1, name:'tv', cost: 1000},
  {id:2, name:'videocard', cost: 1001}
]

export default function products(state=intialState,action) {
  switch(action.type) {
    case "ADD_TO_CART":
      return action.payload
    default:
      return state
  }
}
