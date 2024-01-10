import Dashboard from "@/components/Layouts/Dashboard";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { MdEvent } from "react-icons/md";
import AnimatedNumbers from "react-animated-numbers";
import { BiCategoryAlt } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import useAdminRoute from "../adminRoute/Layout";
import { Spinner } from "@nextui-org/react";

//

const DashboardUI = () => {
  const loadingPage = useAdminRoute();

  if (loadingPage) {
    return <Spinner className="block m-auto mt-40 mx-40" />;
  }
  return (
    <div>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-4 mt-5 mx-5">
        <Card
          shadow="sm"
          className=" flex flex-col justify-center items-center py-2  bg-[#f8dbd6]"
        >
          <div className="p-3 border-3 shadow-xl bg-[#ffdbd4] border-[#ffb6ab] rounded-full my-2">
            <h2 className="text-xl">
              {" "}
              <MdEvent />
            </h2>
          </div>

          <h2 className="text-2xl my-2">30</h2>
          {/* <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={30}
                fontStyle={{
                  fontSize: 40,
                  color: "black",
                }}
              /> */}

          <b>Total Event</b>
        </Card>
        <Card
          shadow="sm"
          className=" flex flex-col justify-center items-center py-2  bg-[#f8f3d6]"
        >
          <div className="p-3 border-3 shadow-xl bg-[#faf2c5] border-[#fff9ab] rounded-full my-2">
            <h2 className="text-xl">
              {" "}
              <BiCategoryAlt />
            </h2>
          </div>

          <h2 className="text-2xl my-2">200+</h2>
          {/* <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={30}
                fontStyle={{
                  fontSize: 40,
                  color: "black",
                }}
              /> */}

          <b>Reviews</b>
        </Card>
        <Card
          shadow="sm"
          className=" flex flex-col justify-center items-center py-2  bg-[#d6daf8]"
        >
          <div className="p-3 border-3 shadow-xl bg-[#d6daf8] border-[#abb8ff] rounded-full my-2">
            <h2 className="text-xl">
              {" "}
              <IoPeople />
            </h2>
          </div>

          <h2 className="text-2xl my-2">2000+</h2>
          {/* <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={30}
                fontStyle={{
                  fontSize: 40,
                  color: "black",
                }}
              /> */}

          <b>Total Guests</b>
        </Card>
        <Card
          shadow="sm"
          className=" flex flex-col justify-center items-center py-2  bg-[#f8d6f0]"
        >
          <div className="p-3 border-3 shadow-xl bg-[#f8d6f0] border-[#ffabed] rounded-full my-2">
            <h2 className="text-xl">
              {" "}
              <FaLocationDot />
            </h2>
          </div>

          <h2 className="text-2xl my-2">15+</h2>
          {/* <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={30}
                fontStyle={{
                  fontSize: 40,
                  color: "black",
                }}
              /> */}

          <b>Venues</b>
        </Card>
      </div>
    </div>
  );
};

export default DashboardUI;

DashboardUI.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
