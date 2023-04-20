import { ReactNode } from 'react';
import { UseQueryResult } from 'react-query';

export type DataStatusProps = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  hasData: boolean;
  children: ReactNode;
};
