import { useCallback } from 'react';
import { BrowserProvider, JsonRpcSigner } from 'ethers';
import { atom, useAtom } from 'jotai';
import { exists } from '@Src/utils/typeUtils';

export const providerAtom = atom<BrowserProvider | null>(null);
export const accountsAtom = atom<JsonRpcSigner[] | undefined>(undefined);
export const selectedAccountAtom = atom<number>(0);

export const useWallet = () => {
  const [provider, setProvider] = useAtom(providerAtom);
  const [_, setAccounts] = useAtom(accountsAtom);

  const connect = useCallback(async () => {
    if (window.ethereum && !exists(provider)) {
      const newProvider = new BrowserProvider(window.ethereum);

      setProvider(newProvider);
      setAccounts(await newProvider.listAccounts());
    }
  }, [provider, setAccounts, setProvider]);

  return { connect };
};
