import Collection from '@Src/models/collection';
import Token from '@Src/models/token';
import { ApiService } from '../apiService';
import { knownTokens } from '@Src/constants/knownData';

interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

class LooksRareService extends ApiService {
  constructor() {
    super('https://api.looksrare.org/api/v1');
  }

  private addKnownTokens = async (address: string) => {
    const knownCollectionTokens = knownTokens.filter(({ collection }) => collection === address);

    const tokens = await Promise.all(
      knownCollectionTokens.map(async ({ id }) => {
        return this.getToken(address, id);
      })
    );

    return tokens;
  };

  public getCollection = async (address: string) => {
    const { data } = await this.get<ApiResponse<Collection>>('/collections', { address });

    return {
      ...data.data,
      tokens: await this.addKnownTokens(address)
    };
  };

  public getToken = async (collectionAddress: string, id: string) => {
    const { data } = await this.get<ApiResponse<Token>>('/tokens', {
      collection: collectionAddress,
      tokenId: id
    });

    return data.data;
  };
}

export const looksRareService = new LooksRareService();
