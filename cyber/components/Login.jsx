import React from "react";
import Head from "next/head";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex h-screen bg-blue-400">
      <Head>
        <title>login</title>
      </Head>
      <div className="m-auto rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className="w-full h-full relative bg-blue-200 shadow-2xl">
          <Image src="/2.png" alt="" fill style={{objectFit: "contain"}} />
        </div>
        <div className="right flex flex-col justify-evenly cursor-default bg-white">
          <div className="">
            <h1 className="text-gray-800 text-4xl text-center font-bold py-4">
              Cyber <span className="text-blue-500"> Shelf</span>{" "}
            </h1>
            <p className="w-3/4 mx-auto text-center">
              The perfect way to organize your books and keep track of your reading.
            </p>
          </div>
          <div className="-mt-3">
            <form
              action=""
              method="post"
              className="flex flex-col justify-center items-center"
            >
              <div className="form-group -mt-3">
                <input
                  type="Email"
                  placeholder="Your Email"
                  pattern=".+@globex\.com"
                  size="30"
                  required
                  className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="password"
                  placeholder="Your Password"
                  required
                  className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
                />
              </div>
              <div className="form-group my-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold w-32">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
