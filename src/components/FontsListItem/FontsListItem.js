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
  ...FontPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...FontDefaultProps,
};

/**
 * Styles the component container
 */
const Container = styled("div")((props) => ({}));

/**
 * Displays the component
 */
const FontsListItem = (props) => {
  const { name } = props;
  return (
    <Container className="FontsListItem">
      <Font name={name} />
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
