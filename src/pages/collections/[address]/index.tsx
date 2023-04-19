import Banner from '@Src/components/layout/Banner/Banner';
import Page from '@Src/components/layout/Page/Page';
import CollectionLogo from '@Src/components/ui/CollectionLogo/CollectionLogo';
import { useCollection } from '@Src/hooks/api/collectionHooks';
import { nonArray } from '@Src/utils/typeUtils';
import { Card, CardBody, Container, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Collection = () => {
  const { query } = useRouter();

  const { data: collection, isLoading, isError } = useCollection(nonArray(query.address));

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

  if (collection) {
    const logoSize = { base: 100, md: 150 };
    const invertedLogoSize = { base: (logoSize.base / 2) * -1, md: (logoSize.md / 2) * -1 };

    return (
      <>
        <Banner src={collection.bannerURI} title={collection.name} />

        <Container maxW="container.xl" marginTop={invertedLogoSize}>
          <CollectionLogo src={collection.logoURI} priority size={logoSize} />

          <Grid margin="16px -8px" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))">
            {collection.tokens.map((token) => {
              return (
                <Link key={token.id} href={`/collections/${query.address}/${token.tokenId}`}>
                  <Card
                    maxW="sm"
                    margin="8px"
                    cursor="pointer"
                    transition="all 200ms"
                    _hover={{ transform: 'scale(1.025)', boxShadow: 'xl' }}>
                    <CardBody>
                      <Image src={token.imageURI} alt="" borderRadius="md" />

                      <Stack mt="2">
                        <Heading size="md">{`#${token.tokenId}`}</Heading>
                        {!!token.description && <Text mt="2">{token.description}</Text>}
                      </Stack>
                    </CardBody>
                  </Card>
                </Link>
              );
            })}
          </Grid>
        </Container>
      </>
    );
  }

  return <p>We couldn&apos;t find that collection</p>;
};

export default function collectionPage() {
  return (
    <Page>
      <Collection />
    </Page>
  );
}
