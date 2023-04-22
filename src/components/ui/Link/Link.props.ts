import { Url } from 'next/dist/shared/lib/router/router';
import { LinkProps as BaseLinkProps } from 'next/link';

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseLinkProps>,
    Omit<BaseLinkProps, 'href'> {
  href?: Url;
}
