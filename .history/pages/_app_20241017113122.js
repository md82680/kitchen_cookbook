// pages/_app.js
import glob
import "../styles/globals.scss"; // Import global styles



export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}