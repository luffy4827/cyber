import React from "react";

const issueReport = () => {
  return (
    <div className=" h-full flex justify-center items-center bg-gray-200">
      <div className="shadow-lg w-3/4 m-4 p-16 ml-8 flex flex-col justify-center items-center bg-white">
        <h3 className="text-3xl font-bold text-blue-500 my-2 cursor-default">
          Issue Book Report
        </h3>
        <table className="min-w-full text-center text-sm font-light table-auto">
          <thead className="border-4 bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
            <tr>
              <td scope="col" className=" px-6 py-4">
                Name
              </td>
              <td scope="col" className=" px-6 py-4">
                Book Name
              </td>
              <td scope="col" className=" px-6 py-4">
                Issue Date
              </td>
              <td scope="col" className=" px-6 py-4">
                Return Date
              </td>
            </tr>
          </thead>
          <tbody>
            {/* {book &&
              book.map((book) => ( */}
            <tr className="border-4 dark:border-neutral-500" >
              <td className="whitespace-nowrap  px-6 py-4 font-medium"> Hari</td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">
                Java
              </td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">
                2020/11/4
              </td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">
                2021/1/18
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default issueReport;
