import React from "react";

import Extractor from "./utils/Extractor";
import Exercise from "./components/Exercise";

const titleExtractor = new Extractor()
  .addRule(/([^\/]+)\/index\.html$/, (_, title) => title)
  .addRule(/\/(.+)\.html$/, (_, title) => title);

export default __EXERCISES__.map(function({ filename, document }) {
  const title = titleExtractor.execute(filename);

  return {
    title,
    path: title,
    absolutePath: `/exercises/${title}`,
    component: (_props) =>
      <Exercise title={title} src={`/exercises/${filename}`} document={document} />
  };
});
