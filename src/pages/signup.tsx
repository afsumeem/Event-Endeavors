import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import auth from "@/firebase/firebase.auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
//

type Inputs = {
  email: string;
  password: string;
};

//
const SignUpPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Create user using Firebase
      await createUserWithEmailAndPassword(data.email, data.password);

      router.push("/profile");
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center mt-20">
      <div className="flex flex-col justify-center items-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 bg-indigo-100 w-1/2 d-block m-auto p-20">
        <h2 className="font-bold text-3xl mt-5 ">Create new Account</h2>
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
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
