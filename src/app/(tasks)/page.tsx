"use client";

import { TaskContent } from "@/app/(tasks)/_components";
import { useQuery } from "@tanstack/react-query";

const TasksPage = () => {
  const { isFetching, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      if (!process.env.TASKS_URL) {
        throw new Error("TASKS_URL is not defined");
      }
      const res = await fetch(process.env.TASKS_URL);
      return res.json();
    },
  });

  return (
    <div className="flex flex-col items-center h-screen">
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && <TaskContent tasks={data} />}
    </div>
  );
};

export default TasksPage;
