import { IEvents } from "@/types/globals";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

interface IProps {
  events: IEvents[];
}

const UpcomingEvent = ({ events }: IProps) => {
  return (
    <div>
      <h2 className="text-center my-14 text-4xl font-bold">Upcoming Events</h2>

      <div className=" gap-2 grid grid-cols-12 grid-rows-2 px-8">
        {events.map((event, i) => (
          <Card className="col-span-12 sm:col-span-4 h-[300px]" key={i}>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {event.category}
              </p>
              <h4 className="text-white font-medium text-large">
                {event.title}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={event.image}
            />
            <CardFooter className="absolute z-10 bottom-1">
              <h4 className="text-white font-medium text-large">
                {event.venue}
              </h4>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
