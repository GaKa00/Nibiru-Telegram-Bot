require('dotenv').config()
import { ethers } from "ethers";
import { AlchemySettings, Network } from "alchemy-sdk";

const alchemyIXFoundationProdAPIKey = process.env.ALCHEMY_MC_PROD_API_KEY

console.log(alchemyIXFoundationProdAPIKey)

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