export const AUTH_KEY = "biasbeat_current_user";

export const login = (userId: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_KEY, userId);
  }
};

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_KEY);
  }
};

export const getCurrentUser = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_KEY);
};
