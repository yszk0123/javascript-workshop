import React from "react";
import { Route } from "react-router";

import Exercise from "./components/Exercise";
import Markdown from "./components/Markdown";
import Container from "./Container";

const mapDoc = ({ path, content }, index) =>
  <Route
    key={index}
    path={path}
    component={() =>
      <Markdown value={content} />
    }
  />;

const mapExercise = ({ absoluteFilePath, path, content }, index) =>
  <Route
    key={index}
    path={path}
    component={() =>
      <Exercise label={absoluteFilePath} src={absoluteFilePath} doc={content} />
    }
  />;

export default ({ docs, exercises }) =>
  <Route path="/" component={Container}>
    <Route path="docs">
      {docs.map(mapDoc)}
    </Route>
    <Route path="exercises">
      {exercises.map(mapExercise)}
    </Route>
  </Route>;
