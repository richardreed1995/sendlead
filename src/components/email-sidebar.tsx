'use client'

import { Building2, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmailSidebarProps {
  selectedVertical: 'commercial-finance' | 'wealth-management'
  onVerticalChange: (vertical: 'commercial-finance' | 'wealth-management') => void
}

const verticals = [
  {
    id: 'commercial-finance' as const,
    name: 'Commercial Finance',
    icon: Building2,
    description: 'Business loans and commercial financing',
  },
  {
    id: 'wealth-management' as const,
    name: 'Wealth Management',
    icon: TrendingUp,
    description: 'Financial advisory and investment services',
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


