import DeleteIcon from "@mui/icons-material/Delete";
import { useTaskCardHooks } from "./hooks";

type TaskCardProps = {
  title: string;
  id: number;
};

export const TaskCard = ({ title, id }: TaskCardProps) => {
  const { onClick } = useTaskCardHooks({ id });

  return (
    <div className="bg-white rounded shadow-md p-4 mb-4 w-full flex justify-between">
      <p className="text-gray-600 ">{title}</p>
      <DeleteIcon sx={{ color: "red", cursor: "pointer" }} onClick={onClick} />
    </div>
  );
};

export default TaskCard;
