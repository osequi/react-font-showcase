import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Font from "../Font";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

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
      <Font name="Black Mamba">Black mamba</Font>
      <Font name="Galapagos ABC Black">Galapagos ABC Trial Black</Font>
    </Container>
  );
};

Showcase.propTypes = propTypes;
Showcase.defaultProps = defaultProps;

export default Showcase;
export { propTypes as ShowcasePropTypes, defaultProps as ShowcaseDefaultProps };
