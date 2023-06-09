import DataStatus from '@Src/components/containers/DataStatus/DataStatus';
import Banner from '@Src/components/layout/Banner/Banner';
import Page from '@Src/components/layout/Page/Page';
import { useToken } from '@Src/hooks/api/tokenHooks';
import { useWalletNfts } from '@Src/hooks/api/walletHooks';
import { nonArray } from '@Src/utils/typeUtils';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Token = () => {
  const { query } = useRouter();
  const [isImageLoaded, setImageLoaded] = useState(false);
  const backgroundColor = useColorModeValue('white', 'gray.900');

  const { data: token, ...status } = useToken(nonArray(query.address), nonArray(query.tokenId));
  const { data: ownedNfts } = useWalletNfts();

  const imageHeight = { base: '150px', md: '250px', lg: '400px' };
  const imageRadius = { base: 'xl', md: '2xl' };

  const isOwned = ownedNfts?.some((ownedNft) => {
    return (
      token?.collectionAddress.toLowerCase() === ownedNft.token_address &&
      token?.tokenId === ownedNft.token_id
    );
  });

  return (
    <>
      <Banner
        href={`/collections/${query.address}`}
        src={token?.collection.bannerURI ?? ''}
        title={token?.collection.name}
      />

      <Container
        position="relative"
        zIndex={1}
        maxWidth="container.xl"
        padding="8"
        width="calc(100% - 32px)"
        marginTop={{ base: '-8', md: '-100px' }}
        borderRadius="3xl"
        background={backgroundColor}
        minHeight="100%"
        boxShadow="lg">
        <DataStatus hasData={!!token} {...status}>
          <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="start">
            <Box marginRight="8">
              <Skeleton
                isLoaded={isImageLoaded}
                height={imageHeight}
                width={imageHeight}
                borderRadius={imageRadius}>
                <Image
                  src={token?.imageURI}
                  alt=""
                  maxH={imageHeight}
                  borderRadius={imageRadius}
                  onLoad={() => setImageLoaded(true)}
                />
              </Skeleton>
            </Box>

            <Stack paddingTop="4" width="100%">
              <SkeletonText noOfLines={1} width={100} skeletonHeight="4" isLoaded={!!token}>
                <Text>{`#${token?.tokenId}`}</Text>
              </SkeletonText>

              <SkeletonText noOfLines={1} maxWidth={500} skeletonHeight="12" isLoaded={!!token}>
                <Heading overflowWrap="anywhere">{token?.name}</Heading>
              </SkeletonText>

              {isOwned && (
                <HStack spacing={2}>
                  <CheckCircleIcon fontSize="xl" color="green.400" />
                  <Text fontWeight="bold">You own this NFT!</Text>
                </HStack>
              )}

              <SkeletonText skeletonHeight="2" maxWidth={400} isLoaded={!!token}>
                <Text>{token?.description ?? 'No description available'}</Text>
              </SkeletonText>
            </Stack>
          </Flex>
        </DataStatus>
      </Container>
    </>
  );
};

export default function TokenPage() {
  return (
    <Page>
      <Token />
    </Page>
  );
}
