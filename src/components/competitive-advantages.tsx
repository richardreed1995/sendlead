interface CompetitiveAdvantagesProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function CompetitiveAdvantages({ 
  title = "Why Choose Sendlead?",
  subtitle = "See how Sendlead compares to other lead providers",
  className = ""
}: CompetitiveAdvantagesProps) {
  return (
    <section className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">{title}</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {subtitle}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Column Headers */}
              <div className="bg-zinc-800 p-4 border-b md:border-b-0 md:border-r border-gray-200">
                <h3 className="text-lg font-semibold text-white text-center">Feature</h3>
              </div>
              <div className="bg-zinc-800 p-4 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex justify-center">
                  <img src="/logo-white.png" alt="Sendlead" className="h-8 w-auto" />
                </div>
              </div>
              <div className="bg-zinc-800 p-4">
                <h3 className="text-lg font-semibold text-white text-center">Other Providers</h3>
              </div>
            </div>
            
            {/* Comparison Rows */}
            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-4 bg-gray-50 flex items-center justify-center">
                  <h4 className="font-medium text-foreground">Lead Exclusivity</h4>
                </div>
                <div className="p-4 bg-green-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                    <span className="text-sm text-foreground">100% exclusive leads</span>
                  </div>
                </div>
                <div className="p-4 bg-red-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                    <span className="text-sm text-muted-foreground">Shared leads</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-4 bg-gray-50 flex items-center justify-center">
                  <h4 className="font-medium text-foreground">Lead Qualification</h4>
                </div>
                <div className="p-4 bg-green-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                    <span className="text-sm text-foreground">AI powered qualification</span>
                  </div>
                </div>
                <div className="p-4 bg-red-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                    <span className="text-sm text-muted-foreground">Manual qualification</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-4 bg-gray-50 flex items-center justify-center">
                  <h4 className="font-medium text-foreground">Delivery Speed</h4>
                </div>
                <div className="p-4 bg-green-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                    <span className="text-sm text-foreground">Real time delivery</span>
                  </div>
                </div>
                <div className="p-4 bg-red-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                    <span className="text-sm text-muted-foreground">Batch delivery</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-4 bg-gray-50 flex items-center justify-center">
                  <h4 className="font-medium text-foreground">Sector Expertise</h4>
                </div>
                <div className="p-4 bg-green-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                    <span className="text-sm text-foreground">Multi sector expertise</span>
                  </div>
                </div>
                <div className="p-4 bg-red-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                    <span className="text-sm text-muted-foreground">Limited sector focus</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-4 bg-gray-50 flex items-center justify-center">
                  <h4 className="font-medium text-foreground">Pricing Structure</h4>
                </div>
                <div className="p-4 bg-green-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                    <span className="text-sm text-foreground">Transparent pricing</span>
                  </div>
                </div>
                <div className="p-4 bg-red-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                    <span className="text-sm text-muted-foreground">Hidden fees</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-4 bg-gray-50 flex items-center justify-center">
                  <h4 className="font-medium text-foreground">Performance</h4>
                </div>
                <div className="p-4 bg-green-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                    <span className="text-sm text-foreground">Proven results</span>
                  </div>
                </div>
                <div className="p-4 bg-red-50 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                    <span className="text-sm text-muted-foreground">Inconsistent results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
