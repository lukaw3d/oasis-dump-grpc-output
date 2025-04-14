
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.rootHashConsensusParameters(0))
} catch (err) {
  console.log('error', err)
}
const output = 
{ gas_costs:
   { evidence: 5000,
     submit_msg: 1000,
     merge_commit: 10000,
     compute_commit: 10000,
     proposer_timeout: 5000 },
  max_evidence_age: 100,
  max_runtime_messages: 256,
  max_past_roots_stored: 1200,
  max_in_runtime_messages: 128 }
