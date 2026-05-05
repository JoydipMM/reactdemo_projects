import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../shared/api/client';
import { QUERY_KEYS } from '../../../shared/constants/queryKeys';
import { handleError } from '../../../shared/utils/handleError';
import { transformTrailer } from '../../../shared/utils/transformAPI';

const useGetBrowseTrailers = (movieID) => {
  return useQuery({
    queryKey: QUERY_KEYS.BROWSE_TRAILER(movieID),
    queryFn: async () => {
      try {
        const { data } = await apiClient.get(`/movie/${movieID}/videos`);
        const trailerVideos = data.results
          .filter((item) => item.type === "Trailer" && item.site === "YouTube")
          .map(transformTrailer);
        return trailerVideos[0] || null;
      } catch (error) {
        throw new Error(handleError(error));
      }
    },
    enabled: !!movieID,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetBrowseTrailers;
