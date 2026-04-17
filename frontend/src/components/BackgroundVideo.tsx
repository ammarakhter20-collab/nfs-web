'use client';

import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="global-bg-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="global-bg-video"
      >
        <source src="/videos/bg-main.mp4" type="video/mp4" />
        {/* Fallback image if video fails */}
        <div className="global-bg-fallback"></div>
      </video>
      <div className="global-bg-overlay"></div>
    </div>
  );
};

export default BackgroundVideo;
