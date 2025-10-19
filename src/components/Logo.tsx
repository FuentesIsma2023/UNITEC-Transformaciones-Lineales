import { useEffect, useRef } from 'react';

interface LogoProps {
  transform: string;
  scale?: number;
}

const Logo = ({ transform, scale = 1 }: LogoProps) => {
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.style.transform = transform;
    }
  }, [transform]);

  return (
    <svg
      ref={logoRef}
      width={80 * scale}
      height={80 * scale}
      viewBox="0 0 80 80"
      style={{
        transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))',
      }}
    >
      {/* Network nodes */}
      <circle cx="20" cy="20" r="6" fill="url(#gradient1)" />
      <circle cx="60" cy="20" r="6" fill="url(#gradient1)" />
      <circle cx="40" cy="50" r="6" fill="url(#gradient2)" />
      <circle cx="20" cy="60" r="6" fill="url(#gradient2)" />
      <circle cx="60" cy="60" r="6" fill="url(#gradient1)" />
      
      {/* Connections */}
      <line x1="20" y1="20" x2="60" y2="20" stroke="url(#gradient3)" strokeWidth="2" />
      <line x1="20" y1="20" x2="40" y2="50" stroke="url(#gradient3)" strokeWidth="2" />
      <line x1="60" y1="20" x2="40" y2="50" stroke="url(#gradient3)" strokeWidth="2" />
      <line x1="40" y1="50" x2="20" y2="60" stroke="url(#gradient3)" strokeWidth="2" />
      <line x1="40" y1="50" x2="60" y2="60" stroke="url(#gradient3)" strokeWidth="2" />
      <line x1="20" y1="60" x2="60" y2="60" stroke="url(#gradient3)" strokeWidth="2" />
      
      {/* Center tech symbol */}
      <rect x="35" y="45" width="10" height="10" fill="url(#gradient2)" rx="2" />
      <path d="M 38 48 L 42 48 M 40 46 L 40 50" stroke="#0a0e1a" strokeWidth="1.5" strokeLinecap="round" />
      
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;