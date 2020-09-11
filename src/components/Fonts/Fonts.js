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
    { id: shortid.generate(), name: "Black Mamba", familyName: "BlackMamba" },
    {
      id: shortid.generate(),
      name: "Galapagos ABC Black",
      familyName: "GalapagosABCTrialBlack",
    },
  ],
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
 * Returns a specific `font-familyName` CSS value for a font
 * @param  {object} props The props identifying a font familyName
 * @return {object}       The CSS definition for the font familyName
 */
const getFontFamilyCSS = (props) => {
  const { name } = props;

  console.log("name:", name);

  switch (name) {
    case "Black Mamba":
      return BlackMambaCSS;
    case "Galapagos ABC Black":
      return GalapagosABCTrialBlackCSS;
    default:
      return MonospaceCSS;
  }
};

/**
 * Displays the component
 */
const Fonts = (props) => {
  return (
    <Head>
      <style>{`
		  @import '/fonts/black-mamba/black-mamba.css';
		  @import '/fonts/Galapagos-ABC-Trials-Web/GalapagosABCTrial-Black.css'
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
