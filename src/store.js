import ProfileReducer from './Reducers/ProfileReducer'
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
  profile: ProfileReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}


export default configureStore;
