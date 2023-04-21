import { LinkProps } from './Link.props';
import BaseLink from 'next/link';

const Link = ({ href, children, onClick, ...props }: LinkProps) => {
  if (href) {
    return (
      <BaseLink href={href} onClick={onClick} {...props}>
        {children}
      </BaseLink>
    );
  }

  return <>{children}</>;
};

export default Link;
