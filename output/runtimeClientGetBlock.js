
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.runtimeClientGetBlock({
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
   { round: 8433003,
     io_root:
      'oasis1qzmaa8kfvzws8s09qlxm029jkwt03hv2wgxeg8sm or 6ab1bcb8630de042a8ba49e046be9d69ebf1ae19c87f74fb64980ed3530d4360',
     version: 0,
     namespace:
      'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
     timestamp: 1744586363,
     state_root:
      'oasis1qzgsh37fm04y3dc8rzntxlnakgcme7cg2s44e43y or 2c8bc029ae0edb2e2a6ce5a885a8a2475c657399f071ee7025f8363f5350a019',
     header_type: 1,
     in_msgs_hash:
      'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
     messages_hash:
      'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
     previous_hash:
      'oasis1qq0yzl9lcrgajptm0alcaz3xyamsyaatkg82s6cx or 8dedd516fdb3720f64e62e74d3c22944fbb4add74ba3a513c8d340a3b0f3ad65' } }
