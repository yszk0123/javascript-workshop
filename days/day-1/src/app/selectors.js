import { createSelector } from 'reselect';

import ContentType from './ContentType';

export const searchSelector = (state) =>
  state.search;

// TODO: Don't use Array#find()
export const currentContentSelector = createSelector(
  [
    (state) => state.contents,
    (state, ownProps) => ownProps.location
  ],
  (contents, location) =>
    contents.find((content) => content.absolutePath === location.pathname)
);

export const contentsSelector = createSelector(
  [
    (state) => state.search.text,
    (state) => state.search.tags,
    (state) => state.contents
  ],
  (searchText, searchTags, contents) => {
    return contents.filter((content) =>
      (!searchText || content.title.indexOf(searchText) > -1) &&
      (!searchTags.length || content.tags.some((tag) => searchTags.indexOf(tag) > -1))
    );
  }
);

export const contentsGroupsSelector = createSelector(
  (state) => state.contents,
  (contents) => {
    const groupsByType = contents.reduce((acc, content) => {
      // eslint-disable-next-line no-param-reassign
      const item = acc[content.type] = acc[content.type] || [];

      item.push(content);
      return acc;
    }, {});

    return [
      {
        type: ContentType.Doc,
        icon: 'book',
        path: 'docs',
        contents: groupsByType[ContentType.Doc]
      },
      {
        type: ContentType.LegacyExercise,
        icon: 'question-circle',
        path: 'legacy-exercises',
        contents: groupsByType[ContentType.LegacyExercise]
      },
      {
        type: ContentType.ModularExercise,
        icon: 'question-circle',
        path: 'modular-exercises',
        contents: groupsByType[ContentType.ModularExercise]
      }
    ].filter(Boolean);
  }
);
