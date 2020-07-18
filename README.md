<div align="center">
  <a href="https://www.h404bi.com/">
    <img alt="site icon" src="./resources/media/icon.png" />
  </a>
  <h1>The Art of Chawye Hsu</h1>
</div>
<p align="center">
  <a href="https://github.com/chawyehsu/www.h404bi.com/actions?query=workflow%3ADeployment">
    <img src="https://img.shields.io/github/workflow/status/chawyehsu/www.h404bi.com/Deployment?style=flat-square" alt="GitHub Actions" />
  </a>
  <a href="https://www.h404bi.com">
    <img src="https://img.shields.io/website-up-down-green-red/https/www.h404bi.com.svg?style=flat-square" alt="Website Status" />
  </a>
  <a href="https://www.webpagetest.org/result/200301_J4_4d43e80f91ea9497254c7d167d809062/">
    <img src="https://img.shields.io/badge/WebPageTest-AAAAA-44CC11.svg?style=flat-square" alt="WebPageTest Test Result" />
  </a>
</p>
<p align="center">
  <a href="https://saber.land/">
    <img src="https://img.shields.io/badge/Powered%20by-Saber-00838f.svg?style=flat-square" alt="Powered by Saber" />
  </a>
  <a href="https://code.visualstudio.com">
    <img src="https://img.shields.io/badge/build%20with-vscode-blue.svg?style=flat-square" alt="build with vscode" />
  </a>
  <a href="https://github.com/chawyehsu/www.h404bi.com">
    <img src="https://img.shields.io/david/chawyehsu/www.h404bi.com.svg?style=flat-square" alt="David" />
  </a>
  <a href="https://github.com/chawyehsu/www.h404bi.com">
    <img src="https://img.shields.io/github/repo-size/chawyehsu/www.h404bi.com.svg?style=flat-square&colorB=328657" alt="Repo size" />
  </a>
</p>
<p align="center">
  This repository contains all the source code of Chawye Hsu's personal <a href="https://www.h404bi.com">website</a>.<br/>
  <sub>You can also see the auto-generated deployable files at <a href="https://github.com/chawyehsu/www.h404bi.com/tree/gh-pages"><code>gh-pages</code></a> branch.</sub>
</p>

## Architecture

```

                        GitHub                 Preview,         DNS,
                      +---------+              Redirect,        Cache,
                      | Actions |              Functions,       Security,
                      |         |              etc.             etc.
                  +---+----+----v-----+        +--------+     +------------+         +---------+
+--------+  Push  |        |          | Deploy |        |     |            |         |         |
| Author +-------->  main  | gh-pages +--------> Vercel <-----+ Cloudflare <---------+ Clients |
+--------+        |        |          |        |        |     |            | Request |         |
                  +--------+-----^----+        +--------+     +------------+         +----+----+
                                 |                                                        |
                   Github Repo   |                                                        |
                                 |           +----------+                                 |
                                 |           |          |                CDN              |
                                 +-----------+ jsDelivr <---------------------------------+
                                             |          |     Assets: Images, CSS, JS
                                             +----------+

```

## Playground

**Prerequisites:**  
Git, Nodejs, Yarn

### Get the project:

``` sh
$ git clone https://github.com/chawyehsu/www.h404bi.com
$ cd www.h404bi.com
```

### Run and play:

``` sh
# Bootstrap, install dependencies
$ yarn
# Start localhost dev server
$ yarn dev
# Listening 127.0.0.1:3000
```

## Credit

Complete open sourcing was inspired by [daneden.me](https://github.com/daneden/daneden.me).

## License

**Unless otherwise noted**:  
1. All my blog posts **text** content in [`pages/_posts`](pages/_posts) are licensed under the [CC0](https://creativecommons.org/publicdomain/zero/1.0/) license, and given to [Public Domain](https://en.wikipedia.org/wiki/Public_domain).  
2. All my blog posts **assets** content in [`pages/_assets`](pages/_assets) are licensed under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.  
3. Except for content in [`pages`](pages), all other **codes** content in this repository are licensed under the [MIT](https://opensource.org/licenses/MIT) license.  
4. Other not covered content should be copyrighted by default, do not use it without my permission.  
5. Please contact me if you have any questions about the license.
