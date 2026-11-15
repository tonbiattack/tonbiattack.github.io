# Tonbiattack

公開しているサイト・アプリ・拡張機能へのリンクを 1 ページにまとめた個人サイトです。
サーバーやデータベースを使わず、静的な HTML / CSS / JavaScript として GitHub Pages で配信します。

**[tonbiattack.github.io](https://tonbiattack.github.io/)** · [Issues](https://github.com/tonbiattack/tonbiattack.github.io/issues)

## 収録内容

| セクション       | 内容                                                                 |
| ---------------- | -------------------------------------------------------------------- |
| サイト           | AI Plan Radar、Free Model Radar、Type Rush、UI Rush、Local Memo Diff |
| by Tests         | Go / Python / Java / TypeScript の実行可能ドキュメント教材           |
| アプリ・拡張機能 | Instant Mic、Pictobi、Arrow Button Mapper                            |
| 書いたもの       | Zenn、Qiita、GitHub のリポジトリ                                     |

掲載するのは公開済みの成果物だけです。リンク先の稼働は公開時点で確認しています。

## 構成

```
client/
  index.html        HTML シェル（メタ情報・favicon）
  public/
    mark.png        ヘッダーのロゴ（透過 PNG）
    favicon.png     ファビコン
    404.html        GitHub Pages 用の 404 ページ
  src/
    main.tsx        エントリポイント
    App.tsx         エラーバウンダリとリンク一覧の組み立て
    index.css       スタイル（独自 CSS のみ）
    pages/Home.tsx  リンク一覧（唯一のページ）
```

## 開発

Node.js 22 以上と pnpm 10 を使います。

```sh
git clone https://github.com/tonbiattack/tonbiattack.github.io.git
cd tonbiattack.github.io
pnpm install
pnpm dev          # http://localhost:3000
```

| コマンド       | 内容                               |
| -------------- | ---------------------------------- |
| `pnpm dev`     | 開発サーバー                       |
| `pnpm build`   | 本番ビルド（`dist/public` に出力） |
| `pnpm preview` | ビルド結果をローカルで確認         |
| `pnpm check`   | TypeScript の型検査                |
| `pnpm format`  | Prettier で整形                    |

主な技術は React 19、TypeScript、Vite です。ルーターやUIライブラリは使わず、1 ページ分の
CSS だけで組んでいます。`main` へのプッシュと Pull Request では CI（`.github/workflows/ci.yml`）
が型検査・フォーマット検査・ビルドを実行します。

## リンクの追加・修正

掲載内容は `client/src/pages/Home.tsx` の配列だけで管理しています。サイトを追加するときは
`SITES`、アプリや拡張機能は `APPS` に 1 件追加してください。`by Tests` と `書いたもの` は
`BY_TESTS` とリンク行に直接書いています。

```ts
{
  name: "表示名",
  href: "https://example.com/",
  meta: "補足（ドメインや対応プラットフォーム）",
  description: "何ができるものかを 1〜2 文で。",
}
```

外部リンクはすべて新しいタブで開き、`rel="noreferrer"` を付けています。

## 公開

`main` ブランチへのプッシュで、GitHub Actions（`.github/workflows/deploy.yml`）が
`pnpm build` の出力を GitHub Pages にデプロイします。手動実行は Actions の
「Deploy GitHub Pages」→ Run workflow から行います。

画像を `/mark.png` のようなルート絶対パスで参照しているため、ユーザーページ
（`tonbiattack.github.io`）でのルート配信を前提にしています。プロジェクトページなど
サブパスで配信する場合は `vite.config.ts` に `base` を追加し、`client/index.html` と
`client/src/pages/Home.tsx` のパスを合わせて変更してください。

## ライセンス

[MIT](LICENSE)
