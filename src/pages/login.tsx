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

//

interface IFormInput {
  email: string;
  password: string;
}

//
const LoginPage = () => {
  const router = useRouter();
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
    <div>
      Welcome To Event Endeavors
      {/* <FaGoogle
        onClick={() =>
          signIn("google", {
            callbackUrl: "http://localhost:3000/profile/",
          })
        }
      /> */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <FaGoogle
            onClick={() => {
              signInWithGoogle();
              router.push("/profile");
            }}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("email", { required: true })}
              type="email"
              variant="underlined"
              label="Email"
              placeholder="Enter your email"
            />
            <Input
              {...register("password", { required: true })}
              type="password"
              variant="underlined"
              label="Password"
              placeholder="Enter your password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
