import React from "react";

const addBook = () => {
  return (
    <div className=" h-full flex justify-center items-center bg-gray-200">
      <div className="shadow-lg w-3/4 m-4 p-16 ml-8 flex flex-col justify-center items-center bg-white">
        <h3 className="text-3xl font-bold text-blue-500 my-2 cursor-default">
          Add Book Section
        </h3>
        <form
          action=""
          method="post"
          className="flex flex-col justify-center items-center"
        >
          <div className="form-group my-2 ">
            <input
              type="text"
              placeholder="Book Name"
              required
              minLength="10"
              maxLength="20"
              className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
            />
          </div>
          <div className="form-group my-2 ">
            <input
              type="text"
              placeholder="Details"
              required
              minLength="10"
              maxLength="20"
              className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
            />
          </div>
          <div className="form-group my-2 ">
            <input
              type="text"
              placeholder="Author"
              required
              minLength="10"
              maxLength="20"
              className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
            />
          </div>
          <div className="form-group my-2 ">
            <input
              type="text"
              placeholder="Publication"
              required
              minLength="10"
              maxLength="20"
              className="px-4 h-12 my-1 border border-1 rounded-lg w-80"
            />
          </div>
          <div className="form-group my-2 mx-2 font-semibold text-blue-gray-200 flex gap-3">
            <div>
              <label> Branch: </label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="Book1"
                name="BIM"
                value="Book"
                className="cursor-pointer"
              />
              <label for="Book1" className="cursor-pointer">
                {" "}
                BIM
              </label>
              <input
                type="checkbox"
                id="Book2"
                name="CSIT"
                value="Book"
                className="cursor-pointer"
              />
              <label for="Book2" className="cursor-pointer">
                {" "}
                CSIT
              </label>
              <input
                type="checkbox"
                id="Book3"
                name="BCA"
                value="Book"
                className="cursor-pointer"
              />
              <label for="Book3" className="cursor-pointer">
                {" "}
                BCA
              </label>
            </div>
          </div>
          <div className="form-group my-2 ">
            <input
              type="number"
              placeholder="Price"
              className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
            />
          </div>
          <div className="form-group my-2 ">
            <input
              type="number"
              placeholder="Quantity"
              className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
            />
          </div>
          <div className="form-group my-2 font-semibold text-blue-gray-200 flex flex-col gap-2">
            <label for="avatar">Book Photo:</label>

            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
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

export default addBook;
