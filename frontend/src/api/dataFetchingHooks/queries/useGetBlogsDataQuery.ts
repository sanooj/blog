import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../queryKeys";
import { IBlogAPIResponse } from "interfaces/apiInterfaces";
import axios from "axios";

const useGetBlogsDataQuery = (): IBlogAPIResponse => {
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/blogs`;

  const { data, isLoading, error, isLoadingError, isError } = useQuery({
    queryKey: [QueryKeys.Blogs],
    queryFn: async () => {
      try {
        const { data } = await axios.get(apiUrl);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  return { data, error, isLoading, isLoadingError, isError };
};
export default useGetBlogsDataQuery;
