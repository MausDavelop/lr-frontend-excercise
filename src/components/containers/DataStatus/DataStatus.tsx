import { Text } from '@chakra-ui/react';
import { DataStatusProps } from './DataStatus.props';

const DataStatus = ({ hasData, isFetching, isFetched, isError, children }: DataStatusProps) => {
  if (isError) {
    return <Text fontSize="xl">Something went wrong, please try again.</Text>;
  }

  if (!isFetching && isFetched && !hasData) {
    return (
      <Text fontSize="xl">
        We&apos;re sorry but we couldn&apos;t find what you were looking for.
      </Text>
    );
  }

  return <>{children}</>;
};

export default DataStatus;
