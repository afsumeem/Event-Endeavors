import { ITeams } from "@/types/globals";
import Image from "next/image";
import Slider from "react-slick";

interface IProps {
  teams: ITeams[];
}

const Teams = ({ teams }: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    cssEase: "linear",
    nextArrow: (
      <SampleNextArrow style={{}} onClick={undefined} className={undefined} />
    ),
    prevArrow: (
      <SamplePrevArrow className={undefined} style={{}} onClick={undefined} />
    ),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="mb-10">
      <h2 className="text-center my-14 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
        Our Teams
      </h2>

      <Slider {...settings} className="mx-10 md:mx-20 px-2 ">
        {teams.map((team: ITeams, i) => (
          <div key={i} className="border border-dashed p-2 ">
            <div className="flex flex-col items-center justify-center hover:cursor-pointer">
              <Image
                src={team.image}
                height={150}
                width={150}
                alt="event team image"
                className="rounded-full block m-auto"
              />
              <h2 className="text-xl uppercase mt-4 text-red-500 font-bold">
                {team.name}
              </h2>
              <h2 className="font-mono text-md">{team.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Teams;

//

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
      }}
      onClick={onClick}
    />
  );
}
