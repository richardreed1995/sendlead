"use client"

import { Button } from "./ui/button";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32 bg-black text-white">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-white">Want more leads?</h2>
                    <p className="mt-4 text-white">Click get started and see if you'd be a good fit</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Link href="/get-started">
                            <Button
                                size="lg"
                                className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
