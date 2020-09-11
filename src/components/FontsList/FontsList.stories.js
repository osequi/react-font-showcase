import React from "react";
import { storiesOf } from "@storybook/react";

import FontsList from "./FontsList";
import description from "./FontsList.md";

storiesOf("FontsList", module).add("Overview", () => <FontsList />, {
  notes: { markdown: description }
});
