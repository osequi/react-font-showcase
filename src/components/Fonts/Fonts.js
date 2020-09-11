import React from "react";
import Head from "next/head";
import { css } from "styled-components";

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
 * Loads a specific `font-family` CSS value for each font
 * @param  {object} props The props identifying a font family
 * @return {object}       The CSS definition for the font family
 */
const getFontFamilyCSS = (props) => {
  const { family } = props;

  switch (family) {
    case "BlackMamba":
      return BlackMambaCSS;
    case "GalapagosABCTrialBlack":
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

export default Fonts;
export { getFontFamilyCSS };
