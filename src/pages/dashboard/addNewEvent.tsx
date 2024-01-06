import Dashboard from "@/components/Layouts/Dashboard";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const AddNewEvent = () => {
  return (
    <div>
      <h2 className="text-center">Add new event</h2>
      <div>
        <Input
          autoFocus
          label="Title"
          placeholder="Enter the event Title"
          variant="bordered"
        />
        <Input
          autoFocus
          label="Category"
          placeholder="Enter the event category"
          variant="bordered"
        />
        <Input autoFocus label="Venue" placeholder="Venue" variant="bordered" />
        <Textarea
          variant="bordered"
          label="Description"
          placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
        <Input
          autoFocus
          label="Image Link"
          placeholder="Event details"
          variant="bordered"
        />
        <Input
          type="datetime-local"
          autoFocus
          label="Date"
          placeholder="Event date"
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
