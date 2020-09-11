import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import FontsListItem from "../FontsListItem";
import { FontsPropTypes, FontsDefaultProps } from "../Fonts";

/**
 * Defines the prop types
 */
const propTypes = {
  ...FontsPropTypes,
  displayText: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...FontsDefaultProps,
  displayText: "",
};

/**
 * Styles the component container
 */
const Container = styled("div")((props) => ({}));

/**
 * Displays the component
 */
const FontsList = (props) => {
  const { fonts, displayText } = props;

  const fontsList = fonts.map((item) => {
    const { id } = props;

    return <FontsListItem id={id} font={item} displayText={displayText} />;
  });

  return <Container className="FontsList">{fontsList}</Container>;
};

FontsList.propTypes = propTypes;
FontsList.defaultProps = defaultProps;

export default FontsList;
export {
  propTypes as FontsListPropTypes,
  defaultProps as FontsListDefaultProps,
};
