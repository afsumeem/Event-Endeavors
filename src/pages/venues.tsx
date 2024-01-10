import RootLayout from "@/components/Layouts/RootLayout";
import { Image } from "@nextui-org/react";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";

const Venues = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  //

  const [isLiked2, setIsLiked2] = useState(false);
  const handleClick2 = () => {
    setIsLiked2((prevIsLiked) => !prevIsLiked);
  };
  return (
    <div>
      <div className="singleEventContainer">
        <h2 className="text-white text-5xl 2xl:text-7xl text-center">
          Host Your Next Event in Elegance at our Venues
        </h2>
      </div>
      <h2 className="text-center my-10 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
        Venues
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-20 items-center justify-center mb-10 gap-2">
        <div className="col-span-1">
          <Image
            src="/assets/images/facilities/gallery-2.2.jpg"
            alt=""
            className="h-96 w-full"
          />
        </div>
        <div className="col-span-1 border-4 border-[#fdc4bc] w-full ml-0 md:-ml-20 z-10 shadow-xl rounded-lg">
          <div className=" p-5  bg-[#fda597] ">
            <h2 className="my-2 text-center text-lg md:text-xl lg:text-2xl font-semibold text-white">
              Enchanting Meadows Estate
            </h2>
            <hr />
            <h2 className="font-bold uppercase mt-5">
              Regal Riverside Mansion
            </h2>
            <p>
              An Extraordinery ExperienceAn Extraordinery ExperienceAn
              Extraordinery ExperienceAn Extraordinery Experience
            </p>
            <div className="mt-5">
              <h4 className="font-bold">Location: </h4>
              <h5 className="">Dhaka, Bangladesh</h5>
            </div>
            <FaHeart
              className="text-2xl"
              style={{ color: isLiked ? "red" : "black" }}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mx-20 items-center justify-center mt-10">
        <div className="col-span-1 border-4 border-[#fdc4bc] w-full  z-10 shadow-xl rounded-lg">
          <div className=" p-5  bg-[#fda597] ">
            <h2 className="my-2 text-center text-lg md:text-xl lg:text-2xl font-semibold text-white">
              Enchanting Meadows Estate
            </h2>
            <hr />
            <h2 className="font-bold uppercase mt-5">
              Regal Riverside Mansion
            </h2>
            <p>
              An Extraordinery ExperienceAn Extraordinery ExperienceAn
              Extraordinery ExperienceAn Extraordinery Experience
            </p>
            <div className="mt-5">
              <h4 className="font-bold">Location: </h4>
              <h5 className="">Dhaka, Bangladesh</h5>
            </div>
            <FaHeart
              className="text-2xl"
              style={{ color: isLiked2 ? "red" : "black" }}
              onClick={handleClick2}
            />
          </div>
        </div>
        <div className="col-span-1 ml-0 md:-ml-20 z-0">
          <Image
            src="/assets/images/facilities/gallery-2.2.jpg"
            alt=""
            className="h-96 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Venues;

Venues.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
