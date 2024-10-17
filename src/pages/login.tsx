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
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

//

interface IFormInput {
  email: string;
  password: string;
}

//
const LoginPage = () => {
  const router = useRouter();

  // user
  const [userId, setUserId] = useState("user@event.com");
  const [password, setPassword] = useState("abcd1234");
  const [userIdCopied, setUserIdCopied] = useState(false);
  const [passwordCopied, setPasswordCopied] = useState(false);

  // admin
  const [adminId, setAdminId] = useState("admin@event.com");
  const [adminPassword, setAdminPassword] = useState("abcd1234");
  const [adminIdCopied, setAdminIdCopied] = useState(false);
  const [adminPasswordCopied, setAdminPasswordCopied] = useState(false);

  //
  // user
  const handleCopyUserId = () => {
    setUserIdCopied(true);
    setTimeout(() => setUserIdCopied(false), 1000);
  };

  const handleCopyPassword = () => {
    setPasswordCopied(true);
    setTimeout(() => setPasswordCopied(false), 1000);
  };

  // admin
  const handleCopyAdminId = () => {
    setAdminIdCopied(true);
    setTimeout(() => setAdminIdCopied(false), 1000);
  };

  const handleCopyAdminPassword = () => {
    setAdminPasswordCopied(true);
    setTimeout(() => setAdminPasswordCopied(false), 1000);
  };
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
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center loginContainer"
        // style={{
        //   backgroundImage: "url(/assets/images/login.jpg)",
        // }}
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
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center loginContainer"
          // style={{
          //   backgroundImage: "url(/assets/images/login.jpg)",
          // }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="my-1 font-bold text-3xl text-[#fd614a]">
            Login To Continue
          </h1>
          <div className="py-3 space-x-2">
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer">
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
              size="sm"
              type="email"
              variant="underlined"
              label="Email"
              // placeholder="Enter your email"
              className="block w-full p-2 text-lg rounded-sm bg-white mb-4"
            />
            <Input
              {...register("password", { required: true })}
              label="Password"
              size="sm"
              variant="underlined"
              // placeholder="Enter your password"
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
              className="block w-full p-2 text-lg rounded-sm bg-white"
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

            <div className=" text-center right-0 left-0 flex justify-center space-x-4 mt-5 lg:hidden ">
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
          <div className="bg-[#ffc6be] p-2 w-fit block m-auto mt-1">
            <div className="flex justify-center items-center">
              <p className="text-sm text-black">{userId}</p>
              <Button className="bg-inherit  text-xl">
                <CopyToClipboard text={userId} onCopy={handleCopyUserId}>
                  <FaRegCopy />
                </CopyToClipboard>
              </Button>
              <p className="text-sm text-black">{password} </p>
              <Button className="bg-inherit text-xl">
                <CopyToClipboard text={password} onCopy={handleCopyPassword}>
                  <FaRegCopy />
                </CopyToClipboard>
              </Button>
            </div>

            {/* admin credential */}
            <div className="flex  justify-center items-center">
              <p className="text-sm text-black">{adminId} </p>
              <Button className="bg-inherit  text-xl">
                <CopyToClipboard text={adminId} onCopy={handleCopyAdminId}>
                  <FaRegCopy />
                </CopyToClipboard>
              </Button>

              <p className="text-sm text-black">{adminPassword} </p>
              <Button className="bg-inherit  text-xl">
                <CopyToClipboard
                  text={adminPassword}
                  onCopy={handleCopyAdminPassword}
                >
                  <FaRegCopy />
                </CopyToClipboard>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
