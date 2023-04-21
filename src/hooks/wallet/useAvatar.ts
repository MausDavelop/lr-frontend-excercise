import { useAtom } from 'jotai';
import { useQuery } from 'react-query';
import { accountsAtom, providerAtom, selectedAccountAtom } from './useWallet';
import { exists } from '@Src/utils/typeUtils';

export const useAvatar = () => {
  const [provider] = useAtom(providerAtom);
  const [accounts] = useAtom(accountsAtom);
  const [selectedAccount] = useAtom(selectedAccountAtom);

  return useQuery(['avatar', provider, accounts?.[selectedAccount]], () => {
    if (exists(accounts)) {
      return provider?.getAvatar(accounts[0].address);
    }
  });
};
