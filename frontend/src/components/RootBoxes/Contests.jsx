import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ContestsBox = ({ contests }) => {
  return (
    <div className="w-full select-none">
      <Typography variant="h4" className="mt-1 mb-2">
        مسابقات
      </Typography>
      <div
        className="border rounded-md flex flex-col justify-between bg-white p-3 shadow-md shadow-blue-gray-400"
        style={{ minHeight: "292px" }}
      >
        <div className="flex flex-col justify-start">
          {contests.length > 0
            ? contests.map((c) => (
                <div className="p-1" key={c.id}>
                  <div className="p-1 text-blue-500 flex flex-row justify-between">
                    <div className="">
                      <Link className="hover:text-lg">{c.name.replace(/ /g, "\u2009")}</Link>
                      <p className="text-sm my-1 text-gray-500">
                        تعداد سوال : {c.q_count}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button className="bg-blue-300 p-2 text-white rounded-md text-sm">
                        ثبت نام در رویداد
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            : null}
        </div>

        <button className=" text-blue-500 my-1 hover:bg-light-blue-50 pb-1 pt-2 ">
          مشاهده بیشتر
        </button>
      </div>
    </div>
  );
};

export default ContestsBox;
