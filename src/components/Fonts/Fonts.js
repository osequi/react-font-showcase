import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { css } from "styled-components";
import shortid from "shortid";

import { FontPropTypes, FontDefaultProps } from "../Font";

/**
 * Defines the prop types
 */
const propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.shape(FontPropTypes)),
};

/**
 * Defines the default props
 */
const defaultProps = {
  fonts: [
    {
      id: shortid.generate(),
      name: "Black Mamba",
      familyName: "BlackMambaTrial-Venom-WebTrial",
    },
    {
      id: shortid.generate(),
      name: "Galapagos B Black",
      familyName: "GalapagosBTrial-Black",
    },
    {
      id: shortid.generate(),
      name: "Galapagos C Black",
      familyName: "GalapagosCTrial-Black",
    },
    {
      id: shortid.generate(),
      name: "Iz Oscel",
      familyName: "iz-oscel3z-script",
    },
  ],
};

/**
 * Returns a specific `font-familyName` CSS value for a font
 * @param  {object} props The props identifying a font familyName
 * @return {object}       The CSS definition for the font familyName
 */
const getFontFamilyCSS = (props) => {
  const { name } = props;
  const { fonts } = defaultProps;

  const font = fonts.find((item) => item.name === name);
  const { familyName } = font;

  return font
    ? css`
        font-family: ${familyName};
      `
    : css`
        font-family: monospace;
      `;
};

/**
 * Displays the component
 */
const Fonts = (props) => {
  return (
    <Head>
      <style>{`
		  @import '/fonts/black-mamba/black-mamba.css';
		  @import '/fonts/Galapagos-B-Trials-Web/GalapagosBTrial-Black.css';
		  @import '/fonts/Galapagos-C-Trials-Web/GalapagosCTrial-Black.css';
		  @import '/fonts/Iz-Oscel/iz-oscel.css';
		  `}</style>
    </Head>
  );
};

Fonts.propTypes = propTypes;
Fonts.defaultProps = defaultProps;

export default Fonts;
export {
  propTypes as FontsPropTypes,
  defaultProps as FontsDefaultProps,
  getFontFamilyCSS,
};
