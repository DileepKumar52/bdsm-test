export interface DimensionWeight {
  dimensionId: string;
  weight: number; // positive or negative contribution
}

export interface Question {
  id: number;
  text: string;
  category: 'Power Exchange' | 'Physical & Sensation' | 'Psychological & Verbal' | 'Exploration & Play';
  dimensionWeights: DimensionWeight[];
  isQuick: boolean;
}

export const QUESTIONS: Question[] = [
  // 1. Core Power Exchange
  {
    id: 1,
    text: 'I feel a genuine thrill when I take charge, make the decisions, and set the direction during intimate moments.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'dominant', weight: 1.0 },
      { dimensionId: 'submissive', weight: -0.3 }
    ],
    isQuick: true
  },
  {
    id: 2,
    text: 'I find deep relief and relaxation when I let go of control and allow a trusted partner to lead completely.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'submissive', weight: 1.0 },
      { dimensionId: 'dominant', weight: -0.3 }
    ],
    isQuick: true
  },
  {
    id: 3,
    text: 'Depending on my mood or partner, I thoroughly enjoy switching between taking control and relinquishing it.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'switch', weight: 1.0 }
    ],
    isQuick: true
  },
  {
    id: 4,
    text: 'I am drawn to formal structures, rules of etiquette, and clear expectations of honor or ownership in a relationship.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'master_mistress', weight: 0.9 },
      { dimensionId: 'dominant', weight: 0.4 }
    ],
    isQuick: true
  },
  {
    id: 5,
    text: 'Devoting myself in complete service and obedience to someone I respect deeply sounds deeply satisfying to me.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'slave', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.5 }
    ],
    isQuick: true
  },

  // 2. Physical & Sensation
  {
    id: 6,
    text: 'Consensually administering spankings, crops, or impact play to hear my partner gasp or sigh excites me.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'sadist', weight: 1.0 },
      { dimensionId: 'dominant', weight: 0.2 }
    ],
    isQuick: true
  },
  {
    id: 7,
    text: 'Receiving sharp, intense physical sensations (like spanking, biting, or pinching) brings me an intoxicating rush.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'masochist', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.2 }
    ],
    isQuick: true
  },
  {
    id: 8,
    text: 'I am fascinated by the craft and precision of tying a partner up with ropes or securing them with restraints.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'rigger', weight: 1.0 },
      { dimensionId: 'dominant', weight: 0.3 }
    ],
    isQuick: true
  },
  {
    id: 9,
    text: 'Being physically tied up, bound, or completely unable to move gives me a profound sense of surrender and peace.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'rope_bunny', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.4 }
    ],
    isQuick: true
  },

  // 3. Primal
  {
    id: 10,
    text: 'I am drawn to raw, instinctual intimacy involving physical wrestling, pinning down, and asserting animalistic dominance.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'primal_hunter', weight: 1.0 },
      { dimensionId: 'dominant', weight: 0.3 }
    ],
    isQuick: true
  },
  {
    id: 11,
    text: 'I love the adrenaline rush of struggling, trying to break free, and being physically caught and overpowered by my partner.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'primal_prey', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.3 }
    ],
    isQuick: true
  },

  // 4. Verbal & Psychological
  {
    id: 12,
    text: 'Erotic dirty talk, talking down to my partner, or consensually degrading them verbally heightens my arousal.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'degrader', weight: 1.0 },
      { dimensionId: 'dominant', weight: 0.2 }
    ],
    isQuick: true
  },
  {
    id: 13,
    text: 'Being spoken down to, called names, or treated as an object purely for my partner’s pleasure turns me on.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'degradee', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.2 }
    ],
    isQuick: true
  },
  {
    id: 14,
    text: 'Telling my partner what a "good boy" or "good girl" they are and rewarding them with verbal praise brings me immense joy.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'praise_giver', weight: 1.0 },
      { dimensionId: 'caregiver', weight: 0.3 }
    ],
    isQuick: true
  },
  {
    id: 15,
    text: 'Hearing sincere words of affirmation and praise from my partner makes me melt and motivates me to do whatever they ask.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'praise_receiver', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.2 }
    ],
    isQuick: true
  },

  // 5. Exploration, Caregiver, Voyeur, Sensory, Vanilla
  {
    id: 16,
    text: 'I naturally adopt a protective, nurturing, parental-style authority where I look after and gently guide my partner.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'caregiver', weight: 1.0 },
      { dimensionId: 'dominant', weight: 0.2 }
    ],
    isQuick: true
  },
  {
    id: 17,
    text: 'I find comfort and excitement in slipping into an innocent, carefree, or playful persona (such as petplay or being cared for).',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'pet_ageplay', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.3 }
    ],
    isQuick: true
  },
  {
    id: 18,
    text: 'The idea of watching my partner in an intimate act, or having an admiring audience watch us, is highly stimulating.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'voyeur_exhibitionist', weight: 1.0 }
    ],
    isQuick: true
  },
  {
    id: 19,
    text: 'I love experimenting with sensory deprivation (blindfolds, noise-canceling headphones) and temperature play (ice, warm wax).',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'sensory_explorer', weight: 1.0 }
    ],
    isQuick: true
  },
  {
    id: 20,
    text: 'I am most fulfilled by gentle, egalitarian, conventional romantic intimacy without power games, impact, or roles.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'vanilla', weight: 1.0 },
      { dimensionId: 'sadist', weight: -0.4 },
      { dimensionId: 'masochist', weight: -0.4 }
    ],
    isQuick: true
  },
  {
    id: 21,
    text: 'I like when boundaries are clearly negotiated in advance and adhered to with precision and respect.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'master_mistress', weight: 0.4 },
      { dimensionId: 'rigger', weight: 0.4 },
      { dimensionId: 'dominant', weight: 0.3 }
    ],
    isQuick: true
  },
  {
    id: 22,
    text: 'I find physical marks—like handprints, bite marks, or light bruises—erotically satisfying to see or carry.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'masochist', weight: 0.6 },
      { dimensionId: 'primal_prey', weight: 0.5 },
      { dimensionId: 'sadist', weight: 0.3 }
    ],
    isQuick: true
  },
  {
    id: 23,
    text: 'I would rather adapt my role to match what excites my partner at any given moment than stay in one fixed position.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'switch', weight: 0.9 }
    ],
    isQuick: true
  },
  {
    id: 24,
    text: 'Receiving attentive aftercare (cuddling, water, blankets, emotional reassurance) is an indispensable part of my intimacy.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'submissive', weight: 0.4 },
      { dimensionId: 'masochist', weight: 0.4 },
      { dimensionId: 'rope_bunny', weight: 0.4 }
    ],
    isQuick: true
  },

  // -------------------------------------------------------------
  // Comprehensive Only Questions (25 - 64)
  // -------------------------------------------------------------
  {
    id: 25,
    text: 'I get immense satisfaction from planning an elaborate intimate scene and directing each phase with intentionality.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'dominant', weight: 0.8 },
      { dimensionId: 'master_mistress', weight: 0.5 }
    ],
    isQuick: false
  },
  {
    id: 26,
    text: 'The feeling of anticipating what my partner has planned for me makes my heart race with positive anticipation.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'submissive', weight: 0.8 }
    ],
    isQuick: false
  },
  {
    id: 27,
    text: 'I feel comfortable establishing rules for my partner regarding dress, posture, or personal habits within our dynamic.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'master_mistress', weight: 0.9 },
      { dimensionId: 'dominant', weight: 0.5 }
    ],
    isQuick: false
  },
  {
    id: 28,
    text: 'I feel honored when a partner allows me to serve their daily needs, whether making their coffee or kneeling before them.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'slave', weight: 0.9 },
      { dimensionId: 'submissive', weight: 0.5 }
    ],
    isQuick: false
  },
  {
    id: 29,
    text: 'I enjoy the physical challenge of holding my ground and resisting an attempt by my partner to assert dominance.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'primal_prey', weight: 0.7 },
      { dimensionId: 'switch', weight: 0.4 }
    ],
    isQuick: false
  },
  {
    id: 30,
    text: 'The sight of tears of catharsis or heavy breathing caused by intensity I have administered makes me feel connected to my partner.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'sadist', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 31,
    text: 'When sensation gets overwhelmingly intense, my mind floats into a dreamlike, blissful state of mental calm.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'masochist', weight: 0.9 },
      { dimensionId: 'submissive', weight: 0.4 }
    ],
    isQuick: false
  },
  {
    id: 32,
    text: 'I study patterns, knot varieties, and tension distribution to make rope bondage visually stunning and physically secure.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'rigger', weight: 1.0 }
    ],
    isQuick: false
  },
  {
    id: 33,
    text: 'Being suspended in rope or securely fixed so my limbs cannot shift feels like the ultimate physical comfort.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'rope_bunny', weight: 1.0 }
    ],
    isQuick: false
  },
  {
    id: 34,
    text: 'I like testing a partner’s resilience by gradually stepping up the physical intensity to see how much they can handle.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'sadist', weight: 0.8 },
      { dimensionId: 'dominant', weight: 0.4 }
    ],
    isQuick: false
  },
  {
    id: 35,
    text: 'I enjoy pushing past my personal comfort threshold to discover how resilient my body and mind can be.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'masochist', weight: 0.8 }
    ],
    isQuick: false
  },
  {
    id: 36,
    text: 'Growling, biting, tugging hair, and wrestling feel much more natural to me than structured or formal protocols.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'primal_hunter', weight: 0.6 },
      { dimensionId: 'primal_prey', weight: 0.6 }
    ],
    isQuick: false
  },
  {
    id: 37,
    text: 'I find it erotic to physically pin a partner’s arms above their head and maintain intense unbroken eye contact.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'dominant', weight: 0.7 },
      { dimensionId: 'primal_hunter', weight: 0.6 }
    ],
    isQuick: false
  },
  {
    id: 38,
    text: 'Being pinned down and having my freedom of movement temporarily seized by physical strength turns me on intensely.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'submissive', weight: 0.6 },
      { dimensionId: 'primal_prey', weight: 0.7 }
    ],
    isQuick: false
  },
  {
    id: 39,
    text: 'Calling my partner by descriptive, provocative, or degrading terms turns up the heat during intimate moments.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'degrader', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 40,
    text: 'Hearing my partner strip away my modesty by calling me names or describing me as their object makes me intensely aroused.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'degradee', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 41,
    text: 'I prefer using words of encouragement and enthusiastic approval rather than punishment to guide my partner’s behavior.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'praise_giver', weight: 0.9 },
      { dimensionId: 'degrader', weight: -0.3 }
    ],
    isQuick: false
  },
  {
    id: 42,
    text: 'Knowing my partner is genuinely proud of how well I followed their lead fills me with warm contentment.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'praise_receiver', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 43,
    text: 'I find deep satisfaction in providing a calming refuge, drawing a bath, or wrapping up my partner after a difficult day.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'caregiver', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 44,
    text: 'I would love to be taken care of, petted, and relieved of all adult decision-making while wearing comfortable, cute gear.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'pet_ageplay', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 45,
    text: 'The thought of being watched through a doorway, window, or camera while engaged in intimacy is a major fantasy.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'voyeur_exhibitionist', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 46,
    text: 'I enjoy observing others express their desires and kinks, whether through explicit videos, live shows, or munches/parties.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'voyeur_exhibitionist', weight: 0.8 }
    ],
    isQuick: false
  },
  {
    id: 47,
    text: 'Blindfolding a partner and using varying textures (feathers, leather, cold metal, warm breath) is one of my favorite foreplays.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'sensory_explorer', weight: 0.9 },
      { dimensionId: 'dominant', weight: 0.3 }
    ],
    isQuick: false
  },
  {
    id: 48,
    text: 'When I am blindfolded and cannot predict where I will be touched next, every slight sensation feels amplified tenfold.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'sensory_explorer', weight: 0.8 },
      { dimensionId: 'submissive', weight: 0.4 }
    ],
    isQuick: false
  },
  {
    id: 49,
    text: 'I value emotional symmetry and mutuality in the bedroom where neither person holds authority over the other.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'vanilla', weight: 0.9 },
      { dimensionId: 'dominant', weight: -0.3 },
      { dimensionId: 'submissive', weight: -0.3 }
    ],
    isQuick: false
  },
  {
    id: 50,
    text: 'I find elaborate roleplays, uniforms, or titles distracting; I prefer raw, unmediated romantic affection.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'vanilla', weight: 0.9 },
      { dimensionId: 'master_mistress', weight: -0.4 },
      { dimensionId: 'slave', weight: -0.4 }
    ],
    isQuick: false
  },
  {
    id: 51,
    text: 'I enjoy holding a collar or leash attached to my partner, symbolizing their dedication and connection to me.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'master_mistress', weight: 0.7 },
      { dimensionId: 'dominant', weight: 0.6 }
    ],
    isQuick: false
  },
  {
    id: 52,
    text: 'Wearing a collar that marks me as belonging to someone special provides me with comfort, pride, and grounding.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'slave', weight: 0.8 },
      { dimensionId: 'submissive', weight: 0.6 },
      { dimensionId: 'pet_ageplay', weight: 0.5 }
    ],
    isQuick: false
  },
  {
    id: 53,
    text: 'I find it exciting to switch roles within the same week or even within the same evening with my partner.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'switch', weight: 1.0 }
    ],
    isQuick: false
  },
  {
    id: 54,
    text: 'I am comfortable setting firm consequences or consensual punishments when my partner breaks an agreed-upon rule.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'master_mistress', weight: 0.8 },
      { dimensionId: 'dominant', weight: 0.5 },
      { dimensionId: 'sadist', weight: 0.3 }
    ],
    isQuick: false
  },
  {
    id: 55,
    text: 'Consensually receiving discipline or correction for violating a household rule relieves guilt and strengthens our bond.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'slave', weight: 0.7 },
      { dimensionId: 'submissive', weight: 0.6 },
      { dimensionId: 'masochist', weight: 0.4 }
    ],
    isQuick: false
  },
  {
    id: 56,
    text: 'The sound of leather cracking against skin or the visual reddening of a spanked bottom is deeply thrilling to me.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'sadist', weight: 0.8 }
    ],
    isQuick: false
  },
  {
    id: 57,
    text: 'I appreciate the stinging heat left behind after an intense spanking or paddling session.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'masochist', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 58,
    text: 'I take pride in my knowledge of safe body targets, nerve danger zones, and ergonomic suspension physics.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'rigger', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 59,
    text: 'I trust my partner so completely that being bound in an awkward or helpless position feels completely liberating.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'rope_bunny', weight: 0.9 },
      { dimensionId: 'submissive', weight: 0.5 }
    ],
    isQuick: false
  },
  {
    id: 60,
    text: 'I enjoy the thrill of tracking, stalking, or sneaking up on my partner in a playful, predatory scenario.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'primal_hunter', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 61,
    text: 'Running away through a room or open space while giggling and expecting to be caught is one of my favorite feelings.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'primal_prey', weight: 0.9 }
    ],
    isQuick: false
  },
  {
    id: 62,
    text: 'I like gently demanding that my partner look down, avert their gaze, or ask for permission before speaking.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'master_mistress', weight: 0.7 },
      { dimensionId: 'dominant', weight: 0.5 },
      { dimensionId: 'degrader', weight: 0.3 }
    ],
    isQuick: false
  },
  {
    id: 63,
    text: 'I enjoy having my partner command me to hold eye contact with them or keep my head bowed until instructed otherwise.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'slave', weight: 0.6 },
      { dimensionId: 'submissive', weight: 0.6 }
    ],
    isQuick: false
  },
  {
    id: 64,
    text: 'I am excited by the prospect of participating in intimate games where the winner decides what the other must do.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'switch', weight: 0.5 },
      { dimensionId: 'dominant', weight: 0.3 },
      { dimensionId: 'submissive', weight: 0.3 }
    ],
    isQuick: false
  }
];

export const LIKERT_OPTIONS = [
  { value: 0, label: 'Strongly Disagree', hint: 'Not for me / Dislike' },
  { value: 25, label: 'Disagree', hint: 'Uninterested / Unlikely' },
  { value: 50, label: 'Neutral', hint: 'Neutral / Indifferent / Unsure' },
  { value: 75, label: 'Agree', hint: 'Interested / Enjoy' },
  { value: 100, label: 'Strongly Agree', hint: 'Core desire / Passion' }
] as const;

