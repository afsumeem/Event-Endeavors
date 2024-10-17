import RootLayout from "@/components/Layouts/RootLayout";
import styles from "../styles/about.module.css";
import { Button, Link } from "@nextui-org/react";
import { ITeams } from "@/types/globals";
import Image from "next/image";
import { GetStaticProps } from "next";
//
interface IProps {
  teams: ITeams[];
}

//
const AboutPage = ({ teams }: IProps) => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <h2 className="text-white text-5xl 2xl:text-7xl text-center">
          We turn dreams into reality
        </h2>
      </div>
      {/*  */}
      <div className="bg-white px-14 pt-5 pb-10">
        <h2 className="text-center my-5 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
          About Us
        </h2>
        <div className="flex flex-col items-center">
          <h2 className="text-center text-lg section-para mb-10 font-semibold leading-7">
            If we simply put it, we’re <br />
            professionals with heart!
          </h2>
          <p className="mb-7 container mx-auto service-para text-justify text-base text-[#54595F] font-medium px-5">
            We might get listed as Event Planner or Event Manager but we are
            above these mediocre terms. We’re Counselors. We do all what others
            do but in a different way. We simply instill life in your
            celebration and you will say, Superb Celebration it is. We’re a
            bunch of people who congregated on a same motto to create
            spectacular events. We are self-driven individuals who work as a
            gelled team. We create ideas out of nowhere and then brainstorm.
            From the main entrance design to the corner which will be least
            visible, we work on each and every part with a thorough plan.
          </p>
          <Button
            as={Link}
            href="/events"
            className="text-white bg-[#fd614a] rounded-md px-12"
          >
            View Events
          </Button>
        </div>
      </div>
      <hr />

      {/* teams */}
      <div className="mb-10">
        <h2 className="text-center my-10 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
          Our Teams
        </h2>

        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {teams.map((team, i) => (
            <div
              key={i}
              className="border pt-5 border-[#ffbab0] hover:bg-[#ffbab0] duration-300"
            >
              <Image
                src={team.image}
                height={150}
                width={150}
                alt="event team image"
                className="rounded-full block m-auto border-5 border-[#ffbab0] "
              />
              <div className=" mt-10 bg-[#fd614a] py-3">
                <h2 className="text-center  text-white uppercase">
                  {team.name}
                </h2>
                <p className=" text-center text-white text-xs lowercase">
                  {team.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

//

export const getStaticProps = async () => {
  //teams
  const teams = await fetch("https://event-endeavors.vercel.app/teams");
  const eventTeams = await teams.json();

  return {
    props: {
      teams: eventTeams,
    },
    revalidate: 5,
  };
};
