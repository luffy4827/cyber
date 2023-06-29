import React from "react";
import Link from "next/link";

const Navbar = () => (
  <div className="bg-blue-500 py-2">
    <nav className="flex justify-center items-center mx-8 ">
      <div>
        <h2 className="text-2xl font-bold text-white cursor-default">
          CyberShelf
        </h2>
      </div>
    </nav>
  </div>
);

export default Navbar;
