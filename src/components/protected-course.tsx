'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

interface ProtectedCourseProps {
  children: React.ReactNode;
}

export default function ProtectedCourse({ children }: ProtectedCourseProps) {
  const [hasAccess, setHasAccess] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const verifyAccess = async () => {
      const sessionId = searchParams.get('session_id');

      if (sessionId) {
        // Verify the payment with Stripe
        try {
          const response = await fetch(`/api/verify-session?session_id=${sessionId}`);
          const data = await response.json();

          if (data.valid) {
            // Grant access and store it
            localStorage.setItem('bootcamp_access', 'true');
            localStorage.setItem('bootcamp_email', data.email || '');
            setHasAccess(true);
            // Clean up URL (remove session_id from URL)
            const cleanUrl = window.location.pathname;
            window.history.replaceState({}, '', cleanUrl);
          } else {
            router.push('/bootcamp');
          }
        } catch (error) {
          console.error('Error verifying payment:', error);
          router.push('/bootcamp');
        }
      } else if (localStorage.getItem('bootcamp_access') === 'true') {
        // Already has access
        setHasAccess(true);
      } else {
        // No access - redirect to purchase page
        router.push('/bootcamp');
      }
    };

    verifyAccess();
  }, [searchParams, router]);

  // Show loading only briefly, then either content or redirect
  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading your course...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

