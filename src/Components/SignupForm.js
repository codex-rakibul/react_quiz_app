import React, { useState } from "react";
import Form from ".././Components/Form";
import TextInput from "../Components/TextInput";
import CheckBox from "../Components/CheckBox";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";


export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

 
  async function handleSubmit(e){
    e.preventDefault();
    if(password !== confirmPassword){
        return setError("Passwords don't match")
    }
    try {
        setError("");
        setLoading(true);
        await signup(email,password,username);
        navigate("/");
    } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Failed to create an account!");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter Name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Enter Email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter Password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Confirm Password"
        icon="lock_clock"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CheckBox
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        required
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      { error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
