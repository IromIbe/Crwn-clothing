import React, { useState } from "react";
import FormInput from "../Form-input/FormInput";
import CustomButton from "../customButton/CustomButton";
import "./SignUp.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const { displayName, email, password, confirmPassword } = credentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = credentials;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  function handleChange(e) {
    const  name = e.target.name;
    const value = e.target.value;
    console.log("hiii", "hii");
    setCredentials({ ...credentials, [name]: value });
  }
  return (
    <div className='sign-up'>
      <h2 className='title'>I Do Not Have An Account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          // value={displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        />

        <FormInput
          type='email'
          name='email'
          // value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          // value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <p style={{fontSize:"14px", color:"red", marginTop:"-40px"}}>Password should have a minimum length of six characters</p>
        <FormInput
          type='password'
          name='confirmPassword'
          // value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
