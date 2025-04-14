
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.nodeControllerGetStatus(undefined))
} catch (err) {
  console.log('error', err)
}
const output = 
{ p2p:
   { topics:
      { 'oasis/bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4a0703a178e6e55/tx/000000000000000000000000000000000000000000000000e199119c992377cb/5.0.0': 47,
        'oasis/bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4a0703a178e6e55/tx/000000000000000000000000000000000000000000000000e2eaa99fc008f87f/5.0.0': 67,
        'oasis/bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4a0703a178e6e55/tx/000000000000000000000000000000000000000000000000f80306c9858e7279/5.0.0': 48 },
     peer_id: '0024080112209e61e8dd39ff61a38add50eb7a6257a355238efd4ec6d2ae446cd61706489562',
     pub_key:
      'oasis1qqefys4d5s3kzeenvdnqqs24df8yuyaehc2592h3 or 9e61e8dd39ff61a38add50eb7a6257a355238efd4ec6d2ae446cd61706489562',
     addresses:
      [ { IP: '281,472.812449793', Port: 9200, Zone: '' },
        { IP: '281,472.889648013', Port: 9200, Zone: '' },
        { IP: '281,473.568669698', Port: 9200, Zone: '' } ],
     num_peers: 111,
     protocols:
      { '/oasis/bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4a0703a178e6e55/light/1.0.0': 111,
        '/oasis/bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4a0703a178e6e55/keymanager/4000000000000000000000000000000000000000000000008c5ea5e49b4bc9ac/2.0.0': 6,
        '/oasis/bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4a0703a178e6e55/storagesync/000000000000000000000000000000000000000000000000e199119c992377cb/2.0.0': 47,
        '/oasis/bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4a0703a178e6e55/storagesync/000000000000000000000000000000000000000000000000e2eaa99fc008f87f/2.0.0': 67,
        '/oasis/bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4a0703a178e6e55/storagesync/000000000000000000000000000000000000000000000000f80306c9858e7279/2.0.0': 48 },
     num_connections: 113 },
  mode: 'client',
  identity:
   { tls:
      'oasis1qq2m9ke7ye3wh73wrkh4da09glq8xf29zg4ux3p2 or 3b18ce1eeba1b86880f2d102ad506bd9460c50dfbd994b828b62f295bf517632',
     node:
      'oasis1qp0da5afm2yfn0ce53q52cedyfvu34sxqctn2qle or 772e8f9bb274c2e78ac5b9bc71ad56831d1b0edf8d4368908eaa0c153e44c58f',
     consensus:
      'oasis1qp9uud50sejsajr60mfhvqgrre5ulpzjvqzcc5xr or aed24653c4eea2059826da46eb3dc24020cb3e1df0408e3207eb5be657f5972e' },
  runtimes:
   { as_Map:
      [ [ 'oasis1qzul9pvufatqchu07n5shc42pe5dt7rylcu8pv86 or 000000000000000000000000000000000000000000000000e199119c992377cb Cipher Mainnet',
          { indexer: { status: 'indexing', last_round: 7222649 },
            storage: { status: 'syncing rounds', last_finalized_round: 7222649 },
            committee:
             { host: { versions: [ { major: 3, minor: 2, patch: 2 } ] },
               peers:
                [ '/ip4/66.85.147.250/tcp/30002/p2p/12D3KooWGFZw1zo8mRFXp82EXX5tgRT3qgW1HgiMDNAXKHogTh4w',
                  '/ip4/51.178.76.217/tcp/30002/p2p/12D3KooWKTvsowgyv3WRTVm2dvEBtxpKsshWKtKJmGriGDPdzRBM',
                  '/ip4/193.201.82.230/tcp/30004/p2p/12D3KooWDS9tESF1LoWjAAWkEa4bnjRuxpHjaz5T5VTKjN7BfGe2',
                  '/ip4/185.107.80.40/tcp/30002/p2p/12D3KooWHHG9fq9bLSKSdtQXBtqMJj4K3zyDCUJU9PvEKj7CBFbw',
                  '/ip4/151.106.8.73/tcp/30002/p2p/12D3KooWHH8Ah4NWdeCxs11cES8ypcQZqjDsoLMJ4Hp26jdQwyum',
                  '/ip4/134.119.190.237/tcp/30002/p2p/12D3KooWSPgs5SCss4U2RRXuuBhGv5HMcsZwsVNW426TtFUxJBKA',
                  '/ip4/146.59.149.28/tcp/30002/p2p/12D3KooWEvfS5EdnpcC8etv8eiE3oSkhWid2FEXb5oAisZT3AJyo',
                  '/ip4/141.95.34.239/tcp/30002/p2p/12D3KooWQaNYjegtZyFtyrRNCF1yxB3sgGtBgY8asgEpFEcXPJiS',
                  '/ip4/174.138.162.2/tcp/30002/p2p/12D3KooWAYVr6x3xpw7PCywXwbsneDc4eAN9SiaT4TndL61xE64J',
                  '/ip4/131.153.99.10/tcp/30002/p2p/12D3KooWKPMS72iRgPDWczMVzKyYa3DSZmc771XDNXnMWVPnjfmJ',
                  '/ip4/66.85.156.122/tcp/30002/p2p/12D3KooWN2wNNar6xWQuRem6QGaWie5u3StWWmdZm4xeZ4CFKADE',
                  '/ip4/131.153.158.97/tcp/30002/p2p/12D3KooWSnJtBMWpaYmwZgkHQApefXzuQhUxRencTzwyuXzuWpFf',
                  '/ip4/131.153.154.13/tcp/30002/p2p/12D3KooWGfyNBqnppXZ1jo8zRcav3uKunj85HGbEDqj67d72jbJv',
                  '/ip4/131.153.57.226/tcp/30002/p2p/12D3KooWDzq86WGEqEHcVCYfhukxuYKPq7cjrCxwsYg5euBpTcfi',
                  '/ip4/134.119.194.145/tcp/30002/p2p/12D3KooWBS9AcSL1VSPXKuSYXRYymbgheVzae2jJTZZG6T1WA1Ar',
                  '/ip4/95.178.88.123/tcp/30005/p2p/12D3KooWQEJFrJRi82k1V1Qo4VNYXTbm15X2KPjXVngP8MvJvuFy',
                  '/ip4/51.161.119.139/tcp/30002/p2p/12D3KooWSJ4WnjUY76cfiifujynaxD15QnCdQfzxuJsyqzat24rp',
                  '/ip4/159.69.52.65/tcp/30002/p2p/12D3KooWPpiyYnbVsjKopU6fd6jdgrQuwZKYmdCHZV2YykJBdCQe',
                  '/ip4/131.153.164.15/tcp/30002/p2p/12D3KooWCixcEb3YyZqQnANYX9YLVuAxQ2tNaRapQuYh9TeTTFZV',
                  '/ip4/66.85.141.242/tcp/21002/p2p/12D3KooWBpJUTDKpQ1ZXvqBidRhsF3g12ywu5UypCSQSvgQHB6Ve',
                  '/ip4/66.85.154.218/tcp/30002/p2p/12D3KooWRRbEUSjnw3FwLm368wd8pArGRG6YCYMhAdA8oWG1CgkT',
                  '/ip4/131.153.59.34/tcp/26882/p2p/12D3KooWB4GhP7dXsBnFjTpkgr3sCmwkKxcmDhkHKNxZ3CrGgHDR',
                  '/ip4/66.85.137.130/tcp/30002/p2p/12D3KooWGyc42EBdUXhJ6weUG7KHdFZAkjvFmSKm1dZQwqo5Zpj4',
                  '/ip4/23.88.38.81/tcp/30002/p2p/12D3KooWP91xmGiYaq9sExMqdLvQEmddcoqt81ZmQPcujocvx4UC',
                  '/ip4/51.178.74.149/tcp/30002/p2p/12D3KooWS74Wqr1ZYLWafymznv4ib48DzDdmgZzVqMkM2ntNg5DZ',
                  '/ip4/51.77.21.63/tcp/30002/p2p/12D3KooWGZwXa15APjfuQ6RJeTm2EJAu2N4z8DTBL2xsHga2cdnN',
                  '/ip4/134.119.191.179/tcp/30002/p2p/12D3KooWLDtjZ9wPbdVF3Ay6SGH9wZZNKX7i8Uu6U2ho14rRM1NZ',
                  '/ip4/94.130.25.75/tcp/30002/p2p/12D3KooWHbqD2U9xEtCCMaSMjwq8Pt6wghvSZkmitDrk1z4juZgK',
                  '/ip4/66.85.141.186/tcp/30002/p2p/12D3KooWQuEPfUoCDrqAZLG4Xzy1W4A5To5S5roghd3HsrncqpjC',
                  '/ip4/15.235.13.140/tcp/9200/p2p/12D3KooWGsdYr76sPeBj5ctQtExdmKDHYkNNXTLzX7W2mrKEHZwr',
                  '/ip4/15.235.55.180/tcp/9200/p2p/12D3KooWHy3u8Q5ngRTyRoqprwju9bCfwePzY2frYwAofzPThpg9',
                  '/ip4/15.235.66.157/tcp/9200/p2p/12D3KooWAy5pSePt6MJ1aJ4SqtXsfMjpWMhawYNTn1gmwJsRn2Zc',
                  '/ip4/65.109.23.81/tcp/9200/p2p/12D3KooWSyaGh3PZScCVDZKteMTEszm4GXPBP2Fv8k5QfTLUvbhF',
                  '/ip4/15.235.14.46/tcp/9200/p2p/12D3KooWNVavn4q4hJ9y4LEfsfF2w75fZn3C77Gpup2B5TN37VEs',
                  '/ip4/131.153.243.138/tcp/9200/p2p/12D3KooWA3nyoxC1f7vognuXFBu4sq5UMuhES3mvkcinSx6xeFTF',
                  '/ip4/131.153.243.142/tcp/9200/p2p/12D3KooWScwCWrbrFLPyQA1eaaCXYGD9fzib8kn7gqg2w7Ssg8d1',
                  '/ip4/131.153.243.139/tcp/9200/p2p/12D3KooWNZjKuCn9c8YfcKxocBSy5hX6hCXCfYqdMCCQXXJbqeRd',
                  '/ip4/131.153.243.140/tcp/9200/p2p/12D3KooWJ38Acmrpu78zyhWMquAgjs5e4j9CoSQvJ6Ug2mDLRSLc',
                  '/ip4/15.235.13.113/tcp/9200/p2p/12D3KooWQZhsj6jWVRBPN2zdYPGXRPYDuuhimNd8CxEz6VeebhVP',
                  '/ip4/51.77.20.160/tcp/9200/p2p/12D3KooWH5wGxWj32yiTHXKn3B8zvrBwtmKeT8PGKc9PZLzMfjK4',
                  '/ip4/51.91.219.40/tcp/9200/p2p/12D3KooWF4sLYnqbWpwrndhaDRbuX4SDo1ynUuCZNrmKsy8JANbS',
                  '/ip4/15.235.14.3/tcp/9200/p2p/12D3KooWA7Et8aaymhK93jtTfNbA9fwd8kH5CLzX6Vb98Axf19LL',
                  '/ip4/131.153.241.90/tcp/9200/p2p/12D3KooWNG3fPsJWk2JGZ3tXZ4wShgdTZhHyKnjBRjRF9vMKCbBp',
                  '/ip4/89.212.17.232/tcp/9200/p2p/12D3KooWPcz11AarnbjJaJyxz1y5C9nbVfVuJJqqbvFTrZ5RXRko' ],
               status: 0,
               latest_round: 7222649,
               latest_height: 24134099,
               active_version: { major: 3, minor: 2, patch: 2 },
               executor_roles: null,
               scheduler_rank: '18446744073709551615' },
            components: [ { kind: 'ronl', version: { major: 3, minor: 2, patch: 2 } } ],
            descriptor:
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
            latest_hash:
             'oasis1qrt8lwl8vf4vfc4vk0c78l6fzxnlgrzpfvux7r6a or 4722125cd325c5c7704d4f97367c07223ad73c9d8f9e381af28310922f24ab94',
            latest_time: 1744596362,
            provisioner:
             'composite{none: load-balancer[4]/sandbox, sgx: load-balancer[4]/sgx, tdx: load-balancer[4]/tdx-qemu}',
            genesis_hash:
             'oasis1qqnmqz2um7w5emfrmwnsgs8d8zp95vq2lcwnhktg or 7f14a395c6daa1ec492152a29c8c27f5b84fba94e09652d765d6d0937ba2abfb',
            latest_round: 7222649,
            genesis_round: 44054,
            latest_state_root:
             { ns:
                'oasis1qzul9pvufatqchu07n5shc42pe5dt7rylcu8pv86 or 000000000000000000000000000000000000000000000000e199119c992377cb Cipher Mainnet',
               hash:
                'oasis1qp86zr87ya5vng2a2pdxd0j77ucy6dnh450cyxvy or ac1b66fa98f571d014328ea4cc7035dc2cd9a00a3b92b91feef3f19dfb700742',
               version: 7222649,
               root_type: 1 },
            last_retained_hash:
             'oasis1qqnmqz2um7w5emfrmwnsgs8d8zp95vq2lcwnhktg or 7f14a395c6daa1ec492152a29c8c27f5b84fba94e09652d765d6d0937ba2abfb',
            last_retained_round: 44054 } ],
        [ 'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
          { indexer: { status: 'indexing', last_round: 15157280 },
            storage: { status: 'syncing rounds', last_finalized_round: 15157280 },
            committee:
             { host: { versions: [ { major: 11 } ] },
               peers:
                [ '/ip4/95.217.57.230/tcp/30304/p2p/12D3KooWQXy2Y6CrD4o1tsZGDZLM2UyzK9iZ13de9485hXJSMPQD',
                  '/ip4/141.95.34.239/tcp/30002/p2p/12D3KooWQaNYjegtZyFtyrRNCF1yxB3sgGtBgY8asgEpFEcXPJiS',
                  '/ip4/95.217.85.213/tcp/40002/p2p/12D3KooWCs2xp2XmenpNDDCuM5a5VksxFFHNgqQfNjeWWnDu5Xbb',
                  '/ip4/142.132.131.249/tcp/40002/p2p/12D3KooWBizfYwusJJbccD66ZfavAs5Nn2wjb8JF89gC1U9LJD64',
                  '/ip4/135.181.179.38/tcp/10002/p2p/12D3KooWNYpvGHuWr2V1zdLTbaYQXBLysh6gVqSwsmGJgRUqDEtD',
                  '/ip4/95.217.77.154/tcp/40002/p2p/12D3KooWP3X51uxeXwfoaNgrEZ7LcZSMzxcRyvBxMjRFoyPxebKd',
                  '/ip4/69.67.149.193/tcp/60615/p2p/12D3KooWSV2iwHQU5PvRMMQN5RunucahNjZozZjA9rjBoaPz2hH8',
                  '/ip4/164.68.120.119/tcp/30002/p2p/12D3KooWNnMZduzgnuxTRqyovTN4zqBsEYLe1bY8RbgRWSKpYFP1',
                  '/ip4/65.108.201.32/tcp/40002/p2p/12D3KooWM7m5RfjPGcGbPAx6uy21XFYzkn1SYA2vXisRK8nC3hhw',
                  '/ip4/174.138.162.2/tcp/30002/p2p/12D3KooWAYVr6x3xpw7PCywXwbsneDc4eAN9SiaT4TndL61xE64J',
                  '/ip4/131.153.99.10/tcp/30002/p2p/12D3KooWKPMS72iRgPDWczMVzKyYa3DSZmc771XDNXnMWVPnjfmJ',
                  '/ip4/66.85.156.122/tcp/30002/p2p/12D3KooWN2wNNar6xWQuRem6QGaWie5u3StWWmdZm4xeZ4CFKADE',
                  '/ip4/65.109.115.223/tcp/30002/p2p/12D3KooWPg6dauQkMhAKzdj1JKAbZwkuT2Ff2mrygSVQbsNR3LZi',
                  '/ip4/131.153.57.226/tcp/30002/p2p/12D3KooWDzq86WGEqEHcVCYfhukxuYKPq7cjrCxwsYg5euBpTcfi',
                  '/ip4/51.161.119.139/tcp/30002/p2p/12D3KooWSJ4WnjUY76cfiifujynaxD15QnCdQfzxuJsyqzat24rp',
                  '/ip4/65.108.127.220/tcp/46002/p2p/12D3KooWCM5fJRX7SZP2LzBqs9wQ1xdkf79u4HZjYVzPVUKYFhbq',
                  '/ip4/151.106.8.73/tcp/30002/p2p/12D3KooWEF8ZfHiFk85P28VPuNTZdKHrQ4RMeXwguhfz5MNwWjoq',
                  '/ip4/142.132.203.173/tcp/45002/p2p/12D3KooWF76yZj3NpLw24qLFABvs3n7eaM2aFyAoT7a4isGLV1mq',
                  '/ip4/131.153.164.15/tcp/30002/p2p/12D3KooWCixcEb3YyZqQnANYX9YLVuAxQ2tNaRapQuYh9TeTTFZV',
                  '/ip4/66.85.141.242/tcp/31002/p2p/12D3KooWEnHPNLM1Cfw9jK8ktYA1KVsaV5BKXLsU6bci8btzfg95',
                  '/ip4/66.85.154.218/tcp/30002/p2p/12D3KooWRRbEUSjnw3FwLm368wd8pArGRG6YCYMhAdA8oWG1CgkT',
                  '/ip4/134.119.191.179/tcp/30002/p2p/12D3KooWEz1hMCs259vwG6dRAd1S5JGdjZYS4Z9SgzZbJ9w4Dzur',
                  '/ip4/86.111.48.51/tcp/9200/p2p/12D3KooWDdporXEEJut82yuWDrhWbP2KUFaoKgdFp35x8TteVMJx',
                  '/ip4/131.153.59.34/tcp/26882/p2p/12D3KooWB4GhP7dXsBnFjTpkgr3sCmwkKxcmDhkHKNxZ3CrGgHDR',
                  '/ip4/51.178.74.149/tcp/30002/p2p/12D3KooWS74Wqr1ZYLWafymznv4ib48DzDdmgZzVqMkM2ntNg5DZ',
                  '/ip4/176.103.222.99/tcp/9200/p2p/12D3KooWE6a36U3nJxwmPm7vZnnpA1XKh6GiVd9b2ukw5rTH4Usa',
                  '/ip4/88.198.49.137/tcp/46657/p2p/12D3KooWBsGC8isMUPqC56wkaLsq1cYgfkyybFXrsZMhjJBR7AHx',
                  '/ip4/65.109.16.194/tcp/40002/p2p/12D3KooWT2HEn17eHdkhVq7igY2uoLA2k7vT6ccosfKNM4fcHdQF',
                  '/ip4/64.25.109.153/tcp/9201/p2p/12D3KooWRLmPTaFotUh3zQXK8u6864rAfyzhxHAZeXDE1maVRNg8',
                  '/ip4/138.201.250.242/tcp/35102/p2p/12D3KooWJzgmDUt5v5XUSdbyb2AHnVfjQnCkKfevzuhmoK38CFNQ',
                  '/ip4/66.85.141.186/tcp/30002/p2p/12D3KooWQuEPfUoCDrqAZLG4Xzy1W4A5To5S5roghd3HsrncqpjC',
                  '/ip4/213.133.100.93/tcp/50002/p2p/12D3KooWBXCepnySWH6yM3qwNTNVqRBvGFcsCnsbkhBEaBHw6o6G',
                  '/ip4/148.251.246.233/tcp/36002/p2p/12D3KooWNuxBQs6ysWm3CrEecYn3sXxhmBBn3VCE3CzXVngJcUzb',
                  '/ip4/95.178.88.123/tcp/30004/p2p/12D3KooWHVusHM3mVxAefvcPrM7HAcrQWXrf32D3fLaTEsLmuS5c',
                  '/ip4/37.122.252.22/tcp/46692/p2p/12D3KooWGdwPPjtjVMkJrwWrDnLTedAYLAbjhBJV9YW6bwZh9edd',
                  '/ip4/195.14.6.2/tcp/9200/p2p/12D3KooWPPwqRfnrcQTnzw9Hgy3ryaaKx8zSKGJWoHNFKo2H5ZpE',
                  '/ip4/51.178.76.217/tcp/30002/p2p/12D3KooWKTvsowgyv3WRTVm2dvEBtxpKsshWKtKJmGriGDPdzRBM',
                  '/ip4/95.216.37.80/tcp/40002/p2p/12D3KooWLFCD3BzJ472WT2oYhmKNpXWLFsVTugD5VeuWtQNo4irG',
                  '/ip4/195.14.6.187/tcp/9200/p2p/12D3KooWALMakdAtrHbEHCMKXVaKuUqucYYRo9vXUQavjDj65eQQ',
                  '/ip4/178.63.93.41/tcp/35002/p2p/12D3KooWG3FhE4wPgnsWiFMJAymeAGZAwdUjG6uL2mS8nYtzDKWU',
                  '/ip4/131.153.164.23/tcp/20103/p2p/12D3KooWLZ8qr2rUZKhMzj3kEFCSfEaSM7m9gKkexQ9hNLh3J42p',
                  '/ip4/146.59.149.28/tcp/30002/p2p/12D3KooWEvfS5EdnpcC8etv8eiE3oSkhWid2FEXb5oAisZT3AJyo',
                  '/ip4/135.181.1.160/tcp/10002/p2p/12D3KooWK1mkdF77pp3CxK99uR1LfZuUngkgpZ6nEKPHMuk9V1FS',
                  '/ip4/65.108.68.213/tcp/9200/p2p/12D3KooWPqazid4Nk9D9QktTG9foxAzNMrEqgYW9c2dHjvoZUyWp',
                  '/ip4/131.153.243.138/tcp/9200/p2p/12D3KooWA3nyoxC1f7vognuXFBu4sq5UMuhES3mvkcinSx6xeFTF',
                  '/ip4/131.153.243.142/tcp/9200/p2p/12D3KooWScwCWrbrFLPyQA1eaaCXYGD9fzib8kn7gqg2w7Ssg8d1',
                  '/ip4/131.153.243.139/tcp/9200/p2p/12D3KooWNZjKuCn9c8YfcKxocBSy5hX6hCXCfYqdMCCQXXJbqeRd',
                  '/ip4/131.153.243.140/tcp/9200/p2p/12D3KooWJ38Acmrpu78zyhWMquAgjs5e4j9CoSQvJ6Ug2mDLRSLc',
                  '/ip4/80.239.221.211/tcp/9200/p2p/12D3KooWKA7XdfTSMukLU4fz2TvfiJ46gETcGqRCgkopKkyRuRfL',
                  '/ip4/15.235.13.113/tcp/9200/p2p/12D3KooWQZhsj6jWVRBPN2zdYPGXRPYDuuhimNd8CxEz6VeebhVP',
                  '/ip4/51.77.20.160/tcp/9200/p2p/12D3KooWH5wGxWj32yiTHXKn3B8zvrBwtmKeT8PGKc9PZLzMfjK4',
                  '/ip4/51.91.219.40/tcp/9200/p2p/12D3KooWF4sLYnqbWpwrndhaDRbuX4SDo1ynUuCZNrmKsy8JANbS',
                  '/ip4/15.235.14.3/tcp/9200/p2p/12D3KooWA7Et8aaymhK93jtTfNbA9fwd8kH5CLzX6Vb98Axf19LL',
                  '/ip4/157.90.89.253/tcp/9200/p2p/12D3KooWH6xTgP5rNRNKza4GD4S37btCwJzbrddLjrc4GprxpqbH',
                  '/ip4/131.153.241.90/tcp/9200/p2p/12D3KooWNG3fPsJWk2JGZ3tXZ4wShgdTZhHyKnjBRjRF9vMKCbBp',
                  '/ip4/89.212.17.232/tcp/9200/p2p/12D3KooWPcz11AarnbjJaJyxz1y5C9nbVfVuJJqqbvFTrZ5RXRko',
                  '/ip4/66.165.251.58/tcp/9200/p2p/12D3KooWC4d9iz2mLFm6zfCYTBt88rN5p92JuQzwf5yG5LuD5Ktt',
                  '/ip4/193.201.82.155/tcp/29201/p2p/12D3KooWRCm8zD6rhvHmJzssU4B4ssUAwdGHT9XMx38Sfqe3TgYm',
                  '/ip4/35.247.167.184/tcp/9200/p2p/12D3KooWQix9H8fWuhFnGHVKUyJys7t1PEzNPVvTJTwQZSEiTyCJ',
                  '/ip4/15.235.13.140/tcp/9200/p2p/12D3KooWGsdYr76sPeBj5ctQtExdmKDHYkNNXTLzX7W2mrKEHZwr',
                  '/ip4/15.235.55.180/tcp/9200/p2p/12D3KooWHy3u8Q5ngRTyRoqprwju9bCfwePzY2frYwAofzPThpg9',
                  '/ip4/15.235.66.157/tcp/9200/p2p/12D3KooWAy5pSePt6MJ1aJ4SqtXsfMjpWMhawYNTn1gmwJsRn2Zc',
                  '/ip4/65.109.23.81/tcp/9200/p2p/12D3KooWSyaGh3PZScCVDZKteMTEszm4GXPBP2Fv8k5QfTLUvbhF',
                  '/ip4/15.235.14.46/tcp/9200/p2p/12D3KooWNVavn4q4hJ9y4LEfsfF2w75fZn3C77Gpup2B5TN37VEs',
                  '/ip4/74.118.139.149/tcp/30002/p2p/12D3KooWPbvwm5SvjmYm4ghavhN3LHT4AV9MGeyPdUUxFqwjhwcC' ],
               status: 0,
               latest_round: 15157280,
               latest_height: 24134099,
               active_version: { major: 11 },
               executor_roles: null,
               scheduler_rank: '18446744073709551615' },
            components:
             [ { kind: 'ronl', version: { major: 10 } },
               { kind: 'ronl', version: { major: 11 } } ],
            descriptor:
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
            latest_hash:
             'oasis1qqkppfcmj7akzpq6fw2saa5vclaf7xf7zycf07nj or 6e2ffe7a465eac8c92d05165b4febda6a7779f95a34888fdd0e2050c370eb12a',
            latest_time: 1744596362,
            provisioner:
             'composite{none: load-balancer[4]/sandbox, sgx: load-balancer[4]/sgx, tdx: load-balancer[4]/tdx-qemu}',
            genesis_hash:
             'oasis1qpajqtw76yzwng42ng6v7gvh90j707edhqhrcp6y or 602632dba1fe37719925835a0e30e155668addf9cf91307d14b08c1362f38c80',
            latest_round: 15157280,
            genesis_round: 7875129,
            latest_state_root:
             { ns:
                'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
               hash:
                'oasis1qp3acdts7q58xlferxk9qkma0g5v4fnqesq2vezp or ffa8eefbbc7d1828103c60ca79ebe5a02d5dbac4de796d7f5196e6ccd110081b',
               version: 15157280,
               root_type: 1 },
            last_retained_hash:
             'oasis1qpajqtw76yzwng42ng6v7gvh90j707edhqhrcp6y or 602632dba1fe37719925835a0e30e155668addf9cf91307d14b08c1362f38c80',
            last_retained_round: 7875129 } ],
        [ 'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
          { indexer: { status: 'indexing', last_round: 8434658 },
            storage: { status: 'syncing rounds', last_finalized_round: 8434658 },
            committee:
             { host: { versions: [ { minor: 9, patch: 2 } ] },
               peers:
                [ '/ip4/131.153.164.15/tcp/30002/p2p/12D3KooWCixcEb3YyZqQnANYX9YLVuAxQ2tNaRapQuYh9TeTTFZV',
                  '/ip4/66.85.154.218/tcp/30002/p2p/12D3KooWRRbEUSjnw3FwLm368wd8pArGRG6YCYMhAdA8oWG1CgkT',
                  '/ip4/131.153.59.34/tcp/26882/p2p/12D3KooWB4GhP7dXsBnFjTpkgr3sCmwkKxcmDhkHKNxZ3CrGgHDR',
                  '/ip4/66.85.137.130/tcp/30002/p2p/12D3KooWGyc42EBdUXhJ6weUG7KHdFZAkjvFmSKm1dZQwqo5Zpj4',
                  '/ip4/23.88.38.81/tcp/30002/p2p/12D3KooWP91xmGiYaq9sExMqdLvQEmddcoqt81ZmQPcujocvx4UC',
                  '/ip4/51.178.74.149/tcp/30002/p2p/12D3KooWS74Wqr1ZYLWafymznv4ib48DzDdmgZzVqMkM2ntNg5DZ',
                  '/ip4/51.77.21.63/tcp/30002/p2p/12D3KooWGZwXa15APjfuQ6RJeTm2EJAu2N4z8DTBL2xsHga2cdnN',
                  '/ip4/94.130.25.75/tcp/30002/p2p/12D3KooWHbqD2U9xEtCCMaSMjwq8Pt6wghvSZkmitDrk1z4juZgK',
                  '/ip4/66.85.141.186/tcp/30002/p2p/12D3KooWQuEPfUoCDrqAZLG4Xzy1W4A5To5S5roghd3HsrncqpjC',
                  '/ip4/2.56.188.205/tcp/9200/p2p/12D3KooWFDWBBH6nskRDFEjvRghvp5Tu3DQ2ZStsBtjyS3wmpXcV',
                  '/ip4/51.178.76.217/tcp/30002/p2p/12D3KooWKTvsowgyv3WRTVm2dvEBtxpKsshWKtKJmGriGDPdzRBM',
                  '/ip4/185.107.80.40/tcp/30002/p2p/12D3KooWHHG9fq9bLSKSdtQXBtqMJj4K3zyDCUJU9PvEKj7CBFbw',
                  '/ip4/146.59.149.28/tcp/30002/p2p/12D3KooWEvfS5EdnpcC8etv8eiE3oSkhWid2FEXb5oAisZT3AJyo',
                  '/ip4/141.95.34.239/tcp/30002/p2p/12D3KooWQaNYjegtZyFtyrRNCF1yxB3sgGtBgY8asgEpFEcXPJiS',
                  '/ip4/174.138.162.2/tcp/30002/p2p/12D3KooWAYVr6x3xpw7PCywXwbsneDc4eAN9SiaT4TndL61xE64J',
                  '/ip4/131.153.99.10/tcp/30002/p2p/12D3KooWKPMS72iRgPDWczMVzKyYa3DSZmc771XDNXnMWVPnjfmJ',
                  '/ip4/66.85.156.122/tcp/30002/p2p/12D3KooWN2wNNar6xWQuRem6QGaWie5u3StWWmdZm4xeZ4CFKADE',
                  '/ip4/131.153.158.97/tcp/30002/p2p/12D3KooWSnJtBMWpaYmwZgkHQApefXzuQhUxRencTzwyuXzuWpFf',
                  '/ip4/131.153.154.13/tcp/30002/p2p/12D3KooWGfyNBqnppXZ1jo8zRcav3uKunj85HGbEDqj67d72jbJv',
                  '/ip4/131.153.57.226/tcp/30002/p2p/12D3KooWDzq86WGEqEHcVCYfhukxuYKPq7cjrCxwsYg5euBpTcfi',
                  '/ip4/95.178.88.123/tcp/30005/p2p/12D3KooWQEJFrJRi82k1V1Qo4VNYXTbm15X2KPjXVngP8MvJvuFy',
                  '/ip4/51.161.119.139/tcp/30002/p2p/12D3KooWSJ4WnjUY76cfiifujynaxD15QnCdQfzxuJsyqzat24rp',
                  '/ip4/159.69.52.65/tcp/30002/p2p/12D3KooWPpiyYnbVsjKopU6fd6jdgrQuwZKYmdCHZV2YykJBdCQe',
                  '/ip4/131.153.158.241/tcp/20103/p2p/12D3KooWL5r52yBoHmRL7gesjUZMM8QSf8Yi1iWLNh6fACEsoJQR',
                  '/ip4/131.153.243.139/tcp/9200/p2p/12D3KooWNZjKuCn9c8YfcKxocBSy5hX6hCXCfYqdMCCQXXJbqeRd',
                  '/ip4/131.153.243.140/tcp/9200/p2p/12D3KooWJ38Acmrpu78zyhWMquAgjs5e4j9CoSQvJ6Ug2mDLRSLc',
                  '/ip4/15.235.13.113/tcp/9200/p2p/12D3KooWQZhsj6jWVRBPN2zdYPGXRPYDuuhimNd8CxEz6VeebhVP',
                  '/ip4/51.77.20.160/tcp/9200/p2p/12D3KooWH5wGxWj32yiTHXKn3B8zvrBwtmKeT8PGKc9PZLzMfjK4',
                  '/ip4/51.91.219.40/tcp/9200/p2p/12D3KooWF4sLYnqbWpwrndhaDRbuX4SDo1ynUuCZNrmKsy8JANbS',
                  '/ip4/15.235.14.3/tcp/9200/p2p/12D3KooWA7Et8aaymhK93jtTfNbA9fwd8kH5CLzX6Vb98Axf19LL',
                  '/ip4/131.153.241.90/tcp/9200/p2p/12D3KooWNG3fPsJWk2JGZ3tXZ4wShgdTZhHyKnjBRjRF9vMKCbBp',
                  '/ip4/89.212.17.232/tcp/9200/p2p/12D3KooWPcz11AarnbjJaJyxz1y5C9nbVfVuJJqqbvFTrZ5RXRko',
                  '/ip4/131.153.158.195/tcp/20103/p2p/12D3KooWJvttMywMUmxoNPzeE7NDRGSN56qQCNSoZmd95AEbfZhq',
                  '/ip4/15.235.13.140/tcp/9200/p2p/12D3KooWGsdYr76sPeBj5ctQtExdmKDHYkNNXTLzX7W2mrKEHZwr',
                  '/ip4/15.235.55.180/tcp/9200/p2p/12D3KooWHy3u8Q5ngRTyRoqprwju9bCfwePzY2frYwAofzPThpg9',
                  '/ip4/131.153.158.147/tcp/20103/p2p/12D3KooW9vQWrHSZZn3mKGZkFgCsP5XPHGnszr4A54etg67tR5YK',
                  '/ip4/15.235.66.157/tcp/9200/p2p/12D3KooWAy5pSePt6MJ1aJ4SqtXsfMjpWMhawYNTn1gmwJsRn2Zc',
                  '/ip4/131.153.158.115/tcp/20103/p2p/12D3KooWPQbAYgnij8kwBZbDH2ArZV8Ch9vgHSP8bCKMph1S6FMm',
                  '/ip4/65.109.23.81/tcp/9200/p2p/12D3KooWSyaGh3PZScCVDZKteMTEszm4GXPBP2Fv8k5QfTLUvbhF',
                  '/ip4/131.153.164.11/tcp/20103/p2p/12D3KooWA6en49Pg7fwLgZMUZGwURNyB98yDAJh9j74vV74kdD7V',
                  '/ip4/15.235.14.46/tcp/9200/p2p/12D3KooWNVavn4q4hJ9y4LEfsfF2w75fZn3C77Gpup2B5TN37VEs',
                  '/ip4/131.153.158.203/tcp/20103/p2p/12D3KooWPo5FYGDQQikFhrFfzHDw2XPKAfhX5NAtp4HePHFgKQQ2',
                  '/ip4/131.153.158.145/tcp/20103/p2p/12D3KooWJebHaWqqsDXm38apaWT4RX83N119L8mMHh7GemZtKzQe',
                  '/ip4/131.153.243.138/tcp/9200/p2p/12D3KooWA3nyoxC1f7vognuXFBu4sq5UMuhES3mvkcinSx6xeFTF',
                  '/ip4/131.153.243.142/tcp/9200/p2p/12D3KooWScwCWrbrFLPyQA1eaaCXYGD9fzib8kn7gqg2w7Ssg8d1' ],
               status: 0,
               latest_round: 8434658,
               latest_height: 24134099,
               active_version: { minor: 9, patch: 2 },
               executor_roles: null,
               scheduler_rank: '18446744073709551615' },
            components: [ { kind: 'ronl', version: { minor: 9, patch: 2 } } ],
            descriptor:
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
            latest_hash:
             'oasis1qqcdvvjy4u98q98jk6v8g0s9xm447sp29szt0jyw or 5932a70a1a59c90b06f6fe97bb6c76821046aba165aace0ec23a47c3313fc202',
            latest_time: 1744596362,
            provisioner:
             'composite{none: load-balancer[4]/sandbox, sgx: load-balancer[4]/sgx, tdx: load-balancer[4]/tdx-qemu}',
            genesis_hash:
             'oasis1qp2mgvc6y7aj3faxusk0djlfayguhgxl7y8qrw8f or 151309e2bee057eff11500d83834c59edaa0defdceabddf8d27bcf8dbbf11aa3',
            latest_round: 8434658,
            genesis_round: 1357486,
            latest_state_root:
             { ns:
                'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
               hash:
                'oasis1qpxjugc2779vtcuq665jfr5mhpk2ulwwhq04zmvr or 528d6e5040944a55504594e6d0368390cb05423b6972684af01afa1bebed183a',
               version: 8434658,
               root_type: 1 },
            last_retained_hash:
             'oasis1qp2mgvc6y7aj3faxusk0djlfayguhgxl7y8qrw8f or 151309e2bee057eff11500d83834c59edaa0defdceabddf8d27bcf8dbbf11aa3',
            last_retained_round: 1357486 } ] ] },
  consensus:
   { p2p:
      { peers:
         [ '9f2d190b413492a7d7e32ef8b0b36f60f2969ef0@142.132.131.249:20656',
           '5fb93f5ac86efeddc35062f7f3e789f1a0cd39d7@142.132.194.124:19090',
           '07a9aa5c5a43e719bd9b467c7eff593c2d26e83c@95.178.88.123:26659',
           '9fb0071d9630e2e1592e912d52565933ee292549@65.108.201.32:26656',
           'be0ae3a49a289cb23aa6c5e457365a1923a396d5@95.216.37.80:26656',
           'bbfac1c724eb4e3f7787b6b2db96f99fda5d252d@65.108.6.54:29656',
           '18ed175a50bd1eee4990548e13638db6ef496f88@95.217.85.213:46656',
           '140a7c1411ff0de81c8fa6744f31fdf654063eaa@135.181.22.224:26656',
           '66eac7dcac0bc7b1d4805df9d3754c0382733765@51.81.57.69:26656',
           '1520ced3b1f1445988a72cbeda48a3d748860a62@70.165.57.67:26656',
           'c06a9e8cc5e33997d4d224418d9e936887fa5ed3@185.107.80.40:26656',
           '078adc90344d7c7c261625ea4a3d5f223d4618fd@146.59.85.227:26656',
           'a51cda7babb0994b52fe70ff658915ebdd5f167a@93.115.25.138:42656',
           '132111486911a7eca4eca01052209504fb0fac34@65.108.67.185:26656',
           'f82cb57b6960ce65b6e509e863d5ef312477416e@131.153.154.13:46656',
           '30e911171e0fc34b930243434bd495da63dcd45c@131.153.231.155:26656',
           'dd0d0ae872577c53a2a5e5886d2df1dec08e3311@65.109.20.222:26656',
           'bcaeeb8d0ec7d16b8f9e62a31031516cfacb8399@131.153.243.93:26656',
           '3cc19a3fde93e22ce954c223aaf54c5e2e84cd32@142.132.213.82:26656',
           '9eb534ec9c204daac63cbfc17707976c46bc47c2@134.119.191.179:56656' ],
        peer_id: '2312e6179582cbf14db0e13b9d822f02fad02860',
        pub_key:
         'oasis1qqefys4d5s3kzeenvdnqqs24df8yuyaehc2592h3 or 9e61e8dd39ff61a38add50eb7a6257a355238efd4ec6d2ae446cd61706489562',
        addresses:
         [ { id:
              'oasis1qqefys4d5s3kzeenvdnqqs24df8yuyaehc2592h3 or 9e61e8dd39ff61a38add50eb7a6257a355238efd4ec6d2ae446cd61706489562',
             address: { IP: '281,473.568669698', Port: 26656, Zone: '' } } ] },
     status: 0,
     backend: 'tendermint',
     version: { major: 7 },
     features: 3,
     latest_hash:
      'oasis1qz3ftd0x8w6n64hqyapclyuphaqmlpqu6qa876rn or 4341fc8d412cfa311e0070ce8e277db2f4712b200ad63a6f526f10054d4cdce7',
     latest_time: 1744596362,
     genesis_hash:
      'oasis1qzak9zd8rnvxymtkc5rsh90d8c84nzxnc5n0zh5f or 7670c86852c214f4e2b5ad571f4c2c344c630afdb409f7a5a3adce5a85240f31',
     is_validator: false,
     latest_epoch: 40210,
     chain_context: 'bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4a0703a178e6e55',
     latest_height: 24134099,
     genesis_height: 16817956,
     latest_block_size: 33356,
     latest_state_root:
      { ns:
         'oasis1qpg3hpf3vtuueyl8f8jzgsy8clqqw6qgxgurwfy5 or 0000000000000000000000000000000000000000000000000000000000000000 maybe Cipher Testnet',
        hash:
         'oasis1qp90a2t3js8lw8vsmu0v7rttg5cn4llatsxhj4u0 or 143ca96fb423d3054376528cc99356de2deaef3f6566adfae1a0d7f50675e895',
        version: 24134098,
        root_type: 1 },
     last_retained_hash:
      'oasis1qzak9zd8rnvxymtkc5rsh90d8c84nzxnc5n0zh5f or 7670c86852c214f4e2b5ad571f4c2c344c630afdb409f7a5a3adce5a85240f31',
     last_retained_height: 16817956 },
  light_client:
   { peer_ids:
      [ '12D3KooWPQbAYgnij8kwBZbDH2ArZV8Ch9vgHSP8bCKMph1S6FMm',
        '12D3KooWDS9tESF1LoWjAAWkEa4bnjRuxpHjaz5T5VTKjN7BfGe2',
        '12D3KooWScwCWrbrFLPyQA1eaaCXYGD9fzib8kn7gqg2w7Ssg8d1' ],
     latest_hash:
      'oasis1qpg3hpf3vtuueyl8f8jzgsy8clqqw6qgxgurwfy5 or 0000000000000000000000000000000000000000000000000000000000000000 maybe Cipher Testnet',
     latest_time: null,
     oldest_hash:
      'oasis1qpg3hpf3vtuueyl8f8jzgsy8clqqw6qgxgurwfy5 or 0000000000000000000000000000000000000000000000000000000000000000 maybe Cipher Testnet',
     oldest_time: null,
     latest_height: 0,
     oldest_height: 0 },
  registration:
   { descriptor:
      { v: 3,
        id:
         'oasis1qp0da5afm2yfn0ce53q52cedyfvu34sxqctn2qle or 772e8f9bb274c2e78ac5b9bc71ad56831d1b0edf8d4368908eaa0c153e44c58f',
        p2p:
         { id:
            'oasis1qqefys4d5s3kzeenvdnqqs24df8yuyaehc2592h3 or 9e61e8dd39ff61a38add50eb7a6257a355238efd4ec6d2ae446cd61706489562',
           addresses: null },
        tls:
         { pub_key:
            'oasis1qq2m9ke7ye3wh73wrkh4da09glq8xf29zg4ux3p2 or 3b18ce1eeba1b86880f2d102ad506bd9460c50dfbd994b828b62f295bf517632' },
        vrf:
         { id:
            'oasis1qqmmg9lup8udhsd2ayhx8y27r36ndqwt2y5xap22 or 8b6f4b525389a2536968a3062fbfc52a028792ee4e784bb803bd86c7ffd67ed2' },
        roles: 2,
        runtimes:
         [ { id:
              'oasis1qq5hlgeyv3as2dkeez0alhvpjt7h4kqsysfjf2jp or 000000000000000000000000000000000000000000000000f80306c9858e7279 Sapphire Mainnet',
             version: { minor: 9, patch: 2 },
             extra_info: null,
             capabilities:
              { tee:
                 { rak:
                    'oasis1qr3mwnz8m40ye765z3j0lqc5cklgcw8rnglkc029 or a523ff88391d2281dc6d9daac7bb17c0fb8cc35acc1e270a00f512efcc11c51f',
                   rek:
                    'oasis1qzxswxlh7gg7upk4jg28tp3wxexkj5rjavdmq8pd or 29dc50ca6b67f5344e5eb7945f1bd71218f4c13afc6832ce938465ba66fd4156',
                   hardware: 1,
                   attestation:
                    { as_CBOR:
                       { v: 1,
                         quote:
                          { pcs:
                             { tcb:
                                { certs:
                                   '2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d494943697a4343416a4b674177494241674955666a6943316674564b5570415359354668415070464a473939465577436759494b6f5a497a6a3045417749770a614445614d4267474131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e760a636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a0a42674e5642415954416c56544d423458445445344d4455794d5445774e5441784d466f58445449314d4455794d5445774e5441784d466f77624445654d4277470a4131554541777756535735305a577767553064594946524451694254615764756157356e4d526f77474159445651514b4442464a626e526c6243424462334a770a62334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e424d517377435159440a5651514745774a56557a425a4d424d4742797147534d34394167454743437147534d3439417745484130494142454e464738787a79645752664b3932626d47760a502b6d4168393150457956374a683646474a64356e644539614248375233453441377562726c682f7a4e3343347876706f6f75476c69724d62612b57326c6a750a7970616a6762557767624977487759445652306a42426777466f4155496d554d316c71644e496e7a6737535655723951477a6b6e4271777755675944565230660a42457377535442486f45576751345a426148523063484d364c79396a5a584a3061575a70593246305a584d7564484a316333526c5a484e6c636e5a705932567a0a4c6d6c75644756734c6d4e766253394a626e526c62464e4857464a76623352445153356b5a584977485159445652304f42425945464834346774583756536c4b0a51456d4f5259514436525352766652564d41344741315564447745422f775145417749477744414d42674e5648524d4241663845416a41414d416f47434371470a534d343942414d43413063414d4551434942394338774f414e2f496d784474474143563234364b63716a61675a4f52306b7963747942727347474a564169416a0a667462724e47734755385948323131645269594e6f50507531395a702f7a65384a6d68756a42306f42773d3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436a7a4343416a53674177494241674955496d554d316c71644e496e7a6737535655723951477a6b6e42717777436759494b6f5a497a6a3045417749770a614445614d4267474131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e760a636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a0a42674e5642415954416c56544d423458445445344d4455794d5445774e4455784d466f58445451354d54497a4d54497a4e546b314f566f77614445614d4267470a4131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e76636e4276636d46300a615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a42674e56424159540a416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a3044415163445167414543366e45774d4449595a4f6a2f69505773437a61454b69370a314f694f534c52466857476a626e42564a66566e6b59347533496a6b4459594c304d784f346d717379596a6c42616c54565978465032734a424b357a6c4b4f420a757a43427544416642674e5648534d4547444157674251695a517a575770303069664f44744a5653763141624f5363477244425342674e5648523845537a424a0a4d45656752614244686b466f64485277637a6f764c324e6c636e52705a6d6c6a5958526c63793530636e567a6447566b63325679646d6c6a5a584d75615735300a5a577775593239744c306c756447567355306459556d397664454e424c6d526c636a416442674e564851344546675155496d554d316c71644e496e7a673753560a55723951477a6b6e4271777744675944565230504151482f42415144416745474d42494741315564457745422f7751494d4159424166384341514577436759490a4b6f5a497a6a3045417749445351417752674968414f572f35516b522b533943695344634e6f6f774c7550524c735747662f59693747535839344267775477670a41694541344a306c72486f4d732b586f356f2f7358364f39515778485241765a55474f6452513763767152586171493d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a',
                                  qe_id:
                                   { signature:
                                      '3b9cd0eeafd0f7e33aebf51b983ca18a60dbeb9f6e6bc0c7b0c1135a000463217fc0147be10e8b34ae7886788fdc97a85d279b849b8826150729312d76f0c872',
                                     enclave_identity:
                                      '7b226964223a225145222c2276657273696f6e223a322c22697373756544617465223a22323032352d30342d31305430363a34353a30325a222c226e657874557064617465223a22323032352d30352d31305430363a34353a30325a222c227463624576616c756174696f6e446174614e756d626572223a31382c226d69736373656c656374223a223030303030303030222c226d69736373656c6563744d61736b223a224646464646464646222c2261747472696275746573223a223131303030303030303030303030303030303030303030303030303030303030222c22617474726962757465734d61736b223a224642464646464646464646464646464630303030303030303030303030303030222c226d727369676e6572223a2238433446353737354437393635303345393631333746373743363841383239413030353641433844454437303134304230383142303934343930433537424646222c2269737670726f646964223a312c227463624c6576656c73223a5b7b22746362223a7b2269737673766e223a387d2c2274636244617465223a22323032342d31312d31335430303a30303a30305a222c22746362537461747573223a225570546f44617465227d2c7b22746362223a7b2269737673766e223a367d2c2274636244617465223a22323032312d31312d31305430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b2269737673766e223a357d2c2274636244617465223a22323032302d31312d31315430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b2269737673766e223a347d2c2274636244617465223a22323031392d31312d31335430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030333334222c22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b2269737673766e223a327d2c2274636244617465223a22323031392d30352d31355430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323139222c22494e54454c2d53412d3030323933222c22494e54454c2d53412d3030333334222c22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b2269737673766e223a317d2c2274636244617465223a22323031382d30382d31355430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323032222c22494e54454c2d53412d3030323139222c22494e54454c2d53412d3030323933222c22494e54454c2d53412d3030333334222c22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030363135225d7d5d7d' },
                                  tcb_info:
                                   { tcb_info:
                                      '7b226964223a22534758222c2276657273696f6e223a332c22697373756544617465223a22323032352d30342d31305430373a31313a32385a222c226e657874557064617465223a22323032352d30352d31305430373a31313a32385a222c22666d737063223a22303061303637313130303030222c227063654964223a2230303030222c2274636254797065223a302c227463624576616c756174696f6e446174614e756d626572223a31382c227463624c6576656c73223a5b7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a31317d2c7b2273766e223a31317d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a31327d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032342d31312d31335430303a30303a30305a222c22746362537461747573223a22535748617264656e696e674e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a31317d2c7b2273766e223a31317d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032342d31312d31335430303a30303a30305a222c22746362537461747573223a22436f6e66696775726174696f6e416e64535748617264656e696e674e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a31307d2c7b2273766e223a31307d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a31327d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032332d30322d31355430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a31307d2c7b2273766e223a31307d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032332d30322d31355430303a30303a30305a222c22746362537461747573223a224f75744f6644617465436f6e66696775726174696f6e4e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a397d2c7b2273766e223a397d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a31327d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032322d31312d30395430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a397d2c7b2273766e223a397d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032322d31312d30395430303a30303a30305a222c22746362537461747573223a224f75744f6644617465436f6e66696775726174696f6e4e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a357d2c7b2273766e223a357d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a347d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31317d2c2274636244617465223a22323032312d31312d31305430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030363134222c22494e54454c2d53412d3030363137222c22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a357d2c7b2273766e223a357d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a347d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31307d2c2274636244617465223a22323032302d31312d31315430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363134222c22494e54454c2d53412d3030363137222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a357d2c7b2273766e223a357d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31317d2c2274636244617465223a22323032312d31312d31305430303a30303a30305a222c22746362537461747573223a224f75744f6644617465436f6e66696775726174696f6e4e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363134222c22494e54454c2d53412d3030363137222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a357d2c7b2273766e223a357d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31307d2c2274636244617465223a22323032302d31312d31315430303a30303a30305a222c22746362537461747573223a224f75744f6644617465436f6e66696775726174696f6e4e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363134222c22494e54454c2d53412d3030363137222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a357d2c7b2273766e223a357d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a357d2c2274636244617465223a22323031382d30312d30345430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030313036222c22494e54454c2d53412d3030313135222c22494e54454c2d53412d3030313335222c22494e54454c2d53412d3030323033222c22494e54454c2d53412d3030323230222c22494e54454c2d53412d3030323333222c22494e54454c2d53412d3030323730222c22494e54454c2d53412d3030323933222c22494e54454c2d53412d3030333230222c22494e54454c2d53412d3030333239222c22494e54454c2d53412d3030333831222c22494e54454c2d53412d3030333839222c22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363134222c22494e54454c2d53412d3030363137222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d5d7d',
                                     signature:
                                      '582246a4343cad808314839c2d95bed41a36de4713c3fa3081338af24ec72eeecb1709b6413263189561d00741f0d1db9d05b13f1f2c7407e1a06e9445f1e1dd' } },
                               quote:
                                '03000200000000000a000f00939a7233f79c4ca9940a0db3957f060769335a670a02a6e28f0a98bf8a07248e000000000c0c0218ffff0c000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000300000000000000c87517dc3bf8f66fc6556789bac6494169274ee738b83c78fed35789aa3b577100000000000000000000000000000000000000000000000000000000000000007d0a3b32e133706ed6757ae9b3a2f4b3ed51ee88ac22a9f86c7b88f3b1d95fe80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009386f2c62d0a9614aa344dc318164397febc8eea47cd12e8077dde4cb2b195d8e70353b7e8824bb033691a61b918430698756ca81ade36d2a14c30a8cc8db2d4410000094c9ca593d13bbd7d23e56344f7217d09148727d6aefd7bd673b091038a94a1703bd7f7472b98f747495d0b391e6c2082cf2f63196598095414f77c22647931a781887433fa45c2247e8fb9b6a834af1410129122eb2ee227ad7910cdc2e9d383701973dd5e584bf5ba5b8cea43e86647cb3990c215e9b4913332fb92cd10db40c0c0218ffff0c00000000000000000000000000000000000000000000000000000000000000000000000000000000001500000000000000e70000000000000096b347a64e5a045e27369c26e6dcda51fd7c850e9b3a3a79e718f43261dee1e400000000000000000000000000000000000000000000000000000000000000008c4f5775d796503e96137f77c68a829a0056ac8ded70140b081b094490c57bff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009ce3b5a8398e9b39ef16d4f399edf14446d6bc57e611637adcc4c094371d6d570000000000000000000000000000000000000000000000000000000000000000ad844f288cd25445c65c6eb74ad6caccf32b2be626530b02ea3a4d840f367e51300400d06ce463cd8137217eeb43758fdf5b4929f910910d0626bd16c10061992000000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f0500dc0d00002d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949456a6a4343424453674177494241674956414f5a54544466523265453172614546506a315a6d556f6a634e4a6e4d416f4743437147534d343942414d430a4d484578497a416842674e5642414d4d476b6c756447567349464e48574342515130736755484a765932567a6332397949454e424d526f77474159445651514b0a4442464a626e526c6243424462334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e560a4241674d416b4e424d517377435159445651514745774a56557a4165467730794e5441304d4463794d5451774d6a68614677307a4d6a41304d4463794d5451770a4d6a68614d484178496a416742674e5642414d4d47556c756447567349464e4857434251513073675132567964476c6d61574e6864475578476a415942674e560a42416f4d45556c756447567349454e76636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b470a413155454341774351304578437a414a42674e5642415954416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a304441516344516741450a576f4772687230567a66344a50634c507a342b7963395256366967536636423763476377794c6761736c377a526a504934486f68392b4c3436716234776e49320a74496555595a7543522f46354144713635514c4b664b4f434171677767674b6b4d42384741315564497751594d426141464e446f71747031312f6b75535265590a504873555a644456386c6c4e4d477747413155644877526c4d474d77596142666f463247573268306448427a4f693876595842704c6e527964584e305a57527a0a5a584a3261574e6c63793570626e526c6243356a62323076633264344c324e6c636e52705a6d6c6a5958527062323476646a517663474e7259334a7350324e680a5058427962324e6c63334e7663695a6c626d4e765a476c755a7a316b5a584977485159445652304f4242594546484e3139674376676d2f6b53634a51724d78570a7366784f496468554d41344741315564447745422f775145417749477744414d42674e5648524d4241663845416a41414d4949423141594a4b6f5a496876684e0a415130424249494278544343416345774867594b4b6f5a496876684e4151304241515151514a67434b634c73454753756a61794c62744161377a4343415751470a43697147534962345451454e41514977676746554d42414743797147534962345451454e415149424167454c4d42414743797147534962345451454e415149430a4167454c4d42414743797147534962345451454e41514944416745434d42414743797147534962345451454e41514945416745434d42454743797147534962340a5451454e41514946416749412f7a415142677371686b69472b45304244514543426749424154415142677371686b69472b4530424451454342774942444441510a42677371686b69472b45304244514543434149424144415142677371686b69472b45304244514543435149424144415142677371686b69472b453042445145430a436749424144415142677371686b69472b45304244514543437749424144415142677371686b69472b45304244514543444149424144415142677371686b69470a2b45304244514543445149424144415142677371686b69472b45304244514543446749424144415142677371686b69472b4530424451454344774942414441510a42677371686b69472b45304244514543454149424144415142677371686b69472b45304244514543455149424454416642677371686b69472b453042445145430a4567515143777343417638424441414141414141414141414144415142676f71686b69472b45304244514544424149414144415542676f71686b69472b4530420a44514545424159416f476352414141774477594b4b6f5a496876684e4151304242516f424144414b42676771686b6a4f5051514441674e4941444246416942740a7837714f584634626f5a564251762f7a6e43686c746c3563537676336641672f734366595955716363514968414d45666c3748532f6c4745444b73714971704a0a696758303253732f4545483378664567326e36494431382f0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436d444343416a36674177494241674956414e446f71747031312f6b7553526559504873555a644456386c6c4e4d416f4743437147534d343942414d430a4d476778476a415942674e5642414d4d45556c756447567349464e48574342536232393049454e424d526f77474159445651514b4442464a626e526c624342440a62334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e424d5173770a435159445651514745774a56557a4165467730784f4441314d6a45784d4455774d5442614677307a4d7a41314d6a45784d4455774d5442614d484578497a41680a42674e5642414d4d476b6c756447567349464e48574342515130736755484a765932567a6332397949454e424d526f77474159445651514b4442464a626e526c0a6243424462334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e420a4d517377435159445651514745774a56557a425a4d424d4742797147534d34394167454743437147534d34394177454841304941424c39712b4e4d7032494f670a74646c31626b2f75575a352b5447516d38614369387a373866732b664b435133642b75447a586e56544154325a68444369667949754a77764e33774e427039690a484253534d4a4d4a72424f6a6762737767626777487759445652306a42426777466f4155496d554d316c71644e496e7a6737535655723951477a6b6e427177770a556759445652306642457377535442486f45576751345a426148523063484d364c79396a5a584a3061575a70593246305a584d7564484a316333526c5a484e6c0a636e5a705932567a4c6d6c75644756734c6d4e766253394a626e526c62464e4857464a76623352445153356b5a584977485159445652304f42425945464e446f0a71747031312f6b7553526559504873555a644456386c6c4e4d41344741315564447745422f77514541774942426a415342674e5648524d4241663845434441470a4151482f416745414d416f4743437147534d343942414d43413067414d4555434951434a6754627456714f795a316d336a716941584d365159613672357357530a34792f4737793875494a4778647749675271507642534b7a7a516167424c517135733541373070646f6961524a387a2f3075447a344e675639316b3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436a7a4343416a53674177494241674955496d554d316c71644e496e7a6737535655723951477a6b6e42717777436759494b6f5a497a6a3045417749770a614445614d4267474131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e760a636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a0a42674e5642415954416c56544d423458445445344d4455794d5445774e4455784d466f58445451354d54497a4d54497a4e546b314f566f77614445614d4267470a4131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e76636e4276636d46300a615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a42674e56424159540a416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a3044415163445167414543366e45774d4449595a4f6a2f69505773437a61454b69370a314f694f534c52466857476a626e42564a66566e6b59347533496a6b4459594c304d784f346d717379596a6c42616c54565978465032734a424b357a6c4b4f420a757a43427544416642674e5648534d4547444157674251695a517a575770303069664f44744a5653763141624f5363477244425342674e5648523845537a424a0a4d45656752614244686b466f64485277637a6f764c324e6c636e52705a6d6c6a5958526c63793530636e567a6447566b63325679646d6c6a5a584d75615735300a5a577775593239744c306c756447567355306459556d397664454e424c6d526c636a416442674e564851344546675155496d554d316c71644e496e7a673753560a55723951477a6b6e4271777744675944565230504151482f42415144416745474d42494741315564457745422f7751494d4159424166384341514577436759490a4b6f5a497a6a3045417749445351417752674968414f572f35516b522b533943695344634e6f6f774c7550524c735747662f59693747535839344267775477670a41694541344a306c72486f4d732b586f356f2f7358364f39515778485241765a55474f6452513763767152586171493d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a00' } },
                         height: 24133030,
                         signature:
                          'f8008855985acdfbc14c8a9c3af237fe8a9e475f366c6211b5255bde091120557ea21aad59206f4396567d12dbf4b8885c85634f3a602763229dfb8f7d9b5c06' } } } } },
           { id:
              'oasis1qzul9pvufatqchu07n5shc42pe5dt7rylcu8pv86 or 000000000000000000000000000000000000000000000000e199119c992377cb Cipher Mainnet',
             version: { major: 3, minor: 2, patch: 2 },
             extra_info: null,
             capabilities:
              { tee:
                 { rak:
                    'oasis1qpj7j4a6l6hxayul60frlam2plnzf6jtfvrcltla or f4a292de5c1bb2838ed5dcb78e6dc65d74ae0cd07a85029a18f1bff03e5f67ed',
                   rek:
                    'oasis1qq6zjwzc0l28lwk5clpl259m7jepvzdcnsxc25c2 or facc7d0a259f3e12210c39283652c81b840ca4d23c8748cce5f127046655135e',
                   hardware: 1,
                   attestation:
                    { as_CBOR:
                       { v: 1,
                         quote:
                          { pcs:
                             { tcb:
                                { certs:
                                   '2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d494943697a4343416a4b674177494241674955666a6943316674564b5570415359354668415070464a473939465577436759494b6f5a497a6a3045417749770a614445614d4267474131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e760a636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a0a42674e5642415954416c56544d423458445445344d4455794d5445774e5441784d466f58445449314d4455794d5445774e5441784d466f77624445654d4277470a4131554541777756535735305a577767553064594946524451694254615764756157356e4d526f77474159445651514b4442464a626e526c6243424462334a770a62334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e424d517377435159440a5651514745774a56557a425a4d424d4742797147534d34394167454743437147534d3439417745484130494142454e464738787a79645752664b3932626d47760a502b6d4168393150457956374a683646474a64356e644539614248375233453441377562726c682f7a4e3343347876706f6f75476c69724d62612b57326c6a750a7970616a6762557767624977487759445652306a42426777466f4155496d554d316c71644e496e7a6737535655723951477a6b6e4271777755675944565230660a42457377535442486f45576751345a426148523063484d364c79396a5a584a3061575a70593246305a584d7564484a316333526c5a484e6c636e5a705932567a0a4c6d6c75644756734c6d4e766253394a626e526c62464e4857464a76623352445153356b5a584977485159445652304f42425945464834346774583756536c4b0a51456d4f5259514436525352766652564d41344741315564447745422f775145417749477744414d42674e5648524d4241663845416a41414d416f47434371470a534d343942414d43413063414d4551434942394338774f414e2f496d784474474143563234364b63716a61675a4f52306b7963747942727347474a564169416a0a667462724e47734755385948323131645269594e6f50507531395a702f7a65384a6d68756a42306f42773d3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436a7a4343416a53674177494241674955496d554d316c71644e496e7a6737535655723951477a6b6e42717777436759494b6f5a497a6a3045417749770a614445614d4267474131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e760a636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a0a42674e5642415954416c56544d423458445445344d4455794d5445774e4455784d466f58445451354d54497a4d54497a4e546b314f566f77614445614d4267470a4131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e76636e4276636d46300a615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a42674e56424159540a416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a3044415163445167414543366e45774d4449595a4f6a2f69505773437a61454b69370a314f694f534c52466857476a626e42564a66566e6b59347533496a6b4459594c304d784f346d717379596a6c42616c54565978465032734a424b357a6c4b4f420a757a43427544416642674e5648534d4547444157674251695a517a575770303069664f44744a5653763141624f5363477244425342674e5648523845537a424a0a4d45656752614244686b466f64485277637a6f764c324e6c636e52705a6d6c6a5958526c63793530636e567a6447566b63325679646d6c6a5a584d75615735300a5a577775593239744c306c756447567355306459556d397664454e424c6d526c636a416442674e564851344546675155496d554d316c71644e496e7a673753560a55723951477a6b6e4271777744675944565230504151482f42415144416745474d42494741315564457745422f7751494d4159424166384341514577436759490a4b6f5a497a6a3045417749445351417752674968414f572f35516b522b533943695344634e6f6f774c7550524c735747662f59693747535839344267775477670a41694541344a306c72486f4d732b586f356f2f7358364f39515778485241765a55474f6452513763767152586171493d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a',
                                  qe_id:
                                   { signature:
                                      '3b9cd0eeafd0f7e33aebf51b983ca18a60dbeb9f6e6bc0c7b0c1135a000463217fc0147be10e8b34ae7886788fdc97a85d279b849b8826150729312d76f0c872',
                                     enclave_identity:
                                      '7b226964223a225145222c2276657273696f6e223a322c22697373756544617465223a22323032352d30342d31305430363a34353a30325a222c226e657874557064617465223a22323032352d30352d31305430363a34353a30325a222c227463624576616c756174696f6e446174614e756d626572223a31382c226d69736373656c656374223a223030303030303030222c226d69736373656c6563744d61736b223a224646464646464646222c2261747472696275746573223a223131303030303030303030303030303030303030303030303030303030303030222c22617474726962757465734d61736b223a224642464646464646464646464646464630303030303030303030303030303030222c226d727369676e6572223a2238433446353737354437393635303345393631333746373743363841383239413030353641433844454437303134304230383142303934343930433537424646222c2269737670726f646964223a312c227463624c6576656c73223a5b7b22746362223a7b2269737673766e223a387d2c2274636244617465223a22323032342d31312d31335430303a30303a30305a222c22746362537461747573223a225570546f44617465227d2c7b22746362223a7b2269737673766e223a367d2c2274636244617465223a22323032312d31312d31305430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b2269737673766e223a357d2c2274636244617465223a22323032302d31312d31315430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b2269737673766e223a347d2c2274636244617465223a22323031392d31312d31335430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030333334222c22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b2269737673766e223a327d2c2274636244617465223a22323031392d30352d31355430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323139222c22494e54454c2d53412d3030323933222c22494e54454c2d53412d3030333334222c22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b2269737673766e223a317d2c2274636244617465223a22323031382d30382d31355430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323032222c22494e54454c2d53412d3030323139222c22494e54454c2d53412d3030323933222c22494e54454c2d53412d3030333334222c22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030363135225d7d5d7d' },
                                  tcb_info:
                                   { tcb_info:
                                      '7b226964223a22534758222c2276657273696f6e223a332c22697373756544617465223a22323032352d30342d31305430373a31313a32385a222c226e657874557064617465223a22323032352d30352d31305430373a31313a32385a222c22666d737063223a22303061303637313130303030222c227063654964223a2230303030222c2274636254797065223a302c227463624576616c756174696f6e446174614e756d626572223a31382c227463624c6576656c73223a5b7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a31317d2c7b2273766e223a31317d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a31327d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032342d31312d31335430303a30303a30305a222c22746362537461747573223a22535748617264656e696e674e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a31317d2c7b2273766e223a31317d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032342d31312d31335430303a30303a30305a222c22746362537461747573223a22436f6e66696775726174696f6e416e64535748617264656e696e674e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a31307d2c7b2273766e223a31307d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a31327d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032332d30322d31355430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a31307d2c7b2273766e223a31307d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032332d30322d31355430303a30303a30305a222c22746362537461747573223a224f75744f6644617465436f6e66696775726174696f6e4e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a397d2c7b2273766e223a397d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a31327d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032322d31312d30395430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a397d2c7b2273766e223a397d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31337d2c2274636244617465223a22323032322d31312d30395430303a30303a30305a222c22746362537461747573223a224f75744f6644617465436f6e66696775726174696f6e4e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a357d2c7b2273766e223a357d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a347d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31317d2c2274636244617465223a22323032312d31312d31305430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030363134222c22494e54454c2d53412d3030363137222c22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a357d2c7b2273766e223a357d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a347d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31307d2c2274636244617465223a22323032302d31312d31315430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363134222c22494e54454c2d53412d3030363137222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a357d2c7b2273766e223a357d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31317d2c2274636244617465223a22323032312d31312d31305430303a30303a30305a222c22746362537461747573223a224f75744f6644617465436f6e66696775726174696f6e4e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363134222c22494e54454c2d53412d3030363137222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a357d2c7b2273766e223a357d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a31307d2c2274636244617465223a22323032302d31312d31315430303a30303a30305a222c22746362537461747573223a224f75744f6644617465436f6e66696775726174696f6e4e6565646564222c2261647669736f7279494473223a5b22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363134222c22494e54454c2d53412d3030363137222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d2c7b22746362223a7b22736778746362636f6d706f6e656e7473223a5b7b2273766e223a357d2c7b2273766e223a357d2c7b2273766e223a327d2c7b2273766e223a327d2c7b2273766e223a3235357d2c7b2273766e223a317d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d2c7b2273766e223a307d5d2c2270636573766e223a357d2c2274636244617465223a22323031382d30312d30345430303a30303a30305a222c22746362537461747573223a224f75744f6644617465222c2261647669736f7279494473223a5b22494e54454c2d53412d3030313036222c22494e54454c2d53412d3030313135222c22494e54454c2d53412d3030313335222c22494e54454c2d53412d3030323033222c22494e54454c2d53412d3030323230222c22494e54454c2d53412d3030323333222c22494e54454c2d53412d3030323730222c22494e54454c2d53412d3030323933222c22494e54454c2d53412d3030333230222c22494e54454c2d53412d3030333239222c22494e54454c2d53412d3030333831222c22494e54454c2d53412d3030333839222c22494e54454c2d53412d3030343737222c22494e54454c2d53412d3030323839222c22494e54454c2d53412d3030363134222c22494e54454c2d53412d3030363137222c22494e54454c2d53412d3030363537222c22494e54454c2d53412d3030373637222c22494e54454c2d53412d3030383238222c22494e54454c2d53412d3030363135225d7d5d7d',
                                     signature:
                                      '582246a4343cad808314839c2d95bed41a36de4713c3fa3081338af24ec72eeecb1709b6413263189561d00741f0d1db9d05b13f1f2c7407e1a06e9445f1e1dd' } },
                               quote:
                                '03000200000000000a000f00939a7233f79c4ca9940a0db3957f060769335a670a02a6e28f0a98bf8a07248e000000000c0c0218ffff0c00000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000030000000000000000394d9a088fbf0dcbd9d8e11d696611b4c6ddfe3b47bbbe0c30cb09b9c7e58e0000000000000000000000000000000000000000000000000000000000000000a5abe5ecb45206f6c1a275ef3bec3f3bd02dd0037054800e1aebf24d7eb1be3300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d9d23f83d7493b9072472c4eddf3afc560837e469e292d963c9f89f825f152f3305ffb42d753653004e35e37d7bf2ce4dacbeedf63b0b00563e3f3757676e32a441000000747288fe8adf26c00db724336efc08379bff4ed35ea17a525722b9f07991ab137d7cd5db1296b4b624332e398a7921f905d58836b1459c05c10e6e137e85ec2781887433fa45c2247e8fb9b6a834af1410129122eb2ee227ad7910cdc2e9d383701973dd5e584bf5ba5b8cea43e86647cb3990c215e9b4913332fb92cd10db40c0c0218ffff0c00000000000000000000000000000000000000000000000000000000000000000000000000000000001500000000000000e70000000000000096b347a64e5a045e27369c26e6dcda51fd7c850e9b3a3a79e718f43261dee1e400000000000000000000000000000000000000000000000000000000000000008c4f5775d796503e96137f77c68a829a0056ac8ded70140b081b094490c57bff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009ce3b5a8398e9b39ef16d4f399edf14446d6bc57e611637adcc4c094371d6d570000000000000000000000000000000000000000000000000000000000000000ad844f288cd25445c65c6eb74ad6caccf32b2be626530b02ea3a4d840f367e51300400d06ce463cd8137217eeb43758fdf5b4929f910910d0626bd16c10061992000000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f0500dc0d00002d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949456a6a4343424453674177494241674956414f5a54544466523265453172614546506a315a6d556f6a634e4a6e4d416f4743437147534d343942414d430a4d484578497a416842674e5642414d4d476b6c756447567349464e48574342515130736755484a765932567a6332397949454e424d526f77474159445651514b0a4442464a626e526c6243424462334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e560a4241674d416b4e424d517377435159445651514745774a56557a4165467730794e5441304d4463794d5451774d6a68614677307a4d6a41304d4463794d5451770a4d6a68614d484178496a416742674e5642414d4d47556c756447567349464e4857434251513073675132567964476c6d61574e6864475578476a415942674e560a42416f4d45556c756447567349454e76636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b470a413155454341774351304578437a414a42674e5642415954416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a304441516344516741450a576f4772687230567a66344a50634c507a342b7963395256366967536636423763476377794c6761736c377a526a504934486f68392b4c3436716234776e49320a74496555595a7543522f46354144713635514c4b664b4f434171677767674b6b4d42384741315564497751594d426141464e446f71747031312f6b75535265590a504873555a644456386c6c4e4d477747413155644877526c4d474d77596142666f463247573268306448427a4f693876595842704c6e527964584e305a57527a0a5a584a3261574e6c63793570626e526c6243356a62323076633264344c324e6c636e52705a6d6c6a5958527062323476646a517663474e7259334a7350324e680a5058427962324e6c63334e7663695a6c626d4e765a476c755a7a316b5a584977485159445652304f4242594546484e3139674376676d2f6b53634a51724d78570a7366784f496468554d41344741315564447745422f775145417749477744414d42674e5648524d4241663845416a41414d4949423141594a4b6f5a496876684e0a415130424249494278544343416345774867594b4b6f5a496876684e4151304241515151514a67434b634c73454753756a61794c62744161377a4343415751470a43697147534962345451454e41514977676746554d42414743797147534962345451454e415149424167454c4d42414743797147534962345451454e415149430a4167454c4d42414743797147534962345451454e41514944416745434d42414743797147534962345451454e41514945416745434d42454743797147534962340a5451454e41514946416749412f7a415142677371686b69472b45304244514543426749424154415142677371686b69472b4530424451454342774942444441510a42677371686b69472b45304244514543434149424144415142677371686b69472b45304244514543435149424144415142677371686b69472b453042445145430a436749424144415142677371686b69472b45304244514543437749424144415142677371686b69472b45304244514543444149424144415142677371686b69470a2b45304244514543445149424144415142677371686b69472b45304244514543446749424144415142677371686b69472b4530424451454344774942414441510a42677371686b69472b45304244514543454149424144415142677371686b69472b45304244514543455149424454416642677371686b69472b453042445145430a4567515143777343417638424441414141414141414141414144415142676f71686b69472b45304244514544424149414144415542676f71686b69472b4530420a44514545424159416f476352414141774477594b4b6f5a496876684e4151304242516f424144414b42676771686b6a4f5051514441674e4941444246416942740a7837714f584634626f5a564251762f7a6e43686c746c3563537676336641672f734366595955716363514968414d45666c3748532f6c4745444b73714971704a0a696758303253732f4545483378664567326e36494431382f0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436d444343416a36674177494241674956414e446f71747031312f6b7553526559504873555a644456386c6c4e4d416f4743437147534d343942414d430a4d476778476a415942674e5642414d4d45556c756447567349464e48574342536232393049454e424d526f77474159445651514b4442464a626e526c624342440a62334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e424d5173770a435159445651514745774a56557a4165467730784f4441314d6a45784d4455774d5442614677307a4d7a41314d6a45784d4455774d5442614d484578497a41680a42674e5642414d4d476b6c756447567349464e48574342515130736755484a765932567a6332397949454e424d526f77474159445651514b4442464a626e526c0a6243424462334a7762334a6864476c76626a45554d424947413155454277774c553246756447456751327868636d4578437a414a42674e564241674d416b4e420a4d517377435159445651514745774a56557a425a4d424d4742797147534d34394167454743437147534d34394177454841304941424c39712b4e4d7032494f670a74646c31626b2f75575a352b5447516d38614369387a373866732b664b435133642b75447a586e56544154325a68444369667949754a77764e33774e427039690a484253534d4a4d4a72424f6a6762737767626777487759445652306a42426777466f4155496d554d316c71644e496e7a6737535655723951477a6b6e427177770a556759445652306642457377535442486f45576751345a426148523063484d364c79396a5a584a3061575a70593246305a584d7564484a316333526c5a484e6c0a636e5a705932567a4c6d6c75644756734c6d4e766253394a626e526c62464e4857464a76623352445153356b5a584977485159445652304f42425945464e446f0a71747031312f6b7553526559504873555a644456386c6c4e4d41344741315564447745422f77514541774942426a415342674e5648524d4241663845434441470a4151482f416745414d416f4743437147534d343942414d43413067414d4555434951434a6754627456714f795a316d336a716941584d365159613672357357530a34792f4737793875494a4778647749675271507642534b7a7a516167424c517135733541373070646f6961524a387a2f3075447a344e675639316b3d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436a7a4343416a53674177494241674955496d554d316c71644e496e7a6737535655723951477a6b6e42717777436759494b6f5a497a6a3045417749770a614445614d4267474131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e760a636e4276636d4630615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a0a42674e5642415954416c56544d423458445445344d4455794d5445774e4455784d466f58445451354d54497a4d54497a4e546b314f566f77614445614d4267470a4131554541777752535735305a5777675530645949464a766233516751304578476a415942674e5642416f4d45556c756447567349454e76636e4276636d46300a615739754d5251774567594456515148444174545957353059534244624746795954454c4d416b47413155454341774351304578437a414a42674e56424159540a416c56544d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a3044415163445167414543366e45774d4449595a4f6a2f69505773437a61454b69370a314f694f534c52466857476a626e42564a66566e6b59347533496a6b4459594c304d784f346d717379596a6c42616c54565978465032734a424b357a6c4b4f420a757a43427544416642674e5648534d4547444157674251695a517a575770303069664f44744a5653763141624f5363477244425342674e5648523845537a424a0a4d45656752614244686b466f64485277637a6f764c324e6c636e52705a6d6c6a5958526c63793530636e567a6447566b63325679646d6c6a5a584d75615735300a5a577775593239744c306c756447567355306459556d397664454e424c6d526c636a416442674e564851344546675155496d554d316c71644e496e7a673753560a55723951477a6b6e4271777744675944565230504151482f42415144416745474d42494741315564457745422f7751494d4159424166384341514577436759490a4b6f5a497a6a3045417749445351417752674968414f572f35516b522b533943695344634e6f6f774c7550524c735747662f59693747535839344267775477670a41694541344a306c72486f4d732b586f356f2f7358364f39515778485241765a55474f6452513763767152586171493d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a00' } },
                         height: 24133699,
                         signature:
                          '9a22979058ec4160f4e1141783cae9b743777b614b2733b9239b7b12ea8c3eb85481e229e7bb621e1f113ebbf316d840dc46bfb263a86e3fc8a446ea6236dd0b' } } } } },
           { id:
              'oasis1qzz5dj3jzjk0l53p4vmp39sgzhkpc2mnavc6nfxe or 000000000000000000000000000000000000000000000000e2eaa99fc008f87f Emerald Mainnet',
             version: { major: 11 },
             extra_info: null,
             capabilities: { as_Map: [] } } ],
        consensus:
         { id:
            'oasis1qp9uud50sejsajr60mfhvqgrre5ulpzjvqzcc5xr or aed24653c4eea2059826da46eb3dc24020cb3e1df0408e3207eb5be657f5972e',
           addresses: null },
        entity_id:
         'oasis1qrh6e9ckmfrxn04upc4wg7atau8lz9hw7gj0jt04 or 39e00923e63bca72ecee8b7c8f06c418e721cc38ebf6973040b414573f4d52d4',
        expiration: 40212,
        software_version: '25.1' },
     node_status:
      { freeze_end_time: 0, expiration_processed: false, election_eligible_after: 39607 },
     last_attempt: 1744594476,
     last_registration: 1744594476,
     last_attempt_successful: true },
  software_version: '25.1' }
