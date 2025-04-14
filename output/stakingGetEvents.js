
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.stakingGetEvents(24134472))
} catch (err) {
  console.log('error', err)
}
const output =
[ { escrow:
     { debonding_start:
        { owner: 'oasis1qz78ap0456g2rk7j6rmtvasc9v2kjhz2s58qgj90',
          amount: '0.999999999',
          escrow: 'oasis1qpn83e8hm3gdhvpfv66xj3qsetkj3ulmkugmmxn3',
          active_shares: '0.701775503',
          debond_end_time: 40547,
          debonding_shares: '0.999999999' } },
    height: 24134472,
    tx_hash:
     'oasis1qq6gdpdpf2f0aj5w0hplak6kp8mahr5fzgjc4thm or de94acf0a0e170c271392f644111b2214cdbe7169b0121f7c2ce0854805b262d' } ]
