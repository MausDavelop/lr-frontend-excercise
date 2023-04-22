import { Card, CardBody, CardProps, Skeleton, SkeletonText } from '@chakra-ui/react';

const SkeletonCard = (props: CardProps) => {
  return (
    <Card
      maxW="sm"
      cursor="pointer"
      transition="all 200ms"
      _hover={{ transform: 'scale(1.025)', boxShadow: 'xl' }}
      {...props}>
      <CardBody>
        <Skeleton width="100%" height={{ base: '150', md: '200' }} />

        <SkeletonText mt="2" noOfLines={1} skeletonHeight="6" width={100} />
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
