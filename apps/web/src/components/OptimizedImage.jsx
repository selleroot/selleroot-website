
import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  aspectRatio = 'auto',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate WebP path (assuming standard naming convention for placeholder functionality)
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <div 
      className={`relative overflow-hidden bg-muted ${className}`} 
      style={{ aspectRatio }}
    >
      {/* Blur placeholder effect */}
      <div 
        className={`absolute inset-0 bg-muted transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      />
      
      <picture>
        <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        <img
          src={src}
          alt={alt || ""}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "async" : "async"}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          {...props}
        />
      </picture>
    </div>
  );
};

export default React.memo(OptimizedImage);
