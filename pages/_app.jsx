// Globale Styles
import '../sass/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <h1>hello</h1>
  
  <Component {...pageProps} />
  </>)
}

export default MyApp;
