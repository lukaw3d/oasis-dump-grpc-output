
import oasis from '@oasisprotocol/client'
import xhr2 from 'xhr2'
import {out, parseGrpc} from '../parseGrpc.js'
global.XMLHttpRequest = xhr2
const nic = new oasis.client.NodeInternal('https://grpc.oasis.io')
try {
  console.log('const output = ')
  out(await nic.consensusGetBlock(0))
} catch (err) {
  console.log('error', err)
}
const output = 
{ hash:
   'oasis1qp0tj295ax5lxge4g7zu4stcqy94gcj2c5mrg3pn or 776c49f2c2b3b55eb843bae6ff214a935cf6c1a6ae2dffc1007592b00e222cb6',
  meta:
   { header:
      { time: 1744596367,
        height: 24134100,
        version: { app: 30064771072, block: 11 },
        app_hash:
         'oasis1qq55xsg58lu0493y2jf08vuc2na889ngjvzplmeh or 51fd93d55b6c8412f4eca88aaaef39329a1a9d4d6a0b9af319cb7d940d01518a',
        chain_id: 'bb3d748def55bdfb797a2ac53ee6ee141e54cd2ab2dc2375f4',
        data_hash:
         'oasis1qqnzuv9c48427mq5j2n3r4zae2zvwwapncc65ftj or e46060df286e93bf67b1a0d8abb7e8859e5aa977fcd7c0dbbec6ddb20c506363',
        evidence_hash:
         'oasis1qzpa738xtlagan0rq42lsnz27l25yatc055dqtur or e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        last_block_id:
         { hash:
            'oasis1qz3ftd0x8w6n64hqyapclyuphaqmlpqu6qa876rn or 4341fc8d412cfa311e0070ce8e277db2f4712b200ad63a6f526f10054d4cdce7',
           parts:
            { hash:
               'oasis1qrtk5wgltlaakzxgajf4nuzmqzugk9vtlu6l5fgd or f76e5fa9d2678a3be4045bf117f0d56509441d78998b580b46645114d1532086',
              total: 1 } },
        consensus_hash:
         'oasis1qz6qgtc6ke5nz6xau0u2un9a4qfzkkzyjyvgjx4a or 294d8fbd0b94b767a7eba9840f299a3586da7fe6b5dead3b7eecba193c400f93',
        validators_hash:
         'oasis1qqsf0htha7alydfu0pl8hatr2jsxry8fjvg9y6l3 or f197c05450b625a889ad7eafc5f689b45f89f30c6e4369c905fe7403c201e165',
        last_commit_hash:
         'oasis1qrk036747r8lm4hh6lv93gm87a32wuv68sk33208 or c5f2dfa31c1ef3de0f0fe8f55d48004bec404c13da05f05f99be91dbea7f2c97',
        proposer_address: '1,129,647,267,068,042,303,452,689,950,806,634,305,680.472802792',
        last_results_hash:
         'oasis1qzpvr6uj39jshhj7julmlqc66jwe7jg9lcyk6va4 or 5438d44d0d984092d4fa0555c416f997d5ec941ea7e08b799223a762a73cc16b',
        next_validators_hash:
         'oasis1qqsf0htha7alydfu0pl8hatr2jsxry8fjvg9y6l3 or f197c05450b625a889ad7eafc5f689b45f89f30c6e4369c905fe7403c201e165' },
     last_commit:
      { round: 0,
        height: 24134099,
        block_id:
         { hash:
            'oasis1qz3ftd0x8w6n64hqyapclyuphaqmlpqu6qa876rn or 4341fc8d412cfa311e0070ce8e277db2f4712b200ad63a6f526f10054d4cdce7',
           parts:
            { hash:
               'oasis1qrtk5wgltlaakzxgajf4nuzmqzugk9vtlu6l5fgd or f76e5fa9d2678a3be4045bf117f0d56509441d78998b580b46645114d1532086',
              total: 1 } },
        signatures:
         [ { signature:
              '872826b08e2a443718a9e747c7b0ea7612ea55a58002bc7181b92d5853e5dcf30694fe026636db5097baafd88f1321dd862ac16dc4c3ebbff40856d805e8e70e',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '390,541,459,264,845,983,828,872,679,177,192,565,377.548909073' },
           { signature:
              'a122f8789d5a7fa194552eefa78464bb0f486f4b316ec03eb57067be982b78d2825786c0f0eef3e9a805172ba5751c8c8df8ec808598d99f434cb99861f6ee0b',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,129,647,267,068,042,303,452,689,950,806,634,305,680.472802792' },
           { signature:
              '78cd46f40dac5859e3a7eaa7f1d35ba00bbecc05a39a3ead7a4cf99a51978124566b09304eee80ffc9d901ced675d6e63671b512f8ef26732c9c205ab15c780f',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '517,733,007,101,376,864,530,875,362,454,715,187,750.10090401' },
           { signature:
              'e8ee4e166502fc46b7937b65cf4c2c36843fd3bde00a654247716e60f631f5ba844bbb00eb7088c3df7b457e4ac92e34bcad62e98510953e1e6416e2356a0508',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,108,491,947,303,869,012,071,506,083,764,841,509,735.847911776' },
           { signature:
              'dc24ccff9c53b794eea00d2899780a45ca4302647dfc63d420d6ab32ce2c8b9264f6755a342bf3786325ed7416042d728999dfbc36d0932381c7f8da6e592501',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '167,910,659,880,719,544,402,047,053,076,663,409,352.673357122' },
           { signature:
              'bb583191f8c0d24b99bfc1cd9779d1dfbb697e3b6409b9f8867f8488d141efdb4225a0365e4f67ea31824104264533068ca44d6373343b06f8f952e71841e704',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '67,688,070,347,338,592,786,306,527,811,479,405,666.880130812' },
           { signature:
              'ae13aafb41c66c733a7480dab42cd37c3a8bbaa6fc2ca8e6593c3bd8499c3989393c782714a093beb23a5bad8f5ac7ca9c8a8d434d16478f31fcf52100b56d0e',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '345,153,309,377,443,047,227,990,823,581,944,537,549.738174797' },
           { signature:
              'a43020e7d05c41448426bcadcdc7ffc4c086126678416a89d2f90f39b603c6c336bf00161c538d091d75ae57b388444add95d8b64d0e2714e2862c39ea9cdf0e',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '649,237,839,007,731,640,376,442,281,157,103,271,479.163251837' },
           { signature:
              '061834508a2c707306f0c0799a0d340e5813aa344121f63e8b574f5414c777faf5604bd83fb3e800567131077ab559f3dde2f8d34cf31eba208189cb3104d50f',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '403,742,315,507,575,661,188,694,944,763,110,016,138.25281695' },
           { signature:
              'b53af527b4f74095a154a3b06d114a4ec2ae00a8f690d566d20e1a65ef884fe6d4ebfc05d5d79404c14dc5ffcb43e87e753522cf645d4fc36279a2b33202e901',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '71,339,917,981,476,662,753,101,693,846,314,626,064.482202976' },
           { signature:
              '9e75d3c3f1733ff5a4ec9463bbf1da4a6b39d1f9ae4bd5fdb0b0b236bb873b002860f7bc94ae579712a9f0700a5893b44182efb51401def23e4d2f517b06ef0c',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '373,920,271,004,800,721,595,248,948,368,818,504,903.200262435' },
           { signature:
              'c3fa8ce85cce5bebdaeaed31a4c948b3c91a5b760d64b7dbf623132879fb3ea37307c586cb573dce564faf671147cd9e26304fa4dfc0bff4f3a02c2afabe490d',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,123,472,442,734,584,597,120,020,117,670,669,333,650.750868978' },
           { signature:
              'a99bbb8771c8dd6e6835e46c90611aa565779e6b3fad2e987433d3056c094f2879694c321a55f7a1b2b1253379f53ccda574eacefd0f49a0c83e557c90145806',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '847,702,263,757,883,122,613,187,267,561,224,757,103.560042302' },
           { signature:
              '6f0461a8b22f0004f167f358674215434e825cac3dc8681db7633146dbad196cf42225f8ada68d02d36e85bdc4bea9b45ee372668c19c515bbfe16e00513290e',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '647,847,751,820,933,636,528,407,766,182,642,746,592.987790036' },
           { signature:
              'aae3ec05d8c606ce3eec601f4468dcc2f86d202ba611eb38c9cb828a2a02cdb3d5f9cabeae48d7971301b3d85402cfd13492020c163b49e56cade5d1ae8bd30f',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,002,641,577,435,094,574,207,898,797,831,357,184,678.16722645' },
           { signature:
              'd55a9a1eaa5c033647cfdc34702d89e18eb9e2ffb86e4c10ba27452650b68118cb3a2ae199cd95dadbde212c99c4a86f6812df708d3b9377a90076df1718a904',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '238,713,977,039,622,368,252,286,417,444,539,234,946.028292149' },
           { signature:
              'fb471f78566e04ad0225677e8b963d25f3a4c3f320ea3bb649ccfaceaebe02c79f09d76df861ffa7951242d6314ec6dde1dc832960e4050cd043138675e50a01',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '112,027,016,572,549,294,841,159,958,735,410,393,289.718764447' },
           { signature:
              '15a9c36d1f483596cb26b809fda8dc323abbc140217e09eada89a796cd8ef282a723d6ce5f8f7eb5bf3f75883042bd72b14f94efc01fc8701f5c32cd519c1f0e',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,138,434,228,127,492,032,842,698,823,523,439,347,124.523512178' },
           { signature:
              'b385ceb020c29f7bb7c1e50f9d810ab0dc75abd42e602324699f01739ac5a867d60a5d1d7790d1831cf181916c8a44f2e64083cc7ad1003784e4698970ec4a0f',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '643,901,759,151,904,599,874,420,115,096,928,511,993.46854588' },
           { signature:
              'ad2f09942a67d9831dd41c0a271286f2d0221deb80db1b73bb50fb3189ad75b14a9c5115d88b051d63caf6441dccc652d44847a89a40d57a5f8e95ab615f270b',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '534,433,039,594,481,402,849,502,529,063,648,246,260.764704615' },
           { signature:
              '12ad7384111a2428c3cf469073ce1cb298b7a6bc17b4e0d7badbccb4e682b153c94ecd5238b40420961830547b25d2a6d57dec967534e2d8c0a1d12b9c32480a',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '358,073,298,989,108,715,005,136,056,897,104,527,528.600090414' },
           { signature:
              'acf72873fa28cb71ccd3a494f05a481f92f8eb9036a2973aa9f43bead78d26d9d7e1d6ed89825ba3ce7b7630d567ad0d887d5eccb6a9e64543fe73545b6d2e0c',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,290,316,391,089,158,600,068,075,335,494,269,826,571.832321179' },
           { signature:
              'dd4b22170c05c2ac8f113ee70e183f39a7b34eae1ba5f434e65b5ff345e39ea60f283ee7ddfcf9d6fb27b808e7d4c871323a7e53f20bdb3c1e96265ec71ad606',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '1,460,050,423,034,796,997,066,305,493,117,889,480,338.285560002' },
           { signature:
              '4514d770efcf0052f2c54394abadde790313cfe3792908a6407caf9df494ca1596f2f6ed25a5c823832f4d4dbc4d2992e1f267e0b0581fe2b31c16291ba34904',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '248,250,706,875,324,126,941,017,535,466,378,038,825.563879685' },
           { signature:
              '893a62b0d5d83624cdc571dde11d3495df0f071fd4ee3b979d17e2fa7eabaf8910b0401432f06e2e3ea819afdaad55d78d79db1cbb97711ed71aa40f885e4e0b',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '184,349,905,696,906,967,485,054,398,907,507,903,237.559384277' },
           { signature:
              '61d3113bdd8c4edcef272764c8b967ac8b5e94082f167ac23f7f40b08fd7708debdb67f0257152c9f7c1b67cad1517dddb4d1eb9e7f466b7c2b3bbd96fddae04',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,017,139,882,680,552,059,036,062,463,861,055,280,326.441216618' },
           { signature:
              '9524f2a8b9abfb1748d3978f719e0aa6f51f403e7cea78272c95d87ce33c305deba4050a71d8e789fdd6630facd7d5dcba951d613b847d05e90fe053912ab70a',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,302,135,912,421,007,240,226,840,439,133,665,468,724.672959806' },
           { signature:
              '79598e26ece78450d79d35efdfcb58c9eb31bceb31539a7357dbcf314854bee43430b35f24ce713c662e4556703c8294d3d7ab49f92fd51ae32764059ce7dc0a',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '79,967,579,620,787,738,968,743,654,078,738,435,511.636276868' },
           { signature:
              '02db7361d93f91684f3bdb296194201cbe637811b43e1ad4311cd7e2f7c781e4a2f3ef6eaa94e8d77ddb82bb403709934f6659b5cd2ac2702de5ec477e689d05',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '392,648,378,605,532,021,276,302,253,377,911,083,349.718094662' },
           { signature:
              '26aa5fee130af23e4363ed40b02c96c3e72a99d94b356807bf5484f04c2c35ec888f99cc5970ad0c1f8fff5b942cefda58cb956779d368606751482c3816e909',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '1,059,258,062,255,240,511,240,924,666,513,261,014,316.973251069' },
           { signature:
              'dcfb5213401623043068ec7cf7601ac697b3c89416f0386137ecd358a4750901b160f124ba1a1cee5994696f91b902a1089db9c8ee5edb3121a70aa91e8dba03',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '1,039,058,054,062,009,263,868,224,611,176,195,917,353.561774613' },
           { signature:
              '01a4edc8fe3954ecfeb39a32b15dc7bb435ef3d85c71fed969077d3e301a7714d8d4c4a4ab2c1b48a3717f0e914f8708cf401f3a2c9ede2a89884ec91fbcf00f',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,073,094,559,738,413,563,006,247,738,556,803,273,144.648898225' },
           { signature:
              '193424ad87d6dff37f4002fea24f72d86d95a2379cc32f54ee22bada8a0e3efd0839803e0b6bac83901139818897258744242531a0bd6ab3f342981e03ab620b',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '166,042,064,230,264,271,845,149,581,948,567,539,957.628438945' },
           { signature:
              '1f27833847487ace97b5979ab303b07970f039caa80f8e57218405f418180f997161c9ba959e8bf4117761d74dc459babd6b7d736424a704feb27157f419790f',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,240,205,092,977,411,759,244,074,629,394,868,440,036.354897975' },
           { signature:
              'a5b48783947f602c194fd7755fc2dc51714d3c20891f94601f7664a40b869124a1e6608811f477ed74f840ec01b1a59a7a727b0c47a692c1eb0ec67088208902',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '744,041,894,243,058,609,288,675,037,449,262,371,534.095431861' },
           { signature:
              'a43d51a95b84c931cda5ec4bc17c6b683f979bec3eef543f4cca6808fb54e7c94ca570bd13215c96f4835982e67c7f16b5dfa085c9029d84fb7748319b4f3702',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,285,878,772,609,173,511,981,929,444,624,850,791,237.515198648' },
           { signature:
              '460e41837a5a2810c7dab239b578fd2c217e538efadaa25e47a2aec2224240a6ee3d89a47c4d93a673ecf13639795dedc8350655cff7a39e8e739a2f380d220b',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '42,160,674,271,580,528,933,615,315,246,468,215,542.449180658' },
           { signature:
              '662b53958e2f20b57766e23916bdf0143073e62cc3397bd896181f6f1a41ea753c326ef53307e0c7e2c1bffef9cb5c9467d0dc2b7c276f4a0c370e5543ab600d',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,161,697,298,791,506,428,996,964,364,958,796,175,634.379083209' },
           { signature:
              'af9cc4089cff55335c89d647b198cccbc79ba047ee84adeacec34d3a130fbbe3d0cf153c5d8f678db2719c4d71ff5b8833d6f7f43c4c5de6f9cfeb38d5c2d104',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,101,566,792,416,548,116,858,106,820,013,590,293,072.540205366' },
           { signature:
              'b5c7937ff812fe2ee8708de2c4f08323d64d1857d104ac787dfb959dcec5b8d4e6c1d9f5fc83e5063754796989ceab3b773ecc2a34cf54d55fcb9db769f65b07',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '830,251,538,017,706,461,239,366,701,731,475,007,107.091209583' },
           { signature:
              '60f6bbd9f9d6b7f8407e8bf994966f357940d9f5f02faf943346df3e4fdf22f8d274c6f0c88f687ab23618bba9679f444076d40b5613df823ece6fe47af55108',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '706,440,337,845,736,403,847,149,977,779,348,615,613.972258456' },
           { signature:
              '4be19a321fba08beeaad72ffe8d722d017d107f8019dd7f5619dbd667db1b67a8397be934fd2f6145b5ac917c99687b18b1ddccf4e01f2d338bdba30ae8ce20e',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,460,866,119,734,174,174,788,272,730,151,205,959,602.497931857' },
           { signature:
              '15d9c667b99372534661124271de003e580a804431fd83bc0580656ef2ced9377dd51e46214dab3eaa4a02d8f21d66c39adfda59b58843fd338150e8c8c2ae0f',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '253,586,970,573,349,358,026,095,493,813,295,828,077.377588581' },
           { signature:
              '18c4fb3dcc70030a9663509ceb10c7e85e5e843a1847e981bdc1c86f551bd8ea704031fa5253205b0d7abb1f9b953c1775a76f513e2dc4d224b700c1db8bea01',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,007,485,409,653,513,729,515,568,923,055,513,066,170.126398582' },
           { signature:
              '9800cb9aacc8d4699cc71f219d9378b00ac1dfd65e2aec1f6db9905036c8ff9cf8d2bd8cd516bce322cdc805a54b3afe2677f51f59bc832ff769502513e9df0b',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '432,357,426,252,111,997,195,052,045,678,768,985,847.854322997' },
           { signature:
              'fbb670b35a7360c1df4a7606012208b1099075b94dc26ce881c5e98f6edad508a3ebc3782d005b1e7dd4e1de34105c83e17b975cfcb120be04fcf56773e1760c',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '916,460,161,563,630,780,530,789,323,326,147,082,808.566232813' },
           { signature:
              '50dd41f388044b3b651ddac9425d1f219ab22c5e150a542a47ec9950b7feb81a9c6b9565f4e1542c3406d58e1f15f15f1c09b85aa3f70d954e695781c4bad60c',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '753,471,794,187,054,844,930,957,379,289,187,063,330.394445657' },
           { signature:
              'e930ea5a4947a9f7097f138b9cc8cd8fda03faa81627b1b4417a37da22d7fdd5592dd4da672aad2827f086ac61d627781df6c116badbbaa1045eec6a94bc1f07',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,325,065,985,078,924,173,666,232,236,561,945,999,055.969309115' },
           { signature:
              '67b7a7765340269977e7c4e1fbec1b25de40fb4d8de35f0480599bc9257bce5e851c071629f2c2d4efe23a82d55db6b2d8f593c6d21f199b141084bffb0a1b06',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '94,865,583,769,120,179,624,061,284,477,027,582,616.342181417' },
           { signature:
              'e68737fcfadb6b0edad47eb9f9dd6579828e0f30343ae552ce5410b780af76ae3a58b54fbfb474acd411aade7b4e6690515332d064220411fe6bd390ee974e05',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,269,660,596,060,161,683,624,906,608,892,743,647,841.664156004' },
           { signature:
              'f987d9987cb38e898eb3e959a47e75a3eba0fdc2e293ff69ebcc42cd339b971a560c8fed6032c1b14955a9ad0529553beb09a98566791d68825e5449b861090a',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '17,599,524,059,000,896,698,713,526,366,024,633,213.016460833' },
           { signature:
              '31533eb236f735601c428a0c5b70ac675ee5bd27d1ba20985c716bd2c9df35b41fab6000b4855c2e5e041ee1ed135949fbc746bb4911ae36c54d24e0cd3b5800',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '93,062,291,593,451,127,981,211,554,599,206,546,467.846320971' },
           { signature:
              '85007131f0fc3d7215c267935cf6d282cdaeb3d8d9aefeec468163d96bf124f8abb02d3ac51ff9bac04b0e1ca8c72dc54704721e08ee7a90190598e8e83fab0a',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '452,689,866,735,399,738,738,133,126,721,988,660,071.958804763' },
           { signature:
              '0598a3aff20fd263bff80b239d6e087b7c8175641d532a2ec5c3a6cfed1fdbcdcb49657a91c64541aaaf485f2ca05dc98be5c38c322df048a90702d30fecd803',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,264,647,475,772,242,618,087,096,491,419,791,600,252.210182283' },
           { signature:
              'e58005525f8b0ab2c50ebf1a6379f9d9cf068333195e41cd09a0e2133e5f7132b257238e4fcb3cd0d69e48ea386d3fd939c7d306289cf3df493800a6457c4604',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '394,062,626,629,160,812,385,150,667,058,975,640,354.647804276' },
           { signature:
              '30626556b5347a8c5a34c28cca045c5d0fa1839b5ceb251aadc15a883bf9d894e0a8df003b918e5a28ac2a13ffcea3568c58c75f9394de146e1b1cd4eb35ad09',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,113,244,336,663,168,080,149,141,555,028,046,170,527.224572757' },
           { signature:
              '0ee7b042c8996ddbc1ba700044d30c18a46f0a6244618b2251ec7bad8660e93ff8d0bc9223242203ab405211fdca400bed1e32ac5845c895d664faf67acec005',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,176,670,025,972,000,736,446,450,187,460,993,216,672.865815209' },
           { signature:
              '369ee1427aa274c259436d355c9fcfe78aa754e5d6d73b6fec9d21e0ab661b1ae3b29edac55ffaa13cecbc97022e16e8ebfa4bdc6bc43e4693c8596f7d4e9a02',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '286,032,749,452,614,691,402,421,937,693,922,587,406.686715008' },
           { signature:
              '426bfa082c8af69e3a1ecdf6a094a49ab9ed6d1eca2365f493e2cbc7695d6dbad288177e24ad1b82e0afaf3a37858da8c54be3477c9317e92bb644ae54f2720c',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '442,700,821,055,157,338,695,854,258,988,091,484,886.101817115' },
           { signature:
              'd72cf348a8bdb5ba98a160e8065fbd0239041cebca4b2887188724bc38a4e5e5ae62c4ab674e7bd92a79f03831b8af44d82ddc944e2a5e306a2cf2a223f0d100',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '371,396,871,531,902,041,913,058,619,980,047,604,968.580824495' },
           { signature:
              '2a935afa5c938c3f7552f814aecd99cd9ab2fb16eb70ca2f9739524ff7768aa8513ce31a08a4547d9cf041f19e682a9dd0db30f67b00e0d40c93f56e91b2640e',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '533,023,288,731,109,708,640,563,727,711,194,830,453.008970014' },
           { signature:
              '3a8b55ff3dad5f795cb8e6b54f928d0a178332425abbebee2251e5b7ef7a240e7d4aa4a8e28fe70dd65681f12e03254876768ef8c38f2a7fc4c18b182a936706',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,417,718,577,721,329,062,272,556,478,640,386,357,164.381489676' },
           { signature:
              '07765c5dc98bdf3d200d648ae1d82420bb21bcd175d2769b85a3ed4a4baca43d06cd12ca44bbd962d20b3f6eb566fd1b0a80710ceb72133af4e21994f102aa01',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '692,681,890,699,775,339,724,627,063,635,219,740,606.715595776' },
           { signature:
              '730c729c32706e0d4ee7b309e765c14f20f54b95fedb650f6af5f835e4ba7b64ed27ca79f97b0e130f0505a75208f7f65181ddf6cae1e5e3d28360e83178b00f',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '387,503,943,819,385,786,302,419,522,390,551,150,580.931187606' },
           { signature:
              'd66ebe59f10bff56d6f8b64c34891f9e6ff5480143be519c48d2b3b583c642a318336843cc4eee47c0d1d7dd07ca3c4c2deb88c5ba8a5f209d491e00492d080d',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '916,193,497,114,426,665,617,081,743,104,765,474,329.54963963' },
           { signature:
              '490ab007eb8294184ebe4a332c9d5e83440cb9adf8c174ad6cb38a970e8ca96312b967bc9a74ad735fe4319a8caf02e98b557224f7df9c28154bf8b07f9ba40b',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,049,724,856,017,082,687,630,264,642,657,123,019,209.805993857' },
           { signature:
              '25dfa9c3fba9a36e18f6124f327c60b866b0ab1412d85622e23b3dad043e331be29f70d68307d586317a903c120dc828d9e1cfd93846cba11add4d36c536200f',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,102,906,273,590,310,851,416,363,743,842,011,235,644.273400029' },
           { signature:
              '7a83bc8dee3a70d040c62ff7bc7d3f07745a42bf493582d0e82c65c7525e7e1e629c828dd0d9317e6330f35eea5151fb2694fab629c8d0d51542f46b87c0bb0a',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,134,003,516,294,824,364,239,143,834,923,421,063,131.925432278' },
           { signature:
              '28313092a086b802414fa88f5009d26a7799d76a563202688677d6f62aa5c663a56417d9b7d8c74ceb0e4eb84c82d1b6e4a8c8c7b46d6a4285e7843127145e03',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '826,738,831,773,455,264,773,160,518,646,640,489,368.776158104' },
           { signature:
              'aa40f9bf93c41994799b2d7a5d831427640598a40fe5b66d9fffb6278faa8b526b774d1996d096e916759195a80b41925139cfe9abb8d49ea119f5f7f7be4505',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '736,926,099,089,716,519,143,659,116,924,665,486,390.744785826' },
           { signature:
              'fd3a340d3bb89842e3506085779f552726ab549d121fb38fcf41bc33445941c2dd6a920364af2dddc30a6bb2926f69514e6b8abc0f32c7afcc4a75ed1f129a0d',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '789,287,621,301,685,166,272,245,075,739,499,973,248.756504723' },
           { signature:
              '96429f4cb9b51ef4de81fa787b0044a257b55128bc0f0c7cec1d4a069066b87ebe76fb4abe61c9a9e4fa85223bf74b467fbe163e5b1b98bb9362756aa0e13805',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '768,892,114,321,615,164,912,474,190,059,843,885,214.551328493' },
           { signature:
              '81a3ff13f24e8c6f93ccde7448b0fbe0e5973484c8a919985c66e9d63e9993b58e3a35e642130943fb9eb0228c8bed12c4fb07691fe94b07cb993bf4cf927a08',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,024,818,612,953,936,538,555,539,094,063,462,838,774.930393082' },
           { signature:
              '6db1f639491b82b2883afe2bedfb94ddc5ed425a85216b9379ac7a40333511d21837e7adea93394056b47ee7770727dfcdb7611944ada60ba7f6cc3f8620b10e',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '551,733,528,875,206,302,408,244,453,718,581,998,593.457581541' },
           { signature:
              '3096bc6a727be6e0dace8d8a753bdedacc9e78837e26a9f9a42ed00585b6adc432eee60f05f4dc365d07288523eef33fe4671fb2459685ee3132f9af7ae1410c',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '779,404,811,601,191,737,803,601,253,188,281,914,178.840144676' },
           { signature:
              '528df8d66807a85cc145323ca380c2515073c87eca18ffc22e5b89276a96137d96e65fabe27aa165ebe09db64a53ff42af1da0d2a53be95887cb16f610d14706',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '991,329,902,702,857,572,996,104,004,622,690,495,269.327777769' },
           { signature:
              'be3dd9034b7c824e72273fe6b39b20fdd6c58c9dc1ef3a472c1d3ea9022b16a73f536cc81e24802a7580a831970525235cb071d8845dfd45634371f94cb6bc05',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '232,423,185,553,241,080,529,122,997,416,341,933,658.927621553' },
           { signature:
              '33fde0c5fb29413d384b5038c4f4fe94d8aa015be08d4968efcb33ba9b9c644697408cf1a07d53a6fd60409f9228fd815112bba2281be859f5d1dc680b3ddb0d',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '431,114,176,684,764,789,550,468,231,738,333,068,774.271820185' },
           { signature:
              '3e6a480acd45fb47f5479bc3096a53e6080d71586d24ad927fabddf9f1bf4651d0085941762e79cf69beb5a25541215c67f9cfc19b55eb8dd6fe5e6272365c0a',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '1,250,745,206,304,694,351,112,001,877,451,875,040,503.052276803' },
           { signature:
              '21dc11458a85dcc476ff200b018c82c95321e8ef0c1cbff2f84b7270f26965aa7e346d46a13d5b5b3b155632facf153619348aaa52817c7217e7497eef250f04',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,101,652,794,413,446,362,901,366,039,152,011,414,465.836935109' },
           { signature:
              '94f60eb09a168dcd5daafb6b9bbf4b5e831524b81628318e30b6a41e94062c444a29a97cf29c147be64e17905e245c4469ceef18fbd9ab29d2de53404704a204',
             timestamp: 1744596362,
             block_id_flag: 2,
             validator_address: '906,435,770,312,598,985,243,199,886,229,689,405,187.766865771' },
           { signature:
              '44c35a86aef47b531128c19fd7bb3e59f9e566b177a577ceeef84ab93eda2068dec7ce487305b2f4a634ea0a205d6899c655d0389e8d3fe2c083db174947b10a',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '376,894,630,641,457,525,772,596,485,049,115,194,353.687977622' },
           { signature:
              'a72c39ff0fa075754f5cc8dc69610dcd8ab1ab8679c40b6686aefb7ddca0e609e28b27eeb26b2bb056738e183f860bd133090dad273bb97682aa1faeb5882f0c',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: { as_CBOR: 'm�ǈ��W���\x1F�С\x7FU,݉' } },
           { signature:
              '86846c1e607071762342c827d80164fd1b65823a1fa265979a48556e9cabf451f375276a5e9c9cddd18a925868bc120e2b4cb1c9872e831de85a15f255f9c003',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '668,659,118,818,902,776,087,417,740,435,823,215,224.858525733' },
           { signature:
              '62ce07f30d0298e8bf4ef6f332097f4ac0dad6d8949afd68aebed4f90c31817f412e168191b591d2f472817bf119491d74e7e6b16486689c7bc96c7fd69f2706',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '730,199,986,019,717,834,735,313,088,687,239,290,358.135976821' },
           { signature:
              'ff8aa2c97f2ff04edaa2b56f6c1dd55c329d8b35141d60dc4a2d0a20c57baf57683ccaf09e69c14cc9f2112bec840b79a090bb21e6f50995f2d2b04b6ff1ae00',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '145,934,518,380,999,359,506,643,620,222,725,946,608.84280858' },
           { signature:
              '41aa161b422218de782b84a7a74f9e77c4a163d430c237255e060233abf5547904c38cd4ee517f3ed92cae6a539ed3ff038c4cbb6945586bd9d1900f78232003',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '984,440,399,375,914,266,584,118,766,257,914,040,672.758975639' },
           { signature:
              '882f9bff26e53d02466330cd3582d9335c2f2209cf3ddde8c52da260d1f872b6689cb90a7fb299dd4dee4799c15b8f5361804bc1fdd9a55952cb7a772421d607',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,265,713,169,250,032,023,303,794,599,247,456,481,920.380416667' },
           { signature:
              '8d78fa055ecd0d8ad7358de6e2f393d4c87d7086fa88dab5429b86a924718514a97b770b68627b28df4a701ea7539e1eea2dc934c966ec5bbacc186990e3b204',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '340,368,627,682,117,407,481,505,663,278,343,268,787.120038728' },
           { signature:
              '82b741094406a01a26d722d4fff2f59008ae61ab825fa0036ce403e473ec51c78797b0205a625c64e8da3318b4d1d6acfbcb215f575d9e61ead02a16675f3e09',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '934,318,129,896,063,941,041,560,790,384,030,257,649.507434424' },
           { signature:
              'd611c555f5b784736ccd72229a995d78ad059d60ca833df4e0523b7b20ba9f3707b3d9d342092964f0932d4f305e0cc60b58be6f553361e5161db28fc298ce03',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '700,890,234,998,553,987,631,332,940,632,735,611,050.859118358' },
           { signature:
              '20d1e67e625f07fc5463675a3cf2b1e96c864282d75f98313f9c82b3a5ede209fc6af708e0124e3b70d02414935c54ec65b818022ec139195f5bb828fcf4cf09',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '151,331,994,522,650,526,972,246,885,092,797,264,491.686672003' },
           { signature:
              '521cb7989f0514863dc410fa28587c9408cdaa5b8c1e37bfb2b831e156c05b8e78350490a17bf4105be2b068c3b295751e93ab26a060dc9015383fd570374904',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '1,070,384,558,393,509,871,332,693,943,409,741,969,414.602341747' },
           { signature:
              '5c18f87673d92fc55ec9a6daa5fb5ba8b23bb96d5efac892204d82198614ea7930a673b47d0bb6fb69bd0deb630d8e6766cab5b20b3fb62479bc45afe1f6ea08',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '1,122,517,794,975,115,001,506,774,780,110,577,827,133.169295309' },
           { signature:
              '68ad4274b8d78cc8135417bb75f70ad9708753615c958d451d8d111d13ca375921a07c170b13013262c705f81a8783a20b174b914260359fb8835108b4586c0e',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '1,419,805,226,530,588,826,423,972,410,213,939,439,335.151094841' },
           { signature:
              'aa40380d671ab2127faf1175b9e7e6a3a0c06e7a7e14bd375be89276e9460632de1bd346ea355924868101bd1113a564a51f0e34ebf4916448fb2018f97ffd0b',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '589,092,431,633,671,270,962,057,695,459,954,915,764.88803445' },
           { signature:
              'c538d370566e18e84bee5410c78cbda7586fea1c0f3e9226f3fecc38d350a2bc2dc7519a3ff28517ecc4ebfd8af049ebd71b90eda309f3e6e7d2d7a0193a1f05',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '662,645,442,109,376,591,042,683,681,597,380,234,105.46511523' },
           { signature:
              '54e3152075317c5fab73946df21e6ecf9faa06ddea69ef7e2620d1e58d5b30c2dd71a4f0da77d0920f9d854e02a7baaaacd5b78790cb7f9d07f085ed7ce0dd08',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '954,914,269,467,377,432,388,370,253,160,153,696,753.008195679' },
           { signature:
              '5ef77a61d085464a6d26d99e8d9c215e581c10a81583deb8312ea377ba4c5aed4d42208025bbdb3a3a476452f7fb7442475e64986bc0c1d150bc0d3026368a02',
             timestamp: 1744596367,
             block_id_flag: 2,
             validator_address: '86,955,288,866,230,394,825,329,262,220,878,236,764.278206554' },
           { signature:
              '4aaa649364292a1046229bc76e543469237b67fb12cdb2bf3b00aaffd8d17009c19ec578dc0e6c360792ec70ba499537e537110f0f70628db891e82e44119c06',
             timestamp: 1744596368,
             block_id_flag: 2,
             validator_address: '1,431,846,827,470,762,111,145,393,582,741,652,060,498.253074156' },
           ... 16 more items ] } },
  size: 32218,
  time: 1744596367,
  height: 24134100,
  state_root:
   { ns:
      'oasis1qpg3hpf3vtuueyl8f8jzgsy8clqqw6qgxgurwfy5 or 0000000000000000000000000000000000000000000000000000000000000000 maybe Cipher Testnet',
     hash:
      'oasis1qq55xsg58lu0493y2jf08vuc2na889ngjvzplmeh or 51fd93d55b6c8412f4eca88aaaef39329a1a9d4d6a0b9af319cb7d940d01518a',
     version: 24134099,
     root_type: 1 } }
