import React from "react";
import { useState } from "react";
import axioss from "../../lib/axios";

const addStudent = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [type, setType] = useState("student");

  const addStudent = async () => {

    await axioss.get('http://localhost:8000/sanctum/csrf-cookie').then(getcsrvf => {
       axioss.post('http://localhost:8000/api/students', {
        name,email,password,type})
        .then(function (response) {                    
        console.log(response);
        })
        .catch(function (error) {
        });
    })
  }


  return (
    <div className=" h-full flex justify-center items-center bg-gray-200">
      <div className="shadow-lg w-3/4 h-3/4 p-16 ml-8 flex flex-col justify-center items-center bg-white">
        <h3 className="text-3xl font-bold text-blue-500 my-2 cursor-default">
          Add Student Section
        </h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          addStudent();
        }}
          action=""
          method="post"
          className="flex flex-col justify-center items-center"
        >

          {/* name */}
          <div className="form-group my-2 ">
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              required
              minLength="10"
              maxLength="20"
              className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
            />
          </div>

          {/* email */}
          <div className="form-group my-2 ">
            <input
              type="Email"
              placeholder="Email"
              pattern=".+@gmail\.com"
              size="30"
              value={email}
            onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
            />
          </div>

          {/* password */}
          <div className="form-group my-2">
            <input
              type="password"
              placeholder="Password"
              minLength="8"
              value={password}
            onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
            />
          </div>
          <div>

            {/* type */}
            <label htmlFor="" className="mx-2 font-bold text-gray-700">
              Choose Type
            </label>
            <select name="type"
              value={type}
            onChange={(e) => setType(e.target.value)}
              className="mx-2 px-4 h-12 my-2 border border-1 rounded-md bg-blue-gray-200 text-white font-bold cursor-pointer"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <div className="form-group my-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold w-32">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addStudent;
