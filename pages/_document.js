import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (

      <Html lang="en">
        <Head>
        <meta charSet="utf-8" />
	{/* <title>Ask me – Responsive Questions and Answers Template</title> */}
	<meta name="description" content="Ask me Responsive Questions and Answers Template" />
	<meta name="author" content="2code.info" />
	
	{/* <link rel="stylesheet" href="style.css" />
	
	<link rel="stylesheet" href="css/skins/skins.css" />
	
	<link rel="stylesheet" href="css/responsive.css" />
	 */}
	<link rel="shortcut icon" href="images/favicon.png" />
  
        </Head>
        <body>
       
          <Main />
          <NextScript />
          
        </body>
      </Html>
     
    )
  }
}

export default MyDocument