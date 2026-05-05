import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../shared/api/client';
import { QUERY_KEYS } from '../../../shared/constants/queryKeys';
import { handleError } from '../../../shared/utils/handleError';
import { transformGenre } from '../../../shared/utils/transformAPI';

const useGenres = () => {
  const { data: genres = [], isLoading, isError } = useQuery({
    queryKey: QUERY_KEYS.GENRES,
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/genre/movie/list?language=en');
        return data.genres.map(transformGenre);
      } catch (error) {
        throw new Error(handleError(error));
      }
    },
    staleTime: Infinity,
  });

  const getGenreName = (id) => {
    const genre = genres.find((g) => g.id === id);
    return genre ? genre.name : '';
  };

  return { genres, isLoading, isError, getGenreName };
};

export default useGenres;
