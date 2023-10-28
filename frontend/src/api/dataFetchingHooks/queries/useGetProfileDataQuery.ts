import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../queryKeys";
import axios from "axios";
import { IProfileAPIResponse } from "interfaces/apiInterfaces";

const useGetProfileDataQuery = (): IProfileAPIResponse => {
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/profile`;

  const { data, isLoading, error, isLoadingError, isError } = useQuery({
    queryKey: [QueryKeys.Profile],
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
export default useGetProfileDataQuery;
