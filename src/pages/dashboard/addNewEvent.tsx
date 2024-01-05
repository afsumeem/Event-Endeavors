import Dashboard from "@/components/Layouts/Dashboard";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const AddNewEvent = () => {
  return (
    <div>
      <h2 className="text-center">Add new event</h2>
      <div>
        <Input
          autoFocus
          label="Name"
          placeholder="Enter your name"
          variant="bordered"
        />
        <Input
          autoFocus
          label="Email"
          endContent={
            <MdOutlineEmail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          placeholder="Enter your email"
          variant="bordered"
        />
        <Input
          autoFocus
          label="Address"
          placeholder="Enter your Present Address"
          variant="bordered"
        />
        <Input
          autoFocus
          label="Contact"
          placeholder="Enter your Contact No."
          variant="bordered"
        />

        <Button color="danger" variant="flat">
          Cancel
        </Button>
        <Button color="primary">Register</Button>
      </div>
    </div>
  );
};

export default AddNewEvent;

AddNewEvent.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
