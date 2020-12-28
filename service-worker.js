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
    "url": "_saber/images/20150520001-03cf1b97.png",
    "revision": "b9302de7443e311bf56063e7736b8fb0"
  },
  {
    "url": "_saber/images/20150520001-b9919f17.png",
    "revision": "dad02a3d6c32d90926e8eb4f899df165"
  },
  {
    "url": "_saber/images/20150810001-6c4a7853.png",
    "revision": "26e7617febfdf960879b1599daa6f059"
  },
  {
    "url": "_saber/images/20150810001-8951efd3.png",
    "revision": "4f10d3da2521358c35a389d6190a6964"
  },
  {
    "url": "_saber/images/20150810001-bb3de0b6.png",
    "revision": "667bc4f1455594f02b600901e8edc5cf"
  },
  {
    "url": "_saber/images/20150823002-2d110ffe.png",
    "revision": "7187cff9f5b1909c64ac6519b8f6b34a"
  },
  {
    "url": "_saber/images/20150823002-3dcb0434.png",
    "revision": "ce1c1016f5d0e476c4c660a5cc976fa1"
  },
  {
    "url": "_saber/images/20150823002-f21ddbb3.png",
    "revision": "dd0e67871df4ef23957bf3d633b8af15"
  },
  {
    "url": "_saber/images/20151002001-153ecd4b.png",
    "revision": "f69795d7b7533f04ce641d04655a8af8"
  },
  {
    "url": "_saber/images/20151002002-99a26d37.png",
    "revision": "da500b5d09dc2d3a5e79bd4b937e412e"
  },
  {
    "url": "_saber/images/20151002003-29d530da.png",
    "revision": "25c67cf70c0fd4f63ff738eb3ba8aac4"
  },
  {
    "url": "_saber/images/20151002003-461bcaf2.png",
    "revision": "a374dd161120d603611a7e95a89cd11a"
  },
  {
    "url": "_saber/images/20151002003-7f12f958.png",
    "revision": "9dc8b868b9f3cceeaa8ea8ec184238e9"
  },
  {
    "url": "_saber/images/20151002004-351c408a.png",
    "revision": "bc82c9035c08379692b14d2d452500f7"
  },
  {
    "url": "_saber/images/20151002004-50c03da6.png",
    "revision": "d059bf42b6c2fe4a725c3a096ade780c"
  },
  {
    "url": "_saber/images/20151002004-aa4c4fc6.png",
    "revision": "0d29614d5d7620dac7e0950705d03142"
  },
  {
    "url": "_saber/images/20170130001-593317a3.jpg",
    "revision": "f732e2d75d057778c2af531339660884"
  },
  {
    "url": "_saber/images/20170130001-b27ed46f.jpg",
    "revision": "792a840a282a7c50399a52cb82438339"
  },
  {
    "url": "_saber/images/20170130001-b2b25c4a.jpg",
    "revision": "d74e47115da40af8d03f9248f8b59281"
  },
  {
    "url": "_saber/images/20170212002-7400173d.png",
    "revision": "485bc7cfac4f7fdd83f4948f8435e2f5"
  },
  {
    "url": "_saber/images/20170212002-a19aa9d7.png",
    "revision": "17d3691320dda46a58072cafb8c61667"
  },
  {
    "url": "_saber/images/20170212002-aad2418a.png",
    "revision": "ecc56749dfd41228274a52c9d227eb1d"
  },
  {
    "url": "_saber/images/20170212003-046ff6ae.png",
    "revision": "639cf7d815b3f73cf367dfd8bd1ff76e"
  },
  {
    "url": "_saber/images/20170212003-1ef96d19.png",
    "revision": "98248bf0c7ae9c8673b21803ae8038ea"
  },
  {
    "url": "_saber/images/20170212003-7a03f221.png",
    "revision": "772cc12141a68bd2bebd89aa6ccba61f"
  },
  {
    "url": "_saber/images/20170212004-34479e5e.png",
    "revision": "d9f888997bab0a0f34c1ec525bccded8"
  },
  {
    "url": "_saber/images/20170212004-7421dce1.png",
    "revision": "829596287edcfdc57775033c0388d09a"
  },
  {
    "url": "_saber/images/20170212004-84c01e21.png",
    "revision": "4dcb0f71af4905388b8f7baf6dc8e89b"
  },
  {
    "url": "_saber/images/20170212005-31999199.png",
    "revision": "583b231187c4e3edd019712dbcf6b55e"
  },
  {
    "url": "_saber/images/20170212005-fb175d06.png",
    "revision": "b3b6d6d5dddd29d3059dc8588c9133b2"
  },
  {
    "url": "_saber/images/20170212006-135a1d15.png",
    "revision": "e07faa74411dad440faec08cc174d45f"
  },
  {
    "url": "_saber/images/20170212006-450c07a8.png",
    "revision": "7cd05b22a33750516df56c127503b64f"
  },
  {
    "url": "_saber/images/20170222001-750775a6.png",
    "revision": "73c0ad38e42ace5631980904ff2c0980"
  },
  {
    "url": "_saber/images/20170715001-bd897846.jpg",
    "revision": "85590a4141788cd8eb72984ae7cc279c"
  },
  {
    "url": "_saber/images/20170715001-fc151b95.jpg",
    "revision": "9bbae4937330bb3540dddb2871abc1ee"
  },
  {
    "url": "_saber/images/20170715002-04c7d1a5.jpg",
    "revision": "8334582a70c65fcf3374856323d24e62"
  },
  {
    "url": "_saber/images/20170715003-73f03588.jpg",
    "revision": "1f26c549f10f31b49ee8138d7b813a25"
  },
  {
    "url": "_saber/images/20170715003-7b9f9cf6.jpg",
    "revision": "b0a5bd5e43a02d6aab605e6bff64d4fc"
  },
  {
    "url": "_saber/images/20170715004-4a4d4766.jpg",
    "revision": "36c5a8a177720683056a613f3d126a08"
  },
  {
    "url": "_saber/images/20170715005-482d056b.jpg",
    "revision": "0bdf10be2a8b9a7f84064525c6784ecf"
  },
  {
    "url": "_saber/images/20170715005-9abfb1fb.jpg",
    "revision": "303934ae4ac29e06eb84018528b23b88"
  },
  {
    "url": "_saber/images/20170715006-e7b9f5b4.jpg",
    "revision": "e75d2c99fa59ba20adc0c3e43f3b0f62"
  },
  {
    "url": "_saber/images/20170715007-6635bfae.jpg",
    "revision": "792a3346c8160099e605e2ed61498ee9"
  },
  {
    "url": "_saber/images/20170715008-92e4f50c.jpg",
    "revision": "f0eb5fa09673a2f9ab14114a121c3f95"
  },
  {
    "url": "_saber/images/20170715009-0c8dc4e0.jpg",
    "revision": "7df6fa926c4f92a166259911794a3448"
  },
  {
    "url": "_saber/images/20170715009-772b6167.jpg",
    "revision": "9b821f036e390194a8fc1e75d5e453f4"
  },
  {
    "url": "_saber/images/20170715009-fa425f23.jpg",
    "revision": "33238eb62bbc9313238759511db8f78b"
  },
  {
    "url": "_saber/images/20170715010-0f4f2705.jpg",
    "revision": "4cd2ad66a7c3c7ef69c19d8453a50b2b"
  },
  {
    "url": "_saber/images/20171215001-1c5243ee.jpg",
    "revision": "05f89c50db31f70e45275159d3b44c76"
  },
  {
    "url": "_saber/images/20171215001-1c6b6c86.jpg",
    "revision": "17779c525300125dcea159fbf1fea8a3"
  },
  {
    "url": "_saber/images/20171215001-6aad6b8f.jpg",
    "revision": "3fbd6410dea41461230561b20c708984"
  },
  {
    "url": "_saber/images/20171215002-40ad4c5e.jpg",
    "revision": "65d314fb1f2d94c45d7ca1a261f983b2"
  },
  {
    "url": "_saber/images/20171215002-865118f4.jpg",
    "revision": "eed16833317652c67967bc01df733fb0"
  },
  {
    "url": "_saber/images/20171215003-38e160ed.jpg",
    "revision": "4097528da8c568e5c6818c7645c8e9a0"
  },
  {
    "url": "_saber/images/20171215003-7ffefc97.jpg",
    "revision": "5988545b80bf64ad148a5127e15bbe81"
  },
  {
    "url": "_saber/images/20171215003-d404aa37.jpg",
    "revision": "ed442a0c1777e2164411c1712c16cdaf"
  },
  {
    "url": "_saber/images/20171215004-bb0f76d4.jpg",
    "revision": "22a9222291957e26343a09b991d68ac6"
  },
  {
    "url": "_saber/images/20171215004-ca520470.jpg",
    "revision": "a7f8c23e608425304653e11e40ed831e"
  },
  {
    "url": "_saber/images/20171215004-e40f912d.jpg",
    "revision": "5564bb9064268a5b647e79873b990696"
  },
  {
    "url": "_saber/images/20171215005-0f1ee6ea.jpg",
    "revision": "ef859d72253ca2a7a8c4b7db43692faa"
  },
  {
    "url": "_saber/images/20171215005-7cdf6490.jpg",
    "revision": "f799f10f02c91cd5228fd3bfd9a31ff5"
  },
  {
    "url": "_saber/images/20171215005-a3429175.jpg",
    "revision": "592345476c76d3cc8dfa9f657c2798df"
  },
  {
    "url": "_saber/images/20171215006-53ecbafc.jpg",
    "revision": "66f0326e54816a1fcaa601076979fdf1"
  },
  {
    "url": "_saber/images/20171215006-62fabcc7.jpg",
    "revision": "2bf01440aef8b2def6f6a76519b5aa3b"
  },
  {
    "url": "_saber/images/20171215006-72e44544.jpg",
    "revision": "2824eed5299a98d3053ac8a18b56ced1"
  },
  {
    "url": "_saber/images/20171215007-325a9c17.jpg",
    "revision": "4ea6312cfcb215c1a93dcfc3247edd50"
  },
  {
    "url": "_saber/images/20171215007-8a83ab2f.jpg",
    "revision": "72bd0b20de42f1cb9588a5172421b401"
  },
  {
    "url": "_saber/images/20171215007-dd6840fc.jpg",
    "revision": "e88ed8145614e8c7217270e40107fbd9"
  },
  {
    "url": "_saber/images/20171215008-b6f0c379.jpg",
    "revision": "6c5c2fb72ddde378b0271b0d242b9939"
  },
  {
    "url": "_saber/images/20171215008-db1a56a6.jpg",
    "revision": "792b51564af659a19e0c25227cf616ae"
  },
  {
    "url": "_saber/images/20171215008-df314db1.jpg",
    "revision": "ea72924f773276a46e6b3d80619a5db2"
  },
  {
    "url": "_saber/images/20171215009-75abb2cc.jpg",
    "revision": "db5bb6b6c070c0b70a79ae26b9ca12ef"
  },
  {
    "url": "_saber/images/20171215009-a446efa8.jpg",
    "revision": "971e90a5c0eeb9817040a4c9d28fcc22"
  },
  {
    "url": "_saber/images/20171215009-e1e36b46.jpg",
    "revision": "407849e27eccace8131d60a492f24d88"
  },
  {
    "url": "_saber/images/20171215010-02d9a5de.jpg",
    "revision": "93b4813f19f552896ccffd05d813016e"
  },
  {
    "url": "_saber/images/20171215010-1a7ca640.jpg",
    "revision": "4f74137b52d3bd9a2c6a082c682f2d9a"
  },
  {
    "url": "_saber/images/20171215010-adce54fe.jpg",
    "revision": "30be7e23de8ba9ee74fcb9bffa40187d"
  },
  {
    "url": "_saber/images/20171215011-2a694556.jpg",
    "revision": "3b792ff48941df15c04603134e0454e6"
  },
  {
    "url": "_saber/images/20171215011-9d527690.jpg",
    "revision": "680b63674cc500e8dd9d43d7acee7d9a"
  },
  {
    "url": "_saber/images/20171215011-c9d939c3.jpg",
    "revision": "8cec1ee31375321f05ca96f7ecf276c5"
  },
  {
    "url": "_saber/images/20171215012-34a4958b.jpg",
    "revision": "e28f9c575479d80b8efd7e4bed90178b"
  },
  {
    "url": "_saber/images/20171215012-885502d4.jpg",
    "revision": "51f0e1ec5bce77d89498913ee885f293"
  },
  {
    "url": "_saber/images/20171215012-f01d4609.jpg",
    "revision": "9e06ff53a653e28a794e381da11e480d"
  },
  {
    "url": "_saber/images/20171215013-37a81be8.jpg",
    "revision": "5b49da1f7441a8512971ffaf8463b525"
  },
  {
    "url": "_saber/images/20171215013-41f9c392.jpg",
    "revision": "04f9087a8ab8c7ff724ea8634834a13e"
  },
  {
    "url": "_saber/images/20171215013-5095881d.jpg",
    "revision": "8140c7d06f58956687ad5b20e7e56660"
  },
  {
    "url": "_saber/images/20171215014-150b212e.jpg",
    "revision": "4367335fd135bb8e7d4cd2db62d7d5f8"
  },
  {
    "url": "_saber/images/20171215014-7049183e.jpg",
    "revision": "b5549f6b87da3bd45236115785a102f7"
  },
  {
    "url": "_saber/images/20171215014-970717fa.jpg",
    "revision": "ae999986c78f5ce5ea521c8c3bf3f412"
  },
  {
    "url": "_saber/images/20171215015-21453066.jpg",
    "revision": "626a2ea74f2827f9228de42088017c87"
  },
  {
    "url": "_saber/images/20171215015-61335e59.jpg",
    "revision": "344ae241ad0086583d32bf452d16ebca"
  },
  {
    "url": "_saber/images/20171215015-da4be890.jpg",
    "revision": "d4d0132906fda0ac8944ee8c91936eb2"
  },
  {
    "url": "_saber/images/20171215016-0a89fd4a.jpg",
    "revision": "c19a1be9869e8f4b757ed8148143dc16"
  },
  {
    "url": "_saber/images/20171215016-0a963ccb.jpg",
    "revision": "2a0ac703b9bc041ba8abe60a5ab673da"
  },
  {
    "url": "_saber/images/20171215016-260fa162.jpg",
    "revision": "8105dd479c972df1d3bda3bb399c7032"
  },
  {
    "url": "_saber/images/20171215017-681c368c.jpg",
    "revision": "ec3314e3496073d8eea6ca0bcdffc59d"
  },
  {
    "url": "_saber/images/20171215017-ef816b74.jpg",
    "revision": "e388ef60714de51a050fbbd486096481"
  },
  {
    "url": "_saber/images/20171215017-f6d9f461.jpg",
    "revision": "415d6826008a2e791b7ec4d9624aae85"
  },
  {
    "url": "_saber/images/20171215018-0e21015a.jpg",
    "revision": "5fbbf50ae6ef30daebe995f8f5caccce"
  },
  {
    "url": "_saber/images/20171215018-90c21ba1.jpg",
    "revision": "d9afd8f3cf69c209c8a3a06f35c4f307"
  },
  {
    "url": "_saber/images/20171215018-b981c069.jpg",
    "revision": "7189594ff2c92fff1e8678184edb807a"
  },
  {
    "url": "_saber/images/20171215019-24e78925.jpg",
    "revision": "7f9616aff4c12fc0c2f82ce2253584fc"
  },
  {
    "url": "_saber/images/20171215019-c8e38132.jpg",
    "revision": "5e2207242b3f9cee0f3a2a9900f9e228"
  },
  {
    "url": "_saber/images/20171215019-fac3b20f.jpg",
    "revision": "1fd8c5c707596951da2a65e12d6ac2ca"
  },
  {
    "url": "_saber/images/20171215020-137643c4.jpg",
    "revision": "89dea68b1e1e6484c6ea33d8edf44f48"
  },
  {
    "url": "_saber/images/20171215020-34b7acbc.jpg",
    "revision": "86bd0f1b871731c26bacdf46cc514679"
  },
  {
    "url": "_saber/images/20171215020-c5d1bde7.jpg",
    "revision": "6ae90a8e9f6513b15086efd73b645363"
  },
  {
    "url": "_saber/images/20171215021-96dc3bde.jpg",
    "revision": "63e89be2cdf5dd8fde5892e5f36b59c1"
  },
  {
    "url": "_saber/images/20171215021-b1442034.jpg",
    "revision": "86621160cfff7bb3ba1d2f41217a9638"
  },
  {
    "url": "_saber/images/20171215021-c1faa6f4.jpg",
    "revision": "210b2c9c128cba4508879ab8b4276ddb"
  },
  {
    "url": "_saber/images/20171215022-1d777f2d.jpg",
    "revision": "da5b6a3fca7a77b2259e5e26905caa38"
  },
  {
    "url": "_saber/images/20171215022-9aa05fe7.jpg",
    "revision": "b302490b9d41bd38979600d2c461ddef"
  },
  {
    "url": "_saber/images/20171215022-a4d4ebfc.jpg",
    "revision": "58e404f7c3819eff0af7999048e7dbb1"
  },
  {
    "url": "_saber/images/20171215023-82b9bb25.jpg",
    "revision": "b5b273cef5070161ebed60e5057ff623"
  },
  {
    "url": "_saber/images/20171215023-a036dbd0.jpg",
    "revision": "a0de9dc770c01c2709eb4fc81651377b"
  },
  {
    "url": "_saber/images/20171215023-be7529bd.jpg",
    "revision": "616e3f55506ff80aabfd784c69d5e3da"
  },
  {
    "url": "_saber/images/20171215024-486a241b.jpg",
    "revision": "be4d02ba8b7c7c3b14e6309a7fd4316d"
  },
  {
    "url": "_saber/images/20171215024-6079d861.jpg",
    "revision": "83566162a56281696aab0ea43a0eac37"
  },
  {
    "url": "_saber/images/20171215024-f01c965b.jpg",
    "revision": "d3623b096009a164a64d9a03f0fd9a8f"
  },
  {
    "url": "_saber/images/20171215025-5b34c895.jpg",
    "revision": "30e556e50deb26a349c084ab3e6bb0db"
  },
  {
    "url": "_saber/images/20171215025-8dcb8fe4.jpg",
    "revision": "e4173076b0a305806116a7777bbd0975"
  },
  {
    "url": "_saber/images/20171215025-9acdeaf3.jpg",
    "revision": "9dc95c7960dc3581f52ecb332472dac1"
  },
  {
    "url": "_saber/images/20171215026-1890cc62.jpg",
    "revision": "f0681d37ef8e2bc3925674f34d25cb59"
  },
  {
    "url": "_saber/images/20171215026-8c7a204d.jpg",
    "revision": "564afb1b0d58100bf5e1affa52a19819"
  },
  {
    "url": "_saber/images/20171215026-cd57abe1.jpg",
    "revision": "8beaa26e879f7ace8d54e5945bc6828e"
  },
  {
    "url": "_saber/images/20171215027-46a5359f.jpg",
    "revision": "b0502c54aa928b03dbc9c35f2b8d6e2f"
  },
  {
    "url": "_saber/images/20171215027-49b55c4a.jpg",
    "revision": "ac57ed151e05468005343ee84336d6ba"
  },
  {
    "url": "_saber/images/20171215027-e87b300a.jpg",
    "revision": "0268eab5ff769dcb4af2eac717c1c3e9"
  },
  {
    "url": "_saber/images/20171215028-1832f2f9.jpg",
    "revision": "357aa18bc6e7b02a6318bdd763363363"
  },
  {
    "url": "_saber/images/20171215028-1ac2ce8b.jpg",
    "revision": "a0d29908203ceb0e6ca12aee0590a0f0"
  },
  {
    "url": "_saber/images/20171215028-e9e50230.jpg",
    "revision": "9ad37a957331ae0f5e269f8f00598102"
  },
  {
    "url": "_saber/images/20171215029-9f78325c.jpg",
    "revision": "3951f8ad1a02af9ec253bbc7ecd18da1"
  },
  {
    "url": "_saber/images/20171215029-b6744622.jpg",
    "revision": "8e62122e971167020c0833e397842a97"
  },
  {
    "url": "_saber/images/20171215029-cee625a3.jpg",
    "revision": "cb593f2311e7159fb13b90e7d242129a"
  },
  {
    "url": "_saber/images/20171215030-246fb369.jpg",
    "revision": "a6d8f9f1cf6ada8d3e0093131b7d8107"
  },
  {
    "url": "_saber/images/20171215030-4af495b7.jpg",
    "revision": "6a66c8b58524411b59f125bf4a82b02f"
  },
  {
    "url": "_saber/images/20171215030-91a017f2.jpg",
    "revision": "ec77ad36544e57f0980c9a7e542e7fca"
  },
  {
    "url": "_saber/images/20171215031-22c9045c.jpg",
    "revision": "a3c3cc4714692a5050d1db2bf7b377dc"
  },
  {
    "url": "_saber/images/20171215031-b7c4aa4a.jpg",
    "revision": "1ea42931c9a774e40b8d0b2b3372c4bc"
  },
  {
    "url": "_saber/images/20171215031-d8b8b9c5.jpg",
    "revision": "feb56453564f55c9670451d88769b4c8"
  },
  {
    "url": "_saber/images/20171215032-c239c0e1.jpg",
    "revision": "08d962128fadc14b142c2a9284795ce9"
  },
  {
    "url": "_saber/images/20171215032-ea58b175.jpg",
    "revision": "6f7de60d1af0de36ee412d8b650c754a"
  },
  {
    "url": "_saber/images/20171215032-f30887ee.jpg",
    "revision": "edab45b5dadc9144ae2d07d4e645a520"
  },
  {
    "url": "_saber/images/20171215033-94a92188.jpg",
    "revision": "46d334d6f5aad9401128d2592088ef59"
  },
  {
    "url": "_saber/images/20171215033-98b26ebf.jpg",
    "revision": "f12ed3c0aad59cdc3eb857a27f75c5d2"
  },
  {
    "url": "_saber/images/20171215033-df0f8735.jpg",
    "revision": "a0e9895c82aca4d788f4557e8d33f2dc"
  },
  {
    "url": "_saber/images/20171215034-10b330c6.jpg",
    "revision": "b812e54c7d383bae732b8f9feba5ec6f"
  },
  {
    "url": "_saber/images/20171215034-1bbb3536.jpg",
    "revision": "d856b98e4bcf7979108c996ed9f10c29"
  },
  {
    "url": "_saber/images/20171215034-5197929a.jpg",
    "revision": "9b7b2d7d0c63ab7272621f3729278760"
  },
  {
    "url": "_saber/images/20171215035-1e8114bc.jpg",
    "revision": "dd7307ea1b0ba22cd951f63286284d8f"
  },
  {
    "url": "_saber/images/20171215035-cbdc43b0.jpg",
    "revision": "c00dfb289cb52833fbd523c373c9fde2"
  },
  {
    "url": "_saber/images/20171215035-e86f4a89.jpg",
    "revision": "68d73c0fffcaa3e7866498694de9ca6b"
  },
  {
    "url": "_saber/images/20171215036-8666cf22.jpg",
    "revision": "8eed8f1fcea8a6b85c8a04cf6834d6ec"
  },
  {
    "url": "_saber/images/20171215036-b9677bc3.jpg",
    "revision": "0d3120743c2198eef849a8ffbb99899a"
  },
  {
    "url": "_saber/images/20171215036-cf2c2022.jpg",
    "revision": "3a83d0c8c0c203bc18c4d4f0c7dbd050"
  },
  {
    "url": "_saber/images/20171215037-65d72ed9.jpg",
    "revision": "efe5d780af636e867a866e2615c8a0d0"
  },
  {
    "url": "_saber/images/20171215037-6c0a5206.jpg",
    "revision": "1b8c86ae1acb07afe981ddcee3f7d136"
  },
  {
    "url": "_saber/images/20171215037-6dff5ec1.jpg",
    "revision": "9adcfcdd1f15b72b2d6099970fccc9cb"
  },
  {
    "url": "_saber/images/20171215038-313360f4.jpg",
    "revision": "3dd78a325fc98bc875c1c88a164b3e67"
  },
  {
    "url": "_saber/images/20171215038-7cf3dbc2.jpg",
    "revision": "fdbe82ceb53a1e2e1fa051c3da199724"
  },
  {
    "url": "_saber/images/20171215038-f4922131.jpg",
    "revision": "4fde18fa9557b0cb23cc2b93800d2de8"
  },
  {
    "url": "_saber/images/20171215039-355811d9.jpg",
    "revision": "46e7e98999e3df025c16e3594eeeb3c5"
  },
  {
    "url": "_saber/images/20171215039-9c6256b2.jpg",
    "revision": "1757f1261ae78b27f5a7aaea02e2673b"
  },
  {
    "url": "_saber/images/20171215039-c8c0aebc.jpg",
    "revision": "5ac0235d744415f5e0bff5f760e10d88"
  },
  {
    "url": "_saber/images/20171215040-49590aa1.jpg",
    "revision": "1f31ff95667b10d1d30a1d0076613ef2"
  },
  {
    "url": "_saber/images/20171215040-b60bc623.jpg",
    "revision": "2cce563e608eb663100565fec2a90c5b"
  },
  {
    "url": "_saber/images/20171215040-e0e62189.jpg",
    "revision": "0443b537b24a736ae36f40be0c73c018"
  },
  {
    "url": "_saber/images/20171215041-027ddb96.jpg",
    "revision": "fda846a2172bb510d0c5c7f0fed4a232"
  },
  {
    "url": "_saber/images/20171215041-0e8604ba.jpg",
    "revision": "941b135078d9ae89bc91b47491e38d15"
  },
  {
    "url": "_saber/images/20171215041-ccee67b0.jpg",
    "revision": "23ba53bb398e61655233e6763c4f115e"
  },
  {
    "url": "_saber/images/20171215042-2b451774.jpg",
    "revision": "e38031fdae5f33f6b659e246b7f30f2a"
  },
  {
    "url": "_saber/images/20171215042-53f5b66c.jpg",
    "revision": "d983c9b7390e5767e6be89de81f118aa"
  },
  {
    "url": "_saber/images/20171215042-8361347f.jpg",
    "revision": "e350b77f166d9bf80242fa4e817a7567"
  },
  {
    "url": "_saber/images/20171215043-067142dc.jpg",
    "revision": "b88ad60423bee892290c9bcdd73fa746"
  },
  {
    "url": "_saber/images/20171215043-d9fcbd81.jpg",
    "revision": "e24ab79da606ba8231e1fc0620fc22d3"
  },
  {
    "url": "_saber/images/20171231001-7e1a81ab.jpg",
    "revision": "600d89e97f1a2f8ab702a2f0a14e3d0f"
  },
  {
    "url": "_saber/images/20171231002-06771404.jpg",
    "revision": "918459fe4ebdc004463d5fa1ce0e7561"
  },
  {
    "url": "_saber/images/20171231002-3e4a266e.jpg",
    "revision": "ead988f02551b7f07514d4109a19f5d0"
  },
  {
    "url": "_saber/images/20171231003-258fc355.jpg",
    "revision": "9cc4fb0b5975ede01821c16ae25190c8"
  },
  {
    "url": "_saber/images/20171231004-8fed5922.jpg",
    "revision": "b68272f703748cec4ac0490be30a9376"
  },
  {
    "url": "_saber/images/20171231004-c9eede75.jpg",
    "revision": "77de4066d1cee3312a1ab6fd810c86e2"
  },
  {
    "url": "_saber/images/20171231005-15f6871e.jpg",
    "revision": "3c9152e5ba23930c44081c1de53f9753"
  },
  {
    "url": "_saber/images/20171231005-62768168.jpg",
    "revision": "71dd1e06a2e4c6ca83d4a29ee6da3bd4"
  },
  {
    "url": "_saber/images/20171231005-d73ed317.jpg",
    "revision": "e1221b10b504b5df12bbc3d3ede80952"
  },
  {
    "url": "_saber/images/20171231006-30323939.jpg",
    "revision": "149397700b1f6e3d35499ff783f3cf3b"
  },
  {
    "url": "_saber/images/20171231006-99766e8b.jpg",
    "revision": "fe53e18b3b331b8c55b96c333abd8033"
  },
  {
    "url": "_saber/images/20171231007-f21e72ac.jpg",
    "revision": "51c99f1f2f52d72aa66f5d6ef58d30f7"
  },
  {
    "url": "_saber/images/20171231007-fede6ff0.jpg",
    "revision": "8d8a2081b75f34e8537a3b8f51fd6eea"
  },
  {
    "url": "_saber/images/20171231008-db09372e.jpg",
    "revision": "2a9ae3000d0204c605277971bc13a39a"
  },
  {
    "url": "_saber/images/20171231009-c318579a.jpg",
    "revision": "0c65f24613f576997850a040d7e5188e"
  },
  {
    "url": "_saber/images/20171231009-c5bb2dfd.jpg",
    "revision": "e9b8bc8d3c0965e300d5129717adac8a"
  },
  {
    "url": "_saber/images/20171231010-7e0418f2.jpg",
    "revision": "51198ec1c07c5e2ca08e9a2071c02197"
  },
  {
    "url": "_saber/images/20171231011-95f0c50e.jpg",
    "revision": "3548fbaec552f051b37bb0cb9b0cf736"
  },
  {
    "url": "_saber/images/20171231012-256402b7.jpg",
    "revision": "77b22749941e82a9af16994db651006b"
  },
  {
    "url": "_saber/images/20171231013-35d97c0e.jpg",
    "revision": "c9ab27e7f2927f78bf156b95a4368a1e"
  },
  {
    "url": "_saber/images/20171231014-1d7e3342.jpg",
    "revision": "53ff48a399725652fc6fceb050ea9985"
  },
  {
    "url": "_saber/images/20171231014-52dccd17.jpg",
    "revision": "a8c9a207ee86b1b647f2ec125896e600"
  },
  {
    "url": "_saber/images/20171231015-47e830c1.jpg",
    "revision": "93257732d75d4e6f6047b68e1e42f123"
  },
  {
    "url": "_saber/images/20171231015-68005a91.jpg",
    "revision": "a76c22809f7897827a51a775c7853080"
  },
  {
    "url": "_saber/images/20180213002-d236184d.png",
    "revision": "0539aa257bdf873e3a4758db7738151c"
  },
  {
    "url": "_saber/images/20180324001-8cd16142.jpg",
    "revision": "ef3dc4374567887c64cb19f51158fed7"
  },
  {
    "url": "_saber/images/20180324001-f54546cf.jpg",
    "revision": "61d4e29d97f7e815b9adfb478f825939"
  },
  {
    "url": "_saber/images/20180324001-fd5d1782.jpg",
    "revision": "5913dc990ade86fa9e3bda9a11b2ffb2"
  },
  {
    "url": "_saber/images/20180324002-00c697dc.jpg",
    "revision": "4444d28332105cc343e1082472d6ead7"
  },
  {
    "url": "_saber/images/20180324002-93561989.jpg",
    "revision": "a559119107a21df2cc270de9068ad2d3"
  },
  {
    "url": "_saber/images/20180324002-f27e3740.jpg",
    "revision": "42cb8474ae7aada951539b9aab97a39b"
  },
  {
    "url": "_saber/images/20180324003-4752eacf.jpg",
    "revision": "6c792e4469a04e05b16be426abeb8b64"
  },
  {
    "url": "_saber/images/20180324003-6d4e7d2a.jpg",
    "revision": "2648c9657343ae03da396f4f72ea5e71"
  },
  {
    "url": "_saber/images/20180324004-b9a09db9.jpg",
    "revision": "1e2b2320efef0d83a5ce91cfa8d24ba4"
  },
  {
    "url": "_saber/images/20180324005-60209125.jpg",
    "revision": "c5bce00faa2dcf63d92a304755fee1fb"
  },
  {
    "url": "_saber/images/20180324006-8a451351.png",
    "revision": "ed9fca75021e7b8918019126ffca41d2"
  },
  {
    "url": "_saber/images/20180324006-a8632b86.png",
    "revision": "3deceaddf7b758ecdc3876a320b4cb8b"
  },
  {
    "url": "_saber/images/20180324007-10b325ce.png",
    "revision": "0d4f1eff7780a29099d33802307a76c1"
  },
  {
    "url": "_saber/images/20180324007-60aa0da5.png",
    "revision": "9cd08c0f3ddc2b85096cce9d4d94c47d"
  },
  {
    "url": "_saber/images/20180324007-74996c26.png",
    "revision": "fbc373e44ec79e8519d4c3a5c82ad706"
  },
  {
    "url": "_saber/images/20180506001-19236dcb.png",
    "revision": "2491f87c7d2fd9bc29b1cbc7f80231b9"
  },
  {
    "url": "_saber/images/20180510001-3381932d.png",
    "revision": "176afb4091134e443401b42d17b9c76c"
  },
  {
    "url": "_saber/images/20180510001-932bec47.png",
    "revision": "618aa2a433348cb590167d438ae8fe77"
  },
  {
    "url": "_saber/images/20180510002-67c8db95.png",
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
    "url": "_saber/images/20180512003-07e66c70.png",
    "revision": "26834d30e5440722aa20d86b63b46a98"
  },
  {
    "url": "_saber/images/20180512003-53ef6a4b.png",
    "revision": "0d4ffd0957946fb9d5a3e09e6af50c6b"
  },
  {
    "url": "_saber/images/20180512003-f9780b7a.png",
    "revision": "581d911c095736b68bfaf311a96d0e9e"
  },
  {
    "url": "_saber/images/20180512004-edde592f.png",
    "revision": "20cac783bc0547afca622e13e5bedd05"
  },
  {
    "url": "_saber/images/20181216001-34578c0e.png",
    "revision": "987c1cf8b1c1350d8399a6d9f9c39ebf"
  },
  {
    "url": "_saber/images/20181216002-0c34edcf.png",
    "revision": "6cb70fde832650aab02b582926bfdfbc"
  },
  {
    "url": "_saber/images/20181216002-1a0ab0d3.png",
    "revision": "3db9bd79eb862cf388ce00e71fb67d71"
  },
  {
    "url": "_saber/images/20181216002-b724c959.png",
    "revision": "7a637c911142c4b214e86891688e97de"
  },
  {
    "url": "_saber/images/20181216003-0d9baa1a.jpg",
    "revision": "555828962b02ab35b9a54e162c0fed9c"
  },
  {
    "url": "_saber/images/20181216003-6936fa95.jpg",
    "revision": "5737b3dd1a9fb040045cfb3ec8acb8cd"
  },
  {
    "url": "_saber/images/20181216003-a66b91a1.jpg",
    "revision": "3671ab2353a38ca67e7479884472dfb4"
  },
  {
    "url": "_saber/images/20181216004-2aeb3880.jpg",
    "revision": "ef65026357784ae0cee3d3e874522dc0"
  },
  {
    "url": "_saber/images/20181216004-519726f4.jpg",
    "revision": "85bb4ff49adebb4159ff316caba20d97"
  },
  {
    "url": "_saber/images/20181216004-87ae78eb.jpg",
    "revision": "69e436c90427fcf76af4d64d11ba656c"
  },
  {
    "url": "_saber/images/20181216005-4d277049.jpg",
    "revision": "8ca21eac3b412200096ccc68b9cae959"
  },
  {
    "url": "_saber/images/20181216005-7cdd9b14.jpg",
    "revision": "0f6b1c42a7fc07a7d33ba70207e86976"
  },
  {
    "url": "_saber/images/20181216005-e41c35a2.jpg",
    "revision": "c918ec2a731a43d9d57f2348c9f853f8"
  },
  {
    "url": "_saber/images/20181216006-17428ac4.jpg",
    "revision": "e77640404bc879dbbebc1d33f5436edf"
  },
  {
    "url": "_saber/images/20181216006-8c3a447a.jpg",
    "revision": "721f7e58403909c146c0265835632c19"
  },
  {
    "url": "_saber/images/20181216006-eb543403.jpg",
    "revision": "db1c33b039d8e8fe18f9f9827656d69b"
  },
  {
    "url": "_saber/images/20181216007-e8d838a6.jpg",
    "revision": "0a02114435782665dca47394131142e3"
  },
  {
    "url": "_saber/images/20181216007-f136a8d9.jpg",
    "revision": "ae9ce596b782f5cb6d2e656d0965f46a"
  },
  {
    "url": "_saber/images/20181216007-faebf645.jpg",
    "revision": "a27655d4ecb9691ade150d5f052c093e"
  },
  {
    "url": "_saber/images/20181216008-273ff94c.jpg",
    "revision": "49687334ead2f205492d83f7492b9dea"
  },
  {
    "url": "_saber/images/20181216008-93a6fea9.jpg",
    "revision": "012b53c5d9596eef1ab33611f35d6534"
  },
  {
    "url": "_saber/images/20181216008-e7ee59a0.jpg",
    "revision": "15b83152ac1e0dfdaedea3c44086a590"
  },
  {
    "url": "_saber/images/20181216009-3dff3dd3.png",
    "revision": "8e1e9cbe027b1330ccbca44aa59e7f3f"
  },
  {
    "url": "_saber/images/20181216009-a278c9b0.png",
    "revision": "847d19f57ef2a8dc2ef21ff667d1d4fb"
  },
  {
    "url": "_saber/images/20181216009-e0507e39.png",
    "revision": "65e7365c95ef737b7c055758cfc645b8"
  },
  {
    "url": "_saber/images/20181216010-15628903.png",
    "revision": "8c021d2244aeffcf261dd58b52895d9a"
  },
  {
    "url": "_saber/images/20181216010-88a8c209.png",
    "revision": "f8d9926abd060233589ee2833d56bf34"
  },
  {
    "url": "_saber/images/20181216010-cf116f61.png",
    "revision": "68dc477f3ae0d9d44a5bbb19e020b651"
  },
  {
    "url": "_saber/images/20181216011-2069e2bd.png",
    "revision": "33a62089d8d2fa73a0081dc79823ef81"
  },
  {
    "url": "_saber/images/20181216011-29258f62.png",
    "revision": "c95a52c34af020db098dc042fe4333c5"
  },
  {
    "url": "_saber/images/20181216011-4c05f176.png",
    "revision": "38db408f58f7a322ae953a16d73897c7"
  },
  {
    "url": "_saber/images/20181216012-0d525ce8.png",
    "revision": "2cc51f5584855119eb4dc68490e42dad"
  },
  {
    "url": "_saber/images/20181216012-7ed2802a.png",
    "revision": "c00d3655edd36614696135a5d26d3160"
  },
  {
    "url": "_saber/images/20181216012-ea017932.png",
    "revision": "945cf84505450efb22995a4eb33b798b"
  },
  {
    "url": "_saber/images/20181216013-627e34d6.jpg",
    "revision": "fb71a7b0d2e1b50588a0645e25bf8d7a"
  },
  {
    "url": "_saber/images/20181216013-90e49994.jpg",
    "revision": "90ac68e04bc932cc5b4900387474738d"
  },
  {
    "url": "_saber/images/20181216013-fc5bae16.jpg",
    "revision": "e7d9d742e1b7ca8baf4078cf4ee477ec"
  },
  {
    "url": "_saber/images/20181216014-12eed553.png",
    "revision": "8f24065f5d34703c86357a516bfa1928"
  },
  {
    "url": "_saber/images/20181216014-2a223b6c.png",
    "revision": "6187d4a473cc328211a2fe513985d7e4"
  },
  {
    "url": "_saber/images/20181216014-862cd1fd.png",
    "revision": "04d42cc7ced54aae3f7e7f99808635cb"
  },
  {
    "url": "_saber/images/20181216015-35de9048.jpg",
    "revision": "abed82b11259c62f55a72d6bdff1e6b3"
  },
  {
    "url": "_saber/images/20181216015-8855f902.jpg",
    "revision": "daa09d28b8c06b9915356c7eebb62010"
  },
  {
    "url": "_saber/images/20181216015-e5c70a30.jpg",
    "revision": "33ccf5d43691f906339f1f045b1bc0e8"
  },
  {
    "url": "_saber/images/20181216016-2595134f.png",
    "revision": "069b4ec5695a700ed4c797f19b2031b1"
  },
  {
    "url": "_saber/images/20181216016-8b56402b.png",
    "revision": "0639b5bc46e5b52067b6d88201195bad"
  },
  {
    "url": "_saber/images/20181216016-d9dba6ce.png",
    "revision": "efeff089103ec25bd85822057953f141"
  },
  {
    "url": "_saber/images/20181216017-54ce2c3f.png",
    "revision": "26b9bd3cd84327219c9ff18c0f163ded"
  },
  {
    "url": "_saber/images/20181216017-6ec5c612.png",
    "revision": "afd83c7f4ab0a997d8ac82d7ae0d5b8e"
  },
  {
    "url": "_saber/images/20181216017-b6d57919.png",
    "revision": "d210be190356b13c04734922682f1ba9"
  },
  {
    "url": "_saber/images/20181216018-79b92f8d.jpg",
    "revision": "68a112371c468e9bf590ab0608698dd0"
  },
  {
    "url": "_saber/images/20181216018-d293a4a8.jpg",
    "revision": "e5203f88a4e5973da5ebfe9171258acc"
  },
  {
    "url": "_saber/images/20181216018-fb4f633f.jpg",
    "revision": "f4726fe6c46f8e685f591d210351075f"
  },
  {
    "url": "_saber/images/20181216019-1024cb6b.jpg",
    "revision": "d06c4f3d99605c052f084ebf5ab54407"
  },
  {
    "url": "_saber/images/20181216019-790a5d41.jpg",
    "revision": "7f5dc27bf5e63031a0edd0e2866c268f"
  },
  {
    "url": "_saber/images/20181216019-b864ffb5.jpg",
    "revision": "d6be2435ff890e9c8410e08576f22669"
  },
  {
    "url": "_saber/images/20181216020-8e16dd5a.png",
    "revision": "d75d548bf6ab2dde288fdc6af37c11a4"
  },
  {
    "url": "_saber/images/20181216020-ba3190f3.png",
    "revision": "a01416c298c5b41958b1a477230fd991"
  },
  {
    "url": "_saber/images/20181216020-eb91964d.png",
    "revision": "adf1f16bb598719f294776b62369d248"
  },
  {
    "url": "_saber/images/20181216021-08e9c34b.png",
    "revision": "9c28f52774c99dc387ebf4ed13c4da34"
  },
  {
    "url": "_saber/images/20181216021-323c354d.png",
    "revision": "070c172a4819cdebfa42c40b035b3f2d"
  },
  {
    "url": "_saber/images/20181216021-dbff0d9b.png",
    "revision": "403d0159e8af073fc525ad35190521f5"
  },
  {
    "url": "_saber/images/20181216022-57d6b267.png",
    "revision": "761afdc30aa889e4515dd4f7a92516e4"
  },
  {
    "url": "_saber/images/20181216022-5d7c8f7d.png",
    "revision": "8c5e1e3388277416fd841f616c091b78"
  },
  {
    "url": "_saber/images/20181216022-627a3bc0.png",
    "revision": "e394426a23f7ac93f46068d7e8653841"
  },
  {
    "url": "_saber/images/20181216023-11bc5687.jpg",
    "revision": "df886cf1aabad8e52886872dfefde9ea"
  },
  {
    "url": "_saber/images/20181216023-26fbfa71.jpg",
    "revision": "2792650dc594b26bed1a59f35988105f"
  },
  {
    "url": "_saber/images/20181216023-f9240a56.jpg",
    "revision": "30e38e292b7da024b97279fe733c8d71"
  },
  {
    "url": "_saber/images/20181216024-6e246fef.jpg",
    "revision": "5480e959d67c33814f028c254ae80ce5"
  },
  {
    "url": "_saber/images/20181216024-bb16a321.jpg",
    "revision": "672e8b3b3c3e388f81275d0464a3128f"
  },
  {
    "url": "_saber/images/20181216024-c13e1d67.jpg",
    "revision": "081e2b66b57e3858c90bc2c5c871fbcc"
  },
  {
    "url": "_saber/images/20181216025-c4c7e92a.jpg",
    "revision": "b79c217867b7c5c505560e7457ff5418"
  },
  {
    "url": "_saber/images/20181216025-e6eb91f6.jpg",
    "revision": "93ddc215b06d0ffa6f287d19726c4856"
  },
  {
    "url": "_saber/images/20181216025-fa4a2e8d.jpg",
    "revision": "5cf339ca1729246d3e2969eebfc2dd5c"
  },
  {
    "url": "_saber/images/20181216026-47e3c4e6.jpg",
    "revision": "1bfe8ae6c8ad5eb977e7acbe69f4d427"
  },
  {
    "url": "_saber/images/20181216026-49e76f83.jpg",
    "revision": "3a47355104ac9d1e8fdca535c118ded2"
  },
  {
    "url": "_saber/images/20181216026-b00e2e9f.jpg",
    "revision": "32d6fd26140afdfb3882156a4e1ddc18"
  },
  {
    "url": "_saber/images/20181216027-50927128.jpg",
    "revision": "3fee7d5516294b9ac71b14410bfa5e58"
  },
  {
    "url": "_saber/images/20181216027-82c577fb.jpg",
    "revision": "52a924280a0ac475504fc8a03094e15a"
  },
  {
    "url": "_saber/images/20181216027-f4a1835f.jpg",
    "revision": "bf6c69a505640679cda59e2d891e4f5f"
  },
  {
    "url": "_saber/images/20181216028-67ef514f.jpg",
    "revision": "124f4993fcc43df5a2f3366f865f8810"
  },
  {
    "url": "_saber/images/20181216028-72a362e1.jpg",
    "revision": "e078151176002358b84144013fd4353e"
  },
  {
    "url": "_saber/images/20181216028-e15b9e6e.jpg",
    "revision": "1fb296fb08e14884d9090936dd17a50e"
  },
  {
    "url": "_saber/images/20181216029-1e7a56f4.png",
    "revision": "98483457ac4913bc8eed078022ce3fdf"
  },
  {
    "url": "_saber/images/20181216029-855b1b96.png",
    "revision": "84b211a184b7d0467e007be6baa6458f"
  },
  {
    "url": "_saber/images/20181216029-b0890e31.png",
    "revision": "6d89e714161d4e73a712c64c8445b426"
  },
  {
    "url": "_saber/images/20181216030-169fe683.png",
    "revision": "f9e443c7100d7a5f162da740319ccff5"
  },
  {
    "url": "_saber/images/20181216030-34ca56f4.png",
    "revision": "8e38f7d102daea4c21040788a3ad911e"
  },
  {
    "url": "_saber/images/20181216030-8ead246c.png",
    "revision": "c20719200f116d0e185b5258616de125"
  },
  {
    "url": "_saber/images/20181225005-43ffd10b.png",
    "revision": "074695374c21dc16c1c1fbd201f64a72"
  },
  {
    "url": "_saber/images/20181225005-c8090168.png",
    "revision": "da7b795d0efac593c49af50757455aa2"
  },
  {
    "url": "_saber/images/20181225006-82091b31.png",
    "revision": "38cc1cf891efb8f4191136288f549486"
  },
  {
    "url": "_saber/images/20181225006-8c876179.png",
    "revision": "13115f2aadfb0bad5a0f8ee99a22823f"
  },
  {
    "url": "_saber/images/20181225007-59d2c0d5.png",
    "revision": "afcef78d550baa2eaf0715133ed9912d"
  },
  {
    "url": "_saber/images/20181225007-aaf49f33.png",
    "revision": "624fe9da6bf7570afb407b99f89cfdd2"
  },
  {
    "url": "_saber/images/20181225008-04d01eca.png",
    "revision": "f79ba0c898ab8d522eb7ed0e55642887"
  },
  {
    "url": "_saber/images/20181225008-552bd66a.png",
    "revision": "542089beefb0fd23d20ce417308b544e"
  },
  {
    "url": "_saber/images/20181225009-0545852a.png",
    "revision": "e33343a2d8e61c37bb4263d46a2b2f73"
  },
  {
    "url": "_saber/images/20181225009-9f148af0.png",
    "revision": "c1889c7639b7aa73e6279f5247b1bb73"
  },
  {
    "url": "_saber/images/20181225010-66c70418.png",
    "revision": "a0903fc5bd300b163edc38aaa9949f46"
  },
  {
    "url": "_saber/images/20181225010-dc3ea398.png",
    "revision": "9d6c2f2c41c1e0da248a8e5d0cbab8c8"
  },
  {
    "url": "_saber/images/20181225011-030c76b9.png",
    "revision": "d7011565c3060fc695a314d9d1fbe47f"
  },
  {
    "url": "_saber/images/20181225011-d9bbf4ee.png",
    "revision": "ca364c26c06fa56f34617b05977f3632"
  },
  {
    "url": "_saber/images/20181225012-c592b766.png",
    "revision": "fe954ac7ca087801fd9287c58e93c87f"
  },
  {
    "url": "_saber/images/20181225012-c94fd464.png",
    "revision": "3446c9e292eaad5d2561fd3e462f356f"
  },
  {
    "url": "_saber/images/20181225013-1ffeb2b6.png",
    "revision": "70a83975fbb2a0d99423de8a8d8493d3"
  },
  {
    "url": "_saber/images/20181225013-6c9bbbaf.png",
    "revision": "4aa3f9193d9c98259add80af061992b4"
  },
  {
    "url": "_saber/images/20181225014-86206e04.png",
    "revision": "b15561b882533d03b0e02ee3d428fc70"
  },
  {
    "url": "_saber/images/20181225014-a497d6fb.png",
    "revision": "ef595fd1b9e21a3e7757d4c73b8eedf4"
  },
  {
    "url": "_saber/images/20190114002-030e47fc.jpg",
    "revision": "bd91f47a8e6466ec16a4498aea27ca88"
  },
  {
    "url": "_saber/images/20190114002-2cba0cc8.jpg",
    "revision": "bdb369f1c24db049aaa86c20f35a46c9"
  },
  {
    "url": "_saber/images/20190114002-a3f83c69.jpg",
    "revision": "62c92b237809cc3051fb1accbf48ab00"
  },
  {
    "url": "_saber/images/20190114003-749a4d4b.png",
    "revision": "892e383f770fa868d62e9a8d730d3aef"
  },
  {
    "url": "_saber/images/20190114003-9e4a9a24.png",
    "revision": "36e635e22319445780c3fb3272bfd9af"
  },
  {
    "url": "_saber/images/20190114003-ec3e6339.png",
    "revision": "b52a4c15a4df379e18f311b3d11a141e"
  },
  {
    "url": "_saber/images/20190114004-2f7ff3b4.jpg",
    "revision": "36619cb2cea7661158795296d8e45eb2"
  },
  {
    "url": "_saber/images/20190114004-cbcf59e0.jpg",
    "revision": "7eb4c211e583ad487fa915414172a3af"
  },
  {
    "url": "_saber/images/20190114005-725d770c.jpg",
    "revision": "e7ecb02404136f2f23ed4f7614581e01"
  },
  {
    "url": "_saber/images/20190114005-c8f6da25.jpg",
    "revision": "86f7090755f5b613afbfeb0b7f46b499"
  },
  {
    "url": "_saber/images/20190114005-dc306702.jpg",
    "revision": "df173e04e7e33dbfb34d05da328d4a0a"
  },
  {
    "url": "_saber/images/20190114006-536a49e2.jpg",
    "revision": "ecc25195ec890800dac72e1d15d3c2f3"
  },
  {
    "url": "_saber/images/20190114006-843779bf.jpg",
    "revision": "d7b1f97e754a6b72b7ee16c9b8575344"
  },
  {
    "url": "_saber/images/20190114006-bd37f964.jpg",
    "revision": "1802397a863164c7d054e2affc97d0dd"
  },
  {
    "url": "_saber/images/20190114007-46f7a190.jpg",
    "revision": "c768fc85e018ec1414e7b5e8cd5a050c"
  },
  {
    "url": "_saber/images/20190114007-84f974bb.jpg",
    "revision": "76f1ce8a3a2836aeba260ac4c68c3224"
  },
  {
    "url": "_saber/images/20190114007-dcf9c385.jpg",
    "revision": "aa55ff8e9d0472af868c6b0fcf3f5ae4"
  },
  {
    "url": "_saber/images/20190114008-1b42005d.jpg",
    "revision": "d41b82c0a0fa49d1530317130d496700"
  },
  {
    "url": "_saber/images/20190114008-85d58475.jpg",
    "revision": "5a00b0bf7fa6a7123cb92f6d4d7644ba"
  },
  {
    "url": "_saber/images/20190114008-f4bd5e37.jpg",
    "revision": "e1978b0f94400e1727d5c6152d36b1aa"
  },
  {
    "url": "_saber/images/20190114009-2da9e7fa.jpg",
    "revision": "ef72e3b393b5d99b58b39d6ab47a7aeb"
  },
  {
    "url": "_saber/images/20190114009-c217ca64.jpg",
    "revision": "f18585e4e5f5509da648f1d249246838"
  },
  {
    "url": "_saber/images/20190114009-ca81a98f.jpg",
    "revision": "c4f7f7cc63e745150e245476e468689e"
  },
  {
    "url": "_saber/images/20190114010-3622e881.jpg",
    "revision": "1572f46b041b70a950c74f094e37392b"
  },
  {
    "url": "_saber/images/20190114010-3f7bffdd.jpg",
    "revision": "a7d999db7ddb81e09b0c4dc5bad82968"
  },
  {
    "url": "_saber/images/20190114010-b7502d46.jpg",
    "revision": "7c01ae65954fa6b9e376caff6d7a4c4b"
  },
  {
    "url": "_saber/images/20190114011-46fac13a.jpg",
    "revision": "abad2d6ff11e79f093926f2b77bc686a"
  },
  {
    "url": "_saber/images/20190114011-559c09cb.jpg",
    "revision": "86060c1be1a716847832dc6d79de730d"
  },
  {
    "url": "_saber/images/20190114011-8dd0902b.jpg",
    "revision": "e9eca23f3f3375aa78a5d2cae04a00bb"
  },
  {
    "url": "_saber/images/20190114012-22267407.jpg",
    "revision": "7d39c11937eafdd9fa551e421c37ad3c"
  },
  {
    "url": "_saber/images/20190114012-c0098702.jpg",
    "revision": "2b3c1c58743625681263083fcac21036"
  },
  {
    "url": "_saber/images/20190114012-cee64a7f.jpg",
    "revision": "0a65eb5210dd1a56ff3a2ce928fef260"
  },
  {
    "url": "_saber/images/20190114013-2638d7b2.jpg",
    "revision": "79b6e36938f1debc910bfb2fd3c72a6a"
  },
  {
    "url": "_saber/images/20190114013-36177c33.jpg",
    "revision": "98c7c6ddba3f93c9b1201f348f61bf37"
  },
  {
    "url": "_saber/images/20190114013-68a374be.jpg",
    "revision": "ebc302d1cd68b798d52306aaed42cdb7"
  },
  {
    "url": "_saber/images/20190114014-2eb588a2.jpg",
    "revision": "85087ead8ff28625ef9a83428fb316c7"
  },
  {
    "url": "_saber/images/20190114014-9ebaccf2.jpg",
    "revision": "5e18b02da8d6d765cadbb365b39106a7"
  },
  {
    "url": "_saber/images/20190114014-ac9dd9d4.jpg",
    "revision": "d9f8bb4e74dcbb3bace9d8f487efa17e"
  },
  {
    "url": "_saber/images/20190114015-258e2825.jpg",
    "revision": "44a51c9eb64028fd6b53839d182f315c"
  },
  {
    "url": "_saber/images/20190114015-289d4b46.jpg",
    "revision": "66e091637722a536d036ebcef19b7748"
  },
  {
    "url": "_saber/images/20190114015-aae512c7.jpg",
    "revision": "31ad99bbd39ee8213eec67357583af71"
  },
  {
    "url": "_saber/images/20190218001-a1cb96d9.png",
    "revision": "343561623620be7aca2ffbde4519bd29"
  },
  {
    "url": "_saber/images/20190218001-ab0e8f7f.png",
    "revision": "db73386629e3a68ae8546f61d99ee1f4"
  },
  {
    "url": "_saber/images/20190218002-42bc9868.png",
    "revision": "26947c523755e8af978d0df4821d8fc9"
  },
  {
    "url": "_saber/images/20190218002-b628edb8.png",
    "revision": "3df83546a5d7bc64b81a7eb5214635df"
  },
  {
    "url": "_saber/images/20190218003-54e7e0d1.png",
    "revision": "70a124e7509a53f295fe9672e8247d88"
  },
  {
    "url": "_saber/images/20190218003-d6f8db60.png",
    "revision": "d5004074be1bb35da7fd6fe1950e297d"
  },
  {
    "url": "_saber/images/20190218003-e6faaac0.png",
    "revision": "ee9b125d26e8ab26890eb2e6cdc839b1"
  },
  {
    "url": "_saber/images/20190218004-cef2e778.png",
    "revision": "4e3748211d00c4a8f34a54d737d8821b"
  },
  {
    "url": "_saber/images/20190218005-1e37048c.png",
    "revision": "61d4f503159a8082a0813fbef594a013"
  },
  {
    "url": "_saber/images/20190218005-38556db6.png",
    "revision": "6210f2aefcbd5fd6a2e6aff381c10f9d"
  },
  {
    "url": "_saber/images/20190421002-b312ade5.png",
    "revision": "3d7cbda35d132a3043214ef544a5f4ea"
  },
  {
    "url": "_saber/images/20190421003-5936a8f7.png",
    "revision": "1f47f34b15948c9323eae76a2c03b93c"
  },
  {
    "url": "_saber/images/20190421004-7f56fde3.png",
    "revision": "af60ec1e371bd9c263ff4dc178670919"
  },
  {
    "url": "_saber/images/20190421004-b630671a.png",
    "revision": "b65ad143f8da1e14b06bfffecad9553d"
  },
  {
    "url": "_saber/images/20190421004-b7c40fcc.png",
    "revision": "849714d81df92d189cdff6bd8136304f"
  },
  {
    "url": "_saber/images/20190421005-1ebd0939.jpg",
    "revision": "077778d56ed5d29037adbe904be353f4"
  },
  {
    "url": "_saber/images/20190421005-22125903.jpg",
    "revision": "663126ec90395d64565c40a8651a0cb2"
  },
  {
    "url": "_saber/images/20190421005-263902f3.png",
    "revision": "ee9e99fb4334ad22237fd3d273df8d68"
  },
  {
    "url": "_saber/images/20190421005-70ba5ba1.png",
    "revision": "ebc658d760306234aa5d9474c3664259"
  },
  {
    "url": "_saber/images/20190421005-bdb7ce5d.png",
    "revision": "57c83c1d5af6793d5bcfafed4ced1240"
  },
  {
    "url": "_saber/images/20190421005-cdaa48e3.jpg",
    "revision": "67a0f74f37539e7a84ef79823d119c9e"
  },
  {
    "url": "_saber/images/20190421006-4a597b1b.jpg",
    "revision": "4b2a08c83533d0633be3d236702d6d33"
  },
  {
    "url": "_saber/images/20190421006-a2faffc1.jpg",
    "revision": "568aab43b73c82a99b87de2bc679f093"
  },
  {
    "url": "_saber/images/20190421006-e0d63a6f.jpg",
    "revision": "732e89f7a000956f7f7ea51884dfdf46"
  },
  {
    "url": "_saber/images/20190421007-595ba814.png",
    "revision": "c7eb31ba42783931333f8e653e76c10f"
  },
  {
    "url": "_saber/images/20190421007-943334bd.png",
    "revision": "e107549d5ef2eb96ffd98712c7ace4f4"
  },
  {
    "url": "_saber/images/20190421008-0f0d2244.png",
    "revision": "b4ec49c7a04fd607abe15697b203baed"
  },
  {
    "url": "_saber/images/20190421008-b7689a7d.png",
    "revision": "2c99bf096db0428a028b388a37fc5b95"
  },
  {
    "url": "_saber/images/20190501001-118ebcfd.png",
    "revision": "7af6a23a0f9c10a4f79dd59aa480816f"
  },
  {
    "url": "_saber/images/20190501001-c37bca96.png",
    "revision": "e4301e61a71bd6a9cec02d55b96fd1b3"
  },
  {
    "url": "_saber/images/20190501001-d8433318.png",
    "revision": "1e9475ae2567f51143dd1de9003b267f"
  },
  {
    "url": "_saber/images/20190501002-c7ee694a.png",
    "revision": "10faa129300bdc98d350e1acbd1ec2f8"
  },
  {
    "url": "_saber/images/20190501002-e08c8906.png",
    "revision": "e9cdca46beec559ad9cc1e0bc66ac6b6"
  },
  {
    "url": "_saber/images/20190501002-f7a44d95.png",
    "revision": "b7cef32e6e131c48f4d714cc1ed9a6bd"
  },
  {
    "url": "_saber/images/20190501003.dfd7677c.gif",
    "revision": "dfd7677c7910cdcb8124764efc3f56ac"
  },
  {
    "url": "_saber/images/20190501004-348b0809.png",
    "revision": "98fe35efeb2fc685b50d604960b2f858"
  },
  {
    "url": "_saber/images/20190501004-7c83c5d2.png",
    "revision": "8ea560ec4e6f0700dbf34a802d69eb8d"
  },
  {
    "url": "_saber/images/20190501004-99d9f23e.png",
    "revision": "5d038059ab99da36e0c532ef086183df"
  },
  {
    "url": "_saber/images/20190501005-66a525df.png",
    "revision": "140fd14bd9ca42b62f60f450e72b12d5"
  },
  {
    "url": "_saber/images/20190501005-7647205f.png",
    "revision": "90db5f6bb53f9c0222026f85738a5db1"
  },
  {
    "url": "_saber/images/20190501005-d755f1c5.png",
    "revision": "ec471e5b1656d3545ca9bf8af61e513e"
  },
  {
    "url": "_saber/images/20190501006-5711739d.png",
    "revision": "f49b230afdafdf9956fa1b2328365a2c"
  },
  {
    "url": "_saber/images/20190501006-f1b2ecad.png",
    "revision": "7b79d7e07c505eb36815b07f51aef5e7"
  },
  {
    "url": "_saber/images/20190519001-2c7a424b.png",
    "revision": "6734a12dd71cff4e42771f7d8c310964"
  },
  {
    "url": "_saber/images/20190519001-8fa4c284.png",
    "revision": "97019036c7060aafe91f9341a5d5075a"
  },
  {
    "url": "_saber/images/20190519002-beaf5ba7.png",
    "revision": "4978286d4bb54c462f8e4fb062a3f75c"
  },
  {
    "url": "_saber/images/20190519002-ef38240f.png",
    "revision": "ce939f8b047456e83df0ace828058f94"
  },
  {
    "url": "_saber/images/20190519002-f34dc3fc.png",
    "revision": "1a7a8131a39305744f09b4c9571a02c6"
  },
  {
    "url": "_saber/images/20190519003-8a3268ac.png",
    "revision": "a38761e60dc572f8283d7e2169b8eba6"
  },
  {
    "url": "_saber/images/20190519003-ba4f4f3e.png",
    "revision": "ca4c984e0c1e88db2aeef96d3b4eff13"
  },
  {
    "url": "_saber/images/20190519003-bcac2c47.png",
    "revision": "1810c8426d2c98d694c04ea6830a83b0"
  },
  {
    "url": "_saber/images/20190519005-40a3def7.png",
    "revision": "c33fa17617530aa474dccb0c1bb237e5"
  },
  {
    "url": "_saber/images/20190519005-51f80908.png",
    "revision": "1c269829d82ecffe1cb9de5a04479b61"
  },
  {
    "url": "_saber/images/20190519005-b7e3b8a4.png",
    "revision": "7f158036ba5470cf5711bbc35363028d"
  },
  {
    "url": "_saber/images/20190519006-1bc1a872.png",
    "revision": "64049e29bb6689632e22759104b1571c"
  },
  {
    "url": "_saber/images/20190519006-6d8e9f48.png",
    "revision": "d7a9d4496bc8f57e6a0e0086cfa1906d"
  },
  {
    "url": "_saber/images/20190519006-809d70b8.png",
    "revision": "1c458e52c2f0f0d88ff8c4f5c64668af"
  },
  {
    "url": "_saber/images/20190519007-3a75bf30.png",
    "revision": "e414dd083ceb499b7eef27d264f878d4"
  },
  {
    "url": "_saber/images/20190519007-3c039841.png",
    "revision": "443e8d8ed94e9c2d10845f1b761198c6"
  },
  {
    "url": "_saber/images/20190519007-f648ab50.png",
    "revision": "a9f680a167289f3a3873c4d95352b38e"
  },
  {
    "url": "_saber/images/20190519008-12ed123e.png",
    "revision": "d636ad08c6209a0525b2a37fda212a64"
  },
  {
    "url": "_saber/images/20190519008-372b3216.png",
    "revision": "6da56e40f3df8264049d8b2a2d4a992d"
  },
  {
    "url": "_saber/images/20190519008-927528c5.png",
    "revision": "641e74266cd6e250c087fea9baeb679a"
  },
  {
    "url": "_saber/images/20190519009-20a4469c.png",
    "revision": "43653af84dfaef7f498eeafff18b550f"
  },
  {
    "url": "_saber/images/20190519009-5aaaaf2b.png",
    "revision": "b30e1167d52b548eb007b993213f5f08"
  },
  {
    "url": "_saber/images/20190519009-ad0d8c59.png",
    "revision": "188b8530d4ac96c6b52148a7a6d6a16a"
  },
  {
    "url": "_saber/images/20190519010-2355ac8a.png",
    "revision": "f33dccf88ebeb3aa3cab6c10a6184dd8"
  },
  {
    "url": "_saber/images/20190519010-373c1a1f.png",
    "revision": "d14031745481deaebb80219587facaca"
  },
  {
    "url": "_saber/images/20190519010-d7384bc1.png",
    "revision": "cdae01cdb0fdafac1e51cab39e5ceaf1"
  },
  {
    "url": "_saber/images/20190705001-0406970f.jpg",
    "revision": "40d9f209cdf8988ad964bf3468b9c2c5"
  },
  {
    "url": "_saber/images/20190705001-8e19fece.jpg",
    "revision": "7ebc20138d7b7095b8593ea6e52dd6a5"
  },
  {
    "url": "_saber/images/20190705001-f1d1580b.jpg",
    "revision": "2d33fbd987f24c0dc7d267b9327c01a0"
  },
  {
    "url": "_saber/images/20190705002-195f3068.jpg",
    "revision": "9db292ee71388c43d99bfeeef90bc7e7"
  },
  {
    "url": "_saber/images/20190705002-c0226119.jpg",
    "revision": "3ad6e9c289c1f5a1b869c288e76138db"
  },
  {
    "url": "_saber/images/20190705002-f189168c.jpg",
    "revision": "75f96cd2ca0bc0be570a914cb71c3267"
  },
  {
    "url": "_saber/images/20190705003-18b8b52e.jpg",
    "revision": "298f840ca18e7ccf54fed5ada5b65249"
  },
  {
    "url": "_saber/images/20190705003-9c9ec61f.jpg",
    "revision": "5ff549397cd645d027304064e540be3f"
  },
  {
    "url": "_saber/images/20190705004-30e4f069.jpg",
    "revision": "a93a0d19a6b59c5ddc203a51d530f914"
  },
  {
    "url": "_saber/images/20190705004-abc762d8.jpg",
    "revision": "4a2549cdd2503e81ac838ae8170d746c"
  },
  {
    "url": "_saber/images/20190705004-e3a823c9.jpg",
    "revision": "c4e0d285bcfb2eecc6226ff504eb2e21"
  },
  {
    "url": "_saber/images/20190705005-2df68f58.jpg",
    "revision": "84ab1104f3e3897d4be1a60f17741099"
  },
  {
    "url": "_saber/images/20190705005-35d9c9aa.jpg",
    "revision": "9721f4dd3f9c22b69e7b763286d753a2"
  },
  {
    "url": "_saber/images/20190705006-5075af93.jpg",
    "revision": "35821cb7cf13d0d5a38d113bdd8e0b68"
  },
  {
    "url": "_saber/images/20190705006-941e8060.jpg",
    "revision": "70e681d5b96edad493972b659664d60a"
  },
  {
    "url": "_saber/images/20190705006-ec8a1f38.jpg",
    "revision": "157548cabe690e88cb179b515ffaab99"
  },
  {
    "url": "_saber/images/20190705007-612940fa.jpg",
    "revision": "ccd80a055773f95ba16a0cb80134c3f8"
  },
  {
    "url": "_saber/images/20190705007-8a70f483.jpg",
    "revision": "1b59b377e50d4d814c1eda36116248c2"
  },
  {
    "url": "_saber/images/20190705007-dccc8709.jpg",
    "revision": "44b45fd46341b0dbd6ff29cacee174eb"
  },
  {
    "url": "_saber/images/20190705008-06514f3a.jpg",
    "revision": "febded0d2f6a31d657718b8951f9ea80"
  },
  {
    "url": "_saber/images/20190705008-667a9f09.jpg",
    "revision": "a6c50a12b6c11043cd5a748ba799007d"
  },
  {
    "url": "_saber/images/20190705008-e72c7ba2.jpg",
    "revision": "37b0b8af38c53938e9bc900608e258d2"
  },
  {
    "url": "_saber/images/20190705009-03f59ea9.jpg",
    "revision": "d1b15821ed53f159e1a6d562e59e8269"
  },
  {
    "url": "_saber/images/20190705009-593a4e3e.jpg",
    "revision": "b6dd845aa212d390d6b187a3bd32f5ef"
  },
  {
    "url": "_saber/images/20190705009-7822af3f.jpg",
    "revision": "af8dd98b23e01fe3899d55616899b07e"
  },
  {
    "url": "_saber/images/20190705010-61b38086.jpg",
    "revision": "f81c10dbaaec197fc501b4eebe1eefbc"
  },
  {
    "url": "_saber/images/20190705010-90980c87.jpg",
    "revision": "c476a9c47af30ed7e62a19d087276609"
  },
  {
    "url": "_saber/images/20190705010-b8c32395.jpg",
    "revision": "efcf8c79e1a045b9c33efa2eb3655c69"
  },
  {
    "url": "_saber/images/20190705011-3b94576c.jpg",
    "revision": "ffa3d8067cd56c89a447435b7ae1e22d"
  },
  {
    "url": "_saber/images/20190705011-d6e98ece.jpg",
    "revision": "8b8f5e5729a63dbc6a103050c13f52bf"
  },
  {
    "url": "_saber/images/20190705011-f599638a.jpg",
    "revision": "6af60e0445099d187676c1e764823215"
  },
  {
    "url": "_saber/images/20190705012-5df81f15.jpg",
    "revision": "3d059f82fbf9012b8236e1b15f66253b"
  },
  {
    "url": "_saber/images/20190705012-bda3807a.jpg",
    "revision": "f80fef213d471fc61cdd58b941d7a40d"
  },
  {
    "url": "_saber/images/20190705012-d7493e11.jpg",
    "revision": "7198927ccf98ee4fe657f6289e0dc105"
  },
  {
    "url": "_saber/images/20190705013-4ce46a7b.jpg",
    "revision": "1bcf97c186c9fbceb7d0de4dff58bf18"
  },
  {
    "url": "_saber/images/20190705013-64e9024b.jpg",
    "revision": "e516496a5172f7e88f77be67e26c9b4e"
  },
  {
    "url": "_saber/images/20190705013-e6fa6e47.jpg",
    "revision": "2e76c38bcb66d3c0be953666db73a695"
  },
  {
    "url": "_saber/images/20190705014-32ece5be.jpg",
    "revision": "09f518a7120469ecfe356549d8b6a833"
  },
  {
    "url": "_saber/images/20190705014-373cb779.jpg",
    "revision": "085be2b49b7aa0792d50538510ef6ece"
  },
  {
    "url": "_saber/images/20190705014-6726d089.jpg",
    "revision": "27730f3decae8968dd812c4d78b81c31"
  },
  {
    "url": "_saber/images/20190705015-9fdb8cf8.jpg",
    "revision": "b4cc547fcdb06c1d86484acec7187d99"
  },
  {
    "url": "_saber/images/20190705015-c62a6b64.jpg",
    "revision": "50088a7155a027b8ae2ce8b376113621"
  },
  {
    "url": "_saber/images/20190705015-d7728524.jpg",
    "revision": "7e05effc6db6653039c322afd289ed21"
  },
  {
    "url": "_saber/images/20190705016-c5cf4489.jpg",
    "revision": "4d3611d05f14b66206134c44ee0be08e"
  },
  {
    "url": "_saber/images/20190705016-d788ca99.jpg",
    "revision": "f8604fa5f1ef4f41b314a8869405b16f"
  },
  {
    "url": "_saber/images/20190705016-e032899a.jpg",
    "revision": "7096a4236d8e47fe235d8c947fb5757f"
  },
  {
    "url": "_saber/images/20190705017-3b3c8edd.jpg",
    "revision": "a72a28b772cc038ad4c44de782cbe571"
  },
  {
    "url": "_saber/images/20190705017-f14730fc.jpg",
    "revision": "0d10b1110bb7cdadc89f0130fcbc0604"
  },
  {
    "url": "_saber/images/20190705017-f3e4c42d.jpg",
    "revision": "7869e348eb1ac503c60e26e13696036d"
  },
  {
    "url": "_saber/images/20190705018-7946f839.jpg",
    "revision": "fa3d2f9ac76422e0d85749be86f0b062"
  },
  {
    "url": "_saber/images/20190705018-9f533639.jpg",
    "revision": "d4241419f121157078535ee39266765d"
  },
  {
    "url": "_saber/images/20190705018-a6ba45d5.jpg",
    "revision": "5aca10a84ba7d78d41422a345fb34b18"
  },
  {
    "url": "_saber/images/20190705019-670d9621.jpg",
    "revision": "9a6d15635768fddfebd885ae1c1e5b46"
  },
  {
    "url": "_saber/images/20190705019-780cc39b.jpg",
    "revision": "a6ee991198b79ed6035631b013a078f8"
  },
  {
    "url": "_saber/images/20190705019-edc6a1a3.jpg",
    "revision": "8ad74db87a7f21b60e9fa158f05b613a"
  },
  {
    "url": "_saber/images/20190705020-5cc09791.jpg",
    "revision": "15559e5cd421e78b8578b8bd1d7a2829"
  },
  {
    "url": "_saber/images/20190705020-da9d20d7.jpg",
    "revision": "9c1d5bf4882f2549c6a26939f8260eb7"
  },
  {
    "url": "_saber/images/20190705020-dcd25f64.jpg",
    "revision": "7759d4c53bdf50f4aa783054589e0c34"
  },
  {
    "url": "_saber/images/20190705021-30d5cb5b.jpg",
    "revision": "5747c7db3b2b33c4daf2308f8eeef369"
  },
  {
    "url": "_saber/images/20190705021-6f4b55ea.jpg",
    "revision": "a0a8ef9f8561c98d55a92f858ac683e7"
  },
  {
    "url": "_saber/images/20190705021-c0c3caab.jpg",
    "revision": "63a394108eabecf35306518d9bc52439"
  },
  {
    "url": "_saber/images/20190705022-46389839.jpg",
    "revision": "99c9c1469c2458233c5caa60494a5062"
  },
  {
    "url": "_saber/images/20190705022-9abb4f51.jpg",
    "revision": "dabe000d522c6f69bb68f7f1dba61fc3"
  },
  {
    "url": "_saber/images/20190705022-de313dd2.jpg",
    "revision": "d7b8d90bb971a1bdee9dc9f715d5730e"
  },
  {
    "url": "_saber/images/20190705023-6074befc.jpg",
    "revision": "679fc620e3a42075dc42a84d498d899f"
  },
  {
    "url": "_saber/images/20190705023-7c56d80d.jpg",
    "revision": "7149f7d110a8a87d120ced8a3f53fa10"
  },
  {
    "url": "_saber/images/20190705023-bea4524c.jpg",
    "revision": "0a08a4e04c90c8c8fe0e201a6021ef60"
  },
  {
    "url": "_saber/images/20190705024-776438e2.jpg",
    "revision": "d2a11fedb8b79f3bdc42d8cc719fa3d0"
  },
  {
    "url": "_saber/images/20190705024-9c2167a2.jpg",
    "revision": "b3b4d8774dddfbc8bd9de669923773fc"
  },
  {
    "url": "_saber/images/20190705024-a14170c9.jpg",
    "revision": "8c2d2dec757984004ccc6f8d74c79487"
  },
  {
    "url": "_saber/images/20190705025-2dd50cf5.jpg",
    "revision": "82adb31959d014481307e2eb7e9946e1"
  },
  {
    "url": "_saber/images/20190705025-8739d2e7.jpg",
    "revision": "658dc725320ba7de9764371afa5dd21b"
  },
  {
    "url": "_saber/images/20190705025-fa2a5d40.jpg",
    "revision": "5cbee520018671cff614dfca76e8ee17"
  },
  {
    "url": "_saber/images/20190705026-080e6d9f.jpg",
    "revision": "fe2338b12c24db89d3aeae1ff6a9bf19"
  },
  {
    "url": "_saber/images/20190705026-16239d94.jpg",
    "revision": "707bfac5aa84367155d1e3c4f92df269"
  },
  {
    "url": "_saber/images/20190705026-c0a0270f.jpg",
    "revision": "526e8881856780492297b5515a8eee1b"
  },
  {
    "url": "_saber/images/20190705027-5f1df741.jpg",
    "revision": "74d16c65ed455d95c911ff87a1f1d45f"
  },
  {
    "url": "_saber/images/20190705027-ac1116a9.jpg",
    "revision": "6845c261dcd568412260c0f1ca74e151"
  },
  {
    "url": "_saber/images/20190705027-e3a13581.jpg",
    "revision": "736c72a461f9b5edfab07990f3826bb8"
  },
  {
    "url": "_saber/images/20190705028-8a8dc963.jpg",
    "revision": "c295b8986a724a7647cacbfc457c59f8"
  },
  {
    "url": "_saber/images/20190705028-97fb60c1.jpg",
    "revision": "7d79b648dac72d03d695870ae5b262df"
  },
  {
    "url": "_saber/images/20190705028-f0c16fb1.jpg",
    "revision": "d85ec9c5e41ac0dee74968abe7ed718e"
  },
  {
    "url": "_saber/images/20190705029-51c003ae.jpg",
    "revision": "1bf1cb48e7a6b3371c9accc0ab6d68e9"
  },
  {
    "url": "_saber/images/20190705029-59e58ee0.jpg",
    "revision": "c152e76e8c35177588ee852c9217e919"
  },
  {
    "url": "_saber/images/20190705029-635a9d36.jpg",
    "revision": "6f6655615e861392cefcd9ba701c82f1"
  },
  {
    "url": "_saber/images/20190705030-15f8d5d2.jpg",
    "revision": "5b09a0578b98459e84438a9a8336feca"
  },
  {
    "url": "_saber/images/20190705030-4272cdc1.jpg",
    "revision": "4da1edd5454494f455b90857beea87c5"
  },
  {
    "url": "_saber/images/20190705030-b43c4193.jpg",
    "revision": "3e5f6edc23e80c29ee83024e96fe893b"
  },
  {
    "url": "_saber/images/20190705031-6d2cdfef.jpg",
    "revision": "19389fe6fdc5a741856a757c4948bef1"
  },
  {
    "url": "_saber/images/20190705031-93c1e2d0.jpg",
    "revision": "6ca7860e3985db0f39a28960d395a9b0"
  },
  {
    "url": "_saber/images/20190705031-c2aaf570.jpg",
    "revision": "c209d613939758e31296bcc7ea35f266"
  },
  {
    "url": "_saber/images/20190705032-5f3a8e57.jpg",
    "revision": "b11f9ead52e43ccd57603f463d7011bc"
  },
  {
    "url": "_saber/images/20190705032-94e324ea.jpg",
    "revision": "108f785e974cdd8381ecf2efea6acbb5"
  },
  {
    "url": "_saber/images/20190705032-c0634430.jpg",
    "revision": "98f36830bca2ce6466986414fd6a0138"
  },
  {
    "url": "_saber/images/20190705033-2cab964f.jpg",
    "revision": "8d997c8c5c0a16e62c406cd4e1fa6115"
  },
  {
    "url": "_saber/images/20190705033-4295dab0.jpg",
    "revision": "5f99b38054ba2ddd0a3922d94ca1b25a"
  },
  {
    "url": "_saber/images/20190705033-e0aa8e15.jpg",
    "revision": "049d160cfbd0d519abc72a35b825881a"
  },
  {
    "url": "_saber/images/20190705034-153810a2.jpg",
    "revision": "b7089062fcf6efa17cb31e72970814ce"
  },
  {
    "url": "_saber/images/20190705034-72e3f7de.jpg",
    "revision": "98ce0fba1f5243b6462d68cb0966f7f4"
  },
  {
    "url": "_saber/images/20190705034-a712dd07.jpg",
    "revision": "11d6facc4a535927dfdba3f592091e44"
  },
  {
    "url": "_saber/images/20190705035-879f6dd4.jpg",
    "revision": "b82b8d55031daf46811aa6bf4af065b3"
  },
  {
    "url": "_saber/images/20190705035-d26b6a94.jpg",
    "revision": "c07d4fb0d019f56137bf3b5cf4d43fc2"
  },
  {
    "url": "_saber/images/20190705035-d611c5de.jpg",
    "revision": "7fbe0ff609bdd7cfe18e7c0e4ac11e48"
  },
  {
    "url": "_saber/images/20190705036-02754139.jpg",
    "revision": "d69f64552602064e0522905eee29a4f7"
  },
  {
    "url": "_saber/images/20190705036-58a150f9.jpg",
    "revision": "5501ad80d1fd1b9612a763459644f84a"
  },
  {
    "url": "_saber/images/20190705036-c9b7866e.jpg",
    "revision": "6f7205978440c9c22e803a21a58c6c8b"
  },
  {
    "url": "_saber/images/20190705037-52398f35.jpg",
    "revision": "c353ef0d11bb16bfe202f2a090c64e2d"
  },
  {
    "url": "_saber/images/20190705037-d9b381a7.jpg",
    "revision": "6f755823c8aaeda765e25871c43ea973"
  },
  {
    "url": "_saber/images/20190705037-f1e48900.jpg",
    "revision": "1d30938071fd88d825a3fee37b081774"
  },
  {
    "url": "_saber/images/20190705038-5eaee7a9.jpg",
    "revision": "7226c19f4d9e5b22f0b1f25a2b3b86fe"
  },
  {
    "url": "_saber/images/20190705038-73b0c8b3.jpg",
    "revision": "06fc9335f60d33128353aac0845516ff"
  },
  {
    "url": "_saber/images/20190705038-f8ce23ac.jpg",
    "revision": "00bf4ea4d889416c5e4105627650533a"
  },
  {
    "url": "_saber/images/20190705039-991cbfb9.jpg",
    "revision": "1b8a831b6633784d2cf950ab357025b6"
  },
  {
    "url": "_saber/images/20190705039-e00ec539.jpg",
    "revision": "cf5242f705082e2f157e36bf072481e3"
  },
  {
    "url": "_saber/images/20190705039-eaeef952.jpg",
    "revision": "dbdd69c0d6ad63cf3696b894652ba7e6"
  },
  {
    "url": "_saber/images/20190705040-6879ba27.jpg",
    "revision": "29aa29ae7c27bf54d93bb4f3af13886d"
  },
  {
    "url": "_saber/images/20190705040-99a88af9.jpg",
    "revision": "350399a9fe3920bc2b54092098c3cf7a"
  },
  {
    "url": "_saber/images/20190705040-b30aaeb8.jpg",
    "revision": "df8e89e3ba35164c8bf7534427e25f8e"
  },
  {
    "url": "_saber/images/20190705041-1e856bcb.jpg",
    "revision": "f0f8d9c56bb352aa757fde81598be8e6"
  },
  {
    "url": "_saber/images/20190705041-4a3ffdee.jpg",
    "revision": "6e325690cec20b85413c2ebc0c3341bc"
  },
  {
    "url": "_saber/images/20190705041-8c9425a7.jpg",
    "revision": "d7a5c4774fc658b8c798d22ce2b6de84"
  },
  {
    "url": "_saber/images/20190705042-45e41bb1.jpg",
    "revision": "e8f3b3482fd7457004ca14e88143f9be"
  },
  {
    "url": "_saber/images/20190705042-82cfa67a.jpg",
    "revision": "9c065d1fbf6898e4d576dc36d77338c4"
  },
  {
    "url": "_saber/images/20190705042-cdbc9a12.jpg",
    "revision": "e67813757aea36e1be450800d536c9c0"
  },
  {
    "url": "_saber/images/20190705043-14bd6999.jpg",
    "revision": "c5a3a2a88588ef316e2023f1a039a8bf"
  },
  {
    "url": "_saber/images/20190705043-2a0478ff.jpg",
    "revision": "ac4f17663179a5233c906c8fdca884fa"
  },
  {
    "url": "_saber/images/20190705043-c4edf959.jpg",
    "revision": "a77440e66bcf996aed4725e8e3645551"
  },
  {
    "url": "_saber/images/20190705044-39250ede.jpg",
    "revision": "e3efe93439c622993f32ac1ccdfb8271"
  },
  {
    "url": "_saber/images/20190705044-64923b11.jpg",
    "revision": "99031a357d5e93a17cf9c45a8842075b"
  },
  {
    "url": "_saber/images/20190705044-e88f7f96.jpg",
    "revision": "4b20c9e08e5aa41cd7127aec9d42076d"
  },
  {
    "url": "_saber/images/20190705045-539e3d54.jpg",
    "revision": "0ed43167da1588a8c52f1c9a0f0aba79"
  },
  {
    "url": "_saber/images/20190705045-d98a6bed.jpg",
    "revision": "35ca43a335b143e0b4a8d938fd6b2162"
  },
  {
    "url": "_saber/images/20190705045-df7f40c5.jpg",
    "revision": "b6847ce83df0967f7b13009a7f3df948"
  },
  {
    "url": "_saber/images/20190705046-40210e9d.jpg",
    "revision": "382348a5fa80cfbdcabcb4a27bb6be95"
  },
  {
    "url": "_saber/images/20190705046-6403f120.jpg",
    "revision": "984d6a8bb2270d50826e11cdc4cd1230"
  },
  {
    "url": "_saber/images/20190705046-c155a909.jpg",
    "revision": "aaf24a80e921df685e1ef56e0aec790b"
  },
  {
    "url": "_saber/images/20190705047-21f32f0e.jpg",
    "revision": "88e50080b97c9704a0bea23f8b53b40e"
  },
  {
    "url": "_saber/images/20190705047-8dee3b82.jpg",
    "revision": "41ce69f32ac108626378d6a0c80d75d2"
  },
  {
    "url": "_saber/images/20190705047-cc2d2580.jpg",
    "revision": "1f13f5a4c75e003bd79745b4a450d2a8"
  },
  {
    "url": "_saber/images/20190705048-0f549ae1.jpg",
    "revision": "5bbea52b52bf68d1d9b74509bd0b5171"
  },
  {
    "url": "_saber/images/20190705048-24931916.jpg",
    "revision": "fe66101aa931180b08f3cfd35af25af2"
  },
  {
    "url": "_saber/images/20190705048-8dbcf8c8.jpg",
    "revision": "635030e21fb460b8f0b6dc14b9e90855"
  },
  {
    "url": "_saber/images/20190705049-34192023.jpg",
    "revision": "d118f1895ad439a696bb2c313130b655"
  },
  {
    "url": "_saber/images/20190705049-8c75ba3b.jpg",
    "revision": "67cc92e4962165872d669cab5066b069"
  },
  {
    "url": "_saber/images/20190705049-bf2c43f9.jpg",
    "revision": "8afebed002358286f23072fadd2f1bb5"
  },
  {
    "url": "_saber/images/20190705050-4694e8e6.jpg",
    "revision": "9944e801de42496b5d6b3d59ce4ca72e"
  },
  {
    "url": "_saber/images/20190705050-c1ab7520.jpg",
    "revision": "56d2b1461b7eaf866640e2c8c781f5d1"
  },
  {
    "url": "_saber/images/20190705050-f2dbfe6c.jpg",
    "revision": "77b38cb0ac841723743f04d7a687e5f0"
  },
  {
    "url": "_saber/images/20190705051-0dc26082.jpg",
    "revision": "6eb9a75f8a1f936130178cef84cb8b33"
  },
  {
    "url": "_saber/images/20190705051-2af4293a.jpg",
    "revision": "9a2d589a8a50bb410b3797b9ec50377b"
  },
  {
    "url": "_saber/images/20190705051-b134c8d9.jpg",
    "revision": "95ee2e13f2c3bce8e9ab7409c65923b5"
  },
  {
    "url": "_saber/images/20190705052-1b21a597.jpg",
    "revision": "ab7c5d3d998011cd7e6493769fd94e54"
  },
  {
    "url": "_saber/images/20190705052-8a931d71.jpg",
    "revision": "b142a479a4745428f78d8ae101a907ff"
  },
  {
    "url": "_saber/images/20190705052-e7ecd86a.jpg",
    "revision": "0b8b0574cf4e624d87c88099fc44a09a"
  },
  {
    "url": "_saber/images/20190705053-2bf4b066.jpg",
    "revision": "3c7cbf6cda067e31f9eab4fd25102856"
  },
  {
    "url": "_saber/images/20190705053-3204daac.jpg",
    "revision": "a599757cf1fc54ed81f3da44f545976a"
  },
  {
    "url": "_saber/images/20190705053-c9e632ef.jpg",
    "revision": "685261aef1823b22b2d44c8ee056f555"
  },
  {
    "url": "_saber/images/20190705054-668585e8.jpg",
    "revision": "975a57dabd14372fe9f0ec3d8c50d1cd"
  },
  {
    "url": "_saber/images/20190705054-d669f3d4.jpg",
    "revision": "697508bc892382bf2a3314e14b378ed2"
  },
  {
    "url": "_saber/images/20190705054-f91d046e.jpg",
    "revision": "6edb663f11a5ac726dbbb56fec97cdc2"
  },
  {
    "url": "_saber/images/20190705055-a85d3cdb.jpg",
    "revision": "9ba98275d22258a6cf1aa73922f1e55d"
  },
  {
    "url": "_saber/images/20190705055-b9d6bad3.jpg",
    "revision": "74ec34c7480f3c4c577fc98696fd2bcb"
  },
  {
    "url": "_saber/images/20190705055-e071019a.jpg",
    "revision": "3a115a4949ce82eef146f4dd142b7077"
  },
  {
    "url": "_saber/images/20190705056-3126e78a.jpg",
    "revision": "8b8c36ef898390c7cfb6936a133ba7fc"
  },
  {
    "url": "_saber/images/20190705056-bbdfb119.jpg",
    "revision": "31eecbd18ae3ee726caeaccfe3ada9dc"
  },
  {
    "url": "_saber/images/20190705056-e3a2adee.jpg",
    "revision": "487f69e0a85b649260556405a2ab6cc8"
  },
  {
    "url": "_saber/images/20190705057-af321ff9.jpg",
    "revision": "08ea8d3037e299532779278551d5903e"
  },
  {
    "url": "_saber/images/20190705057-c1b14d04.jpg",
    "revision": "2ca59a2f40f0abd7e56fa57e6ae721b0"
  },
  {
    "url": "_saber/images/20190705057-c8c09e03.jpg",
    "revision": "0e6456b06feeba397a94eee8097b9502"
  },
  {
    "url": "_saber/images/20190705058-087437ec.jpg",
    "revision": "d13ed05ad497800129dd5892fc0f179a"
  },
  {
    "url": "_saber/images/20190705058-18913c5b.jpg",
    "revision": "7e4aebf9cba29f63606a9a8bc5adb160"
  },
  {
    "url": "_saber/images/20190705058-24b62fdb.jpg",
    "revision": "bcddde29f58e4d28327874b98d93aa80"
  },
  {
    "url": "_saber/images/20190705059-10eee2c0.jpg",
    "revision": "57a07052ef2c981df70f96c3a4884ce1"
  },
  {
    "url": "_saber/images/20190705059-44e67798.jpg",
    "revision": "69d47feb0660f5080f576ce0accbf977"
  },
  {
    "url": "_saber/images/20190705059-f165eea1.jpg",
    "revision": "23dcaaa6daa97ed4252c7dba51686f86"
  },
  {
    "url": "_saber/images/20190705060-85a7fa83.jpg",
    "revision": "a6af43b24e909c1f42e03c306e9ac516"
  },
  {
    "url": "_saber/images/20190705060-aab3581a.jpg",
    "revision": "56cbe4ede019846bd486882cf5dae76f"
  },
  {
    "url": "_saber/images/20190705060-cf1de06a.jpg",
    "revision": "b5cb4fa4fd4fad71cc349e2430d473da"
  },
  {
    "url": "_saber/images/20190705061-46467d61.jpg",
    "revision": "8b74c9cb991cc0eacbcee064b08fe584"
  },
  {
    "url": "_saber/images/20190705061-617dbc85.jpg",
    "revision": "e698a7fb1dd8d32333e6732f1881477a"
  },
  {
    "url": "_saber/images/20190705061-8d44a4fb.jpg",
    "revision": "d94e3e66526386af8dbfac50c3f150ed"
  },
  {
    "url": "_saber/images/20190705062-4f4a580e.jpg",
    "revision": "c7a4f5a8cbaa3e1c650120fc53568d29"
  },
  {
    "url": "_saber/images/20190705062-77fcaf04.jpg",
    "revision": "793b11b84c83528d5b340de40046ff8c"
  },
  {
    "url": "_saber/images/20190705062-78ae5b7f.jpg",
    "revision": "10ddda0f66192ebdc43aaa9245ee174a"
  },
  {
    "url": "_saber/images/20190705063-d4c7ed01.jpg",
    "revision": "9f077d93c45f77017e78753e7c437524"
  },
  {
    "url": "_saber/images/20190705063-d8aab77c.jpg",
    "revision": "d6bf4dddaa10966d2f32829bb95c5d7d"
  },
  {
    "url": "_saber/images/20190705063-e09a0b71.jpg",
    "revision": "d248ba611cba7d6f31f6ccea089191ab"
  },
  {
    "url": "_saber/images/20190705064-0f1956c1.jpg",
    "revision": "a93634945abc8189cea5efc37acee2e0"
  },
  {
    "url": "_saber/images/20190705064-77907ff9.jpg",
    "revision": "45ab76d5d1e1ba453f0ba829b3127417"
  },
  {
    "url": "_saber/images/20190705064-d8d0e40c.jpg",
    "revision": "13177d4ffa02328a8760bdd51a5bd5fe"
  },
  {
    "url": "_saber/images/20190705065-5262a191.jpg",
    "revision": "b389e67354d655c6b9a64b63a6426a11"
  },
  {
    "url": "_saber/images/20190705065-5b51ef7a.jpg",
    "revision": "9abf9cae57aebba26f03064eed1877b0"
  },
  {
    "url": "_saber/images/20190705065-a7642124.jpg",
    "revision": "27850058d781469f06147a85d2368323"
  },
  {
    "url": "_saber/images/20190705066-763d9d44.jpg",
    "revision": "8b4b54d293c45d97c80ecb3029c7738e"
  },
  {
    "url": "_saber/images/20190705066-a60d86a7.jpg",
    "revision": "8b5fe82038576c6f9b2ae068aa52026f"
  },
  {
    "url": "_saber/images/20190705066-bde89db5.jpg",
    "revision": "1faa51c82b73313f7318cb62f3155654"
  },
  {
    "url": "_saber/images/20190705067-402ee7f7.jpg",
    "revision": "5839f61838688cb2b09f1b640d6ceac4"
  },
  {
    "url": "_saber/images/20190705067-b885d850.jpg",
    "revision": "f059e9e645d31b3cd5882fb49d2b9152"
  },
  {
    "url": "_saber/images/20190705067-e0c20dff.jpg",
    "revision": "b17ad6adab78890ac6e00d9ff4750186"
  },
  {
    "url": "_saber/images/20190705068-6dae818c.jpg",
    "revision": "2a3ff33b6cff8409df61f80e23a3ce2e"
  },
  {
    "url": "_saber/images/20190705068-6fa7ce61.jpg",
    "revision": "b3ff59799db7fb0e7cda725356fe461b"
  },
  {
    "url": "_saber/images/20190705068-aeac48bf.jpg",
    "revision": "10b2af2a5fcb74df998883f0bd963d93"
  },
  {
    "url": "_saber/images/20190705069-31188b98.jpg",
    "revision": "0978d09db41a8a047fc35196aadcd1ac"
  },
  {
    "url": "_saber/images/20190705069-9e8e564b.jpg",
    "revision": "1bef36c46dce50800ac290aed6bddfe3"
  },
  {
    "url": "_saber/images/20190705069-e08decab.jpg",
    "revision": "bda1f422fde1e8be5f57e1ea1b3465fb"
  },
  {
    "url": "_saber/images/20190705070-196e7fa3.jpg",
    "revision": "ebb4969e76b861206aca0d2e5f5a75b4"
  },
  {
    "url": "_saber/images/20190705070-6c86308f.jpg",
    "revision": "b3d12211748bee22c5b9be9224a3ddf4"
  },
  {
    "url": "_saber/images/20190705070-e7864f7d.jpg",
    "revision": "c181b08062b590eaddc75c81e64d45c2"
  },
  {
    "url": "_saber/images/20190705071-435c6537.jpg",
    "revision": "412c9690b85691cc72488dffd471e9b0"
  },
  {
    "url": "_saber/images/20190705071-7e7f9a6a.jpg",
    "revision": "44089bb943a8d12b275a4ba817287b88"
  },
  {
    "url": "_saber/images/20190705071-a064c2c7.jpg",
    "revision": "a2b57b582548f5a5ff61c4b26c58bb13"
  },
  {
    "url": "_saber/images/20190705072-247ef65b.jpg",
    "revision": "26eb0363c6bfa024669b5546f1f64818"
  },
  {
    "url": "_saber/images/20190705072-5e881ba4.jpg",
    "revision": "b8e78f6971119bf6c53c7a35e33cab16"
  },
  {
    "url": "_saber/images/20190705072-f4a484c1.jpg",
    "revision": "63ffa172e1ed9e2859591484dbaf724e"
  },
  {
    "url": "_saber/images/20190720001-22254289.jpg",
    "revision": "2190c246b67c7ff17dd42facb8eaa224"
  },
  {
    "url": "_saber/images/20190720001-cb052060.jpg",
    "revision": "f680011b0bef922db1b382d90e025b27"
  },
  {
    "url": "_saber/images/20190720001-e04161a1.jpg",
    "revision": "06ce7070f51620290e0795d7e14b12a9"
  },
  {
    "url": "_saber/images/20190724003-24e73cfc.png",
    "revision": "cabf9a6b48bf004c2f3322a3c3c7530a"
  },
  {
    "url": "_saber/images/20190724003-46f06465.png",
    "revision": "83ba26cef6729160629ed0a8b9fd0113"
  },
  {
    "url": "_saber/images/20190724004-8d4320eb.png",
    "revision": "f640972eb62b3c8d7190d21bffd0f769"
  },
  {
    "url": "_saber/images/20190724004-c42f12f7.png",
    "revision": "36a75b08fb5d4a2ea2b2a8bc1d0a203b"
  },
  {
    "url": "_saber/images/20190724004-f7e35d32.png",
    "revision": "012c2ce97558be398ba10f6c18d27197"
  },
  {
    "url": "_saber/images/20190724005-0a29e070.jpg",
    "revision": "6682b5929c1b7111d3d995cbb860eb4b"
  },
  {
    "url": "_saber/images/20190724005-29af9b14.jpg",
    "revision": "21173b81ca0d9a7e262abd0b437ffa38"
  },
  {
    "url": "_saber/images/20190724005-d6b202bf.jpg",
    "revision": "6447e3ecbbeb7bf5a78cc845a136a82b"
  },
  {
    "url": "_saber/images/20191115002-19b3526e.png",
    "revision": "01ffd60e756eaf61945f618a00d2a7ef"
  },
  {
    "url": "_saber/images/20191115002-3a2f1408.png",
    "revision": "4fbee6d3ede6abbda1fe68ebaecf7572"
  },
  {
    "url": "_saber/images/20191115002-6ad6adba.png",
    "revision": "a750ae9519eb34fcda5fe59e31784e3c"
  },
  {
    "url": "_saber/images/20191115003-a624b1a8.png",
    "revision": "4def7bd995cf3099fda884599b386fb5"
  },
  {
    "url": "_saber/images/20191115003-d65ac9ea.png",
    "revision": "8976653e1fbf4b3b6567500aa0e2d298"
  },
  {
    "url": "_saber/images/20191115003-fdb7b028.png",
    "revision": "9807fcb5c1133e1335af8ab4b38ca52e"
  },
  {
    "url": "_saber/images/20191115004-95ec5d4a.png",
    "revision": "0de0024b0f18797279fbf38045b68a28"
  },
  {
    "url": "_saber/images/20191115004-f64e1a55.png",
    "revision": "4a6b07462409e383e66edb7d62f46c50"
  },
  {
    "url": "_saber/images/20191115004-ff3727c5.png",
    "revision": "60e226ee0ded20cb1c1dcaeefcf44299"
  },
  {
    "url": "_saber/images/20191115005-4cbb2d8d.png",
    "revision": "9d6d50065d717431260c5923a2138f7c"
  },
  {
    "url": "_saber/images/20191115005-aaa45fc3.png",
    "revision": "ca1952e3f9c19cbf71c7a39ab4620875"
  },
  {
    "url": "_saber/images/20191115005-d30c0f3a.png",
    "revision": "f864439d23a2ac1b8dc3353d57556251"
  },
  {
    "url": "_saber/images/20191115006-3f86f8fe.png",
    "revision": "b6498187b61f4a6baef87e2177820d6b"
  },
  {
    "url": "_saber/images/20191115006-86276fd5.png",
    "revision": "f4f9571d95cca9f1518567658c092ecf"
  },
  {
    "url": "_saber/images/20191115006-8fc1bc73.png",
    "revision": "74cf1cb16c2b735fa1d47e69f5202067"
  },
  {
    "url": "_saber/images/20191115007-492d0312.png",
    "revision": "08ab0399cf572a5813f04aab447c4d92"
  },
  {
    "url": "_saber/images/20191115007-959a91e8.png",
    "revision": "5991bf3b000c9c6abe1f1a41c24ff85e"
  },
  {
    "url": "_saber/images/20191115007-cbfb4436.png",
    "revision": "54bc27c62bd2cc8f10bffacbc179ea30"
  },
  {
    "url": "_saber/images/20191115008-670f2bb4.png",
    "revision": "d285d409fb5bcfaec82b0ec2a9abd456"
  },
  {
    "url": "_saber/images/20191115008-bbe6079b.png",
    "revision": "da2c071481d7d4e44d8ad1e340d75330"
  },
  {
    "url": "_saber/images/20191115008-e5b456e5.png",
    "revision": "a51e2af5e3da75ae84085c83df407e7f"
  },
  {
    "url": "_saber/images/20191115009.990e8ef6.gif",
    "revision": "990e8ef63942e9d569ce1bb71ad56782"
  },
  {
    "url": "_saber/images/20191115010-404febaa.png",
    "revision": "d7f1de20d8bba2fbeaa94cb61b0ce193"
  },
  {
    "url": "_saber/images/20191115010-4669f8f0.png",
    "revision": "a422e301b816e151fa3cba4ee02095d0"
  },
  {
    "url": "_saber/images/20191115010-56af4210.png",
    "revision": "34e432abe0b592af04f30cdb5e01a8e5"
  },
  {
    "url": "_saber/images/20191115011-0ac9deb6.png",
    "revision": "d51331e6c1f4f1c308a6b1667e117066"
  },
  {
    "url": "_saber/images/20191115011-52772175.png",
    "revision": "3c3692dbcb5ba9a2b50147e14a7f4bd3"
  },
  {
    "url": "_saber/images/20191115011-afc85d54.png",
    "revision": "0f219c9b5b1f519ef61d117d6a79fe67"
  },
  {
    "url": "_saber/images/20191115012-3d2325b5.png",
    "revision": "c5556fe7edf9f7d201b39dfeef10582d"
  },
  {
    "url": "_saber/images/20191115012-d4e3056a.png",
    "revision": "4bc04d3df2eb37971f30e478dbbcc9dc"
  },
  {
    "url": "_saber/images/20191115012-e50696df.png",
    "revision": "21f870ea239e54a232945cd9c1d58258"
  },
  {
    "url": "_saber/images/20191115013-2e8d5310.png",
    "revision": "7006ac8b577383444884b50ea9cb2227"
  },
  {
    "url": "_saber/images/20191115013-53e4eb2f.png",
    "revision": "685b577f6e97704bb966e68f20f1ab36"
  },
  {
    "url": "_saber/images/20191115013-a64aeb1e.png",
    "revision": "e7010e957d4db77722fd37b93f33cb53"
  },
  {
    "url": "_saber/images/20191115014-5e08f464.png",
    "revision": "a9e561a11c9bbcd0f0c94c34c66acf41"
  },
  {
    "url": "_saber/images/20191115014-7cc56633.png",
    "revision": "ee73a79cd5a9c88c0424122a75172dfe"
  },
  {
    "url": "_saber/images/20191115014-d36dcc41.png",
    "revision": "0a3121cac8a2c5c83a2ff3fee0c4d77c"
  },
  {
    "url": "_saber/images/20191115015-55f4ffbd.png",
    "revision": "66ce607fb81da30f033e31fd6bb24089"
  },
  {
    "url": "_saber/images/20191115015-6b5adf72.png",
    "revision": "7da8c93aec8e321c7677759b0b12f5c8"
  },
  {
    "url": "_saber/images/20191115015-70f5ff7f.png",
    "revision": "ccfd620b863244948cf1baf632afe4e0"
  },
  {
    "url": "_saber/images/20191130001-083ab7c5.jpg",
    "revision": "db555a015b97546cbf85dd0e1f185025"
  },
  {
    "url": "_saber/images/20191130001-5236ea32.jpg",
    "revision": "8e8c40e16f00d7d0541104425b968b8b"
  },
  {
    "url": "_saber/images/20191130002-08889de4.jpg",
    "revision": "d70843dd9e8a9c5d86fe30e91473dee9"
  },
  {
    "url": "_saber/images/20191130002-0dc00868.jpg",
    "revision": "194bd7e2dc3f1ee12ec634255f0f8410"
  },
  {
    "url": "_saber/images/20191130003-5caec60c.jpg",
    "revision": "21f1d3b0d1b29fde915b145e89090a1f"
  },
  {
    "url": "_saber/images/20191130003-6505fa97.jpg",
    "revision": "d88fad833649f962da54aa8a78b25871"
  },
  {
    "url": "_saber/images/20191130004-25768558.jpg",
    "revision": "0c3a4e0e2c647d93e79a6a1d0afd096f"
  },
  {
    "url": "_saber/images/20191130004-3db5cbd1.jpg",
    "revision": "2661fc052355bcdbb6c8bf6e7f774e9b"
  },
  {
    "url": "_saber/images/20191130005-0cc0a000.jpg",
    "revision": "e906e25537cb942ce187316d4383dcc3"
  },
  {
    "url": "_saber/images/20191130005-490235b9.jpg",
    "revision": "f2ff806567c32d89999cc7c8de721c7a"
  },
  {
    "url": "_saber/images/20191130006-0d652d9f.jpg",
    "revision": "2110847403329f4ecc4af5558ec91cbf"
  },
  {
    "url": "_saber/images/20191130006-6e789803.jpg",
    "revision": "4fed1ec009967a7c97b0ff0219274ea0"
  },
  {
    "url": "_saber/images/20191130007-65dd23e0.jpg",
    "revision": "529b2f70f787af430176fb1de7baa17a"
  },
  {
    "url": "_saber/images/20191130007-7736a098.jpg",
    "revision": "b6ebe349f39a86601cd4de031b8412c8"
  },
  {
    "url": "_saber/images/20191130007-b79793bb.jpg",
    "revision": "de21573bc3c56c6f1416ea326399c83d"
  },
  {
    "url": "_saber/images/20200406001-0823400c.jpg",
    "revision": "1b45ae941238f54d331045ea769f7d27"
  },
  {
    "url": "_saber/images/20200406001-38ade310.jpg",
    "revision": "51894f09934988327512151eb7198691"
  },
  {
    "url": "_saber/images/20200406001-7854c6b9.jpg",
    "revision": "806b558f9761e7d3bd768b9b91a75d14"
  },
  {
    "url": "_saber/images/20200406002-22cd7dfa.jpg",
    "revision": "6308ee828746d8617a69aa3f221e1a17"
  },
  {
    "url": "_saber/images/20200406002-fcff65e2.jpg",
    "revision": "c9cf273c9f8efd3b1e4a87c705545c3f"
  },
  {
    "url": "_saber/images/20200608001-ac04ce9c.jpg",
    "revision": "7a19a8b08fcae6100a9184dbb5110595"
  },
  {
    "url": "_saber/images/20200608001-ba3d0a7a.jpg",
    "revision": "09b2887f4760d981e510c6f935d97d43"
  },
  {
    "url": "_saber/images/20200608001-d4670727.jpg",
    "revision": "c4508c011c6c3985695445cccb14197f"
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
    "url": "_saber/js/404-page.dedcc6cd.js",
    "revision": "85bb739af966d924cbb98cd9eb515b79"
  },
  {
    "url": "_saber/js/50.f865cf04.js",
    "revision": "538d69532ad14a20334623ba838f6349"
  },
  {
    "url": "_saber/js/client.cf836bb7.js",
    "revision": "2b5db6fcb98182416092a4838c2d41f2"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-26-start-md.c9786d26.js",
    "revision": "e57dfa18d705829702e058331fb8aaee"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-27-chrome-custom-md.4e42aa15.js",
    "revision": "3686ddc6d58b8af35a7a5a5633b72820"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-27-chrome-one-click-to-download-from-sogou-browser-md.7b81c377.js",
    "revision": "dcf57a8409a29b041b51a6ab713040fc"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-27-py-lyric-retriever-md.873b6281.js",
    "revision": "668ba77204329eaf4bc908e20b15278e"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-28-typecho-url-rewrite-on-bae-md.25e38323.js",
    "revision": "56d824ccfc9e6b71eed0611ce46d5cfb"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-29-1bit-audio-player-md.912cb536.js",
    "revision": "a9caf0c92b51b96eb3fe7c2a217a3454"
  },
  {
    "url": "_saber/js/page--_posts-2013-11-30-ihanabi-the-domain-md.a7236daf.js",
    "revision": "51ffa551e204f4357fe5b251e955cef6"
  },
  {
    "url": "_saber/js/page--_posts-2013-12-05-move-out-from-bae-md.7c2fcd24.js",
    "revision": "84ffa491218fc4ba456fdb66d7c5074d"
  },
  {
    "url": "_saber/js/page--_posts-2013-12-10-typecho-v0-9-release-md.67101226.js",
    "revision": "5714e4b4fc48b38a06cc567a27a1c13c"
  },
  {
    "url": "_saber/js/page--_posts-2013-12-24-end-of-first-sophomore-term-md.e54236d7.js",
    "revision": "c50d91aa08ea44bc34366678cd72742d"
  },
  {
    "url": "_saber/js/page--_posts-2013-12-26-theme-two-md.0afc2646.js",
    "revision": "c98f5f316d028b667f964eda20f59ae6"
  },
  {
    "url": "_saber/js/page--_posts-2013-12-30-move-to-technetcal-and-2014-md.476d83c2.js",
    "revision": "feb09b9652def2bb83710dc62355f137"
  },
  {
    "url": "_saber/js/page--_posts-2014-01-01-electronic-technology-final-exam-md.6ebe62bd.js",
    "revision": "547fb30fa13e151c8fccc8385ca5edcb"
  },
  {
    "url": "_saber/js/page--_posts-2014-01-06-programmers-healthy-problem-md.08b2f3bb.js",
    "revision": "051f700b5c11d2f4f5894ccc6dbf899c"
  },
  {
    "url": "_saber/js/page--_posts-2014-01-13-emeditor-setting-md.a5fd1752.js",
    "revision": "b624c734c3e34c4e3ff2b4d6125d6e34"
  },
  {
    "url": "_saber/js/page--_posts-2014-01-31-happy-horse-year-md.e4e3e77f.js",
    "revision": "0aea97d87e775a50a576da7c7b1083b8"
  },
  {
    "url": "_saber/js/page--_posts-2014-03-02-win-prizes-at-weibo-md.3355292e.js",
    "revision": "49dd34166cd73c80fa21f99a8dd64e9e"
  },
  {
    "url": "_saber/js/page--_posts-2014-03-23-about-parsing-ua-for-duoshuo-md.de1df4b3.js",
    "revision": "868dc4ec605d52241a0dd83989efd68b"
  },
  {
    "url": "_saber/js/page--_posts-2014-03-25-flowers-photos-by-lumia-md.dfc841bb.js",
    "revision": "8859420d03680ea5c334b2d0a8efac22"
  },
  {
    "url": "_saber/js/page--_posts-2014-05-19-dual-boot-fix-virtualbox-and-hyper-v-switch-problem-md.da94eb27.js",
    "revision": "df1bc99174f693b230b95cae9fa4a200"
  },
  {
    "url": "_saber/js/page--_posts-2014-05-29-use-h5ai-to-beautify-your-http-web-server-index-md.7bf36045.js",
    "revision": "4131ddcb57fcba19647738c196cc2ba0"
  },
  {
    "url": "_saber/js/page--_posts-2014-10-14-syntax-for-typecho-md.0a1b8ef7.js",
    "revision": "4441b01ebdb1f9fd00f6a0e16b788afa"
  },
  {
    "url": "_saber/js/page--_posts-2015-05-20-hello-world-md.b27f1530.js",
    "revision": "23a77ffc78a8f63ac856c9be4cbb0cb2"
  },
  {
    "url": "_saber/js/page--_posts-2015-08-23-use-scoop-to-enhance-windows-powershell-md.ec35f59e.js",
    "revision": "ab147f9232a63869e671acbf13767f46"
  },
  {
    "url": "_saber/js/page--_posts-2015-09-20-new-mac-env-bootstrap-md.dae7d23e.js",
    "revision": "d64f023335821017a592723c14f9c7be"
  },
  {
    "url": "_saber/js/page--_posts-2015-10-02-dot-im-domain-renewal-md.804a87e7.js",
    "revision": "7135942f1c1fa985f40b7e6a134e344a"
  },
  {
    "url": "_saber/js/page--_posts-2017-01-01-2016-2017-md.df69ec09.js",
    "revision": "45d55dbf875742f3b61262f0fb988f65"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-12-henet-6in4-ipv6-tunnel-on-openwrt-md.bd24f9a7.js",
    "revision": "2735a2188ec904fbeb51dacf14d2a9a6"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-21-a-brief-history-of-minecraft-modding-md.37912883.js",
    "revision": "4fa5796b8aba8a17ee6bb725347fc220"
  },
  {
    "url": "_saber/js/page--_posts-2017-12-15-nintendo-switch-unboxing-and-simple-review-md.63fb0a78.js",
    "revision": "7bf7758c8e3caea363ebce121a9c3423"
  },
  {
    "url": "_saber/js/page--_posts-2018-01-01-the-tao-of-notch-beyond-twitter-md.03aca685.js",
    "revision": "3407d9f6c573a85f5f9cbeada6bde2e5"
  },
  {
    "url": "_saber/js/page--_posts-2018-03-24-office-2016-custom-installation-guide-md.a22a2033.js",
    "revision": "beb7ae6f1dc8211e510fadf07146e42d"
  },
  {
    "url": "_saber/js/page--_posts-2018-05-12-talk-about-scoop-the-package-manager-for-windows-again-md.e261674d.js",
    "revision": "0a5c4e4b80645affdd9d6ca24c0abc05"
  },
  {
    "url": "_saber/js/page--_posts-2018-12-21-chrome-extensions-that-i-am-using-md.1e6f402a.js",
    "revision": "28a007bd550893badc3fffb2761ea951"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-15-the-2018-hacktoberfest-shirt-arrived-md.b6d8fbbc.js",
    "revision": "b442c5665f7061f8fdd13e68210c7a43"
  },
  {
    "url": "_saber/js/page--_posts-2019-02-18-understanding-windows-console-host-settings-md.9e139834.js",
    "revision": "a4a81de3a3afc0b42e238ae082a0baa0"
  },
  {
    "url": "_saber/js/page--_posts-2019-04-21-recent-changes-of-my-site-md.c225a7e0.js",
    "revision": "4ba81a480ce88698e1fe6a14cfb91a71"
  },
  {
    "url": "_saber/js/page--_posts-2019-05-01-macos-mojave-dark-mode-in-css-md.5887420c.js",
    "revision": "d4332ba3e5be12663ea52200f66a9509"
  },
  {
    "url": "_saber/js/page--_posts-2019-05-20-mariya-takeuchis-plastic-love-gets-music-video-after-35-years-md.1d081900.js",
    "revision": "30fca60414531d93210ba8bdaeab2434"
  },
  {
    "url": "_saber/js/page--_posts-2019-07-07-amd-itx-diy-specs-for-the-next-5-years-md.24aebc0f.js",
    "revision": "bb09e242e06fdeedf29551a36cc0e960"
  },
  {
    "url": "_saber/js/page--_posts-2019-07-24-better-lazyload-implementation-with-responsive-images-md.b166a646.js",
    "revision": "b9b4d311e11265c5a52730899a2498a3"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-16-github-universe-2019-news-md.0ecd24fd.js",
    "revision": "7af361ca226c78018f2794e247fb11c2"
  },
  {
    "url": "_saber/js/page--_posts-2020-04-10-ten-indie-video-game-soundtracks-you-must-listen-md.8ba1e20f.js",
    "revision": "910b14f3473313b0288d85d06310e562"
  },
  {
    "url": "_saber/js/page--about-md.1a3168f6.js",
    "revision": "7aa62cfc58dce9f56824a5c6d7d8b767"
  },
  {
    "url": "_saber/js/page--blog-index-md.ea6b7bab.js",
    "revision": "d26e9b76fe358c53c795b4668bf07b61"
  },
  {
    "url": "_saber/js/page--guestbook-md.f14341fc.js",
    "revision": "615cec174bd3afe50448c2480cb85023"
  },
  {
    "url": "_saber/js/page--index-md.049544d8.js",
    "revision": "c69bd9be0ada54faf9ea5b0f4f10cad9"
  },
  {
    "url": "_saber/js/page--links-md.cfea7267.js",
    "revision": "657a3dba6d077603c2b035c84aec269b"
  },
  {
    "url": "404.html",
    "revision": "eedc624b280fd9e980e5dccf2a6372b4"
  },
  {
    "url": "about/index.html",
    "revision": "8b74575f9c50c8f1a072baf5e9ac0d65"
  },
  {
    "url": "blog/1bit-audio-player/index.html",
    "revision": "ef5d3db6fed2efd8cf1c1235e7ea00b1"
  },
  {
    "url": "blog/2016-2017/index.html",
    "revision": "e0b5fa63a3e3a5bb1ccc85809dd0427b"
  },
  {
    "url": "blog/a-brief-history-of-minecraft-modding/index.html",
    "revision": "4f8b66a7d1bfc6d6aa7fab305d1637e9"
  },
  {
    "url": "blog/about-parsing-ua-for-duoshuo/index.html",
    "revision": "59512f456ec79fea7f998b9eb9d75943"
  },
  {
    "url": "blog/amd-itx-diy-specs-for-the-next-5-years/index.html",
    "revision": "7d150b09ed627b1d4103018dcc6030e7"
  },
  {
    "url": "blog/better-lazyload-implementation-with-responsive-images/index.html",
    "revision": "4361388970a2abc773c0e31dd15cd5e3"
  },
  {
    "url": "blog/chrome-custom/index.html",
    "revision": "f8b6c57ae9a6fa4da78f98d18f9625e5"
  },
  {
    "url": "blog/chrome-extensions-that-i-am-using/index.html",
    "revision": "3f5202d4f5fc37a7f71b3e90719a10c5"
  },
  {
    "url": "blog/chrome-one-click-to-download-from-sogou-browser/index.html",
    "revision": "1a4dae9bb0166f1b37b4901bd9cfb696"
  },
  {
    "url": "blog/dot-im-domain-renewal/index.html",
    "revision": "9d1e2709071c8c5c682abc8ccb7b6d38"
  },
  {
    "url": "blog/dual-boot-fix-virtualbox-and-hyper-v-switch-problem/index.html",
    "revision": "06e5af2a0d19acb953fb3ab38e527544"
  },
  {
    "url": "blog/electronic-technology-final-exam/index.html",
    "revision": "4a4b14aa6e9681fe174a26f1242656ee"
  },
  {
    "url": "blog/emeditor-setting/index.html",
    "revision": "69fe0b326a2331dacfc0c452df925618"
  },
  {
    "url": "blog/end-of-first-sophomore-term/index.html",
    "revision": "1ab313d4c5c9045bcc45a77cf964c36d"
  },
  {
    "url": "blog/flowers-photos-by-lumia/index.html",
    "revision": "78c249b77f62a5158fd7cda0b0932662"
  },
  {
    "url": "blog/github-universe-2019-news/index.html",
    "revision": "b088f6f9758144c8f4a844ded4d3663f"
  },
  {
    "url": "blog/happy-horse-year/index.html",
    "revision": "90b6a831444e037a74aa20779d13d9d8"
  },
  {
    "url": "blog/hello-world/index.html",
    "revision": "8809191658a685b2233cab01a767632f"
  },
  {
    "url": "blog/henet-6in4-ipv6-tunnel-on-openwrt/index.html",
    "revision": "d2b654e2d8687791e6f797ae19dda0b5"
  },
  {
    "url": "blog/ihanabi-the-domain/index.html",
    "revision": "d85058d1fc63d94b4648ce78143372af"
  },
  {
    "url": "blog/index.html",
    "revision": "830ebd5d0505a58ca10c902ffae04ad2"
  },
  {
    "url": "blog/macos-mojave-dark-mode-in-css/index.html",
    "revision": "ba4bf1722f2a51a7fd4047fc2064743e"
  },
  {
    "url": "blog/mariya-takeuchis-plastic-love-gets-music-video-after-35-years/index.html",
    "revision": "5a8089b4cae9a40d2201a0c101b1f817"
  },
  {
    "url": "blog/move-out-from-bae/index.html",
    "revision": "1d7d0d958623ba273af67386ee7fa68a"
  },
  {
    "url": "blog/move-to-technetcal-and-2014/index.html",
    "revision": "b235d1207516ec5f1677a3dad25e48c6"
  },
  {
    "url": "blog/new-mac-env-bootstrap/index.html",
    "revision": "25dd260c0395be3d41d0726a223977f1"
  },
  {
    "url": "blog/nintendo-switch-unboxing-and-simple-review/index.html",
    "revision": "6769e2efdec6f03dde37c64f4675592f"
  },
  {
    "url": "blog/office-2016-custom-installation-guide/index.html",
    "revision": "ca764f69998900f367aff614a09dff18"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "2421a21e77efb95e54cae7a448b45962"
  },
  {
    "url": "blog/programmers-healthy-problem/index.html",
    "revision": "27e318a15e8e401677859510d0579bcf"
  },
  {
    "url": "blog/py-lyric-retriever/index.html",
    "revision": "0b36bc593e02779cf6581b9c50134d59"
  },
  {
    "url": "blog/recent-changes-of-my-site/index.html",
    "revision": "d254e284f168c0683711337692c37192"
  },
  {
    "url": "blog/start/index.html",
    "revision": "310efc6a1921c034d828029756ea6608"
  },
  {
    "url": "blog/syntax-for-typecho/index.html",
    "revision": "f94c3cb2ff272617d9583f807f1d2f13"
  },
  {
    "url": "blog/talk-about-scoop-the-package-manager-for-windows-again/index.html",
    "revision": "9277ee3289fd0cb7895dda7e779f314c"
  },
  {
    "url": "blog/ten-indie-video-game-soundtracks-you-must-listen/index.html",
    "revision": "0394bfbf72941f7c87f2cec8642ae036"
  },
  {
    "url": "blog/the-2018-hacktoberfest-shirt-arrived/index.html",
    "revision": "a802404e8624d34324732720490f41fe"
  },
  {
    "url": "blog/the-tao-of-notch-beyond-twitter/index.html",
    "revision": "5eba9c887875de17752214b642a1ceed"
  },
  {
    "url": "blog/theme-two/index.html",
    "revision": "282f1c3dd1df9c80d7f8a29d60108404"
  },
  {
    "url": "blog/typecho-url-rewrite-on-bae/index.html",
    "revision": "e5c5eda736bb11c9468f9c13297d346e"
  },
  {
    "url": "blog/typecho-v0-9-release/index.html",
    "revision": "c570b7f584ac593d4b11d8397efa2b65"
  },
  {
    "url": "blog/understanding-windows-console-host-settings/index.html",
    "revision": "5c1580b04f4a4bb1c7bfe3a69e178230"
  },
  {
    "url": "blog/use-h5ai-to-beautify-your-http-web-server-index/index.html",
    "revision": "0d976076b3d852faa49e70ebf5456bc5"
  },
  {
    "url": "blog/use-scoop-to-enhance-windows-powershell/index.html",
    "revision": "ef4d412168e877e42207a9376842fa80"
  },
  {
    "url": "blog/win-prizes-at-weibo/index.html",
    "revision": "cbc0d1ef09dc518e6e7eff067970b8bd"
  },
  {
    "url": "google83352756ba352b4c.html",
    "revision": "e718cc06af7e69d4b044afdb8f1667cb"
  },
  {
    "url": "guestbook/index.html",
    "revision": "0eb85c871cb18404bdad66cc18a92f94"
  },
  {
    "url": "index.html",
    "revision": "7a6c350b6cbf72c266b28802a6447ed6"
  },
  {
    "url": "links/index.html",
    "revision": "243dd24d1d531bb6182f34b35a8ff92f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
