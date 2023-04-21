import DataStatus from '@Src/components/containers/DataStatus/DataStatus';
import Banner from '@Src/components/layout/Banner/Banner';
import Page from '@Src/components/layout/Page/Page';
import Card from '@Src/components/ui/Card/Card';
import SkeletonCards from '@Src/components/ui/SkeletonCards/SkeletonCards';
import { useCollections } from '@Src/hooks/api/collectionHooks';
import { Box, Container, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Collections = () => {
  const { query } = useRouter();

  const { data: collections, ...status } = useCollections();

  return (
    <>
      <Banner title="Collections" src={false} />

      <Container maxW="container.xl">
        <Box margin="16px 0">
          <DataStatus hasData={!!collections} {...status}>
            <Grid
              margin="0 -8px"
              gridTemplateColumns={{
                base: 'repeat(auto-fill, minmax(150px, 1fr))',
                md: 'repeat(auto-fill, minmax(250px, 1fr))'
              }}>
              {collections ? (
                collections.map((collection) => {
                  return (
                    <Card
                      key={collection.address}
                      href={`/collections/${collection.address}`}
                      image={collection.logoURI}
                      title={collection.name}
                      description={collection.description}
                    />
                  );
                })
              ) : (
                <SkeletonCards />
              )}
            </Grid>
          </DataStatus>
        </Box>
      </Container>
    </>
  );
};

export default function CollectionsPage() {
  return (
    <Page>
      <Collections />
    </Page>
  );
}
