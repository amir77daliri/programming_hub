import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useProblemSet = (queryParams) => {
  const url = `${BASE_URL}/problemset/list/`;
  const { data, isPending, isError } = useQuery({
    queryKey: ["problemset", {queryParams}],
    queryFn: async function () {
      const result = await axios.get(url, {
        params: {
          searchTerm: queryParams.searchTerm || 'All',
          level: queryParams.level || 'All',
          category: queryParams.category || 'All',
          selectedTags: queryParams.selectedTags.length > 0 ?  queryParams.selectedTags : ['All'],
          selectedContests: queryParams.selectedContests.length > 0 ?  queryParams.selectedContests : ['All']
        }
      });
      return result.data;
    },
    select: (data) => {
      const { results } = data;
      return results;
    },
  });

  return { data, isPending };
};

export const useFetchTags = () => {
  const url = `${BASE_URL}/problemset/tags/`;
  const { data, isPending, isError } = useQuery({
    queryKey: ["tags"],
    queryFn: async function () {
      const result = await axios.get(url);
      return result.data;
    },
  });

  return { data, isPending, isError };
};

export const useFetchContests = () => {
  const url = `${BASE_URL}/contests/list/`;
  const { data, isPending, isError } = useQuery({
    queryKey: ["contests"],
    queryFn: async function () {
      const result = await axios.get(url);
      return result.data;
    },
  });

  return { data, isPending, isError };
};

export const useProblem = (qId) => {
  const url = `${BASE_URL}/problemset/${qId}/`;
  console.log(url)
  const { data, isPending, isError } = useQuery({
    queryKey: ["problem", {id: qId}],
    queryFn: async function () {
      const result = await axios.get(url);
      return result.data;
    },
  });

  return { data, isPending, isError };
};
