export interface ServiceItem {
  title: string;
  description: string;
  duration: string;
  price: string;
  ctaLabel: string;
  ctaHref: string;
}

export const servicesContent = {
  title: 'Services Offered',
  services: [
    {
      title: 'Resume Revamp Express',
      description:
        'Get your resume reviewed and restructured with recruiter-level feedback in a focused live session. Walk away with actionable changes you can implement immediately.',
      duration: '15-Min Live Review',
      price: '₹199',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'LinkedIn Visibility Boost',
      description:
        'Optimize your LinkedIn profile for recruiter visibility. Learn what makes profiles stand out in search results and how to position yourself effectively.',
      duration: '15-Min Live Review',
      price: '₹199',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Quick Career Reset',
      description:
        'A focused clarity call to help you reset your career direction. Ideal if you\'re feeling stuck, confused, or unsure about your next step.',
      duration: '15-Min Live Clarity Call',
      price: '₹199',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Mock Interview Sprint',
      description:
        'Two rounds of mock interviews with real-time feedback. Build confidence and learn what interviewers actually look for in your responses.',
      duration: '2 Rounds (15 Min Each)',
      price: '₹199',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Career Strategy Deep Dive',
      description:
        'A comprehensive 60-minute session covering your full career positioning — resume, LinkedIn, interview strategy, and job search approach. Includes 15 days of follow-up support.',
      duration: '60-Min Session + 15 Days Support',
      price: '₹699',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Career Continuity Plan',
      description:
        'Monthly check-ins to keep your career trajectory on track. Regular guidance, accountability, and strategic adjustments as you progress.',
      duration: 'Monthly Support',
      price: '₹149',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Placement Accelerator – 7 Day Program',
      description:
        'An intensive 7-day daily program designed to fast-track your placement readiness with structured sessions covering all critical areas.',
      duration: 'Daily 1 Hour',
      price: '₹499',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Campus2Corporate Pro',
      description:
        'A comprehensive program designed to bridge the gap between campus life and corporate readiness. Covers everything from professional communication to workplace expectations.',
      duration: 'Contact for Details',
      price: 'Contact for Pricing',
      ctaLabel: 'Enquire via Form',
      ctaHref: '#contact',
    },
  ] as ServiceItem[],
};
