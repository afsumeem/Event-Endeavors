import { Button, Input, Link } from "@nextui-org/react";
import React from "react";
import style from "../../styles/NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div>
      <div className={style.newsLetterContainer}>
        <h3 className="text-center font-bold text-[#fd614a] text-xl ">
          Let&apos;s do it hurry up!
        </h3>
        <h1 className="text-center font-extrabold text-4xl mt-5">
          Haven&apos;t booked your seat yet? <br />
          <span>Get Ticket Now!</span>
        </h1>
        <Button
          as={Link}
          href="/events"
          className="text-white bg-[#fd614a] hover:bg-[#af1b04] rounded-md mt-5 px-10 py-6"
        >
          Register Now
        </Button>
      </div>
      <div className="bg-[#fd614a] -mt-14 mx-32 p-12">
        <h1 className="text-center text-white font-bold text-2xl">
          Don&apos;t miss our future updates! Get subscribed today!
        </h1>
        <div className="flex justify-center mt-5">
          <input
            type="email"
            placeholder="Enter Your Email here"
            className="text-white rounded-none bg-inherit border px-3 focus:outline-white"
          />
          <Button className="rounded-none text-[#fd614a]">Subscribe Now</Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
