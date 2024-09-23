"use client";

import { useEffect } from "react";
import { TaskContent } from "@/app/tasks/_components";
import { useGetTasksQuery } from "@/generated/graphql";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const TasksPage = () => {
  const router = useRouter();
  /* const { isFetching, data } = useQuery({ */
  /*   queryKey: ["tasks"], */
  /*   queryFn: async () => { */
  /*     const res = await axios.get(process.env.TASKS_URL!, { */
  /*       withCredentials: true, */
  /*     }); */
  /*     return res.data; */
  /*   }, */
  /* }); */

  const { data, loading, error } = useGetTasksQuery();

  if (!data && !loading) {
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center h-screen">
      {loading && <h2>Loading...</h2>}
      {!loading && data && <TaskContent tasks={data.tasks} />}
    </div>
  );
};

export default TasksPage;
