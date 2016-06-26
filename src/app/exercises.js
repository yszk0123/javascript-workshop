const req = require.context('../exercises', true, /index.jsx?$/);
export default req.keys()
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((key) => req(key));
