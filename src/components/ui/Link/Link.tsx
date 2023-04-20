import { LinkProps } from './Link.props';
import BaseLink from 'next/link';

const Link = ({ href, children, ...props }: LinkProps) => {
  if (href) {
    return (
      <BaseLink href={href} {...props}>
        {children}
      </BaseLink>
    );
  }

  return <>{children}</>;
};

export default Link;
