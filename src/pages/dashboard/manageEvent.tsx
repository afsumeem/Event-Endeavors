import Dashboard from "@/components/Layouts/Dashboard";
import React from "react";
import useAdminRoute from "../adminRoute/Layout";
import { Spinner } from "@nextui-org/react";

//

const ManageEvent = () => {
  const loadingPage = useAdminRoute();

  if (loadingPage) {
    return <Spinner className="block m-auto mt-40 mx-40" />;
  }
  return <div></div>;
};

export default ManageEvent;

ManageEvent.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
