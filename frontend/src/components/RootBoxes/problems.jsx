import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProblemsBox = ({ questions }) => {
  return (
    <div className="w-full select-none">
      <Typography variant="h4" className="mt-1 mb-2">
        سوالات
      </Typography>
      <div
        className="border rounded-md flex flex-col justify-between bg-white p-3 shadow-md shadow-blue-gray-400"
        style={{ minHeight: "292px" }}
      >
        <div className="flex flex-col justify-start">
          {questions.length > 0
            ? questions.map((q) => (
                <div className="p-1" key={q.id}>
                  <div className="p-1 text-blue-500 flex flex-row justify-between">
                    <div className="flex flex-col justify-start">
                      <Link
                        to={`/problemset/${q.id}`}
                        className="hover:text-lg"
                      >
                        {q.title.replace(/ /g, "\u2009")}
                      </Link>
                      <div className="flex flex-row">
                        {q.tags.slice(0, 2).map((tag) => (
                          <p
                            className="text-sm my-1 text-gray-500 px-1"
                            key={tag.id}
                          >
                            {tag.name.replace(/ /g, "\u2009")}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-start text-gray-700 min-w-10 select-none">
                      <span
                        className={`w-full ${
                          q.level === "ساده"
                            ? "text-green-500"
                            : q.level === "متوسط"
                            ? "text-yellow-600"
                            : "text-red-500"
                        }`}
                      >
                        {q.level}
                      </span>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            : null}
        </div>

        <button className=" text-blue-500 my-1 hover:bg-light-blue-50 pb-1 pt-2 ">
          <Link to={"/problemset"}>مشاهده بیشتر</Link>
        </button>
      </div>
    </div>
  );
};

export default ProblemsBox;
