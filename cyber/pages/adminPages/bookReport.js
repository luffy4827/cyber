import React, { useState, useEffect } from "react";
import axios from "../../lib/axios";

const BookReport = () => {
  const [state, setState] = useState("loading");
  const [book, setBook] = useState([]);
  useEffect(() => {
    setState("loading");
    axios
      .get("/api/book")
      .then((response) => {
        setBook(response.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  return (
    // watch the books that are available in library
    <div className="flex h-full flex-col justify-center items-center bg-gray-200">
      <div className="shadow-lg w-3/4 m-4 p-16 ml-8 flex flex-col justify-center items-center bg-white">
        <h1 className="text-4xl mb-5 font-bold capitalize">
          Book Report Page
        </h1>
        <table className="min-w-full text-center text-sm font-light table-auto">
          <thead className="border-4 bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
            <tr>
              <td scope="col" className=" px-6 py-4">
                Name
              </td>
              <td scope="col" className=" px-6 py-4">
                Price
              </td>
              <td scope="col" className=" px-6 py-4">
                Quantity
              </td>
              <td scope="col" className=" px-6 py-4">
                Branch
              </td>
            </tr>
          </thead>
          <tbody>
            {book &&
              book.map((book) => (
                <tr className="border-4 dark:border-neutral-500" key={book.id}>
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                    {book.name}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                    {book.price}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                    {book.quantity}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                    {book.branch}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookReport;
