interface SocialLinks {
  website?: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
  youtube?: string;
  whatsapp?: string;
}

interface CommunityPartner {
  name: string;
  logoPath: string;
  socials: SocialLinks;
}

interface CommunityPartnersContent {
  title: string;
  description: string;
  partners: CommunityPartner[];
}

export const communityPartnersContent: CommunityPartnersContent = {
  title: 'Community Partners',
  description:
    'The amazing communities who help us spread the love for React.',
  partners: [
    {
      name: 'React Hyderabad',
      logoPath: 'ReactHydLandscapeLogo.jpg',
      socials: {
        website: 'https://reacthyderabad.com',
        linkedin: 'https://www.linkedin.com/company/reacthyderabad/',
        instagram: 'https://www.instagram.com/reacthyderabad',
        x: 'https://x.com/react_hyderabad',
        youtube: 'https://www.youtube.com/@reacthyderabad',
      },
    },
    {
      name: 'Sample Community',
      logoPath: '',
      socials: {
        website: 'https://example.com',
        linkedin: 'https://www.linkedin.com/company/example/',
        x: 'https://x.com/example',
        youtube: 'https://www.youtube.com/@example',
      },
    },
  ],
};
