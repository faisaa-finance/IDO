import Script from 'next/script'
export default function App({ Component, pageProps }) {
  return (
  <>
  
  <Component {...pageProps} />
  
   <Script src="js/jquery.bundle.js" 
           strategy="beforeInteractive"/>
   <Script src="js/scripts.js" 
           strategy="beforeInteractive"/>
   <Script src="js/charts.js" 
           strategy="beforeInteractive"/>
   <Script src="js/toastr.examples.js" 
           strategy="beforeInteractive"/>

  </>
  )
}
