import { useAtom } from 'jotai';
import { useQuery } from 'react-query';
import { accountsAtom, providerAtom } from './useWallet';
import { exists } from '@Src/utils/typeUtils';

export const useAvatar = () => {
  const [provider] = useAtom(providerAtom);
  const [accounts] = useAtom(accountsAtom);

  return useQuery(['avatar', provider, accounts?.[0]], () => {
    if (exists(accounts)) {
      return provider?.getAvatar(accounts[0].address);
    }
  });
};
