import { ITeams } from "@/types/globals";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

interface IProps {
  teams: ITeams[];
}

const Teams = ({ teams }: IProps) => {
  return (
    <div>
      <h2 className="text-center my-14 text-4xl font-bold">Upcoming Events</h2>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-5">
        {teams.map((team, i) => (
          <Card
            shadow="sm"
            key={i}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={team.name}
                className="w-full object-cover h-[140px]"
                src={team.image}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{team.name}</b>
              <p className="text-default-500">{team.title}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Teams;
