import { ChevronDownIcon } from "@heroicons/react/24/solid";

const TagsBox = ({tags, handleSelectedTags, selectedTags, setTgasMenuOpen, tagsMenuOpen}) => {
  return (
    <div className="rounded-lg bg-white shadow-md shadow-blue-gray-400 my-4">
      <div
        className="flex flex-row justify-between items-center p-3 hover:cursor-pointer"
        onClick={() => setTgasMenuOpen(!tagsMenuOpen)}
      >
        <div className="text-lg text-gray-600">
          <span>برچسب ها</span>
        </div>
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`h-3 w-3 transition-transform ml-2 ${
            tagsMenuOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* Tags Menu */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          tagsMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <hr />
        <div>
          <div
            className="grid grid-cols-1 p-4 py-2 overflow-y-auto"
            style={{ maxHeight: "250px" }}
          >
            {tags &&
              tags.map((tag) => (
                <label
                  key={tag.id}
                  htmlFor=""
                  className="flex flex-row items-center p-2"
                >
                  <input
                    type="checkbox"
                    value={tag.id}
                    checked={selectedTags.includes(tag.id)}
                    onChange={handleSelectedTags}
                    className={`h-4 w-4`}
                  />
                  <span className="mr-2 text-purple-500">{tag.name}</span>
                </label>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsBox
