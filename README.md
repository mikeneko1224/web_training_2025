# web_training_2024
 2024年度のweb版研修に使用するリポジトリ

研修の進め方に関しては[研修の進め方](https://www.notion.so/link-u/c73cb27e1409465b9e5bc9d7c02b554c)を参照してください。

<!-- TOC depthFrom:2 -->

-   [1. 必要な開発環境](#1-必要な開発環境)
    - [1.1. Visual Studio CodeのExtension](#11-visual-studio-codeのextension)
    - [1.2. node](#12-node)
-   [2. 動かし方](#2-動かし方)
    -   [2.1. git clone](#21-git-clone)
    -   [2.2. Github アクセストークンの発行 (Link-U リポジトリで管理している npm ライブラリを使えるようにするために必要)](#22-github-アクセストークンの発行-link-u-リポジトリで管理している-npm-ライブラリを使えるようにするために必要)
    -   [2.3. npm から Github アクセストークンを使えるようにする](#23-npm-から-github-アクセストークンを使えるようにする)
    -   [2.4. パッケージインストールとProtoのコンパイル](#24-パッケージインストールとProtoのコンパイル)
    -   [2.5. ローカルでの開発](#25-ローカルでの開発)
-   [3. srcディレクトリの構成](#3-srcディレクトリの構成)
    - [3.1 実装方針](#31-実装方針)

<!-- /TOC -->

## 1. 必要な開発環境
### 1.1. Visual Studio CodeのExtension
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 1.2. Node

- node.js 20系

voltaがインストールされていない人は以下コマンドでインストール
```bash
# install Volta
curl https://get.volta.sh | bash
#バージョン確認(この前にターミナルを再起動）
volta -v

# install Node(@latestをつけることで最新版のNodeが入ります）
volta install node@latest

node -v
#v20.11.1
npm -v
#10.2.4(存在しなければvolta install npm)
```

<br/>

## 2. 動かし方

自分のディレクトリのForkして使用してください。[参考ページ](https://qiita.com/morioka1206/items/6f777c060b88f4a7f3ce)
### 2.1. git clone

```bash
git clone git@github.com:{自分のアカウント名}/web_training_2024.git
cd web_training_2024
git submodule update --init --recursive
```

<br/>

### 2.2. Github アクセストークンの発行 (Link-U リポジトリで管理している npm ライブラリを使えるようにするために必要)

メンターor担当者にGithubアクセストークンを発行してもらってください。

<br/>

### 2.3. npm から Github アクセストークンを使えるようにする

プロジェクトのルートに`.env` を作成して以下のように修正します

```
PERSONAL_ACCESS_TOKEN=${GITHUB_TOKEN}
```

<br/>

### 2.4. パッケージインストールとProtoのコンパイル

```
npm run setup
```

<br/>

### 2.5. ローカルでの開発

```bash
## ローカルの next.js の API の向き先をステージングサーバーにして開発
#  ↓のコマンドを実行して http://localhost:3000 にアクセスする
npm run dev

> my-app @0.1.0 dev
> cp env/.env.local .env.development.local && next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

<br/>

## 3. srcディレクトリの構成
<pre>
.
├── api
│   ├── api-client.ts
│   ├── api-error.ts
│   └── endpoint.ts
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   └── layouts
├── features
│   └── top
│       ├── api
│       ├── components
│       │   ├── index.tsx
│       │   └── layouts
│       └── models
├── models
└── utils
    ├── images.ts
    └── mocks.ts
</pre>

### 3.1. 実装方針

全画面共通のコンポーネント・ロジックは直下のディレクトに実装。各画面固有のコンポーネント、ロジックはfeaturesディレクトリ内に個別実装
