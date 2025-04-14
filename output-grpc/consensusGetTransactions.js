
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.consensusGetTransactions(0))
} catch (err) {
  console.log('error', err)
}
const output = 
[ { as_CBOR:
     { signature:
        { signature:
           '5ac3599519ea9709ac8963883c0b995ac7eff2ebb9a29440d762ef167fc98823729a7e2554825b79f557dbaaf4b5e03793ec6fcd02a0f44ccc6adca69681f50a',
          public_key:
           'oasis1qqs9qlh4mwu09mnkfkf36dx8nd9ur7dzfvqhua44 or 010c292fa059c16c61ec0db17224dacae4f8363106d439c65299954d1dde3fb3' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
                commits:
                 [ { sig:
                      '2e6ca9cf5f66567a092474bd8b99c7031235697ef6579380f4ffc9330865fed1a7b9c865cd3a2040864be16ac5364b97c55a7f08cbafabb28e0d7417db5fdd0c',
                     header:
                      { header:
                         { round: 15157281,
                           io_root:
                            'oasis1qqhxzeu6nx93j5dx4tu24vc8zp65ajqwtc4z20jf or 0f9dbb921d285ea1e9b1510aafffaf09d4e41c6122176c65c03eceeb90c13111',
                           state_root:
                            'oasis1qz5whj545vlxuznwwqqekghm4v9l87r5jgjtjana or 503802b99c838151f7c969a4a63deb0317e0a3eef84a9c466687a2d36b0e9ad9',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a' },
                        rak_sig:
                         '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        scheduler_id:
                         'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
                     node_id:
                      'oasis1qqs9qlh4mwu09mnkfkf36dx8nd9ur7dzfvqhua44 or 010c292fa059c16c61ec0db17224dacae4f8363106d439c65299954d1dde3fb3' } ] },
             nonce: 2773032,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '32d1144a73d0efa897b8ca88b50bea3420b24ae32db439588a9824497d2f96c2747d0c169adcbec92e6432c1a30a6b4590a7b7da2bc5cdc1edf0f6a5b4414a0e',
          public_key:
           'oasis1qpduwu0luzs9x7su0yc6y6affeank4f78vy459xp or c14c0584d45aaad231b7eae2953b208189b84e1c24f1eea5c405265ad600caf6' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
                commits:
                 [ { sig:
                      '4faaf327f0879ddc50bc54419ea458def8039c551a13bad1b8ecb92be9b1e3ba5a56c5e4ae2388e466f5960d3ce56e3d83c31b302df905d869e81124be431000',
                     header:
                      { header:
                         { round: 15157281,
                           io_root:
                            'oasis1qqhxzeu6nx93j5dx4tu24vc8zp65ajqwtc4z20jf or 0f9dbb921d285ea1e9b1510aafffaf09d4e41c6122176c65c03eceeb90c13111',
                           state_root:
                            'oasis1qz5whj545vlxuznwwqqekghm4v9l87r5jgjtjana or 503802b99c838151f7c969a4a63deb0317e0a3eef84a9c466687a2d36b0e9ad9',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a' },
                        rak_sig:
                         '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        scheduler_id:
                         'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
                     node_id:
                      'oasis1qpduwu0luzs9x7su0yc6y6affeank4f78vy459xp or c14c0584d45aaad231b7eae2953b208189b84e1c24f1eea5c405265ad600caf6' } ] },
             nonce: 2611949,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'e07e2e4e925c37859f65e0a4846c893f0083bce741fa7294cb40cf98a256b2654603603c56e615758f826100172d69fd09426c26c458b341a871691fa2fbbe0c',
          public_key:
           'oasis1qrsszl2yr4fmvsdztgnvs28vyj7pq7jj5gljjtqh or b8dc6da8580ca088238d9e21db7e65c10963fbb5c455189e76ae62f5a387aff3' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
                commits:
                 [ { sig:
                      '28d2b004171045e16d84466b40e83bcb7eb772927dae4f2ed030a59f1527ba558835192fa448ad2b0780db538449f282371c08a2d3dfc68b11453359080e2604',
                     header:
                      { header:
                         { round: 15157281,
                           io_root:
                            'oasis1qqhxzeu6nx93j5dx4tu24vc8zp65ajqwtc4z20jf or 0f9dbb921d285ea1e9b1510aafffaf09d4e41c6122176c65c03eceeb90c13111',
                           state_root:
                            'oasis1qz5whj545vlxuznwwqqekghm4v9l87r5jgjtjana or 503802b99c838151f7c969a4a63deb0317e0a3eef84a9c466687a2d36b0e9ad9',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a' },
                        rak_sig:
                         '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        scheduler_id:
                         'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
                     node_id:
                      'oasis1qrsszl2yr4fmvsdztgnvs28vyj7pq7jj5gljjtqh or b8dc6da8580ca088238d9e21db7e65c10963fbb5c455189e76ae62f5a387aff3' } ] },
             nonce: 1139823,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'e5aa6612309a62df64b7d016cfd45cddd01fde46c17200a78476d54d5a1eddb36a2a06a0e4ee128ae0d1d796ad84526099e804338e59d818bbfb2cb09223d401',
          public_key:
           'oasis1qrj6ndpdnk4025e7r7sm3zjqz8xxejvql5498n8h or f8a28ad9d9714c70dc4698dd9fa2492e4e20cbedf702ed22861f32dabe550386' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
                commits:
                 [ { sig:
                      'b3a08ed1fc3f8ac28f31e95a6ac3e16df7ac568e39f272472c2e03585cd468b8bfdbd0761ba833f44a9a256085867524e9a7d725e24cb367429c462408a11208',
                     header:
                      { header:
                         { round: 15157281,
                           io_root:
                            'oasis1qqhxzeu6nx93j5dx4tu24vc8zp65ajqwtc4z20jf or 0f9dbb921d285ea1e9b1510aafffaf09d4e41c6122176c65c03eceeb90c13111',
                           state_root:
                            'oasis1qz5whj545vlxuznwwqqekghm4v9l87r5jgjtjana or 503802b99c838151f7c969a4a63deb0317e0a3eef84a9c466687a2d36b0e9ad9',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a' },
                        rak_sig:
                         '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        scheduler_id:
                         'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
                     node_id:
                      'oasis1qrj6ndpdnk4025e7r7sm3zjqz8xxejvql5498n8h or f8a28ad9d9714c70dc4698dd9fa2492e4e20cbedf702ed22861f32dabe550386' } ] },
             nonce: 2775350,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '220b61835f7ef4760bfb4f926da8e648fd53f125f363cd7eb5fe8c93e528992cbb3282e54c93064519f08599e75890e0d0e356332a4a052c549947c5e9a66c05',
          public_key:
           'oasis1qqnucpyju04fjxlg5j5a0akscqhf34ulnsupnwx3 or 3ec7c5510ad7a86a05b68c1665ca1cf22961f311cff782ef3581efa901e9c351' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzul9pvufatqchu07n5shc42pe5dt7rylcu8pv86 or 000000000000000000000000000000000000000000000000e199119c992377cb Cipher Mainnet',
                commits:
                 [ { sig:
                      '2c2085e03334ebb8b4de218a00ba38164b3f90d675e7aff9dfdeac7808cf771435322835f8bc41285322762ab575982773d55b13bb84813ef94f2f0cb638600c',
                     header:
                      { header:
                         { round: 7222650,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqee45dpx9ux75vuzwawq3095caxhyn6vslzp9g5 or b7b469f403fa7dd85ec5d315d7331d1c68fcc27bf2405105630d458720070235',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qrt8lwl8vf4vfc4vk0c78l6fzxnlgrzpfvux7r6a or 4722125cd325c5c7704d4f97367c07223ad73c9d8f9e381af28310922f24ab94' },
                        rak_sig:
                         '904351e7e422cbb188a37de57389f84338d765bd14669ef6aae471112ca1505d2652c266bdfd4f510e4d6ba7f99c497c72e22035355b17d6aa5d5ee39b02d608',
                        scheduler_id:
                         'oasis1qqnucpyju04fjxlg5j5a0akscqhf34ulnsupnwx3 or 3ec7c5510ad7a86a05b68c1665ca1cf22961f311cff782ef3581efa901e9c351' },
                     node_id:
                      'oasis1qqnucpyju04fjxlg5j5a0akscqhf34ulnsupnwx3 or 3ec7c5510ad7a86a05b68c1665ca1cf22961f311cff782ef3581efa901e9c351' } ] },
             nonce: 5251202,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'b5695722b01b60bacb941bf37075dbe2019946e412be837fbc360c6d9da2446aaab602c92d25c1ec75dbe91dd4aa14c44961ec077f28d7e1e8f66a89105d7003',
          public_key:
           'oasis1qpuxwslhgaazz43fkqje94km9lnq77culcwvtrue or 74dfda21eebd1d61541ed3b2fe8a96769d63c387f33889635cb6cc23bf62953a' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
                commits:
                 [ { sig:
                      '2c5ea59dcaffa63728dcc338dcae50168946562c9e36b8c245ce124348ff9edf2407a0da8b6c38853636762cb1f63b0fcb5dc78fb4dd1c50d3f92bc83b00580a',
                     header:
                      { header:
                         { round: 15157281,
                           io_root:
                            'oasis1qqhxzeu6nx93j5dx4tu24vc8zp65ajqwtc4z20jf or 0f9dbb921d285ea1e9b1510aafffaf09d4e41c6122176c65c03eceeb90c13111',
                           state_root:
                            'oasis1qz5whj545vlxuznwwqqekghm4v9l87r5jgjtjana or 503802b99c838151f7c969a4a63deb0317e0a3eef84a9c466687a2d36b0e9ad9',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a' },
                        rak_sig:
                         '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        scheduler_id:
                         'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
                     node_id:
                      'oasis1qpuxwslhgaazz43fkqje94km9lnq77culcwvtrue or 74dfda21eebd1d61541ed3b2fe8a96769d63c387f33889635cb6cc23bf62953a' } ] },
             nonce: 1160916,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'e5d70c59d51f1772610109ffa8b8ce1c8ff73c93e1f4c0577c6a21f41ef84b53b6acf31725152aa95d9943e9cd77228639395a27d3fa0d2b4ee32eebdb419b0d',
          public_key:
           'oasis1qrt395hkglxv82xdlaw043253llcl5uz3s8la238 or 6891477880f843ba947cc6b8d9d47069af4f42b67f7150e213758db786d08e8d' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
                commits:
                 [ { sig:
                      'ef1c3611ee5626c49a86371acbacbd4e871b91921cd9198b8c66c956c8885645e51a8eb5e07893f4b354efe1e1213824cc082737a48f3d59af856c632e276407',
                     header:
                      { header:
                         { round: 15157281,
                           io_root:
                            'oasis1qqhxzeu6nx93j5dx4tu24vc8zp65ajqwtc4z20jf or 0f9dbb921d285ea1e9b1510aafffaf09d4e41c6122176c65c03eceeb90c13111',
                           state_root:
                            'oasis1qz5whj545vlxuznwwqqekghm4v9l87r5jgjtjana or 503802b99c838151f7c969a4a63deb0317e0a3eef84a9c466687a2d36b0e9ad9',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a' },
                        rak_sig:
                         '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        scheduler_id:
                         'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
                     node_id:
                      'oasis1qrt395hkglxv82xdlaw043253llcl5uz3s8la238 or 6891477880f843ba947cc6b8d9d47069af4f42b67f7150e213758db786d08e8d' } ] },
             nonce: 5309469,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '9cecc7fc7bb00104af32931acc304471fd0403108a33453f065d9843213d91635481ba2bee9785ce611f6ff75b2d50d1b31b74cc932cf363e79e7a2809f71609',
          public_key:
           'oasis1qz2vkq2tm8yugwn9p3dkd58jpkl5edpgjcxg29g0 or 65bc9b3b424c124c20d7e2dd1144e1f159b1d1df6eed15191d99c3ef7816a48b' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
                commits:
                 [ { sig:
                      '8e552f1aeb1f165285fd673e200e072f5ff838dbbe3fa988205cd57f09ca08da174b482c239cecc6411f032085ae8cbc71c96dc5c8f936fabd996f66466e8c09',
                     header:
                      { header:
                         { round: 15157281,
                           io_root:
                            'oasis1qqhxzeu6nx93j5dx4tu24vc8zp65ajqwtc4z20jf or 0f9dbb921d285ea1e9b1510aafffaf09d4e41c6122176c65c03eceeb90c13111',
                           state_root:
                            'oasis1qz5whj545vlxuznwwqqekghm4v9l87r5jgjtjana or 503802b99c838151f7c969a4a63deb0317e0a3eef84a9c466687a2d36b0e9ad9',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a' },
                        rak_sig:
                         '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        scheduler_id:
                         'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
                     node_id:
                      'oasis1qz2vkq2tm8yugwn9p3dkd58jpkl5edpgjcxg29g0 or 65bc9b3b424c124c20d7e2dd1144e1f159b1d1df6eed15191d99c3ef7816a48b' } ] },
             nonce: 2772684,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'd6b1d780310c06855d7a359f668d0e910290208f366c258257a71a0963fa523a142fc5272c64e5bca7011746acf5a43f0a7361295620ec88255dc52e20020302',
          public_key:
           'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
                commits:
                 [ { sig:
                      '1672f256d9d689b54a8d21e2a2079c5025e26fe035687d773bc7cd9068cd4d87c69063e35c4dac0308ec4c4b9b644193994b79c65614f39fb700f9310c488806',
                     header:
                      { header:
                         { round: 15157281,
                           io_root:
                            'oasis1qqhxzeu6nx93j5dx4tu24vc8zp65ajqwtc4z20jf or 0f9dbb921d285ea1e9b1510aafffaf09d4e41c6122176c65c03eceeb90c13111',
                           state_root:
                            'oasis1qz5whj545vlxuznwwqqekghm4v9l87r5jgjtjana or 503802b99c838151f7c969a4a63deb0317e0a3eef84a9c466687a2d36b0e9ad9',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a' },
                        rak_sig:
                         '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        scheduler_id:
                         'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
                     node_id:
                      'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' } ] },
             nonce: 2772924,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '18be4e9af3f53daf575481da06ec93d2f535c1c82aa7f65dac335f230773737c228b9c85440048000ba428ae63ced13b993e48a0529266ccc42e4f092fb57802',
          public_key:
           'oasis1qq73jqcht72a3ptwvgdn92xndln08dhguqnty3an or de2dbabaeb6bc5e224deb2b4d20ce503e687304ffe938b783ed386c1daea3edf' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
                commits:
                 [ { sig:
                      'e300c86f47011eb809f55924784add6bf62f358538e87e7f80b438e2216c34b97c76019527bbbad892e1e6b93aa7103111a3f803514720200d59d490616cff03',
                     header:
                      { header:
                         { round: 15157281,
                           io_root:
                            'oasis1qqhxzeu6nx93j5dx4tu24vc8zp65ajqwtc4z20jf or 0f9dbb921d285ea1e9b1510aafffaf09d4e41c6122176c65c03eceeb90c13111',
                           state_root:
                            'oasis1qz5whj545vlxuznwwqqekghm4v9l87r5jgjtjana or 503802b99c838151f7c969a4a63deb0317e0a3eef84a9c466687a2d36b0e9ad9',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a' },
                        rak_sig:
                         '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        scheduler_id:
                         'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
                     node_id:
                      'oasis1qq73jqcht72a3ptwvgdn92xndln08dhguqnty3an or de2dbabaeb6bc5e224deb2b4d20ce503e687304ffe938b783ed386c1daea3edf' } ] },
             nonce: 1098386,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '3df4ced72d583786edb1d18c6eb1f9e9e1a16c4420ce7af22a5c5d378d683dd540179439e5768893f05b1a2efe27c93e0324ca16c2a9f93fd79e931c51dccb0c',
          public_key:
           'oasis1qrk0dwufyq3j23uqg9l4d8snmp4csx8xmggy8sj4 or 5c288f59b9564f79f568dd8d234bec96695f57d18e931136221d9223ae99477f' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
                commits:
                 [ { sig:
                      '2953f428040c249dff408e17fa378be58392251b9454be2bf6b3cbf8bda29f9806601be85c88c2f4c9cd51e0601c964f788773c75614c60d47a9192fade1fe00',
                     header:
                      { header:
                         { round: 15157281,
                           io_root:
                            'oasis1qqhxzeu6nx93j5dx4tu24vc8zp65ajqwtc4z20jf or 0f9dbb921d285ea1e9b1510aafffaf09d4e41c6122176c65c03eceeb90c13111',
                           state_root:
                            'oasis1qz5whj545vlxuznwwqqekghm4v9l87r5jgjtjana or 503802b99c838151f7c969a4a63deb0317e0a3eef84a9c466687a2d36b0e9ad9',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a' },
                        rak_sig:
                         '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        scheduler_id:
                         'oasis1qrjaldneke669gegkr0ckfrwz8xtcwljtvxp3udu or a46901625cbbf72da025410e6aef17374e04adc7f0ace6cef96e7e0985c95b99' },
                     node_id:
                      'oasis1qrk0dwufyq3j23uqg9l4d8snmp4csx8xmggy8sj4 or 5c288f59b9564f79f568dd8d234bec96695f57d18e931136221d9223ae99477f' } ] },
             nonce: 4483933,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'b353232dced7a4c10cf8a2b91d3ea24563331ae77b95b49e76eeab3f12b281d1a3fba92a98ff76df9d9fe8364d42cdf7168a7bc0d8a73cab5649f90114573b04',
          public_key:
           'oasis1qqxtynnn3rwtz28wrfzzpyy8lyj9xa4ekys827k8 or ed893efed56802417f40ec8e24a157e5998a61d98996096501ffe38e9e5e7010' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzul9pvufatqchu07n5shc42pe5dt7rylcu8pv86 or 000000000000000000000000000000000000000000000000e199119c992377cb Cipher Mainnet',
                commits:
                 [ { sig:
                      '119b1b295d45363d6f902ac3ad4cc46d73484d553626c4a64638d9b560836ce8c165de346343e6167119f6cce10cb9a8279d3ade6d7ad1f7587522d51b25d50c',
                     header:
                      { header:
                         { round: 7222650,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqee45dpx9ux75vuzwawq3095caxhyn6vslzp9g5 or b7b469f403fa7dd85ec5d315d7331d1c68fcc27bf2405105630d458720070235',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qrt8lwl8vf4vfc4vk0c78l6fzxnlgrzpfvux7r6a or 4722125cd325c5c7704d4f97367c07223ad73c9d8f9e381af28310922f24ab94' },
                        rak_sig:
                         '33037088b01aa3a30834d15c9f10db42bc792d49656465b8e29f50b5c236ef710a4e589971081693935d1717679718bea85c34606996a42132138e5a3a661604',
                        scheduler_id:
                         'oasis1qqnucpyju04fjxlg5j5a0akscqhf34ulnsupnwx3 or 3ec7c5510ad7a86a05b68c1665ca1cf22961f311cff782ef3581efa901e9c351' },
                     node_id:
                      'oasis1qqxtynnn3rwtz28wrfzzpyy8lyj9xa4ekys827k8 or ed893efed56802417f40ec8e24a157e5998a61d98996096501ffe38e9e5e7010' } ] },
             nonce: 840462,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '2522a38278577f331344ef692f53fc4fb04b949910624871164c52de6b53b984a42d25f1cd8160df2add878a0a824717c6ab14e0bb239cfbdd05b59974bca902',
          public_key:
           'oasis1qqhpyp3pu8sr3gt2pwkcytv4yn4rpdqjvvj48qhm or e30aa1aa9e700c07ef43135951448398cd9f558ae4c4aabfb6a8e79c27bbd94c' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzul9pvufatqchu07n5shc42pe5dt7rylcu8pv86 or 000000000000000000000000000000000000000000000000e199119c992377cb Cipher Mainnet',
                commits:
                 [ { sig:
                      '5f9f8cdd54eb5b65b3649f81a992229062ffe7ddbfc27f452cb12b94bffb86a0ac6a4a5f8a37defd99df7fadf2090b55c43a47a8ff30379ff4141341d801140a',
                     header:
                      { header:
                         { round: 7222650,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqee45dpx9ux75vuzwawq3095caxhyn6vslzp9g5 or b7b469f403fa7dd85ec5d315d7331d1c68fcc27bf2405105630d458720070235',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qrt8lwl8vf4vfc4vk0c78l6fzxnlgrzpfvux7r6a or 4722125cd325c5c7704d4f97367c07223ad73c9d8f9e381af28310922f24ab94' },
                        rak_sig:
                         '70fab2d5c1b6076d85d57bb70f241be5589ce7999bfde7798c85183542b90fbd4d9ad0d97dbd509a55cabc22e5d4c13501751020c22f2f07a0acb1d1eb39f006',
                        scheduler_id:
                         'oasis1qqnucpyju04fjxlg5j5a0akscqhf34ulnsupnwx3 or 3ec7c5510ad7a86a05b68c1665ca1cf22961f311cff782ef3581efa901e9c351' },
                     node_id:
                      'oasis1qqhpyp3pu8sr3gt2pwkcytv4yn4rpdqjvvj48qhm or e30aa1aa9e700c07ef43135951448398cd9f558ae4c4aabfb6a8e79c27bbd94c' } ] },
             nonce: 4770071,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '3d941ce5e5a8d28a7fbb690055110c43f421049ec209b097d7e730e1ba62a2d20ccf86d2bba51a210052437b32660349aa25b870ba8aadc466312a9946e8710e',
          public_key:
           'oasis1qq22fw848zvk97zc0x32vx2y4ff8dz2zx5temr0v or 14431454af751c450b790a4c663d3b8cdda088d2a377a1cf2b755d8ec2107236' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzul9pvufatqchu07n5shc42pe5dt7rylcu8pv86 or 000000000000000000000000000000000000000000000000e199119c992377cb Cipher Mainnet',
                commits:
                 [ { sig:
                      'f1e5176763eca567b96649b260465085bf243d87d337f6f5c9fb1595b9aee8dc21ce79bada5790ffe617410df0878a32a9eee338f0b43db11162b25f18c1c704',
                     header:
                      { header:
                         { round: 7222650,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqee45dpx9ux75vuzwawq3095caxhyn6vslzp9g5 or b7b469f403fa7dd85ec5d315d7331d1c68fcc27bf2405105630d458720070235',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qrt8lwl8vf4vfc4vk0c78l6fzxnlgrzpfvux7r6a or 4722125cd325c5c7704d4f97367c07223ad73c9d8f9e381af28310922f24ab94' },
                        rak_sig:
                         '233ec9c2b24b264786e96bb43ccd1ea31e9a95586a6720ec0d5b6e33dd63bff62711574b8f79721e909e518a632b1a14603de6b0d7a3748e61e814031cc00403',
                        scheduler_id:
                         'oasis1qqnucpyju04fjxlg5j5a0akscqhf34ulnsupnwx3 or 3ec7c5510ad7a86a05b68c1665ca1cf22961f311cff782ef3581efa901e9c351' },
                     node_id:
                      'oasis1qq22fw848zvk97zc0x32vx2y4ff8dz2zx5temr0v or 14431454af751c450b790a4c663d3b8cdda088d2a377a1cf2b755d8ec2107236' } ] },
             nonce: 2780577,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '2b87d200f8cb1bb2715888f30caa2774e1de2c7cad21544eab30fc914b913c4468529a3eeefc56c75e267d1b9468c00831932e829084b5cea0c0636462d08f04',
          public_key:
           'oasis1qqwmgc8a3aznsq32tc2zq3z5erc7cnzcpcmvluqv or 1db6f7745901cd13734bb5d5c9a59e7ae8d278001abedb0d4b78d47c60ae55f1' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qzul9pvufatqchu07n5shc42pe5dt7rylcu8pv86 or 000000000000000000000000000000000000000000000000e199119c992377cb Cipher Mainnet',
                commits:
                 [ { sig:
                      'cddf0b975398aea6b6de4941265135281b41e07692277d4eff6fe3058271d51a27a4a420961bba1323f92f5ec5292c80326c0640ba7019e610efbe02c530220a',
                     header:
                      { header:
                         { round: 7222650,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqee45dpx9ux75vuzwawq3095caxhyn6vslzp9g5 or b7b469f403fa7dd85ec5d315d7331d1c68fcc27bf2405105630d458720070235',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qrt8lwl8vf4vfc4vk0c78l6fzxnlgrzpfvux7r6a or 4722125cd325c5c7704d4f97367c07223ad73c9d8f9e381af28310922f24ab94' },
                        rak_sig:
                         '0158945f823f8012c99a65f072e76c2d2a74f1d43bafb2ce57480f5374465ea0a79287468548d64335bb964274049bfb8eea8eebab9b34ff62462732b6e5a50e',
                        scheduler_id:
                         'oasis1qqnucpyju04fjxlg5j5a0akscqhf34ulnsupnwx3 or 3ec7c5510ad7a86a05b68c1665ca1cf22961f311cff782ef3581efa901e9c351' },
                     node_id:
                      'oasis1qqwmgc8a3aznsq32tc2zq3z5erc7cnzcpcmvluqv or 1db6f7745901cd13734bb5d5c9a59e7ae8d278001abedb0d4b78d47c60ae55f1' } ] },
             nonce: 2362643,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '3518103b17a02b155739ebb0896b5e07f251e2b15aaa61a215d7ff62eb960f86c72f086f69439bd980fff10ab1eef0623e21dc3a18f323b6ac0926d5ba588605',
          public_key:
           'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
                commits:
                 [ { sig:
                      'c6cf7538967bcf658ddc88c67b2fb5e021dcdc13f4ff995969a1867d8546fec3e1439e7ec89a250f5384f345b5c3f2b4f72b6349fd8233ba9daedfdae318f103',
                     header:
                      { header:
                         { round: 8434659,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqrqytezn7jnypxcgsqcdyqsg08zxtw59qp388gs or b4fbed690d042afede7e03fb488276cceae3f16f6b4a4b9487551e3d3a7eccf8',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202' },
                        rak_sig:
                         '1ccd3fc6995cbdcb732ebf563f7c3a8aa58dfe051bfe7589076c41ee552b73ec73f5a4b7398ac604ce5fad41e55ef2319b9ef25eab131fa472a3cf74b15d3700',
                        scheduler_id:
                         'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
                     node_id:
                      'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' } ] },
             nonce: 2802369,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'cc7127226646f0f0e8f9db6f29eea1f509a7a0e0585d108046eaf0a417507ab1fff84006d191cdf1f588d9ae777318d6a334eb89d2cd37a698de9b709faf7e05',
          public_key:
           'oasis1qptvy8gkn0wqwdejlhytjau6whqg2scgzsy2jgsy or 6bf0427268dac0c539107424fa61926f518c169538602cdedc8c8ece21168a16' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
                commits:
                 [ { sig:
                      'f868975d7fadc73210bf958a01ccfa3da3f19d25a73ff8546b38b562f65464ddb95b44e03edd833fd6d4ed7680781da539ae0f802ac7f4c54796f3feed5d0107',
                     header:
                      { header:
                         { round: 8434659,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqrqytezn7jnypxcgsqcdyqsg08zxtw59qp388gs or b4fbed690d042afede7e03fb488276cceae3f16f6b4a4b9487551e3d3a7eccf8',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202' },
                        rak_sig:
                         '0e8688fee58efef2f47fe1e60156e960b8fed4b11c2cc095bf6befbdb7767813f52fd541a672d3f03dc5a5bf0fbbca836d3833dd0eae10949aa35832b2b6800d',
                        scheduler_id:
                         'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
                     node_id:
                      'oasis1qptvy8gkn0wqwdejlhytjau6whqg2scgzsy2jgsy or 6bf0427268dac0c539107424fa61926f518c169538602cdedc8c8ece21168a16' } ] },
             nonce: 2903316,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'e90ff1c3aedb3f7b7b3e20d37e28ca264fc2bcc68037eddd25d8fa5d9561c138cc366576617d76906daa7989d43495b9c4956e8b7f31edaa57d9a8b2d24d4b09',
          public_key:
           'oasis1qrxvr94pgj6kt36fkwn4al3uttj2veh5ey8jvapv or 5022abb5536598268274aa4c3034fc010c6a56cfc93f5ff34141f8cb1518e263' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
                commits:
                 [ { sig:
                      '9ffa9784c6976e37300a3622b148cb44ecbd48f677f8daee2cb95471e6940c11408d2b0b5f301bfd3d7b4a636ee08446b7219048eef9674a987ccbc227f2e701',
                     header:
                      { header:
                         { round: 8434659,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqrqytezn7jnypxcgsqcdyqsg08zxtw59qp388gs or b4fbed690d042afede7e03fb488276cceae3f16f6b4a4b9487551e3d3a7eccf8',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202' },
                        rak_sig:
                         '203566a6052f6151a0978cfa3f07ed70ce99aade599c0006623c0dd6185e577e84076fd17501cc0775f1cfc463fbf8ae16f735dfa59d6f04a0140c0a3763b30b',
                        scheduler_id:
                         'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
                     node_id:
                      'oasis1qrxvr94pgj6kt36fkwn4al3uttj2veh5ey8jvapv or 5022abb5536598268274aa4c3034fc010c6a56cfc93f5ff34141f8cb1518e263' } ] },
             nonce: 1827548,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '47fc2b73587cc3fab5aeae86e1c3c51d158e42de1adc740de28462ab83ab8910abc30b137c634bead6022c124f95ee1e032f454944bca5263a77ddb98d383f09',
          public_key:
           'oasis1qp62cjgdl77hgs67nmgmlsd90y034eh5kg53jvlp or fb355b810a8e758f74676350297141c8d4f43b02f18ff1e8e23e2a4f9bb6c8a3' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
                commits:
                 [ { sig:
                      'eb6abdfdf33c08782dbd73cdb80ac70f23a8642fce5ccbfd91ee9e41122b8f88054f0c2d76b4118efc70f8602aa09c6e3847dc9c81037ecb7cf70d91bc5b2b0e',
                     header:
                      { header:
                         { round: 8434659,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqrqytezn7jnypxcgsqcdyqsg08zxtw59qp388gs or b4fbed690d042afede7e03fb488276cceae3f16f6b4a4b9487551e3d3a7eccf8',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202' },
                        rak_sig:
                         'ce6f6a3346b5315c481730696ade9e77ee44c79165026c88707e204b78a4042266e901806c6efd0dc2b783441509cd8d089f372015c265f42451a79366697107',
                        scheduler_id:
                         'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
                     node_id:
                      'oasis1qp62cjgdl77hgs67nmgmlsd90y034eh5kg53jvlp or fb355b810a8e758f74676350297141c8d4f43b02f18ff1e8e23e2a4f9bb6c8a3' } ] },
             nonce: 5397164,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '0d4a1c837f32417ee7a9959505f0070eaf2bab1a9fbb734506259c1f28754aea191c569ea967a69bed44def96fb599cc1e61b5fb555f94f797c8811a2e32d407',
          public_key:
           'oasis1qqhpyp3pu8sr3gt2pwkcytv4yn4rpdqjvvj48qhm or e30aa1aa9e700c07ef43135951448398cd9f558ae4c4aabfb6a8e79c27bbd94c' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
                commits:
                 [ { sig:
                      '0ea706ebbe25f6b02d9777c1fec84b702e8de729cb55d2fb54192998e59a7d5dfa5190fb6dd652c8d2cf38de9faba6eaf355cfd576f1feb3e39d005723ba1502',
                     header:
                      { header:
                         { round: 8434659,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqrqytezn7jnypxcgsqcdyqsg08zxtw59qp388gs or b4fbed690d042afede7e03fb488276cceae3f16f6b4a4b9487551e3d3a7eccf8',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202' },
                        rak_sig:
                         '1593613df7c5090adb4382a6bfc22152ca0811c102a3127a765582f00eed5790d8598fbd867aeaf4f1db2a22fe11fe1038b7db866f9a89e7c432f80f7a0b8d03',
                        scheduler_id:
                         'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
                     node_id:
                      'oasis1qqhpyp3pu8sr3gt2pwkcytv4yn4rpdqjvvj48qhm or e30aa1aa9e700c07ef43135951448398cd9f558ae4c4aabfb6a8e79c27bbd94c' } ] },
             nonce: 4770072,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '5709b6de1281357f42d073f44d85206226cc276089e2f6546abc0aad9da8b2a2dfef6be7eaa900ded1b21b68d199df8a69975f008eab5ce2e7aafc21cfebbe01',
          public_key:
           'oasis1qz9nhwyn9k4lfw23ns9n7suj7mn8w279sunqdd2n or 0d6e3fee4544ba6a595750a69ed690067712577eade90a04d10c10779a4b2195' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
                commits:
                 [ { sig:
                      'a96c2cae667b37461d7c2b221e07a1d3b682e811581c318a62c10a11b6f2c28f555d5e1c8b4b9978df1244545789a7791455b97a03a43475f0212600b817e303',
                     header:
                      { header:
                         { round: 8434659,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqrqytezn7jnypxcgsqcdyqsg08zxtw59qp388gs or b4fbed690d042afede7e03fb488276cceae3f16f6b4a4b9487551e3d3a7eccf8',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202' },
                        rak_sig:
                         'c859607ba76cf153513003660ba7055675d5536725ba3cd12f014dc9d208d2462b1e2929864a41cec05066d146fb5759697176dad8f3ba737d39d3617a86a406',
                        scheduler_id:
                         'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
                     node_id:
                      'oasis1qz9nhwyn9k4lfw23ns9n7suj7mn8w279sunqdd2n or 0d6e3fee4544ba6a595750a69ed690067712577eade90a04d10c10779a4b2195' } ] },
             nonce: 1950890,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '0839dd8aa86d6711ba078bd1e2e85a63a0f8efd7017e9280b9e7e485d02db53492c8052d4c12febd98a7d354e41e205d3ca21181f410f0a27d8258d035963b06',
          public_key:
           'oasis1qr39fc2uhdxk6jndygts2r9elg8akze7z5kvsyct or 06a0aa1bcc2e31576738d3796f2b084dfd266100f9143f93105e70ac9b6db124' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
                commits:
                 [ { sig:
                      '68646f160d9128de00c3c789b6b88a75cf864cdc1aa2479d88841ee6447455234a30eaba165045bbbb130aef484bff0e80569e3e857ceddb020f08676b12f301',
                     header:
                      { header:
                         { round: 8434659,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqrqytezn7jnypxcgsqcdyqsg08zxtw59qp388gs or b4fbed690d042afede7e03fb488276cceae3f16f6b4a4b9487551e3d3a7eccf8',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202' },
                        rak_sig:
                         'f9c2fc975008ca43f1548d97f37ecd7634d7efd612dc3e063efa6734025dad05f46c935fa87b5f1c26d2d53f47c9f20fd11d96554ca93030a1b51c65e587810d',
                        scheduler_id:
                         'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
                     node_id:
                      'oasis1qr39fc2uhdxk6jndygts2r9elg8akze7z5kvsyct or 06a0aa1bcc2e31576738d3796f2b084dfd266100f9143f93105e70ac9b6db124' } ] },
             nonce: 4694383,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'ea4addbce736af5ee4b47c7a82badfe81899d94f673287de4dc390e08bd84c93075ae3597a20cf34df53d266fcbfb0906828791387cb51a49f4d5f72ae845e01',
          public_key:
           'oasis1qzmt4nre746nr8twxt3u843s47r38vnrds27ngy7 or f3acb5b47cc7f46971bd2d019de8799760140d760ee9532bcf1ef926f25588d1' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
                commits:
                 [ { sig:
                      '95a33aebfd3518f33d0924f691a6adae3418958ddfc332666b53bba4bdff3bf9caa337abdb5587728d467cd68b1f2c3f6cd91ece6e74e2b1918bd0013a505200',
                     header:
                      { header:
                         { round: 8434659,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqrqytezn7jnypxcgsqcdyqsg08zxtw59qp388gs or b4fbed690d042afede7e03fb488276cceae3f16f6b4a4b9487551e3d3a7eccf8',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202' },
                        rak_sig:
                         '3a944962daf3d43ef4f3f3b8538ba5443569392f795299e8dce92504ca961e20b8fb6c3a62f51aff307a1816d5356c8954ae27650fd5109eb045bee54a639c04',
                        scheduler_id:
                         'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
                     node_id:
                      'oasis1qzmt4nre746nr8twxt3u843s47r38vnrds27ngy7 or f3acb5b47cc7f46971bd2d019de8799760140d760ee9532bcf1ef926f25588d1' } ] },
             nonce: 2434690,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'c57bce6025c85472691f2533f6c1bc64e2e675d928965cb74d6eaa6145dc4715728dfba409c05ceca8befd4100e2717381e383f2be35a9a35f2768d1727d7d0b',
          public_key:
           'oasis1qr4200x0hpza2cgfydlrckr6hwllwg7ssyh96mdu or f368ac6d0de2671bf38011a193d92a3aec8ef3b87a55791799af1d0dd0641c23' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
                commits:
                 [ { sig:
                      'facf615cce124094596625573f4b9c34674fb095445397b2a2b36fc10fc35dbbfe8e67b92e5e29f3ac7b9c2100ef001f8774c64292319b1a3c938e8ef3c7b90c',
                     header:
                      { header:
                         { round: 8434659,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqrqytezn7jnypxcgsqcdyqsg08zxtw59qp388gs or b4fbed690d042afede7e03fb488276cceae3f16f6b4a4b9487551e3d3a7eccf8',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202' },
                        rak_sig:
                         '1f6a793e56a97583b4ef094c08774d5321e89b230da8fca4f2e3295204ae96a95131d2a9005415dfb285a1fafb0749a7a0dd0601632d4e264a25cfbd9a31ea01',
                        scheduler_id:
                         'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
                     node_id:
                      'oasis1qr4200x0hpza2cgfydlrckr6hwllwg7ssyh96mdu or f368ac6d0de2671bf38011a193d92a3aec8ef3b87a55791799af1d0dd0641c23' } ] },
             nonce: 2891233,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           'b889d4453fce43a9d245dec789550a5ab32ab63666851dd5d270ea6baf6a5c07b3e83f0a74132fbcf0d6bbfa03559a33356dd48b0a0423e7bac82a10b54ae608',
          public_key:
           'oasis1qpagkyrm8ntwrvp0yy5g9kt36cyl25dfy5fpjhv3 or 493d81eda78a4aca6214dcb7db9ac887c6a5408455083c99e6df1fd8d28ddcf5' },
       untrusted_raw_value:
        { as_CBOR:
           { fee: { gas: 10776, amount: {} },
             body:
              { id:
                 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
                commits:
                 [ { sig:
                      'f7a13df6cafede2389c47e755d8300016809df1c7190343b009b3358f885df94ae646b22928ec24e6956a9cfc02690a5b5f52dadc6c89b1748016eca78a5420b',
                     header:
                      { header:
                         { round: 8434659,
                           io_root:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           state_root:
                            'oasis1qqrqytezn7jnypxcgsqcdyqsg08zxtw59qp388gs or b4fbed690d042afede7e03fb488276cceae3f16f6b4a4b9487551e3d3a7eccf8',
                           in_msgs_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           messages_hash:
                            'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
                           previous_hash:
                            'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202' },
                        rak_sig:
                         '1a59e07d2be2f0ac9a517c273cba4c1662bdceb3170f99bb5f8038700c75f8f47e1b870449b4abe0426fd7c87e4253678cd10635ddeb7d2e1b66614fd8434e04',
                        scheduler_id:
                         'oasis1qzeyav938hrderj73nf92txsfc8m0tsq3qjjagv2 or 2c8e3c3a5e48b34e398a33808e20a22851ca3b2cf0b862fa98c4ebdc5e5c31d3' },
                     node_id:
                      'oasis1qpagkyrm8ntwrvp0yy5g9kt36cyl25dfy5fpjhv3 or 493d81eda78a4aca6214dcb7db9ac887c6a5408455083c99e6df1fd8d28ddcf5' } ] },
             nonce: 2776278,
             method: 'roothash.ExecutorCommit' } } } },
  { as_CBOR:
     { signature:
        { signature:
           '7e74d0ac1adb4ade4bda0623939421889d7ad3690241fc6bbff7a751bab4c6d5a9663422064ccd09c652ff3cf48e8b9a5417eaa5640e2dd5a86ff59220d45700',
          public_key:
           'oasis1qz4gc0ehu2j7dg3xwu9dkyx8crd39sus0g62a2mt or 0ae644e402583adf2bc9be77ec873a4d44012d8706f6397104be762a57af9fdb' },
       untrusted_raw_value:
        { as_CBOR:
           { body:
              { state_root:
                 'oasis1qpx30emcac992flrdzg3j4xzz4yz67xh2y4xkp6d or f1fcde88040690a2329015558c27c12f251a484b345fbddef0dc1f2b9dfb9b54',
                events_root:
                 'oasis1qzpa738xtlagan0rq42lsnz27l25yatc055dqtur or e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' },
             nonce: 0,
             method: 'consensus.Meta' } } } } ]
