import { BoxProps, ResponsiveValue } from '@chakra-ui/react';

export interface CollectionLogoProps extends BoxProps {
  src?: string;
  size?: ResponsiveValue<number>;
  priority?: boolean;
}
