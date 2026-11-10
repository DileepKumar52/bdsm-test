export interface OnboardingState {
  ageGroup: string;
  ageConfirmed: boolean;
  experience: 'new' | 'exploring' | 'some' | 'experienced' | 'unspecified';
  previousTests: string;
  reason: string;
}

export const AGE_GROUPS = [
  '18–24',
  '25–34',
  '35–44',
  '45–54',
  '55+',
  'Prefer not to say'
] as const;

export interface ExperienceOption {
  id: 'new' | 'exploring' | 'some' | 'experienced' | 'unspecified';
  label: string;
  tag: string;
  description: string;
}

export const EXPERIENCE_LEVELS: ExperienceOption[] = [
  {
    id: 'new',
    label: "I'm completely new to BDSM.",
    tag: 'Beginner',
    description: 'We will provide simpler language and helpful contextual definitions.'
  },
  {
    id: 'exploring',
    label: "I'm curious and currently exploring.",
    tag: 'Exploring',
    description: 'We will include helpful contextual explanations alongside scenarios.'
  },
  {
    id: 'some',
    label: 'I have some experience.',
    tag: 'Intermediate',
    description: 'Standard, balanced terminology throughout the questions.'
  },
  {
    id: 'experienced',
    label: 'I have considerable experience.',
    tag: 'Experienced',
    description: 'Concise phrasing utilizing familiar community terminology.'
  },
  {
    id: 'unspecified',
    label: 'Prefer not to say.',
    tag: 'Standard',
    description: 'Standard terminology without specialized adaptation.'
  }
];

export const PREVIOUS_TESTING = [
  'No, this is my first BDSM test.',
  "Yes, I've taken one before.",
  "Yes, I've taken several BDSM tests.",
  'Prefer not to say.'
] as const;

export const TEST_REASONS = [
  'I want to understand myself better.',
  'I want to explore my interests and preferences.',
  'I want to learn more about BDSM.',
  'I want to compare my results with a partner.',
  "I'm simply curious.",
  'Prefer not to say.'
] as const;

