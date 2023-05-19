import axios from "../lib/axios";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";

export const useAuth = () => {
  const router = useRouter();

  // loading
  const [isLoading, setIsLoading] = useState(true);

  // user
  // swr allows us to fatch data and refatch data
  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/v1/user", () =>
    axios
      .get("/api/v1/user")
      .then((response) => response.data.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      })
  );

  // CSRF

  // login

  // logout

  return {
    user,
    csrf,
    isLoading,
    login,
    logout,
  };
};
