import DataStatus from '@Src/components/containers/DataStatus/DataStatus';
import Banner from '@Src/components/layout/Banner/Banner';
import Page from '@Src/components/layout/Page/Page';
import Card from '@Src/components/ui/Card/Card';
import SkeletonCard from '@Src/components/ui/Card/Card.skeleton';
import SkeletonItems from '@Src/components/ui/SkeletonItems/SkeletonItems';
import { useCollections } from '@Src/hooks/api/collectionHooks';
import { Box, Container, Grid } from '@chakra-ui/react';

const Collections = () => {
  const { data: collections, ...status } = useCollections();

  return (
    <>
      <Banner title="Collections" src={false} />

      <Container maxWidth="container.xl">
        <Box margin="16px 0">
          <DataStatus hasData={!!collections && collections.length > 0} {...status}>
            <Grid
              gap="4"
              gridTemplateColumns={{
                base: 'repeat(auto-fill, minmax(150px, 1fr))',
                md: 'repeat(auto-fill, minmax(225px, 1fr))'
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

export default function CollectionsPage() {
  return (
    <Page>
      <Collections />
    </Page>
  );
}
