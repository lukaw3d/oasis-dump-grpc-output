
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.rootHashGetLastRoundResults({
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
{ good_compute_entities:
   [ 'oasis1qzk6qlmgnq40cq2n3jfkw3307feqngt4gvksfml6 or 83d52acef5ba26f7caadf95129b08f0699b8d6b1ff3bee1aa422be2a40f6b46e',
     'oasis1qp4f47plgld98n5g2ltalalnndnzz96euv9n89lz or 6d3a24d1e97c19b994cd300081c43bf2ec30fd3b20796c17a4cdcdd92e3da814',
     'oasis1qpqz8g88kvw49m402k8m2r6nv4p62vsdkv5d0u6r or 50357916868892cb1d485582e1ab19b71becc9a828cab212e6b3d7f29fe7a765',
     'oasis1qpwrq93z8s9ytu2hfjtqggc9edgwfadzevs3trvm or d5a4d311f488715c6c3d2f3ab8803bad20f62666fe688563d60ac2123cb39734',
     'oasis1qql4alk30frfa6xua42eu7tynkqf9vd5ug95yqpn or 597b3b1250659b7d256b67c6e28643a6e6de16ee6c2a48c355e7e55a8f98b880',
     'oasis1qqrv4g5wu543wa7fcae76eucqfn2uc77zgqw8fxk or a7556c7d2b1e75b2a7ff91b390fb2bd795c3fbf00e21f6cf75ad7fdb24fce0de',
     'oasis1qzl99wft8jtt7ppprk7ce7s079z3r3t77s6pf3dd or e206ce394d3d6dccaf339dd4a759539cffac2dbd1f7a7889bb439c5143c2052b',
     'oasis1qp53ud2pcmm73mlf4qywnrr245222mvlz5a2e5ty or 37edff9b5d83a00ab3152d3217747f9174a44a3ee96675a1abc9d10a8fcc2b09',
     'oasis1qpntrlgxp5tt36pkdezdjt5d27fzkvp22y46qura or 017f3326c8b40e7aeb7700a2ffc249a6d5d2cbada466041c0182a50980f8a0df',
     'oasis1qp9xlxurlcx3k5h3pkays56mp48zfv9nmcf982kn or 44c6b6111d30beb691fb8bb940e18ead14f098c54e60d70ea2deec169a4f44fd' ] }
