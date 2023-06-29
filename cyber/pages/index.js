import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="about w-full py-16 my-auto">
      <div className="main flex justify-around items-center w-auto gap-10 mx-4">
        <div className=" flex-1">
          <Image
            src="/cyber.webp"
            alt=""
            width={500}
            height={500}
            className="mix-blend-color-burn"
          />
        </div>
        {/* <img src="/cyber.png" alt="" className="w-16 h-11" /> */}
        <div className="about-text cursor-default flex-1 w-1/2">
          <h1 className="text-7xl font-bold capitalize mb-4">about us</h1>
          <h3
            className="text-xl capitalize
          mb-4 tracking-widest font-semibold"
          >
            Cyber <span className="text-blue-500"> Shelf</span>{" "}
          </h3>
          <p className="tracking-wider leading-7 mb-9 text-justify ">
            Cyber Shelf is a state-of-the-art library management system designed
            to meet the needs of modern libraries. It is a web-based software
            solution that provides an intuitive and user-friendly interface for
            librarians and library patrons alike. With Cyber Shelf, libraries
            can easily manage their collections, track their items, and ensure
            their patrons always have access to the materials they need. Whether
            youre a small community library or a large academic institution,
            Cyber Shelf can help streamline your operations, enhance your
            experience, and provide a platform for improved library services.
            With Cyber Shelf, libraries can take the next step in library
            management: Powered by the latest technology, and designed with the
            needs of libraries in mind, Cyber Shelf is the ultimate solution for
            your library management needs.
          </p>
          <div className="form-group my-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold w-32">
              <Link href="./adminPages/addStudent">
                {" "}
                <li> Lets start </li>{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// <img class="icons" src="images/icon/book.png" width="30px" height="30px"/>
