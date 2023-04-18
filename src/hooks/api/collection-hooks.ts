import { looksRareService } from '@Src/services/looksrare/looksrare-service';
import { exists } from '@Src/utils/type-utils';
import { useQuery } from 'react-query';

export const useCollection = (address?: string) => {
  return useQuery(
    ['getCollection', address],
    () => {
      if (exists(address)) {
        return looksRareService.getCollection(address);
      }

      return null;
    },
    {
      enabled: exists(address)
    }
  );
};
