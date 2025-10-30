export interface EmailData {
  from: string
  to: string
  subject: string
  date: string
  headerTitle: string
  headerDescription: string
  metrics: {
    amount: string
    term: string
    priority: string
  }
  assessment: Array<{ label: string; value: string }>
  companyInfo?: Record<string, string>
  directorInfo?: Record<string, string>
  contactInfo: Record<string, string>
  qualification: string[]
  actionRequired: {
    description: string
    items: string[]
    bestTime: string
    priority: string
  }
  footer: {
    notification: string
    contactLabel: string
    contactEmail: string
    submissionId: string
    copyright: string
    note: string
  }
}

export const commercialFinanceEmail: EmailData = {
  from: 'noreply@sendlead.co',
  to: 'team@fundingpartners.co.uk',
  subject: 'New Lead - John Smith - Pre-approved for £150,000',
  date: '29 October 2025 at 13:20',
  headerTitle: 'New Lead Notification',
  headerDescription: 'A new qualified lead has completed the assessment and requires your attention',
  metrics: {
    amount: '£150,000',
    term: '1-5 years',
    priority: 'High',
  },
  assessment: [
    { label: 'Business Owner', value: 'Yes' },
    { label: 'Loan Amount', value: '£150,000' },
    { label: 'Trading Duration', value: '24+ months' },
    { label: 'Annual Turnover', value: '£450,000' },
    { label: 'Company Type', value: 'Limited company' },
    { label: 'Finance Purpose', value: 'Working capital' },
    { label: 'Credit Profile', value: 'Excellent' },
    { label: 'Homeowner', value: 'Yes' },
  ],
  companyInfo: {
    companyName: 'Smith & Co Limited',
    companyNumber: '12345678',
    status: 'Active',
    incorporationDate: '15 May 2019',
    registeredAddress: '123 Business Street, London, SW1A 1AA',
    sicCodes: '62012, 70229',
    description: 'Business and domestic software development',
  },
  directorInfo: {
    name: 'SMITH, John',
    role: 'Director',
    appointedDate: '15 May 2019',
    nationality: 'British',
    occupation: 'Software Developer',
  },
  contactInfo: {
    fullName: 'John Smith',
    emailAddress: 'john.smith@example.com',
    phoneNumber: '+44 7123 456789',
    submissionId: 'abc123-def456-ghi789',
  },
  qualification: [
    'Business Owner: Yes',
    'Trading for 12+ months: Yes',
    'Limited Company: Yes',
    'Annual Turnover ≥ £100,000: Yes',
  ],
  actionRequired: {
    description: 'Please contact this lead as soon as possible.',
    items: [
      'Lead has been pre-qualified and is ready to proceed',
      'Contact details provided above - phone verified via OTP',
      'Lead is expecting a call to discuss funding options',
      'All qualification criteria have been met',
    ],
    bestTime: 'Best time to call: Business hours (9am - 5pm)',
    priority: 'Lead priority: Qualified and ready to proceed',
  },
  footer: {
    notification: 'This notification was automatically generated from a completed assessment.',
    contactLabel: 'If you have any questions about this lead or need assistance, please contact us at',
    contactEmail: 'partners@sendlead.co',
    submissionId: 'Submission ID: abc123-def456-ghi789',
    copyright: '© 2025 Sendlead. All rights reserved.',
    note: 'Note: This is an example broker notification email showing the quiz funnel output with dummy data. All data displayed is for demonstration purposes only.',
  },
}

export const wealthManagementEmail: EmailData = {
  from: 'noreply@sendlead.co',
  to: 'advisors@wealthadvisory.com',
  subject: 'New Lead - High Net Worth Prospect',
  date: '29 October 2025 at 14:35',
  headerTitle: 'New Lead Notification',
  headerDescription: 'A new qualified high-value lead has completed the assessment and requires your attention',
  metrics: {
    amount: '£2m - £5m',
    term: 'Comprehensive Planning',
    priority: 'Very High',
  },
  assessment: [
    { label: 'Age Range', value: '55-64' },
    { label: 'Net Worth', value: '£2m - £5m' },
    { label: 'Investment Portfolio', value: '2 pensions' },
    { label: 'Primary Goal', value: 'I have a detailed plan and am on track' },
    { label: 'Tax Strategy', value: 'ISAs (stocks & shares or cash), Pension contributions (SIPP/workplace), Inheritance tax planning' },
    { label: 'Estate Plan', value: 'Yes, comprehensive and recently updated' },
    { label: 'Fee Structure', value: '1% - 1.5%' },
    { label: 'Risk Tolerance', value: 'Very clear - I have documented investment objectives' },
    { label: 'Diversification', value: 'Well diversified across 4+ asset types' },
    { label: 'Rebalancing', value: 'Active strategy with regular rebalancing' },
    { label: 'Financial Adviser', value: 'Yes, and I have regular reviews' },
    { label: 'Adviser Communication', value: 'Monthly' },
    { label: 'Investment Performance', value: 'Holdings in 2 currencies/regions' },
  ],
  contactInfo: {
    fullName: 'Sarah Thompson',
    emailAddress: 'sarah.thompson@example.com',
    phoneNumber: '+44 7123 456790',
    submissionId: 'xyz789-abc123-def456',
  },
  qualification: [
    'Net Worth ≥ £1m: Yes',
    'Has Existing Investment Portfolio: Yes',
    'Active in Financial Planning: Yes',
    'High Value Lead: Yes',
  ],
  actionRequired: {
    description: 'This is a premium high net worth lead requiring immediate attention.',
    items: [
      'Lead meets all qualification criteria for premium service tier',
      'Contact details provided above - phone verified via OTP',
      'Lead is actively engaged in financial planning',
      'High conversion potential - ready for consultation',
    ],
    bestTime: 'Best time to call: Business hours (9am - 5pm)',
    priority: 'Lead priority: Premium - Immediate contact recommended',
  },
  footer: {
    notification: 'This notification was automatically generated from a completed assessment.',
    contactLabel: 'If you have any questions about this lead or need assistance, please contact us at',
    contactEmail: 'partners@sendlead.co',
    submissionId: 'Submission ID: xyz789-abc123-def456',
    copyright: '© 2025 Sendlead. All rights reserved.',
    note: 'Note: This is an example broker notification email showing the quiz funnel output with dummy data. All data displayed is for demonstration purposes only.',
  },
}

