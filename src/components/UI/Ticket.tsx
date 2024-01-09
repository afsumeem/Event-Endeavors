import { Image } from "@nextui-org/react";
import React from "react";
import QRCode from "react-qr-code";
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";

const Ticket = () => {
  const value = "afsana";
  return (
    <div className="my-10">
      <div className="flex justify-between items-center bg-[#fabfb6] p-8 border-dashed border-1 border-[#fd614a] ticketContainer">
        <div className=" px-4 mb-8 lg:mb-0">
          <Image
            className=" rounded-lg shadow-lg h-60 w-72"
            src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
            alt="Concert Image"
          />
        </div>
        <div className="">
          <h1 className="text-xl text-white uppercase font-bold mb-4">
            John Smith Live in Concert
          </h1>

          <div className="mb-6 text-white ">
            <p className="text-xl  mb-2">
              Id: #<span>afsaana</span>
            </p>
          </div>

          <p className="text-sm text-white flex gap-1 mb-2 mt-10">
            <FiClock className="text-xl text-white" />
            Friday, April 15th at 8:00 PM
          </p>
          <p className="text-sm text-white flex gap-1 ">
            <CiLocationOn className="text-xl text-white" />
            1805 Geary Blvd, San Francisco, CA
          </p>
        </div>
        <div className=" ">
          <QRCode
            style={{ height: "100px", width: "100px" }}
            size={256}
            value={value}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
