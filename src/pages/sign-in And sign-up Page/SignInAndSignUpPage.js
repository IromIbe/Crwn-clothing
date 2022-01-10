import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import "./SignInAndSignUp.scss";
import SignUp from "../../components/sign-up/SignUp";

function SignInAndSignUpPage() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUpPage;
