import React, { useState, useEffect } from "react";
import axioss from "../../lib/axios";

const studentReport = () => {
  const [state, setState] = useState("loading");
  const [student, setStudent] = useState([]);
  useEffect(() => {
    setState("loading");
    axioss
      .get("/api/students")
      .then((response) => {
        setStudent(response.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="text-4xl mb-5 font-bold capitalize">
        student report page
      </h1>
      <span className="text-7xl">🏡</span>
      <table className="table-auto border-collapse border border-slate-400">
        <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
        </tr>
        </thead>
        <tbody>
        
      
      {student &&
        student.map((stu) => (
          <tr key={stu.id}>
            <td>{stu.id}</td>
            <td>{stu.name}</td>
          </tr>
          // <div className="item-container" key={stu.id}>
          //   Id:{stu.id} <div className="title">Name:{stu.name}</div>
          // </div>
        ))}
        </tbody>
        </table>
    </div>
  );
};

export default studentReport;
