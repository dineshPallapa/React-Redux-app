export const handleClick = (id) => {
  console.log(id)
  return {
    type: "ADD_TO_CART",
    payload: id 
  }
} 

export default handleClick;