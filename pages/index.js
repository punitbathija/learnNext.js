import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Punit's Blog</title>
      </Head>
      <div className={styles.container}>
        <h1>Punit's Personal Blogs</h1>
        <div className={styles.card}>
          <h3 className={styles.title}>
            <Link href="/posts/firstpost">First Post</Link>
            <Link href="/posts/secondpost">Second Post</Link>
          </h3>
        </div>
      </div>
    </>
  );
}
