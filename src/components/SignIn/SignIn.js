import React, { useState } from "react";
import "./SignIn.scss";
import FormInput from "../Form-input/FormInput";
import CustomButton from "../customButton/CustomButton";

function SignIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCredentials({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='sign-in'>
      <h2>I Already Have An Account</h2>
      <span>Sing In With Your Email And Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={credentials.email}
          handleChange={handleChange}
          required
          label='email'
        />

        <FormInput
          type='password'
          name='password'
          value={credentials.password}
          handleChange={handleChange}
          required
          label='password'
        />

        <CustomButton type='submit'>Sign In</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
