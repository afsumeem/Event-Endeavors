import Dashboard from "@/components/Layouts/Dashboard";
import RootLayout from "@/components/Layouts/RootLayout";
import auth from "@/firebase/firebase.auth";
import usePrivateRoute from "@/privateRoute/layout";
import { usePostEventMutation } from "@/redux/features/events/eventApi";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import Head from "next/head";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";

//
type AddEventValues = {
  title: string;
  category: string;
  venue: string;
  details: string;
  image: string;
  date: string;
  admin: string;
};

const AddNewEvent = () => {
  const [user] = useAuthState(auth);
  const [postEvent, options] = usePostEventMutation();
  const { register, handleSubmit, reset } = useForm<AddEventValues>();

  //

  const onSubmit: SubmitHandler<AddEventValues> = async (data) => {
    // if (data) {
    //   alert("event added successfully");
    //   reset();
    // }

    try {
      const options = {
        title: data.title,
        category: data.category,
        venue: data.venue,
        details: data.details,
        image: data.image,
        data: data.date,
        admin: data.admin,
      };
      await postEvent(options);
      alert("event added successfully");
      console.log(data);
      reset();
    } catch (error) {
      console.error("Error occurred during event added:", error);
    }
  };

  //

  const loading = usePrivateRoute();

  if (loading) {
    return "loading";
  }

  return (
    <div>
      <Head>
        <title>Add New Event</title>
        <meta name="description" content="Event Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>add New Event</BreadcrumbItem>
      </Breadcrumbs>

      <h2 className="text-center">Add new event</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("title", { required: true })}
          autoFocus
          label="Title"
          placeholder="Enter the event Title"
          variant="bordered"
        />
        <Input
          {...register("category", { required: true })}
          autoFocus
          label="Category"
          placeholder="Enter the event category"
          variant="bordered"
        />
        <Input
          {...register("venue", { required: true })}
          autoFocus
          label="Venue"
          placeholder="Venue"
          variant="bordered"
        />
        <Textarea
          {...register("details", { required: true })}
          variant="bordered"
          label="Details"
          placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
        <Input
          {...register("image", { required: true })}
          autoFocus
          label="Image Link"
          placeholder="Event details"
          variant="bordered"
        />
        <Input
          {...register("date", { required: true })}
          type="datetime-local"
          autoFocus
          label="Date"
          placeholder="Event date"
          variant="bordered"
        />
        <Input
          {...register("admin", { required: true })}
          autoFocus
          label="Admin Email"
          value={user?.email ?? ""}
          placeholder="Admin Email"
          variant="bordered"
        />
        <Button type="submit" color="primary">
          Submit Event
        </Button>
      </form>
    </div>
  );
};

export default AddNewEvent;

AddNewEvent.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
