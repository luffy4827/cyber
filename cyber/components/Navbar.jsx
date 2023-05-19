import React from "react";
import Link from "next/link";


const Navbar = () => (
  <div className="bg-blue-500 py-2">

  <nav className="flex justify-between items-center mx-8 ">
    <div>
      <h2 className="text-xl font-bold text-white cursor-default">CyberShelf</h2>
    </div>
    <div>
      <ul className="flex justify-center font-bold text-white gap-8">
        <Link href="/">
          {" "}
          <li> Home </li>{" "}
        </Link>
        <Link href="/about">
          {" "}
          <li> About </li>{" "}
        </Link>
      </ul>
    </div>
  </nav>
  </div>
);

export default Navbar;
