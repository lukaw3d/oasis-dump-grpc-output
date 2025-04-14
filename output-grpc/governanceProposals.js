
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.governanceProposals(0))
} catch (err) {
  console.log('error', err)
}
const output = 
[ { id: 1,
    state: 2,
    content:
     { upgrade:
        { v: 1,
          epoch: 8049,
          target:
           { consensus_protocol: { major: 4 },
             runtime_host_protocol: { major: 3 },
             runtime_committee_protocol: { major: 2 } },
          handler: 'consensus-params-update-2021-08' } },
    deposit: '10,000.0',
    results: { as_Map: [ [ 1, '4,080,181,483.52859476' ] ] },
    closes_at: 7876,
    submitter: 'oasis1qpydpeyjrneq20kh2jz2809lew6d9p64yymutlee',
    created_at: 7708,
    invalid_votes: 2 },
  { id: 2,
    state: 2,
    content:
     { upgrade:
        { v: 1,
          epoch: 13402,
          target:
           { consensus_protocol: { major: 5 },
             runtime_host_protocol: { major: 5 },
             runtime_committee_protocol: { major: 4 } },
          handler: 'mainnet-upgrade-2022-04-11' } },
    deposit: '10,000.0',
    results: { as_Map: [ [ 1, '4,995,683,350.024252486' ] ] },
    closes_at: 13152,
    submitter: 'oasis1qpydpeyjrneq20kh2jz2809lew6d9p64yymutlee',
    created_at: 12984,
    invalid_votes: 1 },
  { id: 3,
    state: 2,
    content:
     { upgrade:
        { v: 1,
          epoch: 28017,
          target:
           { consensus_protocol: { major: 7 },
             runtime_host_protocol: { major: 5, minor: 1 },
             runtime_committee_protocol: { major: 5 } },
          handler: 'mainnet-upgrade-2023-11-29' } },
    deposit: '10,000.0',
    results: { as_Map: [ [ 1, '4,113,005,693.448254862' ] ] },
    closes_at: 27815,
    submitter: 'oasis1qqxc9fnn8fftwfexrn98k52s9lvwu33d3c2pksal',
    created_at: 27647 },
  { id: 4,
    state: 2,
    content:
     { change_parameters:
        { module: 'staking',
          changes:
           { min_transfer: null,
             min_delegation: null,
             reward_schedule: [ { scale: '0.000000283', until: 90000 } ],
             min_commission_rate: null,
             min_transact_balance: null,
             fee_split_weight_vote: null,
             fee_split_weight_propose: null,
             reward_factor_epoch_signed: null,
             reward_factor_block_proposed: null,
             fee_split_weight_next_propose: null } } },
    deposit: '10,000.0',
    results: { as_Map: [ [ 1, '3,173,188,097.634913661' ] ] },
    closes_at: 30895,
    submitter: 'oasis1qp53ud2pcmm73mlf4qywnrr245222mvlz5a2e5ty',
    created_at: 30727,
    invalid_votes: 1 },
  { id: 5,
    state: 2,
    content:
     { upgrade:
        { v: 1,
          epoch: 33777,
          target:
           { consensus_protocol: { major: 7 },
             runtime_host_protocol: { major: 5, minor: 1 },
             runtime_committee_protocol: { major: 5 } },
          handler: 'consensus240' } },
    deposit: '10,000.0',
    results: { as_Map: [ [ 1, '3,116,842,985.708981605' ] ] },
    closes_at: 33581,
    submitter: 'oasis1qpl883gp995zs9n6a279tqsavnaxxf0rzcdlauwu',
    created_at: 33413,
    invalid_votes: 1 } ]
