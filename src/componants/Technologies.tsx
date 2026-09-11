import { use } from "react";
import type { ITechnologie } from "../type";

interface ITechnologiesProps {
  technologiesPromise: Promise<ITechnologie[]>
}

const Technologies = ({ technologiesPromise }: ITechnologiesProps) => {
  const data = use(technologiesPromise)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10 items-start">
      <div className="flex-1 w-full">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Explore the <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-gray-800 text-[15px]">Pick one technology per category to build your ideal stack.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
             {
              data.map(technology => (<TechnologieCard key={technology.id} technology={technology} />))
             }
          </div>
      </div>
      <div className="w-full lg:w-[320px] shrink-0">
        <div className="sticky top-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-lg text-slate-800">Your Stack</h3>
             <p>{} Technology Selected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;