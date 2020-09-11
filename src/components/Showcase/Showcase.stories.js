import React from "react";
import { storiesOf } from "@storybook/react";

import Showcase from "./Showcase";
import description from "./Showcase.md";

storiesOf("Showcase", module).add("Overview", () => <Showcase />, {
  notes: { markdown: description }
});
