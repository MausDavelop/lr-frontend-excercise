import { useCallback } from 'react';
import { BrowserProvider, JsonRpcSigner } from 'ethers';
import { atom, useAtom } from 'jotai';
import { exists } from '@Src/utils/typeUtils';

export const providerAtom = atom<BrowserProvider | null>(null);
export const accountsAtom = atom<JsonRpcSigner[] | null>(null);
export const selectedAccountAtom = atom<number>(0);
export const signerAtom = atom<JsonRpcSigner | null>(null);

export const useWallet = () => {
  const [provider, setProvider] = useAtom(providerAtom);
  const [_, setAccounts] = useAtom(accountsAtom);
  const [__, setSigner] = useAtom(signerAtom);

  const connect = useCallback(async () => {
    if (window.ethereum && !exists(provider)) {
      const newProvider = new BrowserProvider(window.ethereum);

      await newProvider.send('eth_requestAccounts', []);

      setProvider(newProvider);
      setAccounts(await newProvider.listAccounts());
      setSigner(await newProvider.getSigner());
    }
  }, [provider, setAccounts, setProvider, setSigner]);

  return { connect };
};
