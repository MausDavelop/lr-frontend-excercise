import { OrderStatus } from '@Src/models/order';
import { BoxProps } from '@chakra-ui/react';

export interface OrderRowProps extends BoxProps {
  collectionAddress: string;
  tokenId: string;
  signer: string;
  status: OrderStatus;
}
