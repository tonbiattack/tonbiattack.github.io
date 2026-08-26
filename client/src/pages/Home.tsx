/**
 * Evidence Atelier: an editorial portfolio that treats engineering work as evidence.
 * Palette: archive paper, ink, Signal Teal, and a restrained vermilion annotation.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  ExternalLink,
  Github,
  MoveRight,
} from "lucide-react";

const PROJECTS = [
  {
    number: "W-01",
    title: "Task Management API",
    type: "Private implementation",
    description:
      "ワークフローを扱うタスク管理REST API。Go、Gin、GORM、MySQLによる境界の明確なバックエンド設計を継続的に検証しています。",
    stack: ["Go", "Gin", "GORM", "MySQL"],
    image: "/manus-storage/tonbi-work-api-architecture_0b5b5a28.png",
    href: "",
    note: "source / private",
  },
  {
    number: "W-02",
    title: "Arrow Button Mapper",
    type: "Chrome extension",
    description:
      "Webページのリンクとボタンを、キーボードの矢印キーで辿れるようにするChrome拡張機能。ブラウジングの操作境界を小さくしました。",
    stack: ["JavaScript", "Chrome Extension", "MV3"],
    image: "/manus-storage/tonbi-work-debugging_e9604acd.png",
    href: "https://github.com/tonbiattack/arrow-button-mapper",
    note: "source / public",
  },
  {
    number: "W-03",
    title: "Debugging Labs",
    type: "Learning repositories",
    description:
      "失敗を観測し、原因を切り分け、最小修正を回帰テストで固定する。再現可能な小規模デバッグ教材を複数の言語・フレームワークで作っています。",
    stack: ["Java", "Spring", "TypeScript", "Rust"],
    image: "/manus-storage/tonbi-hero-field-notes_2c3e2fb5.png",
    href: "https://github.com/tonbiattack",
    note: "collection / public",
  },
];

const NOTE_ITEMS = [
  {
    number: "N-01",
    title: "Failure-first debugging",
    copy: "再現、観測、仮説、最小修正、回帰確認を一連の記録として残す。",
  },
  {
    number: "N-02",
    title: "Backend boundaries",
    copy: "API、ORM、トランザクション、非同期処理の境界条件を小さな検証に分解する。",
  },
  {
    number: "N-03",
    title: "Technical writing",
    copy: "実装の結論だけでなく、判断に使った証拠と前提を読める形に編集する。",
  },
];

function CornerMark() {
  return (
    <svg className="corner-mark" viewBox="0 0 88 88" aria-hidden="true">
      <path d="M8 45H45V8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M58 80V43H80" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="52" cy="36" r="4" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Tonbiattack トップへ">
          <img
            src="/manus-storage/tonbi-mark_3064029f.png"
            alt=""
            className="brand-mark"
          />
          <span>Tonbiattack</span>
        </a>

        <nav className="top-nav" aria-label="ページ内ナビゲーション">
          <a href="#works">Works</a>
          <a href="#notes">Notes</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-github" href="https://github.com/tonbiattack" target="_blank" rel="noreferrer">
          <Github aria-hidden="true" size={16} />
          <span>GitHub</span>
          <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <aside className="hero-index" aria-label="このページの構成">
            <span className="index-label">INDEX</span>
            <span>01 / Evidence</span>
            <span>02 / Works</span>
            <span>03 / Notes</span>
          </aside>

          <div className="hero-copy">
            <p className="eyebrow"><span /> ENGINEERING FIELD NOTES — 2026</p>
            <h1 id="hero-title">
              実装を、<br />
              <em>再現可能な</em><br />
              知見に変える。
            </h1>
            <p className="hero-summary">
              Tonbiattackの開発ポートフォリオです。バックエンド設計、デバッグ教材、
              日々の検証記録を通して、なぜその実装を選んだのかまで公開します。
            </p>
            <div className="hero-actions">
              <a className="action-primary" href="#works">
                制作物を読む <MoveRight aria-hidden="true" size={18} />
              </a>
              <a className="action-quiet" href="#notes">
                記録について <ArrowDownRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          <figure className="hero-figure">
            <img
              src="/manus-storage/tonbi-hero-field-notes_2c3e2fb5.png"
              alt="技術的なフィールドノートと設計メモを描いた抽象ビジュアル"
            />
            <figcaption>
              <span>FIELD NOTE / 001</span>
              <span>OBSERVE → VERIFY → SHARE</span>
            </figcaption>
            <div className="hero-stamp">VERIFIED<br />IN PUBLIC</div>
            <CornerMark />
          </figure>

          <div className="hero-footnote">
            <span className="footnote-rule" />
            <p>設計の決定を、結果だけで終わらせない。</p>
          </div>
        </section>

        <section className="profile-band" aria-label="ポートフォリオについて">
          <p className="section-code">00 / PROFILE</p>
          <div>
            <p className="profile-lead">
              <strong>Goを中心に、</strong>APIとデータの境界を丁寧に設計します。小さな失敗を
              テストに閉じ込め、次の実装に使える記録へ変換することを大切にしています。
            </p>
            <div className="profile-meta">
              <span>Focus / Backend systems</span>
              <span>Practice / Failure-first debugging</span>
              <span>Base / Japan</span>
            </div>
          </div>
        </section>

        <section className="works-section" id="works" aria-labelledby="works-title">
          <div className="section-heading">
            <div>
              <p className="section-code">01 / SELECTED WORK</p>
              <h2 id="works-title">作ったもの、<br />検証したこと。</h2>
            </div>
            <p className="section-intro">公開できる範囲で、用途・技術・設計の焦点を短く記録しています。</p>
          </div>

          <div className="work-list">
            {PROJECTS.map((project) => (
              <article className="work-card" key={project.number}>
                <div className="work-number">{project.number}</div>
                <div className="work-image-wrap">
                  <img src={project.image} alt="" className="work-image" />
                  <span className="image-type">{project.type}</span>
                </div>
                <div className="work-copy">
                  <p className="work-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="work-bottom">
                    <ul className="stack-list" aria-label={`${project.title} の技術`}> 
                      {project.stack.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    {project.href ? (
                      <a className="source-link" href={project.href} target="_blank" rel="noreferrer">
                        {project.note} <ExternalLink aria-hidden="true" size={15} />
                      </a>
                    ) : (
                      <span className="source-link source-private">{project.note}</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a className="all-work-link" href="https://github.com/tonbiattack?tab=repositories" target="_blank" rel="noreferrer">
            すべてのリポジトリを見る <ArrowUpRight aria-hidden="true" size={20} />
          </a>
        </section>

        <section className="notes-section" id="notes" aria-labelledby="notes-title">
          <div className="notes-visual" aria-hidden="true">
            <span>LOG</span><span>TRACE</span><span>FIX</span><span>TEST</span>
          </div>
          <div className="notes-content">
            <p className="section-code">02 / TECHNICAL NOTES</p>
            <h2 id="notes-title">失敗から読む、<br />実装の輪郭。</h2>
            <p className="notes-intro">
              技術記事と学習用リポジトリでは、エラーを再現し、観測可能な事実から原因を狭める過程を残しています。
            </p>
            <div className="notes-list">
              {NOTE_ITEMS.map((note) => (
                <div className="note-row" key={note.number}>
                  <span>{note.number}</span>
                  <div>
                    <h3>{note.title}</h3>
                    <p>{note.copy}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="notes-link" href="https://github.com/tonbiattack" target="_blank" rel="noreferrer">
              公開中のノートと教材を見る <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="section-code">03 / CONTACT</p>
          <div className="contact-grid">
            <h2 id="contact-title">気になる記録が<br /><em>あれば、辿ってください。</em></h2>
            <div className="contact-links">
              <a href="https://github.com/tonbiattack" target="_blank" rel="noreferrer">
                <Github aria-hidden="true" size={19} />
                <span>GitHub profile</span><ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a href="https://github.com/tonbiattack?tab=repositories" target="_blank" rel="noreferrer">
                <Braces aria-hidden="true" size={19} />
                <span>Public repositories</span><ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <p>連絡先は準備中です。GitHubプロフィールから公開中のプロジェクトをご覧ください。</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div><Braces aria-hidden="true" size={16} /> <span>TONBIATTACK / FIELD NOTES</span></div>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
