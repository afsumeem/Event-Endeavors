import Ticket from "@/components/UI/Ticket";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const EventTicket: React.FC = () => {
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div ref={componentRef}>
        <Ticket />
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default EventTicket;
