import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBox = ({problemSearch}) => {
  return (
    <div className="mb-4  relative">
      <input
        type="text"
        placeholder="جستجوی نام یا شماره سوال ..."
        onChange={problemSearch}
        className="w-full px-3 py-3 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <MagnifyingGlassIcon
        strokeWidth={2.5}
        className="w-6 h-6 absolute left-2 top-3 "
      />
    </div>
  );
};

export default SearchBox;
