import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Head from "next/head";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("section")((props) => ({
  fontFamily: "BlackMambaTrial-Venom-WebTrial",
  fontSize: "150%",
}));

/**
 * Displays the component
 */
const Showcase = (props) => {
  return (
    <>
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
      <Container className="Showcase">Showcase</Container>
    </>
  );
};

Showcase.propTypes = propTypes;
Showcase.defaultProps = defaultProps;

export default Showcase;
export { propTypes as ShowcasePropTypes, defaultProps as ShowcaseDefaultProps };
