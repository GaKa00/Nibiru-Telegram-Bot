import { ethers, parseUnits } from "ethers";
import { createOneMonthIXTStakingContract } from "../contract"
 //add createFluencrPackContract, 

import { formatNumber } from "./utils";
import TelegramBot from "node-telegram-bot-api";



const oneMonthIXTStakingContract = createOneMonthIXTStakingContract();


const listenForOneMonthIxtClaim = async (bot: TelegramBot, chatId: string,) => {
    return new Promise<void>((resolve, reject) => {
      oneMonthIXTStakingContract.on('RewardPaid',
        async (user: string, reward: BigInt) => {
          try {
              const oneMonthImageUrl = "https://ix.foundation/assets/png/oneMonthStaking.png"
  
              const decimalAmount = Number(ethers.formatEther(reward.toString()));
              const formattedAmount = formatNumber(decimalAmount);
  
              if (Number(formattedAmount) > 0){
              const oneMonthClaimMessage = 
              `👤 User: ${user} \n` +
              `🟠 Claimed: <b>${formattedAmount} $IXT</b>!`;
              bot.sendPhoto(chatId, oneMonthImageUrl, { parse_mode: 'HTML', caption: oneMonthClaimMessage });
              
              const thresholdAmount = 499;
              if (Number(formattedAmount) > thresholdAmount) {
                bot.sendPhoto(chatId, oneMonthImageUrl, { parse_mode: 'HTML', caption: oneMonthClaimMessage });
              }          
            }
              resolve();
          } catch (err) {
              console.error("An error occurred while listening to IXT 1 month Claiming Event:", err);
              reject();
          }
        }
        );
    });
  };


// const FluencrPackContract = createFluencrPackContract()

// const listenForXLPackPurchase = ( bot:TelegramBot , chatId: string,) => {
//     return new Promise<void>((resolve, reject) => {

//         FluencrPackContract.on("buy",
//             async (user: string, value:bigint) => {

//                 const thresholdUSD = parseUnits("800", 18);

//          {
//              if (value >= thresholdUSD) {

//                 const XLPackPrice = parseUnits("899", 18); //Can probably be replaced with the contracts defined cost? 
//                 const packAmount = Math.round(Number(value / XLPackPrice))

//                  try {
                    
//                      const PurchaseImageUrl = "";
//                      const PurchaseMessage =`${packAmount} XL Packs just got bought by ${user.id} :money_with_wings::gem:
// `;
//                      bot.sendPhoto(chatId,PurchaseImageUrl,{caption: PurchaseMessage, parse_mode: 'HTML'});
//                      resolve();
//                  } catch (error) {
//                      console.error(error.message);
//                      reject();
                     
//                  }
//              }
//              else resolve(); 
//         }
//     }
//     )  
//     })
// }


export const setupEventListeners = async (bot: TelegramBot, chatId: string) => {
    const listenerPromises: Promise<void>[] = [];
  
    listenerPromises.push(
        // listenForXLPackPurchase(bot, chatId),
        listenForOneMonthIxtClaim(bot, chatId), 
    );
  
    await Promise.all(listenerPromises);
  };

