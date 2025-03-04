const config = {
    plugins: [
        require('@trivago/prettier-plugin-sort-imports'), // importをソートする
        require('prettier-plugin-tailwindcss'), // tailwindcssのクラス名を整形する
    ],
    tailwindConfig: './tailwind.config.js', // tailwind.config.jsのパス
    tailwindFunctions: ['clsx'], // tailwindcssの関数
    importOrder: [
        '^(react/(.*)$)|^(react$)',
        '^(next/(.*)$)|^(next$)',
        '<THIRD_PARTY_MODULES>',
        '',
        '^types$',
        '^@local/(.*)$',
        '^@/config/(.*)$',
        '^@/lib/(.*)$',
        '^@/components/(.*)$',
        '^@/styles/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: false, // importOrderのグループごとに改行するか
    importOrderSortSpecifiers: true, // importOrderのグループ内でソートするか
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'], // importOrderでパースするプラグイン
    tabWidth: 4, // タブの幅
    semi: false, // セミコロンを付けない
    singleQuote: true, // シングルクォートにする
    jsxSingleQuote: true, // JSXでもシングルクォートにする
    arrowParens: 'always', // アロー関数の引数を常にカッコで囲む
    trailingComma: 'es5', // 末尾のカンマをES5方式にする
}

module.exports = config
