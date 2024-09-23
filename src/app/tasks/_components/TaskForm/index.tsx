import { AddButton, TaskInput } from "@/app/tasks/_components";
import { FormProvider } from "react-hook-form";
import { useTaskFormHooks } from "./hooks";

export const TaskForm = () => {
  const { useFormMethods, onSubmit, isValid, loading } = useTaskFormHooks();
  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={onSubmit}>
        <TaskInput />
        <AddButton isValid={isValid} isSubmitting={loading} />
      </form>
    </FormProvider>
  );
};
