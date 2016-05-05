import { configure } from "@kadira/storybook";

const req = require.context("../src", true, /\/stories\/.*\.jsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
