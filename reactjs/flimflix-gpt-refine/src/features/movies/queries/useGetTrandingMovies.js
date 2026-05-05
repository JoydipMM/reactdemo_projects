import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../shared/api/client';
import { QUERY_KEYS } from '../../../shared/constants/queryKeys';
import { handleError } from '../../../shared/utils/handleError';
import { transformMovie } from '../../../shared/utils/transformAPI';

const useGetTrandingMovies = () => {
  return useQuery({
    queryKey: QUERY_KEYS.TRENDING,
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/trending/movie/day?language=en-US&page=1');
        return data.results.map(transformMovie);
      } catch (error) {
        throw new Error(handleError(error));
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetTrandingMovies;
