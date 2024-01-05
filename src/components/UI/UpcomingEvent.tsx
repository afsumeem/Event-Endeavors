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
            className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-auto bg-black p-0"
            key={i}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/80 uppercase font-bold">
                {event.category}
              </p>
              <h4 className="text-white font-medium text-large">
                {event.title}
              </h4>
            </CardHeader>
            <Image
              isBlurred
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover "
              style={{ opacity: ".5" }}
              src={event.image}
            />
            <CardFooter className="absolute z-10 bottom-1">
              <div className="inline-flex gap-1 items-center justify-center p-0 m-0 ">
                <CiLocationOn className="text-xl text-white" />
                <h4 className="text-white font-medium text-small p-0 m-0 leading-none">
                  {event.venue}
                </h4>
              </div>
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
