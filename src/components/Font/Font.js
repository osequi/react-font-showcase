import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getFontFamilyCSS } from "../Fonts";

/**
 * Defines the prop types
 */
const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  familyName: PropTypes.string,
  children: PropTypes.any,
};

/**
 * Defines the default props
 */
const defaultProps = {
  id: "1",
  name: "Monospace",
  familyName: "monospace",
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
  const { children } = props;

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
