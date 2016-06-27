import Root from './containers/Root';
import Exercise from './containers/Exercise';
import exercises from './exercises';

export default function renderRoutes(exercisesGroups) {
  return {
    path: '/',
    component: Root,
    childRoutes: [
      {
        path: 'exercises',
        childRoutes: exercises.map((exercise) => ({
          path: exercise.path,
          component: Exercise
        }))
      }
    ]
  };
}
