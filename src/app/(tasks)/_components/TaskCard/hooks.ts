import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useTaskCardHooks = ({ id }: { id: number }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask } = useMutation({
    mutationFn: async (id: number) => {
      return await axios.delete(`${process.env.TASKS_URL!}/${id}`);
    },
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ["tasks"] });
    },
  });

  const onClick = async () => {
    deleteTask(id);
  };

  return {
    onClick,
  };
};
