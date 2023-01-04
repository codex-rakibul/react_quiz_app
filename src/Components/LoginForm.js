import React from 'react'
import Form from './Form';
import TextInput from "../Components/TextInput";
import Button from "../Components/Button";

export default function LoginForm() {
  return (
    <Form style={{ height: "330px" }} >
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
       
      />

      <Button type="submit">
        <span>Submit Now</span>
      </Button>

     

      <div className="info">
        {/* Don't have an account? <Link to="/signup">Signup</Link> instead. */}
      </div>
    </Form>
  )
}
