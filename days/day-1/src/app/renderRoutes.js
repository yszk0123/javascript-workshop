import Root from './containers/Root';
import Content from './containers/Content';

export default (contentsGroups) => ({
  path: '/',
  component: Root,
  childRoutes: contentsGroups.map((contentsGroup, _index) => ({
    path: contentsGroup.path,
    childRoutes: contentsGroup.contents.map((content) => ({
      path: content.path,
      component: Content
    }))
  }))
});
