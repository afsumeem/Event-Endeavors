import React, { useEffect } from "react";
import styles from "../../styles/Banner.module.css";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@nextui-org/react";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <h2 className="text-white text-6xl text-center">
        <Typewriter
          loop
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={2000}
          words={[
            "Exciting Events Await You!",
            "One-stop Event Planner",
            "The Best time to celebrate",
          ]}
        />
      </h2>
      <p className="w-1/2 text-white">
        Explore a diverse range of events curated just for you. From captivating
        cultural festivals to heart-pounding live performances, we have got
        something for every taste and interest. Our events promise to captivate
        your senses and leave you craving for more.
      </p>
      <Button color="primary" variant="bordered">
        View Events
      </Button>
      <Button color="primary" variant="bordered">
        Register Upcoming Event
      </Button>
    </div>
  );
};

export default Banner;
