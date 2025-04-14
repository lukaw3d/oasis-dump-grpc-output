
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.schedulerGetCommittees({
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
[ { kind: 1,
    members:
     [ { role: 1,
         public_key:
          'oasis1qqhpyp3pu8sr3gt2pwkcytv4yn4rpdqjvvj48qhm or e30aa1aa9e700c07ef43135951448398cd9f558ae4c4aabfb6a8e79c27bbd94c' },
       { role: 1,
         public_key:
          'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
       { role: 1,
         public_key:
          'oasis1qzmt4nre746nr8twxt3u843s47r38vnrds27ngy7 or f3acb5b47cc7f46971bd2d019de8799760140d760ee9532bcf1ef926f25588d1' },
       { role: 1,
         public_key:
          'oasis1qrxvr94pgj6kt36fkwn4al3uttj2veh5ey8jvapv or 5022abb5536598268274aa4c3034fc010c6a56cfc93f5ff34141f8cb1518e263' },
       { role: 1,
         public_key:
          'oasis1qpagkyrm8ntwrvp0yy5g9kt36cyl25dfy5fpjhv3 or 493d81eda78a4aca6214dcb7db9ac887c6a5408455083c99e6df1fd8d28ddcf5' },
       { role: 1,
         public_key:
          'oasis1qptvy8gkn0wqwdejlhytjau6whqg2scgzsy2jgsy or 6bf0427268dac0c539107424fa61926f518c169538602cdedc8c8ece21168a16' },
       { role: 1,
         public_key:
          'oasis1qp62cjgdl77hgs67nmgmlsd90y034eh5kg53jvlp or fb355b810a8e758f74676350297141c8d4f43b02f18ff1e8e23e2a4f9bb6c8a3' },
       { role: 1,
         public_key:
          'oasis1qr4200x0hpza2cgfydlrckr6hwllwg7ssyh96mdu or f368ac6d0de2671bf38011a193d92a3aec8ef3b87a55791799af1d0dd0641c23' },
       { role: 1,
         public_key:
          'oasis1qr39fc2uhdxk6jndygts2r9elg8akze7z5kvsyct or 06a0aa1bcc2e31576738d3796f2b084dfd266100f9143f93105e70ac9b6db124' },
       { role: 1,
         public_key:
          'oasis1qz9nhwyn9k4lfw23ns9n7suj7mn8w279sunqdd2n or 0d6e3fee4544ba6a595750a69ed690067712577eade90a04d10c10779a4b2195' },
       { role: 2,
         public_key:
          'oasis1qqhpyp3pu8sr3gt2pwkcytv4yn4rpdqjvvj48qhm or e30aa1aa9e700c07ef43135951448398cd9f558ae4c4aabfb6a8e79c27bbd94c' },
       { role: 2,
         public_key:
          'oasis1qrk0dwufyq3j23uqg9l4d8snmp4csx8xmggy8sj4 or 5c288f59b9564f79f568dd8d234bec96695f57d18e931136221d9223ae99477f' },
       { role: 2,
         public_key:
          'oasis1qqnucpyju04fjxlg5j5a0akscqhf34ulnsupnwx3 or 3ec7c5510ad7a86a05b68c1665ca1cf22961f311cff782ef3581efa901e9c351' },
       { role: 2,
         public_key:
          'oasis1qrujpml22fck4d45uh89833adjhn3y93uvg6uwe9 or 453ec9285e53d6194a5d3619b29e122f4edfe081c6e8ed12429a5ff309dfafe6' },
       { role: 2,
         public_key:
          'oasis1qr39fc2uhdxk6jndygts2r9elg8akze7z5kvsyct or 06a0aa1bcc2e31576738d3796f2b084dfd266100f9143f93105e70ac9b6db124' },
       { role: 2,
         public_key:
          'oasis1qqs3j5zyp79zj0khex4932uw57tcmh45accx5m6j or 04dae37c24f98fbdb4de8cce22cc741ba3911e9b4efc8e22476ea0f9e02bc388' },
       { role: 2,
         public_key:
          'oasis1qzmt4nre746nr8twxt3u843s47r38vnrds27ngy7 or f3acb5b47cc7f46971bd2d019de8799760140d760ee9532bcf1ef926f25588d1' },
       { role: 2,
         public_key:
          'oasis1qrg3zwe9gvkvs6dvrytr3dedyyjyxp6kgv8u2m2m or c7c0c53dcf04f416712c929b879d718f8d5eb37479dc09091117cc132442adb9' },
       { role: 2,
         public_key:
          'oasis1qrpcadqt33l40dxj4um0mca5uw8v8wkxgvtdx7a2 or 6131d16a3c82ac8c0e8b2b3592d39aad2532575355a25bc0c3a0d0aa169783ac' },
       { role: 2,
         public_key:
          'oasis1qq22fw848zvk97zc0x32vx2y4ff8dz2zx5temr0v or 14431454af751c450b790a4c663d3b8cdda088d2a377a1cf2b755d8ec2107236' },
       { role: 2,
         public_key:
          'oasis1qr78a0kfddfflpmk4nh0vfrq29rp0u9mvgpyt5ps or be51bb994b4feecd8fb270117f2ac8de65bfab8a5ca918b74879361b1990d8d3' },
       { role: 2,
         public_key:
          'oasis1qz9nhwyn9k4lfw23ns9n7suj7mn8w279sunqdd2n or 0d6e3fee4544ba6a595750a69ed690067712577eade90a04d10c10779a4b2195' },
       { role: 2,
         public_key:
          'oasis1qzs429ts5f4pvnylnhkhhfgjvtqj35asc5mv68sz or 213af011e91d64da97ac4cefc37193e90dc0b470dde757f5f670f69d553f7f47' },
       { role: 2,
         public_key:
          'oasis1qryckdal8gd8vaqhcanmcsywvuvafsswgyn8cxhu or 988296f08103599671091b434ef5902e9b25bdf501c16c550312da930ab6e42f' },
       { role: 2,
         public_key:
          'oasis1qr4200x0hpza2cgfydlrckr6hwllwg7ssyh96mdu or f368ac6d0de2671bf38011a193d92a3aec8ef3b87a55791799af1d0dd0641c23' } ],
    valid_for: 40210,
    runtime_id:
     'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet' } ]
