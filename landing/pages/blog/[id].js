import Head from 'next/head';
import React from 'react';
import { getAllPostIds, getPostData } from '../../lib/blogs';

export default function Post({ postData }) {
  return (
    <div>
      <Head>
        <title> Zepelín Labs | {postData.title} </title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}

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
