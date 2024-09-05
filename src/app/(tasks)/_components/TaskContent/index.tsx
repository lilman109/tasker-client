"use client";

import { TaskInput, TaskCard, AddButton } from "@/app/(tasks)/_components";
import { useTaskContentHooks } from "./hooks";
import { TaskForm } from "../TaskForm";

type Task = {
  id: string;
  title: string;
  createdAt: string;
};

type TaskContentProps = {
  tasks: Task[];
};

export const TaskContent = ({ tasks }: TaskContentProps) => {
  const { title, onChange } = useTaskContentHooks();
  return (
    <>
      <div className="flex mt-20">
        <TaskForm/>
      </div>
      <div className="flex flex-col w-full mt-3">
        {tasks.map((task, i) => (
          <TaskCard key={i} title={task.title} />
        ))}
      </div>
    </>
  );
};
