# Modern_JavaScript
モダンなJavaScirptを少し学習してみる

<!-- シールド一覧 -->
<p style="display: inline">
  <img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic">
  <img src="https://img.shields.io/badge/-Typescript-007ACC.svg?logo=typescript&style=plastic">
  <img src="https://img.shields.io/badge/-Node.js-339933.svg?logo=node.js&style=plastic">
</p>

## 目次
- [Modern\_JavaScript](#modern_javascript)
  - [目次](#目次)
  - [プロジェクト名](#プロジェクト名)
  - [プロジェクトについて](#プロジェクトについて)
  - [環境](#環境)
  - [ディレクトリ構成](#ディレクトリ構成)
  - [トラブルシューティング](#トラブルシューティング)
    - [TypeScriptで「ブロック スコープの変数を再宣言することはできません。」と言われたら・・・](#typescriptでブロック-スコープの変数を再宣言することはできませんと言われたら)
    - [Github Copilot ショートカットキー\&コマンド一覧](#github-copilot-ショートカットキーコマンド一覧)


## プロジェクト名
モダンなJavaScirptを少し学習してみる


## プロジェクトについて
HTMLレベル2を取得したため、JavaScriptのモダンな書き方を最後に学習する。
コメント等はChat GPTを使用しているため、表現方法が変わったり、冗長になる事もあるが、悪しからず。
自分で考えるよりかは説明は分かりやすいはず。

途中、GitHub Copilot を使ってみたので、さらにコメント構成は変わってる）
・・・GitHub Copilot が便利すぎる。


## 環境
<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->
| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| Node.js              | 22.14.0    |
| JavaScript           | ES6～      |
| TypeScript           | 5.7.3      |


## ディレクトリ構成
Modern_JavaScript  
├── .vscode  
│   ├── launch.json  
│   └── settings.json  
├── 01-value-and-variables  
├── 02-control-structures  
├── 03-functional-programming  
├── 04-object-oriented-programming  
├── 09-asynchronous-programming  
├── 12-iterator-and-generator  
├── 13-type-script  
├── index.js  
├── node_modules  
│   ├── .bin  
│   ├── .package-lock.json  
│   └── typescript  
│       ├── bin  
│       ├── lib  
│       ├── LICENSE.txt  
│       ├── package.json  
│       ├── README.md  
│       ├── SECURITY.md  
│       └── ThirdPartyNoticeText.txt  
├── package-lock.json  
├── package.json  
├── README.md  
└── tsconfig.json  


## トラブルシューティング
### TypeScriptで「ブロック スコープの変数を再宣言することはできません。」と言われたら・・・
- tsconfig.json の `moduleDetection` オプションを `force` に変更する。
- [参考サイト](https://tomosta.jp/2024/01/ts-block-scope-error/)

### Github Copilot ショートカットキー&コマンド一覧

| Make                      | 実行する処理                      | 備考             |
| ------------------------- | --------------------------------- | ---------------- |
| Ctrl + Shift + i          | Chat View の表示/非表示           | -                |
| Ctrl + i                  | コード内から Chat View の表示     | Esc キーで閉じる |
| @terminal Gitにpushしたい | Chat View 上で CLI コマンドの生成 | -                |
| Tab                       | コード修正中に保管を提案          | -                |
| TabからのCtrl + →         | 提案された保管の一部だけ承諾      | 便利             |



<!-- READMEの作成方法のドキュメントのリンク -->
<br />
<div align="right">
    <a href="https://qiita.com/shun198/items/c983c713452c041ef787"><strong>READMEの作成方法 »</strong></a>
</div>
