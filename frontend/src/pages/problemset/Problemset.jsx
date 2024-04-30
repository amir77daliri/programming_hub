import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useProblemSet,
  useFetchTags,
  useFetchContests,
} from "../../Hooks/useProblemSet";

// components :
import Navbar from "../../components/Navbar/Navbar";
import LevelBox from "../../components/filterBoxes/LevelBox";
import TagsBox from "../../components/filterBoxes/TagsBox";
import ContestBox from "../../components/filterBoxes/ContestBox";
import Categories from "../../components/CategoriesList";
import SearchBox from "../../components/SearchBox";
import Spinner from "../../components/Spinner/Spinner";

// icons :
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";

let interval = ''

const Problemset = () => {
  const [levelMenuOpen, setLevelMenuOpen] = useState(true);
  const [tagsMenuOpen, setTgasMenuOpen] = useState(false);
  const [contestMenuOpen, setContestMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [level, setLevel] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedContests, setSelectedContest] = useState([]);
  const [category, setCategory] = useState(null)
  const [queryParams, setQueryParams] = useState({
    searchTerm: searchTerm,
    level: level || "",
    selectedTags: selectedTags || [],
    selectedContests: selectedContests || [],
  });

  useEffect(() => {
    setQueryParams({
      searchTerm,
      level,
      selectedTags,
      selectedContests,
      category
    });
  }, [level, selectedTags, selectedContests, searchTerm, category]);

  // fetch data : use useQuery
  const { data, isPending } = useProblemSet(queryParams);
  const { data: tags } = useFetchTags();
  const { data: contests } = useFetchContests();

  const handleLevelCheckbox = (e) => {
    if (level === e.target.value) {
      setLevel(null);
    } else {
      setLevel(e.target.value);
    }
  };

  const handleSelectedTags = (e) => {
    if (selectedTags.includes(+e.target.value)) {
      setSelectedTags((prevTags) =>
        prevTags.filter((tagId) => tagId !== +e.target.value)
      );
    } else {
      setSelectedTags((prevTags) => [...prevTags, +e.target.value]);
    }
  };

  const handleSelectedContests = (e) => {
    if (selectedContests.includes(+e.target.value)) {
      setSelectedContest((prevTags) =>
        prevTags.filter((cId) => cId !== +e.target.value)
      );
    } else {
      setSelectedContest((prevTags) => [...prevTags, +e.target.value]);
    }
  };

  const problemSearch = async (e) => {
    clearTimeout(interval);

    interval = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, 800);
  };


  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        {/* Section  */}
        <div className="container mx-auto mt-2">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-2">
            <div
              className="lg:col-span-3 lg:mr-6 p-2"
              style={{ position: "sticky", top: "70px" }}
            >
              {/* select level box */}
              <LevelBox
                setLevelMenuOpen={setLevelMenuOpen}
                levelMenuOpen={levelMenuOpen}
                handleLevelCheckbox={handleLevelCheckbox}
                level={level}
                setLevel={setLevel}
              />

              {/* select Tags box */}
              <TagsBox
                tags={tags}
                handleSelectedTags={handleSelectedTags}
                selectedTags={selectedTags}
                setTgasMenuOpen={setTgasMenuOpen}
                tagsMenuOpen={tagsMenuOpen}
              />

              {/* Contest Box  */}
              <ContestBox
                contests={contests}
                selectedContests={selectedContests}
                handleSelectedContests={handleSelectedContests}
                setContestMenuOpen={setContestMenuOpen}
                contestMenuOpen={contestMenuOpen}
              />
            </div>

            {/* List Of Problems (Questions)  */}
            <div className="lg:col-span-7">
              {/* Categories */}
              <Categories setCategory={setCategory} category={category}/>

              {/* Search box */}
              <SearchBox problemSearch={problemSearch} />

              {/* Problemset Box*/}
              <div className="bg-white rounded-lg">
                {/* Ordering*/}
                <div className="flex flex-row items-center p-2 border-b-2 pb-4 bor">
                  <Bars3BottomRightIcon strokeWidth={2} className="w-6 h-6" />
                  <span className="mx-2">مرتب سازی:</span>
                  <span className="mx-2 text-blue-500 hover:cursor-pointer">
                    جدیدترین
                  </span>
                  <span className="mx-2 hover:cursor-pointer">قدیمی ترین</span>
                  <span className="mx-2 hover:cursor-pointer">بیشترین حل</span>
                  <span className="mx-2 hover:cursor-pointer">کمترین حل</span>
                </div>

                {/* Table of content */}
                {isPending ? (
                  <div className="lg:mt-10 mt-6">
                    <Spinner />
                  </div>
                ) : (
                  <div className="px-2">
                    <table className="w-full overflow-x-auto border-collapse ">
                      <thead className="">
                        <tr className="" style={{ color: "#A0AEC0" }}>
                          <th className="py-3 px-2"></th>
                          <th
                            className="text-start px-2 py-3"
                            style={{ minWidth: "60px" }}
                          >
                            سوال
                          </th>
                          <th className="py-3 px-2">تعداد حل</th>
                          <th className="py-3 px-2">سختی</th>
                          <th className="py-3 px-2 text-start max-w-40">
                            برچسب ها
                          </th>
                          <th className="py-3 px-2"></th>
                        </tr>
                      </thead>
                      <tbody className="border-b-2 last:border-b-0 divide-y">
                        {data?.length > 0
                          ? data.map((q) => (
                              <tr
                                key={q.id}
                                className="text-center w-1"
                                style={{ minHeight: "54px" }}
                              >
                                <td className="w-1 h-14">
                                  <div className="flex items-center w-6 h-6 border-4 rounded-full border-gray-300 text-center"></div>
                                </td>
                                <td
                                  className="text-blue-400 text-start ps-2"
                                  style={{ minWidth: "60px" }}
                                >
                                  <Link
                                    to={`/problemset/${q.id}`}
                                    className="hover:text-base"
                                  >
                                    {q.title.replace(/ /g, "\u2009")}
                                  </Link>
                                </td>
                                <td>{q.count_of_solved}</td>
                                <td className="text-red-500">
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
                                </td>
                                <td>
                                  <div className="flex flex-row select-none items-center">
                                    {q.tags.slice(0, 3).map((tag) => (
                                      <span
                                        key={tag.id}
                                        className="bg-gray-200 p-1 m-1 rounded-md"
                                        style={{ color: "#718096" }}
                                      >
                                        <span className="text-sm p-1">
                                          {tag.name.replace(/ /g, "\u2009")}
                                        </span>
                                      </span>
                                    ))}
                                  </div>
                                </td>
                                <td className="w-2 pl-4">
                                  <button>
                                    <BookmarkIcon
                                      strokeWidth={2}
                                      className="w-6 h-6"
                                    />
                                  </button>
                                </td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </table>
                  </div>
                )}
                {/* Table End*/}

                {!isPending && data.length < 1 ? (
                  <div className="lg:mt-10 pb-10 flex w-full justify-center items-center">اطلاعاتی یافت نشد.</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problemset;
