# 001

コンポーネントを格納するディレクトリを以下のように分けたパターン。

- `basics`
- `components`
- `containers`
- `pages`

## コンポーネントの分類

各ディレクトリに格納するコンポーネントの分類は以下の通り。

### basic（`basics`ディレクトリのコンポーネント）

単体で機能が成立するコンポーネント。

例)

- ロゴ
- ボタン
- アイコン
- 検索入力

### component（`component`ディレクトリのコンポーネント）

basic、または component を組み合わせたり、協調動作（コンポーネント間での通信など）させるコンポーネント。

例)

- フォーム（入力欄やボタンのセット）
- メニューのアイコンと、クリックで開くメニューのセット
- リストとリストアイテム

### containers（`containers`ディレクトリのコンポーネント）

以下の特徴を持つコンポーネント

- Store を直接参照できる
- データの読み込みや変更を行える
- basic と component にデータを渡す
- component 同士を協調させる
- component と basic を含むことができる
- component や basic のレイアウトを行う

### pages（`pages`ディレクトリのコンポーネント）

Vue Router の `routes`に指定するコンポーネント（ルーティング用のコンポーネント）。

- Store や Router を直接参照できる
- データの読み込みや変更を行える
- component、basic や containers を含むことができる
- containers レイアウトを行う

## サンプルページで利用されているコンポーネントの分類

今回のサンプルページで利用されているコンポーネントの分類は以下の通り。

<img src="./media/app-view.png" alt="アプリケーションの画面">

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
