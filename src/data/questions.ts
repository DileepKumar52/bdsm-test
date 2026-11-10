export interface DimensionWeight {
  dimensionId: string;
  weight: number; // positive or negative contribution
}

export interface QuestionAdaptation {
  beginnerText?: string;
  beginnerNote?: string;
  exploringText?: string;
  exploringNote?: string;
  experiencedText?: string;
}

export interface Question {
  id: number;
  text: string;
  category: 'Power Exchange' | 'Physical & Sensation' | 'Psychological & Verbal' | 'Exploration & Play';
  dimensionWeights: DimensionWeight[];
  isQuick: boolean;
  adaptations?: QuestionAdaptation;
}

export function getQuestionContent(
  q: Question,
  experience: string = 'some'
): { text: string; note?: string } {
  if (experience === 'new') {
    return {
      text: q.adaptations?.beginnerText || q.text,
      note: q.adaptations?.beginnerNote
    };
  }

  if (experience === 'exploring') {
    return {
      text: q.adaptations?.exploringText || q.text,
      note: q.adaptations?.exploringNote || q.adaptations?.beginnerNote
    };
  }

  if (experience === 'experienced') {
    return {
      text: q.adaptations?.experiencedText || q.text
    };
  }

  // 'some', 'unspecified' or default: standard text
  return {
    text: q.text
  };
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
    isQuick: true,
    adaptations: {
      beginnerText: 'I feel excited when I take the lead, make decisions, and guide my partner during intimacy.',
      beginnerNote: 'Dominance in this context refers to mutually agreed leadership, pacing, and guiding decisions.',
      exploringText: 'I enjoy being the partner who takes initiative, makes choices, and sets the direction.',
      experiencedText: 'I thrive on taking dominant leadership and directing the flow of intimate scenes.'
    }
  },
  {
    id: 2,
    text: 'I find deep relief and relaxation when I let go of control and allow a trusted partner to lead completely.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'submissive', weight: 1.0 },
      { dimensionId: 'dominant', weight: -0.3 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'I feel relaxed and comfortable when I let my partner make decisions and lead our intimacy.',
      beginnerNote: 'Submission is the consensual choice to surrender decision-making to a trusted partner.',
      exploringText: 'Surrendering control to a partner I trust brings me a profound sense of emotional calm.',
      experiencedText: 'Bottoming and surrendering total control to a trusted Top gives me deep mental relief.'
    }
  },
  {
    id: 3,
    text: 'Depending on my mood or partner, I thoroughly enjoy switching between taking control and relinquishing it.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'switch', weight: 1.0 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'Depending on my mood or partner, I enjoy taking the lead sometimes and following other times.',
      beginnerNote: 'A "Switch" is someone who enjoys both dominant and submissive roles rather than just one.',
      exploringText: 'My desire to lead or surrender fluctuates naturally depending on my partner and setting.',
      experiencedText: 'I identify as a fluid Switch, actively enjoying both topping and bottoming.'
    }
  },
  {
    id: 4,
    text: 'I am drawn to formal structures, rules of etiquette, and clear expectations of honor or ownership in a relationship.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'master_mistress', weight: 0.9 },
      { dimensionId: 'dominant', weight: 0.4 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'I like having structured relationship guidelines and clear expectations where one partner holds authority.',
      beginnerNote: 'Master/Mistress dynamics involve mutually established protocols and formal guidelines.',
      exploringText: 'I appreciate intentional relationship structures where boundaries and roles are clearly defined.',
      experiencedText: 'I am drawn to formal D/s structures, protocols, honorifics, and ownership dynamics.'
    }
  },
  {
    id: 5,
    text: 'Devoting myself in complete service and obedience to someone I respect deeply sounds deeply satisfying to me.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'slave', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.5 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'Caring for, serving, and following the guidance of someone I deeply trust sounds rewarding to me.',
      beginnerNote: 'Service submission focuses on the emotional fulfillment of dedicated acts of care and loyalty.',
      exploringText: 'Dedicated service, loyalty, and following a respected partner’s wishes brings me satisfaction.',
      experiencedText: 'Consensual service, protocol obedience, and devotional surrender strongly appeal to me.'
    }
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
    isQuick: true,
    adaptations: {
      beginnerText: 'Consensually giving spankings or light taps with hands or paddles to see my partner’s reaction excites me.',
      beginnerNote: 'Impact play involves using hands, paddles, or floggers for safe, agreed-upon physical sensation.',
      exploringText: 'Administering safe physical sensation (such as spanking) to elicit authentic reactions excites me.',
      experiencedText: 'Administering impact play with precision tools to elicit intense catharsis strongly excites me.'
    }
  },
  {
    id: 7,
    text: 'Receiving sharp, intense physical sensations (like spanking, biting, or pinching) brings me an intoxicating rush.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'masochist', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.2 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'Receiving intense physical sensations like spanking or gentle biting gives me an exciting rush.',
      beginnerNote: 'Consensual sensation releases endorphins that many people experience as euphoric and relaxing.',
      exploringText: 'Enduring sharp physical sensations like spankings or pinches triggers a thrilling endorphin high for me.',
      experiencedText: 'Enduring high-intensity impact and sensation pushes me into a blissful subspace state.'
    }
  },
  {
    id: 8,
    text: 'I am fascinated by the craft and precision of tying a partner up with ropes or securing them with restraints.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'rigger', weight: 1.0 },
      { dimensionId: 'dominant', weight: 0.3 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'I am curious about safely tying or restraining a partner during intimate moments.',
      beginnerNote: 'Rope bondage (such as Shibari) emphasizes anatomical safety, communication, and knot craft.',
      exploringText: 'I find the visual art and physical control of tying a partner up with ropes very appealing.',
      experiencedText: 'I take pride in the technical artistry, line work, and anatomical safety of rope rigging.'
    }
  },
  {
    id: 9,
    text: 'Being physically tied up, bound, or completely unable to move gives me a profound sense of surrender and peace.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'rope_bunny', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.4 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'Being gently restrained so I cannot move gives me a comforting feeling of letting go.',
      beginnerNote: 'Physical restraint allows a partner to release all physical effort in a secure environment.',
      exploringText: 'Surrendering physical mobility in restraints or ropes brings me a deeply meditative calm.',
      experiencedText: 'Being bound as a rope bottom and rendered completely helpless puts me into deep peace.'
    }
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
    isQuick: true,
    adaptations: {
      beginnerText: 'I enjoy playful, physical wrestling and pinning my partner down rather than formal rules.',
      beginnerNote: 'Primal play focuses on natural, visceral energy—grappling, chasing, and physical touch.',
      exploringText: 'Consensual wrestling, pinning down, and unscripted physical assertion turns me on.',
      experiencedText: 'Primal hunting, feral grappling, and instinctual physical domination drive my desire.'
    }
  },
  {
    id: 11,
    text: 'I love the adrenaline rush of struggling, trying to break free, and being physically caught and overpowered by my partner.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'primal_prey', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.3 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'I enjoy playful chase and struggle where my partner catches and holds me down.',
      beginnerNote: 'Consensual struggle play lets partners experience the excitement of capture safely.',
      exploringText: 'The adrenaline of running away, playfully struggling, and finally being pinned turns me on.',
      experiencedText: 'Primal prey dynamics—consensual evasion, physical struggle, and capture—thrill me.'
    }
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
    isQuick: true,
    adaptations: {
      beginnerText: 'Using provocative dirty talk and commanding words with my partner heightens my arousal.',
      beginnerNote: 'Verbal dominance involves taboo language used strictly within negotiated comfort limits.',
      exploringText: 'Erotic verbal dominance, talking down, and teasing my partner enhances our intimacy.',
      experiencedText: 'Consensual verbal degradation and psychological topping are powerful turn-ons for me.'
    }
  },
  {
    id: 13,
    text: 'Being spoken down to, called names, or treated as an object purely for my partner’s pleasure turns me on.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'degradee', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.2 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'Having my partner use daring dirty talk, give firm commands, and talk down to me turns me on.',
      beginnerNote: 'Erotic humiliation is about releasing ego and societal pride in a safe, affirming container.',
      exploringText: 'Being erotically objectified and spoken down to by a partner I trust gives me an exciting release.',
      experiencedText: 'Consensual verbal degradation and objectification provide intense erotic catharsis for me.'
    }
  },
  {
    id: 14,
    text: 'Telling my partner what a "good boy" or "good girl" they are and rewarding them with verbal praise brings me immense joy.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'praise_giver', weight: 1.0 },
      { dimensionId: 'caregiver', weight: 0.3 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'Complimenting my partner and telling them how well they are doing brings me warmth and happiness.',
      beginnerNote: 'Praise play uses sincere encouragement ("good girl/boy") to create emotional intimacy and reward.',
      exploringText: 'Leading with warmth, compliments, and verbal affirmation is my preferred way to guide a partner.',
      experiencedText: 'Praise topping and rewarding obedience with heartfelt verbal affirmation deeply satisfies me.'
    }
  },
  {
    id: 15,
    text: 'Hearing sincere words of affirmation and praise from my partner makes me melt and motivates me to do whatever they ask.',
    category: 'Psychological & Verbal',
    dimensionWeights: [
      { dimensionId: 'praise_receiver', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.2 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'Hearing my partner tell me I did a great job or that they are proud of me makes me feel cherished.',
      beginnerNote: 'Positive affirmation can be deeply grounding and motivating during intimate moments.',
      exploringText: 'Hearing validating phrases like "good job" or "such a good girl/boy" makes me melt.',
      experiencedText: 'Receiving praise and validation is a core psychological driver for my submission.'
    }
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
    isQuick: true,
    adaptations: {
      beginnerText: 'I naturally feel protective and nurturing, enjoying taking care of and guiding my partner gently.',
      beginnerNote: 'Caregiving dynamics blend gentle authority with deep emotional and domestic nurturing.',
      exploringText: 'Providing a calming, protective presence and looking after my partner’s emotional needs fulfills me.',
      experiencedText: 'I thrive as a Caregiver/Daddy/Mommy type providing structured comfort and gentle guidance.'
    }
  },
  {
    id: 17,
    text: 'I find comfort and excitement in slipping into an innocent, carefree, or playful persona (such as petplay or being cared for).',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'pet_ageplay', weight: 1.0 },
      { dimensionId: 'submissive', weight: 0.3 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'I like playful, uncomplicated headspaces where I can set aside adult stress and just be cared for.',
      beginnerNote: 'Petplay or ageplay allows adults to temporarily set aside daily adult burdens in a safe space.',
      exploringText: 'Slipping into a playful, affectionate persona (like a pet or little) helps me relax and connect.',
      experiencedText: 'Petplay (kitten/pup) or consensual headspace regression offers me deep comfort and freedom.'
    }
  },
  {
    id: 18,
    text: 'The idea of watching my partner in an intimate act, or having an admiring audience watch us, is highly stimulating.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'voyeur_exhibitionist', weight: 1.0 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'The idea of watching intimacy or having an admiring person watch us is exciting to me.',
      beginnerNote: 'Voyeurism (watching) and exhibitionism (being watched) explore the erotic thrill of visual intimacy.',
      exploringText: 'Being seen, photographed consensually, or observing a partner erotically turns me on.',
      experiencedText: 'Voyeurism, exhibitionism, and public/semi-public play are prominent fantasies of mine.'
    }
  },
  {
    id: 19,
    text: 'I love experimenting with sensory deprivation (blindfolds, noise-canceling headphones) and temperature play (ice, warm wax).',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'sensory_explorer', weight: 1.0 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'I like trying blindfolds, ice cubes, or warm massage oils to heighten physical sensations.',
      beginnerNote: 'Sensory play alters touch, temperature, and sight to amplify anticipation and body awareness.',
      exploringText: 'Using blindfolds, ice, warm wax, or textured fabrics adds thrilling dimensions to intimacy.',
      experiencedText: 'Sensory deprivation, temperature extremes, and tactile edge play feature heavily in my scenes.'
    }
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
    isQuick: true,
    adaptations: {
      beginnerText: 'I am happiest with standard, gentle romantic intimacy without power roles, spankings, or rules.',
      beginnerNote: '"Vanilla" represents conventional, equal romantic intimacy without kink elements.',
      exploringText: 'I prefer mutual, equal partnership in the bedroom over hierarchical power exchange.',
      experiencedText: 'I value vanilla, egalitarian romance and feel no strong imperative for kink dynamics.'
    }
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
    isQuick: true,
    adaptations: {
      beginnerText: 'I like having our boundaries and limits clearly discussed before trying anything new.',
      beginnerNote: 'Pre-negotiation ensures both partners know exactly what is on or off limits beforehand.',
      exploringText: 'Clear pre-scene negotiation and strict adherence to agreed rules makes intimacy safer and better.',
      experiencedText: 'Meticulous risk negotiation, limit setting, and scene agreements are central to my play.'
    }
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
    isQuick: true,
    adaptations: {
      beginnerText: 'Seeing light marks like handprints or bite marks after intimacy feels exciting to me.',
      beginnerNote: 'Consensual marking serves as a physical reminder of intense connection for many people.',
      exploringText: 'Carrying or giving consensual marks like hickeys, bites, or redness is a turn-on for me.',
      experiencedText: 'Marking (bruising, scratches, bite marks) is an intentional, satisfying aspect of my kink.'
    }
  },
  {
    id: 23,
    text: 'I would rather adapt my role to match what excites my partner at any given moment than stay in one fixed position.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'switch', weight: 0.9 }
    ],
    isQuick: true,
    adaptations: {
      beginnerText: 'I prefer being flexible and matching my partner’s energy rather than sticking to one role.',
      beginnerNote: 'Role flexibility allows partners to adapt between leading and supporting naturally.',
      exploringText: 'My role depends on partner chemistry; I can comfortably lead or follow as needed.',
      experiencedText: 'I operate as a reciprocal Switch, adapting seamlessly to my partner’s headspace.'
    }
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
    isQuick: true,
    adaptations: {
      beginnerText: 'Gentle cuddling, talking, and reassurance after intense intimacy is very important to me.',
      beginnerNote: 'Aftercare is the dedicated comfort period (water, blankets, hugs) to help your body and mind re-stabilize.',
      exploringText: 'Post-scene aftercare—blankets, hydration, and emotional check-ins—is essential for my well-being.',
      experiencedText: 'Comprehensive aftercare is a non-negotiable requirement for me to prevent post-scene drop.'
    }
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
    isQuick: false,
    adaptations: {
      beginnerText: 'I enjoy planning out intimate moments in advance and guiding my partner through each step.',
      beginnerNote: 'Scene planning involves setting an atmosphere, pacing, and choosing activities thoughtfully.',
      exploringText: 'Curating the environment, tools, and progression of an intimate session excites me.',
      experiencedText: 'I enjoy scene orchestration, pacing control, and directing high-protocol power dynamics.'
    }
  },
  {
    id: 26,
    text: 'The feeling of anticipating what my partner has planned for me makes my heart race with positive anticipation.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'submissive', weight: 0.8 }
    ],
    isQuick: false,
    adaptations: {
      beginnerText: 'Not knowing what my partner has planned for us makes me feel eager and excited.',
      beginnerNote: 'Surrendering knowledge of the plan builds anticipation while trusting your partner’s care.',
      exploringText: 'Anticipation and waiting for my partner’s lead amplifies my arousal and focus.',
      experiencedText: 'Bottoming blindly and anticipating the Top’s next move triggers intense anticipation for me.'
    }
  },
  {
    id: 27,
    text: 'I feel comfortable establishing rules for my partner regarding dress, posture, or personal habits within our dynamic.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'master_mistress', weight: 0.9 },
      { dimensionId: 'dominant', weight: 0.5 }
    ],
    isQuick: false,
    adaptations: {
      beginnerText: 'I like having special agreed-upon rules for my partner about how to dress or behave around me.',
      beginnerNote: 'Rules and protocols are consensual structures negotiated to enhance the feeling of leadership.',
      exploringText: 'Setting thoughtful household rules or behavioral guidelines for a willing partner appeals to me.',
      experiencedText: 'Establishing strict D/s lifestyle protocols, dress codes, and postural standards fulfills me.'
    }
  },
  {
    id: 28,
    text: 'I feel honored when a partner allows me to serve their daily needs, whether making their coffee or kneeling before them.',
    category: 'Power Exchange',
    dimensionWeights: [
      { dimensionId: 'slave', weight: 0.9 },
      { dimensionId: 'submissive', weight: 0.5 }
    ],
    isQuick: false,
    adaptations: {
      beginnerText: 'I enjoy performing thoughtful acts of service and showing devotion to someone I respect.',
      beginnerNote: 'Acts of service express submission through daily caretaking and respect.',
      exploringText: 'Demonstrating submission through dedicated service tasks and gestures of deference feels natural.',
      experiencedText: 'Total service submission, kneeling, and domestic obedience are core to my dynamic.'
    }
  },
  {
    id: 29,
    text: 'I enjoy the physical challenge of holding my ground and resisting an attempt by my partner to assert dominance.',
    category: 'Exploration & Play',
    dimensionWeights: [
      { dimensionId: 'primal_prey', weight: 0.7 },
      { dimensionId: 'switch', weight: 0.4 }
    ],
    isQuick: false,
    adaptations: {
      beginnerText: 'I like playfully challenging my partner rather than giving in right away.',
      beginnerNote: 'Playful resistance adds tension and excitement before one partner takes over.',
      exploringText: 'I enjoy testing my partner’s resolve and playfully resisting before surrendering.',
      experiencedText: 'Bratty resistance and physical pushback make power exchange scenes far more engaging.'
    }
  },
  {
    id: 30,
    text: 'The sight of tears of catharsis or heavy breathing caused by intensity I have administered makes me feel connected to my partner.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'sadist', weight: 0.9 }
    ],
    isQuick: false,
    adaptations: {
      beginnerText: 'Seeing my partner deeply moved or breathing heavily from intense sensation makes me feel connected.',
      beginnerNote: 'Cathartic tears are an emotional release of stress and adrenaline, not signs of genuine harm.',
      exploringText: 'Eliciting deep physical and emotional responses through controlled intensity bonds us closer.',
      experiencedText: 'Guiding a bottom through deep cathartic release and sensation surrender creates intimacy.'
    }
  },
  {
    id: 31,
    text: 'When sensation gets overwhelmingly intense, my mind floats into a dreamlike, blissful state of mental calm.',
    category: 'Physical & Sensation',
    dimensionWeights: [
      { dimensionId: 'masochist', weight: 0.9 },
      { dimensionId: 'submissive', weight: 0.4 }
    ],
    isQuick: false,
    adaptations: {
      beginnerText: 'When physical sensation reaches a peak, I feel a floating, calm sensation in my mind.',
      beginnerNote: 'Known as "subspace", this meditative state is triggered by natural endorphin and adrenaline rushes.',
      exploringText: 'High sensory intensity helps me disconnect from worry and enter a deeply peaceful headspace.',
      experiencedText: 'I readily access subspace euphoria under heavy impact and prolonged intensity.'
    }
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
