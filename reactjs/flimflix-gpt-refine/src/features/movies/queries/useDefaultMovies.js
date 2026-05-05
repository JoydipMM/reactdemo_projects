import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../shared/api/client';
import { QUERY_KEYS } from '../../../shared/constants/queryKeys';
import { handleError } from '../../../shared/utils/handleError';
import { transformMovie } from '../../../shared/utils/transformAPI';

const useDefaultMovies = () => {
  return useQuery({
    queryKey: QUERY_KEYS.DEFAULT_MOVIES,
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/movie/popular?language=en-US&page=1');
        return data.results.slice(5, 15).map(transformMovie);
      } catch (error) {
        throw new Error(handleError(error));
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useDefaultMovies;
