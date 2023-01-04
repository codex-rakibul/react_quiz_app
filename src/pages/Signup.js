import React from "react";
import Illustration from ".././Components/Illustration";
import Form from ".././Components/Form";
import style from ".././styles/Signup.module.css";
import TextInput from "../Components/TextInput";
import CheckBox from "../Components/CheckBox";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration/>
        <Form className={`${style.signup} form`}>
            <TextInput type="text" placeholder="Enter Name" icon="person"/>
            <TextInput type="text" placeholder="Enter Email" icon="alternate_email"/>
            <TextInput type="password" placeholder="Enter Password" icon="lock"/>
            <TextInput type="password" placeholder="Confirm Password" icon="lock_clock"/>
            <CheckBox text="I agree to the Terms &amp; Conditions"/>
            <Button><span>Submit Now</span></Button>
            <div className="info">
              Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
      </div>
    </>
  );
}
