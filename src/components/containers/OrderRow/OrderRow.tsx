import { Avatar, Box, HStack, Stack, Tag, Text, useColorModeValue } from '@chakra-ui/react';
import { OrderRowProps } from './OrderRow.props';
import { useToken } from '@Src/hooks/api/tokenHooks';
import { OrderStatus } from '@Src/models/order';
import SkeletonOrderRow from './OrderRow.skeleton';
import Link from 'next/link';

const OrderRow = ({ collectionAddress, tokenId, signer, status, ...props }: OrderRowProps) => {
  const { data: token, isLoading } = useToken(collectionAddress, tokenId);

  const getOrderStatusColor = (): [string, string] => {
    switch (status) {
      case OrderStatus.CANCELLED:
      case OrderStatus.INVALID_OWNER:
        return ['red.400', 'red.800'];
      case OrderStatus.ERC20_APPROVAL:
      case OrderStatus.ERC_APPROVAL:
      case OrderStatus.ERC20_BALANCE:
        return ['orange.400', 'orange.700'];
      case OrderStatus.VALID:
      case OrderStatus.EXECUTED:
        return ['green.400', 'green.800'];
      case OrderStatus.EXPIRED:
      default:
        return ['black', 'black'];
    }
  };

  const getOrderStatusLabel = () => {
    return status.toLowerCase().replace('_', ' ');
  };

  const backgroundColor = useColorModeValue('white', 'gray.700');
  const statusColor = useColorModeValue(...getOrderStatusColor());
  const tagColor = useColorModeValue('white', 'gray.200');

  if (isLoading) {
    return <SkeletonOrderRow />;
  }

  return (
    <Box borderRadius="md" boxShadow="md" padding="4" backgroundColor={backgroundColor} {...props}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'start', md: 'center' }}
        spacing="4">
        <HStack
          flex={{ base: 1, md: 0 }}
          spacing="4"
          justifyContent="space-between"
          width={{ base: '100%', md: 'auto' }}>
          <Avatar src={token?.imageURI} />
          <Tag
            display={{ base: 'inline-flex', md: 'none' }}
            backgroundColor={statusColor}
            color={tagColor}>
            {getOrderStatusLabel()}
          </Tag>
        </HStack>

        <HStack flex="1" spacing="4" justifyContent="space-between" maxWidthidth="100%">
          <Stack spacing="0.5" maxWidthidth="100%">
            <Link href={`/collections/${collectionAddress}/${tokenId}`}>
              <Text fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                {token?.name}
              </Text>
            </Link>
            <Text textOverflow="ellipsis">{`Signed by: ${signer}`}</Text>
          </Stack>

          <Tag
            display={{ base: 'none', md: 'inline-flex' }}
            backgroundColor={statusColor}
            color={tagColor}>
            {getOrderStatusLabel()}
          </Tag>
        </HStack>
      </Stack>
    </Box>
  );
};

export default OrderRow;
