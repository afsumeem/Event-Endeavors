import RootLayout from "@/components/Layouts/RootLayout";
import Ticket from "@/components/UI/Ticket";
import { Button } from "@nextui-org/react";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const EventTicket = () => {
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className=" mt-10 ">
      <Button
        onClick={handlePrint}
        className="text-white bg-[#fd614a] rounded-none block m-auto"
      >
        Download Ticket
      </Button>
      <div ref={componentRef}>
        <Ticket />
      </div>
    </div>
  );
};

export default EventTicket;

EventTicket.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
