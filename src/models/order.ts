export enum OrderStatus {
  CANCELLED = 'CANCELLED',
  ERC_APPROVAL = 'ERC_APPROVAL',
  ERC20_APPROVAL = 'ERC20_APPROVAL',
  ERC20_BALANCE = 'ERC20_BALANCE',
  EXECUTED = 'EXECUTED',
  EXPIRED = 'EXPIRED',
  INVALID_OWNER = 'INVALID_OWNER',
  VALID = 'VALID'
}

export enum OrderType {
  BID = 'BID',
  ASK = 'ASK'
}

export interface OrderResult {
  hash: string;
  collectionAddress: string;
  tokenId: string;
  isOrderAsk: boolean;
  signer: string;
  strategy: string;
  currencyAddress: string;
  amount: string;
  price: string;
  nonce: string;
  startTime: number;
  endTime: number;
  minPercentageToAsk: number;
  signature: number | null;
  status: OrderStatus;
}

export interface Order extends Omit<OrderResult, 'startTime' | 'endTime'> {
  startTime: Date;
  endTime: Date;
}
