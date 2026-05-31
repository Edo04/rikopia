"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getCurrentUser } from "../lib/auth";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const user = getCurrentUser();
    
    if (!user && pathname !== "/login") {
      // ログインしておらず、ログイン画面以外を開こうとしたらログイン画面へ飛ばす
      router.replace("/login");
    } else if (user && pathname === "/login") {
      // 既にログインしているのにログイン画面を開こうとしたらホームへ飛ばす
      router.replace("/");
    } else {
      // 問題なければ画面を表示する準備OK
      setIsChecking(false);
    }
  }, [pathname, router]);

  // チェック中は何も表示しない（チラつき防止）
  if (isChecking) {
    return <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "var(--bg-lavender)"}}>Loading...</div>;
  }

  return <>{children}</>;
}
