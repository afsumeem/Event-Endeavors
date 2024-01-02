import { Button, Image } from "@nextui-org/react";
// import { Image } from "@nextui-org/react";
import img1 from "../../../public/assets/images/1.png";

const Facilities = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-10 px-10">
      <div className="col-span-12 sm:col-span-3 border p-6">
        <Image
          src="/assets/images/facilities1.png"
          alt="facilityImg"
          width={100}
          height={100}
          className="d-block m-auto mb-10"
        />
        <h3 className="text-orange-400 font-bold text-center my-4">
          Friendly Team
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          suscipit quia perferendis
        </p>
        <Button color="primary" variant="bordered" className="mt-4">
          About US
        </Button>
      </div>
      <div className="col-span-12 sm:col-span-3 border p-6">
        <Image
          src="/assets/images/facilities2.png"
          alt="facilityImg"
          width={100}
          height={100}
          className="d-block m-auto"
        />
        <h3 className="text-orange-400 font-bold text-center my-4">
          Perfect Venues
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          suscipit quia perferendis
        </p>
        <Button color="primary" variant="bordered" className="mt-4">
          Our Venues
        </Button>
      </div>
      <div className="col-span-12 sm:col-span-3 border p-6">
        <Image
          src="/assets/images/facilities3.png"
          alt="facilityImg"
          width={100}
          height={100}
          className="d-block m-auto"
        />
        <h3 className="text-orange-400 font-bold text-center my-4">
          Unique Scenarios
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          suscipit quia perferendis
        </p>
        <Button color="primary" variant="bordered" className="mt-4">
          Our Events
        </Button>
      </div>
      <div className="col-span-12 sm:col-span-3 border p-6">
        <Image
          src="/assets/images/facilities4.png"
          alt="facilityImg"
          width={100}
          height={100}
          className="d-block m-auto"
        />
        <h3 className="text-orange-400 font-bold text-center my-4">
          Unforgettable Times
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          suscipit quia perferendis
        </p>
        <Button color="primary" variant="bordered" className="mt-4">
          Client Reviews
        </Button>
      </div>
    </div>
  );
};

export default Facilities;
