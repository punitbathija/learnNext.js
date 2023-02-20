// Pages in Next.js
// In Next.js, a page is a React Component exported from a file in the pages directory.

import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

// Pages are associated with a route based on their file name. For example, in development:

// pages/index.js is associated with the / route.
// pages/posts/first-post.js is associated with the /posts/first-post route.
// We already have the pages/index.js file, so let’s create pages/posts/first-post.js to see how it works.

export default function firstpost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log("Script loaded correctly and FB is populated")
        }
      /> */}
      <div>
        <h1>First Post</h1>
        <h3>
          <Link href="/">Return back to home</Link>
        </h3>
      </div>
    </Layout>
  );
}

// As you can see, the Link component is similar to using <a> tags, but instead of <a href="…">, you use <Link href="…">.
// The Link component enables client-side navigation between two pages in the same Next.js app.
