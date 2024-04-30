import { useState, useEffect } from "react";
import axios from "axios";

// components :
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProblemsBox from "../../components/RootBoxes/problems";
import ContestsBox from "../../components/RootBoxes/Contests";
import BlogsBox from "../../components/RootBoxes/Blogs";
import JobsBox from "../../components/RootBoxes/Jobs";
import { useSelector } from "react-redux";

const BASE_URL = import.meta.env.VITE_API_URL;

const Root = () => {
  const { token } = useSelector((state) => state.auth);
  const [problemset, setProblemset] = useState([]);
  const [contests, setContests] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const headers = {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        };
        const { data } = await axios.get(`${BASE_URL}/home/`, {
          headers: headers,
        });
        const { questions, contests } = data;
        setProblemset(questions);
        setContests(contests);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4 mb-2">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-2">
          <div className="lg:col-span-7 lg:mt-3">
            <img
              className="mt-2 rounded-md h-44 lg:h-56"
              src="https://quera.org/media/CACHE/images/public/slider/images/no8up68/f71792d2a66643ed9d5cffd9e9eefdfc.png"
              alt=""
            />

            <div className="flex flex-col w-full lg:flex-row gap-2 lg:mt-6 mt-4">
              <ProblemsBox questions={problemset} />
              <ContestsBox contests={contests} />
            </div>
          </div>

          <div className="lg:col-span-3 lg:mr-6 w-full">
            <BlogsBox />
            <JobsBox />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
