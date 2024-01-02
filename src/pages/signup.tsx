import React from "react";
import { Input } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <FaGoogle />
        <Input
          type="text"
          variant="underlined"
          label="Name"
          placeholder="Enter your Name"
        />
        <Input
          type="email"
          variant="underlined"
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          type="password"
          variant="underlined"
          label="Password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
