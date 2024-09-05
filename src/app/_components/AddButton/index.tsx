type AddButtonProps = {
  onClick: (title: string) => void;
  title: string;
};

export const AddButton = ({ onClick, title }: AddButtonProps) => {
  return (
    <button
      className="border border-black text-black p-1"
      onClick={() => onClick(title)}
    >
      Add
    </button>
  );
};
