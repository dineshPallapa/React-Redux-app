import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-activeUser';
import courses from './courseReducer';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer,
  courses
})

export default allReducers;