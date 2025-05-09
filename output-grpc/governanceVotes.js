
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.governanceVotes({
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
[ { vote: 1, voter: 'oasis1qqyynj90zkvyhja33w4ltgej45pr48f45ymmnsrx' },
  { vote: 1, voter: 'oasis1qqxqhx9t52rsevhhtfspdxp4gsaft6ewyyeqnqy3' },
  { vote: 1, voter: 'oasis1qqx820g2geqzeyeyfnm5hgz72eaj9emajgqmscy0' },
  { vote: 1, voter: 'oasis1qq2kqzr4q942x44st97n66nmmyh7dhsuvsqyc22u' },
  { vote: 1, voter: 'oasis1qq0xmq7r0z9sdv02t5j9zs7en3n6574gtg8v9fyt' },
  { vote: 1, voter: 'oasis1qqs5wnxvsk009swtt7ehm5fslxve96kczszwt47s' },
  { vote: 1, voter: 'oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe' },
  { vote: 1, voter: 'oasis1qq3fq8hxrlq6pedw0q3f57daea43a6v7q5rwf0ll' },
  { vote: 1, voter: 'oasis1qqnmppt4j5d2yl584euhn6g2cw9gewdswga9frg4' },
  { vote: 1, voter: 'oasis1qq4f2h225gv6g8w8w23fm740aze9lke4qun72n59' },
  { vote: 1, voter: 'oasis1qqewwznmvwfvee0dyq9g48acy0wcw890g549pukz' },
  { vote: 1, voter: 'oasis1qqekv2ymgzmd8j2s2u7g0hhc7e77e654kvwqtjwm' },
  { vote: 1, voter: 'oasis1qqa3d6e2h3dcdj38rnpgk04grcf6p4weh534vmfs' },
  { vote: 1, voter: 'oasis1qq7vyz4ewrdh00yujw0mgkf459et306xmvh2h3zg' },
  { vote: 1, voter: 'oasis1qqlq8jplttrmw982rrhp0svl8054xqevecks5yqr' },
  { vote: 1, voter: 'oasis1qql4alk30frfa6xua42eu7tynkqf9vd5ug95yqpn' },
  { vote: 1, voter: 'oasis1qppjm5sxqwps4dpyekdvz530sjmq3e5eusp7hdan' },
  { vote: 1, voter: 'oasis1qppctxzn8djkqfvrxugak9v7dp25vddq7sxqhkry' },
  { vote: 1, voter: 'oasis1qpxpnxxk4qcgl7n55tx0yuqmrcw5cy2u5vzjq5u4' },
  { vote: 1, voter: 'oasis1qpg763ex50jp0e34lsu789smlzqvcv7025v7m7yx' },
  { vote: 1, voter: 'oasis1qptk3ydjxuq3eenqwljdy45uxdye5tfg4sqar0fz' },
  { vote: 1, voter: 'oasis1qp0xuvw2a93w4yp8jwthfz93gxy87u7hes9eu2ev' },
  { vote: 1, voter: 'oasis1qpsnzv8qz4fu3lwps2tc3eg5pnryzl4h7cqxruzf' },
  { vote: 1, voter: 'oasis1qp3rhyfjagkj65cnn6lt8ej305gh3kamsvzspluq' },
  { vote: 1, voter: 'oasis1qp334gzlzrap6k2ch6wc9vxxplw9sg3v9cfvvgsy' },
  { vote: 1, voter: 'oasis1qpjuke27se2wnmvx6e8uc4l5h44yjp9h7g2clqfq' },
  { vote: 1, voter: 'oasis1qpn83e8hm3gdhvpfv66xj3qsetkj3ulmkugmmxn3' },
  { vote: 1, voter: 'oasis1qp4rp7adhegfktyg4aq3w6jelqumx6klfv5t7kvv' },
  { vote: 1, voter: 'oasis1qp4f47plgld98n5g2ltalalnndnzz96euv9n89lz' },
  { vote: 1, voter: 'oasis1qp4ajz4vdgx3ze42ulk7m0jkxfstqcl87qymg9nx' },
  { vote: 1, voter: 'oasis1qp6fzgx9zhamsk6c77cwzjeme06xwswffvhk6js2' },
  { vote: 1, voter: 'oasis1qp60saapdcrhe5zp3c3zk52r4dcfkr2uyuc5qjxp' },
  { vote: 1, voter: 'oasis1qpaygvzwd5ffh2f5p4qdqylymgqcvl7sp5gxyrl3' },
  { vote: 1, voter: 'oasis1qzp84num6xgspdst65yv7yqegln6ndcxmuuq8s9w' },
  { vote: 1, voter: 'oasis1qzp8e4ldf9zq27jle847nawll5jwwa9x75y6spaz' },
  { vote: 1, voter: 'oasis1qzpltjryl38jdmd03309z8z87gcl32v53q6xshwq' },
  { vote: 1, voter: 'oasis1qzzytegg6jc7hxu6y8feuzkgmr75ms7hc54mz85p' },
  { vote: 1, voter: 'oasis1qzzwkrjmyrzey46hyste5xszue3ggy90ag7k3687' },
  { vote: 1, voter: 'oasis1qzrjsupecrjmvyfmg0aqz75sek4x7dn4ggchqx28' },
  { vote: 1, voter: 'oasis1qzrehfnnntdaeshy5f6kfa8v3p35yu7mluaapmgc' },
  { vote: 1, voter: 'oasis1qzgq240adkyxhm6598ex2jvgs7lyx5wmtg7cszmk' },
  { vote: 1, voter: 'oasis1qz22xm9vyg0uqxncc667m4j4p5mrsj455c743lfn' },
  { vote: 1, voter: 'oasis1qz26ty8q6gwt6zah7dtt8jpepvwnttkg8ssnxjl7' },
  { vote: 1, voter: 'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl' },
  { vote: 1, voter: 'oasis1qzt4fvcc6cw9af69tek9p3mfjwn3a5e5vcyrw7ac' },
  { vote: 1, voter: 'oasis1qzv7a0gkxwpfelv985fvkl24k7jh3arfwy84zw7q' },
  { vote: 1, voter: 'oasis1qz0tqva49ysnjk2p7xe83qfp86khxwms8sc2wf6e' },
  { vote: 1, voter: 'oasis1qz0ea28d8p4xk8xztems60wq22f9pm2yyyd82tmt' },
  { vote: 1, voter: 'oasis1qzk6qlmgnq40cq2n3jfkw3307feqngt4gvksfml6' },
  { vote: 1, voter: 'oasis1qzc687uuywnel4eqtdn6x3t9hkdvf6sf2gtv4ye9' },
  { vote: 1, voter: 'oasis1qz65awwegd9pr8msfxkg7hpwyjemm2qdlysyc8jq' },
  { vote: 1, voter: 'oasis1qzmwdlxy7cltmwt99u9pwqt3g0rdwgsqyvcqymmt' },
  { vote: 1, voter: 'oasis1qzm74el4utw4jssrl95ujq87g3ks3xfmjytvtaaa' },
  { vote: 1, voter: 'oasis1qzugextrcdueshq63w7l9x4xglnusznsgqa95w7e' },
  { vote: 1, voter: 'oasis1qzu358mpd4z5frmrq6vnwq87cqfvdmfxh5ax57cj' },
  { vote: 1, voter: 'oasis1qzaracvtpgp87frlk9jshdcu8aczpsrz8y94jjg4' },
  { vote: 1, voter: 'oasis1qz72lvk2jchk0fjrz7u2swpazj3t5p0edsdv7sf8' },
  { vote: 1, voter: 'oasis1qzl99wft8jtt7ppprk7ce7s079z3r3t77s6pf3dd' },
  { vote: 1, voter: 'oasis1qzl8w5ka9y3p8a8gqlemqk98hzc33sn0tuezyc8l' },
  { vote: 1, voter: 'oasis1qrzkqzvlw9xgyxhhqps746ssyhn5lkqrmcgz8amq' },
  { vote: 1, voter: 'oasis1qryreqam7w0slj7rhz70g9xvt9rct2024cepgqjj' },
  { vote: 1, voter: 'oasis1qryc94hn6hucev6ex79ceheve2pjesenc50svvvp' },
  { vote: 1, voter: 'oasis1qr9wccuk6pqcr5ld8t2uf599e4ch5348hqeq53x4' },
  { vote: 1, voter: 'oasis1qr8al5vcpqzjspdl8yt27fqc3pydz4alhs0xqp5e' },
  { vote: 1, voter: 'oasis1qrgxl0ylc7lvkj0akv6s32rj4k98nr0f7smf6m4k' },
  { vote: 1, voter: 'oasis1qrtq873ddwnnjqyv66ezdc9ql2a07l37d5vae9k0' },
  { vote: 1, voter: 'oasis1qrdx0n7lgheek24t24vejdks9uqmfldtmgdv7jzz' },
  { vote: 1, voter: 'oasis1qr0jwz65c29l044a204e3cllvumdg8cmsgt2k3ql' },
  { vote: 1, voter: 'oasis1qrs8zlh0mj37ug0jzlcykz808ylw93xwkvknm7yc' },
  { vote: 1, voter: 'oasis1qrs8xpzhevja678g435afvkvs4h6xm6qzgdz6slf' },
  { vote: 1, voter: 'oasis1qr5f26k9rnfa2pg6wgsuljyq7lecej3gaqqhyra5' },
  { vote: 1, voter: 'oasis1qrcmmvgf7qt8pmy543dmz0muwcm752kleund8rwr' },
  { vote: 1, voter: 'oasis1qresj0vhmwawll6fe2vw2nlapkp6nj6etcx7a32h' },
  { vote: 1, voter: 'oasis1qrmexg6kh67xvnp7k42sx482nja5760stcrcdkhm' },
  { vote: 1, voter: 'oasis1qrugz89g5esmhs0ezer0plsfvmcgctge35n32vmr' },
  { vote: 1, voter: 'oasis1qra3rvq7y055waxmnx8rc0nad3frr8na2s9l8l3f' },
  { vote: 1, voter: 'oasis1qram2p9w3yxm4px5nth8n7ugggk5rr6ay5d284at' } ]
