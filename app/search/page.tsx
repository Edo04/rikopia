"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Post, loadPosts } from "../../lib/storage";

// ダミーデータ（ユーザーとコミュニティ）
const DUMMY_USERS = [
  { id: "u1", name: "Luna_0326", handle: "@luna0326_jp", avatar: "L", color: "var(--primary)" },
  { id: "u2", name: "Starlight_07", handle: "@star07", avatar: "S", color: "#301F6E" },
  { id: "u3", name: "HanniBear ✨", handle: "@hanni_bear", avatar: "H", color: "var(--accent-pink)" },
  { id: "u4", name: "Yutaon", handle: "@yutaon_nova", avatar: "Y", color: "#50E3C2" },
];

const DUMMY_COMMUNITIES = [
  { id: "c1", name: "NOVA Official", members: "128K", icon: "N", color: "var(--primary)" },
  { id: "c2", name: "Yuseon Dreamers", members: "42K", icon: "Y", color: "var(--primary-light)" },
  { id: "c3", name: "NOVA Fan Art", members: "35K", icon: "F", color: "var(--accent-pink)" },
  { id: "c4", name: "Seventeen Lovers", members: "89K", icon: "S", color: "#4A90E2" },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [activeTab, setActiveTab] = useState<"all" | "posts" | "users" | "communities">("all");
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [filteredCommunities, setFilteredCommunities] = useState(DUMMY_COMMUNITIES);

  useEffect(() => {
    const loadedPosts = loadPosts();
    setPosts(loadedPosts);
  }, []);

  useEffect(() => {
    if (!query) {
      setFilteredPosts([]);
      setFilteredUsers([]);
      setFilteredCommunities([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    
    // 1. 投稿検索 ＆ ハッシュタグ検索
    const matchedPosts = posts.filter(post => {
      // 本文にクエリが含まれているか
      if (post.text.toLowerCase().includes(lowerQuery)) return true;
      // クエリが「NOVA」で、本文に「#NOVA」が含まれているケースも拾う
      if (post.text.toLowerCase().includes(`#${lowerQuery}`)) return true;
      return false;
    });
    setFilteredPosts(matchedPosts);

    // 2. ユーザー検索
    const matchedUsers = DUMMY_USERS.filter(user => 
      user.name.toLowerCase().includes(lowerQuery) || 
      user.handle.toLowerCase().includes(lowerQuery)
    );
    setFilteredUsers(matchedUsers);

    // 3. コミュニティ検索
    const matchedCommunities = DUMMY_COMMUNITIES.filter(comm => 
      comm.name.toLowerCase().includes(lowerQuery)
    );
    setFilteredCommunities(matchedCommunities);
    
  }, [query, posts]);

  // ハッシュタグを色付けして表示する関数
  const renderTextWithHashtags = (text: string) => {
    const parts = text.split(/(#[^\s#]+)/g);
    return parts.map((part, index) => {
      if (part.startsWith('#')) {
        return <span key={index} style={{ color: "var(--primary)", fontWeight: 600 }}>{part}</span>;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <>
      <main className="main-feed fade-in">
        
        <div style={{marginBottom: "24px"}}>
          <h2 style={{fontSize: "24px", fontWeight: 700, marginBottom: "8px"}}>
            「{query}」の検索結果
          </h2>
          <p style={{color: "var(--text-secondary)"}}>
            投稿 {filteredPosts.length}件 / ユーザー {filteredUsers.length}件 / コミュニティ {filteredCommunities.length}件
          </p>
        </div>

        {/* 検索タブ */}
        <div className="mypage-tabs" style={{marginBottom: "24px"}}>
          <button className={`mypage-tab ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>すべて</button>
          <button className={`mypage-tab ${activeTab === "posts" ? "active" : ""}`} onClick={() => setActiveTab("posts")}>投稿</button>
          <button className={`mypage-tab ${activeTab === "users" ? "active" : ""}`} onClick={() => setActiveTab("users")}>ユーザー</button>
          <button className={`mypage-tab ${activeTab === "communities" ? "active" : ""}`} onClick={() => setActiveTab("communities")}>コミュニティ</button>
        </div>

        {/* ユーザー検索結果 (all or users) */}
        {(activeTab === "all" || activeTab === "users") && filteredUsers.length > 0 && (
          <div style={{marginBottom: "32px"}}>
            <h3 style={{fontSize: "16px", fontWeight: 700, marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid var(--border)"}}>👤 ユーザー</h3>
            <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
              {filteredUsers.map(user => (
                <div key={user.id} className="panel-card" style={{display: "flex", alignItems: "center", gap: "16px", padding: "16px"}}>
                  <div style={{width: 48, height: 48, borderRadius: "50%", background: user.color, color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px", fontWeight: 700}}>
                    {user.avatar}
                  </div>
                  <div style={{flex: 1}}>
                    <p style={{fontSize: "15px", fontWeight: 700}}>{user.name}</p>
                    <p style={{fontSize: "13px", color: "var(--text-secondary)"}}>{user.handle}</p>
                  </div>
                  <button className="btn-secondary">フォロー</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* コミュニティ検索結果 (all or communities) */}
        {(activeTab === "all" || activeTab === "communities") && filteredCommunities.length > 0 && (
          <div style={{marginBottom: "32px"}}>
            <h3 style={{fontSize: "16px", fontWeight: 700, marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid var(--border)"}}>👥 コミュニティ</h3>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px"}}>
              {filteredCommunities.map(comm => (
                <div key={comm.id} className="panel-card" style={{display: "flex", alignItems: "center", gap: "16px", padding: "16px"}}>
                  <div style={{width: 48, height: 48, borderRadius: "8px", background: comm.color, color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px", fontWeight: 700}}>
                    {comm.icon}
                  </div>
                  <div style={{flex: 1}}>
                    <p style={{fontSize: "15px", fontWeight: 700, marginBottom: "4px"}}>{comm.name}</p>
                    <p style={{fontSize: "12px", color: "var(--text-secondary)"}}>メンバー {comm.members}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 投稿検索結果 (all or posts) */}
        {(activeTab === "all" || activeTab === "posts") && filteredPosts.length > 0 && (
          <div>
            <h3 style={{fontSize: "16px", fontWeight: 700, marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid var(--border)"}}>📝 投稿</h3>
            <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
              {filteredPosts.map(post => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <div className="post-user-info">
                      <div className="post-avatar" style={{width: 40, height: 40, background: "var(--primary-light)", color: "var(--primary)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px", fontWeight: 700}}>
                        {post.avatarChar}
                      </div>
                      <div className="post-meta">
                        <div className="post-author-row">
                          <span className="post-author">{post.author}</span>
                          <span className="post-time">{post.createdAt}</span>
                        </div>
                        <span style={{fontSize: "12px", color: "var(--text-secondary)"}}>{post.handle}</span>
                      </div>
                    </div>
                  </div>
                  <p className="post-text">
                    {renderTextWithHashtags(post.text)}
                  </p>
                  {post.image && (
                    <img src={post.image} alt="Post image" className="post-image" />
                  )}
                  {post.video && (
                    <video src={post.video} controls className="post-image" style={{ background: "black" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {query && filteredPosts.length === 0 && filteredUsers.length === 0 && filteredCommunities.length === 0 && (
          <div style={{textAlign: "center", padding: "64px 0", color: "var(--text-secondary)"}}>
            <p style={{fontSize: "18px", fontWeight: 700, marginBottom: "8px"}}>見つかりませんでした</p>
            <p style={{fontSize: "14px"}}>別のキーワードでお試しください。</p>
          </div>
        )}

      </main>

      {/* 右パネル */}
      <aside className="right-panel fade-in">
        <div className="panel-card">
          <p className="panel-title">急上昇ハッシュタグ</p>
          <div className="trend-list">
            <div className="trend-item">
              <div className="trend-rank-tag">
                <span className="trend-rank">1</span>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <span className="trend-tag">#NOVA_ConcertBack</span>
                  <span className="trend-posts">12.5K posts</span>
                </div>
              </div>
            </div>
            <div className="trend-item">
              <div className="trend-rank-tag">
                <span className="trend-rank" style={{color: "var(--text-secondary)"}}>2</span>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <span className="trend-tag">#Yuseon_Vlog</span>
                  <span className="trend-posts">8.2K posts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
