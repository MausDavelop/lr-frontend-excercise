import { Collection } from '@Src/models/collection';
import { ApiService } from '../api-service';

class LooksRareService extends ApiService {
  constructor() {
    super('https://api.looksrare.org/api/v1');
  }

  public getCollection = (address: string) => {
    return this.get<Collection>('/collections', { address });
  };
}

export const looksRareService = new LooksRareService();
