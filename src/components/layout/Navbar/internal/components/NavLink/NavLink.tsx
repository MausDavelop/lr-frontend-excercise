import { Link, useColorModeValue } from '@chakra-ui/react';
import { NavLinkProps } from './NavLink.props';

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700')
      }}
      href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
