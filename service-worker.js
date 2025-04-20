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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "url": "404.html",
    "revision": "bde163ebe18f8291ad16ec561bb5426e"
  },
  {
    "url": "assets/css/0.styles.8ce31f4f.css",
    "revision": "972877f92bf4f30bb5807585181dee63"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.3d14216c.js",
    "revision": "4a4bd5ac7a96af836c27a26757ae9174"
  },
  {
    "url": "assets/js/16.9ad73624.js",
    "revision": "7c1d6af6d09d7310b9e4244ddd2518d1"
  },
  {
    "url": "assets/js/17.d5a211f1.js",
    "revision": "7ba891dc1dc2b9a6e42f5c4c7184a738"
  },
  {
    "url": "assets/js/18.b50895dc.js",
    "revision": "c7163a21409f3a78b5ee596685af6e25"
  },
  {
    "url": "assets/js/19.52fbf99a.js",
    "revision": "27fdce0dee90ea3ed9605a185c2c3021"
  },
  {
    "url": "assets/js/2.54a9bd73.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.32c77683.js",
    "revision": "b082adbf991090781134bb0fd5caafc5"
  },
  {
    "url": "assets/js/21.28551e53.js",
    "revision": "33ed10d19da2fb976c1d26e677fcde22"
  },
  {
    "url": "assets/js/22.79b3738a.js",
    "revision": "6c24ff5badb20dd62f0d25124765f5f5"
  },
  {
    "url": "assets/js/23.d97aed26.js",
    "revision": "b50fe8e43f38078ad9fce2e2b7b1c514"
  },
  {
    "url": "assets/js/24.1475edd8.js",
    "revision": "1c4c487d38d60b7f3ae7791993476c4b"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.96bd09bf.js",
    "revision": "33aa72746d0363ac9f623d22ca289d1a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a4a92b4e91172126c9820169d28249cf"
  },
  {
    "url": "design/index.html",
    "revision": "58aa003bbbbc3ebd6d3d6a14d5eee3d4"
  },
  {
    "url": "index.html",
    "revision": "b164a9ec32e5fd2c2a42b74ad1eae5e4"
  },
  {
    "url": "intro/index.html",
    "revision": "700c9e1894f79f6a510fbe7ef69b3261"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ab8146df69d40495e53fd12a1a0c5e46"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "860e0f46abb028f0212beacac27aba88"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ac94b6e1f28f52036ee80bf8d3b03eec"
  },
  {
    "url": "software/index.html",
    "revision": "dfaa073ff2d6ee16358b1f9d26df11c7"
  },
  {
    "url": "test/index.html",
    "revision": "d6bd82bb8bf5b9c6d15d2a9fda9bd556"
  },
  {
    "url": "use cases/index.html",
    "revision": "31513056e7207f8daddb77ae7a1654e6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
