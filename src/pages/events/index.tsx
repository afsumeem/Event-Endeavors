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
} from "@nextui-org/react";
import { MdOutlineEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { useGetEventsQuery } from "@/redux/features/events/eventApi";

//

interface IProps {
  // events: IEvents[];
  categories: string[];
}

//

const AllEvents = ({ categories }: IProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
          <div className=" gap-2 grid grid-cols-12 grid-rows-2 px-8">
            {data?.map((event: IEvents, i: number) => (
              <Card
                className="col-span-12 sm:col-span-4 border-none m-2 p-2"
                key={i}
              >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">
                    {event.category}
                  </p>
                  <small className="text-default-500">{event.venue}</small>
                  <small className="text-default-900">{event.date}</small>

                  <h4 className="font-bold text-large mt-3">{event.title}</h4>
                </CardHeader>

                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl mb-4"
                    src={event.image}
                    // width={270}
                  />
                  <p className="text-justify">{event.details}</p>
                </CardBody>
                <hr />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny">Coming soon..</p>
                  <Button
                    className="text-tiny text-white bg-indigo-900"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                    onPress={onOpen}
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
              <ModalHeader className="flex flex-col gap-1">
                Registration Form
              </ModalHeader>
              <ModalBody>
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
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Register
                </Button>
              </ModalFooter>
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
