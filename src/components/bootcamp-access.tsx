import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BootcampAccess() {

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Bootcamp Details</h2>
          <p className="text-muted-foreground text-base md:text-lg">Stop struggling with shared leads. Start scaling with a predictable system that delivers qualified prospects every week.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-2">📅</div>
                <h4 className="font-semibold text-foreground mb-2">When</h4>
                <p className="text-muted-foreground">Start immediately</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💻</div>
                <h4 className="font-semibold text-foreground mb-2">Where</h4>
                <p className="text-muted-foreground">Online (instant access portal)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎟️</div>
                <h4 className="font-semibold text-foreground mb-2">Access</h4>
                <p className="text-muted-foreground">100% Free — available now</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
