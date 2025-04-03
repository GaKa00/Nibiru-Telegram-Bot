import { ethers } from "ethers";
import { FluencrPackPolygonAddress, oneMonthIXTStakingAddress } from "./address";
import { ContractContext as IXTStakingContract} from "./types/ixtStakingContract";
import { provider } from "./services/alchemy";


export const createFluencrPackContract = () => {
    return new ethers.Contract(
        FluencrPackPolygonAddress || '0x0',
        FluencrPackABI.abi,
            provider
        ) as unknown;
    
}


export const createOneMonthIXTStakingContract = () => {

    return new ethers.Contract(
            oneMonthIXTStakingAddress ||'0x0',
            stakingABI.abi,
            provider
        ) as unknown as IXTStakingContract;
};