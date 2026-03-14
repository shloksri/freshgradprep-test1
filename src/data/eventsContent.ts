interface EventItem {
  name: string;
  date: string;
  timings: string;
  mode: string;
  venue: string;
  registrationLink: string;
  registrationLabel: string;
}

interface EventsContent {
  title: string;
  events: EventItem[];
}

export const eventsContent: EventsContent = {
  title: 'Upcoming Events',
  events: [
    {
      name: 'How Hiring Actually Works (From the Other Side of the Table)',
      date: '22nd Mar, 2026',
      timings: '4 PM to 6 PM',
      mode: 'Offline',
      venue: 'TBA',
      registrationLink:
        'https://www.goavo.ai/events/forms/fillup?id=69b2b0b44c6ae6af444e13d6',
      registrationLabel: 'RSVP Open',
    },
  ],
};
