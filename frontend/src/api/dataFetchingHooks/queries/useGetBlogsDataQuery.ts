import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../queryKeys";

interface DataQueryReturn {
  data: {
    count: number;
    data: {
      _id: string;
      title: string;
      image: string;
      imageDescription: string;
      summary: string;
      content: string;
      categories: string[];
      createdAt: string;
    }[];
  };
  error: any;
  isLoading: boolean;
  isLoadingError: boolean;
  isError: boolean;
}

const useGetBlogsDataQuery = (): DataQueryReturn => {
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/blogs`;

  const { data, isLoading, error, isLoadingError, isError } = useQuery({
    queryKey: [QueryKeys.Blogs],
    queryFn: () => {
      return fetch(apiUrl)
        .then((res) => res.json())
        .catch((err) => console.error(err));
    },
  });
  return { data, error, isLoading, isLoadingError, isError };
};
export default useGetBlogsDataQuery;
