import { Box } from '@chakra-ui/react';
import { SkeletonItemsProps } from './SkeletonItems.props';

const SkeletonItems = ({ children, noOfCards = 5 }: SkeletonItemsProps) => {
  return (
    <>
      {new Array(noOfCards).fill(null).map((_, idx) => {
        return <Box key={idx}>{children}</Box>;
      })}
    </>
  );
};

export default SkeletonItems;
