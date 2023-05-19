import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Home</h1>
        <span className="text-7xl">🏡</span>
      </div>
    </>
  );
}

// <img class="icons" src="images/icon/book.png" width="30px" height="30px"/>
