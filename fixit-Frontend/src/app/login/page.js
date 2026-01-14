"use client";

import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
    // later: call backend API
  };

  return (
    <AuthForm
      title="Welcome Back 👋"
      buttonText="Login"
      onSubmit={handleLogin}
    />
  );
}
