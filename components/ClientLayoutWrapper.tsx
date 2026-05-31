"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SideNav from "./SideNav";
import SearchBar from "./SearchBar";
import AuthWrapper from "./AuthWrapper";
import { logout } from "../lib/auth";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  // ログイン画面の場合は、共通ヘッダーとサイドナビを非表示にする
  if (isLoginPage) {
    return <AuthWrapper>{children}</AuthWrapper>;
  }

  // 通常の画面の場合は、共通ヘッダーとサイドナビを表示する
  return (
    <AuthWrapper>
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
            <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
              <Link href="/mypage">
                <img src="/icon-mypage.png" alt="Profile" className="profile-avatar" />
              </Link>
              <button 
                onClick={handleLogout}
                style={{background: "none", border: "1px solid var(--border)", padding: "6px 12px", borderRadius: "12px", fontSize: "12px", fontWeight: 700, cursor: "pointer", color: "var(--text-secondary)"}}
              >
                ログアウト
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="layout-container">
        <div className="layout-inner">
          <SideNav />
          {children}
        </div>
      </div>
    </AuthWrapper>
  );
}
