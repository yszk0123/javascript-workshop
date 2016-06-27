import { combineReducers } from 'redux';

function exercisesReducer(state = exercises, _action) {
  return state;
}

export default combineReducers({
  exercises: exercisesReducer
});
