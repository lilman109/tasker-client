import { useCallback, useState } from "react";

type Task = {
  id: number;
  title: string;
};

const Tasks: Task[] = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
  { id: 3, title: "Task 3" },
];

export const useTaskContentHooks = () => {
  const [tasks, setTasks] = useState<Task[]>(Tasks);
  const [title, setTitle] = useState<string>("");

  const onClick = useCallback(
    (title: string) => {
      if (!title) return;
      const id = tasks.length + 1;
      setTasks([...tasks, { id, title }]);
      setTitle("");
    },
    [tasks],
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    [title],
  );

  return {
    tasks,
    onClick,
    title,
    onChange,
  };
};
