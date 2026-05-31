"use client";

import React from "react";

export default function MyPage() {
  return (
    <>
      <main className="main-feed fade-in">
        {/* 1. プロフィールヘッダー */}
        <div className="mypage-hero">
          <div className="mypage-cover"></div>
          
          <div className="mypage-profile-section">
            <div className="mypage-avatar-wrapper">
              <img src="/icon-mypage.png" alt="Profile" className="mypage-avatar" style={{background: "white"}} />
              <button className="mypage-camera-btn">📷</button>
            </div>
            
            <div className="mypage-info-top">
              <div>
                <div className="mypage-name-row">
                  <h2 className="mypage-name">Luna_0326</h2>
                  <button className="btn-edit-profile">✏️ 編集</button>
                </div>
                <div className="mypage-handle-row">
                  <span className="mypage-handle">@luna0326_jp</span>
                  <span className="level-badge">L3 夢見る心</span>
                </div>
                <p className="mypage-bio">
                  NOVAと一緒にいる時間が一番幸せ✨<br/>
                  <span style={{color: "var(--primary)"}}>#NOVA #NOVA_WORLD_TOUR #NOVASTAGE</span>
                </p>
                
                <div className="mypage-stats-row">
                  <div className="mypage-stat-item">
                    <span className="mypage-stat-val">128</span>
                    <span className="mypage-stat-label">投稿</span>
                  </div>
                  <div className="mypage-stat-item">
                    <span className="mypage-stat-val">1.2K</span>
                    <span className="mypage-stat-label">フォロワー</span>
                  </div>
                  <div className="mypage-stat-item">
                    <span className="mypage-stat-val">186</span>
                    <span className="mypage-stat-label">フォロー中</span>
                  </div>
                  <div className="mypage-stat-item">
                    <span className="mypage-stat-val">24.8K</span>
                    <span className="mypage-stat-label">いいね</span>
                  </div>
                </div>

                <div style={{marginBottom: "8px", fontSize: "13px", fontWeight: 700, color: "var(--text-secondary)"}}>推しグループ・メンバー</div>
                <div className="mypage-oshi-tags">
                  <span className="oshi-tag">
                    <div className="oshi-tag-icon">N</div>
                    NOVA Official
                  </span>
                  <span className="oshi-tag" style={{borderColor: "var(--primary-light)", color: "var(--text-primary)", background: "var(--surface)"}}>
                    <div className="oshi-tag-icon" style={{background: "var(--primary-light)"}}>Y</div>
                    Yuseon (ユソン)
                  </span>
                  <span className="oshi-tag" style={{borderColor: "var(--accent-pink)", color: "var(--text-primary)", background: "var(--surface)"}}>
                    <div className="oshi-tag-icon" style={{background: "var(--accent-pink)"}}>F</div>
                    NOVA Fan Art
                  </span>
                  <button className="btn-add-oshi">＋ 追加</button>
                </div>
              </div>

              <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                <button className="btn-primary" style={{marginTop: 0}}>プロフィールを編集</button>
                <button className="btn-secondary">プロフィールをシェア</button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. コンテンツエリア */}
        <div className="mypage-content">
          <div className="mypage-tabs">
            <button className="mypage-tab active">投稿</button>
            <button className="mypage-tab">保存</button>
            <button className="mypage-tab">参加イベント</button>
            <button className="mypage-tab">コレクション</button>
            <button className="mypage-tab">トレード履歴</button>
            <button className="mypage-tab">アクティビティ</button>
          </div>
          
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px"}}>
            <div style={{display: "flex", gap: "12px"}}>
              <button className="btn-secondary" style={{padding: "4px 16px", borderRadius: "20px", fontSize: "13px", background: "var(--primary)", color: "white"}}>すべて</button>
              <button className="btn-secondary" style={{padding: "4px 16px", borderRadius: "20px", fontSize: "13px"}}>画像</button>
              <button className="btn-secondary" style={{padding: "4px 16px", borderRadius: "20px", fontSize: "13px"}}>動画</button>
              <button className="btn-secondary" style={{padding: "4px 16px", borderRadius: "20px", fontSize: "13px"}}>ファンアート</button>
            </div>
            <div style={{display: "flex", gap: "12px"}}>
              <span style={{fontSize: "13px", color: "var(--text-secondary)", display: "flex", alignItems: "center"}}>新しい順 ▼</span>
              <span style={{fontSize: "13px", color: "var(--text-secondary)", display: "flex", alignItems: "center"}}>⚙️ フィルター</span>
            </div>
          </div>

          <div className="mypage-grid">
            <div className="grid-item">
              <div className="grid-item-img-wrapper">
                <img src="/icon-event.jpg" alt="Post" className="grid-item-img" />
                <span className="grid-item-badge">1/3</span>
              </div>
              <div className="grid-item-content">
                <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px"}}>
                  <img src="/icon-mypage.png" alt="Avatar" style={{width: 16, height: 16, borderRadius: "50%"}} />
                  <span style={{fontSize: "11px", fontWeight: 700}}>Luna_0326</span>
                  <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>1時間前</span>
                </div>
                <p className="grid-item-title">今日のファンアート✨</p>
                <p className="grid-item-tags">#NOVA #FanArt</p>
                <div className="grid-item-stats">
                  <span>❤️ 128</span>
                  <span>💬 18</span>
                </div>
              </div>
            </div>

            <div className="grid-item">
              <div className="grid-item-img-wrapper" style={{background: "var(--primary)"}}>
                <img src="/icon-event.jpg" alt="Post" className="grid-item-img" style={{filter: "brightness(0.7)"}} />
                <span className="grid-item-badge">1/6</span>
              </div>
              <div className="grid-item-content">
                <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px"}}>
                  <img src="/icon-mypage.png" alt="Avatar" style={{width: 16, height: 16, borderRadius: "50%"}} />
                  <span style={{fontSize: "11px", fontWeight: 700}}>Luna_0326</span>
                  <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>2日前</span>
                </div>
                <p className="grid-item-title">NOVA WORLD TOUR 参戦レポ💜</p>
                <p className="grid-item-tags">#NOVA_WORLD_TOUR</p>
                <div className="grid-item-stats">
                  <span>❤️ 256</span>
                  <span>💬 32</span>
                </div>
              </div>
            </div>

            <div className="grid-item">
              <div className="grid-item-img-wrapper" style={{background: "var(--accent-pink)"}}>
                <img src="/icon-event.jpg" alt="Post" className="grid-item-img" style={{filter: "brightness(1.2)"}} />
              </div>
              <div className="grid-item-content">
                <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px"}}>
                  <img src="/icon-mypage.png" alt="Avatar" style={{width: 16, height: 16, borderRadius: "50%"}} />
                  <span style={{fontSize: "11px", fontWeight: 700}}>Luna_0326</span>
                  <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>2日前</span>
                </div>
                <p className="grid-item-title">イベント開催プランまとめ🌟</p>
                <p className="grid-item-tags">#イベント</p>
                <div className="grid-item-stats">
                  <span>❤️ 96</span>
                  <span>💬 14</span>
                </div>
              </div>
            </div>
            
            {/* 下の行 */}
            <div className="grid-item">
              <div className="grid-item-img-wrapper" style={{background: "white"}}>
                <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "32px"}}>🃏</div>
                <span className="grid-item-badge">1/2</span>
              </div>
              <div className="grid-item-content">
                <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px"}}>
                  <img src="/icon-mypage.png" alt="Avatar" style={{width: 16, height: 16, borderRadius: "50%"}} />
                  <span style={{fontSize: "11px", fontWeight: 700}}>Luna_0326</span>
                  <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>5日前</span>
                </div>
                <p className="grid-item-title">トレカ整理したよ😭</p>
                <p className="grid-item-tags">#Collection</p>
                <div className="grid-item-stats">
                  <span>❤️ 74</span>
                  <span>💬 6</span>
                </div>
              </div>
            </div>
            
            <div className="grid-item">
              <div className="grid-item-img-wrapper" style={{background: "#301F6E"}}>
                <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "32px"}}>💿</div>
              </div>
              <div className="grid-item-content">
                <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px"}}>
                  <img src="/icon-mypage.png" alt="Avatar" style={{width: 16, height: 16, borderRadius: "50%"}} />
                  <span style={{fontSize: "11px", fontWeight: 700}}>Luna_0326</span>
                  <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>6日前</span>
                </div>
                <p className="grid-item-title">新アルバム開封レポ💿</p>
                <p className="grid-item-tags">#Unboxing</p>
                <div className="grid-item-stats">
                  <span>❤️ 112</span>
                  <span>💬 21</span>
                </div>
              </div>
            </div>
            
            <div className="grid-item">
              <div className="grid-item-img-wrapper" style={{background: "#F7F4FF"}}>
                <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "32px"}}>🗓</div>
              </div>
              <div className="grid-item-content">
                <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px"}}>
                  <img src="/icon-mypage.png" alt="Avatar" style={{width: 16, height: 16, borderRadius: "50%"}} />
                  <span style={{fontSize: "11px", fontWeight: 700}}>Luna_0326</span>
                  <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>1週間前</span>
                </div>
                <p className="grid-item-title">今月の推し活予定表📝</p>
                <p className="grid-item-tags">#プラン</p>
                <div className="grid-item-stats">
                  <span>❤️ 96</span>
                  <span>💬 11</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      {/* 右パネル */}
      <aside className="right-panel fade-in">
        {/* クイック統計 */}
        <div className="panel-card">
          <div className="summary-list">
            <div className="summary-list-item">
              <span>📝 投稿数</span><span>128</span>
            </div>
            <div className="summary-list-item">
              <span>❤️ いいね総数</span><span>24.8K</span>
            </div>
            <div className="summary-list-item">
              <span>💬 コメント数</span><span>1.6K</span>
            </div>
            <div className="summary-list-item">
              <span>📅 参加イベント</span><span>8</span>
            </div>
          </div>
        </div>

        {/* 獲得バッジ */}
        <div className="panel-card">
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px"}}>
            <p className="panel-title" style={{marginBottom: 0}}>獲得バッジ</p>
            <a className="panel-more" style={{marginTop: 0}}>すべて見る</a>
          </div>
          <div className="badge-grid">
            <div className="badge-item" style={{background: "var(--primary-light)", color: "var(--primary)"}}>
              <div className="badge-icon">🌟</div>
              <span className="badge-name">スターダスト</span>
            </div>
            <div className="badge-item" style={{background: "var(--primary)", color: "white"}}>
              <div className="badge-icon">👑</div>
              <span className="badge-name">トップファン</span>
            </div>
            <div className="badge-item" style={{background: "var(--border)", color: "var(--text-secondary)"}}>
              <div className="badge-icon" style={{fontSize: "20px"}}>+12</div>
              <span className="badge-name">もっと見る</span>
            </div>
          </div>
        </div>

        {/* コレクション進捗 */}
        <div className="panel-card">
          <p className="panel-title">コレクション進捗</p>
          <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
            <div>
              <div style={{display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px"}}>
                <span style={{fontWeight: 700}}>🖼 フォトカード</span>
                <span style={{color: "var(--text-secondary)"}}>128/200 (64%)</span>
              </div>
              <div className="progress-container"><div className="progress-fill" style={{width: "64%"}}></div></div>
            </div>
            <div>
              <div style={{display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px"}}>
                <span style={{fontWeight: 700}}>📱 デジタルアイテム</span>
                <span style={{color: "var(--text-secondary)"}}>86/150 (57%)</span>
              </div>
              <div className="progress-container"><div className="progress-fill" style={{width: "57%", background: "var(--accent-pink)"}}></div></div>
            </div>
            <div>
              <div style={{display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px"}}>
                <span style={{fontWeight: 700}}>🎫 チケット・特典</span>
                <span style={{color: "var(--text-secondary)"}}>42/100 (42%)</span>
              </div>
              <div className="progress-container"><div className="progress-fill" style={{width: "42%", background: "var(--warning)"}}></div></div>
            </div>
          </div>
          <button className="btn-secondary" style={{width: "100%", marginTop: "16px"}}>コレクションを見る</button>
        </div>

        {/* 最近のアクティビティ */}
        <div className="panel-card">
          <p className="panel-title">最近のアクティビティ</p>
          <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
            <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
              <img src="/icon-mypage.png" alt="Avatar" style={{width: 24, height: 24, borderRadius: "50%"}} />
              <div style={{flex: 1, fontSize: "12px"}}>
                <strong>Starlight_07</strong> があなたの投稿にいいね！
              </div>
              <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>5分前</span>
            </div>
            <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
              <div style={{width: 24, height: 24, borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "10px", fontWeight: 700}}>N</div>
              <div style={{flex: 1, fontSize: "12px"}}>
                <strong>NOVA Official</strong> がコメントしました
              </div>
              <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>1時間前</span>
            </div>
            <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
              <div style={{width: 24, height: 24, borderRadius: "50%", background: "var(--primary-light)", color: "var(--primary)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "10px", fontWeight: 700}}>Y</div>
              <div style={{flex: 1, fontSize: "12px"}}>
                <strong>Yuseon Dreamers</strong> に参加しました
              </div>
              <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>2時間前</span>
            </div>
          </div>
          <div style={{marginTop: "16px", textAlign: "center"}}>
            <a className="panel-more" style={{marginTop: 0}}>すべて見る</a>
          </div>
        </div>
      </aside>
    </>
  );
}
