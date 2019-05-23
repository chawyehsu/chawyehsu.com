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


## License

[MIT](LICENSE) © h404bi

> [Website](https://www.h404bi.com) · GitHub [@h404bi](https://github.com/h404bi) · Twitter [@h404bi](https://twitter.com/h404bi)
