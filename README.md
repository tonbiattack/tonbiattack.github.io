# Tonbiattack

公開しているサイト・アプリ・拡張機能へのリンクを 1 ページにまとめた個人サイトです。
サーバーやデータベースを使わず、静的な HTML / CSS / JavaScript として GitHub Pages で配信します。

**[tonbiattack.github.io](https://tonbiattack.github.io/)** · [Issues](https://github.com/tonbiattack/tonbiattack.github.io/issues)

## 収録内容

| セクション      | 内容                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| サイト          | AI Plan Radar、Free Model Radar、Type Rush、UI Rush、Type Duel、Query Rush、Local Memo Diff          |
| by Tests        | Go / Python / Java / TypeScript の実行可能ドキュメント教材                                           |
| アプリ          | Instant Mic、Pictobi、Device Warden、Archive Extract Cleaner、Game Audio Manager（ダウンロード付き） |
| Chrome 拡張機能 | Arrow Button Mapper                                                                                  |
| 書いたもの      | Zenn、Qiita、GitHub のリポジトリ                                                                     |

掲載するのは公開済みの成果物だけです。リンク先の稼働は公開時点で確認しています。
ただし、自分で見て「これは微妙だ」と判断したものは、公開済みでも載せません。
一覧は網羅ではなく、人に見せたいものだけを選んでいます。

配布物は GitHub Releases の URL を直接指定しています（`Home.tsx` の `APPS[].downloads`）。
バージョンを上げたら、この URL と `note` のサイズ表記を更新してください。

## 構成

```
client/
  index.html        HTML シェル（メタ情報・favicon）
  public/
    mark.png        ヘッダーのロゴ（透過 PNG）
    favicon.png     ファビコン
    404.html        GitHub Pages 用の 404 ページ
    apps/           アプリ・拡張機能のアイコンとスクリーンショット
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
`SITES`、アプリは `APPS`、Chrome 拡張機能は `EXTENSIONS` に 1 件追加してください。
`by Tests` と `書いたもの` は `BY_TESTS` と `WRITING` に直接書いています。

```ts
// SITES / EXTENSIONS の要素
{
  name: "表示名",
  href: "https://example.com/",
  meta: "補足（ドメインや公開先）",
  description: "何ができるものかを 1〜2 文で。",
}

// APPS の要素（アイコンとスクリーンショットは client/public/apps/ に置く）
{
  name: "表示名",
  href: "https://github.com/...",
  icon: "/apps/name-icon.png", // 省略可
  platform: "Android",
  description: "何ができるものかを 1〜2 文で。",
  screenshots: [{ src: "/apps/name.jpg", alt: "画面の説明" }], // 空配列なら非表示
  downloads: [{ label: "APK をダウンロード", href: "...", note: "v1.0.0・4MB" }],
}
```

外部リンクはすべて新しいタブで開き、`rel="noreferrer"` を付けています。
画像は長辺 320〜420px の JPEG / PNG に縮小し、`loading="lazy"` を付けています。

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
