import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import Head from "next/head";
import Date from "../../components/date";
import utilsStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilsStyles.article}>
        <h1 className={utilsStyles.headingXl}>{postData.title}</h1>
        <div className={utilsStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
