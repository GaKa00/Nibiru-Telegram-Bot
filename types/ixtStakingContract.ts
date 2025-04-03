import {
    ContractTransaction,
    ContractInterface,
    BytesLike as Arrayish,
    BigNumberish,
  } from 'ethers';
  import { EthersContractContextV5 } from 'ethereum-abi-types-generator';
  
  export type ContractContext = EthersContractContextV5<
    IXTStaking,
    IXTStakingMethodNames,
    IXTStakingEventsContext,
    IXTStakingEvents
  >;
  
  export declare type EventFilter = {
    address?: string;
    topics?: Array<string>;
    fromBlock?: string | number;
    toBlock?: string | number;
  };
  
  export interface ContractTransactionOverrides {
    /**
     * The maximum units of gas for the transaction to use
     */
    gasLimit?: number;
    /**
     * The price (in wei) per unit of gas
     */
    gasPrice?: BigInt | string | number | Promise<any>;
    /**
     * The nonce to use in the transaction
     */
    nonce?: number;
    /**
     * The amount to send with the transaction (i.e. msg.value)
     */
    value?: BigInt | string | number | Promise<any>;
    /**
     * The chain ID (or network ID) to use
     */
    chainId?: number;
  }
  
  export interface ContractCallOverrides {
    /**
     * The address to execute the call as
     */
    from?: string;
    /**
     * The maximum units of gas for the transaction to use
     */
    gasLimit?: number;
  }
  export type IXTStakingEvents =
    | 'OwnershipTransferred'
    | 'Paused'
    | 'Recovered'
    | 'RewardAdded'
    | 'RewardPaid'
    | 'RewardsDistributionUpdated'
    | 'RewardsDurationUpdated'
    | 'Staked'
    | 'Unpaused'
    | 'Withdrawn';
  export interface IXTStakingEventsContext {
    OwnershipTransferred(...parameters: any): EventFilter;
    Paused(...parameters: any): EventFilter;
    Recovered(...parameters: any): EventFilter;
    RewardAdded(...parameters: any): EventFilter;
    RewardPaid(...parameters: any): EventFilter;
    RewardsDistributionUpdated(...parameters: any): EventFilter;
    RewardsDurationUpdated(...parameters: any): EventFilter;
    Staked(...parameters: any): EventFilter;
    Unpaused(...parameters: any): EventFilter;
    Withdrawn(...parameters: any): EventFilter;
  }
  export type IXTStakingMethodNames =
    | 'balanceOf'
    | 'earned'
    | 'exit'
    | 'getReward'
    | 'getRewardForDuration'
    | 'initialize'
    | 'lastStakeTime'
    | 'lastTimeRewardApplicable'
    | 'lastUpdateTime'
    | 'lockPeriod'
    | 'notifyRewardAmount'
    | 'owner'
    | 'pause'
    | 'paused'
    | 'periodFinish'
    | 'recoverERC20'
    | 'renounceOwnership'
    | 'rewardPerToken'
    | 'rewardPerTokenStored'
    | 'rewardRate'
    | 'rewards'
    | 'rewardsDistribution'
    | 'rewardsDuration'
    | 'rewardsToken'
    | 'setLockPeriod'
    | 'setRewardsDistribution'
    | 'setRewardsDuration'
    | 'stake'
    | 'stakingToken'
    | 'totalSupply'
    | 'transferOwnership'
    | 'unpause'
    | 'userRewardPerTokenPaid'
    | 'withdraw';
  export interface OwnershipTransferredEventEmittedResponse {
    previousOwner: string;
    newOwner: string;
  }
  export interface PausedEventEmittedResponse {
    account: string;
  }
  export interface RecoveredEventEmittedResponse {
    token: string;
    amount: BigNumberish;
  }
  export interface RewardAddedEventEmittedResponse {
    reward: BigNumberish;
  }
  export interface RewardPaidEventEmittedResponse {
    user: string;
    reward: BigNumberish;
  }
  export interface RewardsDistributionUpdatedEventEmittedResponse {
    newDistribution: string;
  }
  export interface RewardsDurationUpdatedEventEmittedResponse {
    newDuration: BigNumberish;
  }
  export interface StakedEventEmittedResponse {
    user: string;
    amount: BigNumberish;
  }
  export interface UnpausedEventEmittedResponse {
    account: string;
  }
  export interface WithdrawnEventEmittedResponse {
    user: string;
    amount: BigNumberish;
  }
  export interface IXTStaking {
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param account Type: address, Indexed: false
     */
    balanceOf(
      account: string,
      overrides?: ContractCallOverrides
    ): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param account Type: address, Indexed: false
     */
    earned(
      account: string,
      overrides?: ContractCallOverrides
    ): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    exit(overrides?: ContractTransactionOverrides): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    getReward(
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    getRewardForDuration(overrides?: ContractCallOverrides): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _rewardsDistribution Type: address, Indexed: false
     * @param _rewardsToken Type: address, Indexed: false
     * @param _stakingToken Type: address, Indexed: false
     * @param _rewardsDuration Type: uint256, Indexed: false
     * @param _lockPeriod Type: uint256, Indexed: false
     */
    initialize(
      _rewardsDistribution: string,
      _rewardsToken: string,
      _stakingToken: string,
      _rewardsDuration: BigNumberish,
      _lockPeriod: BigNumberish,
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    lastStakeTime(
      parameter0: string,
      overrides?: ContractCallOverrides
    ): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    lastTimeRewardApplicable(
      overrides?: ContractCallOverrides
    ): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    lastUpdateTime(overrides?: ContractCallOverrides): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    lockPeriod(overrides?: ContractCallOverrides): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param reward Type: uint256, Indexed: false
     */
    notifyRewardAmount(
      reward: BigNumberish,
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    owner(overrides?: ContractCallOverrides): Promise<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    pause(overrides?: ContractTransactionOverrides): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    paused(overrides?: ContractCallOverrides): Promise<boolean>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    periodFinish(overrides?: ContractCallOverrides): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param tokenAddress Type: address, Indexed: false
     * @param tokenAmount Type: uint256, Indexed: false
     */
    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    renounceOwnership(
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    rewardPerToken(overrides?: ContractCallOverrides): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    rewardPerTokenStored(overrides?: ContractCallOverrides): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    rewardRate(overrides?: ContractCallOverrides): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    rewards(
      parameter0: string,
      overrides?: ContractCallOverrides
    ): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    rewardsDistribution(overrides?: ContractCallOverrides): Promise<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    rewardsDuration(overrides?: ContractCallOverrides): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    rewardsToken(overrides?: ContractCallOverrides): Promise<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _lockPeriod Type: uint256, Indexed: false
     */
    setLockPeriod(
      _lockPeriod: BigNumberish,
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _rewardsDistribution Type: address, Indexed: false
     */
    setRewardsDistribution(
      _rewardsDistribution: string,
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _rewardsDuration Type: uint256, Indexed: false
     */
    setRewardsDuration(
      _rewardsDuration: BigNumberish,
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param amount Type: uint256, Indexed: false
     */
    stake(
      amount: BigNumberish,
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    stakingToken(overrides?: ContractCallOverrides): Promise<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    totalSupply(overrides?: ContractCallOverrides): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param newOwner Type: address, Indexed: false
     */
    transferOwnership(
      newOwner: string,
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    unpause(
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    userRewardPerTokenPaid(
      parameter0: string,
      overrides?: ContractCallOverrides
    ): Promise<BigInt>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param amount Type: uint256, Indexed: false
     */
    withdraw(
      amount: BigNumberish,
      overrides?: ContractTransactionOverrides
    ): Promise<ContractTransaction>;
  }