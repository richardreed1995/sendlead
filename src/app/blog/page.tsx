import Link from 'next/link';
import Image from 'next/image';
import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sendlead | Blog",
  description: "Latest insights, updates, and stories from Sendlead - your B2B lead generation partner.",
};

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const posts = [
  {
    slug: 'mortgage-lead-generation',
    title: 'The Complete Guide to Mortgage Lead Generation in the UK',
    category: 'Guide',
    date: today,
    image: '/gradii-1920x1080.png',
    excerpt: 'Proven strategies that top-performing brokers use to consistently attract, convert, and delight mortgage prospects in the competitive UK market.'
  },
  {
    slug: 'parlance-ai-agent',
    title: 'Sendlead Launches Parlance: The AI Agent That Triples Your Appointment Bookings',
    category: 'Product',
    date: 'January 15, 2025',
    image: '/parlance.png',
    excerpt: 'Meet Parlance, the AI agent that books 3x more appointments by automating lead nurturing, qualification, and scheduling for your business.'
  },
  // Add more posts here as needed
];

export default function BlogList() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all bg-white border border-gray-100">
              <div className="aspect-[4/3] w-full relative">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-sm text-gray-500 font-medium">{post.category} <span className="ml-2">{post.date}</span></div>
                <h2 className="text-xl font-semibold leading-tight group-hover:underline">{post.title}</h2>
                <p className="text-gray-600 text-base mt-2 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination (static example) */}
        <div className="flex justify-center gap-2">
          <button className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200" disabled>Previous</button>
          <button className="px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-700">1</button>
          <button className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200">2</button>
          <button className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200">Next</button>
        </div>
      </main>
      <FooterSection />
    </div>
  );
} 