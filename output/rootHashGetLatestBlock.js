
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.rootHashGetLatestBlock({
      height: 0,
      epoch: 34315,
      round: 8433003,
      runtime_id: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      runtimeID: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      owner: oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */),
      beneficiary: oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */),
      address: oasis.staking.addressFromBech32('oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe' /* stakefish */),
      include_suspended: true,
      id: 1,
    }))
} catch (err) {
  console.log('error', err)
}
const output = 
{ header:
   { round: 8434719,
     io_root:
      'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
     version: 0,
     namespace:
      'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
     timestamp: 1744596717,
     state_root:
      'oasis1qq3s0x3nl7djrut8ze8clwz3ny67y68tmyu0zp6v or 2f73bca499788afbbb243c48900139ccc0074303f6646c47bf228dabafdc8c4a',
     header_type: 1,
     in_msgs_hash:
      'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
     messages_hash:
      'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
     previous_hash:
      'oasis1qpg5er8auk7z2z4lzlu4c0f7jmccchfz6ymu7s8p or 1da65947ecef5d78a737ae61327c12290aba0e0531d67223847f7b85c78e572b' } }
