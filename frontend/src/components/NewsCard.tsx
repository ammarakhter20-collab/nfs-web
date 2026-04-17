'use client';

import { useState } from 'react';

export default function NewsCard({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
          <img 
            src={item.image_file || item.image_url} 
            alt={item.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: 'var(--primary-neon)',
            color: 'black',
            padding: '2px 10px',
            fontSize: '0.7rem',
            fontWeight: '900',
            textTransform: 'uppercase'
          }}>
            {item.category}
          </div>
        </div>
        <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
          <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '1.5rem', flexGrow: 1 }}>{item.excerpt}</p>
          <button 
            onClick={() => setIsOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-neon)',
              fontWeight: '700',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            Read More →
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(8px)'
        }}>
          <div className="glass-panel" style={{
            width: '90%',
            maxWidth: '700px',
            maxHeight: '80vh',
            overflowY: 'auto',
            padding: '0',
            position: 'relative',
            borderRadius: '12px'
          }}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                zIndex: 100
              }}
            >
              ×
            </button>
            
            <div style={{ position: 'relative', height: '250px' }}>
              <img 
                src={item.image_file || item.image_url} 
                alt={item.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div className="broken-glass-overlay" style={{ opacity: 0.4 }}></div>
            </div>

            <div style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.title}</h2>
              <div style={{ color: 'var(--primary-neon)', marginBottom: '1rem', fontSize: '0.8rem', fontWeight: 'bold' }}>
                {item.category} | {new Date(item.published_at).toLocaleDateString()}
              </div>
              <p style={{ color: '#eee', lineHeight: '1.6', fontSize: '1rem', whiteSpace: 'pre-wrap' }}>
                {item.content || "Full article details coming soon..."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
