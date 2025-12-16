import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function AnnouncementBar() {
    return (
        <Link 
            href="/get-started" 
            className="block bg-[#2998FD] text-white hover:bg-[#1f7fd9] transition-colors duration-200 cursor-pointer"
        >
            <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-x-3 text-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <p className="text-center">
                        <span className="font-medium">Price increase Jan 2026</span>
                        <span className="hidden sm:inline"> — Customers who join before then keep current lead prices</span>
                        <span className="sm:hidden"> — Keep current prices</span>
                    </p>
                    <span className="group inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                        Lock in deal
                        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                </div>
            </div>
        </Link>
    )
}

