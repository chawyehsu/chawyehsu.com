# saber-plugin-adobe-font

Adobe Font plugin for [Saber](https://saber.land/).

## Install

```bash
yarn add saber-plugin-adobe-font
```

## Usage

In your `saber-config.yml`:

```yml
plugins:
  - resolve: saber-plugin-adobe-font
    options:
      kitId: 'your-adobe-font-kitId'
```

## Options

### kitId (required)

- Type: `String`
- Default: `undefined`

Your Adobe Font kit identity.

### typekitHost (optional)

- Type: `String`
- Default: `https://use.typekit.net`

Configurable Typekit script host. Make sure do not contain slash suffix.

### useTypekitCache (optional)

- Type: `Boolean`
- Default: `false`

Enable/Disable [Typekit Cache].

### typekitCacheUrl (optional)

- Type: `String`
- Default: `https://cdn.jsdelivr.net/npm/typekit-cache`

Configurable [Typekit Cache] library url.

## License

[MIT](LICENSE) © Chawye Hsu

> [Website](https://chawyehsu.com) · GitHub [@chawyehsu](https://github.com/chawyehsu) · Twitter [@chawyehsu](https://twitter.com/chawyehsu)


[Typekit Cache]: https://github.com/morris/typekit-cache
