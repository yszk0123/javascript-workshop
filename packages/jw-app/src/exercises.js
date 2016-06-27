// TODO: exercises/ フォルダの置き場所を考える
const req = require.context('../../../exercises', true, /index.jsx?$/);
export default req.keys()
  .sort((a, b) => a.localeCompare(b))
  .map((key) => req(key));
