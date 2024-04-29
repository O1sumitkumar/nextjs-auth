"use client";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [login, setLogin] = useState<Login>({ email: "", password: "" });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <label className="w-full text-left px-2" htmlFor="Email">
          Email
        </label>
        <input
          type="email"
          className="border-2 border-gray-300 rounded-md p-2 text-cyan-950 w-full"
        />

        <label className="w-full text-left px-2" htmlFor="Password">
          Password
        </label>
        <input
          type="password"
          className="border-2 border-gray-300 rounded-md p-2 text-cyan-950 w-full"
        />

        <p className="w-full text-left text-xs">
          Dont have an account? <Link href="/signup">Create one</Link>
        </p>
        <button className="w-full bg-blue-500 text-white rounded-md py-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
