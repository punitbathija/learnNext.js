import Head from "next/head";
import Link from "next/link";

export default function secondpost() {
  return (
    <>
      <Head>
        <title>Second Post</title>
      </Head>
      <div>
        <h1>Second Post</h1>
        <h3>
          <Link href="/">Return back to home</Link>
        </h3>
      </div>
    </>
  );
}
