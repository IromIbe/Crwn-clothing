import React, { useState } from "react";
import "./SignIn.scss";
import FormInput from "../Form-input/FormInput";
import CustomButton from "../customButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = credentials;
      await signInWithEmailAndPassword(auth, email, password);
      setCredentials({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;

    const value = e.target.value;

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
          // value={credentials.email}
          handleChange={handleChange}
          required
          label='email'
        />

        <FormInput
          type='password'
          name='password'
          // value={credentials.password}
          handleChange={handleChange}
          required
          label='password'
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignedIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
