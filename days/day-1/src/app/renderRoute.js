import React from "react";
import { Route } from "react-router";

import Exercise from "./components/Exercise";
import Markdown from "./components/Markdown";
import Container from "./Container";

const mapDocument = ({ path, content }, index) =>
  <Route
    key={index}
    path={path}
    component={() =>
      <Markdown content={content} />
    }
  />;

const mapExercise = ({ absoluteFilePath, path, content }, index) =>
  <Route
    key={index}
    path={path}
    component={() =>
      <Exercise label={absoluteFilePath} src={absoluteFilePath} document={content} />
    }
  />;

export default ({ documents, exercises }) =>
  <Route path="/" component={Container}>
    <Route path="docs">
      {documents.map(mapDocument)}
    </Route>
    <Route path="exercises">
      {exercises.map(mapExercise)}
    </Route>
  </Route>;
