import { Box, useColorModeValue } from '@chakra-ui/react';
import { NavLinkProps } from './NavLink.props';
import Link from '@Src/components/ui/Link/Link';

const NavLink = ({ href, onClick, children, ...props }: NavLinkProps) => {
  return (
    <Box
      px={2}
      py={1}
      rounded={'md'}
      fontSize="md"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700')
      }}
      cursor="pointer"
      {...props}>
      <Link onClick={onClick} href={href}>
        {children}
      </Link>
    </Box>
  );
};

export default NavLink;
