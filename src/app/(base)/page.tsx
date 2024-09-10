"use client";

import { useQuery } from "@tanstack/react-query";
import SignIn from "./_components/SignIn";
import SignUp from "./_components/SignUp";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const { isFetching, data } = useQuery({
    queryKey: ["isauthenticated"],
    queryFn: async () => {
      const res = await axios.get(process.env.IS_USER_AUTHENTICATED_URL!, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  if (data && !isFetching) {
    router.push("/tasks");
  }

  return (
    <div className="flex gap-36">
      <SignUp />
      <SignIn />
    </div>
  );
};

export default HomePage;
