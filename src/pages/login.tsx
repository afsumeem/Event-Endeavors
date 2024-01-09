import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Link } from "@nextui-org/react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import auth from "@/firebase/firebase.auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React from "react";
//

interface IFormInput {
  email: string;
  password: string;
}

//
const LoginPage = () => {
  const router = useRouter();
  //
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  //

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    try {
      await signInWithEmailAndPassword(data.email, data.password);

      router.push("/profile");
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };
  return (
    <>
      {/* <div className="w-full flex flex-col gap-4 justify-center items-center mt-20">
        <div className="flex flex-col justify-center items-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 bg-indigo-100 w-1/2 d-block m-auto p-20">
          <h2 className="font-bold text-3xl mt-5 text-center">
            Login To Continue
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("email", { required: true })}
              type="email"
              variant="underlined"
              label="Email"
              placeholder="Enter your email"
              className="w-80 h-14 text-2xl"
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
              className="max-w-xs"
            />
            <button
              type="submit"
              className="p-3 bg-indigo-800 d-block m-auto text-white mt-4 rounded-md w-full"
            >
              Login
            </button>
            <FaGoogle
              onClick={async () => {
                try {
                  await signInWithGoogle();

                  router.push("/profile");
                } catch (error) {
                  console.error("Error occurred during login:", error);
                }
              }}
              className="my-4 text-3xl d-block m-auto"
            />
          </form>
        </div>
      </div> */}

      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
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
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="my-6 font-bold text-3xl text-[#fd614a]">
              Login To Continue
            </h1>
            <div className="py-6 space-x-2">
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                <FaGoogle
                  onClick={async () => {
                    try {
                      await signInWithGoogle();

                      router.push("/profile");
                    } catch (error) {
                      // console.error("Error occurred during login:", error);
                    }
                  }}
                />
              </span>
            </div>
            <p className="text-gray-100">Or Use Your Email Account</p>
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
              <div className="text-right text-gray-400 hover:underline hover:text-gray-100 mt-3">
                <a href="#">Forgot your password?</a>
              </div>

              <Button
                type="submit"
                className="mt-6 uppercase block w-full rounded-none text-white bg-[#fd614a] focus:outline-none"
              >
                sign in
              </Button>

              <div className="text-center text-gray-400 hover:underline hover:text-gray-100 mt-3">
                <Link
                  href="/signup"
                  className="text-[#fd614a] border p-2 border-[#fd614a]"
                >
                  Create Account
                </Link>
              </div>

              <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                <a href="#!" className="mr-6 text-white text-xl">
                  <FaFacebookF />
                </a>
                <a href="#!" className="mr-6 text-white text-xl">
                  <FaTwitter />
                </a>

                <a href="#!" className="mr-6 text-white text-xl">
                  <FaInstagram />
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
