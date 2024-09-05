type AddButtonProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
};

export const TaskInput = ({ onChange, title }: AddButtonProps) => {
  return (
    <input
      className="border border-black text-black p-1"
      type="text"
      onChange={onChange}
      value={title}
    />
  );
};
