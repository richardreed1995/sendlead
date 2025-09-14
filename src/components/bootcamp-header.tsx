import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function BootcampHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center sm:justify-between items-center py-2 sm:py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Group 28 (1).png"
                alt="Sendlead Logo"
                width={80}
                height={27}
                className="h-5 w-auto sm:h-8"
              />
            </Link>
          </div>
          <div className="hidden sm:block">
            <Link href="#hero">
              <Button className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
