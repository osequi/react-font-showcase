import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
