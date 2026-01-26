
import React from 'react';
import { Project, Milestone, MartechGroup } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'storm-partners',
    name: 'STORM Partners',
    category: 'Tier-1 Web3 Consultancy | GTM Strategy',
    description: 'Directing the growth engine for Europe\'s leading Web3 professional services firm, providing institutional-grade go-to-market solutions.',
    highlights: [
      'Leading full-funnel growth and marketing operations for the entire group',
      'Architecting GTM strategies for institutional-grade Web3 ventures and protocols',
      'Scaling the "Growth-as-a-Service" vertical for ecosystem partners',
      'Driving high-level brand authority in the decentralized economy through strategic thought leadership'
    ],
    tags: ['Web3', 'Consultancy', 'GTM', 'Institutional', 'Strategy'],
    stats: 'Director of Growth'
  },
  {
    id: 'aperture',
    name: 'Aperture SA',
    category: 'Institutional Digital Assets & Banking',
    description: 'Established the digital asset vertical in a regulated banking environment during high-growth M&A periods.',
    highlights: [
      'Established digital assets pod from scratch within a traditional institutional framework',
      'Managed a high-performance team of 12 marketers during the Ripple/Metaco acquisition',
      'Led SEBA Bank\'s evolution to AMINA Bank rebranding and global positioning'
    ],
    tags: ['Banking', 'Web3', 'M&A', 'Custody'],
    stats: '350% Avg. Growth'
  },
  {
    id: 'ledgy',
    name: 'Ledgy AG',
    category: 'FinTech SaaS | Equity Management',
    description: 'Redefined brand positioning for the leading European equity platform, becoming the first Swiss Sequoia-backed company.',
    highlights: [
      'First marketing hire, scaled growth team to 11 experts globally',
      'Led growth through Series A & B funding rounds ($20M+)',
      'Conceptualized and executed the "State of Equity Report", a cornerstone industry resource'
    ],
    tags: ['FinTech', 'Equity', 'Sequoia', 'Series B'],
    stats: 'Sequoia Backed'
  },
  {
    id: 'gmelius',
    name: 'Gmelius SA',
    category: 'B2B2C Enterprise SaaS | AI Workflow',
    description: 'Pioneered a new category in workplace collaboration and automation, leading to Y-Combinator acceptance.',
    highlights: [
      'First marketing hire, architecting the initial growth engine',
      'Won Disrupt Berlin Pitch competition against 500+ startups',
      'Led Swiss tech history as the first Swiss company accepted into Y-Combinator'
    ],
    tags: ['SaaS', 'AI', 'Workflow', 'Series A', 'YC'],
    stats: 'YC Alumni'
  }
];

export const MILESTONES: Milestone[] = [
  { year: '2025', description: 'Director of Growth & Marketing at STORM Partners' },
  { year: '2024', description: 'Grew Swiss-Licensed Digital Asset Fintech (AMINA Bank)' },
  { year: '2023', description: 'Launched SystemTwo, Web3 Growth Consultancy' },
  { year: '2022', description: 'Head of Digital Assets Growth at Aperture' },
  { year: '2020', description: 'Scaled Ledgy through Series A & B (Sequoia Capital)' },
  { year: '2018', description: 'Led Gmelius growth through Y-Combinator & Series A' }
];

export const MARTECH: MartechGroup[] = [
  { category: 'CRM Systems', tools: ['Hubspot', 'Salesforce'] },
  { category: 'Growth Tech', tools: ['Clay', 'Make', 'n8n', 'Instantly', 'lemlist'] },
  { category: 'Web-Dev & CMS', tools: ['WordPress', 'Framer', 'WebFlow'] },
  { category: 'AI Engineering', tools: ['CustomGPTs', 'ChatGPT', 'DeepSeek', 'ClaudeAI'] },
  { category: 'SEO & Search', tools: ['Ahrefs', 'Semrush', 'ClearScope', 'Thruu'] },
  { category: 'Analytics', tools: ['GA4', 'Microsoft Clarity', 'Looker', 'Power BI'] }
];

export const SKILLS = [
  'Brand Building', 'Sales Enablement', 'Product Marketing',
  'Demand Generation', 'Thought Leadership', 'Performance Marketing',
  'Account-Based Marketing', 'Technical Growth Marketing', 'SEO & GEO Content',
  'Marketing Automation', 'Data Analytics', 'Conversion Rate Optimization'
];
