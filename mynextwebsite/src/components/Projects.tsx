import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    title: 'Roosevelt Studios Project',
    image: '/assets/img/roosevelt.png',
    category: 'Design & Wireframe',
    link: '/assets/img/roosevelt.png'
  },
  {
    title: 'New Beginning Career Center Project',
    image: '/assets/img/NewBeginningCareerCenter.png',
    category: 'Design & Wireframe',
    link: '/assets/img/NewBeginningCareerCenter.png'
  }
];

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleImageError = (projectTitle: string) => {
    setImageErrors(prev => ({ ...prev, [projectTitle]: true }));
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold dark:text-light">Recent Projects</h3>
          <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
            <span>All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
            </svg>
          </Link>
        </div>

        <div className="mt-6 space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
              <div className="relative h-[300px] w-full overflow-hidden rounded-t-lg">
                {!imageErrors[project.title] ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                    onError={() => handleImageError(project.title)}
                    priority={index === 0}
                    onClick={() => handleImageClick(project.image)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <span className="text-gray-500 dark:text-gray-400">Image not available</span>
                  </div>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div ref={modalRef} className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={selectedImage}
              alt="Project Preview"
              width={1200}
              height={800}
              className="rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={handleCloseModal}
              className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-gray-800 shadow-lg transition hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
} 