import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getFontFamilyCSS } from "../Fonts";

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

  const css = getFontFamilyCSS(props);

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
