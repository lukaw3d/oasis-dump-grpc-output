
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.registryGetRuntimes({
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
[ { v: 3,
    id:
     'oasis1qrcuqk8938g372ngwrz5ttec3usehh3jnvjxtrgm or 4000000000000000000000000000000000000000000000008c5ea5e49b4bc9ac',
    kind: 2,
    genesis:
     { round: 0,
       state_root:
        'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a' },
    storage: { checkpoint_interval: 0, checkpoint_num_kept: 0, checkpoint_chunk_size: 0 },
    executor:
     { group_size: 0,
       max_messages: 0,
       round_timeout: 0,
       group_backup_size: 0,
       allowed_stragglers: 0 },
    entity_id:
     'oasis1qrvmxhcjpjvgel9dqfs6zrnza3hqjpa6ug2arc0d or 4c0bfda978d5e3206986728b25c364ce88acd532e86148da44facc7d8e7c029a',
    deployments:
     [ { tee:
          { as_CBOR:
             { enclaves:
                [ { mr_signer:
                     'oasis1qzurfw2kcf7xxegvyx8vj0f5nhv8jsqmn5eqwcwm or 4025dab7ebda1fbecc4e3637606e021214d0f41c6d0422fd378b2a8b88818459',
                    mr_enclave:
                     'oasis1qrf4pnhfeuu9tyvqvuuctqmjk2y3yvn08vuyrsln or 54f8f673b0673b8d06d162dfb9b85b8677e61ed2711ef15188d3c202211dd0c5' } ] } },
         version: { minor: 4, patch: 1 },
         valid_from: 28060 },
       { tee:
          { as_CBOR:
             { enclaves:
                [ { mr_signer:
                     'oasis1qzurfw2kcf7xxegvyx8vj0f5nhv8jsqmn5eqwcwm or 4025dab7ebda1fbecc4e3637606e021214d0f41c6d0422fd378b2a8b88818459',
                    mr_enclave:
                     'oasis1qzs33d4vydd7qrtmk67nt5fzpakad0jzx5x70ln2 or ad511061df8abb90d6a8f0d013121d4697b1590357e6ab9cda54e2091508dfc3' } ] } },
         version: { minor: 5 },
         valid_from: 32381 } ],
    tee_hardware: 1,
    admission_policy:
     { entity_whitelist:
        { entities:
           { as_Map:
              [ [ 'oasis1qrqz3yx3ujewxpuunlhd43xx3dcxwt90rcajfh3p or 0be01d633c49a9dfc2098c350973533920a5574c0ca0868b8f84541ccbe24d0d',
                  { as_Map: [] } ],
                [ 'oasis1qqwd804h7f27a73jkvsqrelgz0mnpdytvyqq6s8t or 3d0ce574a475f739b61f6bef72bea0669a5092e13ed7d004d8776530bbecdd4b',
                  { as_Map: [] } ],
                [ 'oasis1qpz6gtyzec4dwq7vxhvseg9yutavyht36qjsyqm2 or 46533b01006e0de13b88b41c386d65a459a9d8c7f019afd47734f2b4831233ae',
                  { as_Map: [] } ],
                [ 'oasis1qrct7ry2dcmk4ng2lcskzdv26c09xxmm4ytrlzzd or 5b774f89d93b43e3554ba43fdb8f1e4b92b6217a526ccea84155c0e8a73189aa',
                  { as_Map: [] } ],
                [ 'oasis1qzrpvmt0chyn4ar06772xcj6rzs5arnecq0y3jj6 or a5e2d5c9a9b9f011ee86bb0fa016579df08e03a163447b13b4fcf687a13120bf',
                  { as_Map: [] } ],
                [ 'oasis1qrcc0c2tppgkc4ue55ykaxe2yznr7zlmkg7vw5a0 or cd369769eea0f525f7584d8f099b499d7613c46b5640cfdbc3b69b5d0ca63644',
                  { as_Map: [] } ],
                [ 'oasis1qpte3ug90s0cvj80lsjthvhwdz697ptvhs0zlyyr or ef42b4a3ccc392b0cbd5c8833a55dc12b8760012a7c096cd9549f41ce308a3f9',
                  { as_Map: [] } ] ] } } },
    governance_model: 1 },
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
  { v: 3,
    id:
     'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
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
       group_backup_size: 30,
       allowed_stragglers: 1,
       max_liveness_fails: 4,
       min_live_rounds_eval: 10,
       min_live_rounds_percent: 50 },
    entity_id:
     'oasis1qrvmxhcjpjvgel9dqfs6zrnza3hqjpa6ug2arc0d or 4c0bfda978d5e3206986728b25c364ce88acd532e86148da44facc7d8e7c029a',
    constraints:
     { as_Map:
        [ [ 1,
            { as_Map:
               [ [ 1,
                   { max_nodes: { limit: 1 },
                     min_pool_size: { limit: 30 },
                     validator_set: { as_Map: [] } } ],
                 [ 2,
                   { max_nodes: { limit: 1 },
                     min_pool_size: { limit: 30 },
                     validator_set: { as_Map: [] } } ] ] } ] ] },
    deployments:
     [ { version: { major: 10 }, valid_from: 21437 },
       { version: { major: 11 }, valid_from: 28017 } ],
    tee_hardware: 0,
    txn_scheduler:
     { max_batch_size: 1000,
       batch_flush_timeout: 1000000000,
       max_batch_size_bytes: 1048576,
       propose_batch_timeout: 5000000000 },
    admission_policy: { any_node: { as_Map: [] } },
    governance_model: 1 },
  { v: 3,
    id:
     'oasis1qzul9pvufatqchu07n5shc42pe5dt7rylcu8pv86 or 000000000000000000000000000000000000000000000000e199119c992377cb Cipher Mainnet',
    kind: 1,
    genesis:
     { round: 0,
       state_root:
        'oasis1qrt3u7xwkzzlzd7q5d2df5tkr7mplpqyaqx0lz9m or c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a' },
    storage:
     { checkpoint_interval: 100000,
       checkpoint_num_kept: 2,
       checkpoint_chunk_size: 8388608 },
    executor:
     { group_size: 5,
       max_messages: 256,
       round_timeout: 2,
       group_backup_size: 11,
       allowed_stragglers: 1 },
    entity_id:
     'oasis1qrvmxhcjpjvgel9dqfs6zrnza3hqjpa6ug2arc0d or 4c0bfda978d5e3206986728b25c364ce88acd532e86148da44facc7d8e7c029a',
    constraints:
     { as_Map:
        [ [ 1,
            { as_Map:
               [ [ 1,
                   { max_nodes: { limit: 1 },
                     min_pool_size: { limit: 11 },
                     validator_set: { as_Map: [] } } ],
                 [ 2,
                   { max_nodes: { limit: 1 },
                     min_pool_size: { limit: 11 },
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
                     'oasis1qrg5uy4alu3n64ezavt70f066ulyhlm8kvec98ee or 37264627bb08f3e5db3b74133d3c56f9a7e37944b2b6268a965ab9660d8aa200' } ],
               max_attestation_age: 1200 } },
         version: { major: 3, minor: 1, patch: 2 },
         valid_from: 35187,
         bundle_checksum:
          'oasis1qqz764lcmxgp6jcmcq4h6yt4s5kaf8ljysfxzyvw or 200f5fbc8a2d4fecfe621793ebefd851d17a332cc2150f0be3f993b937c52c81' },
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
                     'oasis1qrukszs8z08vksqcj9r383k63y9z2aa7fcf8l7ya or a5abe5ecb45206f6c1a275ef3bec3f3bd02dd0037054800e1aebf24d7eb1be33',
                    mr_enclave:
                     'oasis1qpxrw3vm96kzm9f6pry5l8qraq3uuswc4cj07mdq or 00394d9a088fbf0dcbd9d8e11d696611b4c6ddfe3b47bbbe0c30cb09b9c7e58e' } ],
               max_attestation_age: 1200 } },
         version: { major: 3, minor: 2, patch: 2 },
         valid_from: 39604,
         bundle_checksum:
          'oasis1qztd9v84h4vesj7u83caux7arfl7elurms5739ns or e653d9fc0cc950ce018dc11b36ade72b5fc322d70e78501549a89e60ed22ded0' } ],
    key_manager:
     'oasis1qrcuqk8938g372ngwrz5ttec3usehh3jnvjxtrgm or 4000000000000000000000000000000000000000000000008c5ea5e49b4bc9ac',
    tee_hardware: 1,
    txn_scheduler:
     { max_batch_size: 1000,
       batch_flush_timeout: 1000000000,
       max_batch_size_bytes: 10485760,
       propose_batch_timeout: 5000000000 },
    admission_policy:
     { per_role:
        { as_Map:
           [ [ 2,
               { entity_whitelist:
                  { entities:
                     { as_Map:
                        [ [ 'oasis1qrh6e9ckmfrxn04upc4wg7atau8lz9hw7gj0jt04 or 39e00923e63bca72ecee8b7c8f06c418e721cc38ebf6973040b414573f4d52d4',
                            { as_Map: [] } ] ] } } } ] ] } },
    governance_model: 1 },
  { v: 3,
    id:
     'oasis1qq00wuesqv23hs26rsnzssucdjhksxfyfv42gg2c or 000000000000000000000000000000000000000000000000000000000000ff03',
    kind: 1,
    genesis:
     { round: 43825,
       state_root:
        'oasis1qpvnhfwettu5g9ht4zkfwdk75xheeppkmcwredsf or 273c8f17e319b489233544c05a2c4ae817166801e3529164406b556ab99d7752' },
    storage:
     { checkpoint_interval: 1000,
       checkpoint_num_kept: 5,
       checkpoint_chunk_size: 16777216 },
    executor:
     { group_size: 2,
       max_messages: 32,
       round_timeout: 5,
       group_backup_size: 0,
       allowed_stragglers: 0 },
    entity_id:
     'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
    constraints:
     { as_Map:
        [ [ 1,
            { as_Map:
               [ [ 1, { min_pool_size: { limit: 2 } } ], [ 2, { min_pool_size: { limit: 0 } } ] ] } ] ] },
    deployments: [ { version: { as_Map: [] }, valid_from: 0 } ],
    tee_hardware: 0,
    txn_scheduler:
     { max_batch_size: 10000,
       batch_flush_timeout: 1000000000,
       max_batch_size_bytes: 16777216,
       propose_batch_timeout: 5000000000 },
    admission_policy:
     { entity_whitelist:
        { entities:
           { as_Map:
              [ [ 'oasis1qr6qp6cz3hnzx3yweyll7rne79ctfalrlcf5qj09 or 3ad9e73f11bd53557889e0d60aea81b2be01ce26009b0e88a450696b70a928f1',
                  { as_Map: [] } ],
                [ 'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
                  { as_Map: [] } ],
                [ 'oasis1qp3fd5rplv5uh6nc9vn85ejeaszewjv2xgvfts07 or 502d0069ad82cdcdb91b9f97d873a2a3a1f4c10b81251e79d1c84213692278dd',
                  { as_Map: [] } ] ] } } },
    governance_model: 1 },
  { v: 3,
    id:
     'oasis1qqawsusjgn3pk89tnuzgzem506fr5q5vrvc8j47v or 000000000000000000000000000000000000000000000000000000000000ff04',
    kind: 1,
    genesis:
     { round: 44848,
       state_root:
        'oasis1qr0hmzy9ec0y0scerf94g46qd3300yxdysz8w0ux or 17a96b3a636d82f1faece3f70ba4a466b522e74dc2093f23f63c05358b7439c9' },
    storage:
     { checkpoint_interval: 1000,
       checkpoint_num_kept: 5,
       checkpoint_chunk_size: 16777216 },
    executor:
     { group_size: 2,
       max_messages: 32,
       round_timeout: 5,
       group_backup_size: 0,
       allowed_stragglers: 0 },
    entity_id:
     'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
    constraints:
     { as_Map:
        [ [ 1,
            { as_Map:
               [ [ 1, { min_pool_size: { limit: 2 } } ], [ 2, { min_pool_size: { limit: 0 } } ] ] } ] ] },
    deployments: [ { version: { as_Map: [] }, valid_from: 0 } ],
    tee_hardware: 0,
    txn_scheduler:
     { max_batch_size: 10000,
       batch_flush_timeout: 1000000000,
       max_batch_size_bytes: 16777216,
       propose_batch_timeout: 5000000000 },
    admission_policy:
     { entity_whitelist:
        { entities:
           { as_Map:
              [ [ 'oasis1qq2kqzr4q942x44st97n66nmmyh7dhsuvsqyc22u or 0416dad177c8e16493ae813efd819c16d8716c40b98d02615a19748c807091ed',
                  { as_Map: [] } ],
                [ 'oasis1qrgxl0ylc7lvkj0akv6s32rj4k98nr0f7smf6m4k or 053009343c9debf510fa97e14c374f1aca2d87327e0b9fc2fe0e766b70c894cc',
                  { as_Map: [] } ],
                [ 'oasis1qrzkqzvlw9xgyxhhqps746ssyhn5lkqrmcgz8amq or 0bb85eec124fae056bb06466e26f8e15c1e570d60e10f48679eaf1bd5fc1b010',
                  { as_Map: [] } ],
                [ 'oasis1qpsnzv8qz4fu3lwps2tc3eg5pnryzl4h7cqxruzf or 0c86cf69c58612279a964fb6dba79811a7d898a2690fdf0f6285a9fed70f5c92',
                  { as_Map: [] } ],
                [ 'oasis1qq7vyz4ewrdh00yujw0mgkf459et306xmvh2h3zg or 143a9198cd45ca16866acfa5aae5a61802a032c536ae3ed41120259ce1edc5ca',
                  { as_Map: [] } ],
                [ 'oasis1qzmwdlxy7cltmwt99u9pwqt3g0rdwgsqyvcqymmt or 17979db97e26e0efe8b7751c16cde2424d593d4b86e3792ec4623db19cfde6e5',
                  { as_Map: [] } ],
                [ 'oasis1qzv7a0gkxwpfelv985fvkl24k7jh3arfwy84zw7q or 18358ed3e47ba92ad60746ef4fe5762b3eaf947726e999da350336fc5b05a840',
                  { as_Map: [] } ],
                [ 'oasis1qz22xm9vyg0uqxncc667m4j4p5mrsj455c743lfn or 2769f0957b9810f359d26307d8f860e51a1f6d9ce3eb9c43bd030d772f498b41',
                  { as_Map: [] } ],
                [ 'oasis1qqnmppt4j5d2yl584euhn6g2cw9gewdswga9frg4 or 277a2ee66d5a6ebc1c6d8c1392c4a3d478f6d50a038f2ad2923078d2b10a5781',
                  { as_Map: [] } ],
                [ 'oasis1qqlq8jplttrmw982rrhp0svl8054xqevecks5yqr or 2a6312f91ce343dbe6f49d9a5fd6228499e699273f201aae0b2b1b84fc550c53',
                  { as_Map: [] } ],
                [ 'oasis1qrmexg6kh67xvnp7k42sx482nja5760stcrcdkhm or 2da28950a9dd02a1f9ec3544c6ca538dd45344d189392a80af3334a66f11119c',
                  { as_Map: [] } ],
                [ 'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
                  { as_Map: [] } ],
                [ 'oasis1qram2p9w3yxm4px5nth8n7ugggk5rr6ay5d284at or 459a304d799f4fe6fa1fa56ecfded5102232d9cabcb72b538a5bfc0316edbcef',
                  { as_Map: [] } ],
                [ 'oasis1qzugextrcdueshq63w7l9x4xglnusznsgqa95w7e or 4f993b3ed391d35a19add9d9bde0e93bd005a4c52111111993b59249f9bc1ad8',
                  { as_Map: [] } ],
                [ 'oasis1qp3fd5rplv5uh6nc9vn85ejeaszewjv2xgvfts07 or 502d0069ad82cdcdb91b9f97d873a2a3a1f4c10b81251e79d1c84213692278dd',
                  { as_Map: [] } ],
                [ 'oasis1qrs8zlh0mj37ug0jzlcykz808ylw93xwkvknm7yc or 5055c2a5cbd704e1dbc6d39b1b8a6c19c9fe2e064e79dbc30d402a55e9e0a4f9',
                  { as_Map: [] } ],
                [ 'oasis1qrdx0n7lgheek24t24vejdks9uqmfldtmgdv7jzz or 524c234b562f11f1f1f5be8c313e50d56bc26376969f6971443b01fcfc3ecc69',
                  { as_Map: [] } ],
                [ 'oasis1qqs5wnxvsk009swtt7ehm5fslxve96kczszwt47s or 56cac73d270175ed4551bf810d638dbcbc71c0a38a7af2c1ec545b5006a217e6',
                  { as_Map: [] } ],
                [ 'oasis1qq4f2h225gv6g8w8w23fm740aze9lke4qun72n59 or 56deb715f17334c8149e0accbe72a4b3e89cc928b92f09239e224424c6408a63',
                  { as_Map: [] } ],
                [ 'oasis1qql4alk30frfa6xua42eu7tynkqf9vd5ug95yqpn or 597b3b1250659b7d256b67c6e28643a6e6de16ee6c2a48c355e7e55a8f98b880',
                  { as_Map: [] } ],
                [ 'oasis1qz0ea28d8p4xk8xztems60wq22f9pm2yyyd82tmt or 59acc8efc94c7268f2087e7ee512a491f393511f9785e1c8a2196a32ef9af40b',
                  { as_Map: [] } ],
                [ 'oasis1qp4ajz4vdgx3ze42ulk7m0jkxfstqcl87qymg9nx or 5aa057f91c8fd52f16b02bb1ae4c24d4a504aa93f190c498caf974ae32fe342a',
                  { as_Map: [] } ],
                [ 'oasis1qzrehfnnntdaeshy5f6kfa8v3p35yu7mluaapmgc or 6031d8cff47e63ba42a1d8668240aace8aaa379e20cd17d51397e366b897f912',
                  { as_Map: [] } ],
                [ 'oasis1qq3fq8hxrlq6pedw0q3f57daea43a6v7q5rwf0ll or 63ebdef8ed21941728ff5633b85383227ec9a370f973d04ea9dba173b29933c1',
                  { as_Map: [] } ],
                [ 'oasis1qz2rxs50p4kn537tcupjhg7ad3zcm9s7uuyrrd9e or 68e79fc6de4c52e5c46c4af1a43f99b6d25687fdddf627feb7e3c14de0202a9a',
                  { as_Map: [] } ],
                [ 'oasis1qp4f47plgld98n5g2ltalalnndnzz96euv9n89lz or 6d3a24d1e97c19b994cd300081c43bf2ec30fd3b20796c17a4cdcdd92e3da814',
                  { as_Map: [] } ],
                [ 'oasis1qpqz2ut6a6prfcjm64xnpnjhsnqny6jqfyav829v or 6dbd735a9d20cd2d628f5398dcacf10b404935daa4022276eb3de20fcb25b7b7',
                  { as_Map: [] } ],
                [ 'oasis1qz65awwegd9pr8msfxkg7hpwyjemm2qdlysyc8jq or 8b3cb7f00994794e1be0bdb7915cb8065c5b90718e3f2e0a3d248b9c9825ad5d',
                  { as_Map: [] } ],
                [ 'oasis1qp4rp7adhegfktyg4aq3w6jelqumx6klfv5t7kvv or 8f34d662291e37a348b8c43a9788aa743385f63c9f3891b615c9d068d067f7eb',
                  { as_Map: [] } ],
                [ 'oasis1qr0jwz65c29l044a204e3cllvumdg8cmsgt2k3ql or 91faf603a2ba4e5be1426e27cfcf07733ce477602ae4f964c52a67994501005b',
                  { as_Map: [] } ],
                [ 'oasis1qz72lvk2jchk0fjrz7u2swpazj3t5p0edsdv7sf8 or 928e70af948caa129bf8fd648a6335105fd3e12aaf5bf5a348ec0f1e281097e9',
                  { as_Map: [] } ],
                [ 'oasis1qz26ty8q6gwt6zah7dtt8jpepvwnttkg8ssnxjl7 or 92ea56dcfb745cc78445291d0d6c99314e2866b934c06cac557572a97debca57',
                  { as_Map: [] } ],
                [ 'oasis1qr8al5vcpqzjspdl8yt27fqc3pydz4alhs0xqp5e or a0f7a482121a866c8c533077d4815b5d077a0ca768ee59ce62c5c8a692b62165',
                  { as_Map: [] } ],
                [ 'oasis1qqewwznmvwfvee0dyq9g48acy0wcw890g549pukz or b038bd6711d807eac74e9561e1a6cd1570cc45279c7c67b84336f218af198108',
                  { as_Map: [] } ],
                [ 'oasis1qqx820g2geqzeyeyfnm5hgz72eaj9emajgqmscy0 or b5ca27dfcac1af774799446e5ce4d41690cf2b013878e53cd85d76d6b5fd7ac1',
                  { as_Map: [] } ],
                [ 'oasis1qzl58e7v7pk50h66s2tv3u9rzf87twp7pcv7hul6 or b6b85e59c728017e32cb81559d305db78bbcdc61876e05acd60cba38189f0a57',
                  { as_Map: [] } ],
                [ 'oasis1qzc687uuywnel4eqtdn6x3t9hkdvf6sf2gtv4ye9 or b6f3e59861efe5aa242fd30c06a3409123b282574922545399222f0b0ba1d2b5',
                  { as_Map: [] } ],
                [ 'oasis1qrtq873ddwnnjqyv66ezdc9ql2a07l37d5vae9k0 or bb14a4bc5bbac78308615f8cd55ac3bb79bfa9b003b3fd407b799601c1269da4',
                  { as_Map: [] } ],
                [ 'oasis1qzp84num6xgspdst65yv7yqegln6ndcxmuuq8s9w or c5037a7df2d275ce7511f110d81ce5b4ad62598030e98d4290101b1739618444',
                  { as_Map: [] } ],
                [ 'oasis1qq0xmq7r0z9sdv02t5j9zs7en3n6574gtg8v9fyt or cc086d1aba64d4bddb04b68fe5e9e6de76ad5130a88fb30416bcaaf7e306e2d1',
                  { as_Map: [] } ],
                [ 'oasis1qpjuke27se2wnmvx6e8uc4l5h44yjp9h7g2clqfq or dc344c30cef27b61d112f93ccf3d3a3a3306e81b968ecf383cb75260284d1c0c',
                  { as_Map: [] } ],
                [ 'oasis1qppjm5sxqwps4dpyekdvz530sjmq3e5eusp7hdan or dcd28c4ff433d757b6c6497048257fcde6b02c4dc120efd19f82df695e3b4092',
                  { as_Map: [] } ],
                [ 'oasis1qzu358mpd4z5frmrq6vnwq87cqfvdmfxh5ax57cj or df6292e59f4b5930f650450eaa147067226f6f495bd768a213d518828163b0a4',
                  { as_Map: [] } ],
                [ 'oasis1qzl99wft8jtt7ppprk7ce7s079z3r3t77s6pf3dd or e206ce394d3d6dccaf339dd4a759539cffac2dbd1f7a7889bb439c5143c2052b',
                  { as_Map: [] } ],
                [ 'oasis1qp0j5v5mkxk3eg4kxfdsk8tj6p22g4685qk76fw6 or ec3c0a082415f531cd2f24c42d04c109634f207649740abba869350fbbf1db3a',
                  { as_Map: [] } ],
                [ 'oasis1qppctxzn8djkqfvrxugak9v7dp25vddq7sxqhkry or f7e94ce6f43583e715ce368d33bf20c70d7251e8158f9eed1c36e937b0ca22fc',
                  { as_Map: [] } ],
                [ 'oasis1qps9drw07z0gmh5z2pn7zwl3z53ate2yvqf3uzq5 or fc5a22e6465d05cef41cf9a582ebd8e80cc120b36b3623c380a40b3884ee2042',
                  { as_Map: [] } ],
                [ 'oasis1qp6fzgx9zhamsk6c77cwzjeme06xwswffvhk6js2 or ff295675a89dd830e523804c5645fa80047a79a05894ba251db8c29878adaf37',
                  { as_Map: [] } ] ] } } },
    governance_model: 1 },
  { v: 3,
    id:
     'oasis1qz3zwaudfvh59qvfvu4slprm34v4c6qrfsunm7qf or 000000000000000000000000000000000000000000000000000000000000ff01',
    kind: 1,
    genesis:
     { round: 0,
       state_root:
        'oasis1qzdj559ms59evm0wv39uwmnjfdayyyxkfcstlmx9 or 8c78e9cdab19943d90717e3c7d47c939f71ab615bfb413bba858b775fee22acc' },
    storage:
     { checkpoint_interval: 1000,
       checkpoint_num_kept: 5,
       checkpoint_chunk_size: 16777216 },
    executor:
     { group_size: 2,
       max_messages: 32,
       round_timeout: 5,
       group_backup_size: 0,
       allowed_stragglers: 0 },
    entity_id:
     'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
    constraints:
     { as_Map:
        [ [ 1,
            { as_Map:
               [ [ 1, { min_pool_size: { limit: 2 } } ], [ 2, { min_pool_size: { limit: 0 } } ] ] } ] ] },
    deployments: [ { version: { as_Map: [] }, valid_from: 0 } ],
    tee_hardware: 0,
    txn_scheduler:
     { max_batch_size: 10000,
       batch_flush_timeout: 1000000000,
       max_batch_size_bytes: 16777216,
       propose_batch_timeout: 5000000000 },
    admission_policy:
     { entity_whitelist:
        { entities:
           { as_Map:
              [ [ 'oasis1qq2kqzr4q942x44st97n66nmmyh7dhsuvsqyc22u or 0416dad177c8e16493ae813efd819c16d8716c40b98d02615a19748c807091ed',
                  { as_Map: [] } ],
                [ 'oasis1qrgxl0ylc7lvkj0akv6s32rj4k98nr0f7smf6m4k or 053009343c9debf510fa97e14c374f1aca2d87327e0b9fc2fe0e766b70c894cc',
                  { as_Map: [] } ],
                [ 'oasis1qrzkqzvlw9xgyxhhqps746ssyhn5lkqrmcgz8amq or 0bb85eec124fae056bb06466e26f8e15c1e570d60e10f48679eaf1bd5fc1b010',
                  { as_Map: [] } ],
                [ 'oasis1qpsnzv8qz4fu3lwps2tc3eg5pnryzl4h7cqxruzf or 0c86cf69c58612279a964fb6dba79811a7d898a2690fdf0f6285a9fed70f5c92',
                  { as_Map: [] } ],
                [ 'oasis1qp806myghnnftpyvchz95mwvvuy5ayrn6yjqgxgz or 0d5a2f9bbb5d5179459bd9bc04fd341f6be0fc0925802d921c8a2682ad0039da',
                  { as_Map: [] } ],
                [ 'oasis1qr0acnmfrjkga5e578h7y3v2m2g7h85t8vzl648z or 0dca65399cc40ed84b1ed3f28dbb67f6795d7f36796fdafc1091670f725318c2',
                  { as_Map: [] } ],
                [ 'oasis1qqf6wmc0ax3mykd028ltgtqr49h3qffcm50gwag3 or 0fca0228969be0bb4e310251d184195f1f9f330e901f24e2bf76027cdf2d335f',
                  { as_Map: [] } ],
                [ 'oasis1qzmwdlxy7cltmwt99u9pwqt3g0rdwgsqyvcqymmt or 17979db97e26e0efe8b7751c16cde2424d593d4b86e3792ec4623db19cfde6e5',
                  { as_Map: [] } ],
                [ 'oasis1qz22xm9vyg0uqxncc667m4j4p5mrsj455c743lfn or 2769f0957b9810f359d26307d8f860e51a1f6d9ce3eb9c43bd030d772f498b41',
                  { as_Map: [] } ],
                [ 'oasis1qrmexg6kh67xvnp7k42sx482nja5760stcrcdkhm or 2da28950a9dd02a1f9ec3544c6ca538dd45344d189392a80af3334a66f11119c',
                  { as_Map: [] } ],
                [ 'oasis1qqxdawayk4jzpcsa5gc3hryql33thjseus97gjrc or 3659cf91aa841fcfb959ee5b7411875b26d9b0aa4a368de72e35a09f424cc686',
                  { as_Map: [] } ],
                [ 'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
                  { as_Map: [] } ],
                [ 'oasis1qram2p9w3yxm4px5nth8n7ugggk5rr6ay5d284at or 459a304d799f4fe6fa1fa56ecfded5102232d9cabcb72b538a5bfc0316edbcef',
                  { as_Map: [] } ],
                [ 'oasis1qzugextrcdueshq63w7l9x4xglnusznsgqa95w7e or 4f993b3ed391d35a19add9d9bde0e93bd005a4c52111111993b59249f9bc1ad8',
                  { as_Map: [] } ],
                [ 'oasis1qp3fd5rplv5uh6nc9vn85ejeaszewjv2xgvfts07 or 502d0069ad82cdcdb91b9f97d873a2a3a1f4c10b81251e79d1c84213692278dd',
                  { as_Map: [] } ],
                [ 'oasis1qrs8zlh0mj37ug0jzlcykz808ylw93xwkvknm7yc or 5055c2a5cbd704e1dbc6d39b1b8a6c19c9fe2e064e79dbc30d402a55e9e0a4f9',
                  { as_Map: [] } ],
                [ 'oasis1qrdx0n7lgheek24t24vejdks9uqmfldtmgdv7jzz or 524c234b562f11f1f1f5be8c313e50d56bc26376969f6971443b01fcfc3ecc69',
                  { as_Map: [] } ],
                [ 'oasis1qqs5wnxvsk009swtt7ehm5fslxve96kczszwt47s or 56cac73d270175ed4551bf810d638dbcbc71c0a38a7af2c1ec545b5006a217e6',
                  { as_Map: [] } ],
                [ 'oasis1qql4alk30frfa6xua42eu7tynkqf9vd5ug95yqpn or 597b3b1250659b7d256b67c6e28643a6e6de16ee6c2a48c355e7e55a8f98b880',
                  { as_Map: [] } ],
                [ 'oasis1qz0ea28d8p4xk8xztems60wq22f9pm2yyyd82tmt or 59acc8efc94c7268f2087e7ee512a491f393511f9785e1c8a2196a32ef9af40b',
                  { as_Map: [] } ],
                [ 'oasis1qp4ajz4vdgx3ze42ulk7m0jkxfstqcl87qymg9nx or 5aa057f91c8fd52f16b02bb1ae4c24d4a504aa93f190c498caf974ae32fe342a',
                  { as_Map: [] } ],
                [ 'oasis1qqr8y5cez0aczdlnfp9fre82whjsdgqgd5xxtv6p or 5d240b068b9b84eabf5fceaf2888f85f3a2ea351617b7f7e90b17fd8f0e02a93',
                  { as_Map: [] } ],
                [ 'oasis1qq3fq8hxrlq6pedw0q3f57daea43a6v7q5rwf0ll or 63ebdef8ed21941728ff5633b85383227ec9a370f973d04ea9dba173b29933c1',
                  { as_Map: [] } ],
                [ 'oasis1qrxyndkhehffdme39urcp2v7m2t7k06xwsuyaxqq or 6bf2d515fa08dda4686ac66cead3ff2ef9f409b1ba464bc41581dc551fd5a3d3',
                  { as_Map: [] } ],
                [ 'oasis1qqa6tcu2w0x4ucxyhq4wxp55m0f08wwpjca43703 or 7310775120a433400200c419b6861652b2929b8888f6597cb77c98d4caf513a7',
                  { as_Map: [] } ],
                [ 'oasis1qr72azh6e5fx2gxrtea7pgkc434r2mnfrv0ex0su or 79a7df286f417c8e6389625fab96854fc10bc51a3ca37fe009e9b9d6489c3923',
                  { as_Map: [] } ],
                [ 'oasis1qz65awwegd9pr8msfxkg7hpwyjemm2qdlysyc8jq or 8b3cb7f00994794e1be0bdb7915cb8065c5b90718e3f2e0a3d248b9c9825ad5d',
                  { as_Map: [] } ],
                [ 'oasis1qr0jwz65c29l044a204e3cllvumdg8cmsgt2k3ql or 91faf603a2ba4e5be1426e27cfcf07733ce477602ae4f964c52a67994501005b',
                  { as_Map: [] } ],
                [ 'oasis1qz72lvk2jchk0fjrz7u2swpazj3t5p0edsdv7sf8 or 928e70af948caa129bf8fd648a6335105fd3e12aaf5bf5a348ec0f1e281097e9',
                  { as_Map: [] } ],
                [ 'oasis1qz26ty8q6gwt6zah7dtt8jpepvwnttkg8ssnxjl7 or 92ea56dcfb745cc78445291d0d6c99314e2866b934c06cac557572a97debca57',
                  { as_Map: [] } ],
                [ 'oasis1qrrd9sw5mf7z5yn8haltaqrkemd9qm7ldvzrumqs or a13dcbed125527b9367411067d500ff3f99d137ce88a6e03eb53cebe5c9242cf',
                  { as_Map: [] } ],
                [ 'oasis1qqewwznmvwfvee0dyq9g48acy0wcw890g549pukz or b038bd6711d807eac74e9561e1a6cd1570cc45279c7c67b84336f218af198108',
                  { as_Map: [] } ],
                [ 'oasis1qqx820g2geqzeyeyfnm5hgz72eaj9emajgqmscy0 or b5ca27dfcac1af774799446e5ce4d41690cf2b013878e53cd85d76d6b5fd7ac1',
                  { as_Map: [] } ],
                [ 'oasis1qzl58e7v7pk50h66s2tv3u9rzf87twp7pcv7hul6 or b6b85e59c728017e32cb81559d305db78bbcdc61876e05acd60cba38189f0a57',
                  { as_Map: [] } ],
                [ 'oasis1qzc687uuywnel4eqtdn6x3t9hkdvf6sf2gtv4ye9 or b6f3e59861efe5aa242fd30c06a3409123b282574922545399222f0b0ba1d2b5',
                  { as_Map: [] } ],
                [ 'oasis1qrtq873ddwnnjqyv66ezdc9ql2a07l37d5vae9k0 or bb14a4bc5bbac78308615f8cd55ac3bb79bfa9b003b3fd407b799601c1269da4',
                  { as_Map: [] } ],
                [ 'oasis1qzp84num6xgspdst65yv7yqegln6ndcxmuuq8s9w or c5037a7df2d275ce7511f110d81ce5b4ad62598030e98d4290101b1739618444',
                  { as_Map: [] } ],
                [ 'oasis1qq0xmq7r0z9sdv02t5j9zs7en3n6574gtg8v9fyt or cc086d1aba64d4bddb04b68fe5e9e6de76ad5130a88fb30416bcaaf7e306e2d1',
                  { as_Map: [] } ],
                [ 'oasis1qpaygvzwd5ffh2f5p4qdqylymgqcvl7sp5gxyrl3 or db5fa23eefe899804ded7e5c518e109c3e1bf5556e0225bfbbcb8006ab765633',
                  { as_Map: [] } ],
                [ 'oasis1qpjuke27se2wnmvx6e8uc4l5h44yjp9h7g2clqfq or dc344c30cef27b61d112f93ccf3d3a3a3306e81b968ecf383cb75260284d1c0c',
                  { as_Map: [] } ],
                [ 'oasis1qzl99wft8jtt7ppprk7ce7s079z3r3t77s6pf3dd or e206ce394d3d6dccaf339dd4a759539cffac2dbd1f7a7889bb439c5143c2052b',
                  { as_Map: [] } ],
                [ 'oasis1qra3rvq7y055waxmnx8rc0nad3frr8na2s9l8l3f or e20da9dfa5a83b3747c97abab4e8c56f79efeb2f74ff3c9071bd5e41ccb9768a',
                  { as_Map: [] } ] ] } } },
    governance_model: 1 },
  { v: 3,
    id:
     'oasis1qrajpq72q8an0xns9d88cq8pghzm666q85zghzul or 000000000000000000000000000000000000000000000000000000000000ff00',
    kind: 1,
    genesis:
     { round: 0,
       state_root:
        'oasis1qzwjrtlsfvhg02s6ky662sklhmj3qgyywcgyg3ax or f7280a8e01698d2adb8eb0ab5e04bf507115b3c1ee8d6fa598904f0310699256' },
    storage:
     { checkpoint_interval: 1000,
       checkpoint_num_kept: 5,
       checkpoint_chunk_size: 16777216 },
    executor:
     { group_size: 1,
       max_messages: 32,
       round_timeout: 5,
       group_backup_size: 0,
       allowed_stragglers: 0 },
    entity_id:
     'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
    constraints:
     { as_Map:
        [ [ 1,
            { as_Map:
               [ [ 1, { min_pool_size: { limit: 1 } } ], [ 2, { min_pool_size: { limit: 0 } } ] ] } ] ] },
    deployments: [ { version: { as_Map: [] }, valid_from: 0 } ],
    tee_hardware: 0,
    txn_scheduler:
     { max_batch_size: 10000,
       batch_flush_timeout: 1000000000,
       max_batch_size_bytes: 16777216,
       propose_batch_timeout: 5000000000 },
    admission_policy:
     { entity_whitelist:
        { entities:
           { as_Map:
              [ [ 'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
                  { as_Map: [] } ] ] } } },
    governance_model: 1 },
  { v: 3,
    id:
     'oasis1qrjajuvzyyqwhw88nrdlq6mc84a4eexsqss87dgf or 00000000000000000000000000000000000070617263656c70726f6400000000',
    kind: 1,
    genesis:
     { round: 0,
       state_root:
        'oasis1qqss7cph4ykvjpau02dnyv76dx4tyujvy50c5zau or e4004e3a88fac68b005651a87c77862edf13441369673d5f3712238203a8661f' },
    storage:
     { checkpoint_interval: 10000,
       checkpoint_num_kept: 2,
       checkpoint_chunk_size: 8388608 },
    executor:
     { group_size: 2,
       max_messages: 32,
       round_timeout: 5,
       group_backup_size: 1,
       allowed_stragglers: 0 },
    entity_id:
     'oasis1qqfhayfeeecjcfzgp2wwan3xcvfkr50ructphafk or 2cbc779df1d0419b4d7594419d592f673470e16b36000e29a080f0c7e224c55b',
    deployments: [ { version: { as_Map: [] }, valid_from: 0 } ],
    tee_hardware: 0,
    txn_scheduler:
     { max_batch_size: 1000,
       batch_flush_timeout: 1000000000,
       max_batch_size_bytes: 16777216,
       propose_batch_timeout: 5000000000 },
    admission_policy:
     { entity_whitelist:
        { entities:
           { as_Map:
              [ [ 'oasis1qqfhayfeeecjcfzgp2wwan3xcvfkr50ructphafk or 2cbc779df1d0419b4d7594419d592f673470e16b36000e29a080f0c7e224c55b',
                  { as_Map: [] } ] ] } } },
    governance_model: 1 },
  { v: 3,
    id:
     'oasis1qzltzqrpcn0ax6r0rddreycmdgrw6x986s4s5gfy or 000000000000000000000000000000000000000000000000000000000000ff02',
    kind: 1,
    genesis:
     { round: 0,
       state_root:
        'oasis1qzckm47auldtg53f9qf955lfsxq2g2pehyltwnaq or 71026b93514f1812f31846a247a244d6b55197b465a8fb6d6c4326332d2e5bf0' },
    storage:
     { checkpoint_interval: 1000,
       checkpoint_num_kept: 5,
       checkpoint_chunk_size: 16777216 },
    executor:
     { group_size: 1,
       max_messages: 32,
       round_timeout: 5,
       group_backup_size: 0,
       allowed_stragglers: 0 },
    entity_id:
     'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
    constraints:
     { as_Map:
        [ [ 1,
            { as_Map:
               [ [ 1, { min_pool_size: { limit: 1 } } ], [ 2, { min_pool_size: { limit: 0 } } ] ] } ] ] },
    deployments: [ { version: { as_Map: [] }, valid_from: 0 } ],
    tee_hardware: 0,
    txn_scheduler:
     { max_batch_size: 10000,
       batch_flush_timeout: 1000000000,
       max_batch_size_bytes: 16777216,
       propose_batch_timeout: 5000000000 },
    admission_policy:
     { entity_whitelist:
        { entities:
           { as_Map:
              [ [ 'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
                  { as_Map: [] } ],
                [ 'oasis1qp3fd5rplv5uh6nc9vn85ejeaszewjv2xgvfts07 or 502d0069ad82cdcdb91b9f97d873a2a3a1f4c10b81251e79d1c84213692278dd',
                  { as_Map: [] } ] ] } } },
    governance_model: 1 } ]
