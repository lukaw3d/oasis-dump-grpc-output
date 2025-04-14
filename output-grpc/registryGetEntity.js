
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.registryGetEntity({
      height: 0,
      epoch: 34315,
      round: 8433003,
      runtime_id: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      runtimeID: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      owner: oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */),
      beneficiary: oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */),
      address: oasis.staking.addressFromBech32('oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe' /* stakefish */),
      include_suspended: true,
      id: oasis.misc.fromBase64('eZuacXy5s3/nolB/E3gF4vqUYdvfOlVaaBXGfZcGwKc=' /* stakefish */),
    }))
} catch (err) {
  console.log('error', err)
}
const output =
{ v: 2,
  id:
   'oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe or 799b9a717cb9b37fe7a2507f137805e2fa9461dbdf3a555a6815c67d9706c0a7',
  nodes:
   [ 'oasis1qphhk4g0ncqut2ds40mr932s5p8tkqcu3yaae227 or 490659775c2c597745b2ab3052887a859b66ceef9e8ee4a7ac6787b60201243a' ] }
