import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import SideNav from "../components/SideNav";

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
              <Link href="/" style={{textDecoration: "none"}}>
                <h1 className="logo-text">BiasBeat</h1>
              </Link>
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
                <img src="/tuuti.png" alt="Notification" className="custom-icon" />
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
            
            {/* 左サイドナビゲーション (クライアントコンポーネント) */}
            <SideNav />

            {/* 中央・右側 (子コンポーネント) */}
            {children}
            
          </div>
        </div>
      </body>
    </html>
  );
}