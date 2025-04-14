
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.runtimeClientGetEvents({
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
[ { key: '30,140,199,179,144,545,018.381860865',
    value:
     { as_CBOR:
        [ { to: 'oasis1qzf03q57jdgdwp2w7y6a8yww6mak9khuag9qt0kd',
            from: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            amount: [ '3,456,066.666666666', {} ] },
          { to: 'oasis1qrdx0n7lgheek24t24vejdks9uqmfldtmgdv7jzz',
            from: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            amount: [ '3,456,066.666666666', {} ] },
          { to: 'oasis1qr9zuf3n8g3znm786st3sldfw677pk3a6v85w9ds',
            from: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            amount: [ '3,456,066.666666666', {} ] },
          { to: 'oasis1qqrv4g5wu543wa7fcae76eucqfn2uc77zgqw8fxk',
            from: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            amount: [ '3,456,066.666666666', {} ] },
          { to: 'oasis1qp4f47plgld98n5g2ltalalnndnzz96euv9n89lz',
            from: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            amount: [ '3,456,066.666666666', {} ] },
          { to: 'oasis1qql4alk30frfa6xua42eu7tynkqf9vd5ug95yqpn',
            from: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            amount: [ '3,456,066.666666666', {} ] },
          { to: 'oasis1qz26ty8q6gwt6zah7dtt8jpepvwnttkg8ssnxjl7',
            from: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            amount: [ '3,456,066.666666666', {} ] },
          { to: 'oasis1qp53ud2pcmm73mlf4qywnrr245222mvlz5a2e5ty',
            from: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            amount: [ '3,456,066.666666666', {} ] },
          { to: 'oasis1qp0xuvw2a93w4yp8jwthfz93gxy87u7hes9eu2ev',
            from: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            amount: [ '3,456,066.666666666', {} ] },
          { to: 'oasis1qz78phkdan64g040cvqvqpwkplfqf6tj6uwcsh30 ParaTime Common Pool',
            from: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            amount: [ { as_CBOR: 6 }, {} ] } ] },
    tx_hash:
     'oasis1qpg3hpf3vtuueyl8f8jzgsy8clqqw6qgxgurwfy5 or 0000000000000000000000000000000000000000000000000000000000000000 maybe Cipher Testnet' },
  { key: '30,140,199,179,144,545,018.381860865',
    value:
     { as_CBOR:
        [ { to: 'oasis1qp3r8hgsnphajmfzfuaa8fhjag7e0yt35cjxq0u4 ParaTime Fee Accumulator',
            from: 'oasis1qrug2jdesur9xycez06jnq6yymz6gc4c7cvj2me7',
            amount: [ '62,627,000.0', {} ] } ] },
    tx_hash:
     'oasis1qry2vs2fetsft4v44md8xf8egetc2s6hyytksxgg or 257fd7dbaddf88410be42aa329130b144d27a402443736eb6d7e3cf1f2b074b6' },
  { key: '30,140,199,179,144,545,018.381860867',
    value:
     { as_CBOR:
        [ { owner: 'oasis1qquzek9y9guk6plys32s7zvf4g2f8rvn9slu8uye',
            amount: [ '100,000,000.0', {} ] } ] },
    tx_hash:
     'oasis1qpg3hpf3vtuueyl8f8jzgsy8clqqw6qgxgurwfy5 or 0000000000000000000000000000000000000000000000000000000000000000 maybe Cipher Testnet' },
  { key: '37,203,154,740,664,547,646,771,494,115,475,321,285,586,979.569795073',
    value:
     { as_CBOR:
        [ { to: 'oasis1qquzek9y9guk6plys32s7zvf4g2f8rvn9slu8uye',
            from: 'oasis1qry5d5zxs58w9deu5ara5zaamhkzqtg99s00ls90',
            nonce: 475577,
            amount: [ '100,000,000.0', {} ] } ] },
    tx_hash:
     'oasis1qpg3hpf3vtuueyl8f8jzgsy8clqqw6qgxgurwfy5 or 0000000000000000000000000000000000000000000000000000000000000000 maybe Cipher Testnet' },
  { key: '7,165,071,310.287011841',
    value: { as_CBOR: [ { amount: 313135 } ] },
    tx_hash:
     'oasis1qry2vs2fetsft4v44md8xf8egetc2s6hyytksxgg or 257fd7dbaddf88410be42aa329130b144d27a402443736eb6d7e3cf1f2b074b6' },
  { key: '28,559,183.171289089',
    value:
     { as_CBOR:
        [ { data:
             'oasis1qqgx6zqtz7pvjhjd3cz28f6tm67kw347uca9uwzg or 000000000000000000000000000000000000000000000000062e391a564024d9',
            topics:
             [ 'oasis1qphwrswv23hyy2qe3up65x5s8ae72cn40qg8c0j6 or ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
               'oasis1qpg3hpf3vtuueyl8f8jzgsy8clqqw6qgxgurwfy5 or 0000000000000000000000000000000000000000000000000000000000000000 maybe Cipher Testnet',
               'oasis1qqugl2f9reu6c9v7lry3vhn4akvwgut9zg2tccd8 or 0000000000000000000000003655ad27b6b942511e2625872eedb6d79bd3ed4c' ],
            address: '1,043,951,939,811,155,262,149,438,828,442,962,641,666.74457031' },
          { data:
             '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b6dc6c8b71e88642cead3be1025565a9ee74d1c6000000000000000000000000000000000000000000000000062e391a564024d90000000000000000000000003655ad27b6b942511e2625872eedb6d79bd3ed4c',
            topics:
             [ 'oasis1qr7yza8g926fm906j6x5tmkj0f8xrwdqrvdsl2xf or b937c701be72296797de30f67fec8bc6c096aa6b4c1850a5e659a0dc17165d8f',
               'oasis1qphu6mynf0vq76pswf0lym3trjyvfrwfsgkpf6yd or 3100000000000000000000000000000000000000000000000000000000000000',
               'oasis1qp9ngq5tk3a2j5vjk47rl4xf0ya003p9cgn7jx8s or 00000000000000000000000000000000000000000000000000000000000003e5' ],
            address: '9,741,074,557,909,052,723,461,900,488,708,584,077.890009236' },
          { data:
             '00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000d726f757465725f393630302d310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053233323934000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002d726f757465723167333971376730347277346c717761633570633535716c637174717872397579676d36797665000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041726f7574657231377039727a776e6e6678636a703332756e397567377968687a67746b68766c396a666b737a7467773575683639776163327067736d7065763835000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            topics:
             [ 'oasis1qp8zv9vyd8dd44mv7hj766hzlk38sk5htcp87me0 or 3bf9ad3ae3a3a7c22a8cb63b259bcf1abc195a223b499b4c8e884981d6154839',
               'oasis1qpsrkfrl2q4chh2gtq0m3cl0a3xjrae3gyg05y5s or 0000000000000000000000000000000000000000000000000000000000024ff1',
               'oasis1qr5zcjwm4mxjwkduk7j3m28jkeq6ac9f450g2j0v or 00000000000000000000000000000000000000000000000000000000000002e0' ],
            address: '769,994,826,441,901,960,118,736,611,599,906,027,626.039015795' } ] },
    tx_hash:
     'oasis1qry2vs2fetsft4v44md8xf8egetc2s6hyytksxgg or 257fd7dbaddf88410be42aa329130b144d27a402443736eb6d7e3cf1f2b074b6' } ]
