"use client";

import React, { useState, useEffect } from "react";
import { Post, loadPosts, savePosts } from "../lib/storage";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputText, setInputText] = useState("");

  // 画面が表示された時に、保存されている投稿を読み込む
  useEffect(() => {
    const loaded = loadPosts();
    setPosts(loaded);
  }, []);

  // 投稿ボタンを押した時の処理
  const handlePost = () => {
    if (!inputText.trim()) return; // 空なら何もしない

    const newPost: Post = {
      id: Date.now().toString(),
      author: "HanniBear ✨", // あなたの名前（モック）
      handle: "@hanni_bear",
      avatarChar: "H",
      text: inputText,
      hasImage: false,
      createdAt: "Just now",
      likes: 0,
      comments: 0,
      reposts: 0,
    };

    const newPosts = [newPost, ...posts];
    setPosts(newPosts);
    savePosts(newPosts); // localStorageに保存
    setInputText(""); // 入力欄を空にする
  };

  return (
    <>
      {/* 中央：フィードエリア */}
      <div className="feed-area fade-in">
        {/* 上部ヘッダー（検索とアイコン） */}
        <div className="top-header">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search idols, posts, users, topics..." 
          />
          <div className="header-icons">
            <span>🏠</span>
            <span>📩</span>
            <span>🔔</span>
            <span className="post-avatar" style={{width: 32, height: 32, fontSize: 14}}>H</span>
          </div>
        </div>

        {/* タブメニュー */}
        <div className="tab-menu">
          <button className="tab-btn active">For You</button>
          <button className="tab-btn">Following</button>
          <button className="tab-btn">Trending</button>
        </div>

        {/* 投稿入力エリア */}
        <div className="create-post-box">
          <div className="post-avatar" style={{width: 40, height: 40}}>H</div>
          <input 
            type="text" 
            placeholder="What's on your mind?" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePost();
              }
            }}
          />
          <button 
            className="post-submit-btn" 
            onClick={handlePost}
            disabled={!inputText.trim()}
          >
            Post
          </button>
        </div>

        {/* タイムライン */}
        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-avatar">{post.avatarChar}</div>
              <div className="post-content">
                <div className="post-user-info">
                  <span className="post-author">{post.author}</span>
                  <span className="post-handle">{post.handle}</span>
                  <span className="post-date">· {post.createdAt}</span>
                </div>
                <p className="post-text">
                  {post.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>

                {post.hasImage && (
                  <div className="post-image">
                    🎤 Concert Image Placeholder 📸
                  </div>
                )}

                <div className="post-actions">
                  <button className="action-btn">
                    💬 {post.comments}
                  </button>
                  <button className="action-btn">
                    🔁 {post.reposts}
                  </button>
                  <button className="action-btn active">
                    ❤️ {post.likes >= 1000 ? (post.likes / 1000).toFixed(1) + 'K' : post.likes}
                  </button>
                  <button className="action-btn">
                    🔗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 右側：サイドバーエリア */}
      <aside className="right-sidebar fade-in">
        <div className="sidebar-card">
          <h2>Trending Now</h2>
          <div className="trend-item">
            <p className="trend-topic">1 #NOVA_COMEBACK</p>
            <p className="trend-posts">125K posts</p>
          </div>
          <div className="trend-item">
            <p className="trend-topic">2 #NovaWorldTour</p>
            <p className="trend-posts">98K posts</p>
          </div>
          <div className="trend-item">
            <p className="trend-topic">3 #BiasBeatBday</p>
            <p className="trend-posts">42K posts</p>
          </div>
          <div className="trend-item">
            <p className="trend-topic">4 #StanWithLove</p>
            <p className="trend-posts">31K posts</p>
          </div>
        </div>

        <div className="sidebar-card">
          <h2>Suggested Communities</h2>
          <div className="trend-item" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div className="post-avatar" style={{width: 32, height: 32, background: '#8b5cf6'}}>N</div>
            <div>
              <p className="trend-topic" style={{marginBottom: 0}}>NOVA Official</p>
              <p className="trend-posts">128K members</p>
            </div>
          </div>
          <div className="trend-item" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div className="post-avatar" style={{width: 32, height: 32, background: '#f472b6'}}>A</div>
            <div>
              <p className="trend-topic" style={{marginBottom: 0}}>AURORA Dream</p>
              <p className="trend-posts">95K members</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
