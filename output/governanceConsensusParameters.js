
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.governanceConsensusParameters(0))
} catch (err) {
  console.log('error', err)
}
const output = 
{ gas_costs: { cast_vote: 1000, submit_proposal: 1000 },
  voting_period: 168,
  stake_threshold: 68,
  min_proposal_deposit: '10,000.0',
  upgrade_min_epoch_diff: 336,
  allow_proposal_metadata: true,
  allow_vote_without_entity: true,
  upgrade_cancel_min_epoch_diff: 192,
  enable_change_parameters_proposal: true }
