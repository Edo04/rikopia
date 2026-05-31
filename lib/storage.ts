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
  isLiked?: boolean;
  commentList?: Comment[];
  image?: string; // Base64エンコードされた画像データ
  video?: string; // Base64エンコードされた動画データ
};

const STORAGE_KEY = "biasbeat_posts";

export const loadPosts = (): Post[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Failed to parse posts from localStorage", e);
      return [];
    }
  }
  
  // 初期データ
  return [
    {
      id: "1",
      author: "HanniBear ✨",
      handle: "@hanni_bear",
      avatarChar: "H",
      text: "Seventeen is so coooool!!\n#Seventeen #KPOP",
      hasImage: true,
      createdAt: "Just now",
      likes: 1,
      isLiked: true,
      commentList: []
    },
    {
      id: "2",
      author: "LuviNova",
      handle: "@luvinova_2h",
      avatarChar: "L",
      text: "Our light shines together ✨\nLast night was unforgettable! 💜 #NovaWorldTour #Nova #OT7",
      hasImage: false,
      createdAt: "2h",
      likes: 328,
      commentList: [
        { id: "c1", author: "FanA", text: "本当に最高でしたね！", createdAt: "1h" }
      ]
    }
  ];
};

export const savePosts = (posts: Post[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
};
