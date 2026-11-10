import { DIMENSIONS, type Dimension } from '../data/dimensions';
import { QUESTIONS, type Question } from '../data/questions';

export interface DimensionScore {
  dimension: Dimension;
  score: number; // 0 to 100
  tier: 'Core' | 'Strong' | 'Moderate' | 'Mild' | 'Disinterest';
  tierLabel: string;
}

export interface CompatibilityPair {
  name: string;
  userDimension: string;
  userScore: number;
  partnerDimension: string;
  partnerScore: number;
  synergyScore: number;
  status: 'High Synergy' | 'Moderate Match' | 'Low Overlap' | 'Friction Risk';
  insight: string;
}

export interface ResultsAnalysis {
  scores: Record<string, number>;
  dimensionScores: DimensionScore[];
  primaryArchetype: DimensionScore;
  secondaryArchetypes: DimensionScore[];
  dominantScore: number;
  submissiveScore: number;
  switchScore: number;
  summaryTitle: string;
  profileOverview: string;
  encodedShareString: string;
}

export function getTier(score: number): { tier: DimensionScore['tier']; tierLabel: string } {
  if (score >= 80) return { tier: 'Core', tierLabel: 'Core Trait (80-100%)' };
  if (score >= 60) return { tier: 'Strong', tierLabel: 'Strong Interest (60-79%)' };
  if (score >= 40) return { tier: 'Moderate', tierLabel: 'Moderate / Situational (40-59%)' };
  if (score >= 20) return { tier: 'Mild', tierLabel: 'Mild / Curious (20-39%)' };
  return { tier: 'Disinterest', tierLabel: 'Not an Interest (0-19%)' };
}

export function calculateScores(
  answers: Record<number, number>,
  testQuestions: Question[] = QUESTIONS
): Record<string, number> {
  const dimensionTotals: Record<string, { totalEarned: number; maxPossible: number }> = {};

  // Initialize all known dimensions
  Object.keys(DIMENSIONS).forEach((dimId) => {
    dimensionTotals[dimId] = { totalEarned: 0, maxPossible: 0 };
  });

  // Process answers
  testQuestions.forEach((q) => {
    const rawAnswer = answers[q.id];
    // Default to neutral (50) if unanswered
    const userVal = typeof rawAnswer === 'number' ? rawAnswer : 50;

    q.dimensionWeights.forEach((dw) => {
      const dimId = dw.dimensionId;
      if (!dimensionTotals[dimId]) {
        dimensionTotals[dimId] = { totalEarned: 0, maxPossible: 0 };
      }

      if (dw.weight > 0) {
        dimensionTotals[dimId].maxPossible += dw.weight * 100;
        dimensionTotals[dimId].totalEarned += dw.weight * userVal;
      } else {
        // Negative weight: penalized when scoring high, rewarded when scoring low
        const inverted = 100 - userVal;
        const absWeight = Math.abs(dw.weight);
        dimensionTotals[dimId].maxPossible += absWeight * 100;
        dimensionTotals[dimId].totalEarned += absWeight * inverted;
      }
    });
  });

  const scores: Record<string, number> = {};

  Object.entries(dimensionTotals).forEach(([dimId, data]) => {
    if (data.maxPossible > 0) {
      const pct = Math.round((data.totalEarned / data.maxPossible) * 100);
      scores[dimId] = Math.max(0, Math.min(100, pct));
    } else {
      scores[dimId] = 0;
    }
  });

  // Calculate dynamic switch synergy
  const dom = scores['dominant'] || 0;
  const sub = scores['submissive'] || 0;
  if (dom > 30 && sub > 30) {
    // Both dominant and submissive are notable: boost switch score
    const balanceFactor = 1 - Math.abs(dom - sub) / 100;
    const combinedStrength = (dom + sub) / 2;
    const switchSynergy = Math.round(combinedStrength * balanceFactor);
    scores['switch'] = Math.round(Math.max(scores['switch'] || 0, (scores['switch'] * 0.5) + (switchSynergy * 0.5)));
  }

  return scores;
}

export function generateSummaryTitle(
  primary: DimensionScore,
  secondaries: DimensionScore[],
  scores: Record<string, number>
): string {
  const dom = scores['dominant'] || 0;
  const sub = scores['submissive'] || 0;
  const swi = scores['switch'] || 0;

  if (scores['vanilla'] >= 80 && dom < 40 && sub < 40) {
    return 'Conventional & Egalitarian Explorer';
  }

  if (swi >= 70 || (dom >= 60 && sub >= 60)) {
    if (secondaries.length > 0 && secondaries[0].score >= 60) {
      return `${secondaries[0].dimension.name} Switch`;
    }
    return 'Versatile Power Switch';
  }

  if (primary.dimension.roleType === 'dominant') {
    if (secondaries.length > 0 && secondaries[0].score >= 60) {
      return `${secondaries[0].dimension.name} Dominant`;
    }
    return 'Authentic Leader / Dominant';
  }

  if (primary.dimension.roleType === 'submissive') {
    if (secondaries.length > 0 && secondaries[0].score >= 60) {
      return `${secondaries[0].dimension.name} Submissive`;
    }
    return 'Receptive / Submissive Devotee';
  }

  return `${primary.dimension.name} Dynamic Explorer`;
}

export function analyzeResults(
  scores: Record<string, number>
): ResultsAnalysis {
  const dimensionScores: DimensionScore[] = Object.entries(scores)
    .filter(([id]) => DIMENSIONS[id])
    .map(([id, score]) => {
      const dimension = DIMENSIONS[id];
      const { tier, tierLabel } = getTier(score);
      return { dimension, score, tier, tierLabel };
    })
    .sort((a, b) => b.score - a.score);

  const primaryArchetype = dimensionScores[0] || {
    dimension: DIMENSIONS['vanilla'],
    score: 50,
    tier: 'Moderate',
    tierLabel: 'Moderate'
  };

  const secondaryArchetypes = dimensionScores
    .slice(1)
    .filter((ds) => ds.score >= 40 && ds.dimension.id !== 'switch')
    .slice(0, 3);

  const dominantScore = scores['dominant'] || 0;
  const submissiveScore = scores['submissive'] || 0;
  const switchScore = scores['switch'] || 0;

  const summaryTitle = generateSummaryTitle(primaryArchetype, secondaryArchetypes, scores);

  let profileOverview = '';
  if (dominantScore > submissiveScore + 20) {
    profileOverview = `Your profile shows a distinct affinity for leadership, direction, and authority. You are drawn to taking initiative and guiding your partner with confidence.`;
  } else if (submissiveScore > dominantScore + 20) {
    profileOverview = `Your profile demonstrates a strong capacity for trust, surrender, and deep devotion. You feel most liberated when relinquishing decision-making to a partner you respect.`;
  } else if (switchScore >= 60 || (dominantScore >= 50 && submissiveScore >= 50)) {
    profileOverview = `You possess high versatility and empathy for both sides of the power spectrum. Your desires fluctuate based on mood, trust, and partner chemistry.`;
  } else {
    profileOverview = `Your profile reflects a balanced, exploratory orientation with specific targeted interests rather than a monolithic dominant or submissive identity.`;
  }

  const encodedShareString = encodeScores(scores);

  return {
    scores,
    dimensionScores,
    primaryArchetype,
    secondaryArchetypes,
    dominantScore,
    submissiveScore,
    switchScore,
    summaryTitle,
    profileOverview,
    encodedShareString
  };
}

// Compact URL encoding for 100% client-side privacy sharing
export function encodeScores(scores: Record<string, number>): string {
  try {
    const compact: Record<string, number> = {};
    Object.entries(scores).forEach(([k, v]) => {
      if (v > 0) compact[k] = Math.round(v);
    });
    const jsonStr = JSON.stringify(compact);
    if (typeof btoa === 'function') {
      return encodeURIComponent(btoa(encodeURIComponent(jsonStr)));
    } else if (typeof (globalThis as any).Buffer !== 'undefined') {
      return encodeURIComponent((globalThis as any).Buffer.from(jsonStr).toString('base64'));
    }
    return encodeURIComponent(jsonStr);
  } catch (e) {
    return '';
  }
}

export function decodeScores(encoded: string): Record<string, number> | null {
  try {
    const decodedUri = decodeURIComponent(encoded);
    let jsonStr = '';
    if (typeof atob === 'function') {
      try {
        jsonStr = decodeURIComponent(atob(decodedUri));
      } catch {
        jsonStr = atob(decodedUri);
      }
    } else if (typeof (globalThis as any).Buffer !== 'undefined') {
      jsonStr = (globalThis as any).Buffer.from(decodedUri, 'base64').toString('utf-8');
    } else {
      jsonStr = decodedUri;
    }
    const parsed = JSON.parse(jsonStr);
    if (typeof parsed === 'object' && parsed !== null) {
      const result: Record<string, number> = {};
      Object.keys(DIMENSIONS).forEach((dimId) => {
        result[dimId] = typeof parsed[dimId] === 'number' ? parsed[dimId] : 0;
      });
      return result;
    }
    return null;
  } catch (e) {
    return null;
  }
}

export function calculatePartnerCompatibility(
  userScores: Record<string, number>,
  partnerScores: Record<string, number>
): {
  overallSynergy: number;
  matches: CompatibilityPair[];
  potentialFrictions: CompatibilityPair[];
} {
  const complementaryPairs: [string, string, string][] = [
    ['dominant', 'submissive', 'Power Authority & Surrender'],
    ['submissive', 'dominant', 'Devotion & Leadership'],
    ['master_mistress', 'slave', 'Formal Protocol & Total Service'],
    ['slave', 'master_mistress', 'Service Devotion & Formal Structure'],
    ['sadist', 'masochist', 'Sensory Administration & Catharsis'],
    ['masochist', 'sadist', 'Sensation Endurance & Precise Impact'],
    ['rigger', 'rope_bunny', 'Rope Craft & Bound Helplessness'],
    ['rope_bunny', 'rigger', 'Rope Surrender & Tying Artistry'],
    ['primal_hunter', 'primal_prey', 'Feral Pursuit & Physical Struggle'],
    ['primal_prey', 'primal_hunter', 'Evasion/Flight & Capture'],
    ['degrader', 'degradee', 'Verbal Domination & Erotic Submission'],
    ['degradee', 'degrader', 'Verbal Objectification & Degradation'],
    ['praise_giver', 'praise_receiver', 'Affirmation Guidance & Praise Warmth'],
    ['praise_receiver', 'praise_giver', 'Affirmation Desired & Warm Leadership'],
    ['caregiver', 'pet_ageplay', 'Nurturing Guardian & Playful Surrender'],
    ['pet_ageplay', 'caregiver', 'Playful Persona & Gentle Caretaking'],
    ['voyeur_exhibitionist', 'voyeur_exhibitionist', 'Visual Sharing & Exhibition']
  ];

  const matches: CompatibilityPair[] = [];
  let totalSynergy = 0;
  let pairCount = 0;

  complementaryPairs.forEach(([userDim, partnerDim, pairTitle]) => {
    const uScore = userScores[userDim] || 0;
    const pScore = partnerScores[partnerDim] || 0;

    // Both having some score makes it relevant
    if (uScore >= 30 || pScore >= 30) {
      const minScore = Math.min(uScore, pScore);
      const avgScore = (uScore + pScore) / 2;
      // High score synergy formula
      const synergyScore = Math.round((minScore * 0.7) + (avgScore * 0.3));

      let status: CompatibilityPair['status'] = 'Moderate Match';
      let insight = '';

      if (synergyScore >= 70) {
        status = 'High Synergy';
        insight = `Exceptional alignment! You both score strongly on complementary sides of ${pairTitle}.`;
      } else if (synergyScore >= 45) {
        status = 'Moderate Match';
        insight = `Healthy common ground for exploring ${pairTitle} with open communication.`;
      } else if (Math.abs(uScore - pScore) > 40) {
        status = 'Friction Risk';
        insight = `Asymmetry detected: one partner is significantly more invested than the other. Careful negotiation recommended.`;
      } else {
        status = 'Low Overlap';
        insight = `Neither partner has a high imperative here; low priority for your dynamic.`;
      }

      matches.push({
        name: pairTitle,
        userDimension: DIMENSIONS[userDim]?.name || userDim,
        userScore: uScore,
        partnerDimension: DIMENSIONS[partnerDim]?.name || partnerDim,
        partnerScore: pScore,
        synergyScore,
        status,
        insight
      });

      totalSynergy += synergyScore;
      pairCount++;
    }
  });

  // Sort matches by synergy score descending
  matches.sort((a, b) => b.synergyScore - a.synergyScore);

  const potentialFrictions = matches.filter((m) => m.status === 'Friction Risk');
  const positiveMatches = matches.filter((m) => m.status === 'High Synergy' || m.status === 'Moderate Match');

  const overallSynergy = pairCount > 0 ? Math.round(totalSynergy / pairCount) : 50;

  return {
    overallSynergy,
    matches: positiveMatches,
    potentialFrictions
  };
}
