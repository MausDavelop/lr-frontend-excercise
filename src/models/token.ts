import { BaseCollection } from './collection';

export default interface Token {
  id: number;
  name: string;
  description?: string;
  collectionAddress: string;
  tokenId: string;
  tokenURI: string;
  imageURI: string;
  isExplicit: boolean;
  isAnimated: boolean;
  flag: string;
  collection: BaseCollection;
}
