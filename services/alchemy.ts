import { Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { AlchemySettings, Network } from "alchemy-sdk";



export const alchemyIXFoundationProdAPIKey = process.env.ALCHEMY_API_KEY


export const polygon = 'matic'


export const providerIXFoundationConfig: AlchemySettings = {
    apiKey: alchemyIXFoundationProdAPIKey,
    network: Network.MATIC_MAINNET,
    maxRetries: 2,
  };



export const provider = new ethers.AlchemyProvider(
    polygon,
    providerIXFoundationConfig.apiKey
);