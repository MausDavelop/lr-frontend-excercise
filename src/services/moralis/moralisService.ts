import { OwnedNFT } from '@Src/models/nft';
import { ApiService } from '../apiService';

interface ApiResponse<T> {
  result: T;
}

class MoralisService extends ApiService {
  constructor() {
    super('https://deep-index.moralis.io/api/v2', {
      headers: {
        Accept: 'application/json',
        'X-API-KEY': process.env.NEXT_PUBLIC_MORALIS_API_KEY
      }
    });
  }

  public getWalletNfts = async (wallet: string) => {
    const { data } = await this.get<ApiResponse<OwnedNFT[]>>(`/${wallet}/nft`);

    return data?.result;
  };
}

export const moralisService = new MoralisService();
