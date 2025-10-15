interface CoverSectionProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const CoverSection = ({ imageUrl, alt, className = "" }: CoverSectionProps) => {
  const isVideo = imageUrl.match(/\.(mp4|mov|webm|ogg)$/i);
  
  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {/* Full Width Image/Video Container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        {isVideo ? (
          <video
            src={imageUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'top',
              margin: 0,
              padding: 0
            }}
            data-testid="cover-video"
          />
        ) : (
          <img 
            src={imageUrl}
            alt={alt}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'top',
              margin: 0,
              padding: 0
            }}
            data-testid="cover-image"
          />
        )}
      </div>
    </section>
  );
};

export default CoverSection;