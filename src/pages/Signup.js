import React from "react";
import Illustration from ".././Components/Illustration";
import SignupForm from "../Components/SignupForm";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration/>
        <SignupForm/>
      </div>
    </>
  );
}
