import React from "react";
import Head from "next/head";

/**
 * Displays the component
 */
const Fonts = (props) => {
  return (
    <Head>
      <style>
        {`
		@font-face {
		font-family: "BlackMambaTrial-Venom-WebTrial";
		font-style: normal;
		font-weight: normal;
		src: local("/fonts/black-mamba/BlackMambaTrial-Venom-WebTrial"),
		  url("/fonts/black-mamba/BlackMambaTrial-Venom-WebTrial.woff") format("woff");
	  }
`}
      </style>
    </Head>
  );
};

export default Fonts;
