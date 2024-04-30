import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ContestBox = ({contests, selectedContests, handleSelectedContests, setContestMenuOpen, contestMenuOpen}) => {
  return (
    <div className="rounded-lg bg-white shadow-md shadow-blue-gray-400 my-4">
      <div
        className="flex flex-row justify-between items-center p-3 hover:cursor-pointer"
        onClick={() => setContestMenuOpen(!contestMenuOpen)}
      >
        <div className="text-lg text-gray-600">
          <span>مسابقات</span>
        </div>
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`h-3 w-3 transition-transform ml-2 ${
            contestMenuOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          contestMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <hr />
        <div>
          <div
            className="grid grid-cols-1 p-4 py-2 overflow-y-auto"
            style={{ maxHeight: "250px" }}
          >
            {contests &&
              contests.map((c) => (
                <label
                  key={c.id}
                  htmlFor=""
                  className="flex flex-row items-center p-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedContests.includes(c.id)}
                    value={c.id}
                    onChange={handleSelectedContests}
                    className="h-4 w-4 "
                  />
                  <span className="mr-2 text-light-blue-800">
                    {c.name.replace(/ /g, "\u2009")}
                  </span>
                </label>
              ))}
          </div>
        </div>
      </div>
      {/* level menu  */}
    </div>
  );
};

export default ContestBox;
