import '@/styles/globals.css'
import '@/public/style.css'
import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
<>
        <Head>	
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
      <Layout>
      <Script src="js/jquery.min.js"></Script>
    <Script src="js/jquery-ui-1.10.3.custom.min.js"></Script>
    <Script src="js/jquery.easing.1.3.min.js"></Script>
    <Script src="js/html5.js"></Script>
    <Script src="js/twitter/jquery.tweet.js"></Script>
    <Script src="js/jflickrfeed.min.js"></Script>
    <Script src="js/jquery.inview.min.js"></Script>
    <Script src="js/jquery.tipsy.js"></Script>
    <Script src="js/tabs.js"></Script>
    <Script src="js/jquery.flexslider.js"></Script>
    <Script src="js/jquery.prettyPhoto.js"></Script>
    <Script src="js/jquery.carouFredSel-6.2.1-packed.js"></Script>
    <Script src="js/jquery.scrollTo.js"></Script>
    <Script src="js/jquery.nav.js"></Script>
    <Script src="js/tags.js"></Script>
    <Script src="js/jquery.bxslider.min.js"></Script>
    <Script src="js/custom.js"></Script>
        <Component {...pageProps} />
      </Layout>
      </>
  )
}
