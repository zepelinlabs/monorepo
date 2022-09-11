import { gql, GraphQLClient } from 'graphql-request';
import NavBar from '../components/NavBar';
import Link from 'next/link';

export default function Home({ header }) {
  return (
    <div>
      <div className="h-screen bg-gradient-to-br from-nord-6 via-nord-5 to-nord-4">
        <NavBar />
        <header className="mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 xl:mt-32 mx-auto w-full max-w-container grid grid-cols-1">
          <div className="col-start-1 row-start-1 h-7">
            <span className="text-base font-semibold leading-7 text-nord-15">
              Sistema Automático de KYC Compliance
            </span>
          </div>
          <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl">
            <span className=" font-extrabold tracking-tight sm:text-7xl">
              Más clientes, más fácil y más rápido
            </span>
          </h1>
          <p className="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-nord-2">
            Incrementa el número de clientes que se dan de alta en tu agencia de
            valores, con diligencia debida y libres de fraude.
          </p>
          <div className="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="/pricing">
              <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 text-nord-6 bg-gradient-to-br from-nord-1 via-nord-10 to-nord-15">
                Empezar ya
                <span
                  aria-hidden="true"
                  className="hidden text-slate-400 sm:inline"
                >
                  →
                </span>
              </a>
            </Link>
          </div>
        </header>
      </div>
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
  const endpoint = 'https://graphql.datocms.com/';

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  });

  const data = await graphQLClient.request(query);

  return {
    props: data,
  };
}
