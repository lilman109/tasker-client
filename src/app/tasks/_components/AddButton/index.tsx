type AddButtonProps = {
  isValid: boolean;
  isSubmitting: boolean;
};
export const AddButton = ({ isValid, isSubmitting }: AddButtonProps) => {
  return (
    <button
      className="border border-black text-black p-1"
      type="submit"
      disabled={!isValid || isSubmitting}
    >
      Add
    </button>
  );
};
