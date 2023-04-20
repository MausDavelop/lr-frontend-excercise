import { AbstractProvider, ethers } from 'ethers';

export class EthersProvider {
  public provider?: AbstractProvider;
  public signer?: any;

  constructor() {
    if (window.ethereum) {
      this.provider = new ethers.BrowserProvider(window.ethereum);
    }
  }
}
