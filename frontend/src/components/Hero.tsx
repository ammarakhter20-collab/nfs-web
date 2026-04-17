'use client';

import { useState } from 'react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section style={{
        position: 'relative',
        height: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        {/* Broken Glass Overlay */}
        <div className="broken-glass-overlay" style={{ opacity: 0.6 }}></div>
        
        <div style={{ zIndex: '20', maxWidth: '800px', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '5rem', marginBottom: '1rem', lineHeight: '1' }}>
            Drive with <span className="text-neon">No Limits</span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Experience the latest in street racing culture. Customize, Race, and Dominate.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary">Buy Now</button>
            <button 
              className="btn-primary" 
              style={{ backgroundColor: 'transparent', border: '1px solid white', color: 'white' }}
              onClick={() => setIsVideoOpen(true)}
            >
              Watch Trailer
            </button>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '150px',
          background: 'linear-gradient(to top, var(--background), transparent)'
        }}></div>
      </section>

      {/* Video Trailer Modal */}
      {isVideoOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(10px)'
        }}>
          <div className="glass-panel" style={{
            width: '90%',
            maxWidth: '900px',
            position: 'relative',
            borderRadius: '12px',
            padding: '10px'
          }}>
            <button 
              onClick={() => setIsVideoOpen(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'var(--primary-neon)',
                fontSize: '2rem',
                cursor: 'pointer',
                zIndex: 100
              }}
            >
              ×
            </button>
            <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: 'black', borderRadius: '8px', overflow: 'hidden' }}>
              <video 
                autoPlay 
                controls 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src="/videos/trailer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
