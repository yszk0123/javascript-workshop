import assign from 'object-assign';
import { SEARCH_TEXT_CHANGED, SEARCH_TAGS_CHANGED } from './constants';

function searchReducer(state = { text: '', tags: [] }, action) {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED:
      return assign({}, state, {
        text: action.payload.value
      });
    case SEARCH_TAGS_CHANGED:
      return assign({}, state, {
        tags: action.payload.value
      });
    default:
      return state;
  }
}

function contentsReducer(state = __INITIAL_STATE__, action) {
  return state;
}

export default {
  search: searchReducer,
  contents: contentsReducer
};
