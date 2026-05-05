import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../shared/api/client';
import { QUERY_KEYS } from '../../../shared/constants/queryKeys';
import { handleError } from '../../../shared/utils/handleError';
import { transformMovie } from '../../../shared/utils/transformAPI';

const useNowPlayingMovies = () => {
  return useQuery({
    queryKey: QUERY_KEYS.NOW_PLAYING,
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/movie/now_playing?page=1');
        return data.results.map(transformMovie);
      } catch (error) {
        throw new Error(handleError(error));
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useNowPlayingMovies;
