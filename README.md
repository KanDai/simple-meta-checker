## Simple Meta Checker
指定したURLの<head>内の要素やH1を取得して一括でチェックできるツールです。

Ajaxを使用して情報を取得するので、制限の掛かった開発環境でも使用できます。別ドメインのサイトの情報は取得できません。


### 使い方

1. `docs` フォルダを任意の名前にリネーム後、サーバーにアップしてブラウザでアクセスしてください。`sample` フォルダは使いません。
2. テキストエリアにチェックしたいURLを入力してください。改行で複数入力可能です。絶対パス/ルートパス/相対パスで入力できます。(1000件まで入力可能)
3. 取得したい情報をチェックして `check` を押します。
初期でチェックされてるのは、個人的によく使うやつです。
4. 結果が表示されます
    - 赤は要素が存在しない
    - 黄色は存在するけど未設定


### デモサイト

GitHub Pagesでデモサイトを作っています。
https://kandai.github.io/simple-meta-checker/

4つほどサンプルのHTMLを用意してますので、下記のように入力して試してみてください。

```
https://kandai.github.io/simple-meta-checker/sample/01.html
https://kandai.github.io/simple-meta-checker/sample/02.html
https://kandai.github.io/simple-meta-checker/sample/03.html
https://kandai.github.io/simple-meta-checker/sample/04.html
```


### ファイル構成
`docs` 以外は開発用のファイルです。
`docs/sample` はデモ用です。


### 動作環境

Chromeでしか動作確認してません。
ブラウザ幅は広いほうが見やすいです。


##＃ 注意事項

ツールの性質上、サイトに負荷をかけることも可能なので、アクセス制限をかけるなど、注意して使用してください。
このツールを使用して起きた問題に関しては、責任を負いません。
