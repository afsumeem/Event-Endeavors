import Header from "@/components/Shared/Header";
import Banner from "@/components/UI/Banner";
import Facilities from "@/components/UI/Facilities";
import Head from "next/head";
import { GetStaticProps } from "next";
import { IEvents, IReviews, ITeams } from "@/types/globals";
import UpcomingEvent from "@/components/UI/UpcomingEvent";
import Teams from "@/components/UI/Teams";
import Footer from "@/components/Shared/Footer";
import NewsLetter from "@/components/UI/NewsLetter";
import CustomerReview from "@/components/UI/Review";
import Gallery from "@/components/UI/Gallery";
import Facilities2 from "@/components/UI/Facilities2";

interface IProps {
  events: IEvents[];
  teams: ITeams[];
  reviews: IReviews[];
}

const HomePage = ({ events, teams, reviews }: IProps) => {
  return (
    <>
      <Head>
        <title>Event Endeavors</title>
        <meta
          name="description"
          content="A Event Website website made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div>
        <Header />
        <Banner />
        <Facilities />
        <UpcomingEvent events={events} />
        <Facilities2 />
        <Teams teams={teams} />
        <CustomerReview reviews={reviews} />
        <NewsLetter />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<IProps> = async () => {
  //fetch services
  const result = await fetch("http://localhost:5000/events");
  const events = await result.json();
  const randomEvents = events.slice(0, 6);

  // //fetch categories
  const res = await fetch("http://localhost:5000/reviews");
  const reviews = await res.json();

  //teams

  const teams = await fetch("http://localhost:5000/teams");
  const eventTeams = await teams.json();

  return {
    props: {
      events: randomEvents,
      teams: eventTeams,
      reviews,
    },
    revalidate: 5,
  };
};
