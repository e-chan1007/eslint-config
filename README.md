# eslint-config

ESLint の個人用設定集

※ TypeScript を使う前提で設定されています

|                                                                                                                                      | パッケージ                                                                                       | 設定                                        | 概要                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------- | ----------------------------- |
| [![](https://badge.fury.io/js/@e-chan1007%2Feslint-config-base.svg)](https://www.npmjs.com/package/@e-chan1007/eslint-config-base)   | [@e-chan1007/eslint-config-base](https://www.npmjs.com/package/@e-chan1007/eslint-config-base)   | [/packages/base](./packages/base/index.js)  | すべてに共通する基本設定      |
| [![](https://badge.fury.io/js/@e-chan1007%2Feslint-config-react.svg)](https://www.npmjs.com/package/@e-chan1007/eslint-config-react) | [@e-chan1007/eslint-config-react](https://www.npmjs.com/package/@e-chan1007/eslint-config-react) | [/packages/next](./packages/react/index.js) | React(Next.js) で利用する設定 |
| [![](https://badge.fury.io/js/@e-chan1007%2Feslint-config-vue.svg)](https://www.npmjs.com/package/@e-chan1007/eslint-config-vue)     | [@e-chan1007/eslint-config-vue](https://www.npmjs.com/package/@e-chan1007/eslint-config-vue)     | [/packages/vue](./packages/vue/index.js)    | Vue3(Nuxt3)で利用する設定     |

`@e-chan1007/eslint-config-base`は他の設定が読み込むので直接使用しない。

## 使い方

1. パッケージをインストール

```sh
  npm install -D @e-chan1007/eslint-config-xxx
  yarn add -D @e-chan1007/eslint-config-xxx
```

2. `.eslintrc`に設定を追加

```js
{
  "extends": ["@e-chan1007/xxx"]
}
```
