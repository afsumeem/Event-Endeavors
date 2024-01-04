import React, { useEffect } from "react";
import styles from "../../styles/Banner.module.css";
import { Typewriter } from "react-simple-typewriter";
import { Button, Link } from "@nextui-org/react";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <h2 className="text-white text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl text-center">
        The Best
        <Typewriter
          loop
          cursor
          cursorStyle="|"
          typeSpeed={200}
          deleteSpeed={100}
          delaySpeed={2000}
          words={[
            " Events Await for You!",
            " Event Planner!",
            " Time to celebrate!",
          ]}
        />
      </h2>
      <p className=" p-4 w-full md:w-2/3 lg:w-1/2 text-white text-justify 2xl:text-2xl">
        Explore a diverse range of events curated just for you. From captivating
        cultural festivals to heart-pounding live performances, we have got
        something for every taste and interest. Our events promise to captivate
        your senses and leave you craving for more. Our events promise to
        captivate your senses and leave you craving for more.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Button
          as={Link}
          href="/events"
          className="text-white bg-[#fd614a] rounded-md"
        >
          View Events
        </Button>
        <Button className="border border-[#fd614a] bg-inherit text-white rounded-md">
          Register Upcoming Event
        </Button>
      </div>
    </div>
  );
};

export default Banner;
