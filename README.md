# afterburner

![Node](https://img.shields.io/badge/Node.js-v20-white?labelColor=%2343853d) ![Bun](https://img.shields.io/badge/Bun-v1-white?labelColor=%23fbf0df)

MDV-AP フロントエンドの共通ライブラリです。

## Why afterburner?

- アフターバーナー(afterburner)とは、戦闘機のエンジンから排出されるガスに着火して推力を増加させるシステム
  - フロントエンドのプロジェクト名は戦闘機のコードネームを利用しているので、それに合わせている
- 単語の意味が「追加の推進力」を意味するので、共通ライブラリによるアプリケーションに拡張性をもたらす
- 戦闘機に欠かせないアフターバーナーのように、アプリケーションにとって共通の必要不可欠な部品

## Usage

Node.js のプロジェクトにインストールして利用します。

```bash
# npm
npm install git+http://git-01/bff/afterburner.git#main

# or yarn
yarn add git+http://git-01/bff/afterburner.git#main

# or bun
bun add git+http://git-01/bff/afterburner.git#main
```

## Development

パッケージ管理に [Bun](https://bun.sh/) を利用しています。

```bash
# package install
bun install

# prepare command (only first time)
bun run prepare
```

### Build

packages 内のコードを修正した場合は、ルートディレクトリでライブラリを再ビルドしてください。

```bash
# build web components
bun run build
```

各 packages の `./dist` 配下にビルドされたコードが出力されます。

### Packages

パッケージ毎の詳細は以下のリンク先を参照してください。

- [web-components](packages/web-components/README.md)
- [api-routers](packages/api-routers/README.md)
- [api-services](packages/api-services/README.md)
