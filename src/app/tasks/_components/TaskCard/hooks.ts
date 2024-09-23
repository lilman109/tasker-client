import { useDeleteTaskMutation } from "@/generated/graphql";
import client from "@/lib/apollo-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useTaskCardHooks = ({ id }: { id: number }) => {
  /* const queryClient = useQueryClient(); */
  /* const { mutate: deleteTask } = useMutation({ */
  /*   mutationFn: async (id: number) => { */
  /*     return await axios.delete(`${process.env.TASKS_URL!}/${id}`); */
  /*   }, */
  /*   onSuccess() { */
  /*     queryClient.refetchQueries({ queryKey: ["tasks"] }); */
  /*   }, */
  /* }); */

  const [deleteTaskMutation] = useDeleteTaskMutation({
    onCompleted: () => {
      client.refetchQueries({ include: ["GetTasks"] });
    },
  });

  const onClick = async () => {
    try {
      await deleteTaskMutation({ variables: { id } });
    } catch (error) {
      console.log(error)
    }
  };

  return {
    onClick,
  };
};
