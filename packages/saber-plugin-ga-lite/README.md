# saber-plugin-ga-lite

Liteweight Google Analytics for [Saber](https://saber.land/), using [ga-lite](https://github.com/jehna/ga-lite).

## Install

```bash
yarn add saber-plugin-ga-lite
```

## Usage

In your `saber-config.yml`:

```yml
plugins:
  - resolve: saber-plugin-ga-lite
    options:
      trackId: 'your-google-analytics-trackId'
```

## Options

### trackId

- Type: `string`
- Default: `undefined`

Your Google Analytics track identity.

- Type: `string`
- Default: [`https://cdn.jsdelivr.net/npm/ga-lite`](https://cdn.jsdelivr.net/npm/ga-lite)

The configurable url of [ga-lite](https://github.com/jehna/ga-lite) to load.

## License

[MIT](LICENSE) © Chawye Hsu

> [Website](https://chawyehsu.com) · GitHub [@chawyehsu](https://github.com/chawyehsu) · Twitter [@chawyehsu](https://twitter.com/chawyehsu)
