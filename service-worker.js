/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_saber/css/styles.5797a3b7.chunk.css",
    "revision": "48309b98cc3e76e406c6d078c7f18b9a"
  },
  {
    "url": "_saber/images/20150520001-b3ebdbea.png",
    "revision": "b3ebdbeaf7b1ccfb62d90a30264f3532"
  },
  {
    "url": "_saber/images/20150520001-b9302de7.png",
    "revision": "b9302de7443e311bf56063e7736b8fb0"
  },
  {
    "url": "_saber/images/20150810001-7e6767f6.png",
    "revision": "7e6767f643fcc435e4ea8a2f1946c252"
  },
  {
    "url": "_saber/images/20150810001-90f165c0.png",
    "revision": "90f165c05687335d905993792e202cd6"
  },
  {
    "url": "_saber/images/20150810001-c6af7e0a.png",
    "revision": "c6af7e0af9de8be7203470e4a3f1dc68"
  },
  {
    "url": "_saber/images/20150823002-0f2791a2.png",
    "revision": "0f2791a25dc77790ccb0acee444656e9"
  },
  {
    "url": "_saber/images/20150823002-7d9d5087.png",
    "revision": "7d9d50875a13f41e33e01a450b1150ad"
  },
  {
    "url": "_saber/images/20150823002-dd0e6787.png",
    "revision": "dd0e67871df4ef23957bf3d633b8af15"
  },
  {
    "url": "_saber/images/20151002001-f69795d7.png",
    "revision": "f69795d7b7533f04ce641d04655a8af8"
  },
  {
    "url": "_saber/images/20151002002-da500b5d.png",
    "revision": "da500b5d09dc2d3a5e79bd4b937e412e"
  },
  {
    "url": "_saber/images/20151002003-139a45c1.png",
    "revision": "139a45c18a81b026e4f0e86b766c787f"
  },
  {
    "url": "_saber/images/20151002003-3acb15c4.png",
    "revision": "3acb15c406ec024cd0a3cbdfbdaecac9"
  },
  {
    "url": "_saber/images/20151002003-a1499626.png",
    "revision": "a149962660275e9a612d5ec0dd90d62f"
  },
  {
    "url": "_saber/images/20151002004-6923da2c.png",
    "revision": "6923da2c6539e2ad48688d6b94b1bc17"
  },
  {
    "url": "_saber/images/20151002004-ba7ef47c.png",
    "revision": "ba7ef47c0760d09b77a6074805dba16c"
  },
  {
    "url": "_saber/images/20151002004-bc82c903.png",
    "revision": "bc82c9035c08379692b14d2d452500f7"
  },
  {
    "url": "_saber/images/20170130001-10525b8c.jpg",
    "revision": "10525b8c8e3a5ec2f24468e033e4f72e"
  },
  {
    "url": "_saber/images/20170130001-4cb0c87e.jpg",
    "revision": "4cb0c87e7f3aa58b2880121f9f8ee63e"
  },
  {
    "url": "_saber/images/20170130001-538d2d93.jpg",
    "revision": "538d2d93fbb2a2cedec85c7cfc2e64be"
  },
  {
    "url": "_saber/images/20170212002-111fff88.png",
    "revision": "111fff88c0f7255cc6da5c30eedd4de5"
  },
  {
    "url": "_saber/images/20170212002-17ab965e.png",
    "revision": "17ab965e4311aac588fb927c01fb76ff"
  },
  {
    "url": "_saber/images/20170212002-bae01c76.png",
    "revision": "bae01c76c03349ba7c0f9d8d49e63d16"
  },
  {
    "url": "_saber/images/20170212003-10b2fce5.png",
    "revision": "10b2fce5c3f786494b9fc8d1ab380bd4"
  },
  {
    "url": "_saber/images/20170212003-2d656a57.png",
    "revision": "2d656a57df07963634d3752181167d42"
  },
  {
    "url": "_saber/images/20170212003-98248bf0.png",
    "revision": "98248bf0c7ae9c8673b21803ae8038ea"
  },
  {
    "url": "_saber/images/20170212004-0ac7af05.png",
    "revision": "0ac7af05a995dffb18bb6ea579501f10"
  },
  {
    "url": "_saber/images/20170212004-1c6c0cc2.png",
    "revision": "1c6c0cc27291b3c48b57820860ecb979"
  },
  {
    "url": "_saber/images/20170212004-4dcb0f71.png",
    "revision": "4dcb0f71af4905388b8f7baf6dc8e89b"
  },
  {
    "url": "_saber/images/20170212005-583b2311.png",
    "revision": "583b231187c4e3edd019712dbcf6b55e"
  },
  {
    "url": "_saber/images/20170212005-92942cc7.png",
    "revision": "92942cc7700bb1c88a56baa8d95e3976"
  },
  {
    "url": "_saber/images/20170212006-0f62319f.png",
    "revision": "0f62319f30e1c8b512b4f86353e9113b"
  },
  {
    "url": "_saber/images/20170212006-e07faa74.png",
    "revision": "e07faa74411dad440faec08cc174d45f"
  },
  {
    "url": "_saber/images/20170222001-73c0ad38.png",
    "revision": "73c0ad38e42ace5631980904ff2c0980"
  },
  {
    "url": "_saber/images/20170715001-604135fb.jpg",
    "revision": "604135fbe417621287168ee074c428ff"
  },
  {
    "url": "_saber/images/20170715001-9bbae493.jpg",
    "revision": "9bbae4937330bb3540dddb2871abc1ee"
  },
  {
    "url": "_saber/images/20170715002-8334582a.jpg",
    "revision": "8334582a70c65fcf3374856323d24e62"
  },
  {
    "url": "_saber/images/20170715003-1f26c549.jpg",
    "revision": "1f26c549f10f31b49ee8138d7b813a25"
  },
  {
    "url": "_saber/images/20170715003-8207bc1d.jpg",
    "revision": "8207bc1d94f56fafed4eec13739938f8"
  },
  {
    "url": "_saber/images/20170715004-36c5a8a1.jpg",
    "revision": "36c5a8a177720683056a613f3d126a08"
  },
  {
    "url": "_saber/images/20170715005-303934ae.jpg",
    "revision": "303934ae4ac29e06eb84018528b23b88"
  },
  {
    "url": "_saber/images/20170715005-af9ca476.jpg",
    "revision": "af9ca476c0efe9df9329608c82432288"
  },
  {
    "url": "_saber/images/20170715006-e75d2c99.jpg",
    "revision": "e75d2c99fa59ba20adc0c3e43f3b0f62"
  },
  {
    "url": "_saber/images/20170715007-792a3346.jpg",
    "revision": "792a3346c8160099e605e2ed61498ee9"
  },
  {
    "url": "_saber/images/20170715008-f0eb5fa0.jpg",
    "revision": "f0eb5fa09673a2f9ab14114a121c3f95"
  },
  {
    "url": "_saber/images/20170715009-2317a242.jpg",
    "revision": "2317a24294517e3b50b6e3daca80462b"
  },
  {
    "url": "_saber/images/20170715009-9b821f03.jpg",
    "revision": "9b821f036e390194a8fc1e75d5e453f4"
  },
  {
    "url": "_saber/images/20170715009-bf0f3b8b.jpg",
    "revision": "bf0f3b8b65bf61055feed07b7a15f099"
  },
  {
    "url": "_saber/images/20170715010-4cd2ad66.jpg",
    "revision": "4cd2ad66a7c3c7ef69c19d8453a50b2b"
  },
  {
    "url": "_saber/images/20171215001-05f89c50.jpg",
    "revision": "05f89c50db31f70e45275159d3b44c76"
  },
  {
    "url": "_saber/images/20171215001-2e37c293.jpg",
    "revision": "2e37c2930affb3899915c26e6233247b"
  },
  {
    "url": "_saber/images/20171215001-bae8fa46.jpg",
    "revision": "bae8fa4679a86371b8279eb5ae3383e1"
  },
  {
    "url": "_saber/images/20171215002-57e0a547.jpg",
    "revision": "57e0a5478b7be366cee16d4e1f173405"
  },
  {
    "url": "_saber/images/20171215002-65d314fb.jpg",
    "revision": "65d314fb1f2d94c45d7ca1a261f983b2"
  },
  {
    "url": "_saber/images/20171215003-4097528d.jpg",
    "revision": "4097528da8c568e5c6818c7645c8e9a0"
  },
  {
    "url": "_saber/images/20171215003-cd440a93.jpg",
    "revision": "cd440a932c681cc7b46a9c9ad6d29539"
  },
  {
    "url": "_saber/images/20171215003-efc4869c.jpg",
    "revision": "efc4869c70adfde2173a1879128ea9b8"
  },
  {
    "url": "_saber/images/20171215004-22a92222.jpg",
    "revision": "22a9222291957e26343a09b991d68ac6"
  },
  {
    "url": "_saber/images/20171215004-f1cee44a.jpg",
    "revision": "f1cee44a1415c3f067643989b49e77b5"
  },
  {
    "url": "_saber/images/20171215004-f3bc16d0.jpg",
    "revision": "f3bc16d0bd83f91f00f682ccb43b9197"
  },
  {
    "url": "_saber/images/20171215005-59234547.jpg",
    "revision": "592345476c76d3cc8dfa9f657c2798df"
  },
  {
    "url": "_saber/images/20171215005-dc346a43.jpg",
    "revision": "dc346a43a34bd732cab066cf08a1498b"
  },
  {
    "url": "_saber/images/20171215005-f8308489.jpg",
    "revision": "f83084899b2a1007250aec9f31053086"
  },
  {
    "url": "_saber/images/20171215006-2bf01440.jpg",
    "revision": "2bf01440aef8b2def6f6a76519b5aa3b"
  },
  {
    "url": "_saber/images/20171215006-c3065394.jpg",
    "revision": "c3065394a072adc9f695b8a436a04c15"
  },
  {
    "url": "_saber/images/20171215006-f511b890.jpg",
    "revision": "f511b890ec025deb2bac782659777fd4"
  },
  {
    "url": "_saber/images/20171215007-4ea6312c.jpg",
    "revision": "4ea6312cfcb215c1a93dcfc3247edd50"
  },
  {
    "url": "_saber/images/20171215007-cccd48d6.jpg",
    "revision": "cccd48d6483c78801f1fbcc2642a9688"
  },
  {
    "url": "_saber/images/20171215007-f7a7fe1e.jpg",
    "revision": "f7a7fe1efbf2982a11e3dbfd91c56018"
  },
  {
    "url": "_saber/images/20171215008-1b266372.jpg",
    "revision": "1b266372295f271ea83ec5467e12d8b1"
  },
  {
    "url": "_saber/images/20171215008-ea72924f.jpg",
    "revision": "ea72924f773276a46e6b3d80619a5db2"
  },
  {
    "url": "_saber/images/20171215008-fdb8326c.jpg",
    "revision": "fdb8326c3eb4303a81397f6d9d762d72"
  },
  {
    "url": "_saber/images/20171215009-ab0385d9.jpg",
    "revision": "ab0385d96cecfd0ed6e39e9e593fc645"
  },
  {
    "url": "_saber/images/20171215009-c4abc3db.jpg",
    "revision": "c4abc3db0d136bc3f0514986c62a2449"
  },
  {
    "url": "_saber/images/20171215009-db5bb6b6.jpg",
    "revision": "db5bb6b6c070c0b70a79ae26b9ca12ef"
  },
  {
    "url": "_saber/images/20171215010-027a227d.jpg",
    "revision": "027a227dd673d0c435b12542a125a88c"
  },
  {
    "url": "_saber/images/20171215010-08f3c4f2.jpg",
    "revision": "08f3c4f2fc5b545f5a9905e1907940aa"
  },
  {
    "url": "_saber/images/20171215010-93b4813f.jpg",
    "revision": "93b4813f19f552896ccffd05d813016e"
  },
  {
    "url": "_saber/images/20171215011-2ea5fbe7.jpg",
    "revision": "2ea5fbe7b4c845d281d13d87376a311c"
  },
  {
    "url": "_saber/images/20171215011-3b792ff4.jpg",
    "revision": "3b792ff48941df15c04603134e0454e6"
  },
  {
    "url": "_saber/images/20171215011-c61ced3b.jpg",
    "revision": "c61ced3b055233ae02ef61bf764bb766"
  },
  {
    "url": "_saber/images/20171215012-736cc438.jpg",
    "revision": "736cc438bd75ad5d6f0298fcd700b389"
  },
  {
    "url": "_saber/images/20171215012-9e06ff53.jpg",
    "revision": "9e06ff53a653e28a794e381da11e480d"
  },
  {
    "url": "_saber/images/20171215012-be708cde.jpg",
    "revision": "be708cdef7e62d7a77e218a086e32996"
  },
  {
    "url": "_saber/images/20171215013-5b49da1f.jpg",
    "revision": "5b49da1f7441a8512971ffaf8463b525"
  },
  {
    "url": "_saber/images/20171215013-712ba33a.jpg",
    "revision": "712ba33aff61da56e517fea4614f0786"
  },
  {
    "url": "_saber/images/20171215013-b2154fb5.jpg",
    "revision": "b2154fb57f383bd39a08c3cbe6ab3cc3"
  },
  {
    "url": "_saber/images/20171215014-4367335f.jpg",
    "revision": "4367335fd135bb8e7d4cd2db62d7d5f8"
  },
  {
    "url": "_saber/images/20171215014-a6d8943a.jpg",
    "revision": "a6d8943a979ff38496ecffad6e2f3006"
  },
  {
    "url": "_saber/images/20171215014-bb43a1a3.jpg",
    "revision": "bb43a1a3b0771cbd61f61f10c4781a28"
  },
  {
    "url": "_saber/images/20171215015-626a2ea7.jpg",
    "revision": "626a2ea74f2827f9228de42088017c87"
  },
  {
    "url": "_saber/images/20171215015-a44ae5d5.jpg",
    "revision": "a44ae5d56e736201f4cc0ddcd0529c92"
  },
  {
    "url": "_saber/images/20171215015-b8bda64b.jpg",
    "revision": "b8bda64b681a5959615ee21890f07ceb"
  },
  {
    "url": "_saber/images/20171215016-5426dcb8.jpg",
    "revision": "5426dcb81a8120c537ce82c6df9ae827"
  },
  {
    "url": "_saber/images/20171215016-8105dd47.jpg",
    "revision": "8105dd479c972df1d3bda3bb399c7032"
  },
  {
    "url": "_saber/images/20171215016-e84fdde3.jpg",
    "revision": "e84fdde3c5599ae3164baec33617862b"
  },
  {
    "url": "_saber/images/20171215017-37b13381.jpg",
    "revision": "37b1338178f9ace7bea4b703aee89750"
  },
  {
    "url": "_saber/images/20171215017-da7ce149.jpg",
    "revision": "da7ce1494e6bdc196fc896f03e14e9e7"
  },
  {
    "url": "_saber/images/20171215017-e388ef60.jpg",
    "revision": "e388ef60714de51a050fbbd486096481"
  },
  {
    "url": "_saber/images/20171215018-4bcbf6ca.jpg",
    "revision": "4bcbf6ca3909163e51d63e5b85504207"
  },
  {
    "url": "_saber/images/20171215018-4e6c22fa.jpg",
    "revision": "4e6c22fa7c9bfc59d9804fe04d225b20"
  },
  {
    "url": "_saber/images/20171215018-5fbbf50a.jpg",
    "revision": "5fbbf50ae6ef30daebe995f8f5caccce"
  },
  {
    "url": "_saber/images/20171215019-1fd8c5c7.jpg",
    "revision": "1fd8c5c707596951da2a65e12d6ac2ca"
  },
  {
    "url": "_saber/images/20171215019-4aa0b775.jpg",
    "revision": "4aa0b77585ea18acd85750ff13009329"
  },
  {
    "url": "_saber/images/20171215019-b648e1dc.jpg",
    "revision": "b648e1dc7acfdae3657253d8ecd6ee5b"
  },
  {
    "url": "_saber/images/20171215020-6daf6f15.jpg",
    "revision": "6daf6f1589701d01e03e15c893c04073"
  },
  {
    "url": "_saber/images/20171215020-86bd0f1b.jpg",
    "revision": "86bd0f1b871731c26bacdf46cc514679"
  },
  {
    "url": "_saber/images/20171215020-ef3dedcc.jpg",
    "revision": "ef3dedcc9771fc5fdc35be4160942cb0"
  },
  {
    "url": "_saber/images/20171215021-210b2c9c.jpg",
    "revision": "210b2c9c128cba4508879ab8b4276ddb"
  },
  {
    "url": "_saber/images/20171215021-3c92dae2.jpg",
    "revision": "3c92dae2b315eb4127150a5610276fa6"
  },
  {
    "url": "_saber/images/20171215021-64706f95.jpg",
    "revision": "64706f95b18ac373676809086d6be5d1"
  },
  {
    "url": "_saber/images/20171215022-58e404f7.jpg",
    "revision": "58e404f7c3819eff0af7999048e7dbb1"
  },
  {
    "url": "_saber/images/20171215022-ea88412e.jpg",
    "revision": "ea88412eb4a06f5a81320d6dc44dfe0e"
  },
  {
    "url": "_saber/images/20171215022-fc6d2de5.jpg",
    "revision": "fc6d2de56736793ff91db86879a1c862"
  },
  {
    "url": "_saber/images/20171215023-8b441912.jpg",
    "revision": "8b441912ab82265810f0fb62fdbd1efd"
  },
  {
    "url": "_saber/images/20171215023-a0de9dc7.jpg",
    "revision": "a0de9dc770c01c2709eb4fc81651377b"
  },
  {
    "url": "_saber/images/20171215023-fd3cf5e0.jpg",
    "revision": "fd3cf5e0f05fd7efa54bf48a553ee5cb"
  },
  {
    "url": "_saber/images/20171215024-3df118d4.jpg",
    "revision": "3df118d43f1fc0a35669af8e2f46c9d2"
  },
  {
    "url": "_saber/images/20171215024-83566162.jpg",
    "revision": "83566162a56281696aab0ea43a0eac37"
  },
  {
    "url": "_saber/images/20171215024-eb5d7ae9.jpg",
    "revision": "eb5d7ae9912ac9fab8dc2b5feb68e226"
  },
  {
    "url": "_saber/images/20171215025-3bc34264.jpg",
    "revision": "3bc342640c224974983eb82245b268d2"
  },
  {
    "url": "_saber/images/20171215025-41c67a4f.jpg",
    "revision": "41c67a4f8c374538437ef6924dd3dbc9"
  },
  {
    "url": "_saber/images/20171215025-9dc95c79.jpg",
    "revision": "9dc95c7960dc3581f52ecb332472dac1"
  },
  {
    "url": "_saber/images/20171215026-73cd03b5.jpg",
    "revision": "73cd03b58764fe3876b7aef59a7b4e5f"
  },
  {
    "url": "_saber/images/20171215026-9e5c41a8.jpg",
    "revision": "9e5c41a83d3bed055a248bb502ad81f1"
  },
  {
    "url": "_saber/images/20171215026-f0681d37.jpg",
    "revision": "f0681d37ef8e2bc3925674f34d25cb59"
  },
  {
    "url": "_saber/images/20171215027-9d8a579e.jpg",
    "revision": "9d8a579ef11bf12ce6dab961f0158de7"
  },
  {
    "url": "_saber/images/20171215027-ac57ed15.jpg",
    "revision": "ac57ed151e05468005343ee84336d6ba"
  },
  {
    "url": "_saber/images/20171215027-ee680e40.jpg",
    "revision": "ee680e4042f142671f7ba3b6f7085255"
  },
  {
    "url": "_saber/images/20171215028-0c263a46.jpg",
    "revision": "0c263a4649a6a41a991001c9048005c9"
  },
  {
    "url": "_saber/images/20171215028-40d13e34.jpg",
    "revision": "40d13e34cca16d899bb515191360eb19"
  },
  {
    "url": "_saber/images/20171215028-a0d29908.jpg",
    "revision": "a0d29908203ceb0e6ca12aee0590a0f0"
  },
  {
    "url": "_saber/images/20171215029-204ceac9.jpg",
    "revision": "204ceac992cc85e4be9fb2dcb0aa7214"
  },
  {
    "url": "_saber/images/20171215029-8e62122e.jpg",
    "revision": "8e62122e971167020c0833e397842a97"
  },
  {
    "url": "_saber/images/20171215029-de741cef.jpg",
    "revision": "de741cef27adb3d82e5b92aa6d7eb49b"
  },
  {
    "url": "_saber/images/20171215030-26a15cbd.jpg",
    "revision": "26a15cbd368700b8664e80c4af952995"
  },
  {
    "url": "_saber/images/20171215030-a6d8f9f1.jpg",
    "revision": "a6d8f9f1cf6ada8d3e0093131b7d8107"
  },
  {
    "url": "_saber/images/20171215030-f7d350d1.jpg",
    "revision": "f7d350d1361b6f4554a1b08a6d8a324b"
  },
  {
    "url": "_saber/images/20171215031-0af7d218.jpg",
    "revision": "0af7d218270719a800cb76ba7a9558ba"
  },
  {
    "url": "_saber/images/20171215031-a3c3cc47.jpg",
    "revision": "a3c3cc4714692a5050d1db2bf7b377dc"
  },
  {
    "url": "_saber/images/20171215031-b2144cd1.jpg",
    "revision": "b2144cd19171795f6fd39d4954590b0a"
  },
  {
    "url": "_saber/images/20171215032-612cd258.jpg",
    "revision": "612cd258d37e403fdea4e46b0bf490ae"
  },
  {
    "url": "_saber/images/20171215032-6f7de60d.jpg",
    "revision": "6f7de60d1af0de36ee412d8b650c754a"
  },
  {
    "url": "_saber/images/20171215032-bad300f3.jpg",
    "revision": "bad300f3adf3700b9a4d51da8d28eb74"
  },
  {
    "url": "_saber/images/20171215033-095405dc.jpg",
    "revision": "095405dc293aac0b073c3cae649f7379"
  },
  {
    "url": "_saber/images/20171215033-ba685889.jpg",
    "revision": "ba685889cf09c0d4606284dafa4df693"
  },
  {
    "url": "_saber/images/20171215033-f12ed3c0.jpg",
    "revision": "f12ed3c0aad59cdc3eb857a27f75c5d2"
  },
  {
    "url": "_saber/images/20171215034-8073fc32.jpg",
    "revision": "8073fc32e90e3454e5003cb94e6c98fc"
  },
  {
    "url": "_saber/images/20171215034-9b7b2d7d.jpg",
    "revision": "9b7b2d7d0c63ab7272621f3729278760"
  },
  {
    "url": "_saber/images/20171215034-9d359e47.jpg",
    "revision": "9d359e47c4812c9cd803d3c891532b61"
  },
  {
    "url": "_saber/images/20171215035-52d5c227.jpg",
    "revision": "52d5c227c1b6e35b3d3e7ff7be2d630c"
  },
  {
    "url": "_saber/images/20171215035-c00dfb28.jpg",
    "revision": "c00dfb289cb52833fbd523c373c9fde2"
  },
  {
    "url": "_saber/images/20171215035-dd7307ea.jpg",
    "revision": "dd7307ea1b0ba22cd951f63286284d8f"
  },
  {
    "url": "_saber/images/20171215036-05e4efea.jpg",
    "revision": "05e4efea67019ac9f77e93d707ebdc1e"
  },
  {
    "url": "_saber/images/20171215036-0d312074.jpg",
    "revision": "0d3120743c2198eef849a8ffbb99899a"
  },
  {
    "url": "_saber/images/20171215036-35db51bb.jpg",
    "revision": "35db51bb0f17fc9fdfb07d29a2428839"
  },
  {
    "url": "_saber/images/20171215037-ab04b29b.jpg",
    "revision": "ab04b29ba6e55ab6d456aa2bd7b6a650"
  },
  {
    "url": "_saber/images/20171215037-dc6c1ec8.jpg",
    "revision": "dc6c1ec8ca0953fba3269c3de486060a"
  },
  {
    "url": "_saber/images/20171215037-efe5d780.jpg",
    "revision": "efe5d780af636e867a866e2615c8a0d0"
  },
  {
    "url": "_saber/images/20171215038-1b4b1486.jpg",
    "revision": "1b4b1486f73fa8e1fea14c8b2399f103"
  },
  {
    "url": "_saber/images/20171215038-3dd78a32.jpg",
    "revision": "3dd78a325fc98bc875c1c88a164b3e67"
  },
  {
    "url": "_saber/images/20171215038-eacfae4e.jpg",
    "revision": "eacfae4e58b10b1e55de1aa6653c5b21"
  },
  {
    "url": "_saber/images/20171215039-37347491.jpg",
    "revision": "37347491ef194eebeecd057f05ee7978"
  },
  {
    "url": "_saber/images/20171215039-5ac0235d.jpg",
    "revision": "5ac0235d744415f5e0bff5f760e10d88"
  },
  {
    "url": "_saber/images/20171215039-9683a9f2.jpg",
    "revision": "9683a9f292a55831d1ad8da2491011d9"
  },
  {
    "url": "_saber/images/20171215040-0443b537.jpg",
    "revision": "0443b537b24a736ae36f40be0c73c018"
  },
  {
    "url": "_saber/images/20171215040-32cafa8c.jpg",
    "revision": "32cafa8cd7a0dec62bf0bef0a83b70f3"
  },
  {
    "url": "_saber/images/20171215040-73273636.jpg",
    "revision": "73273636ec69acc534fafecf9f9f45cc"
  },
  {
    "url": "_saber/images/20171215041-ae26d159.jpg",
    "revision": "ae26d159c5fbb3126b2006886a3bc157"
  },
  {
    "url": "_saber/images/20171215041-da513732.jpg",
    "revision": "da513732a576d4045ed6d6ef66057438"
  },
  {
    "url": "_saber/images/20171215041-fda846a2.jpg",
    "revision": "fda846a2172bb510d0c5c7f0fed4a232"
  },
  {
    "url": "_saber/images/20171215042-319313a3.jpg",
    "revision": "319313a32562711d846aa40b1ca6a6fe"
  },
  {
    "url": "_saber/images/20171215042-a1bc774a.jpg",
    "revision": "a1bc774a97438123da2f395f6d126c0b"
  },
  {
    "url": "_saber/images/20171215042-e350b77f.jpg",
    "revision": "e350b77f166d9bf80242fa4e817a7567"
  },
  {
    "url": "_saber/images/20171215043-81fc5870.jpg",
    "revision": "81fc5870da41a64a7088b1688b0a638b"
  },
  {
    "url": "_saber/images/20171215043-b88ad604.jpg",
    "revision": "b88ad60423bee892290c9bcdd73fa746"
  },
  {
    "url": "_saber/images/20171231001-600d89e9.jpg",
    "revision": "600d89e97f1a2f8ab702a2f0a14e3d0f"
  },
  {
    "url": "_saber/images/20171231002-90352efc.jpg",
    "revision": "90352efc329e47fc1cd26a39f143d840"
  },
  {
    "url": "_saber/images/20171231002-ead988f0.jpg",
    "revision": "ead988f02551b7f07514d4109a19f5d0"
  },
  {
    "url": "_saber/images/20171231003-9cc4fb0b.jpg",
    "revision": "9cc4fb0b5975ede01821c16ae25190c8"
  },
  {
    "url": "_saber/images/20171231004-0f34cf3f.jpg",
    "revision": "0f34cf3f4efaa234e99d62d90f0979ac"
  },
  {
    "url": "_saber/images/20171231004-77de4066.jpg",
    "revision": "77de4066d1cee3312a1ab6fd810c86e2"
  },
  {
    "url": "_saber/images/20171231005-079028bd.jpg",
    "revision": "079028bd6f0aae5afdef7d2752b9b53d"
  },
  {
    "url": "_saber/images/20171231005-4824c958.jpg",
    "revision": "4824c95879fdad3f2f48c91f205f72fd"
  },
  {
    "url": "_saber/images/20171231005-71dd1e06.jpg",
    "revision": "71dd1e06a2e4c6ca83d4a29ee6da3bd4"
  },
  {
    "url": "_saber/images/20171231006-a1eb5f62.jpg",
    "revision": "a1eb5f628aab7216de2f1a2c6c5ce8c1"
  },
  {
    "url": "_saber/images/20171231006-fe53e18b.jpg",
    "revision": "fe53e18b3b331b8c55b96c333abd8033"
  },
  {
    "url": "_saber/images/20171231007-51c99f1f.jpg",
    "revision": "51c99f1f2f52d72aa66f5d6ef58d30f7"
  },
  {
    "url": "_saber/images/20171231007-cd413612.jpg",
    "revision": "cd413612a5136a143195156417cf4bf0"
  },
  {
    "url": "_saber/images/20171231008-2a9ae300.jpg",
    "revision": "2a9ae3000d0204c605277971bc13a39a"
  },
  {
    "url": "_saber/images/20171231009-0c65f246.jpg",
    "revision": "0c65f24613f576997850a040d7e5188e"
  },
  {
    "url": "_saber/images/20171231009-c48fdd95.jpg",
    "revision": "c48fdd9500840886cf19f823a061cc14"
  },
  {
    "url": "_saber/images/20171231010-51198ec1.jpg",
    "revision": "51198ec1c07c5e2ca08e9a2071c02197"
  },
  {
    "url": "_saber/images/20171231011-3548fbae.jpg",
    "revision": "3548fbaec552f051b37bb0cb9b0cf736"
  },
  {
    "url": "_saber/images/20171231012-77b22749.jpg",
    "revision": "77b22749941e82a9af16994db651006b"
  },
  {
    "url": "_saber/images/20171231013-c9ab27e7.jpg",
    "revision": "c9ab27e7f2927f78bf156b95a4368a1e"
  },
  {
    "url": "_saber/images/20171231014-a8c9a207.jpg",
    "revision": "a8c9a207ee86b1b647f2ec125896e600"
  },
  {
    "url": "_saber/images/20171231014-dfc7e8aa.jpg",
    "revision": "dfc7e8aa350acdd6538915da44812a55"
  },
  {
    "url": "_saber/images/20171231015-2c756249.jpg",
    "revision": "2c75624984b432c54b55ca4d577dd3de"
  },
  {
    "url": "_saber/images/20171231015-93257732.jpg",
    "revision": "93257732d75d4e6f6047b68e1e42f123"
  },
  {
    "url": "_saber/images/20180213002-f8b182de.png",
    "revision": "f8b182defa7677ab5a3fc0249f3bfa5c"
  },
  {
    "url": "_saber/images/20180324001-21d10430.jpg",
    "revision": "21d1043041a1be00bb1aeb80e99e4fcc"
  },
  {
    "url": "_saber/images/20180324001-5913dc99.jpg",
    "revision": "5913dc990ade86fa9e3bda9a11b2ffb2"
  },
  {
    "url": "_saber/images/20180324001-93232971.jpg",
    "revision": "932329719f69cc970f8a1cda834e5fe1"
  },
  {
    "url": "_saber/images/20180324002-42cb8474.jpg",
    "revision": "42cb8474ae7aada951539b9aab97a39b"
  },
  {
    "url": "_saber/images/20180324002-597461db.jpg",
    "revision": "597461db631174ab95c207c86e94d7a0"
  },
  {
    "url": "_saber/images/20180324002-7d3f23b8.jpg",
    "revision": "7d3f23b88cc90c3213019d30ade770e5"
  },
  {
    "url": "_saber/images/20180324003-2648c965.jpg",
    "revision": "2648c9657343ae03da396f4f72ea5e71"
  },
  {
    "url": "_saber/images/20180324003-6e1cf06a.jpg",
    "revision": "6e1cf06aa6787b25ec34189a8d754022"
  },
  {
    "url": "_saber/images/20180324004-1e2b2320.jpg",
    "revision": "1e2b2320efef0d83a5ce91cfa8d24ba4"
  },
  {
    "url": "_saber/images/20180324005-c5bce00f.jpg",
    "revision": "c5bce00faa2dcf63d92a304755fee1fb"
  },
  {
    "url": "_saber/images/20180324006-64fbb811.png",
    "revision": "64fbb81196bc3f21866082fc632ec54e"
  },
  {
    "url": "_saber/images/20180324006-ed9fca75.png",
    "revision": "ed9fca75021e7b8918019126ffca41d2"
  },
  {
    "url": "_saber/images/20180324007-6ab77659.png",
    "revision": "6ab77659d39aed1085f394b88425fdee"
  },
  {
    "url": "_saber/images/20180324007-bbf967d2.png",
    "revision": "bbf967d2af0daf10580d23df7ed15219"
  },
  {
    "url": "_saber/images/20180324007-fbc373e4.png",
    "revision": "fbc373e44ec79e8519d4c3a5c82ad706"
  },
  {
    "url": "_saber/images/20180506001-2491f87c.png",
    "revision": "2491f87c7d2fd9bc29b1cbc7f80231b9"
  },
  {
    "url": "_saber/images/20180510001-8fe1c496.png",
    "revision": "8fe1c496b0c1ead98554f6c85c51ebdc"
  },
  {
    "url": "_saber/images/20180510001-ac1b4b52.png",
    "revision": "ac1b4b526e2b502b605d89e123c39421"
  },
  {
    "url": "_saber/images/20180510002-45d3d53a.png",
    "revision": "45d3d53ab3896ff462c58a50458f39b6"
  },
  {
    "url": "_saber/images/20180512001.07bfd8a6.gif",
    "revision": "07bfd8a67b91f4f681bd4bd0e41b6d3a"
  },
  {
    "url": "_saber/images/20180512002.8668afe2.gif",
    "revision": "8668afe2d362117a0c7b9028adcbdd33"
  },
  {
    "url": "_saber/images/20180512003-26834d30.png",
    "revision": "26834d30e5440722aa20d86b63b46a98"
  },
  {
    "url": "_saber/images/20180512003-8cd3b684.png",
    "revision": "8cd3b6847e4a032d0d562449f1e46ce3"
  },
  {
    "url": "_saber/images/20180512003-aabf88c3.png",
    "revision": "aabf88c3bfbe4ce4994161bb59804f73"
  },
  {
    "url": "_saber/images/20180512004-46f81763.png",
    "revision": "46f8176320d162e31ec1a6e53e56100b"
  },
  {
    "url": "_saber/images/20181216001-987c1cf8.png",
    "revision": "987c1cf8b1c1350d8399a6d9f9c39ebf"
  },
  {
    "url": "_saber/images/20181216002-6cb70fde.png",
    "revision": "6cb70fde832650aab02b582926bfdfbc"
  },
  {
    "url": "_saber/images/20181216002-d18ae08b.png",
    "revision": "d18ae08bc7b652832168400f19d2bb7a"
  },
  {
    "url": "_saber/images/20181216002-dc67ca43.png",
    "revision": "dc67ca430ec0a2a03b5df281dcacc0e6"
  },
  {
    "url": "_saber/images/20181216003-1f683597.jpg",
    "revision": "1f683597fe5947ed5e8aa604f8be9efe"
  },
  {
    "url": "_saber/images/20181216003-813498b8.jpg",
    "revision": "813498b8e47a955a079226b149b9c50d"
  },
  {
    "url": "_saber/images/20181216003-a5734147.jpg",
    "revision": "a5734147503a14b61fc23e552d179917"
  },
  {
    "url": "_saber/images/20181216004-2cbfe143.jpg",
    "revision": "2cbfe1437b47a988d0caefdb9e1fd5e6"
  },
  {
    "url": "_saber/images/20181216004-69e436c9.jpg",
    "revision": "69e436c90427fcf76af4d64d11ba656c"
  },
  {
    "url": "_saber/images/20181216004-e0e970eb.jpg",
    "revision": "e0e970eb3e715bf2da654ca4b96c6f63"
  },
  {
    "url": "_saber/images/20181216005-0f6b1c42.jpg",
    "revision": "0f6b1c42a7fc07a7d33ba70207e86976"
  },
  {
    "url": "_saber/images/20181216005-89d06a17.jpg",
    "revision": "89d06a1735a086e27f7e453b38066853"
  },
  {
    "url": "_saber/images/20181216005-fdde298d.jpg",
    "revision": "fdde298d95c41ba77fcc7b2b838c3798"
  },
  {
    "url": "_saber/images/20181216006-2e790574.jpg",
    "revision": "2e790574263661d0f7837048fa2834c1"
  },
  {
    "url": "_saber/images/20181216006-d5f0c6f0.jpg",
    "revision": "d5f0c6f0ed0d7e187d5a3b80b4165462"
  },
  {
    "url": "_saber/images/20181216006-db1c33b0.jpg",
    "revision": "db1c33b039d8e8fe18f9f9827656d69b"
  },
  {
    "url": "_saber/images/20181216007-97ee3054.jpg",
    "revision": "97ee30545b657e165bd4c59685bebf5d"
  },
  {
    "url": "_saber/images/20181216007-a1e62d7d.jpg",
    "revision": "a1e62d7d25f7f7dc93c3b3f325aba8a6"
  },
  {
    "url": "_saber/images/20181216007-bb693682.jpg",
    "revision": "bb69368252f3e95bc3358ce513bef28d"
  },
  {
    "url": "_saber/images/20181216008-49cc4414.jpg",
    "revision": "49cc44144d305648fb99614c45837229"
  },
  {
    "url": "_saber/images/20181216008-5cb81d4b.jpg",
    "revision": "5cb81d4bdbff80a3296cb58250f290b6"
  },
  {
    "url": "_saber/images/20181216008-f75e9b58.jpg",
    "revision": "f75e9b58ad34afc0483d8b573ab787d7"
  },
  {
    "url": "_saber/images/20181216009-43b9455f.png",
    "revision": "43b9455f20d1f5f4536a350d1c38cadc"
  },
  {
    "url": "_saber/images/20181216009-8e1e9cbe.png",
    "revision": "8e1e9cbe027b1330ccbca44aa59e7f3f"
  },
  {
    "url": "_saber/images/20181216009-a08a0731.png",
    "revision": "a08a0731631b1405faef6a494b45d99d"
  },
  {
    "url": "_saber/images/20181216010-12f736a2.png",
    "revision": "12f736a2e3f1e2273f838859ee0b5b9b"
  },
  {
    "url": "_saber/images/20181216010-8e74787c.png",
    "revision": "8e74787c47755916c4db0ca603a33641"
  },
  {
    "url": "_saber/images/20181216010-b6786ca2.png",
    "revision": "b6786ca2a334871d7297db620985c0e4"
  },
  {
    "url": "_saber/images/20181216011-2721b87a.png",
    "revision": "2721b87ab21c6464acb462be13398a72"
  },
  {
    "url": "_saber/images/20181216011-cfce8512.png",
    "revision": "cfce851267864c57e1c0c77440762d02"
  },
  {
    "url": "_saber/images/20181216011-d5709c52.png",
    "revision": "d5709c529f06d567619cacc1f852d0fb"
  },
  {
    "url": "_saber/images/20181216012-28cccfb2.png",
    "revision": "28cccfb278272f292782efa99cc28e7c"
  },
  {
    "url": "_saber/images/20181216012-5989c440.png",
    "revision": "5989c440513bc02a86fcf03bf98f3227"
  },
  {
    "url": "_saber/images/20181216012-a35bb891.png",
    "revision": "a35bb891e9060030099cc922f8a14b37"
  },
  {
    "url": "_saber/images/20181216013-3c2343ac.jpg",
    "revision": "3c2343ace1cc9caae86ac7873e5520bf"
  },
  {
    "url": "_saber/images/20181216013-e7d9d742.jpg",
    "revision": "e7d9d742e1b7ca8baf4078cf4ee477ec"
  },
  {
    "url": "_saber/images/20181216013-f90a4f1a.jpg",
    "revision": "f90a4f1a4cb4c0f178ac25aaaae9f51d"
  },
  {
    "url": "_saber/images/20181216014-1bd3bbef.png",
    "revision": "1bd3bbef0263d373ae0832981cb3f2dd"
  },
  {
    "url": "_saber/images/20181216014-43efd326.png",
    "revision": "43efd32642ffde5242fff76bc7ca1da0"
  },
  {
    "url": "_saber/images/20181216014-8f24065f.png",
    "revision": "8f24065f5d34703c86357a516bfa1928"
  },
  {
    "url": "_saber/images/20181216015-33ccf5d4.jpg",
    "revision": "33ccf5d43691f906339f1f045b1bc0e8"
  },
  {
    "url": "_saber/images/20181216015-5c75115a.jpg",
    "revision": "5c75115a6356e183520eed6c3830721d"
  },
  {
    "url": "_saber/images/20181216015-9f01514a.jpg",
    "revision": "9f01514a858d4cf55983ad72bd63ba97"
  },
  {
    "url": "_saber/images/20181216016-38896ab7.png",
    "revision": "38896ab7d8af2ba5882bba3a11b3b56d"
  },
  {
    "url": "_saber/images/20181216016-711ac4c2.png",
    "revision": "711ac4c2397499c6f7956eb79e4aa699"
  },
  {
    "url": "_saber/images/20181216016-b036c882.png",
    "revision": "b036c882dbfd6e9f363cf061562cd6c7"
  },
  {
    "url": "_saber/images/20181216017-422d5cce.png",
    "revision": "422d5cce156ff6fec53ecb9cd2b24235"
  },
  {
    "url": "_saber/images/20181216017-68609788.png",
    "revision": "68609788485656ed72c21c543a6e0c9a"
  },
  {
    "url": "_saber/images/20181216017-8040f3f6.png",
    "revision": "8040f3f66132c9410c549f6373d1b330"
  },
  {
    "url": "_saber/images/20181216018-72f081b8.jpg",
    "revision": "72f081b886b78ae75fafe2f5a353b209"
  },
  {
    "url": "_saber/images/20181216018-9ba853a4.jpg",
    "revision": "9ba853a4c00bbf1d3e05ec0422cc2951"
  },
  {
    "url": "_saber/images/20181216018-e5203f88.jpg",
    "revision": "e5203f88a4e5973da5ebfe9171258acc"
  },
  {
    "url": "_saber/images/20181216019-1abaef7d.jpg",
    "revision": "1abaef7dad98944a23eb7f53c2dd1b69"
  },
  {
    "url": "_saber/images/20181216019-7f5dc27b.jpg",
    "revision": "7f5dc27bf5e63031a0edd0e2866c268f"
  },
  {
    "url": "_saber/images/20181216019-d32ed9b0.jpg",
    "revision": "d32ed9b03f9477d492aa66112d621f0a"
  },
  {
    "url": "_saber/images/20181216020-37012ac1.png",
    "revision": "37012ac13864133e1877476492661a38"
  },
  {
    "url": "_saber/images/20181216020-d75d548b.png",
    "revision": "d75d548bf6ab2dde288fdc6af37c11a4"
  },
  {
    "url": "_saber/images/20181216020-f47d9094.png",
    "revision": "f47d90940e91f427d56e7af85cbb8639"
  },
  {
    "url": "_saber/images/20181216021-6ca913cf.png",
    "revision": "6ca913cf87797cc6977f3e47eef23013"
  },
  {
    "url": "_saber/images/20181216021-d48fef90.png",
    "revision": "d48fef90dc2514ad20e2764c0332eec8"
  },
  {
    "url": "_saber/images/20181216021-dea9a83e.png",
    "revision": "dea9a83e35bf5f3cda72dd4fbb2e7bd1"
  },
  {
    "url": "_saber/images/20181216022-636c2f18.png",
    "revision": "636c2f18e9a8fe9d5d26dd8dd428b2a9"
  },
  {
    "url": "_saber/images/20181216022-96951649.png",
    "revision": "9695164941a46fecf333f0aa9ceaa100"
  },
  {
    "url": "_saber/images/20181216022-9e2f3276.png",
    "revision": "9e2f327675e2c4c5ba88e9a2b0a343cb"
  },
  {
    "url": "_saber/images/20181216023-05d960cf.jpg",
    "revision": "05d960cf2a4096f69b8e4f2edd4bec51"
  },
  {
    "url": "_saber/images/20181216023-30e38e29.jpg",
    "revision": "30e38e292b7da024b97279fe733c8d71"
  },
  {
    "url": "_saber/images/20181216023-c07ee77a.jpg",
    "revision": "c07ee77aa3f68145d3b99f96a633cad0"
  },
  {
    "url": "_saber/images/20181216024-29032e2f.jpg",
    "revision": "29032e2fe1721be4b5bc5280999b6fad"
  },
  {
    "url": "_saber/images/20181216024-35742c01.jpg",
    "revision": "35742c013484e5563bcea899c2dd43ec"
  },
  {
    "url": "_saber/images/20181216024-562ce7cf.jpg",
    "revision": "562ce7cfa93388dc47a65b0c7a3599e9"
  },
  {
    "url": "_saber/images/20181216025-01c6d051.jpg",
    "revision": "01c6d051abb6784385b4ae91a89d6ce2"
  },
  {
    "url": "_saber/images/20181216025-18cdd660.jpg",
    "revision": "18cdd6606c75b3537d4d65ed3c65f54f"
  },
  {
    "url": "_saber/images/20181216025-b79c2178.jpg",
    "revision": "b79c217867b7c5c505560e7457ff5418"
  },
  {
    "url": "_saber/images/20181216026-32d6fd26.jpg",
    "revision": "32d6fd26140afdfb3882156a4e1ddc18"
  },
  {
    "url": "_saber/images/20181216026-b64c08c3.jpg",
    "revision": "b64c08c395c4cf8094591d96fbc0db0f"
  },
  {
    "url": "_saber/images/20181216026-d241afac.jpg",
    "revision": "d241afac8522547c171c6503fc8e1d3d"
  },
  {
    "url": "_saber/images/20181216027-1406d5ac.jpg",
    "revision": "1406d5ac6eb32dca89587baeaaa09405"
  },
  {
    "url": "_saber/images/20181216027-7ce58acf.jpg",
    "revision": "7ce58acf7ccaa39321ef04022e517fe0"
  },
  {
    "url": "_saber/images/20181216027-bf6c69a5.jpg",
    "revision": "bf6c69a505640679cda59e2d891e4f5f"
  },
  {
    "url": "_saber/images/20181216028-8f088016.jpg",
    "revision": "8f088016f126a3c3c26eeb37796f1262"
  },
  {
    "url": "_saber/images/20181216028-b0ec4e60.jpg",
    "revision": "b0ec4e600a76647ee2f803996c0d42ae"
  },
  {
    "url": "_saber/images/20181216028-eaaecd08.jpg",
    "revision": "eaaecd08d0525908c7d03f5b796e56c9"
  },
  {
    "url": "_saber/images/20181216029-2a353ce6.png",
    "revision": "2a353ce6fa3cad7bdc71c9330c98b39c"
  },
  {
    "url": "_saber/images/20181216029-8deb3587.png",
    "revision": "8deb35878971ae77c895cefaa218b457"
  },
  {
    "url": "_saber/images/20181216029-cb7802ce.png",
    "revision": "cb7802cef6231a4f718790b3b59c1e74"
  },
  {
    "url": "_saber/images/20181216030-0d4ae5e0.png",
    "revision": "0d4ae5e0186f9db9128a9ca535aad53f"
  },
  {
    "url": "_saber/images/20181216030-a84ba207.png",
    "revision": "a84ba2078dd7b45202eaf175f22c647a"
  },
  {
    "url": "_saber/images/20181216030-a91c1a58.png",
    "revision": "a91c1a58a5f697ff614b7eeebfc2f895"
  },
  {
    "url": "_saber/images/20181225005-07469537.png",
    "revision": "074695374c21dc16c1c1fbd201f64a72"
  },
  {
    "url": "_saber/images/20181225005-da7b795d.png",
    "revision": "da7b795d0efac593c49af50757455aa2"
  },
  {
    "url": "_saber/images/20181225006-13115f2a.png",
    "revision": "13115f2aadfb0bad5a0f8ee99a22823f"
  },
  {
    "url": "_saber/images/20181225006-38cc1cf8.png",
    "revision": "38cc1cf891efb8f4191136288f549486"
  },
  {
    "url": "_saber/images/20181225007-624fe9da.png",
    "revision": "624fe9da6bf7570afb407b99f89cfdd2"
  },
  {
    "url": "_saber/images/20181225007-afcef78d.png",
    "revision": "afcef78d550baa2eaf0715133ed9912d"
  },
  {
    "url": "_saber/images/20181225008-542089be.png",
    "revision": "542089beefb0fd23d20ce417308b544e"
  },
  {
    "url": "_saber/images/20181225008-f79ba0c8.png",
    "revision": "f79ba0c898ab8d522eb7ed0e55642887"
  },
  {
    "url": "_saber/images/20181225009-c1889c76.png",
    "revision": "c1889c7639b7aa73e6279f5247b1bb73"
  },
  {
    "url": "_saber/images/20181225009-e33343a2.png",
    "revision": "e33343a2d8e61c37bb4263d46a2b2f73"
  },
  {
    "url": "_saber/images/20181225010-9d6c2f2c.png",
    "revision": "9d6c2f2c41c1e0da248a8e5d0cbab8c8"
  },
  {
    "url": "_saber/images/20181225010-a0903fc5.png",
    "revision": "a0903fc5bd300b163edc38aaa9949f46"
  },
  {
    "url": "_saber/images/20181225011-ca364c26.png",
    "revision": "ca364c26c06fa56f34617b05977f3632"
  },
  {
    "url": "_saber/images/20181225011-d7011565.png",
    "revision": "d7011565c3060fc695a314d9d1fbe47f"
  },
  {
    "url": "_saber/images/20181225012-3446c9e2.png",
    "revision": "3446c9e292eaad5d2561fd3e462f356f"
  },
  {
    "url": "_saber/images/20181225012-fe954ac7.png",
    "revision": "fe954ac7ca087801fd9287c58e93c87f"
  },
  {
    "url": "_saber/images/20181225013-4aa3f919.png",
    "revision": "4aa3f9193d9c98259add80af061992b4"
  },
  {
    "url": "_saber/images/20181225013-70a83975.png",
    "revision": "70a83975fbb2a0d99423de8a8d8493d3"
  },
  {
    "url": "_saber/images/20181225014-b15561b8.png",
    "revision": "b15561b882533d03b0e02ee3d428fc70"
  },
  {
    "url": "_saber/images/20181225014-ef595fd1.png",
    "revision": "ef595fd1b9e21a3e7757d4c73b8eedf4"
  },
  {
    "url": "_saber/images/20190114002-120a7947.jpg",
    "revision": "120a7947e2886f9cbf7cfc2461d4aaec"
  },
  {
    "url": "_saber/images/20190114002-aac88c1c.jpg",
    "revision": "aac88c1c2dee647638072aa8593c7b63"
  },
  {
    "url": "_saber/images/20190114002-ed37b81a.jpg",
    "revision": "ed37b81a61de754d0de65e9c7c1b6c68"
  },
  {
    "url": "_saber/images/20190114003-36e635e2.png",
    "revision": "36e635e22319445780c3fb3272bfd9af"
  },
  {
    "url": "_saber/images/20190114003-b52a4c15.png",
    "revision": "b52a4c15a4df379e18f311b3d11a141e"
  },
  {
    "url": "_saber/images/20190114003-cf9ee14a.png",
    "revision": "cf9ee14a286ac756efb708b364974eec"
  },
  {
    "url": "_saber/images/20190114004-7eb4c211.jpg",
    "revision": "7eb4c211e583ad487fa915414172a3af"
  },
  {
    "url": "_saber/images/20190114004-c6b14068.jpg",
    "revision": "c6b14068de9d56abd4c5492799fea92d"
  },
  {
    "url": "_saber/images/20190114005-764bbfa5.jpg",
    "revision": "764bbfa5c64b49f6479706a1330509e2"
  },
  {
    "url": "_saber/images/20190114005-7eb40553.jpg",
    "revision": "7eb405539869dedcf3fc7425e0beab1e"
  },
  {
    "url": "_saber/images/20190114005-df173e04.jpg",
    "revision": "df173e04e7e33dbfb34d05da328d4a0a"
  },
  {
    "url": "_saber/images/20190114006-6fc98e0b.jpg",
    "revision": "6fc98e0bee85201f62c95571b57d3120"
  },
  {
    "url": "_saber/images/20190114006-716b3adf.jpg",
    "revision": "716b3adfeb5fd94904075266c89508b7"
  },
  {
    "url": "_saber/images/20190114006-9425c9f9.jpg",
    "revision": "9425c9f969260d6485450ecbeef52ed3"
  },
  {
    "url": "_saber/images/20190114007-33d8d631.jpg",
    "revision": "33d8d631eb47f801d74e29f9b5c01e6b"
  },
  {
    "url": "_saber/images/20190114007-381bbc5a.jpg",
    "revision": "381bbc5ac571090659743de014d0cf5b"
  },
  {
    "url": "_saber/images/20190114007-bf752feb.jpg",
    "revision": "bf752feb37a9e8480e2029c706ebb404"
  },
  {
    "url": "_saber/images/20190114008-52a4a9ce.jpg",
    "revision": "52a4a9ce8eb158aa0c711debaa4c6b65"
  },
  {
    "url": "_saber/images/20190114008-96ece196.jpg",
    "revision": "96ece1960a7fb9c3c6af473ea9908808"
  },
  {
    "url": "_saber/images/20190114008-dbbaedec.jpg",
    "revision": "dbbaedec7feaffeb94b86a26ed9c0bed"
  },
  {
    "url": "_saber/images/20190114009-42cd9d9c.jpg",
    "revision": "42cd9d9cd85238cc826063ae1771bf9a"
  },
  {
    "url": "_saber/images/20190114009-4c72f0dd.jpg",
    "revision": "4c72f0dda13119215f140a954316cb7a"
  },
  {
    "url": "_saber/images/20190114009-b65160ac.jpg",
    "revision": "b65160ac4bf9f99efdc5460e80cc77ed"
  },
  {
    "url": "_saber/images/20190114010-620a7b6f.jpg",
    "revision": "620a7b6f42583a0582fea573690c8dba"
  },
  {
    "url": "_saber/images/20190114010-8142caac.jpg",
    "revision": "8142caacda21551df89bc7dacb9789d6"
  },
  {
    "url": "_saber/images/20190114010-93cb868e.jpg",
    "revision": "93cb868eb1f7e8503b63e4dd774cd07a"
  },
  {
    "url": "_saber/images/20190114011-230f4eda.jpg",
    "revision": "230f4edac426b0357a0d0ca5d5ad91c8"
  },
  {
    "url": "_saber/images/20190114011-411665cc.jpg",
    "revision": "411665ccf3c6e5cc7da7a37f3f6ee923"
  },
  {
    "url": "_saber/images/20190114011-92ff1f2b.jpg",
    "revision": "92ff1f2b4046aeec30e10a808992d858"
  },
  {
    "url": "_saber/images/20190114012-5803ba03.jpg",
    "revision": "5803ba032c942915ba48b87e2a01af26"
  },
  {
    "url": "_saber/images/20190114012-a6bc35e9.jpg",
    "revision": "a6bc35e990cf3ae55774b44c7ba46095"
  },
  {
    "url": "_saber/images/20190114012-ae5f5b71.jpg",
    "revision": "ae5f5b71ea56c1be2176457b82676183"
  },
  {
    "url": "_saber/images/20190114013-27bb9fb9.jpg",
    "revision": "27bb9fb9407271b8c72e0f23671ae2fa"
  },
  {
    "url": "_saber/images/20190114013-797a6d43.jpg",
    "revision": "797a6d4354dd5ed6c7cbc79c678c9495"
  },
  {
    "url": "_saber/images/20190114013-e68f3a0b.jpg",
    "revision": "e68f3a0b87e4164061b4c50f5f080879"
  },
  {
    "url": "_saber/images/20190114014-4ba0595b.jpg",
    "revision": "4ba0595b5cee2d968c5a5faccf61b524"
  },
  {
    "url": "_saber/images/20190114014-6ec55185.jpg",
    "revision": "6ec5518529066f88d56ba1d3be9a2fca"
  },
  {
    "url": "_saber/images/20190114014-87529fea.jpg",
    "revision": "87529fea942551db4a3369174e5a8c14"
  },
  {
    "url": "_saber/images/20190114015-2e8a53e5.jpg",
    "revision": "2e8a53e58d5bb181f2e454145b71da4b"
  },
  {
    "url": "_saber/images/20190114015-31ad99bb.jpg",
    "revision": "31ad99bbd39ee8213eec67357583af71"
  },
  {
    "url": "_saber/images/20190114015-f39adfd7.jpg",
    "revision": "f39adfd72b79923fad1e7c8a1017a046"
  },
  {
    "url": "_saber/images/20190218001-9f087518.png",
    "revision": "9f0875186d6986b079d92c1e06c76b4c"
  },
  {
    "url": "_saber/images/20190218001-db733866.png",
    "revision": "db73386629e3a68ae8546f61d99ee1f4"
  },
  {
    "url": "_saber/images/20190218002-26947c52.png",
    "revision": "26947c523755e8af978d0df4821d8fc9"
  },
  {
    "url": "_saber/images/20190218002-85468074.png",
    "revision": "85468074db0ad753068a7c6dfee00e30"
  },
  {
    "url": "_saber/images/20190218003-67ec7258.png",
    "revision": "67ec72586afa59bf7a7839d7d6853a58"
  },
  {
    "url": "_saber/images/20190218003-74a6740a.png",
    "revision": "74a6740a88880daa96fe64d7b5324fa0"
  },
  {
    "url": "_saber/images/20190218003-d5004074.png",
    "revision": "d5004074be1bb35da7fd6fe1950e297d"
  },
  {
    "url": "_saber/images/20190218004-4e374821.png",
    "revision": "4e3748211d00c4a8f34a54d737d8821b"
  },
  {
    "url": "_saber/images/20190218005-61d4f503.png",
    "revision": "61d4f503159a8082a0813fbef594a013"
  },
  {
    "url": "_saber/images/20190218005-6210f2ae.png",
    "revision": "6210f2aefcbd5fd6a2e6aff381c10f9d"
  },
  {
    "url": "_saber/images/20190421002-3d7cbda3.png",
    "revision": "3d7cbda35d132a3043214ef544a5f4ea"
  },
  {
    "url": "_saber/images/20190421003-1f47f34b.png",
    "revision": "1f47f34b15948c9323eae76a2c03b93c"
  },
  {
    "url": "_saber/images/20190421004-61e9d18a.png",
    "revision": "61e9d18a1eadc91a8d5b9fd5b47e815c"
  },
  {
    "url": "_saber/images/20190421004-849714d8.png",
    "revision": "849714d81df92d189cdff6bd8136304f"
  },
  {
    "url": "_saber/images/20190421004-b65ad143.png",
    "revision": "b65ad143f8da1e14b06bfffecad9553d"
  },
  {
    "url": "_saber/images/20190421005-663126ec.jpg",
    "revision": "663126ec90395d64565c40a8651a0cb2"
  },
  {
    "url": "_saber/images/20190421005-7985ffc7.png",
    "revision": "7985ffc7fba1fe19b393ece576233262"
  },
  {
    "url": "_saber/images/20190421005-a2020842.jpg",
    "revision": "a202084298ab86dd00fdafd2cf8a7eab"
  },
  {
    "url": "_saber/images/20190421005-b1b5f808.png",
    "revision": "b1b5f8084fad498bf631780068744063"
  },
  {
    "url": "_saber/images/20190421005-b9f3e650.png",
    "revision": "b9f3e650f6c4f479ee5e7f978200b08e"
  },
  {
    "url": "_saber/images/20190421005-c99c7589.jpg",
    "revision": "c99c7589929f610ed83c53ab946ae635"
  },
  {
    "url": "_saber/images/20190421006-568aab43.jpg",
    "revision": "568aab43b73c82a99b87de2bc679f093"
  },
  {
    "url": "_saber/images/20190421006-61b47794.jpg",
    "revision": "61b47794c08e8eda744d40f9c290a599"
  },
  {
    "url": "_saber/images/20190421006-8b1068a7.jpg",
    "revision": "8b1068a78de2deb2435d3bb1593759ee"
  },
  {
    "url": "_saber/images/20190421007-c7eb31ba.png",
    "revision": "c7eb31ba42783931333f8e653e76c10f"
  },
  {
    "url": "_saber/images/20190421007-c8b3d600.png",
    "revision": "c8b3d60017be2d095aa9b7c71bf04ba8"
  },
  {
    "url": "_saber/images/20190421008-2c99bf09.png",
    "revision": "2c99bf096db0428a028b388a37fc5b95"
  },
  {
    "url": "_saber/images/20190421008-b4ec49c7.png",
    "revision": "b4ec49c7a04fd607abe15697b203baed"
  },
  {
    "url": "_saber/images/20190501001-614754d4.png",
    "revision": "614754d4689192605dd42137fcf5f2c4"
  },
  {
    "url": "_saber/images/20190501001-df30e78d.png",
    "revision": "df30e78d551713520a7ece8d77314b6e"
  },
  {
    "url": "_saber/images/20190501001-e4301e61.png",
    "revision": "e4301e61a71bd6a9cec02d55b96fd1b3"
  },
  {
    "url": "_saber/images/20190501002-059d87af.png",
    "revision": "059d87afd48c956b34a658106180ad59"
  },
  {
    "url": "_saber/images/20190501002-e9cdca46.png",
    "revision": "e9cdca46beec559ad9cc1e0bc66ac6b6"
  },
  {
    "url": "_saber/images/20190501002-f3c5a3ba.png",
    "revision": "f3c5a3ba6652958d06d5303fe14ea7ad"
  },
  {
    "url": "_saber/images/20190501003.dfd7677c.gif",
    "revision": "dfd7677c7910cdcb8124764efc3f56ac"
  },
  {
    "url": "_saber/images/20190501004-1924150f.png",
    "revision": "1924150f137510b9786803b13e42e9c2"
  },
  {
    "url": "_saber/images/20190501004-4444c409.png",
    "revision": "4444c4099223f4f6e702bbb61f6c2e1f"
  },
  {
    "url": "_saber/images/20190501004-489725f8.png",
    "revision": "489725f8d0a46120d6a10f08df4c1fc1"
  },
  {
    "url": "_saber/images/20190501005-647bbd40.png",
    "revision": "647bbd40e9c6379e92037cbbcb6762f9"
  },
  {
    "url": "_saber/images/20190501005-933d3d1b.png",
    "revision": "933d3d1b89e00e79afecced16c8979a5"
  },
  {
    "url": "_saber/images/20190501005-ec471e5b.png",
    "revision": "ec471e5b1656d3545ca9bf8af61e513e"
  },
  {
    "url": "_saber/images/20190501006-7b79d7e0.png",
    "revision": "7b79d7e07c505eb36815b07f51aef5e7"
  },
  {
    "url": "_saber/images/20190501006-f49b230a.png",
    "revision": "f49b230afdafdf9956fa1b2328365a2c"
  },
  {
    "url": "_saber/images/20190519001-97019036.png",
    "revision": "97019036c7060aafe91f9341a5d5075a"
  },
  {
    "url": "_saber/images/20190519001-a67f26ef.png",
    "revision": "a67f26ef91217b39ec14887c7a44eed1"
  },
  {
    "url": "_saber/images/20190519002-20374fab.png",
    "revision": "20374fab2a6c63168c0706f7723d0f18"
  },
  {
    "url": "_saber/images/20190519002-4bc12f17.png",
    "revision": "4bc12f17aae4b6c132915e392c37c784"
  },
  {
    "url": "_saber/images/20190519002-ce939f8b.png",
    "revision": "ce939f8b047456e83df0ace828058f94"
  },
  {
    "url": "_saber/images/20190519003-3c5b5225.png",
    "revision": "3c5b522555410b26e8a8e2a0ac1ca669"
  },
  {
    "url": "_saber/images/20190519003-93eb941d.png",
    "revision": "93eb941d266bf9d8174e23b21ecb887d"
  },
  {
    "url": "_saber/images/20190519003-f65f8d08.png",
    "revision": "f65f8d08864b8c829df6caba82aefcb0"
  },
  {
    "url": "_saber/images/20190519005-7fc840c8.png",
    "revision": "7fc840c81cc3fe29af5da2aec58484f6"
  },
  {
    "url": "_saber/images/20190519005-e213a977.png",
    "revision": "e213a977216a0508dd79c0ef177ba8e2"
  },
  {
    "url": "_saber/images/20190519005-ef89b652.png",
    "revision": "ef89b652bf0effc7c5d5af32cedf44c0"
  },
  {
    "url": "_saber/images/20190519006-1a432ab2.png",
    "revision": "1a432ab289b711b5663ff71da02067ad"
  },
  {
    "url": "_saber/images/20190519006-874f9348.png",
    "revision": "874f9348482a73bbe3c32b13b83c67de"
  },
  {
    "url": "_saber/images/20190519006-bd7cf55b.png",
    "revision": "bd7cf55b59ba82e1ca1a268f76fa11e5"
  },
  {
    "url": "_saber/images/20190519007-0b4ac65b.png",
    "revision": "0b4ac65b726f703d1225f441d8c2ad06"
  },
  {
    "url": "_saber/images/20190519007-de386bfa.png",
    "revision": "de386bfa102c9799b04055163bf49795"
  },
  {
    "url": "_saber/images/20190519007-f9c2df08.png",
    "revision": "f9c2df086bcc90f81dea1e7fb2a01f03"
  },
  {
    "url": "_saber/images/20190519008-38148604.png",
    "revision": "38148604a1a6e5515c6563b6accccafe"
  },
  {
    "url": "_saber/images/20190519008-cf865f97.png",
    "revision": "cf865f975dd181b1861fa1a1944cae8d"
  },
  {
    "url": "_saber/images/20190519008-d636ad08.png",
    "revision": "d636ad08c6209a0525b2a37fda212a64"
  },
  {
    "url": "_saber/images/20190519009-34aecdcc.png",
    "revision": "34aecdcc09d796bb818322607a745da8"
  },
  {
    "url": "_saber/images/20190519009-52757769.png",
    "revision": "52757769a2a8ef640768ff341d126763"
  },
  {
    "url": "_saber/images/20190519009-54f34f95.png",
    "revision": "54f34f953181f3520392e0afbf73b363"
  },
  {
    "url": "_saber/images/20190519010-a78558ae.png",
    "revision": "a78558ae2800375479d0541c26984753"
  },
  {
    "url": "_saber/images/20190519010-cdae01cd.png",
    "revision": "cdae01cdb0fdafac1e51cab39e5ceaf1"
  },
  {
    "url": "_saber/images/20190519010-f00651a6.png",
    "revision": "f00651a67e97d499f08441b877a8e033"
  },
  {
    "url": "_saber/images/20190705001-23b145ee.jpg",
    "revision": "23b145ee6c8c8a69e15f0177d4ee422c"
  },
  {
    "url": "_saber/images/20190705001-40d9f209.jpg",
    "revision": "40d9f209cdf8988ad964bf3468b9c2c5"
  },
  {
    "url": "_saber/images/20190705001-fa19ec4c.jpg",
    "revision": "fa19ec4c3d10716db2db08e9c58a8369"
  },
  {
    "url": "_saber/images/20190705002-35393d14.jpg",
    "revision": "35393d14aad8e906e3159f2a504fa926"
  },
  {
    "url": "_saber/images/20190705002-3ad6e9c2.jpg",
    "revision": "3ad6e9c289c1f5a1b869c288e76138db"
  },
  {
    "url": "_saber/images/20190705002-79430021.jpg",
    "revision": "7943002132a0b45d5c1b82db93e6fca2"
  },
  {
    "url": "_saber/images/20190705003-298f840c.jpg",
    "revision": "298f840ca18e7ccf54fed5ada5b65249"
  },
  {
    "url": "_saber/images/20190705003-392df50f.jpg",
    "revision": "392df50f198792872a70887c7f867da4"
  },
  {
    "url": "_saber/images/20190705004-7e62a0e1.jpg",
    "revision": "7e62a0e18961d93d8d28a0e96c237264"
  },
  {
    "url": "_saber/images/20190705004-8c21708c.jpg",
    "revision": "8c21708cdf1eac12f44c7240f2f9d6b9"
  },
  {
    "url": "_saber/images/20190705004-c4e0d285.jpg",
    "revision": "c4e0d285bcfb2eecc6226ff504eb2e21"
  },
  {
    "url": "_saber/images/20190705005-9721f4dd.jpg",
    "revision": "9721f4dd3f9c22b69e7b763286d753a2"
  },
  {
    "url": "_saber/images/20190705005-cd474904.jpg",
    "revision": "cd474904420376ab40a29c9c198c6a83"
  },
  {
    "url": "_saber/images/20190705006-9d7742f9.jpg",
    "revision": "9d7742f90c9b19c9e5a2860c6494fea1"
  },
  {
    "url": "_saber/images/20190705006-bb92b567.jpg",
    "revision": "bb92b56788db19aec6271cacb9e9b965"
  },
  {
    "url": "_saber/images/20190705006-d6fc38ed.jpg",
    "revision": "d6fc38edd05dbde8dfce6d01612b3d07"
  },
  {
    "url": "_saber/images/20190705007-04fec56e.jpg",
    "revision": "04fec56ef346662ae23dabecc6bbbb3a"
  },
  {
    "url": "_saber/images/20190705007-44b45fd4.jpg",
    "revision": "44b45fd46341b0dbd6ff29cacee174eb"
  },
  {
    "url": "_saber/images/20190705007-47c32e11.jpg",
    "revision": "47c32e116798da5155f980fed55d7517"
  },
  {
    "url": "_saber/images/20190705008-0883c4aa.jpg",
    "revision": "0883c4aa7693a85afb6dab09bd87fedd"
  },
  {
    "url": "_saber/images/20190705008-37b0b8af.jpg",
    "revision": "37b0b8af38c53938e9bc900608e258d2"
  },
  {
    "url": "_saber/images/20190705008-da7d699f.jpg",
    "revision": "da7d699f6a0ee5eb5a3eb674eea0b6e4"
  },
  {
    "url": "_saber/images/20190705009-0e303699.jpg",
    "revision": "0e3036991f78ba0d9229469e6ba4fab6"
  },
  {
    "url": "_saber/images/20190705009-af8dd98b.jpg",
    "revision": "af8dd98b23e01fe3899d55616899b07e"
  },
  {
    "url": "_saber/images/20190705009-cb8aa3af.jpg",
    "revision": "cb8aa3afe88fd015ceb42c850c267f94"
  },
  {
    "url": "_saber/images/20190705010-06ca37ac.jpg",
    "revision": "06ca37aca40bad2b63053bd7f929c757"
  },
  {
    "url": "_saber/images/20190705010-c25991f8.jpg",
    "revision": "c25991f8358328e39c991b33dc10236b"
  },
  {
    "url": "_saber/images/20190705010-f668414d.jpg",
    "revision": "f668414d4f51184d6e1e2568ae6da393"
  },
  {
    "url": "_saber/images/20190705011-0d2783b8.jpg",
    "revision": "0d2783b8ed458a63822abc273706311e"
  },
  {
    "url": "_saber/images/20190705011-0ebed8aa.jpg",
    "revision": "0ebed8aa5cc95c598948e531473c322f"
  },
  {
    "url": "_saber/images/20190705011-c751159d.jpg",
    "revision": "c751159d016704c7e21b935fa1da97cc"
  },
  {
    "url": "_saber/images/20190705012-3d059f82.jpg",
    "revision": "3d059f82fbf9012b8236e1b15f66253b"
  },
  {
    "url": "_saber/images/20190705012-645702c0.jpg",
    "revision": "645702c05e1a5d951e1e71c5b7cf80f2"
  },
  {
    "url": "_saber/images/20190705012-f80fef21.jpg",
    "revision": "f80fef213d471fc61cdd58b941d7a40d"
  },
  {
    "url": "_saber/images/20190705013-1bcf97c1.jpg",
    "revision": "1bcf97c186c9fbceb7d0de4dff58bf18"
  },
  {
    "url": "_saber/images/20190705013-254792d7.jpg",
    "revision": "254792d75a2d0ec3f5e3acf64fdfc2d3"
  },
  {
    "url": "_saber/images/20190705013-3f7fa35f.jpg",
    "revision": "3f7fa35f4eca2d8a3dbb8c129ae4a792"
  },
  {
    "url": "_saber/images/20190705014-0ad99225.jpg",
    "revision": "0ad99225b77fa08c415d2f38e21f4546"
  },
  {
    "url": "_saber/images/20190705014-27730f3d.jpg",
    "revision": "27730f3decae8968dd812c4d78b81c31"
  },
  {
    "url": "_saber/images/20190705014-3f05e8c4.jpg",
    "revision": "3f05e8c483c25aa111e50213af75af01"
  },
  {
    "url": "_saber/images/20190705015-7e05effc.jpg",
    "revision": "7e05effc6db6653039c322afd289ed21"
  },
  {
    "url": "_saber/images/20190705015-9229a5d4.jpg",
    "revision": "9229a5d47de128878a9d35c4a02ec694"
  },
  {
    "url": "_saber/images/20190705015-cd40fd9f.jpg",
    "revision": "cd40fd9f7044b2134a7a649ad8cc7c59"
  },
  {
    "url": "_saber/images/20190705016-417e53f9.jpg",
    "revision": "417e53f9c8a15e0fdc706cce2d980b16"
  },
  {
    "url": "_saber/images/20190705016-7096a423.jpg",
    "revision": "7096a4236d8e47fe235d8c947fb5757f"
  },
  {
    "url": "_saber/images/20190705016-dfa395ae.jpg",
    "revision": "dfa395ae44a68b7728503780e1c535ef"
  },
  {
    "url": "_saber/images/20190705017-0d10b111.jpg",
    "revision": "0d10b1110bb7cdadc89f0130fcbc0604"
  },
  {
    "url": "_saber/images/20190705017-8c390346.jpg",
    "revision": "8c3903469cd4d91a3ba7076d62de05c7"
  },
  {
    "url": "_saber/images/20190705017-ddbad279.jpg",
    "revision": "ddbad2798f62c485437170ad7b7bb4c0"
  },
  {
    "url": "_saber/images/20190705018-16d6f110.jpg",
    "revision": "16d6f110faa35b2ba04504bdcac9e909"
  },
  {
    "url": "_saber/images/20190705018-a4d38996.jpg",
    "revision": "a4d3899667d4cc703a6588f8d2643b45"
  },
  {
    "url": "_saber/images/20190705018-fa3d2f9a.jpg",
    "revision": "fa3d2f9ac76422e0d85749be86f0b062"
  },
  {
    "url": "_saber/images/20190705019-7ef55f99.jpg",
    "revision": "7ef55f99965d0a70697a75e5b0dc68be"
  },
  {
    "url": "_saber/images/20190705019-a6ee9911.jpg",
    "revision": "a6ee991198b79ed6035631b013a078f8"
  },
  {
    "url": "_saber/images/20190705019-f14be16e.jpg",
    "revision": "f14be16e559ea7e57eac27d12168c85d"
  },
  {
    "url": "_saber/images/20190705020-15559e5c.jpg",
    "revision": "15559e5cd421e78b8578b8bd1d7a2829"
  },
  {
    "url": "_saber/images/20190705020-6f3d646c.jpg",
    "revision": "6f3d646cd8f45b5623c971a928a5a8f8"
  },
  {
    "url": "_saber/images/20190705020-a60fd5aa.jpg",
    "revision": "a60fd5aaabb8f6ce45e87b3172b5040c"
  },
  {
    "url": "_saber/images/20190705021-5747c7db.jpg",
    "revision": "5747c7db3b2b33c4daf2308f8eeef369"
  },
  {
    "url": "_saber/images/20190705021-e5842098.jpg",
    "revision": "e584209823f61eb31b717d59bf9f9ef7"
  },
  {
    "url": "_saber/images/20190705021-ed972cae.jpg",
    "revision": "ed972cae6d48d45c76296f2f6f9170f4"
  },
  {
    "url": "_saber/images/20190705022-dabe000d.jpg",
    "revision": "dabe000d522c6f69bb68f7f1dba61fc3"
  },
  {
    "url": "_saber/images/20190705022-f6bdd6e2.jpg",
    "revision": "f6bdd6e2e914ca17b53aca184cabdb40"
  },
  {
    "url": "_saber/images/20190705022-fc7e63a6.jpg",
    "revision": "fc7e63a69627c82365858b9062bfca23"
  },
  {
    "url": "_saber/images/20190705023-1db662cd.jpg",
    "revision": "1db662cdc7759bada8b735d56dcfc8db"
  },
  {
    "url": "_saber/images/20190705023-2ec90988.jpg",
    "revision": "2ec9098822e3c28b3c430aa5eeef0829"
  },
  {
    "url": "_saber/images/20190705023-7149f7d1.jpg",
    "revision": "7149f7d110a8a87d120ced8a3f53fa10"
  },
  {
    "url": "_saber/images/20190705024-4e4bb5a9.jpg",
    "revision": "4e4bb5a91f0afe0d6f7eef2fbd13e1fe"
  },
  {
    "url": "_saber/images/20190705024-56ff5b3a.jpg",
    "revision": "56ff5b3a15e02e3ccb36852e26543a91"
  },
  {
    "url": "_saber/images/20190705024-8c2d2dec.jpg",
    "revision": "8c2d2dec757984004ccc6f8d74c79487"
  },
  {
    "url": "_saber/images/20190705025-5cbee520.jpg",
    "revision": "5cbee520018671cff614dfca76e8ee17"
  },
  {
    "url": "_saber/images/20190705025-e00d6476.jpg",
    "revision": "e00d647632fa2f954cd11e011d278a7d"
  },
  {
    "url": "_saber/images/20190705025-f2d5e03c.jpg",
    "revision": "f2d5e03c97b76b741a7583fe68cdb200"
  },
  {
    "url": "_saber/images/20190705026-4e339f74.jpg",
    "revision": "4e339f74e41aa0302aea370a094a50d2"
  },
  {
    "url": "_saber/images/20190705026-526e8881.jpg",
    "revision": "526e8881856780492297b5515a8eee1b"
  },
  {
    "url": "_saber/images/20190705026-52c4e6ae.jpg",
    "revision": "52c4e6ae6555181ba72c799f48ad7227"
  },
  {
    "url": "_saber/images/20190705027-0ae1a45a.jpg",
    "revision": "0ae1a45a0b14c4670ee453281625166e"
  },
  {
    "url": "_saber/images/20190705027-1b9445eb.jpg",
    "revision": "1b9445eb261a5cdfabf81fabe81472dd"
  },
  {
    "url": "_saber/images/20190705027-74d16c65.jpg",
    "revision": "74d16c65ed455d95c911ff87a1f1d45f"
  },
  {
    "url": "_saber/images/20190705028-132f2f7c.jpg",
    "revision": "132f2f7cfc4e31517be0ad55995cb4c9"
  },
  {
    "url": "_saber/images/20190705028-7d79b648.jpg",
    "revision": "7d79b648dac72d03d695870ae5b262df"
  },
  {
    "url": "_saber/images/20190705028-90e33cdb.jpg",
    "revision": "90e33cdb76328686e67341c246dda5b8"
  },
  {
    "url": "_saber/images/20190705029-1bf1cb48.jpg",
    "revision": "1bf1cb48e7a6b3371c9accc0ab6d68e9"
  },
  {
    "url": "_saber/images/20190705029-e1209d35.jpg",
    "revision": "e1209d35c513331e879615770a430ec4"
  },
  {
    "url": "_saber/images/20190705029-e9bbeb0c.jpg",
    "revision": "e9bbeb0c49d6fc6fa7d625ce32a6dd1b"
  },
  {
    "url": "_saber/images/20190705030-39c9c4bf.jpg",
    "revision": "39c9c4bfa9a57a7da72f482e9077b40d"
  },
  {
    "url": "_saber/images/20190705030-3e5f6edc.jpg",
    "revision": "3e5f6edc23e80c29ee83024e96fe893b"
  },
  {
    "url": "_saber/images/20190705030-91566552.jpg",
    "revision": "9156655221a88643814a66bac601a4d0"
  },
  {
    "url": "_saber/images/20190705031-4eda338f.jpg",
    "revision": "4eda338f41b925fcd03d073e16b08208"
  },
  {
    "url": "_saber/images/20190705031-6ca7860e.jpg",
    "revision": "6ca7860e3985db0f39a28960d395a9b0"
  },
  {
    "url": "_saber/images/20190705031-c3a1604b.jpg",
    "revision": "c3a1604bb499a404804c81d8889ad6f4"
  },
  {
    "url": "_saber/images/20190705032-108f785e.jpg",
    "revision": "108f785e974cdd8381ecf2efea6acbb5"
  },
  {
    "url": "_saber/images/20190705032-741c1d2a.jpg",
    "revision": "741c1d2a6b9d7f39a8b70c5d3097401a"
  },
  {
    "url": "_saber/images/20190705032-fe3f9e76.jpg",
    "revision": "fe3f9e7648aa4220749d154de8c90885"
  },
  {
    "url": "_saber/images/20190705033-049d160c.jpg",
    "revision": "049d160cfbd0d519abc72a35b825881a"
  },
  {
    "url": "_saber/images/20190705033-83cafe06.jpg",
    "revision": "83cafe06be0fa7eab228f5dbc50a1463"
  },
  {
    "url": "_saber/images/20190705033-f2dc05d0.jpg",
    "revision": "f2dc05d0083f806e08027addd6fc43fe"
  },
  {
    "url": "_saber/images/20190705034-0dd5bab1.jpg",
    "revision": "0dd5bab18a9eec8a18e062d67da32e7b"
  },
  {
    "url": "_saber/images/20190705034-21d9026e.jpg",
    "revision": "21d9026e753a754f60c4db8170d3038d"
  },
  {
    "url": "_saber/images/20190705034-b7089062.jpg",
    "revision": "b7089062fcf6efa17cb31e72970814ce"
  },
  {
    "url": "_saber/images/20190705035-2ea670d3.jpg",
    "revision": "2ea670d3a6b2ea865db93b1cfd15fadf"
  },
  {
    "url": "_saber/images/20190705035-4310f533.jpg",
    "revision": "4310f5330eba73db9c6dd7dd125cedd8"
  },
  {
    "url": "_saber/images/20190705035-b82b8d55.jpg",
    "revision": "b82b8d55031daf46811aa6bf4af065b3"
  },
  {
    "url": "_saber/images/20190705036-11e10b94.jpg",
    "revision": "11e10b94447a3fc3446986972f835c28"
  },
  {
    "url": "_saber/images/20190705036-5501ad80.jpg",
    "revision": "5501ad80d1fd1b9612a763459644f84a"
  },
  {
    "url": "_saber/images/20190705036-6f7f1a81.jpg",
    "revision": "6f7f1a81788b4a55ffeee8d4a160ea93"
  },
  {
    "url": "_saber/images/20190705037-0c40f375.jpg",
    "revision": "0c40f375c9e034dad79fa7e32431b8f7"
  },
  {
    "url": "_saber/images/20190705037-48924976.jpg",
    "revision": "489249764c0970f7b227207dc17fc084"
  },
  {
    "url": "_saber/images/20190705037-c353ef0d.jpg",
    "revision": "c353ef0d11bb16bfe202f2a090c64e2d"
  },
  {
    "url": "_saber/images/20190705038-7226c19f.jpg",
    "revision": "7226c19f4d9e5b22f0b1f25a2b3b86fe"
  },
  {
    "url": "_saber/images/20190705038-caba9ce4.jpg",
    "revision": "caba9ce4151f1f6f09c65a28715de6df"
  },
  {
    "url": "_saber/images/20190705038-efe9f8c0.jpg",
    "revision": "efe9f8c090f21da9b9950c907fbf68e8"
  },
  {
    "url": "_saber/images/20190705039-0a0d44c3.jpg",
    "revision": "0a0d44c389e2678b0c30dd175c499433"
  },
  {
    "url": "_saber/images/20190705039-1b8a831b.jpg",
    "revision": "1b8a831b6633784d2cf950ab357025b6"
  },
  {
    "url": "_saber/images/20190705039-8963ba1f.jpg",
    "revision": "8963ba1fb887cb76ac1787126039f3ad"
  },
  {
    "url": "_saber/images/20190705040-350399a9.jpg",
    "revision": "350399a9fe3920bc2b54092098c3cf7a"
  },
  {
    "url": "_saber/images/20190705040-369d61fc.jpg",
    "revision": "369d61fcef508000338e3c7f3057c07e"
  },
  {
    "url": "_saber/images/20190705040-9757a66f.jpg",
    "revision": "9757a66f46f40ac6b8f19ba18a5ad4ba"
  },
  {
    "url": "_saber/images/20190705041-7eb73cd6.jpg",
    "revision": "7eb73cd6c187a2a018eff303ce78fa60"
  },
  {
    "url": "_saber/images/20190705041-b171e39b.jpg",
    "revision": "b171e39b81f398ccb4e5bdee788e3a11"
  },
  {
    "url": "_saber/images/20190705041-d7a5c477.jpg",
    "revision": "d7a5c4774fc658b8c798d22ce2b6de84"
  },
  {
    "url": "_saber/images/20190705042-74e00caf.jpg",
    "revision": "74e00caff92a1994d2a20d211bb51606"
  },
  {
    "url": "_saber/images/20190705042-9fa0389f.jpg",
    "revision": "9fa0389f7e74ee87ebec669df29e4303"
  },
  {
    "url": "_saber/images/20190705042-e8f3b348.jpg",
    "revision": "e8f3b3482fd7457004ca14e88143f9be"
  },
  {
    "url": "_saber/images/20190705043-86d744e8.jpg",
    "revision": "86d744e808401f38f71046f863d3eadf"
  },
  {
    "url": "_saber/images/20190705043-a77440e6.jpg",
    "revision": "a77440e66bcf996aed4725e8e3645551"
  },
  {
    "url": "_saber/images/20190705043-d76f5205.jpg",
    "revision": "d76f5205290f4a390768037e896214c9"
  },
  {
    "url": "_saber/images/20190705044-590c7f79.jpg",
    "revision": "590c7f79752dfe749a7399c62b1f654d"
  },
  {
    "url": "_saber/images/20190705044-7ee0bd71.jpg",
    "revision": "7ee0bd71a8aba430949d570fe495f85d"
  },
  {
    "url": "_saber/images/20190705044-e3efe934.jpg",
    "revision": "e3efe93439c622993f32ac1ccdfb8271"
  },
  {
    "url": "_saber/images/20190705045-0ed43167.jpg",
    "revision": "0ed43167da1588a8c52f1c9a0f0aba79"
  },
  {
    "url": "_saber/images/20190705045-3e2c8494.jpg",
    "revision": "3e2c8494740c4dda1862a111a47082da"
  },
  {
    "url": "_saber/images/20190705045-70fe4e1c.jpg",
    "revision": "70fe4e1cf308f918916b3835f7682f30"
  },
  {
    "url": "_saber/images/20190705046-382348a5.jpg",
    "revision": "382348a5fa80cfbdcabcb4a27bb6be95"
  },
  {
    "url": "_saber/images/20190705046-b81f35be.jpg",
    "revision": "b81f35bee5faa9f1d62912e1379154fb"
  },
  {
    "url": "_saber/images/20190705046-fa8f7de6.jpg",
    "revision": "fa8f7de66e6d295b9c0e81303beff090"
  },
  {
    "url": "_saber/images/20190705047-41ce69f3.jpg",
    "revision": "41ce69f32ac108626378d6a0c80d75d2"
  },
  {
    "url": "_saber/images/20190705047-4ad313b4.jpg",
    "revision": "4ad313b44c2847270c4846833893db34"
  },
  {
    "url": "_saber/images/20190705047-60355d3d.jpg",
    "revision": "60355d3db733777da4430c8dd7fa1a4e"
  },
  {
    "url": "_saber/images/20190705048-155bc25e.jpg",
    "revision": "155bc25ed4f71d372d86f4e47b0a7b64"
  },
  {
    "url": "_saber/images/20190705048-45c9272f.jpg",
    "revision": "45c9272f3bca5f7bf71a3b238327a3eb"
  },
  {
    "url": "_saber/images/20190705048-f326051d.jpg",
    "revision": "f326051d001ec77d318e208cac0e571c"
  },
  {
    "url": "_saber/images/20190705049-62d964ef.jpg",
    "revision": "62d964ef8f90cdb1eed16cd33cdaf13b"
  },
  {
    "url": "_saber/images/20190705049-67cc92e4.jpg",
    "revision": "67cc92e4962165872d669cab5066b069"
  },
  {
    "url": "_saber/images/20190705049-afa5987a.jpg",
    "revision": "afa5987ab6b56a38a95bc8d853982ec8"
  },
  {
    "url": "_saber/images/20190705050-3e5cfdd4.jpg",
    "revision": "3e5cfdd4e110c1b2b0c60f88a4b2b3e9"
  },
  {
    "url": "_saber/images/20190705050-56d2b146.jpg",
    "revision": "56d2b1461b7eaf866640e2c8c781f5d1"
  },
  {
    "url": "_saber/images/20190705050-fb4cbfca.jpg",
    "revision": "fb4cbfca6c542946e5bbbc1efc09eb65"
  },
  {
    "url": "_saber/images/20190705051-44e122e4.jpg",
    "revision": "44e122e46e6ed486ade158689a8d5636"
  },
  {
    "url": "_saber/images/20190705051-737111cd.jpg",
    "revision": "737111cddbf400a871729a3316d31715"
  },
  {
    "url": "_saber/images/20190705051-9a2d589a.jpg",
    "revision": "9a2d589a8a50bb410b3797b9ec50377b"
  },
  {
    "url": "_saber/images/20190705052-04a1d125.jpg",
    "revision": "04a1d1253ecf67efcbae20d7f2d69867"
  },
  {
    "url": "_saber/images/20190705052-a2b18f3f.jpg",
    "revision": "a2b18f3f9bb5d96c8962c31a50f60b4a"
  },
  {
    "url": "_saber/images/20190705052-f17bfbbe.jpg",
    "revision": "f17bfbbe588aec26a637efcb406e5d5a"
  },
  {
    "url": "_saber/images/20190705053-112389e7.jpg",
    "revision": "112389e7d85c2de3e34d708ee6090706"
  },
  {
    "url": "_saber/images/20190705053-3cc0a519.jpg",
    "revision": "3cc0a519669287fa5732e5f134bf6ff9"
  },
  {
    "url": "_saber/images/20190705053-c37f7cf6.jpg",
    "revision": "c37f7cf6944050419a86fe5e46260d15"
  },
  {
    "url": "_saber/images/20190705054-6d95e388.jpg",
    "revision": "6d95e388961e8a40519f32f146a09aee"
  },
  {
    "url": "_saber/images/20190705054-c6a3256e.jpg",
    "revision": "c6a3256ed58b5ca274c4cc616aa468fa"
  },
  {
    "url": "_saber/images/20190705054-d242f9b0.jpg",
    "revision": "d242f9b05f4b251a1c072a12810bb362"
  },
  {
    "url": "_saber/images/20190705055-46e2a589.jpg",
    "revision": "46e2a5892907850a7ae260cf45092674"
  },
  {
    "url": "_saber/images/20190705055-4f758640.jpg",
    "revision": "4f7586406665a27121fe4cb653ef4451"
  },
  {
    "url": "_saber/images/20190705055-eafab5c8.jpg",
    "revision": "eafab5c8796cf295f68683778a8fc2e8"
  },
  {
    "url": "_saber/images/20190705056-11db0cb3.jpg",
    "revision": "11db0cb31ee2293bb65ab031d5967333"
  },
  {
    "url": "_saber/images/20190705056-3138345b.jpg",
    "revision": "3138345b9d115668b43b72de0d624d04"
  },
  {
    "url": "_saber/images/20190705056-dc561268.jpg",
    "revision": "dc561268ea5b757c889cdbf2b83e615b"
  },
  {
    "url": "_saber/images/20190705057-08ea8d30.jpg",
    "revision": "08ea8d3037e299532779278551d5903e"
  },
  {
    "url": "_saber/images/20190705057-a2f71aa5.jpg",
    "revision": "a2f71aa5d38b01c4ff642d24aa3abfb3"
  },
  {
    "url": "_saber/images/20190705057-bfae9240.jpg",
    "revision": "bfae9240ebcf4a779938f5b3254cdbe0"
  },
  {
    "url": "_saber/images/20190705058-0e1d2707.jpg",
    "revision": "0e1d2707cd7647158fc6c19a44f1901a"
  },
  {
    "url": "_saber/images/20190705058-1cec35cf.jpg",
    "revision": "1cec35cfd42510ec3b0a764f9f24b24d"
  },
  {
    "url": "_saber/images/20190705058-bcddde29.jpg",
    "revision": "bcddde29f58e4d28327874b98d93aa80"
  },
  {
    "url": "_saber/images/20190705059-51b9320d.jpg",
    "revision": "51b9320dfca6a55c084f1f839b61b1f0"
  },
  {
    "url": "_saber/images/20190705059-69d47feb.jpg",
    "revision": "69d47feb0660f5080f576ce0accbf977"
  },
  {
    "url": "_saber/images/20190705059-a163b861.jpg",
    "revision": "a163b8610e14020639e26eec49221ffe"
  },
  {
    "url": "_saber/images/20190705060-6909e6f1.jpg",
    "revision": "6909e6f171655fcf1bfb425a6d167da6"
  },
  {
    "url": "_saber/images/20190705060-9a8fa893.jpg",
    "revision": "9a8fa893c0184a1c255404c5dde0c07a"
  },
  {
    "url": "_saber/images/20190705060-a6af43b2.jpg",
    "revision": "a6af43b24e909c1f42e03c306e9ac516"
  },
  {
    "url": "_saber/images/20190705061-0854aaac.jpg",
    "revision": "0854aaac909ea168c7d57536444abfee"
  },
  {
    "url": "_saber/images/20190705061-b465b7c8.jpg",
    "revision": "b465b7c89267e207656854d6fcec6935"
  },
  {
    "url": "_saber/images/20190705061-e698a7fb.jpg",
    "revision": "e698a7fb1dd8d32333e6732f1881477a"
  },
  {
    "url": "_saber/images/20190705062-06d45bf6.jpg",
    "revision": "06d45bf6f4d3273380b06cb4a645db2e"
  },
  {
    "url": "_saber/images/20190705062-14fddbb1.jpg",
    "revision": "14fddbb1228406482f7ab2f86677b89a"
  },
  {
    "url": "_saber/images/20190705062-793b11b8.jpg",
    "revision": "793b11b84c83528d5b340de40046ff8c"
  },
  {
    "url": "_saber/images/20190705063-4770c715.jpg",
    "revision": "4770c715cf0ed5d512023882b2e6f132"
  },
  {
    "url": "_saber/images/20190705063-9f077d93.jpg",
    "revision": "9f077d93c45f77017e78753e7c437524"
  },
  {
    "url": "_saber/images/20190705063-d360224c.jpg",
    "revision": "d360224c9b3a1e1d6d587c3537d15a18"
  },
  {
    "url": "_saber/images/20190705064-bc32ce92.jpg",
    "revision": "bc32ce9246e40cc3129d4494e335d126"
  },
  {
    "url": "_saber/images/20190705064-d9f66fdf.jpg",
    "revision": "d9f66fdfb45fc6797a7d544beb002d87"
  },
  {
    "url": "_saber/images/20190705064-e2507fe3.jpg",
    "revision": "e2507fe32f338e2b751bfbc7b9dd1f1d"
  },
  {
    "url": "_saber/images/20190705065-27850058.jpg",
    "revision": "27850058d781469f06147a85d2368323"
  },
  {
    "url": "_saber/images/20190705065-50558b68.jpg",
    "revision": "50558b68a6c81e3e85f9dfab45b0227b"
  },
  {
    "url": "_saber/images/20190705065-dced626b.jpg",
    "revision": "dced626b24f92725dd0cd2fe0d159bdd"
  },
  {
    "url": "_saber/images/20190705066-8b4b54d2.jpg",
    "revision": "8b4b54d293c45d97c80ecb3029c7738e"
  },
  {
    "url": "_saber/images/20190705066-f651ef54.jpg",
    "revision": "f651ef5462b88575c911ea4ba9f61102"
  },
  {
    "url": "_saber/images/20190705066-ffbd5457.jpg",
    "revision": "ffbd54575b6ff4421b6c7bf4836e0662"
  },
  {
    "url": "_saber/images/20190705067-3d9716fb.jpg",
    "revision": "3d9716fbb4d0fe6df3aeb0560c843188"
  },
  {
    "url": "_saber/images/20190705067-5839f618.jpg",
    "revision": "5839f61838688cb2b09f1b640d6ceac4"
  },
  {
    "url": "_saber/images/20190705067-6f64c7d5.jpg",
    "revision": "6f64c7d57ac01f5885ea40458d7ec789"
  },
  {
    "url": "_saber/images/20190705068-2a3ff33b.jpg",
    "revision": "2a3ff33b6cff8409df61f80e23a3ce2e"
  },
  {
    "url": "_saber/images/20190705068-37ffb5f3.jpg",
    "revision": "37ffb5f3eee1e27adb42e038ee7d61c1"
  },
  {
    "url": "_saber/images/20190705068-93f59286.jpg",
    "revision": "93f59286578ab07c4cfd8b9ce76920f9"
  },
  {
    "url": "_saber/images/20190705069-0b51eb3f.jpg",
    "revision": "0b51eb3faf274bba723ed5827857f1ae"
  },
  {
    "url": "_saber/images/20190705069-7bac54ce.jpg",
    "revision": "7bac54ce6837922dd12523e3d3a45571"
  },
  {
    "url": "_saber/images/20190705069-a2f489ea.jpg",
    "revision": "a2f489eac6075f56d4ba18155540da06"
  },
  {
    "url": "_saber/images/20190705070-417267a0.jpg",
    "revision": "417267a0894cd80a0f1ad184847b9ed6"
  },
  {
    "url": "_saber/images/20190705070-7a87c83b.jpg",
    "revision": "7a87c83b4c1fb3e9b9dfe8d6926dd424"
  },
  {
    "url": "_saber/images/20190705070-b3d12211.jpg",
    "revision": "b3d12211748bee22c5b9be9224a3ddf4"
  },
  {
    "url": "_saber/images/20190705071-00a3098e.jpg",
    "revision": "00a3098ef8b1213f8c75311821fe695e"
  },
  {
    "url": "_saber/images/20190705071-412c9690.jpg",
    "revision": "412c9690b85691cc72488dffd471e9b0"
  },
  {
    "url": "_saber/images/20190705071-f5bb3e70.jpg",
    "revision": "f5bb3e709672fab63349ac59121b5304"
  },
  {
    "url": "_saber/images/20190705072-43922de9.jpg",
    "revision": "43922de9a7e797e5e127de95f58021ae"
  },
  {
    "url": "_saber/images/20190705072-63ffa172.jpg",
    "revision": "63ffa172e1ed9e2859591484dbaf724e"
  },
  {
    "url": "_saber/images/20190705072-fa08e830.jpg",
    "revision": "fa08e830a67464f3bc0d1cb84b545a0e"
  },
  {
    "url": "_saber/images/20190720001-206b51a6.jpg",
    "revision": "206b51a625a97a39650f4e9af07228c8"
  },
  {
    "url": "_saber/images/20190720001-2190c246.jpg",
    "revision": "2190c246b67c7ff17dd42facb8eaa224"
  },
  {
    "url": "_saber/images/20190720001-d6821d98.jpg",
    "revision": "d6821d9882e4314189b8582bd44617bf"
  },
  {
    "url": "_saber/images/20190724003-83ba26ce.png",
    "revision": "83ba26cef6729160629ed0a8b9fd0113"
  },
  {
    "url": "_saber/images/20190724003-97eab493.png",
    "revision": "97eab49321ea02cbd9d0d8b87f06360c"
  },
  {
    "url": "_saber/images/20190724004-a37d182d.png",
    "revision": "a37d182d67f0c00fb8dfdedbb4c3d794"
  },
  {
    "url": "_saber/images/20190724004-cfe07de4.png",
    "revision": "cfe07de4d4f15b96f21f35bdb4e0d508"
  },
  {
    "url": "_saber/images/20190724004-f854545f.png",
    "revision": "f854545fc1a6afc1861868c628c4861a"
  },
  {
    "url": "_saber/images/20190724005-637ea6fb.jpg",
    "revision": "637ea6fbbd4c77b3636ef707fb673ec9"
  },
  {
    "url": "_saber/images/20190724005-6447e3ec.jpg",
    "revision": "6447e3ecbbeb7bf5a78cc845a136a82b"
  },
  {
    "url": "_saber/images/20190724005-d933dbfe.jpg",
    "revision": "d933dbfe3ddb2c0c2fb476f8338e3a53"
  },
  {
    "url": "_saber/images/20191115002-43fd8d68.png",
    "revision": "43fd8d6814f57df9a57b09724101174f"
  },
  {
    "url": "_saber/images/20191115002-52aaa393.png",
    "revision": "52aaa3937d737c050d5ce2692b5f96fa"
  },
  {
    "url": "_saber/images/20191115002-a43e0661.png",
    "revision": "a43e066114d04622c6f9b77d14dca31c"
  },
  {
    "url": "_saber/images/20191115003-7642de16.png",
    "revision": "7642de16ce1a0deba06a20f6978196a8"
  },
  {
    "url": "_saber/images/20191115003-78afecc1.png",
    "revision": "78afecc106934f228cb649df98dfa6fe"
  },
  {
    "url": "_saber/images/20191115003-8976653e.png",
    "revision": "8976653e1fbf4b3b6567500aa0e2d298"
  },
  {
    "url": "_saber/images/20191115004-3529bd7c.png",
    "revision": "3529bd7c77b66ffdc026419dddfffc0c"
  },
  {
    "url": "_saber/images/20191115004-60e226ee.png",
    "revision": "60e226ee0ded20cb1c1dcaeefcf44299"
  },
  {
    "url": "_saber/images/20191115004-aa2b01ac.png",
    "revision": "aa2b01ac4aca89f22544ddb1d35f354c"
  },
  {
    "url": "_saber/images/20191115005-0edc58fc.png",
    "revision": "0edc58fc55bf0b80d5e64177187e6c65"
  },
  {
    "url": "_saber/images/20191115005-4de0ad81.png",
    "revision": "4de0ad817d55c0ba7ec5ef0f48766aaa"
  },
  {
    "url": "_saber/images/20191115005-f864439d.png",
    "revision": "f864439d23a2ac1b8dc3353d57556251"
  },
  {
    "url": "_saber/images/20191115006-1e1a7e2c.png",
    "revision": "1e1a7e2c78a1d865554b1eee47bd76ae"
  },
  {
    "url": "_saber/images/20191115006-62beb81f.png",
    "revision": "62beb81fd32a0a37555aea6a8af2b8fa"
  },
  {
    "url": "_saber/images/20191115006-7c2566b5.png",
    "revision": "7c2566b5958a2fb4a0cec64bcd65011b"
  },
  {
    "url": "_saber/images/20191115007-49b47aff.png",
    "revision": "49b47affc2a203b5bb892f379fb633af"
  },
  {
    "url": "_saber/images/20191115007-50950dff.png",
    "revision": "50950dffd4cddfbcb1e6eb907cac8ca0"
  },
  {
    "url": "_saber/images/20191115007-54bc27c6.png",
    "revision": "54bc27c62bd2cc8f10bffacbc179ea30"
  },
  {
    "url": "_saber/images/20191115008-3270d53a.png",
    "revision": "3270d53af693f5d50f2516358507b16b"
  },
  {
    "url": "_saber/images/20191115008-4dbedf0a.png",
    "revision": "4dbedf0aa7a27b160c71f06963b86c39"
  },
  {
    "url": "_saber/images/20191115008-da2c0714.png",
    "revision": "da2c071481d7d4e44d8ad1e340d75330"
  },
  {
    "url": "_saber/images/20191115009.990e8ef6.gif",
    "revision": "990e8ef63942e9d569ce1bb71ad56782"
  },
  {
    "url": "_saber/images/20191115010-1f2a63e6.png",
    "revision": "1f2a63e637b850a043df937dbec1e01d"
  },
  {
    "url": "_saber/images/20191115010-a8730585.png",
    "revision": "a87305851b868610900829dd0499aac1"
  },
  {
    "url": "_saber/images/20191115010-faf13786.png",
    "revision": "faf137869363a00a2c7527ba8745db04"
  },
  {
    "url": "_saber/images/20191115011-17e9a19a.png",
    "revision": "17e9a19a1c8a38ef347490dc7a71caca"
  },
  {
    "url": "_saber/images/20191115011-4c121221.png",
    "revision": "4c121221d73a2e8e273d88de72aa9a8a"
  },
  {
    "url": "_saber/images/20191115011-fa7b7cf0.png",
    "revision": "fa7b7cf0941bdb67afebe4bac12245a5"
  },
  {
    "url": "_saber/images/20191115012-0942078d.png",
    "revision": "0942078d3242b2b44a0207ea19897ab6"
  },
  {
    "url": "_saber/images/20191115012-1b9bf779.png",
    "revision": "1b9bf779c4b14faf16dad4471e58bd02"
  },
  {
    "url": "_saber/images/20191115012-4bc04d3d.png",
    "revision": "4bc04d3df2eb37971f30e478dbbcc9dc"
  },
  {
    "url": "_saber/images/20191115013-254b8547.png",
    "revision": "254b8547b60b75a7df0c829e82eb067d"
  },
  {
    "url": "_saber/images/20191115013-a4427779.png",
    "revision": "a4427779e54a03b03801182309ce3fbc"
  },
  {
    "url": "_saber/images/20191115013-ed98efaf.png",
    "revision": "ed98efaf19e7901663f43abc2bfd156b"
  },
  {
    "url": "_saber/images/20191115014-0a3121ca.png",
    "revision": "0a3121cac8a2c5c83a2ff3fee0c4d77c"
  },
  {
    "url": "_saber/images/20191115014-8bb203e5.png",
    "revision": "8bb203e5792ee43eef934a7fddaec0a5"
  },
  {
    "url": "_saber/images/20191115014-b73edc21.png",
    "revision": "b73edc2188355cc81eaf9f135a85d935"
  },
  {
    "url": "_saber/images/20191115015-007576f7.png",
    "revision": "007576f728226912a5bf9f4bcccad26f"
  },
  {
    "url": "_saber/images/20191115015-1dfb178a.png",
    "revision": "1dfb178ace6725b1185f0907c16c746d"
  },
  {
    "url": "_saber/images/20191115015-66ce607f.png",
    "revision": "66ce607fb81da30f033e31fd6bb24089"
  },
  {
    "url": "_saber/images/20191130001-7f4f3a23.jpg",
    "revision": "7f4f3a2345ddca7855989a6fa37fb5b1"
  },
  {
    "url": "_saber/images/20191130001-8e8c40e1.jpg",
    "revision": "8e8c40e16f00d7d0541104425b968b8b"
  },
  {
    "url": "_saber/images/20191130002-d03988de.jpg",
    "revision": "d03988de708ecf62a6d8fd9754d2b8b8"
  },
  {
    "url": "_saber/images/20191130002-d70843dd.jpg",
    "revision": "d70843dd9e8a9c5d86fe30e91473dee9"
  },
  {
    "url": "_saber/images/20191130003-646902a8.jpg",
    "revision": "646902a88ccf754c01ccc2329caeed04"
  },
  {
    "url": "_saber/images/20191130003-d88fad83.jpg",
    "revision": "d88fad833649f962da54aa8a78b25871"
  },
  {
    "url": "_saber/images/20191130004-2661fc05.jpg",
    "revision": "2661fc052355bcdbb6c8bf6e7f774e9b"
  },
  {
    "url": "_saber/images/20191130004-334465ba.jpg",
    "revision": "334465ba434f48014fc5197177a7316b"
  },
  {
    "url": "_saber/images/20191130005-26f2d00f.jpg",
    "revision": "26f2d00f4e2b127221372fb9d79a5beb"
  },
  {
    "url": "_saber/images/20191130005-f2ff8065.jpg",
    "revision": "f2ff806567c32d89999cc7c8de721c7a"
  },
  {
    "url": "_saber/images/20191130006-21108474.jpg",
    "revision": "2110847403329f4ecc4af5558ec91cbf"
  },
  {
    "url": "_saber/images/20191130006-359b5ff3.jpg",
    "revision": "359b5ff3166525df4fcd0058ec1d7966"
  },
  {
    "url": "_saber/images/20191130007-11b8ddbf.jpg",
    "revision": "11b8ddbf093b6dc08d57269210e13837"
  },
  {
    "url": "_saber/images/20191130007-a203c3d5.jpg",
    "revision": "a203c3d514ff1d5ccb086facab529f58"
  },
  {
    "url": "_saber/images/20191130007-de21573b.jpg",
    "revision": "de21573bc3c56c6f1416ea326399c83d"
  },
  {
    "url": "_saber/images/20200406001-8fc7503c.jpg",
    "revision": "8fc7503cf90a76b4533e2750c6536688"
  },
  {
    "url": "_saber/images/20200406001-b8e5eb62.jpg",
    "revision": "b8e5eb62eff2438a6bff0a2354064c11"
  },
  {
    "url": "_saber/images/20200406001-bca24d40.jpg",
    "revision": "bca24d405ef0cff82e7f345caf965087"
  },
  {
    "url": "_saber/images/20200406002-c9cf273c.jpg",
    "revision": "c9cf273c9f8efd3b1e4a87c705545c3f"
  },
  {
    "url": "_saber/images/20200406002-d3f2bf81.jpg",
    "revision": "d3f2bf81a7fa7085a4fb87e4d56b6021"
  },
  {
    "url": "_saber/images/20200608001-46c0e11f.jpg",
    "revision": "46c0e11f8cc4c2c40df1774f43803c9a"
  },
  {
    "url": "_saber/images/20200608001-9efa7643.jpg",
    "revision": "9efa7643fdda672728369398ec5af247"
  },
  {
    "url": "_saber/images/20200608001-b67f6852.jpg",
    "revision": "b67f6852597c0aee4bf647910865024a"
  },
  {
    "url": "_saber/images/icons/favicon.png",
    "revision": "c5c9e7752ed10457645a3a4b39a040c1"
  },
  {
    "url": "_saber/images/icons/icon_128x128.png",
    "revision": "778f7e50e4e40ef8173cd9880d00c183"
  },
  {
    "url": "_saber/images/icons/icon_256x256.png",
    "revision": "9c56707a849ccebbc85dd79b6a0fbda4"
  },
  {
    "url": "_saber/images/icons/icon_32x32.png",
    "revision": "799d69831d108cb4972d47fcb3608985"
  },
  {
    "url": "_saber/images/icons/icon_512x512.png",
    "revision": "b9082b56a8b2cc375d84e94cc52d8d89"
  },
  {
    "url": "_saber/js/404-page.09fc5bba.js",
    "revision": "0815ecde7b25108d13e4522244567511"
  },
  {
    "url": "_saber/js/51.6c83f6b4.js",
    "revision": "8dfb9037e3f81dea484e29b606036452"
  },
  {
    "url": "_saber/js/client.032ab6fd.js",
    "revision": "97b381cd8c6209888815d3ae83bdf0b9"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-26-start-md.36924e6e.js",
    "revision": "98adcfca0b448c94b452b1ca4cef7665"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-27-chrome-custom-md.e0936025.js",
    "revision": "28a2948144f51839f775c88dfa68984b"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-27-chrome-one-click-to-download-from-sogou-browser-md.165a3431.js",
    "revision": "af3882e7e5de23b365ab78d09e0eb0f6"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-27-py-lyric-retriever-md.7b04dbbd.js",
    "revision": "4b4cf0234c5e71bbd877bd318cabda0c"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-28-typecho-url-rewrite-on-bae-md.71bd6697.js",
    "revision": "18887a4d7201ab93b676b79257a71daa"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-29-1bit-audio-player-md.c2dc3ec4.js",
    "revision": "bd2cccfb47384515fef99257de42df1f"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-30-ihanabi-the-domain-md.9a785372.js",
    "revision": "634856c6101035ca87d0b6d8a747d08a"
  },
  {
    "url": "_saber/js/page--_posts-2013-12-05-move-out-from-bae-md.f845f27d.js",
    "revision": "e45ff0f14a50b5ac02a501317074c3ef"
  },
  {
    "url": "_saber/js/page--_posts-2013-12-10-typecho-v0-9-release-md.eaff8aff.js",
    "revision": "44bd98b0e9b49074ffb30344bd8ef1d2"
  },
  {
    "url": "_saber/js/page--_posts-2013-12-24-end-of-first-sophomore-term-md.743a9f11.js",
    "revision": "7622384c8a3341f01eb414a5c3540dda"
  },
  {
    "url": "_saber/js/page--_posts-2013-12-26-theme-two-md.e2bd4545.js",
    "revision": "6f10bcc56fb94fbe5562e54bf40960fa"
  },
  {
    "url": "_saber/js/page--_posts-2013-12-30-move-to-technetcal-and-2014-md.e0698dcc.js",
    "revision": "52f201adf68543fc3a40dd287b2e934a"
  },
  {
    "url": "_saber/js/page--_posts-2014-01-01-electronic-technology-final-exam-md.5993e267.js",
    "revision": "badbd095530931e88df540b27fea558c"
  },
  {
    "url": "_saber/js/page--_posts-2014-01-06-programmers-healthy-problem-md.759e38cd.js",
    "revision": "3577229764eed31f0a09874a17e623a3"
  },
  {
    "url": "_saber/js/page--_posts-2014-01-13-emeditor-setting-md.d9ce7bb8.js",
    "revision": "a75ec42f92661f75019c409e13c3b5eb"
  },
  {
    "url": "_saber/js/page--_posts-2014-01-31-happy-horse-year-md.2549df61.js",
    "revision": "6d15f94bb554534f3a5728ef780a1581"
  },
  {
    "url": "_saber/js/page--_posts-2014-03-02-win-prizes-at-weibo-md.34b40c40.js",
    "revision": "2d7002a3a770b6faeb69f07a8685ecd8"
  },
  {
    "url": "_saber/js/page--_posts-2014-03-23-about-parsing-ua-for-duoshuo-md.e25ea3df.js",
    "revision": "3a20b69c0491ed6fc1a7587e636cc14a"
  },
  {
    "url": "_saber/js/page--_posts-2014-03-25-flowers-photos-by-lumia-md.3b196b2b.js",
    "revision": "53bf275504deb3696a9c81907ab93562"
  },
  {
    "url": "_saber/js/page--_posts-2014-05-19-dual-boot-fix-virtualbox-and-hyper-v-switch-problem-md.d6067193.js",
    "revision": "0b467ce2efe8c24f5f9be5c4dc49c34d"
  },
  {
    "url": "_saber/js/page--_posts-2014-05-29-use-h5ai-to-beautify-your-http-web-server-index-md.4fff5b09.js",
    "revision": "2f2c87e9b48c6b7769db041605ab71b8"
  },
  {
    "url": "_saber/js/page--_posts-2014-10-14-syntax-for-typecho-md.7229dd2c.js",
    "revision": "972565312bfe414292cbbda18be51e7d"
  },
  {
    "url": "_saber/js/page--_posts-2015-05-20-hello-world-md.2dce22b6.js",
    "revision": "903090c6567a71197cf85c047c7f983e"
  },
  {
    "url": "_saber/js/page--_posts-2015-08-23-use-scoop-to-enhance-windows-powershell-md.b0a74096.js",
    "revision": "86b0573adf08cb8b9de894509ca7117b"
  },
  {
    "url": "_saber/js/page--_posts-2015-09-20-new-mac-env-bootstrap-md.16efc4c6.js",
    "revision": "04de64345affa9fcfd59b8ff6332a52b"
  },
  {
    "url": "_saber/js/page--_posts-2015-10-02-dot-im-domain-renewal-md.8fe7cf6e.js",
    "revision": "e3a5993a8e3663485a6f48cf808721f9"
  },
  {
    "url": "_saber/js/page--_posts-2017-01-01-2016-2017-md.ce6ac6d9.js",
    "revision": "bb885d0422c8f19a5c60a69e82601561"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-12-henet-6in4-ipv6-tunnel-on-openwrt-md.18818bf6.js",
    "revision": "39119a83ee74d1c7d400a134a39bc021"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-21-a-brief-history-of-minecraft-modding-md.52ee0a2b.js",
    "revision": "d0a2237b66fe9a12b47b56858b6cd23b"
  },
  {
    "url": "_saber/js/page--_posts-2017-12-15-nintendo-switch-unboxing-and-simple-review-md.ae0e2e33.js",
    "revision": "77b5c46557838032f17a36cb38d6ba85"
  },
  {
    "url": "_saber/js/page--_posts-2018-01-01-the-tao-of-notch-beyond-twitter-md.9d1f60c7.js",
    "revision": "49ad9a74dbd4aa090a829d2f390a07c0"
  },
  {
    "url": "_saber/js/page--_posts-2018-03-24-office-2016-custom-installation-guide-md.734c3aac.js",
    "revision": "a34c3dc59d6ceb720eca50661528f9a2"
  },
  {
    "url": "_saber/js/page--_posts-2018-05-12-talk-about-scoop-the-package-manager-for-windows-again-md.d6862ec9.js",
    "revision": "5f920ed20d5aeada7a095ebcfe7c261e"
  },
  {
    "url": "_saber/js/page--_posts-2018-12-21-chrome-extensions-that-i-am-using-md.cada7f01.js",
    "revision": "b1f096cc279b3e5ffd9ce8eb51327d1c"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-15-the-2018-hacktoberfest-shirt-arrived-md.9580edbf.js",
    "revision": "f0bd0d5423ea3cf44e1a6de9cf3393f7"
  },
  {
    "url": "_saber/js/page--_posts-2019-02-18-understanding-windows-console-host-settings-md.7e540a69.js",
    "revision": "7f0f04af4008bcfd857cd3eb47ed8d2e"
  },
  {
    "url": "_saber/js/page--_posts-2019-04-21-recent-changes-of-my-site-md.dcf826bb.js",
    "revision": "2a08328ce7709f0fab5ec49e5ac61df3"
  },
  {
    "url": "_saber/js/page--_posts-2019-05-01-macos-mojave-dark-mode-in-css-md.592c9906.js",
    "revision": "379c9fcf2998a931ccb2d63216a2e79f"
  },
  {
    "url": "_saber/js/page--_posts-2019-05-20-mariya-takeuchis-plastic-love-gets-music-video-after-35-years-md.66af7af2.js",
    "revision": "67ad1b76c36cf7cf39555140f337d69d"
  },
  {
    "url": "_saber/js/page--_posts-2019-07-07-amd-itx-diy-specs-for-the-next-5-years-md.99ee6d12.js",
    "revision": "f082b5e57564a6f8fd5c1bad21d8c01d"
  },
  {
    "url": "_saber/js/page--_posts-2019-07-24-better-lazyload-implementation-with-responsive-images-md.ccb014ec.js",
    "revision": "208bef1de0541db29edc5cfa6d019882"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-16-github-universe-2019-news-md.6a921f08.js",
    "revision": "58de6e6ded06c0331d0f03fad4543a5e"
  },
  {
    "url": "_saber/js/page--_posts-2020-04-10-ten-indie-video-game-soundtracks-you-must-listen-md.de1dc55b.js",
    "revision": "0de95b3d953e85cb65d549de562732e0"
  },
  {
    "url": "_saber/js/page--about-md.588acf5a.js",
    "revision": "190d30fb59d85449dca8b34471bc99f7"
  },
  {
    "url": "_saber/js/page--blog-index-md.e6da1d09.js",
    "revision": "c26242c57a3aea2428a94fcb4411a21a"
  },
  {
    "url": "_saber/js/page--guestbook-md.07be340c.js",
    "revision": "6698efe0d90bae27706eeef9e84052cd"
  },
  {
    "url": "_saber/js/page--index-md.737add96.js",
    "revision": "9c50e7e051f5f1c40c5eaa083953729b"
  },
  {
    "url": "_saber/js/page--links-md.f74cb460.js",
    "revision": "8bde805a2a46e3d89c402785916e1120"
  },
  {
    "url": "_saber/js/styles.5797a3b7.js",
    "revision": "e703196cae9c8e886203cd79b7afc426"
  },
  {
    "url": "404.html",
    "revision": "0b51cb5d5726f8b6824e76f2112addbd"
  },
  {
    "url": "about/index.html",
    "revision": "949c0309118df71bc5b1f590b9517c08"
  },
  {
    "url": "blog/1bit-audio-player/index.html",
    "revision": "3bf05e40b9f6d1b6c2e42547ea78b750"
  },
  {
    "url": "blog/2016-2017/index.html",
    "revision": "03ecd0abbeb2dd8bff1a5b11bd55a081"
  },
  {
    "url": "blog/a-brief-history-of-minecraft-modding/index.html",
    "revision": "73e7075b2d8e389e7508c38b3f405ebc"
  },
  {
    "url": "blog/about-parsing-ua-for-duoshuo/index.html",
    "revision": "248b2a5493f89fa3843431d1d12bedbc"
  },
  {
    "url": "blog/amd-itx-diy-specs-for-the-next-5-years/index.html",
    "revision": "4530ed3ed747b9e757a05978de76f54c"
  },
  {
    "url": "blog/better-lazyload-implementation-with-responsive-images/index.html",
    "revision": "b28000efb6ac268dc3b496fcda2ea187"
  },
  {
    "url": "blog/chrome-custom/index.html",
    "revision": "4d5ebc36d46603918af919194576ec4f"
  },
  {
    "url": "blog/chrome-extensions-that-i-am-using/index.html",
    "revision": "e03d3c6847d85936ba1b1994566b2223"
  },
  {
    "url": "blog/chrome-one-click-to-download-from-sogou-browser/index.html",
    "revision": "bc53b9aef12f749eaa5ff0e54f487519"
  },
  {
    "url": "blog/dot-im-domain-renewal/index.html",
    "revision": "32b6e73a491cfba5d7f0b04c3743a846"
  },
  {
    "url": "blog/dual-boot-fix-virtualbox-and-hyper-v-switch-problem/index.html",
    "revision": "81003187b9c241e569a8da67879935e1"
  },
  {
    "url": "blog/electronic-technology-final-exam/index.html",
    "revision": "feeb150b0cebc7da62598173e132b6d2"
  },
  {
    "url": "blog/emeditor-setting/index.html",
    "revision": "b687705a0434ddc791ea5eba4fd8ee6f"
  },
  {
    "url": "blog/end-of-first-sophomore-term/index.html",
    "revision": "e1d5bf3bd77aadc2c88189cc93da50b7"
  },
  {
    "url": "blog/flowers-photos-by-lumia/index.html",
    "revision": "e907b166133f5e4ac739a1ac2f3860ab"
  },
  {
    "url": "blog/github-universe-2019-news/index.html",
    "revision": "8314fd4c07edac5b6df92db38fd3db3b"
  },
  {
    "url": "blog/happy-horse-year/index.html",
    "revision": "de659061871981ec7fcf68379f9f7f53"
  },
  {
    "url": "blog/hello-world/index.html",
    "revision": "25249ee3de0999f93b6cd30ff5b494a7"
  },
  {
    "url": "blog/henet-6in4-ipv6-tunnel-on-openwrt/index.html",
    "revision": "0062c145b757f8a3f720d8b3c2cebc95"
  },
  {
    "url": "blog/ihanabi-the-domain/index.html",
    "revision": "ab1afca050b1725077ecdd29aef577a3"
  },
  {
    "url": "blog/index.html",
    "revision": "aa15b9cee8797dd302776002125860eb"
  },
  {
    "url": "blog/macos-mojave-dark-mode-in-css/index.html",
    "revision": "ccc5e8120260dab7e73600da9efaf24e"
  },
  {
    "url": "blog/mariya-takeuchis-plastic-love-gets-music-video-after-35-years/index.html",
    "revision": "d1a7afeb8ac7b769b5053119b158036f"
  },
  {
    "url": "blog/move-out-from-bae/index.html",
    "revision": "5814ed293cb38b65d9e4b14bb9e8f345"
  },
  {
    "url": "blog/move-to-technetcal-and-2014/index.html",
    "revision": "94f130084127697bdff506bff6103401"
  },
  {
    "url": "blog/new-mac-env-bootstrap/index.html",
    "revision": "77333acee36ad342e911c23cf344d530"
  },
  {
    "url": "blog/nintendo-switch-unboxing-and-simple-review/index.html",
    "revision": "2ed69461ca109835c70eb60b5c943da9"
  },
  {
    "url": "blog/office-2016-custom-installation-guide/index.html",
    "revision": "c9207068d39158d03db09b63f99377a3"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "1cd82ce2ab6e55e73798c7215c3462c2"
  },
  {
    "url": "blog/programmers-healthy-problem/index.html",
    "revision": "dbd9882943f73226b523fb74f00778a4"
  },
  {
    "url": "blog/py-lyric-retriever/index.html",
    "revision": "4d47097438d4ea226ad1466e92754da8"
  },
  {
    "url": "blog/recent-changes-of-my-site/index.html",
    "revision": "75ee346310ec5fc5eb666fbde958cc03"
  },
  {
    "url": "blog/start/index.html",
    "revision": "5c6f4c2a9d8ac8e44a2ceb9a5896ea1a"
  },
  {
    "url": "blog/syntax-for-typecho/index.html",
    "revision": "6006b1942dac06471574b736223ca9e7"
  },
  {
    "url": "blog/talk-about-scoop-the-package-manager-for-windows-again/index.html",
    "revision": "f420edd44c699de41de3a7ea87092931"
  },
  {
    "url": "blog/ten-indie-video-game-soundtracks-you-must-listen/index.html",
    "revision": "c55240f6f73de46709e19c02314e5b1b"
  },
  {
    "url": "blog/the-2018-hacktoberfest-shirt-arrived/index.html",
    "revision": "23932150e806a5447374078f6a1cb377"
  },
  {
    "url": "blog/the-tao-of-notch-beyond-twitter/index.html",
    "revision": "c6598e88d807c1c970017e6ee89ed97f"
  },
  {
    "url": "blog/theme-two/index.html",
    "revision": "0b70159fd835061e3d39bc048d863eff"
  },
  {
    "url": "blog/typecho-url-rewrite-on-bae/index.html",
    "revision": "86b6856cb9b3a854c9845b0e681c31d0"
  },
  {
    "url": "blog/typecho-v0-9-release/index.html",
    "revision": "5d8622afdb9f3857d32180810507a773"
  },
  {
    "url": "blog/understanding-windows-console-host-settings/index.html",
    "revision": "8b345a0ac4c87c899e74bdf44f54d745"
  },
  {
    "url": "blog/use-h5ai-to-beautify-your-http-web-server-index/index.html",
    "revision": "242285227fe629a964a7acffcb2c370a"
  },
  {
    "url": "blog/use-scoop-to-enhance-windows-powershell/index.html",
    "revision": "84584dac5b196e6bbe4eeb36701005a3"
  },
  {
    "url": "blog/win-prizes-at-weibo/index.html",
    "revision": "7662b48eccf87750b0f39863cf85b215"
  },
  {
    "url": "google83352756ba352b4c.html",
    "revision": "e718cc06af7e69d4b044afdb8f1667cb"
  },
  {
    "url": "guestbook/index.html",
    "revision": "c7b48e26b381ad50f9771265744fb2a1"
  },
  {
    "url": "index.html",
    "revision": "5eb7ee6c47735896577f900e24493be5"
  },
  {
    "url": "links/index.html",
    "revision": "56f7bd10232b94e3b083e2f14089112c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
