import { Controller } from "react-hook-form";
import { useTaskInputHooks } from "./hooks";

export const TaskInput = () => {
  const { control } = useTaskInputHooks();

  return (
    <Controller
      name="title"
      control={control}
      render={({ field: { onChange, value } }) => (
        <input
          className="border border-black text-black p-1"
          type="text"
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};
