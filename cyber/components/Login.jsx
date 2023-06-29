import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axioss from "@/lib/axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const csrf = () => axioss.get("/sanctum/csrf-cookie");

  const handleLogin = async (event) => {
    event.preventDefault();
    await csrf();
    try {
      // if you have user_email in backend you need to pass object like this
      // await axioss.post('/login', {user_email: email, password})

      await axioss.post("/login", { email, password });
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (err) {
      if (err.response.status === 422) {
        setErrors(err.response.data.errors);
      }
    }
  };

  return (
    <div className="flex h-screen bg-blue-400">
      <Head>
        <title>login</title>
      </Head>
      <div className="m-auto rounded-md w-3/5 min-h-[75%] grid lg:grid-cols-2">
        <div className="w-full h-full relative bg-blue-200 shadow-2xl">
          <Image src="/2.png" alt="" fill style={{ objectFit: "contain" }} />
        </div>
        <div className="right flex flex-col justify-evenly cursor-default bg-white">
          <div className="my-2 py-2">
            <h1 className="text-gray-800 text-4xl text-center font-bold py-4">
              Cyber <span className="text-blue-500"> Shelf</span>{" "}
            </h1>
            <p className="w-3/4 mx-auto text-center">
              The perfect way to organize your books and keep track of your
              reading.
            </p>
          </div>
          <div className="-mt-3">
            <form
              onSubmit={handleLogin}
              className="flex flex-col justify-center items-center"
            >
              {/* email */}
              <div className="form-group -mt-3">
                <input
                  type="Email"
                  placeholder="Your Email"
                  pattern=".+@gmail\.com"
                  size="30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
                />

                {/* error message */}
                {errors.email && (
                  <div className="flex">
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.email[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* password */}
              <div className="form-group my-2">
                <input
                  type="password"
                  placeholder="Your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 h-12 my-2 border border-1 rounded-lg w-80"
                />

                {/* error message */}
                {errors.password && (
                  <div className="flex">
                    <span className="text-red-400 text-sm m-2 p-2">
                      {errors.password[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Login Button */}
              <div className="form-group my-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold w-32">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
