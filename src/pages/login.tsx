import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div>
      Welcome To Event Endeavors
      <FaGoogle
        onClick={() =>
          signIn("google", {
            callbackUrl: "http://localhost:3000/profile/",
          })
        }
      />
    </div>
  );
};

export default LoginPage;
