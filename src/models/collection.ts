import Token from './token';

export default interface Collection {
  address: string;
  owner: string;
  name: string;
  type: 'ERC721' | 'ERC1155';
  description: string;
  websiteLink: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  telegramLink: string;
  mediumLink: string;
  isVerified: boolean;
  isExplicit: boolean;
  logoURI: string;
  bannerURI: string;
  tokens: Token[];
}

export interface BaseCollection {
  address: string;
  name: string;
  description: string;
  logoURI: string;
  bannerURI: string;
}
