import Header from "@/components/Shared/Header";
import Banner from "@/components/UI/Banner";
import Facilities from "@/components/UI/Facilities";
import Head from "next/head";
import { GetStaticProps } from "next";
import { IEvents, ITeams } from "@/types/globals";
import UpcomingEvent from "@/components/UI/UpcomingEvent";
import Teams from "@/components/UI/Teams";
import Footer from "@/components/Shared/Footer";

interface IProps {
  // categories: ICategory[];
  // projects: IProjects[];
  events: IEvents[];
  teams: ITeams[];
}

const HomePage = ({ events, teams }: IProps) => {
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
        <Facilities />
        <UpcomingEvent events={events} />
        <Teams teams={teams} />
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
  // const res = await fetch("https://paintxpress-server.vercel.app/categories");
  // const categories = await res.json();

  // //fetch latest projects
  // const response = await fetch(
  //   "https://paintxpress-server.vercel.app/projects"
  // );
  // const projects = await response.json();
  // const randomProjects = projects.slice(0, 6);

  //teams

  const teams = await fetch("http://localhost:5000/teams");
  const eventTeams = await teams.json();

  return {
    props: {
      // categories: categories,
      // projects: randomProjects,
      events: randomEvents,
      teams: eventTeams,
    },
    revalidate: 5,
  };
};
