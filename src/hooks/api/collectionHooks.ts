import { knownCollections } from '@Src/constants/knownData';
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

export const useCollections = () => {
  return useQuery(['getCollections'], async () => {
    const collections = await Promise.all(
      knownCollections.map((address) => {
        return looksRareService.getCollection(address);
      })
    );

    return collections;
  });
};
