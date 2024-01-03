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
} from "@nextui-org/react";

//

interface IProps {
  events: IEvents[];
}

//

const AllEvents = ({ events }: IProps) => {
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
        <h2 className="text-center my-14 text-4xl font-bold">
          Upcoming Events
        </h2>

        <div className=" gap-2 grid grid-cols-12 grid-rows-2 px-8">
          {events.map((event, i) => (
            <Card
              className="col-span-12 sm:col-span-4 border-none m-2 p-2"
              key={i}
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">
                  {event.category}
                </p>
                <small className="text-default-500">{event.venue}</small>
                <h4 className="font-bold text-large">{event.title}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl mb-4"
                  src={event.image}
                  // width={270}
                />
                <p>{event.details}</p>
              </CardBody>
              <hr />
              <CardFooter>
                <h5 className="font-medium">{event.date}</h5>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;

AllEvents.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  //fetch services
  const result = await fetch("http://localhost:5000/events");
  const events = await result.json();

  return {
    props: {
      events,
    },
    revalidate: 5,
  };
};
