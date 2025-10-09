import { redirect } from 'next/navigation';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function OldCoursePage() {
  // Redirect to bootcamp landing page
  redirect('/bootcamp');
}
