import { types } from "@oasisprotocol/client";

const envoy = `
  Beacon/(
    ConsensusParameters|
    GetBaseEpoch|
    GetBeacon|
    GetEpoch|
    GetEpochBlock|
    GetFutureEpoch)|
  Consensus/(
    EstimateGas|
    GetBlock|
    GetChainContext|
    GetGenesisDocument|
    GetNextBlockState|
    GetParameters|
    GetSignerNonce|
    GetStatus|
    GetTransactions|
    GetTransactionsWithResults|
    GetUnconfirmedTransactions|
    SubmitTx)|
  Governance/(
    ActiveProposals|
    ConsensusParameters|
    GetEvents|
    PendingUpgrades|
    Proposal|
    Proposals|
    Votes)|
  NodeController/(
    GetStatus)|
  Registry/(
    ConsensusParameters|
    GetEntity|
    GetEntities|
    GetEvents|
    GetNode|
    GetNodeByConsensusAddress|
    GetNodeStatus|
    GetNodes|
    GetRuntime|
    GetRuntimes)|
  RootHash/(
    ConsensusParameters|
    GetEvents|
    GetGenesisBlock|
    GetLastRoundResults|
    GetLatestBlock|
    GetRuntimeState)|
  RuntimeClient/(
    CheckTx|
    GetBlock|
    GetEvents|
    GetGenesisBlock|
    GetLastRetainedBlock|
    GetTransactions|
    GetTransactionsWithResults|
    Query|
    SubmitTx|
    SubmitTxMeta|
    SubmitTxNoWait|
    WatchBlocks)|
  Scheduler/(
    ConsensusParameters|
    GetCommittees|
    GetValidators)|
  Staking/(
    Account|
    Allowance|
    CommonPool|
    ConsensusParameters|
    DebondingDelegationInfosFor|
    DebondingDelegationsFor|
    DebondingDelegationsTo|
    DelegationInfosFor|
    DelegationsFor|
    DelegationsTo|
    GetEvents|
    GovernanceDeposits|
    LastBlockFees|
    Threshold|
    TokenSymbol|
    TokenValueExponent|
    TotalSupply))
`

const sdk = `
@oasisprotocol/client/dist/client.d.ts
    beaconConsensusParameters(height: types.longnum): Promise<types.BeaconConsensusParameters>;
    beaconGetBaseEpoch(): Promise<types.longnum>;
    beaconGetBeacon(height: types.longnum): Promise<Uint8Array>;
    beaconGetEpoch(height: types.longnum): Promise<types.longnum>;
    beaconGetEpochBlock(epoch: types.longnum): Promise<types.longnum>;
    beaconGetFutureEpoch(height: types.longnum): Promise<types.BeaconEpochTimeState>;
    beaconStateToGenesis(height: types.longnum): Promise<types.BeaconGenesis>;
    beaconWaitEpoch(epoch: types.longnum): Promise<void>;
    beaconWatchEpochs(): grpcWeb.ClientReadableStream<types.longnum>;
    beaconWatchLatestEpoch(): grpcWeb.ClientReadableStream<types.longnum>;
    schedulerConsensusParameters(height: types.longnum): Promise<types.SchedulerConsensusParameters>;
    schedulerGetCommittees(request: types.SchedulerGetCommitteesRequest): Promise<types.SchedulerCommittee[]>;
    schedulerGetValidators(height: types.longnum): Promise<types.SchedulerValidator[]>;
    schedulerStateToGenesis(height: types.longnum): Promise<types.SchedulerGenesis>;
    schedulerWatchCommittees(): grpcWeb.ClientReadableStream<types.SchedulerCommittee>;
    registryConsensusParameters(height: types.longnum): Promise<types.RegistryConsensusParameters>;
    registryGetEntities(height: types.longnum): Promise<types.Entity[]>;
    registryGetEntity(query: types.RegistryIDQuery): Promise<types.Entity>;
    registryGetEvents(height: types.longnum): Promise<types.RegistryEvent[]>;
    registryGetNode(query: types.RegistryIDQuery): Promise<types.Node>;
    registryGetNodeByConsensusAddress(query: types.RegistryConsensusAddressQuery): Promise<types.Node>;
    registryGetNodeStatus(query: types.RegistryIDQuery): Promise<types.RegistryNodeStatus>;
    registryGetNodes(height: types.longnum): Promise<types.Node[]>;
    registryGetRuntime(query: types.RegistryGetRuntimeQuery): Promise<types.RegistryRuntime>;
    registryGetRuntimes(query: types.RegistryGetRuntimesQuery): Promise<types.RegistryRuntime[]>;
    registryStateToGenesis(height: types.longnum): Promise<types.RegistryGenesis>;
    registryWatchEntities(): grpcWeb.ClientReadableStream<types.RegistryEntityEvent>;
    registryWatchEvents(): grpcWeb.ClientReadableStream<types.RegistryEvent>;
    registryWatchNodeList(): grpcWeb.ClientReadableStream<types.RegistryNodeList>;
    registryWatchNodes(): grpcWeb.ClientReadableStream<types.RegistryNodeEvent>;
    registryWatchRuntimes(): grpcWeb.ClientReadableStream<types.RegistryRuntime>;
    stakingAccount(query: types.StakingOwnerQuery): Promise<types.StakingAccount>;
    stakingAddresses(height: types.longnum): Promise<Uint8Array[]>;
    stakingAllowance(query: types.StakingAllowanceQuery): Promise<Uint8Array>;
    stakingCommissionScheduleAddresses(height: types.longnum): Promise<Uint8Array[]>;
    stakingCommonPool(height: types.longnum): Promise<Uint8Array>;
    stakingConsensusParameters(height: types.longnum): Promise<types.StakingConsensusParameters>;
    stakingDebondingDelegationInfosFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDebondingDelegationInfo[]>>;
    stakingDebondingDelegationsFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDebondingDelegation[]>>;
    stakingDebondingDelegationsTo(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDebondingDelegation[]>>;
    stakingDelegationInfosFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDelegationInfo>>;
    stakingDelegationsFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDelegation>>;
    stakingDelegationsTo(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDelegation>>;
    stakingGetEvents(height: types.longnum): Promise<types.StakingEvent[]>;
    stakingGovernanceDeposits(height: types.longnum): Promise<Uint8Array>;
    stakingLastBlockFees(height: types.longnum): Promise<Uint8Array>;
    stakingStateToGenesis(height: types.longnum): Promise<types.StakingGenesis>;
    stakingThreshold(query: types.StakingThresholdQuery): Promise<Uint8Array>;
    stakingTokenSymbol(): Promise<string>;
    stakingTokenValueExponent(): Promise<number>;
    stakingTotalSupply(height: types.longnum): Promise<Uint8Array>;
    stakingWatchEvents(): grpcWeb.ClientReadableStream<types.StakingEvent>;
    keyManagerGetEphemeralSecret(query: types.RegistryNamespaceQuery): Promise<types.KeyManagerSignedEncryptedEphemeralSecret>;
    keyManagerGetMasterSecret(query: types.RegistryNamespaceQuery): Promise<types.KeyManagerSignedEncryptedMasterSecret>;
    keyManagerGetStatus(query: types.RegistryNamespaceQuery): Promise<types.KeyManagerStatus>;
    keyManagerGetStatuses(height: types.longnum): Promise<types.KeyManagerStatus[]>;
    keyManagerStateToGenesis(height: types.longnum): Promise<types.KeyManagerGenesis>;
    keyManagerWatchEphemeralSecrets(): grpcWeb.ClientReadableStream<types.KeyManagerSignedEncryptedEphemeralSecret>;
    keyManagerWatchMasterSecrets(): grpcWeb.ClientReadableStream<types.KeyManagerSignedEncryptedMasterSecret>;
    keyManagerWatchStatuses(): grpcWeb.ClientReadableStream<types.KeyManagerStatus>;
    rootHashConsensusParameters(height: types.longnum): Promise<types.RootHashConsensusParameters>;
    rootHashGetEvents(height: types.longnum): Promise<types.RootHashEvent[]>;
    rootHashGetGenesisBlock(request: types.RootHashRuntimeRequest): Promise<types.RootHashBlock>;
    rootHashGetIncomingMessageQueue(request: types.RootHashInMessageQueueRequest): Promise<types.RootHashIncomingMessage[]>;
    rootHashGetIncomingMessageQueueMeta(request: types.RootHashRuntimeRequest): Promise<types.RootHashIncomingMessageQueueMeta>;
    rootHashGetLastRoundResults(request: types.RootHashRuntimeRequest): Promise<types.RootHashRoundResults>;
    rootHashGetLatestBlock(request: types.RootHashRuntimeRequest): Promise<types.RootHashBlock>;
    rootHashGetRuntimeState(request: types.RootHashRuntimeRequest): Promise<types.RootHashRuntimeState>;
    rootHashStateToGenesis(height: types.longnum): Promise<types.RootHashGenesis>;
    rootHashWatchBlocks(runtimeID: Uint8Array): grpcWeb.ClientReadableStream<types.RootHashAnnotatedBlock>;
    rootHashWatchEvents(runtimeID: Uint8Array): grpcWeb.ClientReadableStream<types.RootHashEvent>;
    rootHashWatchExecutorCommitments(): grpcWeb.ClientReadableStream<types.RootHashExecutorCommitment>;
    governanceActiveProposals(height: types.longnum): Promise<types.GovernanceProposal[]>;
    governanceConsensusParameters(height: types.longnum): Promise<types.GovernanceConsensusParameters>;
    governanceGetEvents(height: types.longnum): Promise<types.GovernanceEvent[]>;
    governancePendingUpgrades(height: types.longnum): Promise<types.UpgradeDescriptor[]>;
    governanceProposal(query: types.GovernanceProposalQuery): Promise<types.GovernanceProposal>;
    governanceProposals(height: types.longnum): Promise<types.GovernanceProposal[]>;
    governanceStateToGenesis(height: types.longnum): Promise<types.GovernanceGenesis>;
    governanceVotes(query: types.GovernanceProposalQuery): Promise<types.GovernanceVoteEntry[]>;
    governanceWatchEvents(): grpcWeb.ClientReadableStream<types.GovernanceEvent>;
    storageGetCheckpointChunk(chunk: types.StorageChunkMetadata): grpcWeb.ClientReadableStream<Uint8Array>;
    storageGetCheckpoints(request: types.StorageGetCheckpointsRequest): Promise<types.StorageMetadata[]>;
    storageGetDiff(request: types.StorageGetDiffRequest): grpcWeb.ClientReadableStream<types.StorageSyncChunk>;
    storageSyncGet(request: types.StorageGetRequest): Promise<types.StorageProofResponse>;
    storageSyncGetPrefixes(request: types.StorageGetPrefixesRequest): Promise<types.StorageProofResponse>;
    storageSyncIterate(request: types.StorageIterateRequest): Promise<types.StorageProofResponse>;
    storageWorkerGetLastSyncedRound(request: types.WorkerStorageGetLastSyncedRoundRequest): Promise<types.WorkerStorageGetLastSyncedRoundResponse>;
    storageWorkerPauseCheckpointer(request: types.WorkerStoragePauseCheckpointerRequest): Promise<void>;
    runtimeClientCheckTx(request: types.RuntimeClientCheckTxRequest): Promise<void>;
    runtimeClientGetBlock(request: types.RuntimeClientGetBlockRequest): Promise<types.RootHashBlock>;
    runtimeClientGetEvents(request: types.RuntimeClientGetEventsRequest): Promise<types.RuntimeClientEvent[]>;
    runtimeClientGetGenesisBlock(runtimeID: Uint8Array): Promise<types.RootHashBlock>;
    runtimeClientGetLastRetainedBlock(runtimeID: Uint8Array): Promise<types.RootHashBlock>;
    runtimeClientGetTransactions(request: types.RuntimeClientGetTransactionsRequest): Promise<Uint8Array[]>;
    runtimeClientGetTransactionsWithResults(request: types.RuntimeClientGetTransactionsRequest): Promise<types.RuntimeClientTransactionWithResults[]>;
    runtimeClientQuery(request: types.RuntimeClientQueryRequest): Promise<types.RuntimeClientQueryResponse>;
    runtimeClientSubmitTx(request: types.RuntimeClientSubmitTxRequest): Promise<Uint8Array>;
    runtimeClientSubmitTxMeta(request: types.RuntimeClientSubmitTxRequest): Promise<types.RuntimeClientSubmitTxMetaResponse>;
    runtimeClientSubmitTxNoWait(request: types.RuntimeClientSubmitTxRequest): Promise<void>;
    runtimeClientWatchBlocks(runtimeID: Uint8Array): grpcWeb.ClientReadableStream<types.RootHashAnnotatedBlock>;
    consensusEstimateGas(req: types.ConsensusEstimateGasRequest): Promise<types.longnum>;
    consensusGetBlock(height: types.longnum): Promise<types.ConsensusBlock>;
    consensusGetChainContext(): Promise<string>;
    consensusGetGenesisDocument(): Promise<types.GenesisDocument>;
    consensusGetLightBlock(height: types.longnum): Promise<types.ConsensusLightBlock>;
    consensusGetLightBlockForState(height: types.longnum): Promise<types.ConsensusLightBlock>;
    consensusGetNextBlockState(): Promise<types.ConsensusNextBlockState>;
    consensusGetParameters(height: types.longnum): Promise<types.ConsensusLightParameters>;
    consensusGetSignerNonce(req: types.ConsensusGetSignerNonceRequest): Promise<types.longnum>;
    consensusGetStatus(): Promise<types.ConsensusStatus>;
    consensusGetTransactions(height: types.longnum): Promise<Uint8Array[]>;
    consensusGetTransactionsWithProofs(height: types.longnum): Promise<types.ConsensusTransactionsWithProofs>;
    consensusGetTransactionsWithResults(height: types.longnum): Promise<types.ConsensusTransactionsWithResults>;
    consensusGetUnconfirmedTransactions(): Promise<Uint8Array[]>;
    consensusStateToGenesis(height: types.longnum): Promise<types.GenesisDocument>;
    consensusSubmitEvidence(evidence: types.ConsensusEvidence): Promise<void>;
    consensusSubmitTx(tx: types.SignatureSigned): Promise<void>;
    consensusSubmitTxNoWait(tx: types.SignatureSigned): Promise<void>;
    consensusSubmitTxWithProof(tx: types.SignatureSigned): Promise<types.ConsensusProof>;
    consensusWatchBlocks(): grpcWeb.ClientReadableStream<types.ConsensusBlock>;
    consensusStateSyncGet(request: types.StorageGetRequest): Promise<types.StorageProofResponse>;
    consensusStateSyncGetPrefixes(request: types.StorageGetPrefixesRequest): Promise<types.StorageProofResponse>;
    consensusStateSyncIterate(request: types.StorageIterateRequest): Promise<types.StorageProofResponse>;
    nodeControllerCancelUpgrade(descriptor: types.UpgradeDescriptor): Promise<void>;
    nodeControllerGetStatus(): Promise<types.ControlStatus>;
    nodeControllerIsReady(): Promise<boolean>;
    nodeControllerIsSynced(): Promise<boolean>;
    nodeControllerRequestShutdown(wait: boolean): Promise<void>;
    nodeControllerUpgradeBinary(descriptor: types.UpgradeDescriptor): Promise<void>;
    nodeControllerWaitReady(): Promise<void>;
    nodeControllerWaitSync(): Promise<void>;
    debugControllerSetEpoch(epoch: types.longnum): Promise<void>;
    debugControllerWaitNodesRegistered(count: number): Promise<void>;
`

const allowedByEnvoy = `
  beaconConsensusParameters(height: types.longnum): Promise<types.BeaconConsensusParameters>;
  beaconGetBaseEpoch(): Promise<types.longnum>;
  beaconGetBeacon(height: types.longnum): Promise<Uint8Array>;
  beaconGetEpoch(height: types.longnum): Promise<types.longnum>;
  beaconGetEpochBlock(epoch: types.longnum): Promise<types.longnum>;
  beaconGetFutureEpoch(height: types.longnum): Promise<types.BeaconEpochTimeState>;
  consensusEstimateGas(req: types.ConsensusEstimateGasRequest): Promise<types.longnum>;
  consensusGetBlock(height: types.longnum): Promise<types.ConsensusBlock>;
  consensusGetChainContext(): Promise<string>;
  consensusGetGenesisDocument(): Promise<types.GenesisDocument>;
  consensusGetNextBlockState(): Promise<types.ConsensusNextBlockState>;
  consensusGetParameters(height: types.longnum): Promise<types.ConsensusLightParameters>;
  consensusGetSignerNonce(req: types.ConsensusGetSignerNonceRequest): Promise<types.longnum>;
  consensusGetStatus(): Promise<types.ConsensusStatus>;
  consensusGetTransactions(height: types.longnum): Promise<Uint8Array[]>;
  consensusGetTransactionsWithResults(height: types.longnum): Promise<types.ConsensusTransactionsWithResults>;
  consensusGetUnconfirmedTransactions(): Promise<Uint8Array[]>;
  consensusSubmitTx(tx: types.SignatureSigned): Promise<void>;
  governanceActiveProposals(height: types.longnum): Promise<types.GovernanceProposal[]>;
  governanceConsensusParameters(height: types.longnum): Promise<types.GovernanceConsensusParameters>;
  governanceGetEvents(height: types.longnum): Promise<types.GovernanceEvent[]>;
  governancePendingUpgrades(height: types.longnum): Promise<types.UpgradeDescriptor[]>;
  governanceProposal(query: types.GovernanceProposalQuery): Promise<types.GovernanceProposal>;
  governanceProposals(height: types.longnum): Promise<types.GovernanceProposal[]>;
  governanceVotes(query: types.GovernanceProposalQuery): Promise<types.GovernanceVoteEntry[]>;
  nodeControllerGetStatus(): Promise<types.ControlStatus>;
  registryConsensusParameters(height: types.longnum): Promise<types.RegistryConsensusParameters>;
  registryGetEntities(height: types.longnum): Promise<types.Entity[]>;
  registryGetEntity(query: types.RegistryIDQuery): Promise<types.Entity>;
  registryGetEvents(height: types.longnum): Promise<types.RegistryEvent[]>;
  registryGetNode(query: types.RegistryIDQuery): Promise<types.Node>;
  registryGetNodeByConsensusAddress(query: types.RegistryConsensusAddressQuery): Promise<types.Node>;
  registryGetNodes(height: types.longnum): Promise<types.Node[]>;
  registryGetNodeStatus(query: types.RegistryIDQuery): Promise<types.RegistryNodeStatus>;
  registryGetRuntime(query: types.RegistryGetRuntimeQuery): Promise<types.RegistryRuntime>;
  registryGetRuntimes(query: types.RegistryGetRuntimesQuery): Promise<types.RegistryRuntime[]>;
  rootHashConsensusParameters(height: types.longnum): Promise<types.RootHashConsensusParameters>;
  rootHashGetEvents(height: types.longnum): Promise<types.RootHashEvent[]>;
  rootHashGetGenesisBlock(request: types.RootHashRuntimeRequest): Promise<types.RootHashBlock>;
  rootHashGetLastRoundResults(request: types.RootHashRuntimeRequest): Promise<types.RootHashRoundResults>;
  rootHashGetLatestBlock(request: types.RootHashRuntimeRequest): Promise<types.RootHashBlock>;
  rootHashGetRuntimeState(request: types.RootHashRuntimeRequest): Promise<types.RootHashRuntimeState>;
  runtimeClientCheckTx(request: types.RuntimeClientCheckTxRequest): Promise<void>;
  runtimeClientGetBlock(request: types.RuntimeClientGetBlockRequest): Promise<types.RootHashBlock>;
  runtimeClientGetEvents(request: types.RuntimeClientGetEventsRequest): Promise<types.RuntimeClientEvent[]>;
  runtimeClientGetGenesisBlock(runtimeID: Uint8Array): Promise<types.RootHashBlock>;
  runtimeClientGetLastRetainedBlock(runtimeID: Uint8Array): Promise<types.RootHashBlock>;
  runtimeClientGetTransactions(request: types.RuntimeClientGetTransactionsRequest): Promise<Uint8Array[]>;
  runtimeClientGetTransactionsWithResults(request: types.RuntimeClientGetTransactionsRequest): Promise<types.RuntimeClientTransactionWithResults[]>;
  runtimeClientQuery(request: types.RuntimeClientQueryRequest): Promise<types.RuntimeClientQueryResponse>;
  runtimeClientSubmitTx(request: types.RuntimeClientSubmitTxRequest): Promise<Uint8Array>;
  runtimeClientSubmitTxMeta(request: types.RuntimeClientSubmitTxRequest): Promise<types.RuntimeClientSubmitTxMetaResponse>;
  runtimeClientSubmitTxNoWait(request: types.RuntimeClientSubmitTxRequest): Promise<void>;
  runtimeClientWatchBlocks(runtimeID: Uint8Array): grpcWeb.ClientReadableStream<types.RootHashAnnotatedBlock>;
  schedulerConsensusParameters(height: types.longnum): Promise<types.SchedulerConsensusParameters>;
  schedulerGetCommittees(request: types.SchedulerGetCommitteesRequest): Promise<types.SchedulerCommittee[]>;
  schedulerGetValidators(height: types.longnum): Promise<types.SchedulerValidator[]>;
  stakingAccount(query: types.StakingOwnerQuery): Promise<types.StakingAccount>;
  stakingAddresses(height: types.longnum): Promise<Uint8Array[]>;
  stakingAllowance(query: types.StakingAllowanceQuery): Promise<Uint8Array>;
  stakingCommissionScheduleAddresses(height: types.longnum): Promise<Uint8Array[]>;
  stakingCommonPool(height: types.longnum): Promise<Uint8Array>;
  stakingConsensusParameters(height: types.longnum): Promise<types.StakingConsensusParameters>;
  stakingDebondingDelegationInfosFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDebondingDelegationInfo[]>>;
  stakingDebondingDelegationsFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDebondingDelegation[]>>;
  stakingDebondingDelegationsTo(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDebondingDelegation[]>>;
  stakingDelegationInfosFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDelegationInfo>>;
  stakingDelegationsFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDelegation>>;
  stakingDelegationsTo(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDelegation>>;
  stakingGetEvents(height: types.longnum): Promise<types.StakingEvent[]>;
  stakingGovernanceDeposits(height: types.longnum): Promise<Uint8Array>;
  stakingLastBlockFees(height: types.longnum): Promise<Uint8Array>;
  stakingThreshold(query: types.StakingThresholdQuery): Promise<Uint8Array>;
  stakingTokenSymbol(): Promise<string>;
  stakingTokenValueExponent(): Promise<number>;
  stakingTotalSupply(height: types.longnum): Promise<Uint8Array>;
`

const sortByParams = `
  beaconGetBaseEpoch(): Promise<types.longnum>;
  consensusGetChainContext(): Promise<string>;
  consensusGetGenesisDocument(): Promise<types.GenesisDocument>;
  consensusGetNextBlockState(): Promise<types.ConsensusNextBlockState>;
  consensusGetStatus(): Promise<types.ConsensusStatus>;
  consensusGetUnconfirmedTransactions(): Promise<Uint8Array[]>;
  nodeControllerGetStatus(): Promise<types.ControlStatus>;
  stakingTokenSymbol(): Promise<string>;
  stakingTokenValueExponent(): Promise<number>;

  beaconConsensusParameters(height: types.longnum): Promise<types.BeaconConsensusParameters>;
  beaconGetBeacon(height: types.longnum): Promise<Uint8Array>;
  beaconGetEpoch(height: types.longnum): Promise<types.longnum>;
  beaconGetFutureEpoch(height: types.longnum): Promise<types.BeaconEpochTimeState>;
  consensusGetBlock(height: types.longnum): Promise<types.ConsensusBlock>;
  consensusGetParameters(height: types.longnum): Promise<types.ConsensusLightParameters>;
  consensusGetTransactions(height: types.longnum): Promise<Uint8Array[]>;
  consensusGetTransactionsWithResults(height: types.longnum): Promise<types.ConsensusTransactionsWithResults>;
  governanceActiveProposals(height: types.longnum): Promise<types.GovernanceProposal[]>;
  governanceConsensusParameters(height: types.longnum): Promise<types.GovernanceConsensusParameters>;
  governanceGetEvents(height: types.longnum): Promise<types.GovernanceEvent[]>;
  governancePendingUpgrades(height: types.longnum): Promise<types.UpgradeDescriptor[]>;
  governanceProposals(height: types.longnum): Promise<types.GovernanceProposal[]>;
  registryConsensusParameters(height: types.longnum): Promise<types.RegistryConsensusParameters>;
  registryGetEntities(height: types.longnum): Promise<types.Entity[]>;
  registryGetEvents(height: types.longnum): Promise<types.RegistryEvent[]>;
  registryGetNodes(height: types.longnum): Promise<types.Node[]>;
  rootHashConsensusParameters(height: types.longnum): Promise<types.RootHashConsensusParameters>;
  rootHashGetEvents(height: types.longnum): Promise<types.RootHashEvent[]>;
  schedulerConsensusParameters(height: types.longnum): Promise<types.SchedulerConsensusParameters>;
  schedulerGetValidators(height: types.longnum): Promise<types.SchedulerValidator[]>;
  stakingAddresses(height: types.longnum): Promise<Uint8Array[]>;
  stakingCommissionScheduleAddresses(height: types.longnum): Promise<Uint8Array[]>;
  stakingCommonPool(height: types.longnum): Promise<Uint8Array>;
  stakingConsensusParameters(height: types.longnum): Promise<types.StakingConsensusParameters>;
  stakingGetEvents(height: types.longnum): Promise<types.StakingEvent[]>;
  stakingGovernanceDeposits(height: types.longnum): Promise<Uint8Array>;
  stakingLastBlockFees(height: types.longnum): Promise<Uint8Array>;
  stakingTotalSupply(height: types.longnum): Promise<Uint8Array>;

  beaconGetEpochBlock(epoch: types.longnum): Promise<types.longnum>;

  runtimeClientGetGenesisBlock(runtimeID: Uint8Array): Promise<types.RootHashBlock>;
  runtimeClientGetLastRetainedBlock(runtimeID: Uint8Array): Promise<types.RootHashBlock>;
  runtimeClientWatchBlocks(runtimeID: Uint8Array): grpcWeb.ClientReadableStream<types.RootHashAnnotatedBlock>;

  consensusSubmitTx(tx: types.SignatureSigned): Promise<void>;
  runtimeClientSubmitTx(request: types.RuntimeClientSubmitTxRequest): Promise<Uint8Array>;
  runtimeClientSubmitTxMeta(request: types.RuntimeClientSubmitTxRequest): Promise<types.RuntimeClientSubmitTxMetaResponse>;
  runtimeClientSubmitTxNoWait(request: types.RuntimeClientSubmitTxRequest): Promise<void>;

  consensusEstimateGas(req: types.ConsensusEstimateGasRequest): Promise<types.longnum>;
  consensusGetSignerNonce(req: types.ConsensusGetSignerNonceRequest): Promise<types.longnum>;
  governanceProposal(query: types.GovernanceProposalQuery): Promise<types.GovernanceProposal>;
  governanceVotes(query: types.GovernanceProposalQuery): Promise<types.GovernanceVoteEntry[]>;
  registryGetEntity(query: types.RegistryIDQuery): Promise<types.Entity>;
  registryGetNode(query: types.RegistryIDQuery): Promise<types.Node>;
  registryGetNodeStatus(query: types.RegistryIDQuery): Promise<types.RegistryNodeStatus>;
  registryGetNodeByConsensusAddress(query: types.RegistryConsensusAddressQuery): Promise<types.Node>;
  registryGetRuntime(query: types.RegistryGetRuntimeQuery): Promise<types.RegistryRuntime>;
  registryGetRuntimes(query: types.RegistryGetRuntimesQuery): Promise<types.RegistryRuntime[]>;

  rootHashGetGenesisBlock(request: types.RootHashRuntimeRequest): Promise<types.RootHashBlock>;
  rootHashGetLastRoundResults(request: types.RootHashRuntimeRequest): Promise<types.RootHashRoundResults>;
  rootHashGetLatestBlock(request: types.RootHashRuntimeRequest): Promise<types.RootHashBlock>;
  rootHashGetRuntimeState(request: types.RootHashRuntimeRequest): Promise<types.RootHashRuntimeState>;

  runtimeClientCheckTx(request: types.RuntimeClientCheckTxRequest): Promise<void>;
  runtimeClientGetBlock(request: types.RuntimeClientGetBlockRequest): Promise<types.RootHashBlock>;
  runtimeClientGetEvents(request: types.RuntimeClientGetEventsRequest): Promise<types.RuntimeClientEvent[]>;
  runtimeClientGetTransactions(request: types.RuntimeClientGetTransactionsRequest): Promise<Uint8Array[]>;
  runtimeClientGetTransactionsWithResults(request: types.RuntimeClientGetTransactionsRequest): Promise<types.RuntimeClientTransactionWithResults[]>;
  runtimeClientQuery(request: types.RuntimeClientQueryRequest): Promise<types.RuntimeClientQueryResponse>;
  schedulerGetCommittees(request: types.SchedulerGetCommitteesRequest): Promise<types.SchedulerCommittee[]>;
  stakingAllowance(query: types.StakingAllowanceQuery): Promise<Uint8Array>;
  stakingThreshold(query: types.StakingThresholdQuery): Promise<Uint8Array>;

  stakingAccount(query: types.StakingOwnerQuery): Promise<types.StakingAccount>;
  stakingDebondingDelegationInfosFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDebondingDelegationInfo[]>>;
  stakingDebondingDelegationsFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDebondingDelegation[]>>;
  stakingDebondingDelegationsTo(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDebondingDelegation[]>>;
  stakingDelegationInfosFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDelegationInfo>>;
  stakingDelegationsFor(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDelegation>>;
  stakingDelegationsTo(query: types.StakingOwnerQuery): Promise<Map<Uint8Array, types.StakingDelegation>>;
`

const manual = `
export declare class NodeInternal {
  beaconGetBaseEpoch(): Promise<types.longnum>;
  consensusGetChainContext(): Promise<string>;
  consensusGetGenesisDocument(): Promise<types.GenesisDocument>;
  consensusGetNextBlockState(): Promise<types.ConsensusNextBlockState>;
  consensusGetStatus(): Promise<types.ConsensusStatus>;
  consensusGetUnconfirmedTransactions(): Promise<Uint8Array[]>;
  nodeControllerGetStatus(): Promise<types.ControlStatus>;
  stakingTokenSymbol(): Promise<string>;
  stakingTokenValueExponent(): Promise<number>;

  beaconConsensusParameters(height: types.longnum): Promise<types.BeaconConsensusParameters>;
  beaconGetBeacon(height: types.longnum): Promise<Uint8Array>;
  beaconGetEpoch(height: types.longnum): Promise<types.longnum>;
  beaconGetFutureEpoch(height: types.longnum): Promise<types.BeaconEpochTimeState>;
  consensusGetBlock(height: types.longnum): Promise<types.ConsensusBlock>;
  consensusGetParameters(height: types.longnum): Promise<types.ConsensusLightParameters>;
  consensusGetTransactions(height: types.longnum): Promise<Uint8Array[]>;
  consensusGetTransactionsWithResults(height: types.longnum): Promise<types.ConsensusTransactionsWithResults>;
  governanceActiveProposals(height: types.longnum): Promise<types.GovernanceProposal[]>;
  governanceConsensusParameters(height: types.longnum): Promise<types.GovernanceConsensusParameters>;
  governanceGetEvents(height: types.longnum): Promise<types.GovernanceEvent[]>;
  governancePendingUpgrades(height: types.longnum): Promise<types.UpgradeDescriptor[]>;
  governanceProposals(height: types.longnum): Promise<types.GovernanceProposal[]>;
  registryConsensusParameters(height: types.longnum): Promise<types.RegistryConsensusParameters>;
  registryGetEntities(height: types.longnum): Promise<types.Entity[]>;
  registryGetEvents(height: types.longnum): Promise<types.RegistryEvent[]>;
  registryGetNodes(height: types.longnum): Promise<types.Node[]>;
  rootHashConsensusParameters(height: types.longnum): Promise<types.RootHashConsensusParameters>;
  rootHashGetEvents(height: types.longnum): Promise<types.RootHashEvent[]>;
  schedulerConsensusParameters(height: types.longnum): Promise<types.SchedulerConsensusParameters>;
  schedulerGetValidators(height: types.longnum): Promise<types.SchedulerValidator[]>;
  stakingAddresses(height: types.longnum): Promise<Uint8Array[]>;
  stakingCommissionScheduleAddresses(height: types.longnum): Promise<Uint8Array[]>;
  stakingCommonPool(height: types.longnum): Promise<Uint8Array>;
  stakingConsensusParameters(height: types.longnum): Promise<types.StakingConsensusParameters>;
  stakingGetEvents(height: types.longnum): Promise<types.StakingEvent[]>;
  stakingGovernanceDeposits(height: types.longnum): Promise<Uint8Array>;
  stakingLastBlockFees(height: types.longnum): Promise<Uint8Array>;
  stakingTotalSupply(height: types.longnum): Promise<Uint8Array>;

  beaconGetEpochBlock(epoch: types.longnum): Promise<types.longnum>;

  runtimeClientGetGenesisBlock(runtimeID: Uint8Array): Promise<types.RootHashBlock>;
  runtimeClientGetLastRetainedBlock(runtimeID: Uint8Array): Promise<types.RootHashBlock>;
  // runtimeClientWatchBlocks(runtimeID: Uint8Array): grpcWeb.ClientReadableStream<types.RootHashAnnotatedBlock>;

  // consensusSubmitTx(tx: types.SignatureSigned): Promise<void>;
  // runtimeClientSubmitTx(request: types.RuntimeClientSubmitTxRequest): Promise<Uint8Array>;
  // runtimeClientSubmitTxMeta(request: types.RuntimeClientSubmitTxRequest): Promise<types.RuntimeClientSubmitTxMetaResponse>;
  // runtimeClientSubmitTxNoWait(request: types.RuntimeClientSubmitTxRequest): Promise<void>;

  // consensusEstimateGas(req: types.ConsensusEstimateGasRequest): Promise<types.longnum>;
  // consensusGetSignerNonce(req: types.ConsensusGetSignerNonceRequest): Promise<types.longnum>;
  governanceProposal(query: types.GovernanceProposalQuery): Promise<types.GovernanceProposal>;
  governanceVotes(query: types.GovernanceProposalQuery): Promise<types.GovernanceVoteEntry[]>;
  registryGetEntity(query: types.RegistryIDQuery): Promise<types.Entity>;
  registryGetNode(query: types.RegistryIDQuery): Promise<types.Node>;
  registryGetNodeStatus(query: types.RegistryIDQuery): Promise<types.RegistryNodeStatus>;
  registryGetNodeByConsensusAddress(query: types.RegistryConsensusAddressQuery): Promise<types.Node>;
  // registryGetRuntime(query: types.RegistryGetRuntimeQuery): Promise<types.RegistryRuntime>;
  registryGetRuntimes(query: { include_suspended: boolean; height: types.longnum; }): Promise<types.RegistryRuntime[]>;

  rootHashGetGenesisBlock(request: { runtime_id: Uint8Array; height: types.longnum; }): Promise<types.RootHashBlock>;
  rootHashGetLastRoundResults(request: { runtime_id: Uint8Array; height: types.longnum; }): Promise<types.RootHashRoundResults>;
  rootHashGetLatestBlock(request: { runtime_id: Uint8Array; height: types.longnum; }): Promise<types.RootHashBlock>;
  rootHashGetRuntimeState(request: { runtime_id: Uint8Array; height: types.longnum; }): Promise<types.RootHashRuntimeState>;

  // runtimeClientCheckTx(request: types.RuntimeClientCheckTxRequest): Promise<void>;
  runtimeClientGetBlock(request: { runtime_id: Uint8Array; round: types.longnum; }): Promise<types.RootHashBlock>;
  runtimeClientGetEvents(request: { runtime_id: Uint8Array; round: types.longnum; }): Promise<types.RuntimeClientEvent[]>;
  runtimeClientGetTransactions(request: { runtime_id: Uint8Array; round: types.longnum; }): Promise<Uint8Array[]>;
  runtimeClientGetTransactionsWithResults(request: { runtime_id: Uint8Array; round: types.longnum; }): Promise<types.RuntimeClientTransactionWithResults[]>;
  // runtimeClientQuery(request: types.RuntimeClientQueryRequest): Promise<types.RuntimeClientQueryResponse>;
  schedulerGetCommittees(request: { runtime_id: Uint8Array; round: types.longnum; }): Promise<types.SchedulerCommittee[]>;
  stakingAllowance(query: { owner: Uint8Array; beneficiary: Uint8Array; height: types.longnum; }): Promise<Uint8Array>;
  // stakingThreshold(query: types.StakingThresholdQuery): Promise<Uint8Array>;

  stakingAccount(query: { owner: Uint8Array; height: types.longnum; }): Promise<types.StakingAccount>;
  stakingDebondingDelegationInfosFor(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDebondingDelegationInfo[]>>;
  stakingDebondingDelegationsFor(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDebondingDelegation[]>>;
  stakingDebondingDelegationsTo(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDebondingDelegation[]>>;
  stakingDelegationInfosFor(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDelegationInfo>>;
  stakingDelegationsFor(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDelegation>>;
  stakingDelegationsTo(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDelegation>>;
}
`

const fnNames = `
  beaconGetBaseEpoch(): Promise<types.longnum>;
  consensusGetChainContext(): Promise<string>;
  consensusGetGenesisDocument(): Promise<types.GenesisDocument>;
  consensusGetNextBlockState(): Promise<types.ConsensusNextBlockState>;
  consensusGetStatus(): Promise<types.ConsensusStatus>;
  consensusGetUnconfirmedTransactions(): Promise<Uint8Array[]>;
  nodeControllerGetStatus(): Promise<types.ControlStatus>;
  stakingTokenSymbol(): Promise<string>;
  stakingTokenValueExponent(): Promise<number>;

  beaconConsensusParameters(height: types.longnum): Promise<types.BeaconConsensusParameters>;
  beaconGetBeacon(height: types.longnum): Promise<Uint8Array>;
  beaconGetEpoch(height: types.longnum): Promise<types.longnum>;
  beaconGetFutureEpoch(height: types.longnum): Promise<types.BeaconEpochTimeState>;
  consensusGetBlock(height: types.longnum): Promise<types.ConsensusBlock>;
  consensusGetParameters(height: types.longnum): Promise<types.ConsensusLightParameters>;
  consensusGetTransactions(height: types.longnum): Promise<Uint8Array[]>;
  consensusGetTransactionsWithResults(height: types.longnum): Promise<types.ConsensusTransactionsWithResults>;
  governanceActiveProposals(height: types.longnum): Promise<types.GovernanceProposal[]>;
  governanceConsensusParameters(height: types.longnum): Promise<types.GovernanceConsensusParameters>;
  governanceGetEvents(height: types.longnum): Promise<types.GovernanceEvent[]>;
  governancePendingUpgrades(height: types.longnum): Promise<types.UpgradeDescriptor[]>;
  governanceProposals(height: types.longnum): Promise<types.GovernanceProposal[]>;
  registryConsensusParameters(height: types.longnum): Promise<types.RegistryConsensusParameters>;
  registryGetEntities(height: types.longnum): Promise<types.Entity[]>;
  registryGetEvents(height: types.longnum): Promise<types.RegistryEvent[]>;
  registryGetNodes(height: types.longnum): Promise<types.Node[]>;
  rootHashConsensusParameters(height: types.longnum): Promise<types.RootHashConsensusParameters>;
  rootHashGetEvents(height: types.longnum): Promise<types.RootHashEvent[]>;
  schedulerConsensusParameters(height: types.longnum): Promise<types.SchedulerConsensusParameters>;
  schedulerGetValidators(height: types.longnum): Promise<types.SchedulerValidator[]>;
  stakingAddresses(height: types.longnum): Promise<Uint8Array[]>;
  stakingCommissionScheduleAddresses(height: types.longnum): Promise<Uint8Array[]>;
  stakingCommonPool(height: types.longnum): Promise<Uint8Array>;
  stakingConsensusParameters(height: types.longnum): Promise<types.StakingConsensusParameters>;
  stakingGetEvents(height: types.longnum): Promise<types.StakingEvent[]>;
  stakingGovernanceDeposits(height: types.longnum): Promise<Uint8Array>;
  stakingLastBlockFees(height: types.longnum): Promise<Uint8Array>;
  stakingTotalSupply(height: types.longnum): Promise<Uint8Array>;

  beaconGetEpochBlock(epoch: types.longnum): Promise<types.longnum>;

  runtimeClientGetGenesisBlock(runtimeID: Uint8Array): Promise<types.RootHashBlock>;
  runtimeClientGetLastRetainedBlock(runtimeID: Uint8Array): Promise<types.RootHashBlock>;
  // runtimeClientWatchBlocks(runtimeID: Uint8Array): grpcWeb.ClientReadableStream<types.RootHashAnnotatedBlock>;

  // consensusSubmitTx(tx: types.SignatureSigned): Promise<void>;
  // runtimeClientSubmitTx(request: types.RuntimeClientSubmitTxRequest): Promise<Uint8Array>;
  // runtimeClientSubmitTxMeta(request: types.RuntimeClientSubmitTxRequest): Promise<types.RuntimeClientSubmitTxMetaResponse>;
  // runtimeClientSubmitTxNoWait(request: types.RuntimeClientSubmitTxRequest): Promise<void>;

  // consensusEstimateGas(req: types.ConsensusEstimateGasRequest): Promise<types.longnum>;
  // consensusGetSignerNonce(req: types.ConsensusGetSignerNonceRequest): Promise<types.longnum>;
  governanceProposal(query: types.GovernanceProposalQuery): Promise<types.GovernanceProposal>;
  governanceVotes(query: types.GovernanceProposalQuery): Promise<types.GovernanceVoteEntry[]>;
  registryGetEntity(query: types.RegistryIDQuery): Promise<types.Entity>;
  registryGetNode(query: types.RegistryIDQuery): Promise<types.Node>;
  registryGetNodeStatus(query: types.RegistryIDQuery): Promise<types.RegistryNodeStatus>;
  registryGetNodeByConsensusAddress(query: types.RegistryConsensusAddressQuery): Promise<types.Node>;
  // registryGetRuntime(query: types.RegistryGetRuntimeQuery): Promise<types.RegistryRuntime>;
  registryGetRuntimes(query: { include_suspended: boolean; height: types.longnum; }): Promise<types.RegistryRuntime[]>;

  rootHashGetGenesisBlock(request: { runtime_id: Uint8Array; height: types.longnum; }): Promise<types.RootHashBlock>;
  rootHashGetLastRoundResults(request: { runtime_id: Uint8Array; height: types.longnum; }): Promise<types.RootHashRoundResults>;
  rootHashGetLatestBlock(request: { runtime_id: Uint8Array; height: types.longnum; }): Promise<types.RootHashBlock>;
  rootHashGetRuntimeState(request: { runtime_id: Uint8Array; height: types.longnum; }): Promise<types.RootHashRuntimeState>;

  // runtimeClientCheckTx(request: types.RuntimeClientCheckTxRequest): Promise<void>;
  runtimeClientGetBlock(request: { runtime_id: Uint8Array; round: types.longnum; }): Promise<types.RootHashBlock>;
  runtimeClientGetEvents(request: { runtime_id: Uint8Array; round: types.longnum; }): Promise<types.RuntimeClientEvent[]>;
  runtimeClientGetTransactions(request: { runtime_id: Uint8Array; round: types.longnum; }): Promise<Uint8Array[]>;
  runtimeClientGetTransactionsWithResults(request: { runtime_id: Uint8Array; round: types.longnum; }): Promise<types.RuntimeClientTransactionWithResults[]>;
  // runtimeClientQuery(request: types.RuntimeClientQueryRequest): Promise<types.RuntimeClientQueryResponse>;
  schedulerGetCommittees(request: { runtime_id: Uint8Array; round: types.longnum; }): Promise<types.SchedulerCommittee[]>;
  stakingAllowance(query: { owner: Uint8Array; beneficiary: Uint8Array; height: types.longnum; }): Promise<Uint8Array>;
  // stakingThreshold(query: types.StakingThresholdQuery): Promise<Uint8Array>;

  stakingAccount(query: { owner: Uint8Array; height: types.longnum; }): Promise<types.StakingAccount>;
  stakingDebondingDelegationInfosFor(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDebondingDelegationInfo[]>>;
  stakingDebondingDelegationsFor(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDebondingDelegation[]>>;
  stakingDebondingDelegationsTo(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDebondingDelegation[]>>;
  stakingDelegationInfosFor(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDelegationInfo>>;
  stakingDelegationsFor(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDelegation>>;
  stakingDelegationsTo(query: { owner: Uint8Array; height: types.longnum; }): Promise<Map<Uint8Array, types.StakingDelegation>>;
`.trim().split('\n').map(a => a.trim()).filter(a=>a).filter(a => !a.startsWith('//')).map(a => a.split('(')[0])


import oasis from '@oasisprotocol/client'
import oasisRT from '@oasisprotocol/client-rt'
import xhr2 from 'xhr2'
import {out, parseGrpc} from './parseGrpc.js'
import fs from 'fs'
global.XMLHttpRequest = xhr2

const emeraldConfig = {
  mainnet: {
    address: 'oasis1qzvlg0grjxwgjj58tx2xvmv26era6t2csqn22pte',
    runtimeId: '000000000000000000000000000000000000000000000000e2eaa99fc008f87f',
  },
  testnet: {
    address: 'oasis1qr629x0tg9gm5fyhedgs9lw5eh3d8ycdnsxf0run',
    runtimeId: '00000000000000000000000000000000000000000000000072c8215e60d5bca7',
  },
}

const cipherConfig = {
  mainnet: {
    address: 'oasis1qrnu9yhwzap7rqh6tdcdcpz0zf86hwhycchkhvt8',
    runtimeId: '000000000000000000000000000000000000000000000000e199119c992377cb',
  },
  testnet: {
    address: 'oasis1qqdn25n5a2jtet2s5amc7gmchsqqgs4j0qcg5k0t',
    runtimeId: '0000000000000000000000000000000000000000000000000000000000000000',
  },
}

const sapphireConfig = {
  mainnet: {
    address: 'oasis1qrd3mnzhhgst26hsp96uf45yhq6zlax0cuzdgcfc',
    runtimeId: '000000000000000000000000000000000000000000000000f80306c9858e7279',
  },
  testnet: {
    address: 'oasis1qqczuf3x6glkgjuf0xgtcpjjw95r3crf7y2323xd',
    runtimeId: '000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c',
  },
}

const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')

function getParamName(fn) {
  return fn.toString().split(/\(|\)/)[1]
}

function genParamsForFn(fn) {
  const paramsMap = {
    height: `0`,
    epoch: `34315`,
    round: `8433003`,
    runtime_id: `oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */)`,
    runtimeID: `oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */)`,
    owner: `oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */)`,
    beneficiary: `oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */)`,
    address: `oasis.staking.addressFromBech32('oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe' /* stakefish */)`,
    include_suspended: `true`,
    id: `1`,

    query: `{
      height: 0,
      epoch: 34315,
      round: 8433003,
      runtime_id: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      runtimeID: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      owner: oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */),
      beneficiary: oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */),
      address: oasis.staking.addressFromBech32('oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe' /* stakefish */),
      include_suspended: true,
      id: 1,
    }`,
    request: `{
      height: 0,
      epoch: 34315,
      round: 8433003,
      runtime_id: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      runtimeID: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      owner: oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */),
      beneficiary: oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */),
      address: oasis.staking.addressFromBech32('oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe' /* stakefish */),
      include_suspended: true,
      id: 1,
    }`,
  }
  // TODO: differentiate "id" field meaning by fnName
  // if (fnName === 'aaa') id => nodeId, entityId, proposalId

  return {
    fn,
    paramName: getParamName(fn),
    paramValues: paramsMap[getParamName(fn)],
  }
}

function gen(fnName) {
  return `out(await nic.${fnName}(${genParamsForFn(nic[fnName]).paramValues}))`
}

console.log(nic.consensusGetStatus.toString())
console.log(nic.stakingTotalSupply.toString())
console.log(nic.stakingDelegationsFor.toString())
console.log(nic.rootHashGetLatestBlock.toString())

console.log(nic.consensusGetStatus.toString().split(/\(|\)/)[1])
console.log(nic.stakingTotalSupply.toString().split(/\(|\)/)[1])
console.log(nic.stakingDelegationsFor.toString().split(/\(|\)/)[1])
console.log(nic.rootHashGetLatestBlock.toString().split(/\(|\)/)[1])

console.log(genParamsForFn(nic.consensusGetStatus))
console.log(genParamsForFn(nic.stakingTotalSupply))
console.log(genParamsForFn(nic.stakingDelegationsFor))
console.log(genParamsForFn(nic.rootHashGetLatestBlock))

out(await nic.rootHashGetLatestBlock({
  height: 0,
  runtime_id: oasis.misc.fromHex(sapphireConfig.mainnet.runtimeId),
  aa: 5, // Allows extra params
  epoch: 123,
}))

out(gen('consensusGetStatus'))
out(gen('stakingTotalSupply'))
out(gen('stakingDelegationsFor'))
out(gen('rootHashGetLatestBlock'))

console.log()
console.log()
console.log()
console.log()
console.log('// ====================================')
console.log('// ====================================')
console.log('// ====================================')
console.log('// ====================================')

for (const fnName of fnNames) {
const fileContent = `
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  ${gen(fnName)}
} catch (err) {
  console.log('error', err)
}
`
  fs.writeFileSync('output/'+fnName+'.js', fileContent, 'utf-8')

  console.log('node output/'+fnName+'.js >> output/'+fnName+'.js')
}

