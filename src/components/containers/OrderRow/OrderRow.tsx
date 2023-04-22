import { Avatar, Box, HStack, Stack, Tag, Text, useColorModeValue } from '@chakra-ui/react';
import { OrderRowProps } from './OrderRow.props';
import { useToken } from '@Src/hooks/api/tokenHooks';
import { OrderStatus } from '@Src/models/order';

const OrderRow = ({ collectionAddress, tokenId, signer, status, ...props }: OrderRowProps) => {
  const { data: token } = useToken(collectionAddress, tokenId);

  const getOrderStatusColor = (): [string, string] => {
    switch (status) {
      case OrderStatus.CANCELLED:
        return ['green.400', 'green.800'];
      default:
        return ['black', 'black'];
    }
  };

  const getOrderStatusLabel = () => {
    return status.toLowerCase().replace('_', ' ');
  };

  return (
    <Box borderRadius="md" boxShadow="md" padding="4" {...props}>
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
            color={useColorModeValue(...getOrderStatusColor())}>
            {getOrderStatusLabel()}
          </Tag>
        </HStack>

        <HStack flex="1" spacing="4" justifyContent="space-between" maxWidth="100%">
          <Stack spacing="0.5" maxWidth="100%">
            <Text fontWeight="bold">{token?.name}</Text>
            <Text textOverflow="ellipsis">{`Signed by: ${signer}`}</Text>
          </Stack>

          <Tag
            display={{ base: 'none', md: 'inline-flex' }}
            color={useColorModeValue(...getOrderStatusColor())}>
            {getOrderStatusLabel()}
          </Tag>
        </HStack>
      </Stack>
    </Box>
  );
};

export default OrderRow;
