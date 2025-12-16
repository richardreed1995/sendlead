'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import React from 'react'
import { cn } from "../lib/utils";
import { usePathname } from 'next/navigation';

const menuItems = [
    { name: 'How it works', href: '/#how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'ROI', href: '/roi' },
    { name: 'Resources', href: '/blog' },
]

const sectorItems = [
    { name: 'Mortgages', href: '/mortgage' },
    { name: 'Business Loans', href: '/business-loans' },
    { name: 'Secured Loans', href: '/secured-loans' },
    { name: 'Financial Advisor', href: '/financial-advisor' },
    { name: 'Wealth Management', href: '/wealth-management' },
]

const ANNOUNCEMENT_BAR_HEIGHT = 44 // Approximate height of announcement bar

export const HeroHeader = ({ hasAnnouncementBar = false }: { hasAnnouncementBar?: boolean }) => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isPastAnnouncement, setIsPastAnnouncement] = React.useState(false)
    const [sectorsOpen, setSectorsOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
            if (hasAnnouncementBar) {
                setIsPastAnnouncement(window.scrollY > ANNOUNCEMENT_BAR_HEIGHT)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [hasAnnouncementBar])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                style={{
                    top: hasAnnouncementBar && !isPastAnnouncement ? `${ANNOUNCEMENT_BAR_HEIGHT}px` : '0px'
                }}
                className="fixed z-20 w-full px-2 transition-all duration-300">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                <li className="relative">
                                    <button
                                        onClick={() => setSectorsOpen(!sectorsOpen)}
                                        onBlur={() => setTimeout(() => setSectorsOpen(false), 200)}
                                        className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150">
                                        <span>Sectors</span>
                                        <ChevronDown className={cn("size-4 transition-transform duration-200", sectorsOpen && "rotate-180")} />
                                    </button>
                                    {sectorsOpen && (
                                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                                            {sectorItems.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2998FD] transition-colors duration-150"
                                                    onClick={() => setSectorsOpen(false)}>
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    <li>
                                        <div className="text-muted-foreground font-medium mb-3">Sectors</div>
                                        <ul className="space-y-3 ml-4">
                                            {sectorItems.map((item, index) => (
                                                <li key={index}>
                                                    <Link
                                                        href={item.href}
                                                        className="text-muted-foreground hover:text-accent-foreground block duration-150 text-sm">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className="lg:inline-flex bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
                                    <Link href="/get-started">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
