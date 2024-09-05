"use client";

import { TaskInput, TaskCard, AddButton } from "@/app/(tasks)/_components";
import { useTaskContentHooks } from "./hooks";

type Task = {
  id: string;
  title: string;
  createdAt: string;
};

type TaskContentProps = {
  tasks: Task[];
};

export const TaskContent = ({ tasks }: TaskContentProps) => {
  const { onClick, title, onChange } = useTaskContentHooks();
  return (
    <>
      <div className="flex mt-20">
        <TaskInput onChange={onChange} title={title} />
        <AddButton onClick={onClick} title={title} />
      </div>
      <div className="flex flex-col w-full mt-3">
        {tasks.map((task, i) => (
          <TaskCard key={i} title={task.title} />
        ))}
      </div>
    </>
  );
};
