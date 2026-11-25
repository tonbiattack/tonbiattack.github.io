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
    name: "Type Duel",
    href: "https://tonbiattack.github.io/type-duel/",
    meta: "tonbiattack.github.io/type-duel",
    description:
      "TypeScriptの型を読んで、代入できるか一瞬で見抜く短時間パズルゲームです。Duel・Infer・Detectiveの3モード、全147問をコンパイラで検証しています。",
  },
  {
    name: "Query Rush",
    href: "https://tonbiattack.github.io/query-rush/",
    meta: "tonbiattack.github.io/query-rush",
    description:
      "絞り込み前後のテーブルを見て、どのWHEREでそうなったかを4択で当てるSQL認識ゲームです。1問5秒、60秒のタイムアタックで遊べます。",
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

type Download = {
  label: string;
  href: string;
  note: string;
  /** 主要な入手経路。塗りつぶしのボタンで表示する。 */
  primary?: boolean;
};

type App = {
  name: string;
  href: string;
  icon?: string;
  platform: string;
  description: string;
  screenshots: { src: string; alt: string }[];
  downloads: Download[];
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
        href: "https://github.com/tonbiattack/instant-mic/releases/download/v0.5.0/instant-mic-android.apk",
        note: "v0.5.0・22MB",
        primary: true,
      },
      {
        label: "Windows 版",
        href: "https://github.com/tonbiattack/instant-mic/releases/download/v0.5.0/instant-mic-windows-amd64.zip",
        note: "v0.5.0・3.4MB",
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
        href: "https://github.com/tonbiattack/fastest-picture-viewer/releases/download/v0.4.0/Pictobi-0.4.0.apk",
        note: "v0.4.0・4.3MB",
        primary: true,
      },
      {
        label: "リリース一覧",
        href: "https://github.com/tonbiattack/fastest-picture-viewer/releases",
        note: "過去のバージョン",
      },
    ],
  },
  {
    name: "Device Warden",
    href: "https://github.com/tonbiattack/device-warden",
    icon: "/apps/device-warden-icon.png",
    platform: "Windows",
    description:
      "Android端末を人間と複数のAIエージェントで取り合わないよう調整する、タスクトレイ常駐のリース管理ツールです。誰がどの端末を確保しているかを一覧で判断できます。",
    screenshots: [
      {
        src: "/apps/device-warden.jpg",
        alt: "端末・ADB接続状態・利用可否・確保者が並ぶDevice Wardenの一覧画面",
      },
    ],
    downloads: [
      {
        label: "EXE をダウンロード",
        href: "https://github.com/tonbiattack/device-warden/releases/download/v0.2.0/DeviceWarden.exe",
        note: "v0.2.0・22MB",
        primary: true,
      },
      {
        label: "リリース一覧",
        href: "https://github.com/tonbiattack/device-warden/releases",
        note: "SHA256SUMS もこちら",
      },
    ],
  },
  {
    name: "ZipSweep",
    href: "https://github.com/tonbiattack/archive-extract-cleaner",
    icon: "/apps/zipsweep-icon.png",
    platform: "Windows・Microsoft Store",
    description:
      "ZIP・7z・RARと解凍済みフォルダをSHA-256まで照合し、内容が完全一致したフォルダだけをごみ箱への移動候補にするデスクトップアプリです。迷う要素があれば両方を残します。",
    screenshots: [
      {
        src: "/apps/zipsweep.jpg",
        alt: "判定・名前・アーカイブ・解凍済みフォルダ・サイズが並ぶZipSweepのスキャン結果",
      },
    ],
    downloads: [
      {
        label: "Microsoft Store で入手",
        href: "https://apps.microsoft.com/detail/9P1CF06QFZG6",
        note: "自動更新",
        primary: true,
      },
      {
        label: "EXE をダウンロード",
        href: "https://github.com/tonbiattack/archive-extract-cleaner/releases/download/v0.1.0/archive-extract-cleaner.exe",
        note: "v0.1.0・12MB",
      },
      {
        label: "リリース一覧",
        href: "https://github.com/tonbiattack/archive-extract-cleaner/releases",
        note: "過去のバージョン",
      },
    ],
  },
  {
    name: "ZipScope",
    href: "https://github.com/tonbiattack/zip-scope",
    icon: "/apps/zip-scope-icon.png",
    platform: "Windows・Microsoft Store",
    description:
      "ZIP・CBZを解凍せずに、展開済みフォルダと同じ感覚で画像を閲覧するビューアです。中央ディレクトリだけを読み、必要な画像だけをストリーム展開します。",
    screenshots: [
      {
        src: "/apps/zip-scope.jpg",
        alt: "ZIP内の画像を1枚表示し、上部にページ送りと倍率が並ぶZipScopeのビューア画面",
      },
    ],
    downloads: [
      {
        label: "Microsoft Store で入手",
        href: "https://apps.microsoft.com/detail/9PKL9QQXB65R",
        note: "自動更新",
        primary: true,
      },
      {
        label: "ZIP をダウンロード",
        href: "https://github.com/tonbiattack/zip-scope/releases/download/v0.1.0/ZipScope-0.1.0-windows-amd64.zip",
        note: "v0.1.0・6.7MB",
      },
      {
        label: "リリース一覧",
        href: "https://github.com/tonbiattack/zip-scope/releases",
        note: "過去のバージョン",
      },
    ],
  },
  {
    name: "Soundcore Switch",
    href: "https://github.com/tonbiattack/soundcore-switch",
    icon: "/apps/soundcore-switch-icon.png",
    platform: "Android・Windows",
    description:
      "Soundcoreイヤホンのマルチポイント接続先を、純正アプリを開かずに確認・切り替えるアプリです。機種固有のRFCOMMプロトコルを実機で解読して実装しています。",
    screenshots: [],
    downloads: [
      {
        label: "APK をダウンロード",
        href: "https://github.com/tonbiattack/soundcore-switch/releases/download/v0.1.1/app-debug.apk",
        note: "v0.1.1・12MB",
        primary: true,
      },
      {
        label: "リリース一覧",
        href: "https://github.com/tonbiattack/soundcore-switch/releases",
        note: "過去のバージョン",
      },
    ],
  },
  {
    name: "Game Audio Manager",
    href: "https://github.com/tonbiattack/game-audio-manager",
    platform: "Windows",
    description:
      "アプリ・ゲームごとに音声の出力先とミュートを切り替えるPowerShellツールです。GUIから選ぶ方法と、コマンドで指定する方法の両方を用意しています。",
    screenshots: [],
    downloads: [
      {
        label: "ZIP をダウンロード",
        href: "https://github.com/tonbiattack/game-audio-manager/releases/download/v1.0.0/game-audio-manager-v1.0.0.zip",
        note: "v1.0.0・123KB",
        primary: true,
      },
      {
        label: "リリース一覧",
        href: "https://github.com/tonbiattack/game-audio-manager/releases",
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
    name: "GitHub Bulk Cloner",
    href: "https://chromewebstore.google.com/detail/gnahjocpcgihifhdgoabhednldpcdpgg",
    icon: "/apps/github-bulk-cloner-icon.png",
    meta: "Chrome ウェブストア",
    description:
      "GitHubのリポジトリ一覧で欲しいものにチェックを付けると、その場でWindowsの指定フォルダへgit cloneする拡張機能です。Go製のネイティブホストで動作します。",
    screenshot: "/apps/github-bulk-cloner.jpg",
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
          自分で作って公開しているサイトとアプリの一覧です。アプリはここから直接ダウンロードできます。
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
          <h2 id="apps-title">アプリ</h2>
          <ul className="app-list">
            {APPS.map((app) => (
              <li className="app" key={app.name}>
                <div className="app-head">
                  {app.icon ? (
                    <img
                      className="app-icon"
                      src={app.icon}
                      alt=""
                      width={28}
                      height={28}
                    />
                  ) : null}
                  <h3 className="app-name">
                    <a href={app.href} target="_blank" rel="noreferrer">
                      {app.name}
                      <Arrow />
                    </a>
                  </h3>
                  <span className="app-platform">{app.platform}</span>
                </div>
                <p className="app-desc">{app.description}</p>
                {app.screenshots.length > 0 ? (
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
                ) : null}
                <ul className="download-row">
                  {app.downloads.map((dl) => (
                    <li key={dl.href}>
                      <a
                        className={dl.primary ? "download-main" : "download"}
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
