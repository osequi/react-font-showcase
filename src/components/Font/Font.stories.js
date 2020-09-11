import React from "react";
import { storiesOf } from "@storybook/react";

import Font from "./Font";
import description from "./Font.md";

storiesOf("Font", module).add("Overview", () => <Font />, {
  notes: { markdown: description }
});
