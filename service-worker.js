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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "35e40e63b34874cd088f02027a8770d9"
  },
  {
    "url": "assets/css/2.styles.aaa79101.css",
    "revision": "d1a92d1dae83b55192a5783d97f02de8"
  },
  {
    "url": "assets/css/3.styles.9c8e9bac.css",
    "revision": "0e798e1ffff94d0d2a5db9b54e5ca21c"
  },
  {
    "url": "assets/css/4.styles.99d217bc.css",
    "revision": "64759d6d8f3c8aec2ff93d9b4a341cdc"
  },
  {
    "url": "assets/css/styles.e651c075.css",
    "revision": "99df571755054d90d8e15f52fcf2952c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.5ccfe760.js",
    "revision": "d82b2f3654edb0bbeddc9a96f008218e"
  },
  {
    "url": "assets/js/2.aaa79101.js",
    "revision": "296d31144bbf3590116676d4ea1758e5"
  },
  {
    "url": "assets/js/3.9c8e9bac.js",
    "revision": "a7a76385ce7fed9faf5c5343b83f2ba9"
  },
  {
    "url": "assets/js/4.99d217bc.js",
    "revision": "44e7f72e7691c507f5f98a5f5ebeaab5"
  },
  {
    "url": "assets/js/5.585c3edf.js",
    "revision": "9029fb4a49d95b52848685adaac951cb"
  },
  {
    "url": "assets/js/app.e651c075.js",
    "revision": "4a22b89e58c5a217afab46315e431cfd"
  },
  {
    "url": "bar.html",
    "revision": "84d706f6716fb6a64ca1fa8063efa3db"
  },
  {
    "url": "index.html",
    "revision": "6864e3d2dd8d5dfe81ec18e33f302337"
  },
  {
    "url": "layout.html",
    "revision": "bb38a5624649176ca2cf8b271714268c"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "menu.html",
    "revision": "17b521e71c7cd7a4d52dce584b93260a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
