'use client'

import { Building2, TrendingUp, User, Home, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

export type VerticalType = 'business-loans' | 'wealth-management' | 'financial-advisor' | 'bridging-loans' | 'invoice-finance'

interface EmailSidebarProps {
  selectedVertical: VerticalType
  onVerticalChange: (vertical: VerticalType) => void
}

const verticals = [
  {
    id: 'business-loans' as const,
    name: 'Business Loans',
    icon: Building2,
    description: 'Commercial financing for businesses',
  },
  {
    id: 'wealth-management' as const,
    name: 'Wealth Management',
    icon: TrendingUp,
    description: 'Financial advisory and investment services',
  },
  {
    id: 'financial-advisor' as const,
    name: 'Financial Advisor',
    icon: User,
    description: 'Personal financial planning and advice',
  },
  {
    id: 'bridging-loans' as const,
    name: 'Bridging Loans',
    icon: Home,
    description: 'Short-term property finance',
  },
  {
    id: 'invoice-finance' as const,
    name: 'Invoice Finance',
    icon: FileText,
    description: 'Invoice financing and factoring',
  },
]

export function EmailSidebar({ selectedVertical, onVerticalChange }: EmailSidebarProps) {
  return (
    <div className="bg-card rounded-lg border shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-semibold text-foreground mb-4">Select Vertical</h2>
      <div className="space-y-2">
        {verticals.map((vertical) => {
          const Icon = vertical.icon
          const isSelected = selectedVertical === vertical.id
          
          return (
            <button
              key={vertical.id}
              onClick={() => onVerticalChange(vertical.id)}
              className={cn(
                'w-full text-left p-4 rounded-lg border transition-all duration-200',
                'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                isSelected
                  ? 'border-primary bg-primary/10 shadow-sm'
                  : 'border-border bg-background hover:border-primary/50'
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  'p-2 rounded-lg transition-colors',
                  isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={cn(
                    'font-medium mb-1',
                    isSelected ? 'text-primary' : 'text-foreground'
                  )}>
                    {vertical.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {vertical.description}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}


