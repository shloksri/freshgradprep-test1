export const navbarContent = {
  brand: 'FreshGradPrep',
  links: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Founder', href: '#founder' },
  ],
  ctaLabel: 'Book Session',
  ctaHref: '#booking',
};

export const heroContent = {
  headline: 'Career Clarity Built on Real Hiring Experience',
  subheadline:
    'FreshGradPrep helps students, fresh graduates, and professionals understand how recruitment actually works — so they can position themselves strategically in today\'s job market.',
  trustLine: 'Built on real HR insight and 9 years of hiring experience.',
  primaryCta: { label: 'Book a Career Session', href: '#booking' },
  secondaryCta: { label: 'Explore Services', href: '#services' },
  trustChips: [
    'Real HR Insight',
    'Practical Guidance',
    'Structured Clarity',
  ],
};

export const problemContent = {
  title: 'Why Job Searching Feels So Confusing',
  problems: [
    {
      title: 'No Responses',
      description:
        'Sending resumes consistently but not getting any callbacks or interview invitations.',
    },
    {
      title: 'Recruiter Mystery',
      description:
        'Unsure how recruiters actually evaluate profiles, resumes, and applications.',
    },
    {
      title: 'LinkedIn Confusion',
      description:
        'LinkedIn visibility feels unclear — not sure what works and what doesn\'t.',
    },
    {
      title: 'Interview Anxiety',
      description:
        'Interviews feel unpredictable with no structured way to prepare effectively.',
    },
  ],
  transitionLine:
    'FreshGradPrep simplifies this with practical, recruiter-backed guidance.',
};

export const aboutContent = {
  title: 'What is FreshGradPrep?',
  paragraphs: [
    'FreshGradPrep is a career clarity platform built on real HR insight and 9 years of hiring experience. It simplifies how recruitment actually works and helps individuals position themselves strategically in a competitive job market.',
    'Everything here is practical, structured, and grounded in what recruiters genuinely evaluate — not generic advice you\'ll find recycled across the internet.',
    'Whether you\'re a student preparing for placements or a professional seeking your next move, FreshGradPrep gives you the recruiter-backed perspective you need to stand out.',
  ],
  highlights: [
    'Real HR insights from actual hiring experience',
    'Practical guidance — not theory or templates',
    'Structured career clarity for every stage',
  ],
};

export const audienceContent = {
  title: 'Who FreshGradPrep Is Designed For',
  cards: [
    {
      title: 'Students',
      description:
        'Preparing for campus placements and looking for a competitive edge with recruiter-backed strategies.',
    },
    {
      title: 'Fresh Graduates',
      description:
        'Entering the job market for the first time and need clarity on how hiring actually works.',
    },
    {
      title: 'Early Professionals',
      description:
        'Feeling stuck or directionless in your first few years and looking for career momentum.',
    },
    {
      title: 'Experienced Professionals',
      description:
        'Seeking clarity and strategic positioning for your next career move or transition.',
    },
    {
      title: 'Job Seekers',
      description:
        'Anyone confused about low job responses, weak positioning, or unclear career paths.',
    },
  ],
};

export const impactContent = {
  title: 'The Impact So Far',
  stats: [
    { value: '500+', label: 'Students Guided' },
    { value: '9+', label: 'Years of Hiring Experience' },
    { value: '300+', label: 'Resume Reviews' },
    { value: '200+', label: 'Career Strategy Sessions' },
  ],
};

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

export const founderContent = {
  name: 'Bhargavi M.',
  title: 'Meet the Founder',
  role: 'Founder, FreshGradPrep',
  bio: [
    'With 9 years of hands-on hiring experience across industries, Bhargavi M. has seen firsthand what makes candidates stand out — and what causes them to be overlooked.',
    'FreshGradPrep was born from a simple observation: most career advice available today is generic, recycled, and disconnected from how recruiters actually think. Bhargavi built this platform to bridge that gap — offering practical, recruiter-backed career guidance that helps people position themselves strategically.',
    'Her approach is grounded in real experience, not theory. Every session, review, and program is designed to give you the clarity and confidence to navigate the job market on your own terms.',
  ],
  highlights: [
    '9 years of hiring experience',
    'Practical, recruiter-backed perspective',
    'Focused on strategic positioning',
    'Helping people find career clarity',
  ],
};

export const testimonialsContent = {
  title: 'What People Say',
  testimonials: [
    {
      name: 'Priya S.',
      designation: 'Final Year Student',
      content:
        'FreshGradPrep completely changed how I approach placements. The resume review was eye-opening — I never realized what recruiters actually look for. Landed my first offer within 3 weeks of applying the changes.',
    },
    {
      name: 'Rahul K.',
      designation: 'Fresh Graduate',
      content:
        'I was sending out applications for months with zero callbacks. After one session with Bhargavi, I understood exactly what I was doing wrong. The guidance is practical and real — not the usual generic stuff.',
    },
    {
      name: 'Ananya M.',
      designation: 'Early Career Professional',
      content:
        'The Career Strategy Deep Dive was worth every rupee. Bhargavi helped me see my career from a recruiter\'s perspective and gave me a clear roadmap. The 15-day follow-up support was incredibly helpful.',
    },
    {
      name: 'Vikram T.',
      designation: 'Career Switcher',
      content:
        'I was stuck in a role I hated with no idea how to pivot. The clarity I got from FreshGradPrep helped me reposition myself confidently. Within 2 months, I transitioned into a role I actually enjoy.',
    },
    {
      name: 'Sneha R.',
      designation: 'MBA Student',
      content:
        'The LinkedIn Visibility Boost was a game-changer. I started getting recruiter messages within a week of updating my profile based on the feedback. Highly recommend for anyone serious about their career.',
    },
  ],
};

export const bookingContent = {
  title: 'Ready to Get Career Clarity?',
  description:
    'Take the first step toward understanding how recruitment really works. Book a session, ask your questions, and get practical guidance tailored to your situation.',
  primaryCta: {
    label: 'Book via Calendly',
    href: 'https://calendly.com/freshgradprep',
  },
  secondaryCta: {
    label: 'Chat on WhatsApp',
    href: 'https://wa.me/919876543210',
  },
  calendlyPlaceholder: 'https://calendly.com/freshgradprep',
  whatsappNumber: '+91 98765 43210',
};

export const contactContent = {
  title: 'Get in Touch',
  description:
    'Have a question or want to learn more? Reach out through any of the channels below.',
  googleFormLink: 'https://forms.google.com/freshgradprep',
  googleFormLabel: 'Fill the Enquiry Form',
  whatsappNumber: '+91 98765 43210',
  whatsappHref: 'https://wa.me/919876543210',
  email: 'hello@freshgradprep.com',
};

export const footerContent = {
  brand: 'FreshGradPrep',
  tagline: 'Career clarity built on real hiring experience.',
  quickLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Book Session', href: '#booking' },
  ],
  serviceLinks: [
    { label: 'Resume Revamp Express', href: '#services' },
    { label: 'LinkedIn Visibility Boost', href: '#services' },
    { label: 'Career Strategy Deep Dive', href: '#services' },
    { label: 'Placement Accelerator', href: '#services' },
  ],
  founder: 'Bhargavi M.',
  contactEmail: 'hello@freshgradprep.com',
  contactWhatsApp: '+91 98765 43210',
  copyright: `© ${new Date().getFullYear()} FreshGradPrep. All rights reserved.`,
  madeWithLove: 'Made with <3 in India by the React Hyderabad community',
};
