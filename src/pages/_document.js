import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="css/vendor.bundle.css?ver=195" />
        <link rel="stylesheet" href="css/theme.css?ver=195" />
        <link rel="stylesheet" href="css/style-zinnia.css?ver=195" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@900&display=swap"
          rel="stylesheet"
        
          /> 
         
          </Head>
      <body className="nk-body body-wider mode-onepage">
     
        <Main/>
       
        <NextScript/>
         
      </body>
      
    
    </Html>
  )
}
