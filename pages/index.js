import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostData } from "../lib/post";
import Date from "../components/Date";

export async function getStaticProps() {
  const allPostData = getSortedPostData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <span className="emoji">👋</span>Hey, I am an Aspiring Web Developer
          <span className="emoji">👨‍💻</span>
        </p>
        <p>
          <span className="emoji">💁</span>I am fond of learning and making
          modern websites <span className="emoji"> 🖥️ </span>to improve my skill
          set, I am learning Next.js
        </p>
        {/* 
        <Link href="/posts/firstpost">First Post</Link>
        <br />
        <Link href="/posts/firstpost">Second Post</Link> */}

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blogs</h2>
          <ul className={utilStyles.list}>
            {allPostData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  );
}
