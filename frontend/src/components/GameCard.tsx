'use client';

import { useState, useRef } from 'react';

export default function GameCard({ game }: { game: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Priority: uploaded file → external URL → global fallback trailer
  const videoUrl = game.video_file || game.video_url || "/videos/trailer.mp4";

  return (
    <div 
      className="glass-panel" 
      style={{ position: 'relative', height: '400px', borderRadius: '12px', overflow: 'hidden' }}
      onMouseEnter={() => {
        setIsHovered(true);
        if (videoRef.current) {
          videoRef.current.play().catch(e => console.error("Video play failed", e));
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <img 
        src={game.image_file || game.image_url} 
        alt={game.title} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          opacity: isHovered ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }} 
      />
      
      {/* Dynamic Video Element */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="broken-glass-overlay" style={{ opacity: 0.3, zIndex: 2 }}></div>
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        padding: '2rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        zIndex: 3,
        transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
        transition: 'transform 0.3s ease'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: isHovered ? 'var(--primary-neon)' : 'white', transition: 'color 0.3s ease' }}>{game.title}</h2>
        <p style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '1rem' }}>{game.description.substring(0, 100)}...</p>
        <button className="btn-primary" style={{ alignSelf: 'flex-start' }}>Explore</button>
      </div>
    </div>
  );
}
