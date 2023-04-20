import { Card, CardBody, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';
import { SkeletonCardsProps } from './SkeletonCards.props';

const SkeletonCards = ({ noOfCards = 5 }: SkeletonCardsProps) => {
  return (
    <>
      {new Array(noOfCards).fill(null).map((_, idx) => {
        return (
          <Card
            key={idx}
            maxW="sm"
            margin="8px"
            cursor="pointer"
            transition="all 200ms"
            _hover={{ transform: 'scale(1.025)', boxShadow: 'xl' }}>
            <CardBody>
              <Skeleton width="100%" height={{ base: '150', md: '200' }} />

              <SkeletonText mt="2" noOfLines={1} skeletonHeight="6" width={100} />
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default SkeletonCards;
