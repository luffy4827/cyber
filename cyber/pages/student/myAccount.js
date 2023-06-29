import React from "react";

const MyAccount = () => {
  return (
    <div className=" h-full flex justify-center items-center bg-gray-200">
      <div className="shadow-lg w-3/4 m-4 p-16 ml-8 flex flex-col justify-center items-center bg-white">
        <h3 className="text-3xl font-bold text-blue-500 my-2 cursor-default">
          My Account
        </h3>
        <div className="flex flex-col gap-2 font-bold text-xl text-gray-700">
          <div className="flex gap-5">
            <label htmlFor="" className="">Name:</label>
            <p>Ram Kumar</p>
          </div>
          <div className="flex gap-5">
            <label htmlFor="">Email:</label>
            <p>Ram@gmail.com</p>
          </div>
          <div className="flex gap-5">
            <label htmlFor="">Account Type:</label>
            <p>Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
