export interface QualificationCriteria {
  qualified: string[]
  unqualified: string[]
}

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
  qualificationCriteria: QualificationCriteria
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

export const businessLoanEmail: EmailData = {
  from: 'noreply@sendlead.co',
  to: 'team@fundingpartners.co.uk',
  subject: 'New Lead - John Smith - £150,000 Business Loan',
  date: '29 October 2025 at 13:20',
  headerTitle: 'New Lead Notification',
  headerDescription: 'A new qualified lead has completed the assessment',
  metrics: {
    amount: '£150,000',
    term: '1-5 years',
    priority: 'High',
  },
  assessment: [
    { label: 'Loan Amount', value: '£150,000' },
    { label: 'Trading Duration', value: '24 months' },
    { label: 'Annual Turnover', value: '£450,000' },
    { label: 'Loan Purpose', value: 'Working capital' },
    { label: 'Timeline', value: 'Within 3 months' },
    { label: 'Decision Maker', value: 'Director' },
  ],
  companyInfo: {
    companyName: 'Smith & Co Limited',
    companyNumber: '12345678',
    registeredAddress: '123 Business Street, London, SW1A 1AA',
  },
  contactInfo: {
    fullName: 'John Smith',
    emailAddress: 'john.smith@example.com',
    phoneNumber: '+44 7123 456789',
    submissionId: 'abc123-def456-ghi789',
  },
  qualification: [
    'Loan Amount: £150,000 (≥ £10,000)',
    'Trading Status: 24 months (≥ 12 months)',
    'Annual Turnover: £450,000 (≥ £250,000)',
    'Loan Purpose: Working capital (legitimate business use)',
    'Timeline: Within 3 months',
    'Decision Maker: Director',
    'UK-Based: Yes',
    'Repayment Ability: Yes',
    'Business Type: Suitable',
    'Verified Contact: Yes',
  ],
  qualificationCriteria: {
    qualified: [
      'Loan Amount: £10,000+',
      'Trading Status: Trading for 12+ months',
      'Annual Turnover: £250,000+',
      'Business Type: Limited Company or LLP',
      'Verified Contact: Email and phone verified via OTP',
    ],
    unqualified: [
      'Loan Amount: Under £10,000',
      'Trading Status: Less than 12 months',
      'Annual Turnover: Under £250,000',
      'Business Type: Sole trader or other',
      'Verified Contact: Unable to verify',
    ],
  },
  actionRequired: {
    description: 'Please contact this lead as soon as possible.',
    items: [
      'Lead has been pre-qualified and is ready to proceed',
      'Contact details verified via OTP',
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
  headerDescription: 'A new qualified high-value lead has completed the assessment',
  metrics: {
    amount: '£2m - £5m',
    term: 'Comprehensive Planning',
    priority: 'Very High',
  },
  assessment: [
    { label: 'Age Range', value: '55-64' },
    { label: 'Net Worth', value: '£2m - £5m' },
    { label: 'Investment Portfolio', value: '2 pensions' },
    { label: 'Primary Goal', value: 'Detailed plan and on track' },
    { label: 'Tax Strategy', value: 'ISAs, Pensions, IHT planning' },
    { label: 'Estate Plan', value: 'Comprehensive and updated' },
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
  qualificationCriteria: {
    qualified: [
      'Net Worth: £1m+',
      'Has Investment Portfolio: Yes',
      'Active Planning: Yes',
      'High Value Lead: Yes',
      'Verified Contact: Email and phone verified via OTP',
    ],
    unqualified: [
      'Net Worth: Under £1m',
      'No Investment Portfolio',
      'Not Active in Planning',
      'Low Value Lead',
      'Verified Contact: Unable to verify',
    ],
  },
  actionRequired: {
    description: 'This is a premium high net worth lead requiring immediate attention.',
    items: [
      'Lead meets all qualification criteria',
      'Contact details verified via OTP',
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

export const financialAdvisorEmail: EmailData = {
  from: 'noreply@sendlead.co',
  to: 'advisors@financialadvisory.com',
  subject: 'New Lead - David Williams - Financial Planning',
  date: '29 October 2025 at 15:10',
  headerTitle: 'New Lead Notification',
  headerDescription: 'A new qualified lead has completed the assessment',
  metrics: {
    amount: '£500k - £1m',
    term: 'Comprehensive Planning',
    priority: 'High',
  },
  assessment: [
    { label: 'Age Range', value: '45-54' },
    { label: 'Net Worth', value: '£500k - £1m' },
    { label: 'Investment Portfolio', value: '1 pension' },
    { label: 'Primary Goal', value: 'Planning for retirement' },
    { label: 'Current Adviser', value: 'No' },
    { label: 'Timeline', value: 'Within 6 months' },
  ],
  contactInfo: {
    fullName: 'David Williams',
    emailAddress: 'david.williams@example.com',
    phoneNumber: '+44 7123 456791',
    submissionId: 'def456-ghi789-jkl012',
  },
  qualification: [
    'Net Worth: Qualified',
    'Investment Portfolio: Yes',
    'Looking for Adviser: Yes',
    'Timeline: Within 6 months',
  ],
  qualificationCriteria: {
    qualified: [
      'Net Worth: £250k+',
      'Has Investment Portfolio: Yes',
      'Looking for Adviser: Yes',
      'Timeline: Within 6 months',
      'Verified Contact: Email and phone verified via OTP',
    ],
    unqualified: [
      'Net Worth: Under £250k',
      'No Investment Portfolio',
      'Not Looking for Adviser',
      'Timeline: Beyond 6 months',
      'Verified Contact: Unable to verify',
    ],
  },
  actionRequired: {
    description: 'Please contact this lead as soon as possible.',
    items: [
      'Lead has been pre-qualified',
      'Contact details verified via OTP',
    ],
    bestTime: 'Best time to call: Business hours (9am - 5pm)',
    priority: 'Lead priority: Qualified and ready to proceed',
  },
  footer: {
    notification: 'This notification was automatically generated from a completed assessment.',
    contactLabel: 'If you have any questions about this lead or need assistance, please contact us at',
    contactEmail: 'partners@sendlead.co',
    submissionId: 'Submission ID: def456-ghi789-jkl012',
    copyright: '© 2025 Sendlead. All rights reserved.',
    note: 'Note: This is an example broker notification email showing the quiz funnel output with dummy data. All data displayed is for demonstration purposes only.',
  },
}

export const bridgingLoanEmail: EmailData = {
  from: 'noreply@sendlead.co',
  to: 'team@bridgingfinance.co.uk',
  subject: 'New Lead - Emma Brown - £250,000 Bridging Loan',
  date: '29 October 2025 at 16:45',
  headerTitle: 'New Lead Notification',
  headerDescription: 'A new qualified lead has completed the assessment',
  metrics: {
    amount: '£250,000',
    term: '12 months',
    priority: 'High',
  },
  assessment: [
    { label: 'Loan Amount', value: '£250,000' },
    { label: 'Security Available', value: 'Property' },
    { label: 'Timeline', value: 'Within 3 months' },
    { label: 'Property Status', value: 'Under offer' },
    { label: 'Exit Strategy', value: 'Sale' },
    { label: 'Use Case', value: 'Chain break' },
  ],
  contactInfo: {
    fullName: 'Emma Brown',
    emailAddress: 'emma.brown@example.com',
    phoneNumber: '+44 7123 456792',
    submissionId: 'ghi789-jkl012-mno345',
  },
  companyInfo: {
    companyName: 'Brown Property Developments Limited',
    companyNumber: '11223344',
    registeredAddress: '789 Property Lane, London, SW1A 2BB',
  },
  qualification: [
    'Loan Amount: £250,000 (≥ £50,000)',
    'Security Available: Property',
    'Timeline: Within 3 months',
    'Property Status: Under offer',
    'Exit Strategy: Sale',
    'Use Case: Chain break',
    'Decision Maker: Yes',
    'UK-Based: Yes',
    'Realistic Expectations: Yes',
    'Verified Contact: Yes',
  ],
  qualificationCriteria: {
    qualified: [
      'Property Value: £100,000+',
      'Loan Amount: £25,000+',
      'Loan-to-Value (LTV): ≤ 75%',
      'Property Location: England, Wales, or Scotland',
      'Borrower Type: UK individual, Ltd company, or SPV',
      'Verified Contact: Email and phone verified via OTP',
    ],
    unqualified: [
      'Property Value: Under £100,000',
      'Loan Amount: Under £25,000',
      'Loan-to-Value (LTV): > 75%',
      'Property Location: Outside England, Wales, or Scotland',
      'Borrower Type: Not UK individual, Ltd company, or SPV',
      'Verified Contact: Unable to verify',
    ],
  },
  actionRequired: {
    description: 'Please contact this lead as soon as possible.',
    items: [
      'Lead has been pre-qualified',
      'Contact details verified via OTP',
    ],
    bestTime: 'Best time to call: Business hours (9am - 5pm)',
    priority: 'Lead priority: Qualified and ready to proceed',
  },
  footer: {
    notification: 'This notification was automatically generated from a completed assessment.',
    contactLabel: 'If you have any questions about this lead or need assistance, please contact us at',
    contactEmail: 'partners@sendlead.co',
    submissionId: 'Submission ID: ghi789-jkl012-mno345',
    copyright: '© 2025 Sendlead. All rights reserved.',
    note: 'Note: This is an example broker notification email showing the quiz funnel output with dummy data. All data displayed is for demonstration purposes only.',
  },
}

export const invoiceFinanceEmail: EmailData = {
  from: 'noreply@sendlead.co',
  to: 'team@invoicefinance.co.uk',
  subject: 'New Lead - Michael Green - Invoice Finance £150,000',
  date: '29 October 2025 at 17:20',
  headerTitle: 'New Lead Notification',
  headerDescription: 'A new qualified lead has completed the assessment',
  metrics: {
    amount: '£150,000',
    term: 'Ongoing',
    priority: 'High',
  },
  assessment: [
    { label: 'Annual Turnover', value: '£500,000 - £1 million' },
    { label: 'Trading Duration', value: '2-5 years' },
    { label: 'Customer Type', value: 'B2B' },
    { label: 'Typical Invoice Value', value: '£5,000 - £10,000' },
    { label: 'Payment Terms', value: '30-60 days' },
    { label: 'Funding Required', value: '£100,000 - £250,000' },
  ],
  companyInfo: {
    companyName: 'Green Trading Limited',
    companyNumber: '87654321',
    registeredAddress: '456 Commerce Road, Manchester, M1 1AB',
  },
  contactInfo: {
    fullName: 'Michael Green',
    emailAddress: 'michael.green@example.com',
    phoneNumber: '+44 7123 456793',
    submissionId: 'jkl012-mno345-pqr678',
  },
  qualification: [
    'Annual Turnover: £500k - £1m (≥ £100k)',
    'Trading Duration: 2-5 years (≥ 6 months)',
    'Customer Type: B2B',
    'Typical Invoice Value: £5k - £10k (≥ £1k)',
    'Payment Terms: 30-60 days',
    'Funding Required: £100k - £250k (≥ £10k)',
    'Role: Director',
    'UK-Based: England',
    'Business Type: Limited Company',
    'Verified Contact: Yes',
  ],
  qualificationCriteria: {
    qualified: [
      'Business Type: UK Limited Company',
      'Trading History: 3 months+',
      'Annual Turnover: £50,000+',
      'Invoice Customer: Other UK business (Ltd/LLP)',
      'Payment Terms: Less than 90 days',
      'Verified Contact: Email and phone verified via OTP',
    ],
    unqualified: [
      'Business Type: Not UK Limited Company',
      'Trading History: Less than 3 months',
      'Annual Turnover: Under £50,000',
      'Invoice Customer: Not other UK business (Ltd/LLP)',
      'Payment Terms: 90 days or more',
      'Verified Contact: Unable to verify',
    ],
  },
  actionRequired: {
    description: 'Please contact this lead as soon as possible.',
    items: [
      'Lead has been pre-qualified',
      'Contact details verified via OTP',
    ],
    bestTime: 'Best time to call: Business hours (9am - 5pm)',
    priority: 'Lead priority: Qualified and ready to proceed',
  },
  footer: {
    notification: 'This notification was automatically generated from a completed assessment.',
    contactLabel: 'If you have any questions about this lead or need assistance, please contact us at',
    contactEmail: 'partners@sendlead.co',
    submissionId: 'Submission ID: jkl012-mno345-pqr678',
    copyright: '© 2025 Sendlead. All rights reserved.',
    note: 'Note: This is an example broker notification email showing the quiz funnel output with dummy data. All data displayed is for demonstration purposes only.',
  },
}

