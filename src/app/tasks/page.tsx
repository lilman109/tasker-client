"use client";

import { TaskContent } from "@/app/tasks/_components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const TasksPage = () => {
  const router = useRouter();
  const { isFetching, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(process.env.TASKS_URL!, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  if (!data && !isFetching) {
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center h-screen">
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && data && <TaskContent tasks={data} />}
    </div>
  );
};

export default TasksPage;
