import * as types from '../constants/actionTypes'

export const createCourse = (course) => {
  return {type: types.CREATE_COURSE,course}
}