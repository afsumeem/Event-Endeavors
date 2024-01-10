import Dashboard from "@/components/Layouts/Dashboard";
import React, { useMemo, useState } from "react";
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
import { useGetGuestQuery } from "@/redux/features/guests/guestApi";
import { IGuest } from "@/types/globals";
import { GetStaticProps } from "next";
import usePrivateRoute from "@/privateRoute/layout";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
import useAdminRoute from "../adminRoute/Layout";
import { Spinner } from "@nextui-org/react";

//

interface IProps {
  guests: IGuest[];
}

const ManageGuest = ({ guests }: IProps) => {
  const [user, loading, error] = useAuthState(auth);

  const { data } = useGetGuestQuery({});
  // console.log(data);
  // console.log(guests);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil((guests?.length || 0) / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return guests?.slice(start, end);
  }, [page, guests]);

  const loadingPage = useAdminRoute();

  if (loadingPage) {
    return <Spinner className="block m-auto mt-40 mx-40" />;
  }
  return (
    <div>
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
          <TableColumn key="name">NAME</TableColumn>
          <TableColumn key="guestEmail">Email</TableColumn>
          <TableColumn key="address">Address</TableColumn>
          <TableColumn key="contact">Contact</TableColumn>
          <TableColumn key="guestId">GuestId</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow
              key={item.name}
              className="border-b hover:bg-[#f7b9b0] cursor-pointer duration-200"
            >
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageGuest;

ManageGuest.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  //teams

  const eventGuests = await fetch("http://localhost:5000/guests");
  const guests = await eventGuests.json();

  return {
    props: {
      guests,
    },
    revalidate: 5,
  };
};
