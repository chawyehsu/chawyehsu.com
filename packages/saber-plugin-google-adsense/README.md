# saber-plugin-google-adsense

Google Adsense plugin for [Saber](https://saber.land/).

## Install

```bash
yarn add saber-plugin-google-adsense
```

## Configuration options

In your `saber-config.yml`:

```yml
plugins:
  - resolve: saber-plugin-google-adsense
    options:
      adClientId: 'your-adsense-client-id'
```

| Option | type |  description
| -------- | ---- | -----------
| `adsenseScriptUrl` | String | The url of Google Adsense script. Default is `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`.
| `adClientId` | String | Your Google Adsense client ID (i.e. `ca-pub-#########`). **Required** when not in test mode.
| `pageLevelAds` | Boolean | Enable Adsense Page Level Ads. Default is `false`. Refer to the AdSense docs for details.
| `fullWidthResponsive` | Boolean | When `true`, `data-full-width-responsive="true"` attribute will be added to ads' tag. Default is `false`. Refer to the AdSense docs for details.
| `test` | Boolean | Force AdSense into _test_ mode (see below).

### Test mode

The plugin will automatically switch to `test` mode when runniung Saber in DEV mode.
But you can keep test mode on in production by setting the configuration option `test` to `true`.

Test mode uses a test client ID - `ca-google`, so that you will not be violating Google AdSense TOS.

Note that test advertiements will typically appear as an empty space, but will have the
correct dimensions (i.e. will occupy the correct space needed by the rendered ad).

## Usage

Insert the `<adsbygoogle />` component wherever you would like an advertisment placed.

The ad defaults to `auto` size format (configurable by setting the prop `ad-format`). This mode
is responsive by nature. You should place the `<adsbygoogle />` component inside a container element
that has a specified (min/max) width and (min/max) height (which can be based on media queries),
or use style or classes on the `<adsbygoogle />` component to restrict the advertisement to a
specific size (or sizes).

Use the `ad-slot` property to specify your google adsense ad slot value (specified as a string)

**Example**

```vue
<div class="ad-wrapper">
  <adsbygoogle ad-layout="in-article" ad-format="fluid" ad-slot="1234567890"/>
</div>
```

**Component props:**

| prop | type | description
| ---- | ---- | -----------
| `ad-slot` | String | Google Adsense adslot. **This prop is required when not in test mode**. Refer to your AdSense account for ad-slot values.
| `ad-format` | String | Defaults to `'auto'`. Refer to the adsense docs for other options
| `ad-style` | Object | Styles to apply to the rendered `<ins>` element. Default: `{ display: 'block' }`. Refer to VueJS [style binding docs](https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax-1) for the Object format.
| `ad-layout` | String | Optional. Refer to the adsense docs
| `ad-layout-key` | String | Optional. Refer to the adsense docs

### Automatic updating of Ads
Whenever your route changes, any disaplayed ads will update, just as they would on normal
page loads.

## Credit

Thanks to [nuxt-community/google-adsense-module](https://github.com/nuxt-community/google-adsense-module) for the inspiration and documentation, this plugin is heavily based on it.

## License

[MIT](LICENSE) © h404bi

> [Website](https://www.h404bi.com) · GitHub [@h404bi](https://github.com/h404bi) · Twitter [@h404bi](https://twitter.com/h404bi)
