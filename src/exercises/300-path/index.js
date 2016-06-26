import { runTest } from '../../common/test-utils';
import main from './main';

if (module.hot) {
  module.hot.accept('./main', () => {
    const nextMain = require('./main');
    runTest(nextMain.default || nextMain);
  });
}

runTest(main);

export default manifest(module, {
  legacy: false,
});
