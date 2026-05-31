"use client";

import React, { useState, useEffect, useRef } from "react";
import { Post, Comment, loadPosts, savePosts } from "../lib/storage";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputText, setInputText] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // コメント入力用
  const [commentInputs, setCommentInputs] = useState<{ [postId: string]: string }>({});

  useEffect(() => {
    setPosts(loadPosts());
  }, []);

  const handlePost = () => {
    if (!inputText.trim() && !selectedImage && !selectedVideo) return;
    
    const newPost: Post = {
      id: Date.now().toString(),
      author: "HanniBear ✨",
      handle: "@hanni_bear",
      avatarChar: "H",
      text: inputText,
      hasImage: !!selectedImage || !!selectedVideo,
      createdAt: "Just now",
      likes: 0,
      isLiked: false,
      commentList: [],
      image: selectedImage || undefined,
      video: selectedVideo || undefined,
    };
    
    const updated = [newPost, ...posts];
    setPosts(updated);
    savePosts(updated);
    
    setInputText("");
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (type === 'image') {
        setSelectedImage(result);
        setSelectedVideo(null); // 画像か動画どちらかのみとする
      } else {
        setSelectedVideo(result);
        setSelectedImage(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const toggleLike = (id: string) => {
    const updated = posts.map(p => {
      if (p.id === id) {
        const currentlyLiked = p.isLiked || false;
        return {
          ...p,
          isLiked: !currentlyLiked,
          likes: p.likes + (currentlyLiked ? -1 : 1)
        };
      }
      return p;
    });
    setPosts(updated);
    savePosts(updated);
  };

  const handleCommentChange = (postId: string, text: string) => {
    setCommentInputs({ ...commentInputs, [postId]: text });
  };

  const handleAddComment = (postId: string) => {
    const text = commentInputs[postId];
    if (!text || !text.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: "HanniBear ✨",
      text: text,
      createdAt: "Just now"
    };

    const updated = posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          commentList: [...(p.commentList || []), newComment]
        };
      }
      return p;
    });

    setPosts(updated);
    savePosts(updated);
    setCommentInputs({ ...commentInputs, [postId]: "" });
  };

  // ハッシュタグを青(紫)色でレンダリングする関数
  const renderTextWithHashtags = (text: string) => {
    // 簡易的なハッシュタグ正規表現: #に続く英数字・日本語などをマッチ
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
        {/* 1. 投稿作成ボックス */}
        <div className="create-post-card">
          <div className="create-post-input-area">
            <div className="profile-avatar" style={{width: 44, height: 44, background: "var(--primary)", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px", fontWeight: 700}}>H</div>
            <input 
              type="text" 
              placeholder="今の気持ちをシェアしよう！"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePost()}
            />
          </div>

          {/* プレビュー表示 */}
          {selectedImage && (
            <div style={{ position: "relative", marginBottom: "16px" }}>
              <img src={selectedImage} alt="Preview" style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "12px" }} />
              <button onClick={() => setSelectedImage(null)} style={{ position: "absolute", top: "8px", right: "8px", background: "rgba(0,0,0,0.5)", color: "white", border: "none", borderRadius: "50%", width: "28px", height: "28px", cursor: "pointer" }}>✕</button>
            </div>
          )}
          {selectedVideo && (
            <div style={{ position: "relative", marginBottom: "16px" }}>
              <video src={selectedVideo} controls style={{ width: "100%", maxHeight: "300px", borderRadius: "12px", background: "black" }} />
              <button onClick={() => setSelectedVideo(null)} style={{ position: "absolute", top: "8px", right: "8px", background: "rgba(0,0,0,0.5)", color: "white", border: "none", borderRadius: "50%", width: "28px", height: "28px", cursor: "pointer", zIndex: 10 }}>✕</button>
            </div>
          )}

          <div className="create-post-actions">
            <input type="file" accept="image/*" hidden ref={imageInputRef} onChange={(e) => handleFileSelect(e, 'image')} />
            <input type="file" accept="video/*" hidden ref={videoInputRef} onChange={(e) => handleFileSelect(e, 'video')} />
            
            <button className="post-option-btn" onClick={() => imageInputRef.current?.click()}>
              🖼 画像
            </button>
            <button className="post-option-btn" onClick={() => videoInputRef.current?.click()}>
              🎬 動画
            </button>
            <button className="post-option-btn">
              📊 投票
            </button>
            <button className="post-option-btn">
              📅 イベント
            </button>
            <button className="btn-primary" style={{marginLeft: "auto", padding: "8px 24px", marginTop: 0}} onClick={handlePost}>
              投稿
            </button>
          </div>
        </div>

        {/* 2. 投稿一覧 */}
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-user-info">
                <div className="post-avatar" style={{width: 44, height: 44, background: "var(--primary-light)", color: "var(--primary)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px", fontWeight: 700}}>
                  {post.avatarChar}
                </div>
                <div className="post-meta">
                  <div className="post-author-row">
                    <span className="post-author">{post.author}</span>
                    <span className="level-badge" style={{fontSize:"10px", padding:"2px 6px", marginRight:0}}>L3</span>
                    <span className="post-time">{post.createdAt}</span>
                  </div>
                  <span style={{fontSize: "13px", color: "var(--text-secondary)"}}>{post.handle}</span>
                </div>
              </div>
              <button style={{background:"none", border:"none", cursor:"pointer", color:"var(--text-secondary)"}}>
                <span style={{fontSize:"20px"}}>⋯</span>
              </button>
            </div>
            
            <p className="post-text">
              {renderTextWithHashtags(post.text)}
            </p>
            
            {/* メディア表示 */}
            {post.image && (
              <img src={post.image} alt="Post image" className="post-image" />
            )}
            {post.video && (
              <video src={post.video} controls className="post-image" style={{ background: "black" }} />
            )}
            {/* 初期データの仮画像表示用 */}
            {!post.image && !post.video && post.hasImage && (
              <div style={{width: "100%", height: "240px", background: "var(--primary-light)", borderRadius: "12px", marginBottom: "12px", display: "flex", justifyContent: "center", alignItems: "center", color: "var(--primary)", fontWeight: 700}}>
                NOVA
              </div>
            )}
            
            <div className="post-actions">
              <div className="action-group">
                <button className={`action-btn ${post.isLiked ? 'liked' : ''}`} onClick={() => toggleLike(post.id)}>
                  <img src="/icon-like.jpg" alt="Like" className="custom-icon-sm" /> {post.likes}
                </button>
                <button className="action-btn">
                  <img src="/icon-comment.jpg" alt="Comment" className="custom-icon-sm" /> {post.commentList?.length || 0}
                </button>
                <button className="action-btn">
                  <img src="/icon-kyouyuu.png" alt="Share" className="custom-icon-sm" style={{filter: "brightness(0) invert(0.4)"}} />
                </button>
              </div>
              <button className="action-btn">
                <img src="/icon-hozon.png" alt="Save" className="custom-icon-sm" style={{filter: "brightness(0) invert(0.4)"}} />
              </button>
            </div>

            {/* コメントセクション */}
            <div className="comments-section">
              {post.commentList?.map(comment => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-avatar" style={{background: "var(--primary)", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 700, fontSize: "14px"}}>
                    {comment.author.charAt(0)}
                  </div>
                  <div style={{flex: 1}}>
                    <div>
                      <span className="comment-author">{comment.author}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                </div>
              ))}
              <div className="comment-input-area">
                <div className="comment-avatar" style={{background: "var(--primary)", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 700, fontSize: "14px"}}>H</div>
                <input 
                  type="text" 
                  placeholder="コメントを追加..." 
                  value={commentInputs[post.id] || ""}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddComment(post.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* 右パネル */}
      <aside className="right-panel fade-in">
        {/* 急上昇ハッシュタグ */}
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
            <div className="trend-item">
              <div className="trend-rank-tag">
                <span className="trend-rank" style={{color: "var(--text-secondary)"}}>3</span>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <span className="trend-tag">#NOVA_WORLD_TOUR</span>
                  <span className="trend-posts">6.7K posts</span>
                </div>
              </div>
            </div>
            <div className="trend-item">
              <div className="trend-rank-tag">
                <span className="trend-rank" style={{color: "var(--text-secondary)"}}>4</span>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <span className="trend-tag">#OurStar_NOVA</span>
                  <span className="trend-posts">5.1K posts</span>
                </div>
              </div>
            </div>
          </div>
          <a className="panel-more">もっと見る</a>
        </div>

        {/* おすすめのコミュニティ */}
        <div className="panel-card">
          <p className="panel-title">おすすめのコミュニティ</p>
          <div className="community-item">
            <div className="community-icon" style={{background: "var(--primary)"}}>N</div>
            <div className="community-info">
              <p className="community-name">NOVA Official</p>
              <p className="community-members">メンバー 128K</p>
            </div>
            <button className="btn-secondary" style={{padding: "4px 12px", fontSize: "12px"}}>＋ 参加</button>
          </div>
          <div className="community-item">
            <div className="community-icon" style={{background: "var(--primary-light)"}}>Y</div>
            <div className="community-info">
              <p className="community-name">Yuseon Dreamers</p>
              <p className="community-members">メンバー 42K</p>
            </div>
            <button className="btn-secondary" style={{padding: "4px 12px", fontSize: "12px"}}>＋ 参加</button>
          </div>
          <div className="community-item">
            <div className="community-icon" style={{background: "var(--accent-pink)"}}>F</div>
            <div className="community-info">
              <p className="community-name">NOVA Fan Art</p>
              <p className="community-members">メンバー 35K</p>
            </div>
            <button className="btn-secondary" style={{padding: "4px 12px", fontSize: "12px"}}>＋ 参加</button>
          </div>
          <a className="panel-more">もっと見る</a>
        </div>

        {/* 今後のイベント */}
        <div className="panel-card">
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px"}}>
            <p className="panel-title" style={{marginBottom: 0}}>今後のイベント</p>
            <a className="panel-more" style={{marginTop: 0}}>すべて見る</a>
          </div>
          <div className="event-item">
            <img src="/icon-event.jpg" alt="Event" className="event-thumb" />
            <div className="event-info">
              <p className="event-title">NOVA WORLD TOUR 日本公演 (東京ドーム)</p>
              <p className="event-date">2025.06.01 (Sat) 18:00</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-thumb" style={{background: "var(--accent-pink)"}}></div>
            <div className="event-info">
              <p className="event-title">4th Anniversary Live Streaming</p>
              <p className="event-date">2025.07.15 (Tue) 20:00</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
