import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import FontsListItem, {
  FontsListItemPropTypes,
  FontsListItemDefaultProps,
} from "../FontsListItem";
import { FontsPropTypes, FontsDefaultProps } from "../Fonts";

/**
 * Defines the prop types
 */
const propTypes = {
  ...FontsPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...FontsDefaultProps,
};

/**
 * Styles the component container
 */
const Container = styled("div")((props) => ({}));

/**
 * Displays the component
 */
const FontsList = (props) => {
  const { fonts } = props;

  const fontsList = fonts.map((item) => {
    const { id } = props;
    return <FontsListItem id={id} {...item} />;
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
