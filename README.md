# React Boilerplate
### Upphafspunktur fyrir React síður

Þetta nýtir gulp til að púsla saman öllum React componentum sem og SCSS stílum.

## Hvað þarf ég til að byrja á þessu?

Þetta notar node og gulp til að smíða allt.
Fyrst er gott að [setja upp node/npm](https://docs.npmjs.com/getting-started/installing-node).
Svo er gott að hafa gulp til reiðu alltaf, og þá keyrir maður:
```
npm install gulp -g
```

## Hvernig á að byrja?
Skref eitt er vissulega að klóna þetta:
```
git clone git@github.com:menntamalastofnun/react-boilerplate.git
```

Næst fer maður í möppuna og keyrir
```
npm install
```

Síðan getur maður byrjað að vinna.

## Hvernig á að vinna í þessu?

### React componentar
Þeir eiga heima í [assets/js/src/components](assets/js/src/components), hver og einn component í sinni skrá. Ef maður bætir við component þarf líka að bæta honum við [jsFiles.js](assets/js/src/jsFiles.js) skrána í `react` fylkið:
```
module.exports = {
  react: [
    'assets/js/src/components/Nonsense.jsx',
    'assets/js/src/components/Container.jsx',
  ]
};
```

Það þarf að hafa það í huga að setja þá componenta sem eru notaðir innann annarra componenta inn ofar í röðinni.

### SCSS skrár
Þeir eiga heima í [assets/sass](assets/sass) og þar í sínum undirmöppum. Í [base/](assets/sass/base) á grunnurinn heima, þ.e.a.s. alls konar breytur og slíkt sem er gagnlegt. Í [components/](assets/sass/components) möppunna fara svo SCSS skrárnar fyrir þá componenta sem maður vill stíla.
Þegar maður bætir við nýrri SCSS skrá þar svo að importa henni í [main.scss](assets/sass/main.scss), t.d. svona:
```
@import 'components/nonsense'
```

### Vinnan sjálf

Ef maður vill vinna í skránum og sjá breytingarnar gerast jafnóðum keyrir maður bara:
```
gulp
```
Þá smíðar gulp allt fyrir mann og startar vefsvæði á [http://localhost:3000](http://localhost:3000). gulp fylgist svo með breytingum ug smíðar allt upp á nýtt ef eitthvað breytist.

Ef maður vill bara smíða skrárnar sem maður þarf keyrir maður:
```
gulp build
```