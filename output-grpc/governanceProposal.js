
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.governanceProposal({
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
{ id: 1,
  state: 2,
  content:
   { upgrade:
      { v: 1,
        epoch: 8049,
        target:
         { consensus_protocol: { major: 4 },
           runtime_host_protocol: { major: 3 },
           runtime_committee_protocol: { major: 2 } },
        handler: 'consensus-params-update-2021-08' } },
  deposit: '10,000.0',
  results: { as_Map: [ [ 1, '4,080,181,483.52859476' ] ] },
  closes_at: 7876,
  submitter: 'oasis1qpydpeyjrneq20kh2jz2809lew6d9p64yymutlee',
  created_at: 7708,
  invalid_votes: 2 }
