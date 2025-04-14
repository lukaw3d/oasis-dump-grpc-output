
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.consensusGetParameters(0))
} catch (err) {
  console.log('error', err)
}
const output = 
{ meta:
   '0a0f0880804010ffffffffffffffffff01120e0880a70c12040880ea49188090031a090a07656432353531392206088080808070',
  height: 24134100,
  parameters:
   { gas_costs: { tx_byte: 1 },
     max_tx_size: 131072,
     max_block_gas: 5000000,
     max_block_size: 4194304,
     timeout_commit: 5000000000,
     max_evidence_size: 51200,
     skip_timeout_commit: false,
     empty_block_interval: 0,
     state_checkpoint_interval: 100000,
     state_checkpoint_num_kept: 2,
     state_checkpoint_chunk_size: 8388608 } }
