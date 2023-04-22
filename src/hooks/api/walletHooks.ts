import { useAtom } from 'jotai';
import { useQuery } from 'react-query';
import { accountsAtom, selectedAccountAtom } from '../wallet/useWallet';
import { moralisService } from '@Src/services/moralis/moralisService';
import { exists } from '@Src/utils/typeUtils';

export const useWalletNfts = () => {
  const [accounts] = useAtom(accountsAtom);
  const [selectedAccount] = useAtom(selectedAccountAtom);

  const accountAddress = accounts?.[selectedAccount].address;

  return useQuery(
    [accountAddress],
    async () => {
      if (exists(accountAddress)) {
        return await moralisService.getWalletNfts(accountAddress);
      }

      return null;
    },
    {
      enabled: exists(accountAddress)
    }
  );
};
