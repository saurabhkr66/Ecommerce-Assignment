import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export const useProductDetail = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => api.getProduct(id),
    staleTime: 5 * 60 * 1000,
    enabled: !!id, // Only fetch if ID exists
  });
};
