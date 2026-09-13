import { use, type Dispatch, type SetStateAction } from "react";
import type { ITechnologie } from "../type";
import TechnologieCard from "./TechnologieCard";
import { RxCross2 } from "react-icons/rx";
import { Bounce, toast } from "react-toastify";

interface ITechnologiesProps {
  technologiesPromise: Promise<ITechnologie[]>;
  stack: ITechnologie[];
  setStack: Dispatch<SetStateAction<ITechnologie[]>>;
}

const Technologies = ({
  technologiesPromise,
  stack,
  setStack,
}: ITechnologiesProps) => {
  const data = use(technologiesPromise);
  const handleRemoveFromStack = (technology: ITechnologie) => {
    const restTechnologie = stack.filter((item) => item.id !== technology.id);
    setStack(restTechnologie);
    toast.warn("Stack successfully remove!", {
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
  };
  const handleRemoveAll = () => {
    setStack([]);
    toast.warn("All stack successfully remove!", {
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
  };
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Explore the{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            {" "}
            Technologies{" "}
          </span>{" "}
        </h2>
        <p className="text-gray-800 text-[15px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl container mx-auto px-4 py-8 gap-4 items-start">
        <div className="md:w-3/4 w-full min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {data.map((technology) => (
              <TechnologieCard
                key={technology.id}
                technology={technology}
                stack={stack}
                setStack={setStack}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/4 w-full min-w-0  transition hover:scale-[1.02]">
          <div className="sticky top-8 bg-gray-500 p-6 rounded-2xl shadow-sm border border-gray-600">
            <div className="items-center mb-6">
              <h3 className="font-bold text-lg text-slate-800">Your Stack</h3>
              {stack.length === 0 ? (
                <p>No technologies selected yet.</p>
              ) : (
                <p>{stack.length} Technology Selected</p>
              )}
            </div>
            {stack.length === 0 ? (
              <div className="text-center py-8 border border-dashed border-gray-900 rounded-xl">
                <p className="text-sm text-slate-400">Your stack is empty.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3 mb-6">
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-3 bg-gray-500 rounded-xl border border-gray-700 hover:border-slate-200 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                      />
                      <div>
                        <p className="text-base font-bold text-slate-700">
                          {item.name}
                        </p>
                        <p className="text-sm font-bold text-slate-700">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromStack(item)}
                      className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-1 rounded-md transition-colors"
                      title="Remove"
                    >
                      <RxCross2 />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => handleRemoveAll()}
                  className="text-red-400 hover:text-red-600 hover:bg-red-200 p-1 rounded-md border-red-300 border-2 transition-colors"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
