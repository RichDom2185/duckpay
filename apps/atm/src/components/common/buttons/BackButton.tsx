import { Icon } from "@iconify/react/dist/iconify.js";

const BackButton = () => {
  return (
    <button
      className="btn btn-lg btn-ghost text-2xl rounded-2xl mx-6 my-4 absolute left-0"
      onClick={() => window.history.back()}
    >
      <Icon className="-ml-[0.125em]" inline icon="tabler:arrow-back" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
