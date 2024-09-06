"use client";

import { TaskCard } from "@/app/(tasks)/_components";
import { TaskForm } from "../TaskForm";

type Task = {
  id: number;
  title: string;
  createdAt: string;
};

type TaskContentProps = {
  tasks: Task[];
};

export const TaskContent = ({ tasks }: TaskContentProps) => {
  return (
    <>
      <div className="flex mt-20">
        <TaskForm />
      </div>
      <div className="flex flex-col w-full mt-3">
        {tasks.map((task, i) => (
          <TaskCard key={i} title={task.title} id={task.id} />
        ))}
      </div>
    </>
  );
};
