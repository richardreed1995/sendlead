# Vertical Landing Page Template

This template shows how to create landing pages for different verticals using the Sendlead header and footer.

## Quick Start

1. **Create the page file**: `src/app/[vertical]/page.tsx`
2. **Create components**: Copy and customize the mortgage components
3. **Update content**: Replace mortgage-specific content with vertical-specific content
4. **Update styling**: Use the Sendlead brand colors (`bg-[#2998FD] hover:bg-[#1f7fd9]`)

## File Structure

```
src/app/[vertical]/
└── page.tsx

src/components/
├── hero-section-[vertical].tsx
├── benefits-[vertical].tsx
├── results-section-[vertical].tsx
├── automation-flows-[vertical].tsx
├── testimonials-[vertical].tsx
├── cost-comparison-[vertical].tsx
├── final-cta-[vertical].tsx
├── faqs-[vertical].tsx
└── cta-[vertical].tsx
```

## Component Template

### Main Page Component
```tsx
import HeroSection[Vertical] from "@/components/hero-section-[vertical]";
import Testimonials[Vertical] from "@/components/testimonials-[vertical]";
import AutomationFlows[Vertical] from "@/components/automation-flows-[vertical]";
import Benefits[Vertical] from "@/components/benefits-[vertical]";
import FAQs[Vertical] from "@/components/faqs-[vertical]";
import CTA[Vertical] from "@/components/cta-[vertical]";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import ResultsSection[Vertical] from "@/components/results-section-[vertical]";
import CostComparison[Vertical] from "@/components/cost-comparison-[vertical]";
import FinalCTA[Vertical] from "@/components/final-cta-[vertical]";

export default function [Vertical]Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <HeroSection[Vertical] />
        <Benefits[Vertical] />
        <ResultsSection[Vertical] />
        <AutomationFlows[Vertical] />
        <Testimonials[Vertical] />
        <CostComparison[Vertical] />
        <FinalCTA[Vertical] />
        <FAQs[Vertical] />
        <CTA[Vertical] />
      </main>
      <FooterSection />
    </div>
  );
}
```

## Content Customization Guide

### 1. Hero Section
- **Trust indicator**: Update number and industry (e.g., "Trusted by 30+ Insurance Agents")
- **Headline**: Make it vertical-specific (e.g., "Get Qualified Insurance Leads...")
- **Description**: Tailor to the vertical's needs
- **Video**: Keep the same Google Slides presentation

### 2. Benefits Section
- **Title**: "3 Reasons [Vertical] Choose Sendlead:"
- **Benefits**: Customize descriptions for the vertical
- **Icons**: Keep the same icons (DollarSign, Users, Clock)

### 3. Results Section
- **Title**: "Our [Vertical] Results"
- **Case studies**: Create 4 relevant case studies
- **Results**: Use realistic numbers for the vertical

### 4. Automation Flows
- **Title**: "How does [vertical] lead generation work?"
- **Steps**: Keep the same 5 steps, customize descriptions
- **Images**: Use placeholder images or vertical-specific screenshots

### 5. Testimonials
- **Title**: "What Our [Vertical] Clients Say"
- **Testimonials**: Keep the same testimonials for now

### 6. Cost Comparison
- **Title**: "How much to do [vertical] lead generation myself?"
- **Items**: Customize the first item (e.g., "10,000 verified [vertical] contacts")

### 7. FAQs
- **Questions**: Customize for the vertical
- **Answers**: Update to be vertical-specific

### 8. CTAs
- **Text**: Make it vertical-specific
- **Buttons**: Keep the same styling and links

## Brand Colors

Use these Sendlead brand colors consistently:
- **Primary**: `bg-[#2998FD] hover:bg-[#1f7fd9]`
- **Text**: Standard Tailwind text colors
- **Backgrounds**: `bg-white`, `bg-gray-50`, `bg-black`

## Common Vertical Examples

### Life Insurance
- Trust indicator: "Trusted by 40+ Life Insurance Agents"
- Headline: "Get Qualified Life Insurance Leads Delivered To Your CRM"
- Results: Focus on policy sales and client acquisition

### Business Loans
- Trust indicator: "Trusted by 25+ Business Loan Brokers"
- Headline: "Get Qualified Business Loan Leads Delivered To Your CRM"
- Results: Focus on loan amounts and approval rates

### Auto Insurance
- Trust indicator: "Trusted by 35+ Auto Insurance Agents"
- Headline: "Get Qualified Auto Insurance Leads Delivered To Your CRM"
- Results: Focus on policy sales and customer retention

## Quick Copy-Paste Commands

To create a new vertical, run these commands:

```bash
# Create directory
mkdir -p src/app/[vertical]

# Copy and rename components
cp src/components/hero-section-mortgage.tsx src/components/hero-section-[vertical].tsx
cp src/components/benefits-mortgage.tsx src/components/benefits-[vertical].tsx
# ... repeat for all components

# Create page file
cp src/app/mortgage/page.tsx src/app/[vertical]/page.tsx
```

## Notes

- Keep the same structure and flow for consistency
- Update all mortgage-specific language to the new vertical
- Maintain the same visual hierarchy and spacing
- Use the same button styling and CTAs
- Keep the same Google Slides presentation link
- All components should link to `/get-started` for consistency
