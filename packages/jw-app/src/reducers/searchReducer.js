import assign from 'object-assign';
import { SEARCH_TEXT_CHANGED, SEARCH_TAGS_CHANGED } from '../constants';

// TODO: tags の初期値を自動で推測する
export default function searchReducer(state = { text: '', tags: ['es5', 'es6'] }, action) {
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