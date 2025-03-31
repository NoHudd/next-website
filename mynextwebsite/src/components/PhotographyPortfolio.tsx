import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
// import WatermarkOverlay from './ui/watermark-overlay';  // Comment this out temporarily

const images = [
  'img1.jpg',
  'img2.jpeg',
  'img3.png',
  'img4.png',
  'img5.png',
  'img6.png',
  'img7.png',
  'img8.png',
  'img9.png',
  'img10.png',
  'img11.png',
  'img12.png',
  'img13.png',
  'img14.png',
  'img15.png',
  'img16.png',
  'img17.png',
  'img18.png',
  'img19.png',
];

export default function PhotographyPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered && !isEnlarged) {
      interval = setInterval(() => {
        handleNextClick();
      }, 5000); // Change image every 4 seconds
    }
    return () => clearInterval(interval);
  }, [isHovered, isEnlarged]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsEnlarged(false);
      }
    };

    if (isEnlarged) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isEnlarged]);

  const handlePrevClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 5000); // 2 second transition
  };

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 5000); // 2 second transition
  };

  const handleImageClick = () => {
    setIsEnlarged(true);
  };

  return (
    <div className="flex flex-col rounded-2xl bg-white shadow dark:bg-black dark:shadow-dark h-full p-4 md:p-6 lg:p-6">
      <div className="flex justify-center items-center gap-x-6">
        <h3 className="relative z-10 pb-2 text-2xl font-semibold dark:text-light mt-2 lg:mt-0 ">
          Photography Portfolio
        </h3>
        {/* Navigation Buttons */}
        <div className="flex space-x-2.5">
          <button 
            onClick={handlePrevClick}
            className="carousel-btn"
            disabled={isTransitioning}
          >
            {/* Mobile Icon */}
            <svg className="h-5 w-5 block md:hidden" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            {/* PC Icon */}
            <svg className="h-6 w-6 hidden md:block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button 
            onClick={handleNextClick}
            className="carousel-btn"
            disabled={isTransitioning}
          >
            {/* Mobile Icon */}
            <svg className="h-5 w-5 block md:hidden" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
            {/* PC Icon */}
            <svg className="h-6 w-6 hidden md:block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h14m-7-7l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Carousel */}
      <div 
        className="relative h-[450px] w-full overflow-hidden rounded-2xl mt-2 lg:mt-4 cursor-pointer select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleImageClick}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      >
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[2000ms] select-none pointer-events-none ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={`/assets/img/portfolio/${src}`}
              alt={`Photography Portfolio Image ${index + 1}`}
              fill
              className="object-cover select-none pointer-events-none"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={85}
              draggable={false}
              unoptimized={true}
            />
            {/* <WatermarkOverlay /> */}
          </div>
        ))}
      </div>

      {/* Enlarged Image Modal */}
      {isEnlarged && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 select-none"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        >
          <div 
            ref={modalRef}
            className="relative w-full h-full flex items-center justify-center select-none"
          >
            <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={`/assets/img/portfolio/${images[currentIndex]}`}
                  alt={`Enlarged Photography Portfolio Image ${currentIndex + 1}`}
                  fill
                  className="object-contain select-none pointer-events-none"
                  priority
                  sizes="100vw"
                  quality={100}
                  draggable={false}
                  unoptimized={true}
                />
                {/* <WatermarkOverlay /> */}
              </div>
            </div>
            <button
              onClick={() => setIsEnlarged(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 