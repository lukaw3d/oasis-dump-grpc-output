
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.rootHashGetRuntimeState({
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
{ runtime:
   { v: 3,
     id:
      'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
     kind: 1,
     genesis:
      { round: 0,
        state_root:
         'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a' },
     staking: { thresholds: { as_Map: [ [ 2, '5,000,000.0' ] ] } },
     storage:
      { checkpoint_interval: 100000,
        checkpoint_num_kept: 2,
        checkpoint_chunk_size: 8388608 },
     executor:
      { group_size: 10,
        max_messages: 256,
        round_timeout: 2,
        group_backup_size: 15,
        allowed_stragglers: 4,
        max_liveness_fails: 4,
        min_live_rounds_eval: 60 },
     entity_id:
      'oasis1qrvmxhcjpjvgel9dqfs6zrnza3hqjpa6ug2arc0d or 4c0bfda978d5e3206986728b25c364ce88acd532e86148da44facc7d8e7c029a',
     constraints:
      { as_Map:
         [ [ 1,
             { as_Map:
                [ [ 1,
                    { max_nodes: { limit: 1 },
                      min_pool_size: { limit: 15 },
                      validator_set: { as_Map: [] } } ],
                  [ 2,
                    { max_nodes: { limit: 1 },
                      min_pool_size: { limit: 15 },
                      validator_set: { as_Map: [] } } ] ] } ] ] },
     deployments:
      [ { tee:
           { as_CBOR:
              { v: 1,
                policy:
                 { ias: { disabled: true },
                   pcs:
                    { fmspc_blacklist:
                       [ '00906EA50000',
                         '00706E470000',
                         '00806EA60000',
                         '00706A800000',
                         '00706A100000',
                         '00806EB70000',
                         '00906EC50000',
                         '00906EC10000',
                         '00A065510000',
                         '20806EB70000',
                         '20906EC10000',
                         '00906EB10000' ],
                      tcb_validity_period: 30,
                      min_tcb_evaluation_data_number: 17 } },
                enclaves:
                 [ { mr_signer:
                      'oasis1qzurfw2kcf7xxegvyx8vj0f5nhv8jsqmn5eqwcwm or 4025dab7ebda1fbecc4e3637606e021214d0f41c6d0422fd378b2a8b88818459',
                     mr_enclave:
                      'oasis1qrerem9z9hhpq8ql48dn6aayesy5hfk3mvhyd230 or 16fe3587b9a84fa8ddce35078c6abf1baf82c6128a44267313223089293a5dfe' } ],
                max_attestation_age: 1200 } },
          version: { minor: 8, patch: 2 },
          valid_from: 35191,
          bundle_checksum:
           'oasis1qppxv2jnjy4ye3kpuanrrshzeq9hqck0ms4auq3j or e523903e480a8bef7caf18b846aefaa17913878b67eee13ac618849dd0bb8741' },
        { tee:
           { as_CBOR:
              { v: 1,
                policy:
                 { ias: { disabled: true },
                   pcs:
                    { fmspc_blacklist:
                       [ '00906EA50000',
                         '00706E470000',
                         '00806EA60000',
                         '00706A800000',
                         '00706A100000',
                         '00806EB70000',
                         '00906EC50000',
                         '00906EC10000',
                         '00A065510000',
                         '20806EB70000',
                         '20906EC10000',
                         '00906EB10000' ],
                      tcb_validity_period: 30,
                      min_tcb_evaluation_data_number: 18 } },
                enclaves:
                 [ { mr_signer:
                      'oasis1qzsgt4kkqkntadh0ws07swd7lhq0h2ecfc7tzaxm or 7d0a3b32e133706ed6757ae9b3a2f4b3ed51ee88ac22a9f86c7b88f3b1d95fe8',
                     mr_enclave:
                      'oasis1qq85xemvgjel4ewv39hh69ez2pyvj9qjqvavdn5t or c87517dc3bf8f66fc6556789bac6494169274ee738b83c78fed35789aa3b5771' } ],
                max_attestation_age: 1200 } },
          version: { minor: 9, patch: 2 },
          valid_from: 39606,
          bundle_checksum:
           'oasis1qzc9muy9880jqxafq4jf8tczrnn09qcn4yz6w306 or 91b1ff8b5cc9f6a99e97be9c69f22d73d75e037b8bbca7fda64a7a41bc997841' } ],
     key_manager:
      'oasis1qrcuqk8938g372ngwrz5ttec3usehh3jnvjxtrgm or 4000000000000000000000000000000000000000000000008c5ea5e49b4bc9ac',
     tee_hardware: 1,
     txn_scheduler:
      { max_batch_size: 1000,
        batch_flush_timeout: 1000000000,
        max_batch_size_bytes: 1048576,
        propose_batch_timeout: 5000000000 },
     admission_policy:
      { per_role:
         { as_Map:
            [ [ 2,
                { entity_whitelist:
                   { entities:
                      { as_Map:
                         [ [ 'oasis1qrh6e9ckmfrxn04upc4wg7atau8lz9hw7gj0jt04 or 39e00923e63bca72ecee8b7c8f06c418e721cc38ebf6973040b414573f4d52d4',
                             { as_Map: [] } ],
                           [ 'oasis1qz5afnujgfsxhct630f8nlqtpgxd5kzlvuvtnfqr or 611a81a9dadac297dd377669b47bb2e1758557f0e1f57818aae927a087726e47',
                             { as_Map: [] } ],
                           [ 'oasis1qrka7ckx0wtnyhqypcveqv9zws7238yu35tw0zrk or 888d9d7360d75b0f34a3e35dc134658c1ebaa37254d771070e54bf91bed0fe7d',
                             { as_Map: [] } ],
                           [ 'oasis1qzzz0awhnuxvqc0dzy0chpy3lyrxma3tjqdy4f5r or 94d3fd68119075a6ea0b7ab893b4bb8f915cec2001051f7e74426c72fea38386',
                             { as_Map: [] } ],
                           [ 'oasis1qrmd5y5qatetmgchaxkk04y5dgnpxglzqcvezump or d79341c9fdaab88d28ee5765f411b2ee3f76fabf3f7b91471f04722024d43ea9',
                             { as_Map: [] } ] ] } } } ] ] } },
     governance_model: 1 },
  committee:
   { kind: 1,
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
      'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet' },
  last_block:
   { header:
      { round: 8434720,
        io_root:
         'oasis1qq06y9zzxe7jjytn5z7nar9j4w5txzu7gvxw83sc or fb6ad6add3675465bdbd37f719bba5e57f50883233629299c86ecb7710038ab7',
        version: 0,
        namespace:
         'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
        timestamp: 1744596723,
        state_root:
         'oasis1qzk30kruk2e07w73h9us7l27davve9qycuyedz3c or c6fa1cae6c1d3e808d7e3ea8f95e9f2c3233e690d2c8fa0a57d31955bec25858',
        header_type: 1,
        in_msgs_hash:
         'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
        messages_hash:
         'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
        previous_hash:
         'oasis1qqe084zt8kr73l4a7wxu7mlvgr859xjz8s6xe0xl or 90c0df1c8edd29ee283d6d95b5c1556cd569a6e361838521fccbf66d81fe41d5' } },
  genesis_block:
   { header:
      { round: 1357486,
        io_root:
         'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
        version: 0,
        namespace:
         'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
        timestamp: 1701252139,
        state_root:
         'oasis1qr0du45uhv2h92cantpjlqkjj6mn5aeawvd96hy4 or 2dc3dd927e62d26af397c32911f4e4d6b95fd62fed1a7f469cba36afbbd4ef83',
        header_type: 1,
        in_msgs_hash:
         'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
        messages_hash:
         'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a',
        previous_hash:
         'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a' } },
  liveness_stats:
   { good_rounds:
      [ 403, 403, 403, 389, 403, 403, 399, 402, 403, 402, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
     total_rounds: 403,
     missed_proposals: [ 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
     finalized_proposals:
      [ 41, 41, 41, 38, 40, 40, 40, 40, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] },
  commitment_pool: { highest_rank: '18446744073709551615' },
  last_block_height: 24134161,
  last_normal_round: 8434720,
  last_normal_height: 24134161 }
