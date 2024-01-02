import Header from "@/components/Shared/Header";
import Banner from "@/components/UI/Banner";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Event Endeavors</title>
        <meta
          name="description"
          content="A Paint Service website made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Banner />
      </div>
    </>
  );
};

export default HomePage;
