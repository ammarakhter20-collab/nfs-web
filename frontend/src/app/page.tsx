import HomeContent from '../components/HomeContent';

async function getNews() {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const res = await fetch(`${API_URL}/api/news/`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
}

async function getGames() {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const res = await fetch(`${API_URL}/api/games/`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch games:", error);
    return [];
  }
}

// This is a pure Server Component — no 'use client' directive.
// It fetches data server-side and passes it down to the client wrapper.
export default async function Home() {
  const [news, games] = await Promise.all([getNews(), getGames()]);

  return <HomeContent news={news} games={games} />;
}
