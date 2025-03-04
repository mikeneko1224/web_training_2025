#!/bin/bash

## proto から js と ts を生成するシェルスクリプト
# 前提:
#     npm install
#
# 使い方:
#     npm run protoc
#
# 生成したファイルの確認:
#    ls -lh generated/

set -eu
set -o pipefail

## 生成先のディレクトリを用意
rm -rf src/generated
mkdir -p src/generated

## proto ファイルから js ファイルを生成
npx pbjs \
    --no-verify \
    --no-convert \
    --no-delimited \
    --sparse \
    --no-create \
    -t static-module \
    -w es6 \
    -o src/generated/protocol.js $(find ./proto -type f -name *.proto | sort)  ## 環境によって find の並び順が狂わないように sort している

## 生成 js に対する型定義ファイル (ts) を生成
npx pbts -o src/generated/protocol.d.ts src/generated/protocol.js
