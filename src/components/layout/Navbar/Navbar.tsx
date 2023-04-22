import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Container
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import Logo from '../Logo/Logo';
import NavLink from './internal/components/NavLink/NavLink';
import { useAtom } from 'jotai';
import { accountsAtom, selectedAccountAtom, useWallet } from '@Src/hooks/wallet/useWallet';
import { useAvatar } from '@Src/hooks/wallet/useAvatar';
import Link from '@Src/components/ui/Link/Link';
import FindTokenModal from '@Src/components/modals/FindTokenModal/FindTokenModal';

const Links = [
  {
    label: 'Collections',
    path: '/collections'
  },
  {
    label: 'Orders',
    path: '/orders'
  }
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [accounts] = useAtom(accountsAtom);
  const [selectedAccount] = useAtom(selectedAccountAtom);
  const { connect } = useWallet();
  const { data: avatar } = useAvatar();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('whiteAlpha.600', 'rgba(26, 32, 44, 0.5)')}
        color={useColorModeValue('black', 'white')}
        fontWeight="medium"
        fontSize="2xl"
        px={4}
        position="fixed"
        zIndex={10}
        top={0}
        left={0}
        right={0}
        backdropFilter="blur(10px)">
        <Container maxW="container.xl">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Link href="/">
                <Logo fill={useColorModeValue('black', 'white')} width={150} />
              </Link>

              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink href={link.path} key={link.label}>
                    {link.label}
                  </NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                {accounts ? (
                  <HStack spacing={2} alignItems="center">
                    <Text
                      fontSize="xs"
                      textOverflow="ellipsis"
                      display={{ base: 'none', md: 'inline' }}>
                      {accounts[selectedAccount]?.address}
                    </Text>
                    <Avatar size={'sm'} src={avatar ?? undefined} />
                  </HStack>
                ) : (
                  <NavLink href="#" onClick={connect}>
                    Connect
                  </NavLink>
                )}

                <NavLink href="#" onClick={onModalOpen}>
                  <SearchIcon />
                </NavLink>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink href={link.path} key={link.label}>
                    {link.label}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>

      <FindTokenModal isOpen={isModalOpen} onClose={onModalClose} />
    </>
  );
};

export default Navbar;
