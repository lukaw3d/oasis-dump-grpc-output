
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.registryConsensusParameters(0))
} catch (err) {
  console.log('error', err)
}
const output = 
{ gas_costs:
   { register_node: 1000,
     unfreeze_node: 1000,
     prove_freshness: 1000,
     register_entity: 1000,
     register_runtime: 1000,
     deregister_entity: 1000,
     runtime_epoch_maintenance: 1000 },
  tee_features:
   { sgx: { pcs: true, max_attestation_age: 1200, signed_attestations: true },
     freshness_proofs: true },
  enable_km_churp: true,
  max_node_expiration: 2,
  max_runtime_deployments: 5,
  enable_runtime_governance_models: { as_Map: [ [ 1, true ], [ 2, true ] ] } }
