import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: api.getProducts,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: api.getCategories,
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
  });
};
