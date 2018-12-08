import { ADD_FIRST_NAME, ADD_LAST_NAME, ADD_MAJOR, ADD_YEAR, ADD_USERNAME, ADD_EMAIL } from '../Actions/actions';

const initialState = {
  firstName: '',
  lastName:'',
  major:'',
  year:'',
  username:'',
  email:'',
};

const ProfileReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName
      };
    case ADD_LAST_NAME:
      return{
        ...state,
        lastName: action.lastName
      };
    case ADD_MAJOR:
      return {
        ...state,
        major: action.major
      };
    case ADD_YEAR:
      return {
        ...state,
        year: action.year
      };
    case ADD_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case ADD_EMAIL:
      return{
        ...state,
        email: action.email
      }
    default:
      return state;
  }
}

export default ProfileReducer;
