"use client"

import { Button } from "./ui/button";

export default function CallToAction() {
    const scrollToCalendly = () => {
        const calendlySection = document.getElementById('calendly-embed');
        if (calendlySection) {
            calendlySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32 bg-black text-white">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-white">Want more customers?</h2>
                    <p className="mt-4 text-white">Book a free consultation with our team</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            size="lg"
                            className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white"
                            onClick={scrollToCalendly}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
