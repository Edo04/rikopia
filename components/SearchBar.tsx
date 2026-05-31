"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <img src="/icon-search.png" alt="search" className="custom-icon-sm search-icon-pos" style={{filter: "brightness(0) invert(0.6)"}} />
      <input 
        type="text" 
        placeholder="アイドル、投稿、コミュニティを検索" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
