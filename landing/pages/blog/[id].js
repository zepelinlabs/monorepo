import React from 'react';
import { getAllPostIds, getPostData } from '../../lib/blogs';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import SubscribeForm from '../../components/SubscribeForm';
import styles from '../../styles/blogpost.module.css';

export default function Post({ postData }) {
  return (
    <div className="bg-gradient-to-br from-nord-6 via-nord-5 to-nord-4">
      <Head>
        <title> Zepelín Labs | {postData.title} </title>
      </Head>
      <article className="min-h-screen">
        <NavBar />
        <div className="px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <main className="mt-12 prose lg:prose-xl prose-slate">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                {postData.title}
              </h1>
              <div
                className={styles.blogpost}
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </main>
          </div>
        </div>
        <section className="mt-4 sm:mt-8 px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-container grid grid-cols-1">
          <div className="col-start-1 row-start-3 max-w-2xl mx-auto bg-nord-1 mt-5 pb-5 rounded-lg text-nord-6">
            <div className="p-4">
              <h3 className="font-bold text-lg sm:text-lg text-nord-13">
                Entérate de las últimas novedades un poco más rápido
              </h3>
              <p className="font-semibold mt-2">
                Escribo en torno a una vez por semana, sobre el impacto de la
                programación en las áreas no tecnológicas de las empresas. Es
                gratis.
              </p>
              <SubscribeForm />
            </div>
          </div>
        </section>
      </article>
      <footer className="pt-5"></footer>
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
