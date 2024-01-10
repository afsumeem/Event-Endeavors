import RootLayout from "@/components/Layouts/RootLayout";
import auth from "@/firebase/firebase.auth";
import usePrivateRoute from "@/privateRoute/layout";
import { Button, Image } from "@nextui-org/react";
import { FaTwitter } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

//

const ProfilePage = () => {
  const [user, loading, error] = useAuthState(auth);

  const loadingPage = usePrivateRoute();

  if (loadingPage) {
    return "loading.....";
  }
  return (
    <div className="my-20 flex flex-col md:flex-row justify-around gap-5">
      <div className="flex mt-10 flex-col items-center justify-center   shadow-md rounded-xl w-full md:w-1/3 h-80 sm:px-5 bg-[#fd614a] dark:text-gray-100 ">
        <Image
          src="https://source.unsplash.com/150x150/?portrait?3"
          alt=""
          className="w-32 h-32 -mt-36 mx-auto rounded-full dark:bg-gray-500 aspect-square border-5"
        />

        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl my-5 text-white font-semibold sm:text-2xl">
              Leroy Jenkins
            </h2>
            <h2 className="text-white">{user?.email}</h2>
            <p className="px-5 text-white text-xs sm:text-base dark:text-gray-400">
              Frontend Developer
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-md text-gray-100 hover:dark:text-violet-400"
            >
              <FaFacebook />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-md text-gray-100 hover:dark:text-violet-400"
            >
              <FaTwitter />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-md text-gray-100 hover:dark:text-violet-400"
            >
              <FaInstagramSquare />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="GitHub"
              className="p-2 rounded-md text-gray-100 "
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className=" w-full md:w-1/2 px-10 md:px-0">
        <h2 className=" my-10 text-xl md:text-2xl lg:text-3xl font-bold text-[#fd614a]">
          Welcome to Your Personal Profile -{" "}
          <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={2000}
            words={[" Explore!", " Connect!", " Thrive!"]}
          />{" "}
        </h2>
        <p className="text-justify">
          Hello there! A warm and hearty welcome to your personal sanctuary.
          This space is exclusively yours to explore, connect, and thrive.
          Whether you are here to unwind, seek inspiration, or simply share a
          piece of your journey, this profile is your canvas. Let it reflect the
          colors of your personality, the chapters of your story, and the
          essence of what makes you uniquely you. So, take a moment, dive into
          the different facets of your digital haven, and make it a reflection
          of your dreams, passions, and aspirations. This is your corner of the
          digital universe – embrace it, own it, and let it be a testament to
          the incredible individual that you are. Enjoy the journey!
        </p>
        <Button className="bg-[#fd614a] text-white mt-4 rounded-none ">
          Update Profile
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
