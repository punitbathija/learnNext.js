import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
// The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.
