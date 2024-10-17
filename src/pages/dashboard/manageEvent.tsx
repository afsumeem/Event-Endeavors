import Dashboard from "@/components/Layouts/Dashboard";
import React, { useMemo, useState } from "react";
import useAdminRoute from "../adminRoute/Layout";
import { Spinner } from "@nextui-org/react";
import { GetStaticProps } from "next";
import { IEvents } from "@/types/globals";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import Swal from "sweetalert2";
//
interface IProps {
  events: IEvents[];
}

const ManageEvent = ({ events }: IProps) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil((events?.length || 0) / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return events?.slice(start, end);
  }, [page, events]);

  const handleClick = () => {
    Swal.fire({
      icon: "success",
      title: "Event Deleted",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const loadingPage = useAdminRoute();

  if (loadingPage) {
    return <Spinner className="block m-auto mt-40 mx-40" />;
  }
  return (
    <div>
      {" "}
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Date</TableColumn>
          <TableColumn>Admin</TableColumn>
          <TableColumn>Venue</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>

        <TableBody>
          {events.map((event, i) => (
            <TableRow
              key={i}
              className="hover:bg-slate-200 border-b duration-200"
            >
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.category}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.admin}</TableCell>
              <TableCell>{event.venue}</TableCell>
              <TableCell className="text-red-600">
                <button onClick={() => handleClick()}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageEvent;

ManageEvent.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};

export const getStaticProps = async () => {
  //teams

  const allEvents = await fetch("https://event-endeavors.vercel.app/events");
  const events = await allEvents.json();

  return {
    props: {
      events,
    },
    revalidate: 5,
  };
};
