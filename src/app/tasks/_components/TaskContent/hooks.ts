import { useCallback, useState } from "react";

export const useTaskContentHooks = () => {
  const [title, setTitle] = useState<string>("");

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    [title],
  );

  return {
    title,
    onChange,
  };
};
