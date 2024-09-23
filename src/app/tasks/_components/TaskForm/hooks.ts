import { TaskInputType } from "@/entities/schema/task-input/types";
import { taskInputSchema } from "@/entities/schema/task-input/zodSchema";
import { useCreateTaskMutation } from "@/generated/graphql";
import client from "@/lib/apollo-client";
import { zodResolver } from "@hookform/resolvers/zod";
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
    formState: { isValid },
    reset,
  } = useFormMethods;

  const [createTaskMutation, { loading }] = useCreateTaskMutation({
    onCompleted: () => {
      client.refetchQueries({ include: ["GetTasks"] });
    },
  });

  const onSubmit = async (data: TaskInputType) => {
    const { title } = data;

    try {
      await createTaskMutation({ variables: { input: title } });
      reset({ title: "" });
    } catch (error) {
      // Handle error
    }
  };

  return {
    useFormMethods,
    isValid,
    loading,
    onSubmit: handleSubmit(onSubmit),
  };
};
