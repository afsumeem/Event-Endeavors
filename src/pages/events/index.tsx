import RootLayout from "@/components/Layouts/RootLayout";
import { IEvents } from "@/types/globals";
import Head from "next/head";
import { GetStaticProps } from "next";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Select,
  SelectItem,
  Link,
} from "@nextui-org/react";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { useGetEventsQuery } from "@/redux/features/events/eventApi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostRegistrationMutation } from "@/redux/features/guests/guestApi";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

//

interface IProps {
  // events: IEvents[];
  categories: string[];
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

const AllEvents = ({ categories }: IProps) => {
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
        title: "Good job!",
        text: "Registration Successful!",
        icon: "success",
      });
      router.push("/eventTicket");
      reset();
    } catch (error) {
      console.error("Error occurred during event registration:", error);
    }
  };

  // const dispatch = useAppDispatch();

  //search and filter functionality for events
  const [selectCategory, setSelectCategory] = useState<string>("");
  const [searchText, setSearchText] = useState("");

  const { data, isLoading, isError, error } = useGetEventsQuery({
    search: searchText,
    category: selectCategory,
  });

  //

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectCategory(e.target.value);
  };

  const handleRegisterClick = (event: IEvents) => {
    setSelectedEvent(event);
    onOpen();
  };
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="A Event Website website made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2 className="text-center my-14 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
          Upcoming Events
        </h2>
        <form className=" my-2 flex justify-between px-12">
          <Select
            label="Filter Event"
            placeholder="Select an Category"
            className="max-w-xs text-[#fd614a]"
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <SelectItem
                //
                key={category}
                value={category}
                className="text-[#fd614a]"
              >
                {category}
              </SelectItem>
            ))}
          </Select>
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className=" py-1 border rounded-md border-[#fd614a] px-2 "
            placeholder="Search Event"
            style={{ width: "250px" }}
          />
        </form>

        {isLoading ? (
          <h2>loading....</h2>
        ) : (
          <div className="mt-4 gap-2 grid grid-cols-12  grid-rows-2 px-8">
            {data?.map((event: IEvents, i: number) => (
              <Card
                className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 border-none m-2 p-2"
                key={i}
              >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large mt-3 text-[#fd614a] ">
                    {event.title}
                  </h4>
                </CardHeader>

                <CardBody className="overflow-visible py-2">
                  <Link href={`/events/${event._id}`}>
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl mb-4 w-full h-64"
                      src={event.image}
                      // width={270}
                    />
                  </Link>
                  <h3 className="mb-2">{event.category}</h3>
                  <hr />
                  <p className="text-justify mt-4">{event.details}</p>
                </CardBody>
                <hr />
                <CardFooter className="justify-between gap-2">
                  <Button
                    as={Link}
                    href={`/events/${event._id}`}
                    className="text-white bg-[#fd614a] rounded-md"
                  >
                    See Details
                  </Button>
                  <Button
                    className="border border-[#fd614a] bg-inherit text-black rounded-md"
                    color="default"
                    onPress={() => handleRegisterClick(event)}
                  >
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
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

export default AllEvents;

AllEvents.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  //fetch events
  const result = await fetch("http://localhost:5000/events");
  const events = await result.json();

  //
  const eventCategories = events.map((event: IEvents) => event.category);
  const uniqueCategories = eventCategories.filter(
    (category: string, i: number, currentVal: string[]) =>
      currentVal.indexOf(category) === i
  );

  return {
    props: {
      // events,
      categories: uniqueCategories,
    },
    revalidate: 5,
  };
};
