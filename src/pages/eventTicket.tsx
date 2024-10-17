import RootLayout from "@/components/Layouts/RootLayout";
import Ticket from "@/components/UI/Ticket";
import { IGuest } from "@/types/globals";
import { Button, Image, Table } from "@nextui-org/react";
import { GetStaticProps } from "next";
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import {
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import QRCode from "react-qr-code";
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

//
interface IProps {
  guests: IGuest[];
}

//

const EventTicket = ({ guests }: IProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedTicket, setSelectedTicket] = useState<IGuest | null>(null);

  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleViewTicket = (ticket: IGuest) => {
    setSelectedTicket(ticket);
    onOpen();
  };
  return (
    <div className=" mt-10 ">
      <h2 className="text-center my-14 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
        My Tickets
      </h2>
      <div className="my-10">
        <Table>
          <TableHeader>
            <TableColumn>Title</TableColumn>
            <TableColumn>GuestId</TableColumn>
            <TableColumn>Date</TableColumn>
            <TableColumn>Venue</TableColumn>
            <TableColumn>Download</TableColumn>
          </TableHeader>

          <TableBody>
            {guests.map((ticket, i) => (
              <TableRow
                key={i}
                className="hover:bg-slate-200 border-b duration-200"
              >
                <TableCell>{ticket.title}</TableCell>
                <TableCell>{ticket.guestId}</TableCell>
                <TableCell>{ticket.date}</TableCell>
                <TableCell>{ticket.venue}</TableCell>
                <TableCell className="text-red-600">
                  {" "}
                  <Button
                    onPress={() => handleViewTicket(ticket)}
                    className="text-white bg-[#fd614a] rounded-none block m-auto"
                  >
                    View Ticket
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="mt-10">
                  <div
                    ref={componentRef}
                    className="flex justify-between items-center bg-[#fabfb6] p-8 border-dashed border-1 border-[#fd614a] ticketContainer"
                  >
                    <div className=" px-4 mb-8 lg:mb-0">
                      <Image
                        className=" rounded-lg shadow-lg h-60 w-72"
                        src={selectedTicket?.image ?? ""}
                        alt="Concert Image"
                      />
                    </div>
                    <div className="">
                      <h1 className="text-xl text-white uppercase font-bold mb-4">
                        {selectedTicket?.title ?? ""}
                      </h1>

                      <div className="mb-6 text-white ">
                        <p className="text-xl  mb-2">
                          Id: #<span>{selectedTicket?.guestId ?? ""}</span>
                        </p>
                      </div>

                      <p className="text-sm text-white flex gap-1 mb-2 mt-10">
                        <FiClock className="text-xl text-white" />
                        {selectedTicket?.date ?? ""}
                      </p>
                      <p className="text-sm text-white flex gap-1 ">
                        <CiLocationOn className="text-xl text-white" />
                        {selectedTicket?.venue ?? ""}
                      </p>
                    </div>
                    <div className=" ">
                      <QRCode
                        style={{ height: "100px", width: "100px" }}
                        size={256}
                        value={selectedTicket?.guestId ?? ""}
                        viewBox={`0 0 256 256`}
                      />
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    onClick={handlePrint}
                    className="text-white bg-[#fd614a] rounded-none block m-auto"
                  >
                    Download Ticket
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div></div>
    </div>
  );
};

export default EventTicket;

EventTicket.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  //fetch events
  const result = await fetch("https://event-endeavors.vercel.app/guests");
  const guests = await result.json();

  return {
    props: {
      guests,
    },
    revalidate: 5,
  };
};
