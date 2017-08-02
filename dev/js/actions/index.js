import * as types from '../constants/actionTypes';
export const selectUser = (user) => {
  console.log(user)
  return{
    type: "USER_SELECTED",
    payload: user 
  }
} 