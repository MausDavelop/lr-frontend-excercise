import DataStatus from '@Src/components/containers/DataStatus/DataStatus';
import Banner from '@Src/components/layout/Banner/Banner';
import Page from '@Src/components/layout/Page/Page';
import Card from '@Src/components/ui/Card/Card';
import SkeletonCard from '@Src/components/ui/Card/Card.skeleton';
import CollectionLogo from '@Src/components/ui/CollectionLogo/CollectionLogo';
import SkeletonItems from '@Src/components/ui/SkeletonItems/SkeletonItems';
import { useCollection } from '@Src/hooks/api/collectionHooks';
import { nonArray } from '@Src/utils/typeUtils';
import { Box, Container, Grid, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Collection = () => {
  const { query } = useRouter();

  const { data: collection, ...status } = useCollection(nonArray(query.address));

  const logoSize = { base: 100, md: 150 };
  const logoOffset = { base: (logoSize.base / 2) * -1, md: (logoSize.md / 2) * -1 };

  return (
    <>
      <Banner src={collection?.bannerURI} title={collection?.name} />

      <Container maxW="container.xl" marginTop={logoOffset}>
        <CollectionLogo src={collection?.logoURI ?? ''} priority size={logoSize} />

        <Box margin="16px 0">
          <DataStatus hasData={!!collection} {...status}>
            <Grid
              margin="0 -8px"
              gridTemplateColumns={{
                base: 'repeat(auto-fill, minmax(150px, 1fr))',
                md: 'repeat(auto-fill, minmax(250px, 1fr))'
              }}>
              {collection ? (
                collection.tokens.length > 0 ? (
                  collection?.tokens.map((token) => {
                    return (
                      <Card
                        key={token.id}
                        href={`/collections/${query.address}/${token.tokenId}`}
                        image={token.imageURI}
                        title={`#${token.tokenId}`}
                        description={token.description}
                      />
                    );
                  })
                ) : (
                  <Text>We couldn&apos;t find any known tokens for this collection</Text>
                )
              ) : (
                <SkeletonItems>
                  <SkeletonCard />
                </SkeletonItems>
              )}
            </Grid>
          </DataStatus>
        </Box>
      </Container>
    </>
  );
};

export default function CollectionPage() {
  return (
    <Page>
      <Collection />
    </Page>
  );
}
