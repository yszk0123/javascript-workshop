import { createSelector } from 'reselect';

import ExerciseType from './ExerciseType';

export const searchSelector = (state) =>
  state.search;

// TODO: Don't use Array#find()
export const currentExerciseSelector = createSelector(
  [
    (state) => state.exercises,
    (state, ownProps) => ownProps.location
  ],
  (exercises, location) =>
    exercises.find((exercise) => exercise.absolutePath === location.pathname)
);

export const exercisesSelector = createSelector(
  [
    (state) => state.search.text,
    (state) => state.search.tags,
    (state) => state.exercises
  ],
  (searchText, searchTags, exercises) => {
    return exercises.filter((exercise) =>
      (!searchText || exercise.title.indexOf(searchText) > -1) &&
      exercise.tags.some((tag) => searchTags.indexOf(tag) > -1)
    );
  }
);

export const exercisesGroupsSelector = createSelector(
  (state) => state.exercises,
  (exercises) => {
    const groupsByType = exercises.reduce((acc, exercise) => {
      // eslint-disable-next-line no-param-reassign
      const item = acc[exercise.type] = acc[exercise.type] || [];

      item.push(exercise);
      return acc;
    }, {});

    return [
      {
        type: ExerciseType.Doc,
        icon: 'book',
        path: 'docs',
        exercises: groupsByType[ExerciseType.Doc]
      },
      {
        type: ExerciseType.Legacy,
        icon: 'question-circle',
        path: 'legacy-exercises',
        exercises: groupsByType[ExerciseType.Legacy]
      },
      {
        type: ExerciseType.Modular,
        icon: 'question-circle',
        path: 'modular-exercises',
        exercises: groupsByType[ExerciseType.Modular]
      }
    ].filter(Boolean);
  }
);
