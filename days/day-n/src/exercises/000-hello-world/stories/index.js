import { createElement as h } from "react";
import * as Storybook from "@kadira/storybook";

Storybook.storiesOf("Button", module)
  .add("with a text", () => (
    h("button", { onClick: Storybook.action("clicked") }, "Button")
  ))
  .add("with no text", () => (
    h("button")
  ));
