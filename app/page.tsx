"use client";

import React, { useState, useEffect } from "react";
import { Post, Comment, loadPosts, savePosts } from "../lib/storage";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputText, setInputText] = useState("");
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});

  useEffect(() => {
    const loaded = loadPosts();
    setPosts(loaded);
  }, []);

  const handlePost = () => {
    if (!inputText.trim()) return;
    const newPost: Post = {
      id: Date.now().toString(),
      author: "HanniBear",
      handle: "hanni_bear",
      avatarChar: "H",
      text: inputText,
      hasImage: false,
      createdAt: "1分前",
      likes: 0,
      comments: 0,
      reposts: 0,
      isLiked: false,
      commentList: [],
    };
    const newPosts = [newPost, ...posts];
    setPosts(newPosts);
    savePosts(newPosts);
    setInputText("");
  };

  const toggleLike = (postId: string) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const currentlyLiked = post.isLiked;
        return {
          ...post,
          isLiked: !currentlyLiked,
          likes: currentlyLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    savePosts(updatedPosts);
  };

  const handleCommentChange = (postId: string, text: string) => {
    setCommentInputs({ ...commentInputs, [postId]: text });
  };

  const handleAddComment = (postId: string) => {
    const text = commentInputs[postId];
    if (!text || !text.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: "HanniBear",
      text: text,
      createdAt: "たった今",
    };

    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const currentComments = post.commentList || [];
        return {
          ...post,
          comments: post.comments + 1,
          commentList: [...currentComments, newComment]
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    savePosts(updatedPosts);
    setCommentInputs({ ...commentInputs, [postId]: "" });
  };

  return (
    <>
      {/* --- 中央フィード --- */}
      <main className="main-feed fade-in">
        
        {/* 投稿作成ボックス */}
        <div className="create-post-card">
          <div className="create-post-input-area">
            <img src="/icon-mypage.png" alt="Avatar" className="post-avatar" style={{width:40, height:40}} />
            <input 
              type="text" 
              placeholder="今の気持ちをシェアしよう.." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handlePost(); }}
            />
          </div>
          <div className="create-post-actions">
            <button className="post-option-btn">
              <span style={{fontSize: "18px"}}>🖼️</span> 画像
            </button>
            <button className="post-option-btn">
              <span style={{fontSize: "18px"}}>🎬</span> 動画
            </button>
            <button className="post-option-btn">
              <span style={{fontSize: "18px"}}>📊</span> 投票
            </button>
            <button className="post-option-btn">
              <img src="/icon-event.jpg" alt="Event" className="custom-icon-sm" /> イベント
            </button>
            
            <button 
              className="btn-primary" 
              style={{padding: "8px 24px", marginTop: 0, marginLeft: "auto", fontSize: "14px", borderRadius: "20px"}}
              onClick={handlePost}
              disabled={!inputText.trim()}
            >
              <img src="/icon-post.jpg" alt="Post" className="custom-icon-sm" style={{filter: "brightness(0) invert(1)"}} /> 投稿
            </button>
          </div>
        </div>

        {/* タイムライン */}
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-user-info">
                {post.avatarChar === "H" ? (
                  <img src="/icon-mypage.png" alt="Avatar" className="post-avatar" />
                ) : (
                  <div className="post-avatar" style={{background:"var(--primary-light)", color:"var(--primary)", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"20px", fontWeight:700}}>
                    {post.avatarChar}
                  </div>
                )}
                <div className="post-meta">
                  <div className="post-author-row">
                    <span className="post-author">{post.author}</span>
                    <span className="level-badge" style={{fontSize:"10px", padding:"2px 6px", marginRight:0}}>L3</span>
                    <span className="post-time">{post.createdAt}</span>
                  </div>
                  <span className="post-time" style={{fontSize: "12px"}}>@{post.handle}</span>
                </div>
              </div>
              <button style={{background:"none", border:"none", cursor:"pointer", color:"var(--text-secondary)"}}>
                <span style={{fontSize:"20px"}}>⋯</span>
              </button>
            </div>
            
            <p className="post-text">
              {post.text.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}<br /></React.Fragment>
              ))}
            </p>

            {post.hasImage && (
              <img src="/icon-event.jpg" alt="Concert" className="post-image" />
            )}

            <div className="post-actions">
              <div className="action-group">
                <button 
                  className={`action-btn ${post.isLiked ? 'liked' : ''}`}
                  onClick={() => toggleLike(post.id)}
                >
                  <img src="/icon-like.jpg" alt="Like" className="custom-icon-sm" />
                  {post.likes >= 1000 ? (post.likes / 1000).toFixed(1) + 'K' : post.likes}
                </button>
                <button className="action-btn">
                  <img src="/icon-comment.jpg" alt="Comment" className="custom-icon-sm" />
                  {post.comments}
                </button>
                <button className="action-btn">
                  <span style={{fontSize: "18px"}}>🔁</span>
                  {post.reposts}
                </button>
              </div>
              <button className="action-btn">
                <img src="/icon-hozon.png" alt="Save" className="custom-icon-sm" />
              </button>
            </div>

            {/* コメントセクション */}
            {post.commentList && post.commentList.length > 0 && (
              <div className="comments-section">
                {post.commentList.map(comment => (
                  <div key={comment.id} className="comment-item">
                    <img src="/icon-mypage.png" alt="Avatar" className="comment-avatar" />
                    <div className="comment-content">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-text">{comment.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* コメント入力 */}
            <div className="comment-input-area">
              <img src="/icon-mypage.png" alt="Avatar" className="comment-avatar" style={{width: 28, height: 28}} />
              <input 
                type="text" 
                placeholder="コメントを追加..." 
                value={commentInputs[post.id] || ""}
                onChange={(e) => handleCommentChange(post.id, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddComment(post.id);
                }}
              />
            </div>
          </div>
        ))}
      </main>

      {/* --- 右ユーティリティパネル --- */}
      <aside className="right-panel fade-in">
        
        {/* 急上昇ハッシュタグ */}
        <div className="panel-card">
          <p className="panel-title">急上昇ハッシュタグ</p>
          <div className="trend-list">
            <div className="trend-item">
              <div className="trend-rank-tag">
                <span className="trend-rank">1</span>
                <span className="trend-tag">#NOVA_ConcertBack</span>
              </div>
              <span className="trend-posts">12.5K posts</span>
            </div>
            <div className="trend-item">
              <div className="trend-rank-tag">
                <span className="trend-rank">2</span>
                <span className="trend-tag">#Yuseon_Vlog</span>
              </div>
              <span className="trend-posts">8.2K posts</span>
            </div>
            <div className="trend-item">
              <div className="trend-rank-tag">
                <span className="trend-rank">3</span>
                <span className="trend-tag">#NOVA_WORLD_TOUR</span>
              </div>
              <span className="trend-posts">6.7K posts</span>
            </div>
            <div className="trend-item">
              <div className="trend-rank-tag">
                <span className="trend-rank">4</span>
                <span className="trend-tag">#OurStar_NOVA</span>
              </div>
              <span className="trend-posts">5.1K posts</span>
            </div>
          </div>
          <a className="panel-more">もっと見る</a>
        </div>

        {/* おすすめのコミュニティ */}
        <div className="panel-card">
          <p className="panel-title">おすすめのコミュニティ</p>
          <div className="community-item">
            <div className="community-icon" style={{background: "#7C5CFF"}}>N</div>
            <div className="community-info">
              <p className="community-name">NOVA Official</p>
              <p className="community-members">メンバー 128K</p>
            </div>
          </div>
          <div className="community-item">
            <div className="community-icon" style={{background: "#B2BDFF"}}>Y</div>
            <div className="community-info">
              <p className="community-name">Yuseon Dreamers</p>
              <p className="community-members">メンバー 42K</p>
            </div>
          </div>
          <div className="community-item">
            <div className="community-icon" style={{background: "#FF7DCB"}}>F</div>
            <div className="community-info">
              <p className="community-name">NOVA Fan Art</p>
              <p className="community-members">メンバー 35K</p>
            </div>
          </div>
          <a className="panel-more">もっと見る</a>
        </div>

        {/* 今後のイベント */}
        <div className="panel-card">
          <p className="panel-title">今後のイベント</p>
          <div className="event-item">
            <img src="/icon-event.jpg" alt="Event" className="event-thumb" />
            <div className="event-info">
              <p className="event-title">NOVA WORLD TOUR<br/>in OSAKA</p>
              <p className="event-date">5.18 (土) 17:00</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-thumb" style={{background: "var(--accent-pink)", display:"flex", alignItems:"center", justifyContent:"center"}}>🎂</div>
            <div className="event-info">
              <p className="event-title">Yuseon Birthday Project<br/>2024</p>
              <p className="event-date">5.24 (金) 00:00</p>
            </div>
          </div>
          <a className="panel-more">もっと見る</a>
        </div>

        {/* クイック統計 */}
        <div className="panel-card">
          <p className="panel-title">クイック統計</p>
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-label">フォロー中</span>
              <span className="stat-value">42</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">投稿数</span>
              <span className="stat-value">186</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">フォロワー</span>
              <span className="stat-value">1.2K</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">いいね総数</span>
              <span className="stat-value">24.8K</span>
            </div>
          </div>
        </div>

      </aside>
    </>
  );
}
