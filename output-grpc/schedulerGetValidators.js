
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.schedulerGetValidators(0))
} catch (err) {
  console.log('error', err)
}
const output = 
[ { id:
     'oasis1qq7x4lg8zz2zlzpjqjw8x9exwgfnx2qesvdus7zn or c8527713ebe3635836c787c61a422b7ccd6644283ee518be70a10b4f21a54cc9',
    entity_id:
     'oasis1qq49hl4c08rtnclqhzzql4v8ymkueq2c0595t9pl or 79cdb12303bc991c7c105a1e7b4e6b2c4dd635249a8d7ed7e5d9bc533377deba',
    voting_power: 14134530452877 },
  { id:
     'oasis1qryxlps075x66qt24kxskjqy2sp75nfuccs46k9a or 442943c7282219810578ef748e77c70085e6d90acfe53350e45e7437bef3298e',
    entity_id:
     'oasis1qzv7a0gkxwpfelv985fvkl24k7jh3arfwy84zw7q or 18358ed3e47ba92ad60746ef4fe5762b3eaf947726e999da350336fc5b05a840',
    voting_power: 520699206209767 },
  { id:
     'oasis1qrk0dwufyq3j23uqg9l4d8snmp4csx8xmggy8sj4 or 5c288f59b9564f79f568dd8d234bec96695f57d18e931136221d9223ae99477f',
    entity_id:
     'oasis1qpl883gp995zs9n6a279tqsavnaxxf0rzcdlauwu or 9f0fbc55393e2dbad9e264a678a62e406bbfb3016000ea4f07996ce124f38758',
    voting_power: 4700577660315290 },
  { id:
     'oasis1qqvkk79jfcvm7d09a84thv7rak9885wdgu7270tl or 20490841bda8f25d31945229378ec598e61c06615c87d0ec646b3c3ae66a43a8',
    entity_id:
     'oasis1qrtq873ddwnnjqyv66ezdc9ql2a07l37d5vae9k0 or bb14a4bc5bbac78308615f8cd55ac3bb79bfa9b003b3fd407b799601c1269da4',
    voting_power: 3697821236800138 },
  { id:
     'oasis1qqhh2jjeahvsdum6nsg7r52fmz7wngj8kus0crue or a635865604656bc4891af05620fe603cf1e0c6caf573610eb143f9289bd08e09',
    entity_id:
     'oasis1qzzytegg6jc7hxu6y8feuzkgmr75ms7hc54mz85p or c021a52ca5224cdafd05ae3d600e9d0eeaa6f6b76d3dc28ab0acc7a8c067fab7',
    voting_power: 2850819701308463 },
  { id:
     'oasis1qr60nw7vxmzyn3vq4yeg9fuzp7uhfwu69cu3gpp7 or c47bd453823e750e282af95f7b8217a0a8bc393f2f74081fb334397223cbe872',
    entity_id:
     'oasis1qz0ea28d8p4xk8xztems60wq22f9pm2yyyd82tmt or 59acc8efc94c7268f2087e7ee512a491f393511f9785e1c8a2196a32ef9af40b',
    voting_power: 6800954297680660 },
  { id:
     'oasis1qzzuvg5540zhzfwsy6pulkxsftex2jwqxqpq4efg or 3f93e3bc70e97a21501b187839368eeaa5f0442d0025f8654dfc0f8f46581330',
    entity_id:
     'oasis1qpjk62axdvn2g97felfa9jpxxrptqzm4mgwh540r or fae32c34e011ce1ab59497e1edb7286b7fe289478b4983cc9101e06080941760',
    voting_power: 444535622430364 },
  { id:
     'oasis1qpu5vcf43ztt6pgfawuykwngm73yn7seg5xyyxre or 2e04ced7924b3d751e3df47782c4584206ef53b2c188e0a110e9a3ac148c69a9',
    entity_id:
     'oasis1qp6rcncrz8azcfdp56mjd3mfguze3yeja5lmxjan or fcf380902e32353ea4483cd4647ad08f708d8e886ba1154c9b90d6dfac6b2ef2',
    voting_power: 777198623651 },
  { id:
     'oasis1qzm6k2acwql9gfuxapa62c3sf68ugcqlwug2p90r or 08f2f2fc560ab4854aec93aca458b71b501f92eaea9a1dad02d883ab8ae749f2',
    entity_id:
     'oasis1qr9zuf3n8g3znm786st3sldfw677pk3a6v85w9ds or f723a23d8dcd9cd32913307ee974bf3aa6a1cc5c305fc9858664f67ef6f19552',
    voting_power: 3828492457777860 },
  { id:
     'oasis1qpwa7euhrplrnpz2wz5r7nu5sfye5cv0acflr79v or 9daa414dc0f96df649ba179640b5ab7cc9efaf49a0763addf77713273a490f52',
    entity_id:
     'oasis1qq2stnud2we0gfkvrf2stgg96qxhsh3fyc9mxt82 or ee1bc722ae3292b6f224f68488419eb428ac2171d5193769318bf92614b01856',
    voting_power: 1335654770580339 },
  { id:
     'oasis1qqd78tnekpc4j5tltxcrxy6phvad48exuyd2z3c9 or 327997588a5fd61128934ac87329e61df611ea4bd6bb21fa55d08901154de686',
    entity_id:
     'oasis1qram2p9w3yxm4px5nth8n7ugggk5rr6ay5d284at or 459a304d799f4fe6fa1fa56ecfded5102232d9cabcb72b538a5bfc0316edbcef',
    voting_power: 2115430863916010 },
  { id:
     'oasis1qq708tqma2a6kxuuljvclsws5syv42hj25sz3m3a or d8de276c9d62a533a18aa7bc6af0beca7ffd82a646c3d20cc246e5d51026cbb5',
    entity_id:
     'oasis1qqskhrk0lhfkwzavkd3g72ne4j6cl8g7vvhjy8rz or 9e60a193ca39fc4300b1bb4624b7cf549d200543779ebe31f0b96ae3ef813c9c',
    voting_power: 1357813182035 },
  { id:
     'oasis1qrxrz9aq0lvetu7p942y3kvh48czzrzlr5dc45ql or 9530bdc3196a61352f5d25766c9c63d30d8958676563aa59148c7af15fea601e',
    entity_id:
     'oasis1qrcmmvgf7qt8pmy543dmz0muwcm752kleund8rwr or ee70817e5d6f452e249fb1b6c8965e65dc04f0e140e1abd4a6159d091ac58493',
    voting_power: 410344708856380 },
  { id:
     'oasis1qqs99gty894fhgpxvjcwx5dlzkd5nk6fgv0epx0r or ea2557da88bd14036eb056903e6203496bb7a8b344d9828c3e141e3b512150d4',
    entity_id:
     'oasis1qrw8xd7sewarn0qm3jc5km4e0j2l3qdhfqexqqry or 1e069cb38f21a449629b35c0a0c9a8c794fbb006a53cba7bbdd56bd7000f7afa',
    voting_power: 385163278019491 },
  { id:
     'oasis1qzhpchu80rdy0z76uxnc29p09yc39lrmnuhrd04m or 0ee74b6060d528c821fce674aceb28c5e08dcd2c5a966e1bbd0b2bb04fc7f570',
    entity_id:
     'oasis1qpqz2ut6a6prfcjm64xnpnjhsnqny6jqfyav829v or 6dbd735a9d20cd2d628f5398dcacf10b404935daa4022276eb3de20fcb25b7b7',
    voting_power: 612701218094982 },
  { id:
     'oasis1qqp0h2h92eev7nsxgqctvuegt8ge3vyg0qyluc4k or eb06cbe7f3b1bc51b18b9e68ec0c5cc0a99f8d76d7182d61c3895f9c46710570',
    entity_id:
     'oasis1qqekv2ymgzmd8j2s2u7g0hhc7e77e654kvwqtjwm or f6c02177e5a2ead1b99c0af72f05c3d32f6650a2d8a9f01b4b6fbb49974d1c1e',
    voting_power: 7329811017802850 },
  { id:
     'oasis1qzkzltvd497m38xnygnyhvqxwlvnez7tkc30yxuf or cf2793735b04a6975289f47f846b8f9617c76a54372eaf879761d2e763bdf048',
    entity_id:
     'oasis1qqqn56k79st0zy4060m0wvmec76vd3pl6czmg90a or 06406a5cc75dd74c432a7edbfe2217c9c1cb05aae8722eb1a05c6810dd6443e0',
    voting_power: 24188223565102 },
  { id:
     'oasis1qqc4er3l8ey0kxk884pysmrjxw0mp2cx3vhnyuls or 2538491106c2d621556ddcba9c5cfa992c02858e718273b06d6015de2806ea61',
    entity_id:
     'oasis1qp6fzgx9zhamsk6c77cwzjeme06xwswffvhk6js2 or ff295675a89dd830e523804c5645fa80047a79a05894ba251db8c29878adaf37',
    voting_power: 1877497831623789 },
  { id:
     'oasis1qpjkzn47d7q770vefjwc4lvj2vqlnsgstcggthmh or b243cdaa587c96747cdd1c8ad9c95b02c724b6ee6363f7d6ab93b371264be88c',
    entity_id:
     'oasis1qryc94hn6hucev6ex79ceheve2pjesenc50svvvp or 7aba4f4a44301a76fd8fefeaab22667912b67b59a125cfc3a3bf2335da4f8e4d',
    voting_power: 681154872185699 },
  { id:
     'oasis1qpap3cwry5v6rulal7lt9z9245pytsp7mqzgw2d2 or 8a02dfb88c71a99013834b272954c5a1e45aaab94dab9afaf687e773095403c2',
    entity_id:
     'oasis1qppctxzn8djkqfvrxugak9v7dp25vddq7sxqhkry or f7e94ce6f43583e715ce368d33bf20c70d7251e8158f9eed1c36e937b0ca22fc',
    voting_power: 1326362339806332 },
  { id:
     'oasis1qzuczv4694wfegs6ksn8kvl3x798q8r9zy9wadpe or 4cc98d6f34057d00da068c1990555100b063cba7e3ccbe90d64648539aea4ed1',
    entity_id:
     'oasis1qzf03q57jdgdwp2w7y6a8yww6mak9khuag9qt0kd or a0e5714f0da1118818bd2ad38e328e0c2b7f4a8cb738b71057d601cbf3c5ff16',
    voting_power: 4598960572773239 },
  { id:
     'oasis1qzs429ts5f4pvnylnhkhhfgjvtqj35asc5mv68sz or 213af011e91d64da97ac4cefc37193e90dc0b470dde757f5f670f69d553f7f47',
    entity_id:
     'oasis1qz22xm9vyg0uqxncc667m4j4p5mrsj455c743lfn or 2769f0957b9810f359d26307d8f860e51a1f6d9ce3eb9c43bd030d772f498b41',
    voting_power: 2725872161603122 },
  { id:
     'oasis1qzgs6akhvl9qgnepas3p0tf97p9cuv63ps8v6qgx or e546c88bc4508f87e5167f4df301e342aa7a430645262d90743da63982dafec6',
    entity_id:
     'oasis1qq7vyz4ewrdh00yujw0mgkf459et306xmvh2h3zg or 143a9198cd45ca16866acfa5aae5a61802a032c536ae3ed41120259ce1edc5ca',
    voting_power: 2128347404150818 },
  { id:
     'oasis1qr3g3ay3l2xzu3zplyt3vn7qx58jze0etqktc96d or 01541b5af95b28e1e2df3f2e89b6ce565df1b0226cc3662d586e575dd6e18692',
    entity_id:
     'oasis1qp4f47plgld98n5g2ltalalnndnzz96euv9n89lz or 6d3a24d1e97c19b994cd300081c43bf2ec30fd3b20796c17a4cdcdd92e3da814',
    voting_power: 2592865542455837 },
  { id:
     'oasis1qp4m7gsezgj2pl438mnuqx4dea3jsrjersvnzv4t or cac8436ee5c58acf0f413446b04c401dad4dd1b818d73d8df3c743381ed1f7d1',
    entity_id:
     'oasis1qzzwkrjmyrzey46hyste5xszue3ggy90ag7k3687 or 05d4b3372711f18dcc747a28c54d2fb4e10faf7646f4a0f9a7cc311edbee7945',
    voting_power: 564571373717271 },
  { id:
     'oasis1qrh8x7mcmzcm47dv22u7vu8x3ffgcv8vty85dzjd or 3cea63c53c6ec36709b20b60ce07e1ae43c3de1561da86241e610b1e89cf8294',
    entity_id:
     'oasis1qq2kqzr4q942x44st97n66nmmyh7dhsuvsqyc22u or 0416dad177c8e16493ae813efd819c16d8716c40b98d02615a19748c807091ed',
    voting_power: 754253416267655 },
  { id:
     'oasis1qz3tcue8d7krdautxpx3g7h0euwtjtw0mulep4vh or d0d46cdbfd5207f65baf629de518ccd3e28706bc7d99b38b69df2ac3241a36f4',
    entity_id:
     'oasis1qpavd66xsezz8s4wjw2fyycxw8jm2nlpnuejlg2g or 886b397021a8b3f239290bfcd8cc2018c34435ac72ddb86e59d157b4835cbb45',
    voting_power: 1999768709775194 },
  { id:
     'oasis1qzdvnqsguq5caa6txftmanad4qc2f6yazsq75lay or 19826c12ee18a7e086110563cb8a304001ba97ac44bc6cdc34cd71047684bfa5',
    entity_id:
     'oasis1qzk6qlmgnq40cq2n3jfkw3307feqngt4gvksfml6 or 83d52acef5ba26f7caadf95129b08f0699b8d6b1ff3bee1aa422be2a40f6b46e',
    voting_power: 2968193543570933 },
  { id:
     'oasis1qqmhaurha4fcr47dxg929shmnxus7ddexuay2sj4 or 30b7330d178de8a728e0117c182234fa1d4200b5b1bb7ed9b5640dc7e8f777c5',
    entity_id:
     'oasis1qq3df975et3rwst0qfc5dq4lmygp8hxjzq9z3hlt or 523468f474bc868fed933419c89ec00fffc2a8eb87d18bd720b293a667c3ddd8',
    voting_power: 6685348127189 },
  { id:
     'oasis1qr867pr7ms8mnjp6v5qch27w2a4432tghuf3ja93 or 36deee555828cfd0dfc130227e0ae122049088e6b989eb7e3be7e5eb98d57d54',
    entity_id:
     'oasis1qrmexg6kh67xvnp7k42sx482nja5760stcrcdkhm or 2da28950a9dd02a1f9ec3544c6ca538dd45344d189392a80af3334a66f11119c',
    voting_power: 1338232881809599 },
  { id:
     'oasis1qq22f368g9c4pn26ncrpvzgj9jtrl57c8g7wznxv or e9dad41e1e2aa1c7db06c035daa33ca537ab11c6ea85d687b7ebf7dec12be649',
    entity_id:
     'oasis1qp53ud2pcmm73mlf4qywnrr245222mvlz5a2e5ty or 37edff9b5d83a00ab3152d3217747f9174a44a3ee96675a1abc9d10a8fcc2b09',
    voting_power: 5009534623369560 },
  { id:
     'oasis1qr8m5u9aq3pp77gautt7ypd969tt8es46s55eag8 or 53bc660f3c67766f6e2f8a9f1566aee9dd5d69d81e1f6c843faab52f7df69531',
    entity_id:
     'oasis1qpfcsun7zju6ku7d2mdh54j9nsmxvj76uqk35w57 or 677b8b2b42a905413fb107226a7a59cbf0e4a1c93b47338ebc8e132677c9be29',
    voting_power: 603196024644707 },
  { id:
     'oasis1qq7rq7zxpk0pwfkkdv5nkg7tcc3j7tl6kclcc6sv or 0c69ed25a445c0b50a8bcefda922dbb75b8fdf0e5c139bcc02560c8aca626851',
    entity_id:
     'oasis1qrflth3g7k0ymkut2zrca3ktagw6g882yvqmgzdv or 58a084d6c32624b7be0ec7484013243e2284801a4040ef8f8c27968e62c0d443',
    voting_power: 803170816946820 },
  { id:
     'oasis1qzd94cr2k22ph405pmk9fd675ggmc9yudvkr3ng2 or e13cf67d2a2108dde69b723db00ea101032fffc9e68f8b2c2172a83819f105e9',
    entity_id:
     'oasis1qz65awwegd9pr8msfxkg7hpwyjemm2qdlysyc8jq or 8b3cb7f00994794e1be0bdb7915cb8065c5b90718e3f2e0a3d248b9c9825ad5d',
    voting_power: 805499470403377 },
  { id:
     'oasis1qr9h9zlr7kd2wkclwxdekers5ekg96zskcjppwap or f51f2c595bb0c88a04eb8257bb6b1d0d647abdda85aff5fd6845af3c4f06f36e',
    entity_id:
     'oasis1qqf6wmc0ax3mykd028ltgtqr49h3qffcm50gwag3 or 0fca0228969be0bb4e310251d184195f1f9f330e901f24e2bf76027cdf2d335f',
    voting_power: 539327831952214 },
  { id:
     'oasis1qphrrdd0kktcjcelmyq59y6w4ng8zyj00gmw4n4x or 5da9ce3a9b4babeb66124cba3a57f77553ba1d971426cf1fe844b122f3263b41',
    entity_id:
     'oasis1qqewwznmvwfvee0dyq9g48acy0wcw890g549pukz or b038bd6711d807eac74e9561e1a6cd1570cc45279c7c67b84336f218af198108',
    voting_power: 2575874794632214 },
  { id:
     'oasis1qqstyxmvfpgrtuf9k5ulc2cypfmle3f6ps0s9wlk or 30973ab734801103b181dba299eeb372cf1b8657dbefd01a2021b55e2edf0850',
    entity_id:
     'oasis1qp4tj3u9qkcgjqrrjvwljrqcyx3g5ygjqgtm37t3 or a4c39b29fca3ddd9465607f9e555fd3540044641cb5ed785bca131a4e027fed7',
    voting_power: 773995943942932 },
  { id:
     'oasis1qzgephk58r8a6uvu5rgred45n8prjgtj6ucxqs9y or e977082d3706863bd569623fb51bd97d44e9e21bb1820e8e06f150acd9b1f436',
    entity_id:
     'oasis1qzrehfnnntdaeshy5f6kfa8v3p35yu7mluaapmgc or 6031d8cff47e63ba42a1d8668240aace8aaa379e20cd17d51397e366b897f912',
    voting_power: 2422640410717708 },
  { id:
     'oasis1qq5d925vszdwj9p9mhu39pkvnfdczjn6kgzmvwtv or 1d9196f107ee314bff2446b51ea4f5f47ac64dd258de6587e27a20696ad62bed',
    entity_id:
     'oasis1qzt4fvcc6cw9af69tek9p3mfjwn3a5e5vcyrw7ac or 2f8398ff498d11db804bdcfa8e1db12e9ef66fc81951181caddefa00e8912179',
    voting_power: 1256305178259087 },
  { id:
     'oasis1qzf8kvej5x952h5d07pw6yh5cm9u2w26ngkj5dzc or 6a928e9ed1435d686939f6009f5afce085831b6286041028c78bac203859727b',
    entity_id:
     'oasis1qzu358mpd4z5frmrq6vnwq87cqfvdmfxh5ax57cj or df6292e59f4b5930f650450eaa147067226f6f495bd768a213d518828163b0a4',
    voting_power: 2177332455566608 },
  { id:
     'oasis1qzplwqappgvpw67jvw5ngr30acaal5vuqq9raghp or 0192610c20728ebfd8753bc0eee16721e61c83b8ae1cf1a20eb25129a10e6070',
    entity_id:
     'oasis1qpsnzv8qz4fu3lwps2tc3eg5pnryzl4h7cqxruzf or 0c86cf69c58612279a964fb6dba79811a7d898a2690fdf0f6285a9fed70f5c92',
    voting_power: 514764229577613 },
  { id:
     'oasis1qpngn3gpjh2dfhc8xz9dq9047d3727l2h5j8mr8w or c0956052ec600a909c90ca70e1082e9d9772fc9de79d265f7cb7b232eadcdd1a',
    entity_id:
     'oasis1qqmmflknfn7askxh72kamz9008mpgvuwdusery5f or 19615efefbaca24ace1e557bd9aaffda2a13ca177a28b8b1ef71cc62280c27e8',
    voting_power: 82283769570 },
  { id:
     'oasis1qztgkw8kklepfu3javhp6gz0qqtx8xmu6ccc8ctn or 1e72eda10ca228e92bd8d31c42c438507d075bcaa42d11969f89a09032cda04a',
    entity_id:
     'oasis1qzp8e4ldf9zq27jle847nawll5jwwa9x75y6spaz or ee7e8061d608b866abe7ad72c627c3b6b47d3557a40dabc59697875598a70927',
    voting_power: 344733916184013 },
  { id:
     'oasis1qqzjrsadvr2q5qq5ev6xyspjses8cjxxdcrth0g7 or 29bea8a562866c91cbd0b2b62eda3e9b944e2005cb848af5971433d3f9003943',
    entity_id:
     'oasis1qzp84num6xgspdst65yv7yqegln6ndcxmuuq8s9w or c5037a7df2d275ce7511f110d81ce5b4ad62598030e98d4290101b1739618444',
    voting_power: 719208264150045 },
  { id:
     'oasis1qpe0vnm0ahczgc353vytvtz9r829le4pjux8lc5z or 519dc5cf59d81ede35cd1d5ec8bd60d24a1c79add6314b1b7e80243af05c664a',
    entity_id:
     'oasis1qzg6dct605z9vm5d265uzskqj6szhkx3zugae2a3 or d6465d50f828e36fe6401f2b22c09004f7aa909af5544057fb89597d4a3a6c00',
    voting_power: 156940850516963 },
  { id:
     'oasis1qzyfyy67xhkaxxeyzwhvm06luu7503lk6v4h86gr or bb496300980fe7e1f213290eb1afad12a5dd2890f8d7fe5bc49e6d000f5e2318',
    entity_id:
     'oasis1qzm74el4utw4jssrl95ujq87g3ks3xfmjytvtaaa or 295b22047cc1a269aa7b4570721036407aa9fc94fc075dfaba9e11bbeaffc648',
    voting_power: 48752918679822 },
  { id:
     'oasis1qr8v2lqtwzas6m2fwurd2kt8qlthfytpjcu7mvvc or 23f567c328bb1497513857bae1f6daa84dede7938b714058f2154aeb854daea7',
    entity_id:
     'oasis1qzmwdlxy7cltmwt99u9pwqt3g0rdwgsqyvcqymmt or 17979db97e26e0efe8b7751c16cde2424d593d4b86e3792ec4623db19cfde6e5',
    voting_power: 1829708376045014 },
  { id:
     'oasis1qqpevlj6hu5cmjradlzzcdpscev6an42hgpull05 or 92294b1ca5600890b94fadacb72a2480ed081d698b0a54fce57cc50d20428e89',
    entity_id:
     'oasis1qq58f3mqxt6htvtxcayt4zfshysj36zksvwkmjg9 or a3c95e0b7c5bd96b2bb771705f7dd1f52f6f290251f333c1481eb66323510107',
    voting_power: 148052557755196 },
  { id:
     'oasis1qzc6y7tfn8xg3g5ytwrjn3sw3fuw67lrec2efxww or f7123ccdcb3023d711c51fd5906c6a283657943b365b2545964f600e8d87a32d',
    entity_id:
     'oasis1qpxcfulzydlj6hzc2w5tsaxajdmk47raa5ydg0ac or 289ea51259afc87c897d5db6779f2791673b249102ca1fb47d8b2414d15f438b',
    voting_power: 20398651674004 },
  { id:
     'oasis1qq683clfckkj9afaxgzgep8sqgdecx5f6s6d82ry or cba2d735adcd32d6737979f3f463418fd319b920b006f7c12e466ed981b67d4e',
    entity_id:
     'oasis1qqw05utlqvf2ska0fyjf5yr7peg2z4tuxcjmqztp or 71519cd5f23ac6ed16788d8652b2c8c03a47fc9b411373f00fe3fae989122a0f',
    voting_power: 4002900108142802 },
  { id:
     'oasis1qrv9lhxxrqruzwsyqeupjqn7nhm82ddaksf9hqhc or a0c2f77df2d8c0f9e2ec472b9234292b4fec3d37bb26af755589e777a1ce8a7e',
    entity_id:
     'oasis1qz26ty8q6gwt6zah7dtt8jpepvwnttkg8ssnxjl7 or 92ea56dcfb745cc78445291d0d6c99314e2866b934c06cac557572a97debca57',
    voting_power: 4356931104096496 },
  { id:
     'oasis1qrj75uh2ga923kvfz74rwfpqn8fjec55ev9wplud or 838182fdbdb4d26124157361b0e27140a768dfd0c01dac80c6b3be7350217e12',
    entity_id:
     'oasis1qpg5vq3jt6djfw5rq9l8kcwkt4s7vmjn4vvxujwv or 40d5e376181dfcd49f2db1de641d27f32bf9752ca5ea39b83121e38ddbae8f93',
    voting_power: 2435084554816180 },
  { id:
     'oasis1qprf9qmumjdpxxfz7cn3ahfsdugprvw3lqdlenln or 2b9ae8abc92f6a0d1dce475ab9e9aae0f2df406feb03865e22d67fa29d8f7c6a',
    entity_id:
     'oasis1qr5f26k9rnfa2pg6wgsuljyq7lecej3gaqqhyra5 or f2b876960126ed0b1c0ab2e456a70b3244717db34321efa5688e07f2723f77be',
    voting_power: 2744689807506708 },
  { id:
     'oasis1qr2s9hkyc2yf3330uwfnlqlegesj9dp42saftg5c or 21d12586a2956421d8f4ba3adb6dad7b5c127613cf033fce0aca124645ab5d7c',
    entity_id:
     'oasis1qpxpnxxk4qcgl7n55tx0yuqmrcw5cy2u5vzjq5u4 or 9253910268eaf3540a8940340ac5da00dc5855eb1358cec229d692966eeef6d3',
    voting_power: 1622096313555713 },
  { id:
     'oasis1qqvgrcwnulmvy604rvy4sgmakxjacg0y6uhpc4xw or 2c703619b99efc045e2055e6c700fd9bf01ef2c67577653f0c545f79c4fbd983',
    entity_id:
     'oasis1qq4f2h225gv6g8w8w23fm740aze9lke4qun72n59 or 56deb715f17334c8149e0accbe72a4b3e89cc928b92f09239e224424c6408a63',
    voting_power: 650438517875268 },
  { id:
     'oasis1qq9hpt5ljzc592cdhgvex08cct3s6928tq54qvky or c1dc56f01935859bd000d4074423bc3336e046c742e5cee6a4b8ec3582ccf362',
    entity_id:
     'oasis1qp60saapdcrhe5zp3c3zk52r4dcfkr2uyuc5qjxp or fc023c4c22dcd5ae54f7cc81a313a38b96e17954f5a5cef9bfeb460dd33ab1ee',
    voting_power: 1612167433238777 },
  { id:
     'oasis1qrrydyt6pz5xv9yya8xt6w7w9er2s5vvq50xwvj3 or 99144c51cf1e53ccdba945808870e205e468eb0a95226a90b3dd53c641a3bae5',
    entity_id:
     'oasis1qp0j5v5mkxk3eg4kxfdsk8tj6p22g4685qk76fw6 or ec3c0a082415f531cd2f24c42d04c109634f207649740abba869350fbbf1db3a',
    voting_power: 340978420523805 },
  { id:
     'oasis1qrg3zwe9gvkvs6dvrytr3dedyyjyxp6kgv8u2m2m or c7c0c53dcf04f416712c929b879d718f8d5eb37479dc09091117cc132442adb9',
    entity_id:
     'oasis1qpaygvzwd5ffh2f5p4qdqylymgqcvl7sp5gxyrl3 or db5fa23eefe899804ded7e5c518e109c3e1bf5556e0225bfbbcb8006ab765633',
    voting_power: 4393639196871087 },
  { id:
     'oasis1qq9y9ymp7ujj5n703l075lszvfw2gkys8ya8vp9j or 8353753dd13b7414f9c98ca109b55ae38eb7ee186c229207f0417c8059668884',
    entity_id:
     'oasis1qq4jqh66ga62pe9td5zsnfge3c9rfp6zucjr03q8 or 31f37ea8ce69c05465ea2fd4543481965d940740fa6f6bcacbb1ded60e421289',
    voting_power: 53432499815145 },
  { id:
     'oasis1qz557a3rmflgxtn46f8hegrnfdak7es4gcedfme6 or e1bbfd7fa36a2dfe3eebe40823ea78f0a8296a015793d3e021d79f6eea36b290',
    entity_id:
     'oasis1qrdx0n7lgheek24t24vejdks9uqmfldtmgdv7jzz or 524c234b562f11f1f1f5be8c313e50d56bc26376969f6971443b01fcfc3ecc69',
    voting_power: 5317882846639731 },
  { id:
     'oasis1qry9qmdajrrkkyxvvjvn9meekzdjdgdsw5r8n6uf or 6fee87b09dd2448f5fdde79c1b46d2646ffb510cc405c26c222e33d3bcad9840',
    entity_id:
     'oasis1qrtz5ywlwjx9gca7qqxdr5f5s7sh7dkhks44cpvx or f4db4f4ebe9fd12734fb2ff3ddab383b3cad98d1e0ac3f12579e353c129bd970',
    voting_power: 3358282243926863 },
  { id:
     'oasis1qzpzq4gs5c2ywr2q6sp9c6l82vy6jzm60ytjvf5y or bc11ae15fffcb5d10c40f8a23e08272e5593f5a09b21080d71133e10a876917d',
    entity_id:
     'oasis1qz2rxs50p4kn537tcupjhg7ad3zcm9s7uuyrrd9e or 68e79fc6de4c52e5c46c4af1a43f99b6d25687fdddf627feb7e3c14de0202a9a',
    voting_power: 612379465226000 },
  { id:
     'oasis1qphhk4g0ncqut2ds40mr932s5p8tkqcu3yaae227 or 490659775c2c597745b2ab3052887a859b66ceef9e8ee4a7ac6787b60201243a',
    entity_id:
     'oasis1qq3xrq0urs8qcffhvmhfhz4p0mu7ewc8rscnlwxe or 799b9a717cb9b37fe7a2507f137805e2fa9461dbdf3a555a6815c67d9706c0a7',
    voting_power: 8279853310445775 },
  { id:
     'oasis1qpca22hc0may5zkgm6r3h2s7gdd77dw8ey9rlxg9 or d9c0b3071c6653fc6767005feda1283e2297c7925651166b91f1c75cc2fc6e69',
    entity_id:
     'oasis1qz0pvg26eudajp60835wl3jxhdxqz03q5qt9us34 or 7e15e859873c325d79de3041bc5ad0e02458eef9db0a4f63dbaf6b54b7a0edc1',
    voting_power: 1205769813184023 },
  { id:
     'oasis1qqxghu07qny9wj370m9z9kgjmk55v0e5u5ls8jr9 or 303bce16e89e86cfd56d6fecd1ee834e7e5be1f9ecb5e42109577d13b4fcd07b',
    entity_id:
     'oasis1qqxqhx9t52rsevhhtfspdxp4gsaft6ewyyeqnqy3 or 4d62dc76011f6a1c3214f4c2ee7377ad969c3ced9a5e52df6480edeee5dbcc42',
    voting_power: 814293866881017 },
  { id:
     'oasis1qz22tfax52pskfc7qw7zdwjpwa7s4j5dsuq8sz82 or fbb264bb54978ae9d320763160dbb8586368da0dee4908766d7c9c8787f57c37',
    entity_id:
     'oasis1qr9wccuk6pqcr5ld8t2uf599e4ch5348hqeq53x4 or dbd5496ebaed86abf0fed8b7563edc012c2433d54c55afd14ca8b03017560d09',
    voting_power: 722394602152833 },
  { id:
     'oasis1qzz6d383exa42wfeep70f497zjehqtr94vfts2v7 or 4050167b1724c111cdc6422dcbaecd0a963c2c7c25adc1a9fefd338834a5805b',
    entity_id:
     'oasis1qqyynj90zkvyhja33w4ltgej45pr48f45ymmnsrx or 3eb083200deeca82ea34e649d4fad159dcaf8859fa2b43d6173f75a90f50c93c',
    voting_power: 1497909403243292 },
  { id:
     'oasis1qp0lt6y2kq8g7ffzy49acga2l8uefngz0yf9v0jk or 95bc6ce2196e77d5cd96820e76124f6826a177b1ed898f100130a01a715f08cd',
    entity_id:
     'oasis1qr0jwz65c29l044a204e3cllvumdg8cmsgt2k3ql or 91faf603a2ba4e5be1426e27cfcf07733ce477602ae4f964c52a67994501005b',
    voting_power: 1559686561844606 },
  { id:
     'oasis1qpq2ujrvl9d72c6qw9kfx9zwpvq5u38us56xm6ca or 6db90f65197c280fffd23a03d51f473e7b9c2781a4942a00b54a09ae29dcb28a',
    entity_id:
     'oasis1qrgmg0t3zxn4lgary6w227dv6c5dl55rfvh6p6k2 or d9b813140cd52ec42e42703b70d9ffa512c9bde9ae7aaffbdc68731450d57597',
    voting_power: 177090997409805 },
  { id:
     'oasis1qrs7wre6j6jrcp30y9n7hn9m9cy3hpw8tgcah00j or 8deceb63a9fad43ff00f7f6764a0be2e961f399b7900df20679496bbdbf2a43f',
    entity_id:
     'oasis1qzc687uuywnel4eqtdn6x3t9hkdvf6sf2gtv4ye9 or b6f3e59861efe5aa242fd30c06a3409123b282574922545399222f0b0ba1d2b5',
    voting_power: 391358837683791 },
  { id:
     'oasis1qpm8f53qe4hjhukuelmaasr3r0n09n8nzyp9rvls or 7ae76adb6530b747220bbfc160ddd3b14cbe3026ad6939108f04bf041960bc91',
    entity_id:
     'oasis1qqlq8jplttrmw982rrhp0svl8054xqevecks5yqr or 2a6312f91ce343dbe6f49d9a5fd6228499e699273f201aae0b2b1b84fc550c53',
    voting_power: 492527474727445 },
  { id:
     'oasis1qrflpa8fz5qkzqcqg049rq4gkpy6qe07052f34mt or 198d60a0022e18649e56b863860540a78241d32ea5dcfe7e4e7a33781c6efe4c',
    entity_id:
     'oasis1qps9drw07z0gmh5z2pn7zwl3z53ate2yvqf3uzq5 or fc5a22e6465d05cef41cf9a582ebd8e80cc120b36b3623c380a40b3884ee2042',
    voting_power: 1307482740245084 },
  { id:
     'oasis1qz7sam9dh3g4e70egpzs8n54rf6m3xumav3z6uyy or e2b52a14e136eeeae76a5b4c9b65eacaec5c8215ece3145ea77015de65d24ede',
    entity_id:
     'oasis1qzugextrcdueshq63w7l9x4xglnusznsgqa95w7e or 4f993b3ed391d35a19add9d9bde0e93bd005a4c52111111993b59249f9bc1ad8',
    voting_power: 4371845928914365 },
  { id:
     'oasis1qrqxafugm50enh78w92s3u2xw6zw3qt3eqrax4t0 or cb82d9bdd43f93d44188f2d2bc11edffc1a16ce5441d8fcb7c8760934897521a',
    entity_id:
     'oasis1qzgq240adkyxhm6598ex2jvgs7lyx5wmtg7cszmk or 9d9a017ee6bfa1db7b7d94e191fcc6428da8069f149c48fe5691b9d9207ca273',
    voting_power: 590297800017350 },
  { id:
     'oasis1qzhkxnz8a7fxy7m66cc3vmsj6fl05u5585nz3aar or 547b3d490aff202dc496a175acdc45b82ae4c7fa566e1cb8e92a35f4c42564b1',
    entity_id:
     'oasis1qp334gzlzrap6k2ch6wc9vxxplw9sg3v9cfvvgsy or 88d282b3dbf83490ae02908b3c3e1b441a2a4ecff90c1c52d21a2eac1921c50a',
    voting_power: 1331268760822052 },
  { id:
     'oasis1qrw7lnmqjt5eny5t4wyvcpmuqarwchrd95vravs9 or 48aaba82324e2443ad567e9f5473cef81d467920eca109cd4722d2f9e5060ca6',
    entity_id:
     'oasis1qzu6fvune28lsa8tllsc3t3nk2s0gcpllv8am6tk or f61da91f3367d8f054a50859c54cdc2c16c06f187cd82c925c43710b7010b94f',
    voting_power: 70003436724806 },
  { id:
     'oasis1qpv92ljpg0m6xkasm7sc0zfpn5he748uyqd9m4kp or 44e7bd02dbdf3855fa6eefb9be144247ceea6174b3a7935f10b06a0771dd82bc',
    entity_id:
     'oasis1qptk3ydjxuq3eenqwljdy45uxdye5tfg4sqar0fz or 445a567a26c90c79df828abd98ed4125cc720db22cb438b6d99061be05ef1356',
    voting_power: 757070917781682 },
  { id:
     'oasis1qrmj8mthtszl4hfwgdj7xz8hwqdkgj5u2veqqwf0 or e46368631f264a4e0f8dc5cbca2d88e74070ee7d404eca80b6db558d1cd3b846',
    entity_id:
     'oasis1qqrv4g5wu543wa7fcae76eucqfn2uc77zgqw8fxk or a7556c7d2b1e75b2a7ff91b390fb2bd795c3fbf00e21f6cf75ad7fdb24fce0de',
    voting_power: 3930786806355297 },
  { id:
     'oasis1qzz46k8w6mlyy2slyz2dwn0mmgf5xu66ggt8ytp4 or 44407b0e33cfc980a49f16a437733200e4bbe3a61626d804e3583d69cfa86575',
    entity_id:
     'oasis1qp0xuvw2a93w4yp8jwthfz93gxy87u7hes9eu2ev or 7205c7f3bfac6287b6997b1d0ca582c91bd667c26a9d59f12640aad3d2e50682',
    voting_power: 2362197136259833 },
  { id:
     'oasis1qr3k3q0wrv0kpjq0fx629kzqzpearnq4s58cgwt0 or 96ddca204b15ba71c43037e09de9036c516bed8e5aa9798d81b7c93332736033',
    entity_id:
     'oasis1qqlckx8uus05llpl5jdcsck6zceal06zgg3ll75t or e6006bf867ae5c3e83c1bb35bb436cae4d0ffdf6ed745a2ee16dc90746068120',
    voting_power: 408813658013984 },
  { id:
     'oasis1qrmznmpwujw5mw76w5cl7m0qyyvfx2q0ssrkm2dp or 2eea4d8c3fc4ecc827d132a6519790454a4dc0369d5322a29ec783cf6f29c790',
    entity_id:
     'oasis1qp9q8g56dwuak0nwsmnykyzsfahj6z49xczp6d8c or 76b3a91a808d70fc5cf8ca5f6c953b2a806a4196b47934147634c3a5edeabeb6',
    voting_power: 837150389129659 },
  { id:
     'oasis1qrsyxew429m0cmd5549zg3pl3h0ce0a9tgf42q4z or 09acc02ae6f7ce9302078127d5571530ca64301c3dbe97badbed023b891ef293',
    entity_id:
     'oasis1qp7x33cuvy8ydr0xwvqrdxn26wa04yj5lcl6r3v7 or 41e8a09f5739118996ac5394da2c9d277cd050fe7242835b771724a8ba5561f2',
    voting_power: 1751581034750 },
  { id:
     'oasis1qzvk4rfeamnn6e9xpu8lgl27kf45np5z7uldhkuz or ec4e48b7d8518a4e67750d50b4bddb953017de95d2a0f64f8467cb310bdb03e4',
    entity_id:
     'oasis1qpwrq93z8s9ytu2hfjtqggc9edgwfadzevs3trvm or d5a4d311f488715c6c3d2f3ab8803bad20f62666fe688563d60ac2123cb39734',
    voting_power: 4451287114311696 },
  { id:
     'oasis1qreek0uuuj0nzkdp5spj2rqt9mk4q78k658nzmkq or 7a33ebc7dc53a4a577193660b6115059fdd43cc14506c791b5cd00d7b6a4d535',
    entity_id:
     'oasis1qqx820g2geqzeyeyfnm5hgz72eaj9emajgqmscy0 or b5ca27dfcac1af774799446e5ce4d41690cf2b013878e53cd85d76d6b5fd7ac1',
    voting_power: 1747781378159653 },
  { id:
     'oasis1qp4yxwtjuu8eadr63laq78t0qvy7cy95pg9vvr8g or 63fc3087079ce8a645826336e6f28d093c35152ef5ffd8afe50da55ad157d8f0',
    entity_id:
     'oasis1qpqz8g88kvw49m402k8m2r6nv4p62vsdkv5d0u6r or 50357916868892cb1d485582e1ab19b71becc9a828cab212e6b3d7f29fe7a765',
    voting_power: 4203767810498235 },
  { id:
     'oasis1qrs74qakgmxcrj4vcvl6javrps65awk6x5656msr or 482035ce8475e63a42d9eba03f53ff09905084c8c712d989efe8567a6813756a',
    entity_id:
     'oasis1qpn83e8hm3gdhvpfv66xj3qsetkj3ulmkugmmxn3 or f43fa4ce24f116183befe732b7e17077a797444919d701f0ed65fb546e7b31e0',
    voting_power: 7485488918126699 },
  { id:
     'oasis1qzv8hqggfsywpgvu3km4xnukzrfltslxwytpq5w7 or 1ab7c83286a72d720fb92f75461a9d8a434b71e6d6376ead30cdbf88803c7001',
    entity_id:
     'oasis1qppjm5sxqwps4dpyekdvz530sjmq3e5eusp7hdan or dcd28c4ff433d757b6c6497048257fcde6b02c4dc120efd19f82df695e3b4092',
    voting_power: 656496685446630 },
  { id:
     'oasis1qz24zu242wdwcf8ghr9rmcn9anr94y7jmga8n9kd or 56a97659fbe51e717475e94e08d895df81a2cf0d39842a597ec7a419abfb17d2',
    entity_id:
     'oasis1qqc35xprrs0x595d9s0hrz0p60aey4cm8ya8at66 or 01a7a627e5bff8829fbd6412563c1514b53833b83d5720e06c541f58daa45364',
    voting_power: 397689350082400 },
  { id:
     'oasis1qzu6q5n5dhmm0vkng3zpyklv5r8djjle9q6t5crh or a7ba4950149d805e0f7e02ab9fc249978c615595ccbbd8754df365014e558c15',
    entity_id:
     'oasis1qresj0vhmwawll6fe2vw2nlapkp6nj6etcx7a32h or d49b6d1e9d2b0410470cea4f97c7c088b4dc37db54cf12468e4ee594572f8594',
    voting_power: 519411057181537 },
  { id:
     'oasis1qq720jlr6y2wn7wt8ts6al792hey322zmqqaex6u or 73bc9c561884a876d07ce75e79a8fdeb99eec4df07b1be01c4c3db68f222a51c',
    entity_id:
     'oasis1qrw82ag2sypeytse9x9k4uxym53l5lc5jyfs2sxv or 90dd35bfb2ffc2fea1beb7756a4f37a6009e7460e7a606c62559177b3854509f',
    voting_power: 2894739083187198 },
  { id:
     'oasis1qrf6yxtgkxaeggsd5amu8acjus27txzx2uxz0pa5 or 160f6f9575a3b8fece64784b325883cdf4ce7a7bb1b58a3ddd5c50aae143531c',
    entity_id:
     'oasis1qpcz9k0q3nzq4289rzq2hw2pwgep0ygnysa5pjdj or 26e1cb4e560c7e706dc076b015146abcc3a2fb53f49b1fa67e116a9eba68dcbd',
    voting_power: 3338653140225388 },
  { id:
     'oasis1qqss4wjavxrjf5dj558dszfx0xlkulvungzj3htz or bcc436d959e32e8aa788484221a20832f988072929955e2ba9ac1c19dbc502a6',
    entity_id:
     'oasis1qpg763ex50jp0e34lsu789smlzqvcv7025v7m7yx or eab781a42287b2a317d58dbaa37a7957ef798a7e646b5e88f7af425b2891b9d6',
    voting_power: 810918500220701 },
  { id:
     'oasis1qqcrnmx9qvqm268sklcr9czylu2f8lv3kuudghpr or 8a82c00e2ca2166226b3ef1f89bdcddfafd35f95c49c7aecdaf59c1f92f11c6a',
    entity_id:
     'oasis1qql4alk30frfa6xua42eu7tynkqf9vd5ug95yqpn or 597b3b1250659b7d256b67c6e28643a6e6de16ee6c2a48c355e7e55a8f98b880',
    voting_power: 2446313482596832 },
  { id:
     'oasis1qzuu4ahklv8ejy266lukpvad76k5ch8dputx2fze or a056b6eb5491a616c5050f905bac5c77d49904c26bcec983ad879c49b94d1efd',
    entity_id:
     'oasis1qrugz89g5esmhs0ezer0plsfvmcgctge35n32vmr or 6a24e01b2601da5e2e00c1bddc08eae52e045cf2119180e0d4808b8d60f8e429',
    voting_power: 4408743920337486 },
  { id:
     'oasis1qp0l8r2s3076n4xrq8av0uuqegj7z9kq55gu5exy or 196057bf63b1a3008bb111b24ff70d0f64ca12cf64a68e31b6faf5253b01f11d',
    entity_id:
     'oasis1qztpm422n7v98f4s7ja0wt5jey7fy3xpg5ye2vtl or 4430b20114c8769886ef92fdbd55c0608851093a12adc85992fdc9516dcf8e2f',
    voting_power: 198800422717162 },
  { id:
     'oasis1qpeend7sgmdzy0dhtjhrhyjyextepzsx2su29g9a or 6a8ea6e2a30679f7a6b948b0afa1a8ab169e5a85f5e2e43b613c536a32800d08',
    entity_id:
     'oasis1qz8vfnkcc48grazt83gstfm6yjwyptalny8cywtp or 84d055b366b2d485afb9f4305f44db600e97e2870a68ca73a7268c4c78208ba4',
    voting_power: 4541754778539849 },
  { id:
     'oasis1qzs7hjtx58jp9f76m9mv26z84u0app4glymyjn2e or 02263223000971d73dc86a011e73f8c9c3ed77f3760ce47492a56b416952e3a6',
    entity_id:
     'oasis1qr33agzz8r4xxfw9nhrdqcp9ejcv0f72ks05qt39 or 34fa71d68cdbd897d6ca9c6792c4b34478be7cb036c366295a6b59bc4a6d30d9',
    voting_power: 168531123744139 },
  { id:
     'oasis1qqzv4zn3yhvags3kqv2r3fhnyxusa20k659gn4p9 or 19bc9a4a54a61cfec83537739c8d0dce53745561ab3c95f9650a93359a8d0bba',
    entity_id:
     'oasis1qzv2rktycpcykhudyvg5l6u75v08lpfcw5nt7aj5 or fd972f1c2372288c32144174ef95f5c2a14684ac4485878945d0eda326930bfc',
    voting_power: 3100550545587167 },
  { id:
     'oasis1qqnucpyju04fjxlg5j5a0akscqhf34ulnsupnwx3 or 3ec7c5510ad7a86a05b68c1665ca1cf22961f311cff782ef3581efa901e9c351',
    entity_id:
     'oasis1qq0xmq7r0z9sdv02t5j9zs7en3n6574gtg8v9fyt or cc086d1aba64d4bddb04b68fe5e9e6de76ad5130a88fb30416bcaaf7e306e2d1',
    voting_power: 7013409920502899 },
  { id:
     'oasis1qz7knh9g5myce3ezn40x0j7sjwrnk4uyhycmara5 or a391ac0a9b6df257a51cf7b6bd2a04101bd2a2c39cce1f9c4689b6f86a2e865a',
    entity_id:
     'oasis1qpntrlgxp5tt36pkdezdjt5d27fzkvp22y46qura or 017f3326c8b40e7aeb7700a2ffc249a6d5d2cbada466041c0182a50980f8a0df',
    voting_power: 2634090536902976 },
  ... 16 more items ]
