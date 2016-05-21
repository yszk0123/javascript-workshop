import {
  SEARCH_TEXT_CHANGED,
  SEARCH_TAGS_CHANGED
} from './constants';

export const changeSearchText = (value) => ({
  type: SEARCH_TEXT_CHANGED,
  payload: { value }
});

export const changeSearchTags = (value) => ({
  type: SEARCH_TAGS_CHANGED,
  payload: { value }
});
