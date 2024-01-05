import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import auth from "@/firebase/firebase.auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

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
    <div className="w-full flex flex-col gap-4 justify-center items-center mt-20">
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
    </div>
  );
};

export default LoginPage;
