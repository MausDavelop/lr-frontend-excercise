import Collection from '@Src/models/collection';
import Token from '@Src/models/token';
import { ApiService } from '../apiService';
import { knownTokens } from '@Src/constants/knownData';
import { Order, OrderResult, OrderType } from '@Src/models/order';

interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

class LooksRareService extends ApiService {
  constructor() {
    super('https://api.looksrare.org/api/v1');
  }

  private _addKnownTokens = async (address: string) => {
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
      tokens: await this._addKnownTokens(address)
    };
  };

  public getToken = async (collectionAddress: string, id: string) => {
    const { data } = await this.get<ApiResponse<Token>>('/tokens', {
      collection: collectionAddress,
      tokenId: id
    });

    return data.data;
  };

  public getOrders = async (orderType?: string, first = 5, cursor?: string): Promise<Order[]> => {
    const { data } = await this.get<ApiResponse<OrderResult[]>>('/orders', {
      isOrderAsk: orderType === OrderType.ASK,
      pagination: {
        first,
        cursor
      }
    });

    return data.data.map((order) => {
      const startTime = new Date(order.startTime.toString());
      const endTime = new Date(order.endTime.toString());

      return {
        ...order,
        startTime,
        endTime
      };
    });
  };
}

export const looksRareService = new LooksRareService();
