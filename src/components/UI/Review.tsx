import { IReviews } from "@/types/globals";
import { Image } from "@nextui-org/react";
import React from "react";
import Slider from "react-slick";
import ReactStars from "react-stars";

interface IProps {
  reviews: IReviews[];
}

const CustomerReview = ({ reviews }: IProps) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className=" pt-10 px-10">
      <h2 className="text-center my-14 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
        What our Clients Says
      </h2>

      <div className="m-0 md:m-10">
        <Slider {...settings} className="mx-2 md:mx-20 p-2 ">
          {reviews.map((review: IReviews, i) => (
            <div
              key={i}
              className="border border-dashed p-2 md:p-10 bg-slate-50"
            >
              <div className="flex flex-col items-center justify-center hover:cursor-pointer">
                <Image
                  className="item h-20 w-20 rounded-full"
                  src={review?.image}
                  alt="img"
                />
                <h2 className="uppercase mt-4 font-bold text-[#fd614a]">
                  {review.name}
                </h2>
                <h2 className="font-mono text-md">{review.designation}</h2>
                <p className="my-4">{review.comment}</p>
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={24}
                  edit={false}
                  half={true}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReview;
