
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.consensusGetStatus(undefined))
} catch (err) {
  console.log('error', err)
}
const output = 
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
  last_retained_height: 16817956 }
