import { looksRareService } from '@Src/services/looksrare/looksrareService';
import { exists } from '@Src/utils/typeUtils';
import { useQuery } from 'react-query';

export const useCollection = (address?: string) => {
  return useQuery(
    ['getCollection', address],
    async () => {
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
