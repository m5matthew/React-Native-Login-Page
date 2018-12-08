// We speciify the name of the action as a variable
export const ADD_FIRST_NAME = 'ADD_FIRST_NAME'
export const ADD_LAST_NAME = 'ADD_LAST_NAME'
export const ADD_MAJOR = 'ADD_MAJOR'
export const ADD_YEAR = 'ADD_YEAR'
export const ADD_USERNAME = 'ADD_USERNAME'
export const ADD_EMAIL = 'ADD_EMAIL'

// This is an action creator, it simply specifies the action.
// this is what we call to send an action.
export const addFirstName = firstName => {
  return {
    type: ADD_FIRST_NAME,
    firstName: firstName,
  }
}
export const addLastName = lastName => {
  return {
    type: ADD_LAST_NAME,
    lastName: lastName,
  }
}
export const addMajor = major => {
  return {
    type: ADD_MAJOR,
    major: major,
  }
}
export const addYear = year => {
  return {
    type: ADD_YEAR,
    year: year,
  }
}
export const addUsername = username => {
  return {
    type: ADD_USERNAME,
    username: username,
  }
}
export const addEmail = email =>{
  return{
    type: ADD_EMAIL,
    email: email,
  }
}
