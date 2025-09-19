'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from './ui/button'
import React from 'react'
import { cn } from "../lib/utils";

export const HeroHeaderFBLP = () => {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(true)

    React.useEffect(() => {
        let lastScrollY = window.scrollY
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            // Hide header when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            
            lastScrollY = currentScrollY
            setIsScrolled(currentScrollY > 50)
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToCalendly = () => {
        const calendlySection = document.getElementById('calendly-embed');
        if (calendlySection) {
            calendlySection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header>
            <nav className={cn(
                'fixed z-20 w-full transition-transform duration-300',
                isVisible ? 'translate-y-0' : '-translate-y-full'
            )}>
                {/* Mobile: Simple static bar */}
                <div className="sm:hidden bg-white border-b border-gray-100">
                    <div className="flex justify-center py-2 px-4">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2 scale-75">
                            <Logo />
                        </Link>
                    </div>
                </div>

                {/* Desktop: Logo and CTA Button with scroll effects */}
                <div className={cn(
                    'hidden sm:block mx-auto px-2',
                    isScrolled && 'bg-background/50 backdrop-blur-lg border-b border-gray-200'
                )}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                        <div className="flex items-center justify-between py-3 lg:py-4">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <Button
                                size="sm"
                                className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white"
                                onClick={scrollToCalendly}>
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
