import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import SideNav from "../components/SideNav";
import SearchBar from "../components/SearchBar";

export const metadata: Metadata = {
  title: "BiasBeat - For Fans, By Fans",
  description: "SNS Platform for Fans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className="global-header">
          <div className="header-inner">
            <div className="header-left">
              <Link href="/" style={{textDecoration: "none"}}>
                <h1 className="logo-text">BiasBeat</h1>
              </Link>
            </div>
            
            <div className="header-center">
              <SearchBar />
              
              <nav className="header-tabs">
                <button className="header-tab active">おすすめ</button>
                <button className="header-tab">フォロー中</button>
                <button className="header-tab">急上昇</button>
              </nav>
            </div>
            
            <div className="header-right">
              <Link href="/notifications" className="header-icon-btn">
                <img src="/tuuti.png" alt="Notification" className="custom-icon" />
                <span className="badge">12</span>
              </Link>
              <button className="header-icon-btn">
                <span style={{fontSize: "20px"}}>✉️</span>
                <span className="badge" style={{background: "var(--primary)"}}>3</span>
              </button>
              <Link href="/mypage">
                <img src="/icon-mypage.png" alt="Profile" className="profile-avatar" />
              </Link>
            </div>
          </div>
        </header>

        <div className="layout-container">
          <div className="layout-inner">
            <SideNav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}