let intialstate = []

export default function cart(state=intialstate,action) {
  switch(action.type) {
    case "ADD_TO_cart" :
      return [...state, action.payload.id]
    case "ADD_TO_cart" :
      return state.filter(id => id !== action.payload.id)
    default:
      return state
  }
}
