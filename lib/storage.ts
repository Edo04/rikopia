import { supabase } from "./supabase";

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
  image?: string; 
  video?: string; 
};

// Supabase から投稿一覧を読み込む（非同期処理）
export const loadPosts = async (): Promise<Post[]> => {
  try {
    // 投稿データを全件取得
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('id', { ascending: false }); // id（作成時のタイムスタンプ文字列）で新しい順にソート

    if (error) throw error;

    // データがなければ初期データを返す（空でもOKだが、見た目のために）
    if (!data || data.length === 0) {
      return [];
    }

    // JSONとして保存されたコメントリストをパースして型を整える
    return data.map(item => ({
      ...item,
      commentList: item.commentList ? (typeof item.commentList === 'string' ? JSON.parse(item.commentList) : item.commentList) : [],
    }));
  } catch (e) {
    console.error("Failed to load posts from Supabase", e);
    return [];
  }
};

// 新しい投稿を Supabase に追加する
export const addPost = async (post: Post) => {
  try {
    const { error } = await supabase
      .from('posts')
      .insert({
        id: post.id,
        author: post.author,
        handle: post.handle,
        avatarChar: post.avatarChar,
        text: post.text,
        hasImage: post.hasImage,
        createdAt: post.createdAt,
        likes: post.likes,
        isLiked: post.isLiked || false,
        image: post.image || null,
        video: post.video || null,
        // commentList は別途テーブルにするのが本来ですが、今回はJSON文字列として保存します
        commentList: JSON.stringify(post.commentList || [])
      });

    if (error) throw error;
  } catch (e) {
    console.error("Failed to add post to Supabase", e);
  }
};

// 投稿を更新する（いいね、コメント用）
export const updatePost = async (post: Post) => {
  try {
    const { error } = await supabase
      .from('posts')
      .update({
        likes: post.likes,
        isLiked: post.isLiked,
        commentList: JSON.stringify(post.commentList || [])
      })
      .eq('id', post.id);

    if (error) throw error;
  } catch (e) {
    console.error("Failed to update post in Supabase", e);
  }
};
