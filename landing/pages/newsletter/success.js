import { gql, GraphQLClient } from 'graphql-request';
import NavBar from '../../components/NavBar';
import Link from 'next/link';
import Head from 'next/head';
import SubscribeForm from '../../components/SubscribeForm';
import { getSortedPostsData } from '../../lib/blogs';

export default function Home({ allBlogsData }) {
  const lastBlogData = allBlogsData[0];
  return (
    <div className="bg-gradient-to-br from-nord-6 via-nord-5 to-nord-4">
      <Head>
        <title>¡Ya estás suscrito! | Zepelín Labs</title>
      </Head>
      <article className="min-h-screen">
        <NavBar />
        <header className="mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 xl:mt-32 mx-auto w-full max-w-container grid grid-cols-1">
          <h1 className="col-start-1 row-start-1 mt-4 max-w-[36rem] text-4xl">
            <span className="font-extrabold tracking-tight sm:text-7xl">
              ¡Ya estás suscrito a la newsletter!
            </span>
          </h1>
          <p className="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-nord-2">
            Te acabas de dar de alta en nuestra newsletter. ¡Bienvenido!
          </p>
        </header>
        <section className="px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-container grid grid-cols-1">
          <p className="col-start-1 row-start-1 mt-4 max-w-lg text-lg text-nord-2">
            Recibirás el siguiente email en tu bandeja de entrada, pero si no
            puedes esperar,
            <br />
            puedes ver el último email aquí:
          </p>
          <Link href={`/blog/${lastBlogData.id}`}>
            <a className="mt-4">
              <h3 className="leading-relaxed font-semibold text-lg sm:text-lg text-nord-10 underline underline-offset-4 decoration-nord-15">
                {lastBlogData.title}
              </h3>
            </a>
          </Link>
        </section>
      </article>
      <footer className="pt-5"></footer>
    </div>
  );
}

const query = gql`
  query {
    header {
      subtitle
      title
    }
  }
`;

export async function getStaticProps() {
  // DatoCMS content
  const endpoint = 'https://graphql.datocms.com/';

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  });

  const datoCMSData = await graphQLClient.request(query);

  // Blog content
  const allBlogsData = getSortedPostsData();

  return {
    props: {
      datoCMSData,
      allBlogsData,
    },
  };
}
