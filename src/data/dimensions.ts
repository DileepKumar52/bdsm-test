export interface Dimension {
  id: string;
  name: string;
  roleType: 'dominant' | 'submissive' | 'switch' | 'preference' | 'neutral';
  category: 'Power Exchange' | 'Physical & Sensation' | 'Psychological & Verbal' | 'Exploration & Play';
  shortDescription: string;
  fullDescription: string;
  characteristics: string[];
  communicationTips: string;
  complementaryIds: string[];
  accentColor: string;
}

export const DIMENSIONS: Record<string, Dimension> = {
  dominant: {
    id: 'dominant',
    name: 'Dominant',
    roleType: 'dominant',
    category: 'Power Exchange',
    shortDescription: 'Naturally assumes leadership, control, and decision-making during intimacy.',
    fullDescription: 'Dominants enjoy guiding the pace, setting boundaries, and holding control in scenes or relationships. A healthy Dominant balances authority with attentiveness, ensuring partner safety and mutual gratification while providing steady leadership.',
    characteristics: [
      'Enjoys taking initiative and directing the flow of intimate encounters',
      'Finds satisfaction in a partner willingly relinquishing control',
      'Values clear boundaries, confidence, and responsible authority',
      'Attentive to partner responses and emotional states'
    ],
    communicationTips: 'Focus on proactive negotiation, clear commands, and consistent aftercare check-ins.',
    complementaryIds: ['submissive', 'slave', 'rope_bunny', 'masochist'],
    accentColor: '#171717'
  },
  submissive: {
    id: 'submissive',
    name: 'Submissive',
    roleType: 'submissive',
    category: 'Power Exchange',
    shortDescription: 'Finds peace, excitement, and erotic fulfillment in giving up control to a trusted partner.',
    fullDescription: 'Submissives thrive when surrendering autonomy to someone they trust deeply. Releasing the burden of decision-making can provide profound emotional release, intense vulnerability, and heightened sensory pleasure.',
    characteristics: [
      'Finds deep calm or arousal in following instructions and pleasing a partner',
      'Values trust, emotional safety, and firm boundaries',
      'Desires to be guided, possessed, or led by a capable partner',
      'Experiences vulnerability as a source of strength and connection'
    ],
    communicationTips: 'Clearly articulate your hard and soft limits in advance; practice using your safeword without hesitation.',
    complementaryIds: ['dominant', 'master_mistress', 'rigger', 'sadist'],
    accentColor: '#0070f3'
  },
  switch: {
    id: 'switch',
    name: 'Switch',
    roleType: 'switch',
    category: 'Power Exchange',
    shortDescription: 'Experiences fluid enjoyment in both leading and following depending on mood, dynamic, or partner.',
    fullDescription: 'Switches do not fit into a single rigid column. They can be commanding and dominant with one partner or in one scenario, and entirely receptive and submissive in another. This duality gives them an empathetic understanding of both sides of power exchange.',
    characteristics: [
      'Enjoys both holding authority and relinquishing it',
      'Adapts easily to partners with varying energy and preferences',
      'Understands the emotional dynamics of both topping and bottoming',
      'Appreciates reciprocal, multi-layered play'
    ],
    communicationTips: 'State your current headspace clearly before sessions, as your preference can shift between topspace and bottomspace.',
    complementaryIds: ['switch', 'dominant', 'submissive'],
    accentColor: '#7928ca'
  },
  master_mistress: {
    id: 'master_mistress',
    name: 'Master / Mistress',
    roleType: 'dominant',
    category: 'Power Exchange',
    shortDescription: 'Seeks structured, protocol-oriented, or formal ownership authority within the dynamic.',
    fullDescription: 'This archetype reflects a high degree of formal dominance. Rather than spontaneous play alone, Masters and Mistresses enjoy establishing protocols, rituals, daily standards, and long-term structures of ownership or service.',
    characteristics: [
      'Drawn to structure, discipline, protocols, and formal honorifics',
      'Finds reward in shaping, guiding, and mentoring a devoted partner',
      'Takes ownership and protection of the submissive seriously',
      'Values dignity, mutual respect, and intentionality'
    ],
    communicationTips: 'Define protocols collaboratively and review expectations regularly to ensure healthy mutual consent.',
    complementaryIds: ['slave', 'submissive'],
    accentColor: '#000000'
  },
  slave: {
    id: 'slave',
    name: 'Slave / Devotee',
    roleType: 'submissive',
    category: 'Power Exchange',
    shortDescription: 'Desires deep surrender, service, and devotion under structured authority.',
    fullDescription: 'Slaves and devotees experience fulfillment through service, obedience, and the symbolic or literal surrender of autonomy to an established authority figure. It represents an intense commitment rooted in trust and total vulnerability.',
    characteristics: [
      'Motivated by the pleasure of serving and obeying an esteemed partner',
      'Appreciates protocol, deference, and structured daily expectations',
      'Finds purpose and serenity in complete emotional and physical devotion',
      'Places immense trust in the partner holding authority'
    ],
    communicationTips: 'Establish immutable baseline safety protocols, contractual reviews, and mental health check-ins.',
    complementaryIds: ['master_mistress', 'dominant'],
    accentColor: '#4d4d4d'
  },
  sadist: {
    id: 'sadist',
    name: 'Sadist',
    roleType: 'dominant',
    category: 'Physical & Sensation',
    shortDescription: 'Experiences erotic or emotional satisfaction from consensually administering intense sensation or pain.',
    fullDescription: 'In a consensual BDSM framework, a sadist derives pleasure not from malice, but from eliciting authentic physical responses, tears, breathlessness, or catharsis from their partner through controlled impact, sensation, or psychological pressure.',
    characteristics: [
      'Stimulated by the reactions, writhing, and surrender of a partner receiving sensation',
      'Practices precision, technique, and reading non-verbal physiological cues',
      'Enjoys tools such as paddles, floggers, crops, canes, or wax',
      'Deeply committed to the boundary between constructive pain and genuine harm'
    ],
    communicationTips: 'Establish clear color safewords (e.g., Red/Yellow/Green) and monitor circulation, skin integrity, and breathing continuously.',
    complementaryIds: ['masochist'],
    accentColor: '#ee0000'
  },
  masochist: {
    id: 'masochist',
    name: 'Masochist',
    roleType: 'submissive',
    category: 'Physical & Sensation',
    shortDescription: 'Finds arousal, emotional release, or endorphin euphoria from receiving intense physical sensations.',
    fullDescription: 'Masochists process physical intensity—such as impact, pinching, heat, or deep pressure—as a gateway to altered mental states (often called "subspace"). The sensation triggers endorphin rushes that bring deep grounding and relief.',
    characteristics: [
      'Enjoys testing personal thresholds and enduring high-intensity sensations',
      'Experiences pain as an intoxicating, transformative, or grounding feeling',
      'Seeks the meditative, floaty release of endorphins and subspace',
      'Desires a partner who can push limits responsibly'
    ],
    communicationTips: 'Differentiate between "good pain" (cathartic, manageable) and "bad pain" (sharp, joint, nerve, or injurious) immediately.',
    complementaryIds: ['sadist'],
    accentColor: '#eb367f'
  },
  rigger: {
    id: 'rigger',
    name: 'Rigger / Rope Top',
    roleType: 'dominant',
    category: 'Physical & Sensation',
    shortDescription: 'Focuses on the technical, aesthetic, and psychological craft of tying and restraining.',
    fullDescription: 'Riggers appreciate the artistry, anatomy, and control of rope bondage (shibari/kinbaku or western). They enjoy creating immobilizing weaves, suspensions, or gentle body harnesses, holding their partner entirely suspended or contained.',
    characteristics: [
      'Appreciates knot craft, tension mechanics, and aesthetic line work',
      'Cares deeply about nerve pathways, circulation, and physical safety',
      'Enjoys the feeling of rendering a partner completely dependent',
      'Views rope as an intimate language of dialogue and emotion'
    ],
    communicationTips: 'Always keep medical safety shears within arm’s reach and inspect extremities every few minutes for numbness or tingling.',
    complementaryIds: ['rope_bunny', 'submissive'],
    accentColor: '#0761d1'
  },
  rope_bunny: {
    id: 'rope_bunny',
    name: 'Rope Bunny / Bondage Sub',
    roleType: 'submissive',
    category: 'Physical & Sensation',
    shortDescription: 'Revels in the physical restriction, sensory surrender, and tactile embrace of rope and restraints.',
    fullDescription: 'Rope bunnies love the feeling of being tightly wrapped, immobilized, suspended, or confined. Surrendering physical mobility creates a deeply calming, cocooned state where they are helpless to the rigger’s care.',
    characteristics: [
      'Loves the tactile warmth, constriction, and texture of ropes or leather',
      'Enjoys the surrender of complete physical helplessness',
      'Easily enters floaty, meditative mindsets when unable to move',
      'Values feeling held, secure, and physically protected'
    ],
    communicationTips: 'Alert your rigger immediately at the first sign of tingling ("pins and needles") or localized numbness.',
    complementaryIds: ['rigger', 'dominant'],
    accentColor: '#50e3c2'
  },
  primal_hunter: {
    id: 'primal_hunter',
    name: 'Primal Hunter',
    roleType: 'dominant',
    category: 'Exploration & Play',
    shortDescription: 'Driven by instinctual, raw, physical dominance—wrestling, chasing, and conquering.',
    fullDescription: 'Primal play strips away formal etiquette in favor of raw, animalistic energy. Primal Hunters enjoy physical grapple, chasing their partner, playful biting, pinning, and claiming through instinctual bodily exertion.',
    characteristics: [
      'Excited by energetic wrestling, chasing, pinning, and breath-to-breath struggle',
      'Prefers feral, visceral connection over formal ceremonial rules',
      'Enjoys physical marks, bites, and the thrill of overcoming resistance',
      'Connects through adrenalized, breathless passion'
    ],
    communicationTips: 'Calibrate physical force beforehand to prevent joint or neck injuries; agree on immediate freeze cues.',
    complementaryIds: ['primal_prey'],
    accentColor: '#ab570a'
  },
  primal_prey: {
    id: 'primal_prey',
    name: 'Primal Prey',
    roleType: 'submissive',
    category: 'Exploration & Play',
    shortDescription: 'Craves the adrenaline of evasion, struggling, running, and being physically captured.',
    fullDescription: 'Primal Prey thrive on consensual chase and capture. They don’t surrender easily—they run, fight back, bite, and resist until physically overpowered, finding immense satisfaction in the moment of capture.',
    characteristics: [
      'Aroused by the rush of flight, evasion, and genuine struggle',
      'Likes challenging a partner’s physical strength and agility',
      'Finds catharsis in finally being caught and pinned down',
      'Values intense, unscripted bodily communication'
    ],
    communicationTips: 'Ensure non-verbal safewords (like dropping a bell or tapping three times) are established for when you cannot speak.',
    complementaryIds: ['primal_hunter'],
    accentColor: '#f5a623'
  },
  degrader: {
    id: 'degrader',
    name: 'Degrader / Verbal Top',
    roleType: 'dominant',
    category: 'Psychological & Verbal',
    shortDescription: 'Uses erotic humiliation, harsh language, and status diminution to stimulate intimacy.',
    fullDescription: 'Degraders enjoy verbal command, teasing, erotic objectification, and stripping away ego. When practiced consensually, verbal degradation taps into primal shame and taboos, converting social vulnerability into intense erotic friction.',
    characteristics: [
      'Finds excitement in verbal dominance, objectification, and commanding words',
      'Enjoys pushing psychological edges through verbal taboos',
      'Skilled at reading what insults or reductions excite versus what genuinely wounds',
      'Balances sharp words with deep grounded care'
    ],
    communicationTips: 'Maintain an explicit list of forbidden triggers (e.g., real-world traumas, body dysmorphia, family) that are strictly off-limits.',
    complementaryIds: ['degradee'],
    accentColor: '#c50000'
  },
  degradee: {
    id: 'degradee',
    name: 'Degradee / Verbal Sub',
    roleType: 'submissive',
    category: 'Psychological & Verbal',
    shortDescription: 'Finds erotic release and intense arousal in being verbally humiliated or objectified.',
    fullDescription: 'Degradees find relief in letting go of social expectations, ego, and pride. Being reduced, spoken down to, or treated as an erotic object lets them shed self-consciousness and inhabit total vulnerability.',
    characteristics: [
      'Aroused by being called names, put down, or treated as an object of desire',
      'Finds catharsis in relinquishing personal pride and self-importance',
      'Enjoys the acute psychological thrill of taboo language and embarrassment',
      'Needs profound reassurance and unconditional validation afterwards'
    ],
    communicationTips: 'Thoroughly debrief during aftercare to ensure erotic degradation is fully separated from your authentic self-worth.',
    complementaryIds: ['degrader'],
    accentColor: '#ff0080'
  },
  praise_giver: {
    id: 'praise_giver',
    name: 'Praise Giver',
    roleType: 'dominant',
    category: 'Psychological & Verbal',
    shortDescription: 'Nurtures, leads, and motivates partners through positive reinforcement and verbal affirmation.',
    fullDescription: 'Praise Givers command through warmth and validation. Rather than punishing mistakes, they reward obedience, effort, and devotion with heartfelt affirmation ("good boy", "such a good girl", "look how well you did").',
    characteristics: [
      'Motivates partners using encouragement, gentle compliments, and pride',
      'Takes delight in watching a partner blossom and melt under kind words',
      'Creates a deeply safe, affectionate, yet clearly guided dynamic',
      'Values emotional intimacy alongside physical power exchange'
    ],
    communicationTips: 'Mix specific behavioral compliments with affectionate physical touch to anchor positive feelings.',
    complementaryIds: ['praise_receiver'],
    accentColor: '#00dfd8'
  },
  praise_receiver: {
    id: 'praise_receiver',
    name: 'Praise Receiver',
    roleType: 'submissive',
    category: 'Psychological & Verbal',
    shortDescription: 'Experiences deep warmth, arousal, and motivation from receiving compliments and validation.',
    fullDescription: 'Praise Receivers crave their partner’s genuine approval. Hearing that they are valued, doing well, or being "good" dissolves anxiety, generates intoxicating emotional highs, and inspires them to please even further.',
    characteristics: [
      'Melted or deeply aroused by phrases like "good job", "such a good girl/boy"',
      'Strives conscientiously to earn their partner’s pride and affection',
      'Responds far better to positive encouragement than harsh criticism',
      'Connects heart-centered affirmation directly to physical arousal'
    ],
    communicationTips: 'Share your favorite affirmation phrases and intonations with your partner so they know what resonates most.',
    complementaryIds: ['praise_giver', 'caregiver'],
    accentColor: '#22c55e'
  },
  caregiver: {
    id: 'caregiver',
    name: 'Caregiver / Guardian',
    roleType: 'dominant',
    category: 'Exploration & Play',
    shortDescription: 'Provides protective, nurturing guidance, comfort, and gentle structure to a partner.',
    fullDescription: 'Caregivers combine authority with deep emotional caretaking. They enjoy tucking partners in, organizing peaceful downtime, looking after their emotional needs, and offering gentle boundaries that shield their partner from the stresses of adult life.',
    characteristics: [
      'Protective, patient, and deeply attuned to a partner’s emotional well-being',
      'Enjoys offering tender boundaries, gentle rules, and loving supervision',
      'Balances discipline with warmth, comfort, and nurturing presence',
      'Provides a safe harbor from outside worldly pressures'
    ],
    communicationTips: 'Consistently distinguish between supportive guidance and infantilization, agreeing on where lines are drawn.',
    complementaryIds: ['pet_ageplay', 'praise_receiver'],
    accentColor: '#0284c7'
  },
  pet_ageplay: {
    id: 'pet_ageplay',
    name: 'Pet / Playful Innocent',
    roleType: 'submissive',
    category: 'Exploration & Play',
    shortDescription: 'Enjoys stepping into a playful, uncomplicated, or animal headspace free from adult worries.',
    fullDescription: 'Whether exploring petplay (kitten, pup, bunny) or innocent headspaces, this archetype seeks an uncomplicated, non-judgmental realm of existence. It is about playfulness, pure affection, simplicity, and total freedom from cognitive overload.',
    characteristics: [
      'Finds comfort in playful attitudes, games, cuddling, or animal personification',
      'Appreciates collars, leashes, ears, or cozy physical spaces',
      'Relishes freedom from adult responsibilities, bills, and complex decisions',
      'Deeply loyal and expressive with physical affection'
    ],
    communicationTips: 'Clearly separate sexual and non-sexual phases of play to maintain comfort and clarity.',
    complementaryIds: ['caregiver', 'master_mistress'],
    accentColor: '#d946ef'
  },
  voyeur_exhibitionist: {
    id: 'voyeur_exhibitionist',
    name: 'Voyeur / Exhibitionist',
    roleType: 'preference',
    category: 'Exploration & Play',
    shortDescription: 'Derives erotic charge from watching others or being watched, admired, and witnessed.',
    fullDescription: 'This spectrum revolves around the visual and public/semi-public dimension of intimacy. Voyeurs love to observe uninhibited passion or kink; exhibitionists thrive on the adrenaline of being seen, displayed, photographed, or admired.',
    characteristics: [
      'Aroused by the visual spectacle of intimacy and desire',
      'Enjoys being looked at, photographed (consensually), or showing off',
      'Thrilled by mirrors, transparent spaces, or trusted spectators',
      'Finds excitement in the taboo of visual revelation'
    ],
    communicationTips: 'Always maintain strict consent boundaries with third parties and clarify recording/photography agreements in writing.',
    complementaryIds: ['voyeur_exhibitionist', 'dominant', 'submissive'],
    accentColor: '#8b5cf6'
  },
  sensory_explorer: {
    id: 'sensory_explorer',
    name: 'Sensory Explorer',
    roleType: 'preference',
    category: 'Physical & Sensation',
    shortDescription: 'Enjoys non-penetrative tactile textures, temperature play, sensory deprivation, and intensity.',
    fullDescription: 'Sensory Explorers love engaging all five senses in intimacy. They experiment with blindfolds, sound isolation, warm massage wax, ice cubes, silk, feathers, electro-tactile sensations, and contrasting physical textures.',
    characteristics: [
      'Fascinated by sensory deprivation (blindfolds, headphones, hoods)',
      'Loves contrasting temperatures (dripping hot wax, sliding ice)',
      'Enjoys heightened anticipation and delicate tactile stimuli',
      'Values mindfulness, body awareness, and slow-burn exploration'
    ],
    communicationTips: 'Test wax temperature on your inner wrist before dripping on sensitive skin; test all materials for skin allergies.',
    complementaryIds: ['sensory_explorer', 'dominant', 'submissive'],
    accentColor: '#10b981'
  },
  vanilla: {
    id: 'vanilla',
    name: 'Vanilla / Conventional Intimacy',
    roleType: 'neutral',
    category: 'Power Exchange',
    shortDescription: 'Appreciates mutual, egalitarian, romantic intimacy without power exchange or kink elements.',
    fullDescription: 'Vanilla represents standard, non-kink romantic and sexual connection. Far from being boring, vanilla intimacy values equality, emotional reciprocity, gentleness, and conventional romantic connection without hierarchy or psychological games.',
    characteristics: [
      'Finds complete fulfillment in gentle, egalitarian romantic intimacy',
      'Uninterested in or uncomfortable with pain, humiliation, or power hierarchies',
      'Values emotional safety, mutual equality, and tenderness',
      'Prefers straightforward, romantic expressions of passion'
    ],
    communicationTips: 'Be proud and clear about your boundaries; never feel pressured to incorporate kinks that do not genuinely appeal to you.',
    complementaryIds: ['vanilla'],
    accentColor: '#64748b'
  }
};

export const DIMENSION_CATEGORIES = [
  'All',
  'Power Exchange',
  'Physical & Sensation',
  'Psychological & Verbal',
  'Exploration & Play'
] as const;

