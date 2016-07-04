# Dizmo Internationalization

Allows the [i18next](http://i18next.com/) internationalization library to be integrated into a dizmo.

## Build
```bash
npm run install
```

The `dist` directory should contain a corresponding `i18n-*.min.js` build.

## HTML Integration

Add a `<script>` tag to the `index.html` markup of your dizmo:
```html
<script src="path/to/i18n-*.min.js"></script>
```

Where you should replace the star `*` with the corresponding version number.

## Node Integration

Install package:
```bash
npm install --save generator-dizmo-i18n
```

Add a `require` statement to e.g. the `index.js` module of your dizmo:
```js
var i18n = require('generator-dizmo-i18n');
```

## Usage

Invoke `i18n` to initialize the translation framework, and then access the translations with the `t` function:
```js
i18n(function (err, t) {
    console.log(t('greeting'));
});
```

## Translations

Create a `assets/locales/translation.en.json` reference translation:
```json
{
    "greeting": "Hello World!"
}
```

And optionally, create also a `assets/locales/translation.de.json` translation:
```json
{
    "greeting": "Hallo Welt!"
}
```

## Service: locize.io

Use [locize.io](http://www.locize.io) to import, translate and export the `translation.*.json` translation files.
