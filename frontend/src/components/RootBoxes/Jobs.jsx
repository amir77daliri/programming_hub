import { Typography } from "@material-tailwind/react";

const JobsBox = () => {
  return (
    <div className="mt-3 lg:pr-2 select-none">
      <Typography variant="h5" className="mt-1 mb-2 p-2">
        فرصت های شغلی پیشنهادی
      </Typography>
      <div className="border rounded-md flex flex-col justify-start bg-white p-2 pt-3 shadow-lg shadow-blue-gray-400">
        <div className="p-1 pt-2">
          <a>توسعه دهنده Back-end</a>
          <p className="text-sm my-1 text-gray-500">Soorin Acacemy</p>
        </div>
        <hr />
        <div className=" mt-2 p-1">
          <a>توسعه دهنده پایتون</a>
          <p className="text-sm my-1 text-gray-500">وی آی پی آیتم</p>
          <hr />
        </div>

        <div className=" mt-2 p-1">
          <a>Senior Front-end developer (react)</a>
          <p className="text-sm my-1 text-gray-500">صرافی ارز دیجیتال تبدیل</p>
          <hr />
        </div>

        <button className=" text-blue-500 my-2 hover:bg-light-blue-50 p-2">
          مشاهده بیشتر
        </button>
      </div>
    </div>
  );
};

export default JobsBox;
