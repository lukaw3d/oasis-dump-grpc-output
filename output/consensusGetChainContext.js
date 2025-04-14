
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.consensusGetChainContext(undefined))
} catch (err) {
  console.log('error', err)
}
const output = 
'bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4a0703a178e6e55'
