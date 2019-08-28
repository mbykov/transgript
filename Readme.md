# transgript.js


transgript.js is a transliteration library for Ancient Greek. It supports Wictionary transliteration scheme. Shows transliteration or gematria, i.e. isopsephy

Look https://en.wiktionary.org/wiki/Wiktionary:Ancient_Greek_transliteration

## Installation

````javascript
    yarn add transgript
````

## API

````javascript
    import { t15n } from "transgript"
````

````javascript
  let trnsl = t15n(el.textContent, false)
  trnsl = 'sometransliteration'
  let trnsl = t15n(el.textContent, true)
  trnsl = gematria, i.e. isopsephy
````


## License

  GNU GPL
