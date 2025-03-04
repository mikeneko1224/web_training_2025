#!/bin/bash

if [ -f "./.env" ]; then
    # .env から環境変数を読み込む
    source ./.env
    # .npmrc.template をコピーして .npmrc を作成
    \cp -r ./.npmrc.template ./.npmrc
    # .npmrc の _authToken_ を GitHub のアクセストークンに置換
    perl -pi -e "s|PERSONAL_ACCESS_TOKEN|${PERSONAL_ACCESS_TOKEN}|g" ./.npmrc
else
    echo "File .env does not exist."
fi
