import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {pending ? "Submitting..." : "Submit Blog"}
    </button>
  );
};

export default SubmitButton;
