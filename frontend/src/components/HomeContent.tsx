'use client';

import Navbar from './Navbar';
import Hero from './Hero';
import NewsCard from './NewsCard';
import GameCard from './GameCard';

interface HomeContentProps {
  news: any[];
  games: any[];
}

export default function HomeContent({ news, games }: HomeContentProps) {
  return (
    <main>
      <Navbar />
      <section id="media">
        <Hero />
      </section>

      {/* Latest News Section */}
      <section id="news" style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '4rem auto', borderRadius: '12px' }} className="glass-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>The <span className="text-neon">Latest</span></h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-neon)' }}></div>
          </div>
          <button style={{ background: 'none', border: 'none', color: 'white', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer' }}>
            All News →
          </button>
        </div>

        <div className="nfs-grid">
          {news.map((item: any) => (
            <NewsCard key={item.id} item={item} />
          ))}
          {news.length === 0 && <p>No news items found. Check if the Django backend is running.</p>}
        </div>
      </section>

      {/* Featured Games Section */}
      <section id="games" style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '4rem auto', borderRadius: '12px' }} className="glass-panel">
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Experience <span className="text-neon">The Speed</span></h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-neon)' }}></div>
        </div>

        <div className="nfs-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          {games.map((game: any) => (
            <GameCard key={game.id} game={game} />
          ))}
          {games.length === 0 && <p>No games found.</p>}
        </div>
      </section>

      {/* About the Community Section */}
      <section id="about" style={{ padding: '8rem 2rem', textAlign: 'center', position: 'relative' }}>
        <div className="broken-glass-overlay" style={{ opacity: 0.1 }}></div>
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 20 }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Stay in the <span className="text-neon">know</span></h2>
          <p style={{ color: '#aaa', marginBottom: '2rem' }}>Sign up for the NFS newsletter to receive the latest updates, event info, and exclusive content.</p>
          <div style={{ display: 'flex', gap: '0', justifyContent: 'center' }}>
            <input 
              type="email" 
              placeholder="Email Address" 
              style={{
                padding: '1rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border)',
                color: 'white',
                width: '100%',
                outline: 'none'
              }} 
            />
            <button className="btn-primary" style={{ borderRadius: '0', whiteSpace: 'nowrap' }}>Sign Up</button>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: '#666', fontSize: '0.8rem' }}>
        <p>© 2026 Ghost Games & Electronic Arts. Built with Next.js & Django.</p>
      </footer>
    </main>
  );
}
