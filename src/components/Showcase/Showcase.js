import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BlackMambaCSS, GalapagosABCTrialBlackCSS } from "../Fonts";

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

const BlackMamba = styled.article`
  ${BlackMambaCSS}
`;

const GalapagosABCTrialBlack = styled.article`
  ${GalapagosABCTrialBlackCSS}
`;

/**
 * Displays the component
 */
const Showcase = (props) => {
  return (
    <Container className="Showcase">
      <BlackMamba>Black mamba</BlackMamba>
      <GalapagosABCTrialBlack>Galapagos ABC Trial Black</GalapagosABCTrialBlack>
    </Container>
  );
};

Showcase.propTypes = propTypes;
Showcase.defaultProps = defaultProps;

export default Showcase;
export { propTypes as ShowcasePropTypes, defaultProps as ShowcaseDefaultProps };
