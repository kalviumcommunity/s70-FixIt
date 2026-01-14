"use client";

import AuthForm from "../components/AuthForm";

export default function SignupPage() {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup submitted");
    // later: call backend API
  };

  return (
    <AuthForm
      title="Create Your Account 🚀"
      buttonText="Sign Up"
      isSignup={true}
      onSubmit={handleSignup}
    />
  );
}
