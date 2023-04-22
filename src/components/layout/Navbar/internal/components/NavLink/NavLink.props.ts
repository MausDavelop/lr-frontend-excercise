import { BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface NavLinkProps extends BoxProps {
  href: string;
  onClick?: () => void;
}
