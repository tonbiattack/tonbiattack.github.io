/**
 * Index of published services. One column, hairline rules, links only.
 */

type Entry = {
  name: string;
  href: string;
  meta: string;
  description: string;
  icon?: string;
  screenshot?: string;
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

type App = {
  name: string;
  href: string;
  icon: string;
  platform: string;
  description: string;
  screenshots: { src: string; alt: string }[];
  downloads: { label: string; href: string; note: string }[];
};

const APPS: App[] = [
  {
    name: "Instant Mic",
    href: "https://github.com/tonbiattack/instant-mic",
    icon: "/apps/instant-mic-icon.png",
    platform: "Android・Windows",
    description:
      "Androidスマホを、同じLANにつないだWindows PCの音声入力キーボードにするアプリです。音声とテキストは外部に送信しません。",
    screenshots: [
      {
        src: "/apps/instant-mic.jpg",
        alt: "大きなマイクボタンと操作説明が並ぶInstant Micの画面",
      },
    ],
    downloads: [
      {
        label: "APK をダウンロード",
        href: "https://github.com/tonbiattack/instant-mic/releases/download/v0.3.0/instant-mic-android.apk",
        note: "v0.3.0・23MB",
      },
      {
        label: "Windows 版",
        href: "https://github.com/tonbiattack/instant-mic/releases/download/v0.3.0/instant-mic-windows-amd64.zip",
        note: "v0.3.0・3.5MB",
      },
      {
        label: "リリース一覧",
        href: "https://github.com/tonbiattack/instant-mic/releases",
        note: "checksum もこちら",
      },
    ],
  },
  {
    name: "Pictobi",
    href: "https://github.com/tonbiattack/fastest-picture-viewer",
    icon: "/apps/pictobi-icon.png",
    platform: "Android",
    description:
      "大量の画像をフォルダ単位で素早く閲覧するAndroid向けの画像ビューアです。起動・復帰・戻る操作で待たせないことを優先しています。",
    screenshots: [
      {
        src: "/apps/pictobi-folders.jpg",
        alt: "PictobiDemoフォルダと12枚の画像が表示されたフォルダ一覧",
      },
      {
        src: "/apps/pictobi-grid.jpg",
        alt: "001から012までの色違いタイルが並ぶグリッド表示",
      },
    ],
    downloads: [
      {
        label: "APK をダウンロード",
        href: "https://github.com/tonbiattack/fastest-picture-viewer/releases/download/v0.2.0/Pictobi-0.2.0.apk",
        note: "v0.2.0・3.7MB",
      },
      {
        label: "リリース一覧",
        href: "https://github.com/tonbiattack/fastest-picture-viewer/releases",
        note: "過去のバージョン",
      },
    ],
  },
];

type Extension = {
  name: string;
  href: string;
  icon: string;
  meta: string;
  description: string;
  screenshot?: string;
};

const EXTENSIONS: Extension[] = [
  {
    name: "Arrow Button Mapper",
    href: "https://chromewebstore.google.com/detail/ejnlggdofblmjagoeijifpjggmgjcibj",
    icon: "/apps/arrow-button-mapper-icon.png",
    meta: "Chrome ウェブストア",
    description:
      "Webページのリンクやボタンを、キーボードの左右キーで辿れるようにするChrome拡張機能です。サイトごとに操作対象を登録できます。",
    screenshot: "/apps/arrow-button-mapper.jpg",
  },
  {
    name: "Regex Tab Keeper",
    href: "https://github.com/tonbiattack/regex-tab-keeper",
    icon: "/apps/regex-tab-keeper-icon.png",
    meta: "GitHub（ストア未公開）",
    description:
      "URLの正規表現に一致するタブだけを残し、それ以外をすべてのウィンドウからまとめて閉じる拡張機能です。実行前に残す・閉じるタブを確認できます。",
  },
  {
    name: "Web State Inspector",
    href: "https://github.com/tonbiattack/web-state-inspector",
    icon: "/apps/web-state-inspector-icon.png",
    meta: "GitHub（ストア未公開）",
    description:
      "Chrome DevToolsに追加する、操作・通信・例外を時系列で集めるローカル専用のデバッグ拡張機能です。収集した内容をAI向けのMarkdownに整形できます。",
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
      className="arrow"
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
            <span className="entry-name">
              {entry.name}
              <Arrow />
            </span>
            <span className="entry-meta">{entry.meta}</span>
            <span className="entry-desc">{entry.description}</span>
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
        <div className="header-inner">
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
        </div>
      </header>

      <main id="main-content">
        <p className="lead">
          自分で作って公開しているサイトとアプリの一覧です。APKはここから直接ダウンロードできます。
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
          <h2 id="apps-title">Android アプリ</h2>
          <ul className="app-list">
            {APPS.map((app) => (
              <li className="app" key={app.name}>
                <div className="app-head">
                  <img
                    className="app-icon"
                    src={app.icon}
                    alt=""
                    width={28}
                    height={28}
                  />
                  <h3 className="app-name">
                    <a href={app.href} target="_blank" rel="noreferrer">
                      {app.name}
                      <Arrow />
                    </a>
                  </h3>
                  <span className="app-platform">{app.platform}</span>
                </div>
                <p className="app-desc">{app.description}</p>
                <div className="app-shots">
                  {app.screenshots.map((shot) => (
                    <img
                      key={shot.src}
                      className="app-shot"
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                    />
                  ))}
                </div>
                <ul className="download-row">
                  {app.downloads.map((dl) => (
                    <li key={dl.href}>
                      <a
                        className={
                          dl.label.startsWith("APK") ? "download-main" : "download"
                        }
                        href={dl.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{dl.label}</span>
                        <span className="download-note">{dl.note}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="extensions-title">
          <h2 id="extensions-title">Chrome 拡張機能</h2>
          <ul className="entry-list">
            {EXTENSIONS.map((ext) => (
              <li key={ext.name}>
                <a
                  className="entry entry-with-icon"
                  href={ext.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="entry-icon"
                    src={ext.icon}
                    alt=""
                    width={28}
                    height={28}
                  />
                  <span className="entry-text">
                    <span className="entry-name">
                      {ext.name}
                      <Arrow />
                    </span>
                    <span className="entry-meta">{ext.meta}</span>
                    <span className="entry-desc">{ext.description}</span>
                    {ext.screenshot ? (
                      <img
                        className="entry-shot"
                        src={ext.screenshot}
                        alt=""
                        loading="lazy"
                      />
                    ) : null}
                  </span>
                </a>
              </li>
            ))}
          </ul>
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
