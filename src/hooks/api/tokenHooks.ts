import { looksRareService } from '@Src/services/looksrare/looksrareService';
import { exists } from '@Src/utils/typeUtils';
import { useQuery } from 'react-query';

export const useToken = (collectionAddress?: string, id?: string) => {
  return useQuery(
    ['getToken', collectionAddress, id],
    async () => {
      if (exists(collectionAddress) && exists(id)) {
        return looksRareService.getToken(collectionAddress, id);
      }

      return null;
    },
    {
      enabled: exists(collectionAddress) && exists(id)
    }
  );
};
