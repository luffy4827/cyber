import React, { useState, useEffect } from "react";
import axios from "../../lib/axios";

const studentReport = () => {
  const [state, setState] = useState("loading");
  const [student, setStudent] = useState([]);
  useEffect(() => {
    setState("loading");
    axios
      .get("/api/students")
      .then((response) => {
        setStudent(response.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex h-full flex-col justify-center items-center bg-gray-200">
      <div className="shadow-lg w-3/4 m-4 p-16 ml-8 flex flex-col justify-center items-center bg-white">
        <h1 className="text-4xl mb-5 font-bold capitalize">
          student report page
        </h1>
        <table className="min-w-full text-center text-sm font-light table-auto">
          <thead className="border-4 bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
            <tr>
              <td scope="col" className=" px-6 py-4">Id</td>
              <td scope="col" className=" px-6 py-4">Name</td>
              <td scope="col" className=" px-6 py-4">Email</td>
            </tr>
          </thead>
          <tbody>
            {student &&
              student.map((stu) => (
                <tr className="border-4 dark:border-neutral-500" key={stu.id}>
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">{stu.id}</td>
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">{stu.name}</td>
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">{stu.email}</td>
                </tr>
                // <div className="item-container" key={stu.id}>
                //   Id:{stu.id} <div className="title">Name:{stu.name}</div>
                // </div>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default studentReport;
