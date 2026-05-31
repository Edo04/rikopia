export type Comment = {
  id: string;
  author: string;
  text: string;
  createdAt: string;
};

export type Post = {
  id: string;
  author: string;
  handle: string;
  avatarChar: string;
  text: string;
  hasImage: boolean;
  createdAt: string;
  likes: number;
  comments: number;
  reposts: number;
  isLiked?: boolean; // いいねしたかどうかのフラグ
  commentList?: Comment[]; // コメントのリスト
};

// 最初に表示するサンプルの投稿データ
export const INITIAL_POSTS: Post[] = [
  {
    id: "1",
    author: "LuviNova",
    handle: "@luvinova_2h",
    avatarChar: "L",
    text: "Our light shines together ✨\nLast night was unforgettable! 💜 #NovaWorldTour #Nova #OT7",
    hasImage: true,
    createdAt: "2h",
    likes: 1200,
    comments: 1, // コメント数を1に変更
    reposts: 235,
    isLiked: false,
    commentList: [
      {
        id: "c1",
        author: "Fan_01",
        text: "It was amazing! 😭",
        createdAt: "1h",
      }
    ]
  },
  {
    id: "2",
    author: "Starlight_07",
    handle: "@starlight_novamoon",
    avatarChar: "S",
    text: "Drew this during the concert... still can't stop thinking about it 😭✨ #FanArt #Nova",
    hasImage: false,
    createdAt: "5h",
    likes: 850,
    comments: 0,
    reposts: 120,
    isLiked: false,
    commentList: []
  }
];

const STORAGE_KEY = "biasbeat_posts";

// ブラウザの保存領域（localStorage）から投稿を読み込む
export function loadPosts(): Post[] {
  if (typeof window === "undefined") return INITIAL_POSTS;
  
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return INITIAL_POSTS;
}

// ブラウザの保存領域（localStorage）に投稿を保存する
export function savePosts(posts: Post[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
}
