import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiasBeat 💜",
  description: "For Fans, By Fans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="app-container">
          {/* 左側のサイドバー */}
          <aside className="left-sidebar">
            <div className="sidebar-logo">
              <h1>BiasBeat</h1>
              <p>For Fans, By Fans 💜</p>
            </div>
            
            <nav className="sidebar-nav">
              <button className="nav-item active">
                <span className="icon">🏠</span> Home
              </button>
              <button className="nav-item">
                <span className="icon">💬</span> Communities
              </button>
              <button className="nav-item">
                <span className="icon">📅</span> Events
              </button>
              <button className="nav-item">
                <span className="icon">📚</span> Collections
              </button>
              <button className="nav-item">
                <span className="icon">✉️</span> Messages
              </button>
              <button className="nav-item">
                <span className="icon">🔔</span> Notifications
              </button>
              <button className="nav-item">
                <span className="icon">👤</span> Profile
              </button>
              <button className="nav-item">
                <span className="icon">⋯</span> More
              </button>
            </nav>

            <button className="create-post-btn">
              + Create Post
            </button>
          </aside>

          {/* 中央・右側が入るメインエリア */}
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}