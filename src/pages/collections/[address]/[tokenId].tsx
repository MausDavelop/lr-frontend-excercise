import Banner from '@Src/components/layout/Banner/Banner';
import Page from '@Src/components/layout/Page/Page';
import { useToken } from '@Src/hooks/api/collectionHooks';
import { nonArray } from '@Src/utils/typeUtils';
import {
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Token = () => {
  const { query } = useRouter();
  const backgroundColor = useColorModeValue('white', 'black');

  const {
    data: token,
    isLoading,
    isError
  } = useToken(nonArray(query.address), nonArray(query.tokenId));

  if (isError) {
    return (
      <>
        <h1>Error!</h1>
        <p>Oops, something went wrong, we&apos;re working on it!</p>
      </>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (token) {
    return (
      <>
        <Banner
          href={`/collections/${query.address}`}
          src={token.collection.bannerURI}
          title={token.collection.name}
        />

        <Container
          maxW="container.xl"
          padding="8"
          width="calc(100% - 32px)"
          marginTop={{ base: '-32px', md: '-100px' }}
          borderRadius="32px"
          background={backgroundColor}
          minH="100%"
          boxShadow="lg">
          <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="start">
            <Image
              src={token.imageURI}
              alt=""
              maxH={{ base: '150px', md: '250px', lg: '400px' }}
              marginRight="32px"
              borderRadius={{ base: '16', md: '24px' }}
            />

            <Stack paddingTop="16px">
              <Text>{`#${token.tokenId}`}</Text>

              <Heading overflowWrap="anywhere" mt="0 !important">
                {token.name}
              </Heading>

              <Text>{token.description ?? 'No description available'}</Text>
            </Stack>
          </Flex>
        </Container>
      </>
    );
  }

  return <p>We couldn&apos;t find that token</p>;
};

export default function collectionPage() {
  return (
    <Page>
      <Token />
    </Page>
  );
}
