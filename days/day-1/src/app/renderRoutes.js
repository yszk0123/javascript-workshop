import Root from './containers/Root';
import Exercise from './containers/Exercise';

export default (exercisesGroups) => ({
  path: '/',
  component: Root,
  childRoutes: exercisesGroups.map((exercisesGroup, _index) => ({
    path: exercisesGroup.path,
    childRoutes: exercisesGroup.exercises.map((exercise) => ({
      path: exercise.path,
      component: Exercise
    }))
  }))
});
