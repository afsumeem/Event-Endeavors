import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import auth from "@/firebase/firebase.auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

//

type Inputs = {
  email: string;
  password: string;
};

//
const SignUpPage = () => {
  const router = useRouter();
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
    <div className="w-full flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        {/* <FaGoogle /> */}
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
          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
