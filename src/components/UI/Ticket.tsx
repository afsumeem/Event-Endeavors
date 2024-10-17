import { Image } from "@nextui-org/react";
import React from "react";
import QRCode from "react-qr-code";
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { useGetGuestQuery } from "@/redux/features/guests/guestApi";
import { IGuest } from "@/types/globals";
import { GetStaticProps } from "next";

//
interface IProps {
  guests: IGuest[];
}
const Ticket = ({ guests }: IProps) => {
  const value = "afsana";

  console.log(guests);

  // const { data } = useGetGuestQuery({});
  // console.log(data);
  return (
    <div className="my-10">
      {guests.map((ticket, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-[#fabfb6] p-8 border-dashed border-1 border-[#fd614a] ticketContainer"
        >
          <div className=" px-4 mb-8 lg:mb-0">
            <Image
              className=" rounded-lg shadow-lg h-60 w-72"
              src={ticket.image}
              alt="Concert Image"
            />
          </div>
          <div className="">
            <h1 className="text-xl text-white uppercase font-bold mb-4">
              {ticket.title}
            </h1>

            <div className="mb-6 text-white ">
              <p className="text-xl  mb-2">
                Id: #<span>{ticket.guestId}</span>
              </p>
            </div>

            <p className="text-sm text-white flex gap-1 mb-2 mt-10">
              <FiClock className="text-xl text-white" />
              {ticket.date}
            </p>
            <p className="text-sm text-white flex gap-1 ">
              <CiLocationOn className="text-xl text-white" />
              {ticket.venue}
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
      ))}
    </div>
  );
};

export default Ticket;
