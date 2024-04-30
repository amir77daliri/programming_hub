import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";


// components
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
// react query custom hook
import { useProblem } from "../../Hooks/useProblemSet";
import { useEffect } from "react";

let prefix = false;

const Problem = () => {
  const { qId } = useParams();
  const { data: q, isPending } = useProblem(qId);

  useEffect(() => {
    console.log(prefix)
    prefix = false
  }, [])
  if (q && q.content) {
    if(!prefix) {
      q.content = q.content.replace(
        /\/images\S+/g,
        (match) => {
          console.log('match is =', match)
          return `http://localhost:8000${match}`
        }
      );
      prefix = true
    }
  }

  return (
    <>
      <Navbar />
      {q && (
        <div className="flex flex-col">
          {/* Container  */}
          <div className="container mx-auto mt-2">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-2">
              {/* Side */}
              <div
                className="lg:col-span-3 lg:mr-6 p-2 lg:mt-2 bg-white rounded-md"
                style={{ position: "sticky", top: "70px", maxHeight: '250px' }}
              >
                <div className="p-1 flex flex-col">
                  <div className="flex flex-row justify-start p-2">
                    <div className="flex items-center w-7 h-7 border-4 rounded-full border-gray-300 text-center"></div>
                    <span className="mr-3 text-lg">
                      <Typography
                        variant="h6"
                        style={{
                          fontFamily: "inherit",
                        }}
                      >
                        {q?.title.replace(/ /g, "\u2009")}
                      </Typography>
                    </span>
                  </div>
                  <div className="flex flex-row justify-between p-2 items-center">
                    <Typography
                      variant="paragraph"
                      className=""
                      style={{
                        color: "rgb(0, 153, 204",
                        fontFamily: "inherit",
                      }}
                    >
                      {q?.contest.name.replace(/ /g, "\u2009")}
                    </Typography>
                    <span
                      className={`text-white p-1 text-sm rounded-sm min-w-12 text-center ${
                        q?.level === "ساده"
                          ? "bg-green-500"
                          : q?.level === "متوسط"
                          ? "bg-orange-500"
                          : "bg-red-500"
                      }`}
                    >
                      {q?.level}
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full px-1">
                  <div className="grid grid-cols-5 gap-1">
                    <button className="border p-2 px-3 text-xl rounded-md hover:bg-gray-200">
                      👍
                    </button>
                    <button className="border p-2 px-3 text-xl rounded-md hover:bg-gray-200">
                      👎
                    </button>
                    <button className="border p-2 px-3 text-xl rounded-md hover:bg-gray-200">
                      🤔
                    </button>
                    <button className="border pt-2 py-1 px-3  text-2xl rounded-md hover:bg-gray-200 text-red-500">
                      ❤
                    </button>
                    <button className="border p-2 px-3 text-xl rounded-md hover:bg-gray-200">
                      😭
                    </button>
                  </div>
                </div>
                <div className="mt-3 p-1 my-3 flex flex-row justify-start gap-2">
                  {q?.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-blue-gray-50 rounded-md p-2"
                    >
                      <span
                        className="text-sm"
                        style={{ fontSize: "12.25px", fontWeight: "lighter" }}
                      >
                        {tag.name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Question Content */}
              <div className="lg:col-span-7 lg:mt-2">
                <div className="grid grid-cols-1 lg:ml-6">
                  <div className="flex flex-row justify-between bg-white p-3 rounded-md items-center">
                    <span className="text-blue-500 text-lg">سوال</span>
                    <BookmarkIcon strokeWidth={2} className="w-5 h-5 ml-1" />
                  </div>

                  {/* Content */}
                  <div
                    dir="rtl"
                    className="bg-white mt-2 border rounded-md p-6"
                    style={{lineHeight: '35px'}}
                  >
                    <Markdown
                      remarkPlugins={[remarkGfm, remarkMath]}
                      rehypePlugins={[rehypeKatex, rehypeRaw]}
                    >
                      {q.content}
                    </Markdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Problem;
