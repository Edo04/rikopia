import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiasBeat - For Fans, By Fans",
  description: "SNS Platform for K-pop fans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* グローバルヘッダー (画面上部固定) */}
        <header className="global-header">
          <div className="header-inner">
            {/* 左: ロゴ */}
            <div className="header-left">
              <h1 className="logo-text">BiasBeat</h1>
            </div>

            {/* 中央: 検索＆タブ */}
            <div className="header-center">
              <div className="search-container">
                <img src="/icon-search.png" alt="search" className="custom-icon-sm search-icon-pos" />
                <input type="text" placeholder="アイドル、投稿、コミュニティを検索" />
              </div>
              <div className="header-tabs">
                <button className="header-tab active">おすすめ</button>
                <button className="header-tab">フォロー中</button>
                <button className="header-tab">急上昇</button>
              </div>
            </div>

            {/* 右: 通知・メッセージ・プロフィール */}
            <div className="header-right">
              <button className="header-icon-btn">
                <span style={{fontSize: "20px"}}>🔔</span>
                <span className="badge">12</span>
              </button>
              <button className="header-icon-btn">
                <span style={{fontSize: "20px"}}>✉️</span>
                <span className="badge">3</span>
              </button>
              <img src="/icon-mypage.png" alt="Profile" className="profile-avatar" />
            </div>
          </div>
        </header>

        {/* 全体レイアウト (左ナビ + 中央フィード + 右パネル) */}
        <div className="layout-container">
          <div className="layout-inner">
            
            {/* 左サイドナビゲーション */}
            <aside className="side-nav">
              <button className="nav-item active">
                <img src="/icon-home.jpg" alt="Home" className="custom-icon" />
                ホーム
              </button>
              <button className="nav-item">
                <span style={{fontSize: "20px"}}>👥</span>
                コミュニティ
              </button>
              <button className="nav-item">
                <img src="/icon-event.jpg" alt="Event" className="custom-icon" />
                イベント
              </button>
              <button className="nav-item">
                <span style={{fontSize: "20px"}}>📚</span>
                コレクション
              </button>
              <button className="nav-item">
                <span style={{fontSize: "20px"}}>🔄</span>
                トレード
              </button>
              <button className="nav-item">
                <span style={{fontSize: "20px"}}>🔔</span>
                通知 <span className="level-badge" style={{marginLeft: "auto", background:"#FF7DCB", color:"white"}}>12</span>
              </button>
              <button className="nav-item">
                <img src="/icon-mypage.png" alt="MyPage" className="custom-icon" />
                マイページ
              </button>
              <button className="nav-item">
                <span style={{fontSize: "20px"}}>⋯</span>
                もっと見る
              </button>

              <button className="btn-primary">
                + 投稿する
              </button>

              {/* ファンレベル パネル */}
              <div className="nav-panel">
                <p className="nav-panel-title">ファンレベル</p>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <span className="level-badge">L2</span>
                  <span className="level-text">証明かり</span>
                </div>
                <div style={{width: "100%", height: "4px", background: "var(--border)", borderRadius: "2px", marginBottom: "4px"}}>
                  <div style={{width: "60%", height: "100%", background: "var(--primary)", borderRadius: "2px"}}></div>
                </div>
                <p style={{fontSize: "10px", color: "var(--text-secondary)"}}>あと 350 pt で L3</p>
              </div>

              {/* 今日のアクティビティ パネル */}
              <div className="nav-panel" style={{marginTop: "16px"}}>
                <p className="nav-panel-title">今日のアクティビティ</p>
                <div style={{display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "8px"}}>
                  <span style={{color: "var(--text-secondary)"}}>投稿したね</span>
                  <span style={{fontWeight: 600}}>4</span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "8px"}}>
                  <span style={{color: "var(--text-secondary)"}}>「いいね」したね</span>
                  <span style={{fontWeight: 600}}>28</span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "8px"}}>
                  <span style={{color: "var(--text-secondary)"}}>コメントしたね</span>
                  <span style={{fontWeight: 600}}>7</span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", fontSize: "13px"}}>
                  <span style={{color: "var(--text-secondary)"}}>受け取ったいいね</span>
                  <span style={{fontWeight: 600}}>56</span>
                </div>
              </div>
            </aside>

            {/* 中央・右側 (子コンポーネント) */}
            {children}
            
          </div>
        </div>
      </body>
    </html>
  );
}