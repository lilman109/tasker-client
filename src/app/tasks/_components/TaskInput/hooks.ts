import { TaskInputType } from "@/entities/schema/task-input/types";
import { useFormContext } from "react-hook-form";

export const useTaskInputHooks = () => {
  const { control} = useFormContext<TaskInputType>();

  return {
    control,
  };
};
