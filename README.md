# chawyehsu.com

[![deployment][deployment-badge]][deployment-url]
[![generator][generator-badge]][generator-url]
[![repo][repo-badge]][repo-url]

This repository contains all the source code of Chawye Hsu's personal [website].
You can also see the auto-generated deployable files at [gh-pages] branch.

## Playground

**Prerequisites:** Git, Nodejs, Yarn

### Get the project

```raw
$ git clone https://github.com/chawyehsu/chawyehsu.com
$ cd chawyehsu.com
```

### Run and play

```sh
# Bootstrap, install dependencies
$ yarn
# Start localhost dev server
$ yarn dev
# Serve 127.0.0.1:3000
```

## Architecture

```raw

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
[deployment-badge]: https://img.shields.io/github/actions/workflow/status/chawyehsu/chawyehsu.com/deployment.yml?style=flat&labelColor=121212&colorB=544D6B
[generator-url]: https://github.com/chawyehsu/saber
[generator-badge]: https://img.shields.io/badge/Powered%20by-Saber%20Alter-544D6B.svg?style=flat&labelColor=121212&colorB=544D6B
[repo-url]: https://github.com/chawyehsu/chawyehsu.com
[repo-badge]: https://img.shields.io/github/repo-size/chawyehsu/chawyehsu.com.svg?style=flat&labelColor=121212&colorB=544D6B
[website]: https://chawyehsu.com
[gh-pages]: https://github.com/chawyehsu/chawyehsu.com/tree/gh-pages
[daneden.me]: https://github.com/daneden/daneden.me
