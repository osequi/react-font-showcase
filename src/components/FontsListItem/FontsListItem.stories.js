import React from "react";
import { storiesOf } from "@storybook/react";

import FontsListItem from "./FontsListItem";
import description from "./FontsListItem.md";

storiesOf("FontsListItem", module).add("Overview", () => <FontsListItem />, {
  notes: { markdown: description }
});
