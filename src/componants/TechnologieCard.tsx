import { type Dispatch, type SetStateAction } from "react";
import type { ITechnologie } from "../type";
import { Bounce, toast } from "react-toastify";

interface ITechnologieCardProps {
  technology: ITechnologie;
  stack: ITechnologie[];
  setStack: Dispatch<SetStateAction<ITechnologie[]>>;
}

const TechnologieCard = ({
  technology,
  stack,
  setStack,
}: ITechnologieCardProps) => {
  const isAdded =
    stack.find((item) => item.name === technology.name);
  const handleAddToStack = (technology: ITechnologie) => {
    if (isAdded) {
      setStack(stack.filter((item) => item.name !== technology.name));
      toast.warn("Alrady Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setStack([...stack, technology]);
      toast.success("Added to stack!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  };
  return (
    <div
      className={`bg-gray-500 p-6 rounded-2xl shadow-sm border w-full hover:shadow-md transition-all duration-300 ${isAdded ? "border-gray-900 border-2" : "border-gray-600"}`}
    >
      <div className=" transition hover:scale-[1.02]">
        <div className="flex justify-between items-start bg-gray-500 mb-4">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-12 h-12 object-contain"
        />
        <p
          className="border rounded-[14px] font-bold px-3.5 py-1.25 bg-(--badge-bg) text-(--badge-text)"
          style={
            {
              "--badge-bg": technology.badgeStyle.backgroundColor,
              "--badge-text": technology.badgeStyle.textColor,
            } as React.CSSProperties
          }
        >
          {technology.badge}
        </p>
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        {technology.name}
      </h3>
      <p className="text-gray-800 text-sm mb-6 grow">
        {technology.description}
      </p>
      <div className="flex justify-between items-center mt-auto py-4 border-t border-gray-800">
        <span className="border rounded-[5px] font-normal px-1 py-px text-[12px] bg-gray-600 border-gray-700 text-black-300">
          {technology.category}
        </span>
        <span className="text-[12px]">{technology.difficulty}</span>
        <span className="text-slate-600 font-semibold">
          ⭐{technology.rating}
        </span>
      </div>
      <button
        onClick={() => handleAddToStack(technology)}
        className={`text-sm font-medium px-4 py-2 w-full rounded-lg hover:bg-slate-700 transition-colors ${isAdded ? "bg-shadow-slate-500 hover:bg-shadow-slate-600 text-shadow-slate-900 cursor-not-allowed" : "bg-slate-800 hover:bg-slate-700 text-white"}`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
      </div>
    </div>
  );
};

export default TechnologieCard;
