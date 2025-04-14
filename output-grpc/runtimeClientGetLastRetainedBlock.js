
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.runtimeClientGetLastRetainedBlock(oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */)))
} catch (err) {
  console.log('error', err)
}
const output = 
{ header:
   { round: 1357486,
     io_root:
      'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
     version: 0,
     namespace:
      'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
     timestamp: 1701252139,
     state_root:
      'oasis1qr0du45uhv2h92cantpjlqkjj6mn5aeawvd96hy4 or 2dc3dd927e62d26af397c32911f4e4d6b95fd62fed1a7f469cba36afbbd4ef83',
     header_type: 1,
     in_msgs_hash:
      'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
     messages_hash:
      'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
     previous_hash:
      'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a' } }
