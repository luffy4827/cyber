import React from "react";
const Login = () => {
  return (
    <div className="container flex justify-center items-center h-screen gap-2 ">
      <div className="login-form-1 shadow-lg w-1/2 p-16 ml-8 flex flex-col justify-center items-center">
        <h3 className="text-3xl font-bold text-blue-500 my-2 cursor-default">
          Student Login
        </h3>
        <form
          action=""
          method="post"
          className="flex flex-col justify-center items-center"
        >
          <div className="form-group my-2 ">
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
      <div className="login-form-2 bg-blue-500 shadow-lg w-1/2 p-16 mr-8 flex flex-col justify-center items-center">
        <h3 className="text-3xl font-bold text-white my-2 cursor-default">
          Admin Login
        </h3>
        <form
          action=""
          method="post"
          className="flex flex-col justify-center items-center"
        >
          <div className="form-group my-2">
            <input
              type="Email"
              placeholder="Your Email"
              pattern=".+@globex\.com"
              size="30"
              required
              className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
            />
            {/* <Label style="color:red">*<?php echo $msg ?></label> */}
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
            <button className="bg-white hover:bg-gray-200 text-blue-500 my-2 py-3 rounded-md font-bold w-32">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
