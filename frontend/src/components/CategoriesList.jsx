// icons :
import {
  AcademicCapIcon,
  ChartBarIcon,
  BookmarkIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const Categories = ({setCategory, category}) => {
  return (
    <div className="flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden sm:flex-wrap mb-3">
      <span
      onClick={(e) => setCategory('All')}
        style={{ userSelect: "none" }}
        className={`${category === null ? 'bg-blue-200' : 'bg-blue-50'} flex flex-row justify-between items-center  text-black hover:bg-blue-200 mt-2 mr-2 p-1  rounded-full hover:cursor-pointer`}
      >
        <span className="p-2">همه دسته ها</span>
      </span>
      <span
      onClick={(e) => setCategory('المپیاد')}
        style={{ userSelect: "none" }}
        className={`${category === 'المپیاد' ? 'bg-blue-200' : 'bg-blue-50'} flex flex-row justify-between items-center  text-black hover:bg-blue-200 mt-2 mr-2 p-1  rounded-full hover:cursor-pointer`}
      >
        <BookmarkIcon
          strokeWidth={2.5}
          className="h-5 w-5 transition-transform mx-1"
        />
        <span className="p-2 pr-0">المپیاد</span>
      </span>
      <span
      onClick={(e) => setCategory('دانشگاهی')}
        style={{ userSelect: "none" }}
        className={`${category === 'دانشگاهی' ? 'bg-blue-200' : 'bg-blue-50'} flex flex-row justify-between items-center  text-black hover:bg-blue-200 mt-2 mr-2 p-1  rounded-full hover:cursor-pointer`}
      >
        <AcademicCapIcon
          strokeWidth={2.5}
          className="h-5 w-5 transition-transform mx-1"
        />
        <span className="p-2 pr-0">دانشگاهی</span>
      </span>
      <span
      onClick={(e) => setCategory('تکنولوژی')}
        style={{ userSelect: "none" }}
        className={`${category === 'تکنولوژی' ? 'bg-blue-200' : 'bg-blue-50'} flex flex-row justify-between items-center  text-black hover:bg-blue-200 mt-2 mr-2 p-1  rounded-full hover:cursor-pointer`}
      >
        <ComputerDesktopIcon
          strokeWidth={2.5}
          className="h-5 w-5 transition-transform mx-1"
        />
        <span className="p-2 pr-0">تکنولوژی</span>
      </span>
      <span
      onClick={(e) => setCategory('مسابقه')}
        style={{ userSelect: "none" }}
        className={`${category === 'مسابقه' ? 'bg-blue-200' : 'bg-blue-50'} flex flex-row justify-between items-center  text-black hover:bg-blue-200 mt-2 mr-2 p-1  rounded-full hover:cursor-pointer`}
      >
        <ChartBarIcon
          strokeWidth={2.5}
          className="h-5 w-5 transition-transform mx-1"
        />
        <span className="p-2 pr-0">مسابقه</span>
      </span>
    </div>
  );
};

export default Categories;
