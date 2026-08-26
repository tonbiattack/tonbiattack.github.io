# Tonbiattack — Developer Portfolio

GitHub Pagesで公開する、Tonbiattackの開発者ポートフォリオです。バックエンド設計、再現可能なデバッグ教材、技術的な検証記録を、Evidence Atelierというエディトリアルなデザイン方針でまとめています。

## Local development

Node.js 22以降とpnpm 10を使用します。

```bash
pnpm install
pnpm dev
```

静的な本番ビルドは次のコマンドで確認できます。

```bash
pnpm build
```

`main` ブランチへのプッシュで、GitHub Actionsが `dist/public` をGitHub Pagesへデプロイします。

## Content policy

このポートフォリオには、実装済みのプロジェクトと確認可能な技術的活動だけを掲載します。非公開ソースコードへのURLや、未確認の連絡先は掲載しません。
