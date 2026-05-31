"use client";

import React from "react";

export default function NotificationsPage() {
  return (
    <>
      <main className="main-feed fade-in">
        <div className="notification-container">
          {/* ヘッダー/フィルタ */}
          <div className="notification-header">
            <button className="notification-filter active">すべて</button>
            <button className="notification-filter">
              未読 <span className="filter-badge">12</span>
            </button>
            <button className="notification-filter">いいね</button>
            <button className="notification-filter">コメント</button>
            <button className="notification-filter">フォロー</button>
          </div>

          {/* 今日 */}
          <div className="notification-date-group">今日</div>
          
          <div className="notification-item unread">
            <div className="unread-dot"></div>
            <div className="notification-icon-wrapper">
              <img src="/icon-mypage.png" alt="User" className="notification-avatar" />
              <div className="notification-type-icon" style={{background: "var(--accent-pink)"}}>❤️</div>
            </div>
            <div className="notification-content">
              <p className="notification-text">
                <strong>Luna_0326</strong> さんがあなたの投稿に「いいね」しました。
              </p>
              <p className="notification-quote">#NOVA #NOVA_Stage</p>
              <p className="notification-time">10分前</p>
            </div>
            <img src="/icon-event.jpg" alt="Target" className="notification-target-img" />
          </div>

          <div className="notification-item unread">
            <div className="unread-dot"></div>
            <div className="notification-icon-wrapper">
              <div className="notification-avatar" style={{background: "#301F6E", color: "white"}}>S</div>
              <div className="notification-type-icon" style={{background: "#4A90E2"}}>💬</div>
            </div>
            <div className="notification-content">
              <p className="notification-text">
                <strong>Starlight_07</strong> さんがあなたの投稿にコメントしました。
              </p>
              <p className="notification-quote">「とても素敵な写真です！推しが輝いてる...✨」</p>
              <p className="notification-time">25分前</p>
            </div>
            <img src="/icon-event.jpg" alt="Target" className="notification-target-img" />
          </div>

          <div className="notification-item">
            <div className="notification-icon-wrapper">
              <div className="notification-avatar" style={{background: "var(--primary)", color: "white"}}>N</div>
              <div className="notification-type-icon" style={{background: "var(--primary)"}}>👑</div>
            </div>
            <div className="notification-content">
              <p className="notification-text">
                <strong>NOVA Official</strong> さんがコミュニティ「NOVA WORLD TOUR 日本公演」にあなたをメンションしました。
              </p>
              <p className="notification-quote">@hanni_bear 素敵なレポートをシェアしてくれてありがとう！</p>
              <p className="notification-time">1時間前</p>
            </div>
            <div style={{color: "var(--text-secondary)"}}>＞</div>
          </div>

          {/* 昨日 */}
          <div className="notification-date-group">昨日</div>
          
          <div className="notification-item">
            <div className="notification-icon-wrapper">
              <div className="notification-avatar" style={{background: "var(--primary-light)", color: "var(--primary)"}}>Y</div>
              <div className="notification-type-icon" style={{background: "#50E3C2"}}>👤</div>
            </div>
            <div className="notification-content">
              <p className="notification-text">
                <strong>Yuseon Dreamers</strong> さんがあなたをフォローしました。
              </p>
              <p className="notification-time">昨日 18:42</p>
            </div>
            <button className="btn-action-secondary">フォロー返し</button>
          </div>

          <div className="notification-item">
            <div className="notification-icon-wrapper">
              <div className="notification-avatar" style={{background: "var(--primary)", color: "white"}}>📅</div>
            </div>
            <div className="notification-content">
              <p className="notification-text">
                <strong>NOVA WORLD TOUR in OSAKA</strong> の開催リマインダー (D-1)
              </p>
              <p className="notification-quote">開催日時：2025.6.01 (土) 17:00</p>
              <p className="notification-time">昨日 09:00</p>
            </div>
            <button className="btn-action-secondary">詳細を見る</button>
          </div>
        </div>
      </main>

      {/* 右パネル */}
      <aside className="right-panel fade-in">
        <div className="panel-card">
          <p className="panel-title">通知サマリー</p>
          <div style={{marginBottom: "24px"}}>
            <span style={{fontSize: "14px", color: "var(--text-secondary)"}}>未読通知</span>
            <div style={{fontSize: "32px", fontWeight: 700, color: "var(--accent-pink)", display: "flex", alignItems: "baseline", gap: "4px"}}>
              12 <span style={{fontSize: "14px", color: "var(--text-primary)"}}>件</span>
            </div>
          </div>
          
          <div className="summary-list">
            <div className="summary-list-item">
              <span>❤️ いいね</span><span>5</span>
            </div>
            <div className="summary-list-item">
              <span>💬 コメント</span><span>3</span>
            </div>
            <div className="summary-list-item">
              <span>👤 フォロー</span><span>2</span>
            </div>
            <div className="summary-list-item">
              <span>📅 イベント</span><span>2</span>
            </div>
          </div>
        </div>

        <div className="panel-card">
          <p className="panel-title">クイックアクション</p>
          <button className="btn-primary" style={{width: "100%", padding: "12px", marginBottom: "12px"}}>
            すべて既読にする
          </button>
          <button className="btn-secondary" style={{width: "100%", padding: "12px", display: "flex", justifyContent: "center", gap: "8px"}}>
            <span>⚙️</span> 通知設定
          </button>
        </div>

        <div className="panel-card">
          <p className="panel-title">通知設定の概要</p>
          <div className="settings-list">
            <div className="settings-item">
              <span>🔔 プッシュ通知</span>
              <div className="toggle-switch"></div>
            </div>
            <div className="settings-item">
              <span>✉️ メール通知</span>
              <div className="toggle-switch"></div>
            </div>
            <div className="settings-item">
              <span>⚠️ 重要なお知らせ</span>
              <div className="toggle-switch"></div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
