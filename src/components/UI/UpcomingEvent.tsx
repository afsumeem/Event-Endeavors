import { IEvents } from "@/types/globals";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  ModalFooter,
  Input,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalBody,
  CardBody,
  Link,
} from "@nextui-org/react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

//
interface IProps {
  events: IEvents[];
}

const UpcomingEvent = ({ events }: IProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <h2 className="text-center my-14 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
        Upcoming Events
      </h2>

      <div className=" gap-6 grid grid-cols-12 grid-rows-2 px-8">
        {events.map((event, i) => (
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
                className="border hover:bg-[#fd614a] duration-250 hover:text-white border-[#fd614a] bg-inherit text-black rounded-md"
                color="default"
                as={Link}
                href="/events"
              >
                View All Events
              </Button>
            </CardFooter>
          </Card>
        ))}
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

export default UpcomingEvent;
