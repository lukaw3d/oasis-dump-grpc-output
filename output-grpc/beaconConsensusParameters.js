
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.beaconConsensusParameters(0))
} catch (err) {
  console.log('error', err)
}
const output = 
{ backend: 'vrf',
  vrf_parameters:
   { interval: 600,
     gas_costs: { vrf_prove: 1000 },
     proof_delay: 400,
     alpha_hq_threshold: 20 } }
