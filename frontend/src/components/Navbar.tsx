'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass-container" style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: '1000',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 4rem',
      borderRadius: '0',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      backgroundColor: 'rgba(5, 5, 5, 0.8)'
    }}>
      <Link href="/" className="logo" style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', cursor: 'pointer', color: 'white' }}>
        NEED FOR <span className="text-neon">SPEED</span>
      </Link>
      
      <div className="nav-links" style={{ display: 'flex', gap: '2rem', textTransform: 'uppercase', fontWeight: '700', fontSize: '0.9rem' }}>
        {['Media', 'News', 'Games', 'About'].map((text) => (
          <Link 
            key={text} 
            href={`#${text.toLowerCase()}`}
            style={{ color: 'white', transition: 'color 0.3s ease' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary-neon)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
          >
            {text}
          </Link>
        ))}
      </div>

      <div className="nav-actions">
        <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>
          Play Now
        </button>
      </div>
    </nav>
  );
}
