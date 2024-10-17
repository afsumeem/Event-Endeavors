import Dashboard from "@/components/Layouts/Dashboard";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { MdEvent } from "react-icons/md";
import AnimatedNumbers from "react-animated-numbers";
import { BiCategoryAlt } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import useAdminRoute from "../adminRoute/Layout";
import { Spinner } from "@nextui-org/react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";
//
const monthlyData = [
  {
    id: 1,
    date: "Mar 21",
    totalGuest: 1700,
    RegisteredGuest: 5000,
  },
  {
    id: 2,
    date: "Apr 21",
    totalGuest: 1000,
    RegisteredGuest: 2350,
  },
  {
    id: 3,
    date: "May 21",
    totalGuest: 600,
    RegisteredGuest: 3350,
  },
  {
    id: 4,
    date: "Jun 21",
    totalGuest: 1000,
    RegisteredGuest: 2350,
  },
  {
    id: 5,
    date: "Jul 21",
    totalGuest: 300,
    RegisteredGuest: 1540,
  },
];

const SuccessfulEvents = [
  { name: "2022", guest: 7260300 },
  { name: "2023", guest: 99004079 },
];

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
      <h5 className="my-5 text-xl ml-10">Monthly Event Statistics</h5>
      {/* <div className="flex flex-col md:flex-row">
        <div> */}
      <ResponsiveContainer width="70%" aspect={2}>
        <BarChart
          data={monthlyData}
          width={300}
          height={100}
          // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" interval={0} width={200} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="totalGuest" fill="#8884D8" barSize={25} />
          <Bar dataKey="RegisteredGuest" fill="#82CDFF" barSize={25} />
        </BarChart>
      </ResponsiveContainer>
      {/* </div> */}
      {/* <div> */}
      <div></div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={100} height={250}>
          <Pie
            data={SuccessfulEvents}
            dataKey="guest"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default DashboardUI;

DashboardUI.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
