
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.stakingConsensusParameters(0))
} catch (err) {
  console.log('error', err)
}
const output = 
{ slashing:
   { as_Map:
      [ [ 0, { amount: '100.0', freeze_interval: '18446744073709551615' } ],
        [ 4, { amount: '100.0', freeze_interval: '18446744073709551615' } ] ] },
  gas_costs:
   { burn: 1000,
     allow: 1000,
     transfer: 1000,
     withdraw: 1000,
     add_escrow: 1000,
     reclaim_escrow: 1000,
     amend_commission_schedule: 1000 },
  thresholds:
   { as_Map:
      [ [ 0, '100.0' ],
        [ 1, '100.0' ],
        [ 2, '100.0' ],
        [ 3, '100.0' ],
        [ 4, '100.0' ],
        [ 5, '50,000.0' ],
        [ 6, '50,000.0' ],
        [ 7, '10,000.0' ] ] },
  min_transfer: '0.01',
  max_allowances: 16,
  min_delegation: '100.0',
  reward_schedule: [ { scale: '0.000000283', until: 90000 } ],
  debonding_interval: 336,
  min_transact_balance: {},
  allow_escrow_messages: true,
  fee_split_weight_vote: { as_CBOR: 1 },
  fee_split_weight_propose: { as_CBOR: 2 },
  commission_schedule_rules:
   { max_rate_steps: 10,
     max_bound_steps: 10,
     rate_bound_lead: 336,
     min_commission_rate: {},
     rate_change_interval: 1 },
  reward_factor_epoch_signed: { as_CBOR: 1 },
  reward_factor_block_proposed: {},
  fee_split_weight_next_propose: { as_CBOR: 1 },
  signing_reward_threshold_numerator: 3,
  signing_reward_threshold_denominator: 4 }
