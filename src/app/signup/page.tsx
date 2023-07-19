"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  console.log("user", user);

  const onHandleSignup = async () => {};
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen py-2">
      <h1>SignUp</h1>
      <hr />
      <div className="my-2">
        <label className="px-2" htmlFor="username">
          UserName
        </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:text-black focus:border-gray-600"
          id="username"
          placeholder="enter your usename here..."
          style={{ color: "black" }}
        />
      </div>
      <div className="my-2">
        <label className="px-2" htmlFor="email">
          Email ID
        </label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:text-black focus:border-gray-600"
          id="email"
          placeholder="enter your email-ID here..."
        />
      </div>
      <div className="my-2">
        <label className="px-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:text-black focus:border-gray-600"
          id="password"
          placeholder="enter your password here..."
        />
      </div>
      <button
        onClick={onHandleSignup}
        className="py-2 px-4 m-4 border border-none bg-green-800 rounded-lg"
      >
        SignUp Here
      </button>
      <Link href={"/login"}>Return to Login Page</Link>
    </div>
  );
}
