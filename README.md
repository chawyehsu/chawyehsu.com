<img src="./static/_saber/images/icons/chawyehsu_128x128.svg" alt="Logo" width="128" height="128" align="right" />

# chawyehsu.com

[![deployment][deployment-badge]][deployment-url]
[![status][status-badge]][status-url]
[![webpagetest][webpagetest-badge]][webpagetest-url]
[![generator][generator-badge]][generator-url]
[![editor][editor-badge]][editor-url]
[![repo][repo-badge]][repo-url]

This repository contains all the source code of Chawye Hsu's personal [website].
You can also see the auto-generated deployable files at [gh-pages] branch.

## Architecture

```

                        GitHub                 Preview,         DNS,
                      +---------+              Redirect,        Cache,
                      | Actions |              Functions,       Security,
                      |         |              etc.             etc.
                  +---+----+----v-----+        +--------+       +------------+         +---------+
+--------+  Push  |        |          | Deploy |        | Proxy |            |         |         |
| Author +-------->  main  | gh-pages +--------> Vercel <-------+ Cloudflare <---------+ Clients |
+--------+        |        |          |        |        |       |            | Request |         |
                  +--------+----------+        +--------+       +------------+         +---------+

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
# Serve 127.0.0.1:3000
```

## Credits

Complete open sourcing was inspired by [daneden.me].

## License

Copyright © 2015-persent Chawye Hsu. All rights reserved.

<sub><em>The <strong>content</strong> and <strong>resources</strong> belong to
Chawye Hsu, unless otherwise noted. Reproducing or distributing our content
without permission could mean you will be in legal breach of our copyright.
Requests to use our content are considered on a case by case basis for reasonable
accommodation.</em></sub>


[deployment-url]: https://github.com/chawyehsu/chawyehsu.com/actions?query=workflow%3ADeployment
[deployment-badge]: https://img.shields.io/github/actions/workflow/status/chawyehsu/chawyehsu.com/deployment.yml?style=flat-square
[status-url]: https://chawyehsu.com
[status-badge]: https://img.shields.io/website-up-down-green-red/https/chawyehsu.com.svg?style=flat-square
[webpagetest-url]: https://www.webpagetest.org/result/230820_AiDcV0_5MW/1/details/
[webpagetest-badge]: https://img.shields.io/badge/WebPageTest-Not%20Bad-44CC11.svg?style=flat-square
[generator-url]: https://github.com/saberland/saber
[generator-badge]: https://img.shields.io/badge/Powered%20by-Saber-00838f.svg?style=flat-square
[editor-url]: https://code.visualstudio.com
[editor-badge]: https://img.shields.io/badge/build%20with-vscode-blue.svg?style=flat-square
[repo-url]: https://github.com/chawyehsu/chawyehsu.com
[repo-badge]: https://img.shields.io/github/repo-size/chawyehsu/chawyehsu.com.svg?style=flat-square&colorB=328657
[website]: https://chawyehsu.com
[gh-pages]: https://github.com/chawyehsu/chawyehsu.com/tree/gh-pages
[daneden.me]: https://github.com/daneden/daneden.me
