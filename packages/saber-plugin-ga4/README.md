# saber-plugin-ga4

Google Analytics 4 for [Saber](https://saber.land/), via gtag.js.

## Install

```bash
yarn add saber-plugin-ga4
```

## Usage

In your `saber-config.yml`:

```yml
plugins:
  - resolve: saber-plugin-ga4
    options:
      trackId: 'your-google-analytics-4-trackId'
```

## Options

### trackId

- Type: `string`
- Default: `undefined`

Your Google Analytics 4 track identity.

### gtagUrl

- Type: `string`
- Default: [`https://www.googletagmanager.com/gtag/js`](https://www.googletagmanager.com/gtag/js)

The configurable url of gtag.js to load.

## License

[MIT](LICENSE) © Chawye Hsu

> [Website](https://chawyehsu.com) · GitHub [@chawyehsu](https://github.com/chawyehsu) · Twitter [@chawyehsu](https://twitter.com/chawyehsu)
