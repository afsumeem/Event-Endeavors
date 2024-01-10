import Dashboard from "@/components/Layouts/Dashboard";

import auth from "@/firebase/firebase.auth";

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
import { Spinner } from "@nextui-org/react";
import useAdminRoute from "../adminRoute/Layout";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [postEvent, options] = usePostEventMutation();
  const { register, handleSubmit, reset } = useForm<AddEventValues>();

  //

  const onSubmit: SubmitHandler<AddEventValues> = async (data) => {
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
      Swal.fire({
        title: "Good job!",
        text: "Registration Successful!",
        icon: "success",
      });

      reset();
      router.push("/events");
    } catch (error) {
      console.error("Error occurred during event added:", error);
    }
  };

  //

  const loadingPage = useAdminRoute();

  if (loadingPage) {
    return <Spinner className="block m-auto mt-40 mx-40" />;
  }

  return (
    <div>
      <Head>
        <title>Add New Event</title>
        <meta name="description" content="Event Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs className="mt-5 ml-5">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Add New Event</BreadcrumbItem>
      </Breadcrumbs>

      {/* <h2 className="text-center my-10 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
        Add new event
      </h2> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/3 block m-auto mt-10"
      >
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            {...register("title", { required: true })}
            autoFocus
            label="Title"
            // placeholder="Enter the event Title"
            variant="bordered"
            className="mb-2 "
          />
          <Input
            {...register("category", { required: true })}
            autoFocus
            label="Category"
            // placeholder="Enter the event category"
            variant="bordered"
          />
        </div>

        <Textarea
          {...register("details", { required: true })}
          variant="bordered"
          label="Details"
          // placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
        <div className="flex flex-col md:flex-row gap-2 my-2">
          <Input
            {...register("image", { required: true })}
            autoFocus
            label="Image Link"
            // placeholder="Event details"
            variant="bordered"
          />
          <Input
            {...register("venue", { required: true })}
            autoFocus
            label="Venue"
            // placeholder="Venue"
            variant="bordered"
          />
        </div>

        <Input
          {...register("date", { required: true })}
          type="datetime-local"
          autoFocus
          // label="Date"
          // placeholder="Event date"
          className="mb-2"
          variant="bordered"
        />
        <Input
          {...register("admin", { required: true })}
          autoFocus
          label="Admin Email"
          value={user?.email ?? ""}
          // placeholder="Admin Email"
          variant="bordered"
          className="mb-2"
        />

        <Button type="submit" className="text-white bg-[#fd614a] rounded-md">
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
