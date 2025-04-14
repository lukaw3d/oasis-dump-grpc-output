
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.schedulerConsensusParameters(0))
} catch (err) {
  console.log('error', err)
}
const output = 
{ max_validators: 120,
  min_validators: 30,
  max_validators_per_entity: 1,
  reward_factor_epoch_election_any: {} }
