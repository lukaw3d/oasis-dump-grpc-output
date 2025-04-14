
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.registryGetNode({
      height: 0,
      epoch: 34315,
      round: 8433003,
      runtime_id: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      runtimeID: oasis.misc.fromHex('000000000000000000000000000000000000000000000000f80306c9858e7279' /* sapphireConfig.mainnet.runtimeId */),
      owner: oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */),
      beneficiary: oasis.staking.addressFromBech32('oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90' /* my mainnet dev addr */),
      address: oasis.staking.addressFromBech32('oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe' /* stakefish */),
      include_suspended: true,
      id: oasis.misc.fromBase64('SQZZd1wsWXdFsqswUoh6hZtmzu+ejuSnrGeHtgIBJDo=' /* stakefish */),
    }))
} catch (err) {
  console.log('error', err)
}
const output = 
{ v: 3,
  id:
   'oasis1qphhk4g0ncqut2ds40mr932s5p8tkqcu3yaae227 or 490659775c2c597745b2ab3052887a859b66ceef9e8ee4a7ac6787b60201243a',
  p2p:
   { id:
      'oasis1qqdky0208qxcg362hl78ekn6jls8n2scfgcrexff or 1eb55d8d5ad6039b6759b9114932cc9833fa8d459763d26c54aa0720809a0e17',
     addresses: [ { IP: '281,471.28078004', Port: 9200, Zone: '' } ] },
  tls:
   { pub_key:
      'oasis1qpptljttypqlsynflp3xh0nfwlmextta8vt7zmnh or d9c8b41fa567d1a08370e115de9f2c7466cfee195daca8bc9e5c277ac53af975' },
  vrf:
   { id:
      'oasis1qpq5eh5tnzrfmfls7pavjkrpdulqvt3psvjwez47 or 3f37371edf282fb37c1963954e1a657af9ceb044a09b89707589f2d21475b82c' },
  roles: 8,
  runtimes: null,
  consensus:
   { id:
      'oasis1qz4gc0ehu2j7dg3xwu9dkyx8crd39sus0g62a2mt or 0ae644e402583adf2bc9be77ec873a4d44012d8706f6397104be762a57af9fdb',
     addresses:
      [ { id:
           'oasis1qqdky0208qxcg362hl78ekn6jls8n2scfgcrexff or 1eb55d8d5ad6039b6759b9114932cc9833fa8d459763d26c54aa0720809a0e17',
          address: { IP: '281,471.28078004', Port: 26656, Zone: '' } } ] },
  entity_id:
   'oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe or 799b9a717cb9b37fe7a2507f137805e2fa9461dbdf3a555a6815c67d9706c0a7',
  expiration: 40212,
  software_version: '24.3.2' }
