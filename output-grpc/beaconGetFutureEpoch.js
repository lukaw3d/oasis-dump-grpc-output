
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.beaconGetFutureEpoch(0))
} catch (err) {
  console.log('error', err)
}
const output = 
{ epoch: 40211, height: 24134356 }
