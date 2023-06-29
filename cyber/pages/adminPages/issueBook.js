import React from "react";

const issueBook = () => {
  return (
    <div className=" h-full flex justify-center items-center bg-gray-200">
      <div className="shadow-lg w-3/4 m-4 p-16 ml-8 flex flex-col justify-center items-center bg-white">
        <h3 className="text-3xl font-bold text-blue-500 my-2 cursor-default">
          Issue Book
        </h3>
        <div className="flex  flex-col justify-center items-center font-semibold gap-3 text-blue-gray-200">
          <div className="">
            <input
              type="text"
              placeholder="Book"
              required
              minLength="2"
              maxLength="40"
              className="px-4 h-12 my-1 border border-1 rounded-lg w-80"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Student"
              required
              minLength="2"
              maxLength="40"
              className="px-4 h-12 my-1 border border-1 rounded-lg w-80"
            />
          </div>
          <div className="">
            <input
              type="number"
              placeholder="Days"
              required
              className="px-4 h-12 my-1 border border-1 rounded-lg w-80"
            />
          </div>
          <div className="form-group my-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold w-32">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default issueBook;
