import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Imports other components and hooks
 */
import FontsList, {
  FontsListPropTypes,
  FontsListDefaultProps,
} from "../FontsList";

/**
 * Defines the prop types
 */
const propTypes = {
  fontsList: PropTypes.shape(FontsListPropTypes),
  displayText: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  fontsList: FontsListDefaultProps,
  displayText: "Coming soon",
};

/**
 * Styles the component container
 */
const Container = styled("section")((props) => ({
  fontSize: "6vmax",
}));

/**
 * Displays the component
 */
const Showcase = (props) => {
  return (
    <Container className="Showcase">
      <FontsList {...props} />
    </Container>
  );
};

Showcase.propTypes = propTypes;
Showcase.defaultProps = defaultProps;

export default Showcase;
export { propTypes as ShowcasePropTypes, defaultProps as ShowcaseDefaultProps };
