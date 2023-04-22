import { looksRareService } from '@Src/services/looksrare/looksrareService';
import { useInfiniteQuery } from 'react-query';

export const useOrders = (orderType?: string) => {
  return useInfiniteQuery(
    ['orders', orderType],
    async ({ pageParam }) => {
      return looksRareService.getOrders(orderType, 10, pageParam);
    },
    {
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1].hash
    }
  );
};
