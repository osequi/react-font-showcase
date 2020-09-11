import React from "react";
import Head from "next/head";
import { css } from "styled-components";

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
