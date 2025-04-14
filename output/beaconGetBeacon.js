
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.beaconGetBeacon(0))
} catch (err) {
  console.log('error', err)
}
const output = 
'oasis1qpagy9xw56u0fdnx4l8dv5agpq5yp4ydjgew7dje or ad26829e0ee308eaf40dbfa0d6cbf7042cb4058f6c7f6cbd8b7d6a885f43580c'
