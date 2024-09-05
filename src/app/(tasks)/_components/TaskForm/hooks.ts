import { TaskInputType } from "@/app/entities/schema/task-input/types";
import { taskInputSchema } from "@/app/entities/schema/task-input/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

export const useTaskFormHooks = () => {
  const useFormMethods = useForm<TaskInputType>({
    defaultValues: {
      title: "",
    },
    resolver: zodResolver(taskInputSchema),
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useFormMethods;

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (title: string) => {
      return await axios.post(process.env.TASKS_URL!, { title });
    },
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ["tasks"] });
    },
  });

  const onSubmit = async (data: TaskInputType) => {
    const { title } = data;

    mutate(title);
  };

  return {
    useFormMethods,
    isValid,
    isSubmitting,
    onSubmit: handleSubmit(onSubmit),
  };
};
