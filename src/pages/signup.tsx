import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Link } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import auth from "@/firebase/firebase.auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { usePostUsersMutation } from "@/redux/features/users/usersApi";
//

type Inputs = {
  email: string;
  password: string;
};

//
const SignUpPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(false);
  const [postUsers, options] = usePostUsersMutation();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Create user using Firebase
      await createUserWithEmailAndPassword(data.email, data.password);

      const options = {
        email: data.email,
      };
      await postUsers(options);

      router.push("/profile");
      console.log(data);
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center loginContainer">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Event Endeavors
          </h1>
          <p className="text-3xl my-4">
            Explore, Innovate, and Connect at the Intersection of Ideas
          </p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <span>
            <Link
              className="bg-[#fd614a] px-4 py-2 text-xl text-white rounded-md"
              href="/"
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              className="bg-[#fd614a] px-4 py-2 text-xl text-white rounded-md"
              href="/about"
              aria-current="page"
            >
              About
            </Link>
          </span>
          <span>
            <Link
              className="bg-[#fd614a] px-4 py-2 text-xl text-white rounded-md"
              href="/events"
              aria-current="page"
            >
              Events
            </Link>
          </span>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
      >
        <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center loginContainer">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="my-6 font-bold text-3xl text-[#fd614a]">
            Create New Account
          </h1>

          <form
            action=""
            className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              {...register("email", { required: true })}
              type="email"
              variant="underlined"
              label="Email"
              placeholder="Enter your email"
              className="block w-full p-4 text-lg rounded-sm bg-white mb-4"
            />
            <Input
              {...register("password", { required: true })}
              label="Password"
              variant="underlined"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaEye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="block w-full p-4 text-lg rounded-sm bg-white"
            />
            <Button
              type="submit"
              className="mt-6 uppercase block w-full rounded-none text-white bg-[#fd614a] focus:outline-none"
            >
              sign up
            </Button>

            <div className="text-center text-gray-400 hover:underline hover:text-gray-100 mt-3">
              <Link
                href="/login"
                className="text-[#fd614a] border p-2 border-[#fd614a]"
              >
                Already have an account?
              </Link>
            </div>

            <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
              <span>
                <Link
                  className="bg-[#fd614a] px-4 py-2 text-xl text-white rounded-md"
                  href="/"
                >
                  Home
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
