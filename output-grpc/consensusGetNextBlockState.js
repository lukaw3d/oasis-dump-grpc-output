
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.consensusGetNextBlockState(undefined))
} catch (err) {
  console.log('error', err)
}
const output = 
{ height: 24134099,
  prevotes:
   { ratio: 0.006101754979369974,
     votes:
      [ { node_id:
           'oasis1qrh8x7mcmzcm47dv22u7vu8x3ffgcv8vty85dzjd or 3cea63c53c6ec36709b20b60ce07e1ae43c3de1561da86241e610b1e89cf8294',
          entity_id:
           'oasis1qq2kqzr4q942x44st97n66nmmyh7dhsuvsqyc22u or 0416dad177c8e16493ae813efd819c16d8716c40b98d02615a19748c807091ed',
          voting_power: 754253416267655,
          entity_address: 'oasis1qq2kqzr4q942x44st97n66nmmyh7dhsuvsqyc22u' },
        { node_id:
           'oasis1qqvgrcwnulmvy604rvy4sgmakxjacg0y6uhpc4xw or 2c703619b99efc045e2055e6c700fd9bf01ef2c67577653f0c545f79c4fbd983',
          entity_id:
           'oasis1qq4f2h225gv6g8w8w23fm740aze9lke4qun72n59 or 56deb715f17334c8149e0accbe72a4b3e89cc928b92f09239e224424c6408a63',
          voting_power: 650438517875268,
          entity_address: 'oasis1qq4f2h225gv6g8w8w23fm740aze9lke4qun72n59' },
        { node_id:
           'oasis1qpu5vcf43ztt6pgfawuykwngm73yn7seg5xyyxre or 2e04ced7924b3d751e3df47782c4584206ef53b2c188e0a110e9a3ac148c69a9',
          entity_id:
           'oasis1qp6rcncrz8azcfdp56mjd3mfguze3yeja5lmxjan or fcf380902e32353ea4483cd4647ad08f708d8e886ba1154c9b90d6dfac6b2ef2',
          voting_power: 777198623651,
          entity_address: 'oasis1qp6rcncrz8azcfdp56mjd3mfguze3yeja5lmxjan' } ],
     voting_power: 1405469132766574 },
  precommits: { ratio: 0, votes: null, voting_power: 0 },
  voting_power: '230338507121060012',
  num_validators: 116 }
