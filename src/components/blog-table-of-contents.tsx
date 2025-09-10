'use client';

import { useEffect, useState, useRef } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface BlogTableOfContentsProps {
  headings: TOCItem[];
}

export default function BlogTableOfContents({ headings }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const tocRef = useRef<HTMLDivElement>(null);

  // Filter to only show h1 headings (level 2 in our case since h1 is the main title)
  const h1Headings = headings.filter(heading => heading.level === 2);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get header and footer elements
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const article = document.querySelector('article');
      
      // Calculate visibility based on scroll position
      let shouldShow = false;
      
      if (header && footer && article) {
        const headerBottom = header.offsetTop + header.offsetHeight;
        const footerTop = footer.offsetTop;
        
        // Show TOC when scrolled past header (completely out of view) and before reaching footer
        shouldShow = scrollTop > headerBottom && scrollTop < footerTop - windowHeight;
      } else if (header && article) {
        // Fallback: show when past header (completely out of view)
        const headerBottom = header.offsetTop + header.offsetHeight;
        shouldShow = scrollTop > headerBottom;
      }
      
      setIsVisible(shouldShow);

      // Calculate reading progress
      if (article) {
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        
        const articleStart = articleTop - windowHeight;
        const articleEnd = articleTop + articleHeight;
        const currentPosition = scrollTop + windowHeight;
        
        if (currentPosition >= articleStart && currentPosition <= articleEnd) {
          const progressPercent = Math.min(100, Math.max(0, 
            ((currentPosition - articleStart) / (articleEnd - articleStart)) * 100
          ));
          setProgress(progressPercent);
        }
      }

      // Find active heading (only from h1 headings)
      const headingElements = h1Headings.map(({ id }) => document.getElementById(id)).filter(Boolean);
      const currentHeading = headingElements.find((heading) => {
        if (!heading) return false;
        const rect = heading.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentHeading) {
        setActiveId(currentHeading.id);
      } else if (headingElements.length > 0) {
        // If we're at the top, highlight the first heading
        const firstHeading = headingElements[0];
        if (firstHeading && firstHeading.getBoundingClientRect().top > 100) {
          setActiveId(firstHeading.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [h1Headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  if (h1Headings.length === 0 || !isVisible) return null;

  return (
    <div 
      ref={tocRef}
      className="fixed left-4 top-32 w-64 z-40 hidden lg:block transition-opacity duration-300"
    >
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-gray-500">Progress</span>
          <span className="text-xs text-gray-400">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-blue-600 h-1 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Table of Contents */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Contents</h3>
        {h1Headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`block w-full text-left text-sm py-2 px-0 transition-all duration-200 ${
              activeId === heading.id
                ? 'text-blue-600 font-semibold border-l-2 border-blue-600 pl-3'
                : 'text-gray-600 hover:text-gray-900 hover:font-medium'
            }`}
          >
            {heading.title}
          </button>
        ))}
      </div>
    </div>
  );
}
