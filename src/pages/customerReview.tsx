import RootLayout from "@/components/Layouts/RootLayout";
import { IReviews } from "@/types/globals";
import Head from "next/head";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import Slider from "react-slick";
import ReactStars from "react-stars";
import { SubmitHandler, useForm } from "react-hook-form";
import { Slider as RatingSlider } from "@nextui-org/react";
import {
  useGetReviewsQuery,
  usePostReviewMutation,
} from "@/redux/features/reviews/reviewsApi";

type ReviewValues = {
  name: string;
  designation: string;
  comment: string;
  image: string;
  rating: string;
};

const CustomerReview = () => {
  const { register, handleSubmit, reset } = useForm<ReviewValues>();
  const [guestReview, options] = usePostReviewMutation();
  //
  const { data } = useGetReviewsQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  //
  const onSubmit: SubmitHandler<ReviewValues> = async (data) => {
    try {
      const options = {
        name: data.name,
        designation: data.designation,
        comment: data.comment,
        image: data.image,
        rating: data.rating,
      };
      await guestReview(options);
      alert("Review added successful");

      reset();
    } catch (error) {
      console.error("Error occurred during add review", error);
    }
  };

  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue: number | number[] | null) => {
    if (newValue !== null) {
      const selectedValue = Array.isArray(newValue) ? newValue[0] : newValue;
      setInputValue(selectedValue);
    }
  };
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
    <div>
      <Head>
        <title>Customer Reviews</title>
        <meta
          name="description"
          content="A Event Website website made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <h2 className="text-xl my-10 text-center md:text-2xl lg:text-3xl font-bold text-[#fd614a]">
        How was your Experience?
      </h2>
      <div className="flex  flex-col md:flex-row justify-center mx-10 gap-20">
        <p className="mt-4 text-justify w-full md:w-1/3">
          We value your opinion! Thank you for taking the time to share your
          feedback with us.Please take a moment to fill out this customer review
          feedback form and let us know about your recent interaction with our
          product/service. Thank you for being a part of our journey to provide
          the best possible experience for our customers.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-3">
            <Input
              {...register("name", { required: true })}
              autoFocus
              label="Name"
              placeholder="Enter your name"
              variant="bordered"
              className="w-full mb-4"
            />

            <Input
              {...register("designation", { required: true })}
              autoFocus
              label="Designation"
              placeholder="Enter your Designation"
              variant="bordered"
              className="w-full mb-4"
            />
          </div>

          <Textarea
            {...register("comment", { required: true })}
            variant="bordered"
            label="Comment"
            placeholder="Write your Comment"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0 w-full "
          />
          <div className="flex gap-3">
            <Input
              {...register("image", { required: true })}
              autoFocus
              label="Image Link"
              placeholder="Paste Your Image Link"
              variant="bordered"
              className=" mb-4 mt-4"
            />
            <RatingSlider
              {...register("rating")}
              size="md"
              step={1}
              color="primary"
              label="Rating"
              showSteps={true}
              maxValue={5}
              minValue={1}
              defaultValue={4}
              onChange={onChange}
              value={typeof inputValue === "number" ? inputValue : 0}
            />
          </div>

          <Button
            type="submit"
            className="text-white bg-[#fd614a] rounded-md w-full"
          >
            Submit
          </Button>
        </form>
      </div>
      <hr />
      <div className=" pt-10 px-10">
        <h2 className="text-center my-14 text-xl md:text-2xl lg:text-3xl font-bold text-[#fd614a]">
          What our Guest Says
        </h2>

        <div className="m-0 md:m-10">
          {/* <Slider {...settings} className="mx-2 md:mx-20 p-2 "> */}
          {data?.map((review: IReviews, i: any) => (
            <div
              key={i}
              className="border border-dashed p-2 md:p-4 bg-slate-50 mb-4"
            >
              <div className="flex flex-col md:flex-row items-center  gap-4">
                <div className="hover:cursor-pointer">
                  <Image
                    className="item h-20 w-20 rounded-full"
                    src={review?.image}
                    alt="img"
                  />
                </div>
                <div>
                  <p className="my-4 text-center md:text-start">
                    {review.comment}
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={24}
                      edit={false}
                      half={true}
                    />
                  </div>

                  <h2 className="uppercase mt-4 font-bold text-[#fd614a] text-center md:text-start">
                    {review.name}
                  </h2>
                  <h2 className="font-mono text-md text-center md:text-start">
                    {review.designation}
                  </h2>
                </div>
              </div>
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;

CustomerReview.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
