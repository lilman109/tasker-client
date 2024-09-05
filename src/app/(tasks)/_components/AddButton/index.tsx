import { useAddButtonHooks } from "./hooks";

type AddButtonProps = {
  title: string;
};

export const AddButton = ({ title }: AddButtonProps) => {
  const { addTask } = useAddButtonHooks({ title });
  return (
    <button className="border border-black text-black p-1" onClick={addTask}>
      Add
    </button>
  );
};
