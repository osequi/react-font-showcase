import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Head from "next/head";

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
  fontFamily: "GalapagosABCTrial-Black",
  fontSize: "150%",
}));

/**
 * Displays the component
 */
const Showcase = (props) => {
  return <Container className="Showcase">Showcase</Container>;
};

Showcase.propTypes = propTypes;
Showcase.defaultProps = defaultProps;

export default Showcase;
export { propTypes as ShowcasePropTypes, defaultProps as ShowcaseDefaultProps };
