import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>👋Hey, I am a Aspiring Web Developer👨‍💻</p>
        <p>
          💁I am fond of learning and making modern websites 🖥️ to improve my
          skill set, I am learning Next.js⏭️
        </p>

        <Link href="/posts/firstpost">First Post</Link>
        <br />
        <Link href="/posts/firstpost">Second Post</Link>
      </section>
    </Layout>
  );
}
