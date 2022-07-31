import { Alchemy } from "@alch/alchemy-sdk";
import { Nfts } from "./nfts.model";
import { NftsService } from "./nfts.service";

describe('NftsService', () => {
  let nftSevice: NftsService;

  beforeEach(() => {
    nftSevice = new NftsService();
  });

  describe('#getNetworkSetting', () => {
    it('should return null for a invalid network', async () => {
      const network = 'invalidNetwork';

      try {
        await nftSevice.getNetworkSetting(network)
      } catch (error) {
        expect(error.message).toMatch('Invalid network');
      }
    });

    it('should return an intance of alchemy', async () => {
      const network = 'rinkeby';
      // jest.spyOn(nftSevice, 'findAll').mockImplementation(() => result);

      expect(await nftSevice.getNetworkSetting(network)).toBeInstanceOf(Alchemy);
    });
  });

  describe('#getAllNft', () => {
    it('should return empty result if NFTs are in a different network', async () => {
      const owner = "0x00";
      const network = 'polygon';
      const mockResponse = {
        ownedNfts: [],
        totalCount: 0,
        pageKey: null,
      } as any;
      jest.spyOn(nftSevice, 'getNftsByOwner').mockImplementation(() => Promise.resolve(mockResponse));

      const provider = nftSevice.getNetworkSetting(network);
      const nftsResponse = await nftSevice.getAllNft(provider, { owner } as any);

      expect(nftsResponse.nfts).toBe(undefined);
    });

    it('should return only ER721 if apply a filter contractType', async () => {
      const owner = "0x00";
      const network = 'rinkeby';
      const mockResponse = {
        ownedNfts: [
          { title: 'TokenErc721', tokenType: 'ERC721' },
          { title: 'TokenErc1155', tokenType: 'ERC1155' }
        ],
        totalCount: 2,
        pageKey: null,
      } as any;
      jest.spyOn(nftSevice, 'getNftsByOwner').mockImplementation(() => Promise.resolve(mockResponse));

      const provider = nftSevice.getNetworkSetting(network);
      const nftsResponse = await nftSevice.getAllNft(provider, {
        owner, contractType: 'ERC721'
      } as any);

      expect(nftsResponse).toEqual({
        owner: owner,
        nfts: [{ title: 'TokenErc721', tokenType: 'ERC721' }],
        totalCount: 1,
        pageKey: null,
      } as Nfts);
    });

    it('should return NFTs for a address', async () => {
      const owner = "0x00";
      const network = 'rinkeby';
      const mockResponse = {
        ownedNfts: [
          { title: 'TokenErc721', tokenType: 'ERC721' },
        ],
        totalCount: 1,
        pageKey: null,
      } as any;
      jest.spyOn(nftSevice, 'getNftsByOwner').mockImplementation(() => Promise.resolve(mockResponse));

      const provider = nftSevice.getNetworkSetting(network);
      const nftsResponse = await nftSevice.getAllNft(provider, { owner } as any);

      expect(nftsResponse).toEqual({
        owner: owner,
        nfts: [{ title: 'TokenErc721', tokenType: 'ERC721' }],
        totalCount: 1,
        pageKey: null,
      } as Nfts);
    });
  });
});