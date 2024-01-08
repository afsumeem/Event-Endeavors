import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

const Facilities = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-10 px-10">
      <div className="col-span-12 md:col-span-6 lg:col-span-3 border border-[#f3f3f3] p-4">
        <Image
          src="/assets/images/facilities1.png"
          alt="facilityImg"
          width={80}
          height={80}
          className="d-block m-auto my-7"
        />

        <h3 className="text-[#fd614a] font-bold text-center mt-10 mb-4">
          Friendly Team
        </h3>
        <p className=" text-justify">
          Explore a diverse range of events curated just for you. From
          captivating cultural festivals to heart-pounding cultural live
          performances.
        </p>
        <Button
          as={Link}
          href="/about"
          className="bg-inherit text-[#fd614a] underline d-block m-auto w-full"
        >
          About US
        </Button>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3 border p-4 border-[#f3f3f3]">
        <Image
          src="/assets/images/facilities2.png"
          alt="facilityImg"
          width={80}
          height={80}
          className="d-block m-auto"
        />
        <h3 className="text-[#fd614a] font-bold text-center mt-10 mb-4">
          Perfect Venues
        </h3>
        <p className=" text-justify">
          Explore a diverse range of events curated just for you. From
          captivating cultural festivals to heart-pounding cultural live
          performances.
        </p>
        <Button
          as={Link}
          href="/venues"
          className="bg-inherit text-[#fd614a] underline d-block m-auto w-full"
        >
          Our Venues
        </Button>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3 border p-4 border-[#f3f3f3]">
        <Image
          src="/assets/images/facilities3.png"
          alt="facilityImg"
          width={80}
          height={80}
          className="d-block m-auto"
        />
        <h3 className="text-[#fd614a] font-bold text-center mt-10 mb-4">
          Unique Scenarios
        </h3>
        <p className=" text-justify">
          Explore a diverse range of events curated just for you. From
          captivating cultural festivals to heart-pounding cultural live
          performances.
        </p>
        <Button
          as={Link}
          href="/events"
          className="bg-inherit text-[#fd614a] underline d-block m-auto w-full"
        >
          Our Events
        </Button>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3 border p-4 border-[#f3f3f3]">
        <Image
          src="/assets/images/facilities4.png"
          alt="facilityImg"
          width={80}
          height={80}
          className="d-block m-auto"
        />
        <h3 className="text-[#fd614a] font-bold text-center mt-10 mb-4">
          Unforgettable Times
        </h3>
        <p className=" text-justify">
          Explore a diverse range of events curated just for you. From
          captivating cultural festivals to heart-pounding cultural live
          performances.
        </p>
        <Button
          as={Link}
          href="/customerReview"
          className="bg-inherit text-[#fd614a] underline d-block m-auto w-full"
        >
          Client Reviews
        </Button>
      </div>
    </div>
  );
};

export default Facilities;
