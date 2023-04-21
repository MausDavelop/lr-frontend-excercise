import { looksRareService } from '@Src/services/looksrare/looksrareService';
import { exists } from '@Src/utils/typeUtils';
import { useQuery } from 'react-query';

export const useOrders = () => {
  return useQuery(['orders'], async () => {
    return looksRareService.getOrders();
  });
};
