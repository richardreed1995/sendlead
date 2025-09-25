import { Logo } from '@/components/logo'

export default function FooterSection() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="text-center">
                    <div className="mb-6">
                        <Logo />
                    </div>
                    
                    <div className="space-y-4 text-sm text-gray-600 max-w-3xl mx-auto">
                        <p>
                            <strong>Disclaimer:</strong> Sendlead is a lead generation service provider. We do not provide financial advice or guarantee specific outcomes. 
                            All leads are generated through our proprietary systems and delivered to your CRM. Results may vary based on your sales process and market conditions.
                        </p>
                        
                        <p>
                            <strong>Data Protection:</strong> We are committed to protecting your data and comply with UK GDPR regulations. 
                            All leads are generated with proper consent and data protection measures in place.
                        </p>
                        
                        <p>
                            <strong>Terms:</strong> By using our services, you agree to our terms and conditions. 
                            Lead quality and conversion rates are not guaranteed and may vary.
                        </p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Sendlead. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
