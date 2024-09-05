type TaskCardProps = {
  title: string;
};

export const TaskCard = ({ title }: TaskCardProps) => {
  return (
    <div className="bg-white rounded shadow-md p-4 mb-4 w-full">
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default TaskCard;
