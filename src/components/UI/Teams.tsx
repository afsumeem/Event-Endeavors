import { ITeams } from "@/types/globals";
import Image from "next/image";

interface IProps {
  teams: ITeams[];
}

const Teams = ({ teams }: IProps) => {
  return (
    <div>
      <h2 className="text-center my-14 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
        Our Teams
      </h2>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {teams.map((team, i) => (
          <div key={i}>
            <Image
              src={team.image}
              height={150}
              width={150}
              alt="event team image"
              className="rounded-full block m-auto"
            />
            <h2 className="text-center my-2 text-[#fd614a] uppercase">
              {team.name}
            </h2>
            <p className=" text-center text-xs lowercase">{team.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
