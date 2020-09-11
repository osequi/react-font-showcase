import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Imports other components and hooks
 */
import Font, { FontPropTypes, FontDefaultProps } from "../Font";

/**
 * Defines the prop types
 */
const propTypes = {
  font: PropTypes.shape(FontPropTypes),
  displayText: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  font: FontDefaultProps,
  displayText: "",
};

/**
 * Styles the component container
 */
const Container = styled("article")((props) => ({
  padding: "6vmax 0",
  background: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Name = styled("h3")((props) => ({
  fontFamily: "monospace",
  fontSize: "small",
}));

/**
 * Displays the component
 */
const FontsListItem = (props) => {
  const { font, displayText } = props;
  const { name } = font;

  const text = displayText !== "" ? displayText : name;

  return (
    <Container className="FontsListItem">
      <Font {...font}>{text}</Font>
      <Name>{name}</Name>
    </Container>
  );
};

FontsListItem.propTypes = propTypes;
FontsListItem.defaultProps = defaultProps;

export default FontsListItem;
export {
  propTypes as FontsListItemPropTypes,
  defaultProps as FontsListItemDefaultProps,
};
