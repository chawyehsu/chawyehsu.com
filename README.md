<div align="center">
  <a href="https://chawyehsu.com/">
    <img alt="Project Icon" src="./static/_saber/images/icons/favicon.png" />
  </a>
  <h1>The Art of Chawye Hsu</h1>
</div>
<p align="center">
  <a href="https://github.com/chawyehsu/chawyehsu.com/actions?query=workflow%3ADeployment">
    <img src="https://img.shields.io/github/workflow/status/chawyehsu/chawyehsu.com/Deployment?style=flat-square" alt="GitHub Actions" />
  </a>
  <a href="https://chawyehsu.com">
    <img src="https://img.shields.io/website-up-down-green-red/https/chawyehsu.com.svg?style=flat-square" alt="Website Status" />
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
  <a href="https://github.com/chawyehsu/chawyehsu.com">
    <img src="https://img.shields.io/david/chawyehsu/chawyehsu.com.svg?style=flat-square" alt="David" />
  </a>
  <a href="https://github.com/chawyehsu/chawyehsu.com">
    <img src="https://img.shields.io/github/repo-size/chawyehsu/chawyehsu.com.svg?style=flat-square&colorB=328657" alt="Repo size" />
  </a>
</p>
<p align="center">
  This repository contains all the source code of Chawye Hsu's personal <a href="https://chawyehsu.com">website</a>.<br/>
  <sub>You can also see the auto-generated deployable files at <a href="https://github.com/chawyehsu/chawyehsu.com/tree/gh-pages"><code>gh-pages</code></a> branch.</sub>
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
$ git clone https://github.com/chawyehsu/chawyehsu.com
$ cd chawyehsu.com
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

*Copyright © 2015-2020 Chawye Hsu. All rights reserved.*

The content and resources belong to **Chawye Hsu**, **unless otherwise noted**.
Reproducing or distributing our content **without permission** could mean you will
be in legal breach of our copyright. Requests to use our content are considered
on a case by case basis for reasonable accommodation.

You don’t need our permission to link to any pages of our website.
