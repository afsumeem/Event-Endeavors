import RootLayout from "@/components/Layouts/RootLayout";
import auth from "@/firebase/firebase.auth";
import { usePostRegistrationMutation } from "@/redux/features/guests/guestApi";
import { IEvents } from "@/types/globals";
import {
  Button,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import Swal from "sweetalert2";

//
interface IProps {
  event: IEvents;
}

type RegistrationValues = {
  title: string;
  name: string;
  guestEmail: string;
  address: string;
  contact: string;
  admin: string;
};

//

const SingleEvent = ({ event }: IProps) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState<IEvents | null>(null);
  const [guestRegister, options] = usePostRegistrationMutation();
  const { register, handleSubmit, reset } = useForm<RegistrationValues>();

  const onSubmit: SubmitHandler<RegistrationValues> = async (data) => {
    try {
      // Extract email ID from data.guestEmail
      const emailParts = data.guestEmail.split("@");
      const emailId = emailParts[0];

      // Generate a random serial (you can customize this logic)
      const generatedSerial = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0");

      // Combine emailId and generatedSerial to create guestId
      const guestId = `${emailId}${generatedSerial}`;

      const options = {
        title: data.title,
        name: data.name,
        guestEmail: data.guestEmail,
        address: data.address,
        contact: data.contact,
        admin: data.admin,
        guestId: guestId,
      };
      await guestRegister(options);
      Swal.fire({
        title: "Registration Successful!",
        html: `
          Print your,
          <a href="/eventTicket" style="color:blue"><b>Ticket</b></a>
        `,
        icon: "success",
        showConfirmButton: false,
      });

      reset();
    } catch (error) {
      console.error("Error occurred during event registration:", error);
    }
  };

  //

  const handleRegisterClick = (event: IEvents) => {
    setSelectedEvent(event);
    onOpen();
  };
  return (
    <div>
      <div className="singleEventContainer">
        <h2 className="text-white text-5xl 2xl:text-7xl text-center">
          {event.title}
        </h2>
      </div>
      {/*  */}
      <div className="flex  flex-col md:flex-row justify-center mx-10 gap-20 mt-20">
        <div className=" w-full md:w-1/2">
          <Image src={event.image} alt="event img" className="h-96 w-full " />
          <p className="mt-4 text-justify ">
            {event.details}
            {event.details}
            {event.details}
          </p>
        </div>

        <div className=" w-full md:w-1/2">
          <h2 className="my-2  text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
            Details
          </h2>
          <hr />
          <h2 className="font-bold uppercase mt-5">{event.title}</h2>
          <p className="text-lg mb-2">{event.category}</p>
          <hr />
          <div className="mt-10">
            <h4 className="font-bold">Start:</h4>
            <h5 className="">{event.date}</h5>
          </div>

          <div className="mt-10">
            <h4 className="font-bold">Location: </h4>
            <h5 className="">{event.venue}</h5>
          </div>
          <Button
            onPress={() => handleRegisterClick(event)}
            className="text-white bg-[#fd614a] rounded-none mt-10 w-full py-6"
          >
            Register Event
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="flex flex-col gap-1">
                  Registration Form
                </ModalHeader>
                <ModalBody>
                  <Input
                    {...register("title", { required: true })}
                    autoFocus
                    value={selectedEvent?.title ?? ""}
                    label="Event Title"
                    placeholder="Event Title"
                    variant="bordered"
                  />
                  <Input
                    {...register("name", { required: true })}
                    autoFocus
                    label="Name"
                    placeholder="Enter your name"
                    variant="bordered"
                  />
                  <Input
                    {...register("guestEmail", { required: true })}
                    autoFocus
                    label="Email"
                    value={user?.email ?? ""}
                    endContent={
                      <MdOutlineEmail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  <Input
                    {...register("address", { required: true })}
                    autoFocus
                    label="Address"
                    placeholder="Enter your Present Address"
                    variant="bordered"
                  />
                  <Input
                    {...register("contact", { required: true })}
                    autoFocus
                    label="Contact"
                    placeholder="Enter your Contact No."
                    variant="bordered"
                  />
                  <Input
                    className="hidden"
                    {...register("admin", { required: true })}
                    autoFocus
                    value={selectedEvent?.admin ?? ""}
                    label="Contact"
                    placeholder="Admin Email"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" color="primary" onPress={onClose}>
                    Register
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SingleEvent;

SingleEvent.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

//

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://event-endeavors.vercel.app/events");
  const events = await res.json();

  const paths = events?.map((event: IEvents) => ({
    params: { id: event._id },
  }));
  return { paths, fallback: false };
};

//

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://event-endeavors.vercel.app/events/${params?.id}`
  );
  const event = await res.json();

  return { props: { event } };
};
