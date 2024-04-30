import { Typography } from "@material-tailwind/react";

const BlogsBox = () => {
  return (
    <div className="lg:pr-2 select-none mb-3">
      <Typography variant="h5" className="mb-2 lg:mb-0 p-2 lg:pt-3">
        آخرین وبلاگ ها
      </Typography>
      <div className="border rounded-md flex flex-col justify-start bg-white p-2 pt-3 shadow-lg shadow-blue-gray-400">
        <div className="p-1 pt-2">
          <a>مدت زمان یادگیری برنامه نویسی چقدر است ؟</a>
          <p className="text-sm my-1 text-gray-500">14 بهمن 1402</p>
        </div>
        <hr />
        <div className=" mt-2 p-1">
          <a>معرفی 8 هوش مصنوعی برای تغییر چهره</a>
          <p className="text-sm my-1 text-gray-500">7 بهمن 1402</p>
          <hr />
        </div>

        <button className=" text-blue-500 my-2 hover:bg-light-blue-50 p-2">
          مشاهده بیشتر
        </button>
      </div>
    </div>
  );
};

export default BlogsBox;
