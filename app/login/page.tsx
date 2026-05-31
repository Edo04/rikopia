"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../../lib/auth";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId.trim()) {
      login(userId.trim());
      // ホーム画面へ移動（ページ全体を再読み込みしてAuthWrapperを確実に走らせる）
      window.location.href = "/";
    }
  };

  return (
    <div style={{
      width: "100vw", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      background: "linear-gradient(135deg, #301F6E 0%, #1A1A2E 100%)",
      color: "white"
    }}>
      <div style={{
        background: "var(--surface)",
        padding: "48px",
        borderRadius: "24px",
        boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "40px", 
          fontWeight: 800, 
          background: "linear-gradient(135deg, #7C5CFF 0%, #FF7DCB 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "16px"
        }}>BiasBeat</h1>
        
        <p style={{color: "var(--text-secondary)", marginBottom: "32px", fontWeight: 600}}>
          For Fans, By Fans
        </p>

        <form onSubmit={handleLogin} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
          <div>
            <input 
              type="text" 
              placeholder="好きなユーザー名を入力" 
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid var(--border)",
                fontSize: "16px",
                outline: "none",
                background: "var(--bg-lavender)",
                color: "var(--text-primary)",
                fontWeight: 600
              }}
            />
          </div>
          
          <button 
            type="submit" 
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "12px",
              background: "var(--primary)",
              color: "white",
              fontSize: "16px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 16px rgba(124, 92, 255, 0.3)",
              transition: "transform 0.2s"
            }}
          >
            ログインして始める！
          </button>
        </form>
      </div>
    </div>
  );
}
