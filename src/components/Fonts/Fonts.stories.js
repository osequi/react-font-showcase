import React from "react";
import { storiesOf } from "@storybook/react";

import Fonts from "./Fonts";
import description from "./Fonts.md";

storiesOf("Fonts", module).add("Overview", () => <Fonts />, {
  notes: { markdown: description }
});
