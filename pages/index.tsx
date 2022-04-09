import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/request";

export default function Home({ results }: any) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}
requests;
export async function getServerSideProps(context: any) {
  const genre: any = context.query.genre;
  const url: string = `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`;
  const request = await fetch(url);
  const resRequest = await request.json();

  return {
    props: {
      results: resRequest.results,
    },
  };
}
