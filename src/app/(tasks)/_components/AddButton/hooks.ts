import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useAddButtonHooks = ({ title }: { title: string }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => {
      return await axios.post(process.env.TASKS_URL!, { title });
    },
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ["tasks"] });
    },
  });

  const addTask = () => {
    mutate();
  };

  return {
    addTask,
  };
};
