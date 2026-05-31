"use client";

import React from "react";

export default function CommunityPage() {
  return (
    <>
      {/* --- 中央フィード（コミュニティ詳細） --- */}
      <main className="main-feed fade-in">
        
        {/* 1. グループヒーロー */}
        <div className="group-hero">
          <div className="hero-cover">
            {/* 宇宙空間のような背景画像が入る想定 */}
          </div>
          <div className="hero-content">
            <div className="hero-top-row">
              <div className="hero-avatar">
                N
              </div>
              <div className="hero-actions">
                <button className="header-icon-btn" style={{border: "1px solid var(--border)"}}>
                  <img src="/icon-kyouyuu.png" alt="Share" className="custom-icon-sm" style={{filter: "brightness(0) invert(0.4)"}} />
                </button>
                <button className="header-icon-btn" style={{border: "1px solid var(--border)"}}>
                  <span style={{fontSize: "20px"}}>⋯</span>
                </button>
                <button className="btn-primary" style={{marginTop: 0}}>
                  ＋ 参加する
                </button>
              </div>
            </div>
            
            <div className="hero-title-row">
              <h2 className="hero-title">NOVA Official</h2>
              <span className="badge-official">公式</span>
            </div>
            <p className="hero-handle">@nova_official</p>
            <p className="hero-desc">
              NOVAの公式コミュニティです。最新情報、スケジュール、プロジェクトなどをお届けします。
            </p>
            <div className="hero-stats">
              <span>メンバー <strong>126,580</strong></span>
              <span>オンライン <strong>2,458</strong></span>
            </div>
          </div>
          
          {/* インナータブ */}
          <div className="inner-tabs">
            <button className="inner-tab active">フィード</button>
            <button className="inner-tab">お知らせ</button>
            <button className="inner-tab">スケジュール</button>
            <button className="inner-tab">メディア</button>
            <button className="inner-tab">プロジェクト</button>
            <button className="inner-tab">チャット</button>
          </div>
        </div>

        {/* 2. ピン留めお知らせ */}
        <div className="pinned-notice">
          <div className="pinned-header">
            <span style={{fontSize: "14px"}}>📌</span> ピン留め
          </div>
          <div className="post-header">
            <div className="post-user-info">
              <div className="post-avatar" style={{width: 32, height: 32, background: "var(--primary)", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px", fontWeight: 700}}>N</div>
              <div className="post-meta">
                <div className="post-author-row">
                  <span className="post-author" style={{fontSize: "14px"}}>NOVA Official</span>
                  <span className="badge-official">公式</span>
                  <span className="post-time">3日前</span>
                </div>
              </div>
            </div>
            <button style={{background:"none", border:"none", cursor:"pointer", color:"var(--text-secondary)"}}>
              <span style={{fontSize:"20px"}}>⋯</span>
            </button>
          </div>
          <p className="notice-title">
            【重要】NOVA WORLD TOUR 日本公演に関するお知らせ
          </p>
          <p className="post-text" style={{fontSize: "14px", marginTop: 0}}>
            チケット先行受付・公演スケジュール・グッズ情報についてまとめました。必ずご確認ください。
          </p>
          <div className="notice-tags">
            <span className="notice-tag">#重要</span>
            <span className="notice-tag">#LIVE</span>
            <span className="notice-tag">#公演情報</span>
          </div>
          <div className="post-actions" style={{borderTop: "none", paddingTop: 0, marginTop: "8px"}}>
            <div className="action-group">
              <button className="action-btn liked">
                <img src="/icon-like.jpg" alt="Like" className="custom-icon-sm" /> 1.2K
              </button>
              <button className="action-btn">
                <img src="/icon-comment.jpg" alt="Comment" className="custom-icon-sm" /> 87
              </button>
            </div>
            <button className="btn-secondary" style={{padding: "6px 12px", fontSize: "12px"}}>続きを読む</button>
          </div>
        </div>

        {/* 3. タイムライン投稿 (Luna_0326) */}
        <div className="post-card">
          <div className="post-header">
            <div className="post-user-info">
              <div className="post-avatar" style={{background: "#FF7DCB", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px", fontWeight: 700}}>L</div>
              <div className="post-meta">
                <div className="post-author-row">
                  <span className="post-author">Luna_0326</span>
                  <span className="level-badge" style={{fontSize:"10px", padding:"2px 6px", marginRight:0}}>L2</span>
                  <span className="post-time">2時間前</span>
                </div>
              </div>
            </div>
            <button style={{background:"none", border:"none", cursor:"pointer", color:"var(--text-secondary)"}}>
              <span style={{fontSize:"20px"}}>⋯</span>
            </button>
          </div>
          <p className="post-text">
            今日のビハインドが最高すぎた... ✨<br/>
            衣装もセットも世界観も全部好きすぎる！<br/>
            <span style={{color: "var(--primary)"}}>#NOVA #Behind #NOVA_WORLD_TOUR</span>
          </p>
          <div style={{display: "flex", gap: "8px", marginBottom: "12px"}}>
            <img src="/icon-event.jpg" alt="Photo" style={{flex: 1, height: "160px", objectFit: "cover", borderRadius: "8px"}} />
            <img src="/icon-event.jpg" alt="Photo" style={{flex: 1, height: "160px", objectFit: "cover", borderRadius: "8px"}} />
            <div style={{flex: 1, height: "160px", background: "var(--primary)", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: 700}}>+2</div>
          </div>
          <div className="post-actions">
            <div className="action-group">
              <button className="action-btn liked">
                <img src="/icon-like.jpg" alt="Like" className="custom-icon-sm" /> 328
              </button>
              <button className="action-btn">
                <img src="/icon-comment.jpg" alt="Comment" className="custom-icon-sm" /> 24
              </button>
            </div>
            <button className="action-btn">
              <img src="/icon-hozon.png" alt="Save" className="custom-icon-sm" />
            </button>
          </div>
        </div>

      </main>

      {/* --- 右ユーティリティパネル --- */}
      <aside className="right-panel fade-in">
        
        {/* 今後のスケジュール */}
        <div className="panel-card">
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px"}}>
            <p className="panel-title" style={{marginBottom: 0}}>今後のスケジュール</p>
            <a className="panel-more" style={{marginTop: 0}}>すべて見る</a>
          </div>
          <div className="schedule-list">
            <div className="schedule-item">
              <div className="schedule-date">
                <span className="date-day">6.01</span>
                <span className="date-time">Sat</span>
              </div>
              <div className="schedule-info">
                <p className="schedule-title">NOVA WORLD TOUR 日本公演</p>
                <p className="schedule-place">東京ドーム</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-date" style={{background: "var(--primary-light)"}}>
                <span className="date-day">6.07</span>
                <span className="date-time">Fri</span>
              </div>
              <div className="schedule-info">
                <p className="schedule-title">リハーサル 公開配信</p>
                <p className="schedule-place">YouTube LIVE</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-date" style={{background: "var(--border)", color: "var(--text-secondary)"}}>
                <span className="date-day">6.14</span>
                <span className="date-time">Fri</span>
              </div>
              <div className="schedule-info">
                <p className="schedule-title">ハイタッチ会 (大阪)</p>
                <p className="schedule-place">インテックス大阪</p>
              </div>
            </div>
          </div>
          <button className="btn-secondary" style={{width: "100%", marginTop: "16px", padding: "10px"}}>
            ＋ スケジュールを追加
          </button>
        </div>

        {/* 進行中のファンプロジェクト */}
        <div className="panel-card">
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px"}}>
            <p className="panel-title" style={{marginBottom: 0}}>進行中のファンプロジェクト</p>
            <a className="panel-more" style={{marginTop: 0}}>すべて見る</a>
          </div>
          <div className="project-list">
            <div className="project-item">
              <div className="project-thumb"></div>
              <div className="project-info">
                <p className="project-title">NOVA 4th Anniversary Project</p>
                <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                  <div className="progress-bar-bg" style={{flex: 1}}><div className="progress-bar-fill" style={{width: "72%"}}></div></div>
                  <span style={{fontSize: "12px", fontWeight: 700, color: "var(--primary)"}}>72%</span>
                </div>
                <div className="project-stats">
                  <span>1,820 / 2,500人参加中</span>
                  <span>終了まで 18日</span>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-thumb" style={{background: "var(--accent-pink)"}}></div>
              <div className="project-info">
                <p className="project-title">広告応援プロジェクト (渋谷駅)</p>
                <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                  <div className="progress-bar-bg" style={{flex: 1}}><div className="progress-bar-fill" style={{width: "45%"}}></div></div>
                  <span style={{fontSize: "12px", fontWeight: 700, color: "var(--primary)"}}>45%</span>
                </div>
                <div className="project-stats">
                  <span>1,125 / 2,500人参加中</span>
                  <span>終了まで 25日</span>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-secondary" style={{width: "100%", marginTop: "16px", padding: "10px"}}>
            ＋ プロジェクトを作成
          </button>
        </div>

        {/* おすすめ関連コミュニティ */}
        <div className="panel-card">
          <p className="panel-title">おすすめ関連コミュニティ</p>
          <div className="community-item">
            <div className="community-icon" style={{background: "#B2BDFF"}}>Y</div>
            <div className="community-info">
              <p className="community-name">Yuseon Dreamers</p>
              <p className="community-members">メンバー 64K</p>
            </div>
            <button className="btn-secondary" style={{padding: "4px 12px", fontSize: "12px"}}>＋ フォロー</button>
          </div>
          <div className="community-item">
            <div className="community-icon" style={{background: "#FF7DCB"}}>F</div>
            <div className="community-info">
              <p className="community-name">NOVA Fan Art</p>
              <p className="community-members">メンバー 38K</p>
            </div>
            <button className="btn-secondary" style={{padding: "4px 12px", fontSize: "12px"}}>＋ フォロー</button>
          </div>
          <a className="panel-more">もっと見る</a>
        </div>

      </aside>
    </>
  );
}
