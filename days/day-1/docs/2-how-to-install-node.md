# Node.js と npm のインストール
## Node.js のバージョン管理
### nodebrew のインストール
`$ curl -L git.io/nodebrew | perl - setup`

`$ nodebrew` でヘルプが表示されたらインストール成功

## Node.js のインストール
今回は `v5.11.0` を使います (`v4.x.x` でもOK)

**`v6.0.0` はまだ不安定なので使わないで下さい！**

`v5.11.0` をインストール
`$ nodebrew install-binary v5.11.0`

プロジェクト内 (javascript-workshop) で使うバージョンを指定
`$ nodebrew local v5.11.0`
