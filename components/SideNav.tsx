"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="side-nav">
      <Link href="/" className={`nav-item ${pathname === "/" ? "active" : ""}`} style={{textDecoration: "none"}}>
        <img src="/icon-home.jpg" alt="Home" className="custom-icon" />
        ホーム
      </Link>
      
      <Link href="/community" className={`nav-item ${pathname === "/community" ? "active" : ""}`} style={{textDecoration: "none"}}>
        <img src="/community.png" alt="Community" className="custom-icon" />
        コミュニティ
      </Link>
      
      <Link href="/event" className={`nav-item ${pathname === "/event" ? "active" : ""}`} style={{textDecoration: "none"}}>
        <img src="/icon-event.jpg" alt="Event" className="custom-icon" />
        イベント
      </Link>
      
      {/* コレクションとトレードは一旦削除 */}
      
      <Link href="/notifications" className={`nav-item ${pathname === "/notifications" ? "active" : ""}`} style={{textDecoration: "none"}}>
        <img src="/tuuti.png" alt="Notification" className="custom-icon" />
        通知 <span className="level-badge" style={{marginLeft: "auto", background:"#FF7DCB", color:"white"}}>12</span>
      </Link>
      
      <Link href="/mypage" className={`nav-item ${pathname === "/mypage" ? "active" : ""}`} style={{textDecoration: "none"}}>
        <img src="/icon-mypage.png" alt="MyPage" className="custom-icon" />
        マイページ
      </Link>
      
      <button className="nav-item">
        <span style={{fontSize: "20px", width: "24px", textAlign: "center"}}>⋯</span>
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
  );
}
