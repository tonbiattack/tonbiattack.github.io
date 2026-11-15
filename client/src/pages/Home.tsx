/**
 * Index of published services. One column, hairline rules, links only.
 */

type Entry = {
  name: string;
  href: string;
  meta: string;
  description: string;
};

const SITES: Entry[] = [
  {
    name: "AI Plan Radar",
    href: "https://tonbiattack.github.io/ai-plan-radar/",
    meta: "tonbiattack.github.io/ai-plan-radar",
    description:
      "AIコーディングサービスの料金・対応モデル・利用枠を、公式の出典と確認日つきで比較できるサイトです。",
  },
  {
    name: "Free Model Radar",
    href: "https://tonbiattack.github.io/free-model-radar/",
    meta: "tonbiattack.github.io/free-model-radar",
    description:
      "無料枠のあるLLM APIを、レート制限・ツール呼び出しの対応・実機での検証状態で比較できるサイトです。",
  },
  {
    name: "Type Rush",
    href: "https://tonbiattack.github.io/type-rush/",
    meta: "tonbiattack.github.io/type-rush",
    description:
      "ひらがなの短文を5問入力し、クリアまでの時間を計るタイピングゲームです。記録はブラウザに保存されます。",
  },
  {
    name: "UI Rush",
    href: "https://tonbiattack.github.io/ui-rush/",
    meta: "tonbiattack.github.io/ui-rush",
    description:
      "操作できるデモを見て、UIコンポーネントの名前を4択で答えるクイズです。用語50語とキーボード操作10問を収録しています。",
  },
  {
    name: "Local Memo Diff",
    href: "https://tonbiattack.github.io/local-memo-diff/",
    meta: "tonbiattack.github.io/local-memo-diff",
    description:
      "ブラウザだけで動く、localStorage保存のメモと行単位Diffツールです。入力内容は外部に送信されません。",
  },
];

const BY_TESTS = [
  { label: "Go", href: "https://tonbiattack.github.io/go-by-tests/" },
  { label: "Python", href: "https://tonbiattack.github.io/python-by-tests/" },
  { label: "Java", href: "https://tonbiattack.github.io/java-by-tests/" },
  { label: "TypeScript", href: "https://tonbiattack.github.io/typescript-by-tests/" },
];

const APPS: Entry[] = [
  {
    name: "Instant Mic",
    href: "https://github.com/tonbiattack/instant-mic/releases",
    meta: "Windows・Android 版",
    description:
      "Androidスマホを、同じLANにつないだWindows PCの音声入力キーボードにするアプリです。音声とテキストは外部に送信しません。",
  },
  {
    name: "Pictobi",
    href: "https://github.com/tonbiattack/fastest-picture-viewer",
    meta: "Android 版",
    description:
      "大量の画像をフォルダ単位で素早く閲覧するAndroid向けの画像ビューアです。",
  },
  {
    name: "Arrow Button Mapper",
    href: "https://chromewebstore.google.com/detail/ejnlggdofblmjagoeijifpjggmgjcibj",
    meta: "Chrome 拡張機能",
    description:
      "Webページのリンクやボタンを、キーボードの左右キーで辿れるようにするChrome拡張機能です。",
  },
];

const WRITING = [
  { label: "Zenn", href: "https://zenn.dev/tonbi_attack" },
  { label: "Qiita", href: "https://qiita.com/tonbi_attack" },
  {
    label: "GitHub のリポジトリ",
    href: "https://github.com/tonbiattack?tab=repositories",
  },
];

function Arrow() {
  return (
    <svg
      className="entry-arrow"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="entry-list">
      {entries.map((entry) => (
        <li key={entry.name}>
          <a className="entry" href={entry.href} target="_blank" rel="noreferrer">
            <span className="entry-text">
              <span className="entry-name">
                {entry.name}
                <Arrow />
              </span>
              <span className="entry-meta">{entry.meta}</span>
              <span className="entry-desc">{entry.description}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>

      <header className="site-header">
        <h1 className="wordmark">
          <img src="/mark.png" alt="" width={26} height={26} />
          Tonbiattack
        </h1>
        <a
          className="header-link"
          href="https://github.com/tonbiattack"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <Arrow />
        </a>
      </header>

      <main id="main-content">
        <p className="lead">
          自分で作って公開しているサイトとアプリの一覧です。ソースコードはGitHubに置いています。
        </p>

        <section aria-labelledby="sites-title">
          <h2 id="sites-title">サイト</h2>
          <EntryList entries={SITES} />
        </section>

        <section aria-labelledby="tests-title">
          <h2 id="tests-title">by Tests</h2>
          <p className="section-desc">
            言語仕様や標準ライブラリの落とし穴を、実行できるテストと並べて読む教材です。テストはリポジトリでそのまま実行できます。
          </p>
          <ul className="link-row">
            {BY_TESTS.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                  <Arrow />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="apps-title">
          <h2 id="apps-title">アプリ・拡張機能</h2>
          <EntryList entries={APPS} />
        </section>

        <section aria-labelledby="writing-title">
          <h2 id="writing-title">書いたもの</h2>
          <ul className="link-row">
            {WRITING.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                  <Arrow />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Daichi Toyooka</span>
        <span>
          ソースコードは{" "}
          <a
            href="https://github.com/tonbiattack/tonbiattack.github.io"
            target="_blank"
            rel="noreferrer"
          >
            MIT ライセンス
          </a>
        </span>
      </footer>
    </div>
  );
}
