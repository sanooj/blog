import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../queryKeys";
import { IExperienceAPIResponse } from "interfaces/apiInterfaces";
import axios from "axios";

const useGetExperienceDataQuery = (): IExperienceAPIResponse => {
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/experience`;

  const { data, isLoading, error, isLoadingError, isError } = useQuery({
    queryKey: [QueryKeys.Experience],
    queryFn: async () => {
      try {
        const { data } = await axios.get(apiUrl);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  return { data: data?.data, error, isLoading, isLoadingError, isError };
};
export default useGetExperienceDataQuery;
