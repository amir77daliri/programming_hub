import { ChevronDownIcon } from "@heroicons/react/24/solid";

const LevelBox = ({setLevelMenuOpen, levelMenuOpen, handleLevelCheckbox, level, setLevel}) => {
  return (
      <div className="rounded-lg bg-white shadow-md shadow-blue-gray-400 my-4">
        <div
          className="flex flex-row justify-between items-center p-3 hover:cursor-pointer"
          onClick={() => setLevelMenuOpen(!levelMenuOpen)}
        >
          <div className="text-lg text-gray-600">
            <span>سختی</span>
          </div>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ml-2 ${
              levelMenuOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {/* Level menu */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            levelMenuOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <hr />
          <div className="">
            <div className="grid grid-cols-1 p-4 py-2">
              <label htmlFor="" className="flex flex-row items-center p-2">
                <input
                  type="checkbox"
                  value="ساده"
                  checked={level === "ساده"}
                  onChange={handleLevelCheckbox}
                  className="h-4 w-4 "
                />
                <span className="mr-2">ساده</span>
              </label>
              <label htmlFor="" className="flex flex-row items-center p-2">
                <input
                  type="checkbox"
                  checked={level === "متوسط"}
                  onChange={handleLevelCheckbox}
                  value="متوسط"
                  className="h-4 w-4 "
                />
                <span className="mr-2">متوسط</span>
              </label>
              <label htmlFor="" className="flex flex-row items-center p-2">
                <input
                  type="checkbox"
                  checked={level === "سخت"}
                  value="سخت"
                  onChange={handleLevelCheckbox}
                  className="h-4 w-4 "
                />
                <span className="mr-2">سخت</span>
              </label>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LevelBox;
