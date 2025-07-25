import { Button } from "./ui/button";
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Want more customers?</h2>
                    <p className="mt-4">Book a free consultation with our team</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/get-started">
                                <span>Get Started</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
