"use client";

import { TaskInput, TaskCard, AddButton } from "@/app/_components";
import { useTaskContentHooks } from "./hooks";

export const TaskContent = () => {
  console.log("render");
  const { tasks, onClick, title, onChange } = useTaskContentHooks();

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
