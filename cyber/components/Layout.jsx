import React from "react";
import Link from "next/link";
import Menu from "../assets/data.json";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-blue-100 w-full md:w-60">
          <nav>
            <ul>
              {/* {Menu.Card.map(({ title, content }) => (
              <li key={title}>{content}</li>
            ))} */}
              {Menu.MenuItems.map(({ href, title }) => (
                <li className="m-2" key={title}>
                  <Link
                    href={href}
                    className={`flex p-2 bg-blue-500 rounded-md py-3 font-normal text-white hover:bg-blue-700 cursor-pointer ${
                      router.asPath === href && "bg-blue-800"
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
