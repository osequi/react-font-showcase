# react-font-showcase

Showcase fonts with React.

Visit https://react-font-showcase.vercel.app

## Dev notes

- [`_document.js`](https://nextjs.org/docs/advanced-features/custom-document) is simply not working.
- Neither with injecting `<style>` into `<Head>` nor with <`link rel...>`
- The only package available `next-fonts` is in the same vay verbose like the plain simple approach: https://github.com/rohanray/next-fonts-example/blob/master/with-local-fonts/pages/index.js
- The plain simple approach is:

```js
// In any component's render / return please insert
<Head>
  <style>
    {`
			  @font-face {
		  	  font-family: "BlackMambaTrial-Venom-WebTrial";
		  	  font-style: normal;
		  	  font-weight: normal;
		  	  src: local("/black-mamba/BlackMambaTrial-Venom-WebTrial"),
		  	    url("/black-mamba/BlackMambaTrial-Venom-WebTrial.woff") format("woff");
		  	}
  `}
  </style>
</Head>
```
