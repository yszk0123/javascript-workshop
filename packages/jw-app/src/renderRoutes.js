import { Exercise } from 'jw-exercise';
import Root from './containers/Root';
import exercises from './exercises';

// TODO: exercises を直接参照せず、exercisesSelector を使う
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
