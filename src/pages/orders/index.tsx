import OrderRow from '@Src/components/containers/OrderRow/OrderRow';
import SkeletonOrderRow from '@Src/components/containers/OrderRow/OrderRow.skeleton';
import Banner from '@Src/components/layout/Banner/Banner';
import Page from '@Src/components/layout/Page/Page';
import SkeletonItems from '@Src/components/ui/SkeletonItems/SkeletonItems';
import { useOrders } from '@Src/hooks/api/orderHooks';
import { useIntersectionObserver } from '@Src/hooks/common/useIntersectionObserver';
import { OrderType } from '@Src/models/order';
import { Box, Container, HStack, Select, Stack, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';

const Orders = () => {
  const fetchNextPageRef = useRef<HTMLParagraphElement | null>(null);
  const [orderType, setOrderType] = useState(OrderType.ASK);
  const { data, fetchNextPage, isLoading, isFetchingNextPage } = useOrders(orderType);

  useIntersectionObserver(fetchNextPageRef.current, fetchNextPage);

  return (
    <>
      <Banner title="LooksRare Orders" src={false} />

      <Container maxW="container.xl">
        <Stack padding="32px 0">
          <Stack
            mb={4}
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'start', md: 'center' }}
            justifyContent="end">
            <Text whiteSpace="nowrap">Order type</Text>
            <Select
              value={orderType}
              display="inline-block"
              maxW={{ base: '100%', md: 'fit-content' }}
              onChange={(e) => setOrderType(e.target.value as OrderType)}>
              <option value={OrderType.ASK}>Ask</option>
              <option value={OrderType.BID}>Bid</option>
            </Select>
          </Stack>

          {data?.pages?.map((page) => {
            return page.map((order) => {
              return (
                <OrderRow
                  key={order.hash}
                  collectionAddress={order.collectionAddress}
                  tokenId={order.tokenId}
                  signer={order.signer}
                  status={order.status}
                  marginBottom="4"
                />
              );
            });
          })}

          {(isLoading || isFetchingNextPage || true) && (
            <SkeletonItems>
              <SkeletonOrderRow />
            </SkeletonItems>
          )}

          <Text ref={fetchNextPageRef} alignSelf="center" onClick={() => fetchNextPage()}>
            Load more
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default function OrdersPage() {
  return (
    <Page>
      <Orders />
    </Page>
  );
}
