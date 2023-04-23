import Script from 'next/script'
import {Helmet} from "react-helmet";
export default function App({ Component, pageProps }) {
  return (
  <>
  
  <Component {...pageProps} />
  
   <Script src="js/jquery.bundle.js" type="text/javascript" ></Script>
   <Script src="js/scripts.js" type="text/javascript"></Script>
   <Script src="js/charts.js" type="text/javascript" ></Script>
   <Script src="js/toastr.examples.js" type="text/javascript" ></Script>

  </>
  )
}
