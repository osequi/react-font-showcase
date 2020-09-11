import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {
  family: PropTypes.string,
  children: PropTypes.any,
};

/**
 * Defines the default props
 */
const defaultProps = {
  family: "monospace",
  children: "Font",
};

/**
 * Defines the font styles
 */
const BlackMambaCSS = css`
  font-family: "BlackMambaTrial-Venom-WebTrial";
`;

const GalapagosABCTrialBlackCSS = css`
  font-family: "GalapagosABCTrial-Black";
`;

const MonospaceCSS = css`
  font-family: "monospace";
`;

/**
 * Defines the container
 */
const Container = styled.article`
  ${(props) => props.css};
`;

/**
 * Displays the component
 */
const Font = (props) => {
  const { family, children } = props;

  let css = "";
  switch (family) {
    case "BlackMamba":
      css = BlackMambaCSS;
      break;
    case "GalapagosABCTrialBlack":
      css = GalapagosABCTrialBlackCSS;
      break;
    default:
      css = MonospaceCSS;
  }

  return (
    <Container className="Font" css={css}>
      {children}
    </Container>
  );
};

Font.propTypes = propTypes;
Font.defaultProps = defaultProps;

export default Font;
export { propTypes as FontPropTypes, defaultProps as FontDefaultProps };
