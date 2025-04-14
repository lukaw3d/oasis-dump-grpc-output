
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://testnet.grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.stakingAllowance({
      height: 0,
      epoch: 34315,
      round: 8433003,
      runtime_id: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      runtimeID: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      owner: oasis.staking.addressFromBech32('oasis1qzna6nq9kuktjmxx2s84z38eysqyts84jc9lgdg2' /* testnet faucet */),
      beneficiary: oasis.staking.addressFromBech32('oasis1qqczuf3x6glkgjuf0xgtcpjjw95r3crf7y2323xd' /* sapphireConfig.testnet.address */),
      address: oasis.staking.addressFromBech32('oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe' /* stakefish */),
      include_suspended: true,
      id: 1,
    }))
} catch (err) {
  console.log('error', err)
}
const output =
'100,000.0'
