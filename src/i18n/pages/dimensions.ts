import type { SupportedLanguage } from '../languages';

export interface DimensionsPageContent {
  meta: {
    title: string;
    description: string;
  };
  header: {
    eyebrow: string;
    h1: string;
    subtitle: string;
  };
  card: {
    characteristicsLabel: string;
    communicationLabel: string;
  };
  cta: {
    title: string;
    subtitle: string;
    quickBtn: string;
    compBtn: string;
  };
}

export const DIMENSIONS_PAGE_TRANSLATIONS: Record<SupportedLanguage, DimensionsPageContent> = {
  en: {
    meta: {
      title: 'BDSM Test Categories & Dimensions Library — Complete Kink Glossary',
      description: 'Explore the complete guide to all 20 BDSM test categories and dimensions. Detailed definitions of Dominant, Submissive, Switch, Sadist, Masochist, and more.'
    },
    header: {
      eyebrow: 'Taxonomy & Knowledge Base',
      h1: 'BDSM Test Categories & Dimensions Library',
      subtitle: 'Consensual BDSM encompasses a rich spectrum of psychological, emotional, and physical roles. Explore each dimension\'s authentic meaning, complementary pairings, and essential safety considerations.'
    },
    card: {
      characteristicsLabel: 'Common Characteristics:',
      communicationLabel: 'Communication & Negotiation:'
    },
    cta: {
      title: 'Discover Where You Fit Across These 20 Dimensions',
      subtitle: 'Take our free, private online test to calculate your personalized profile across all archetypes.',
      quickBtn: 'Take Quick BDSM Test (3 min)',
      compBtn: 'Take Comprehensive Test (10 min)'
    }
  },
  es: {
    meta: {
      title: 'Categorías y Dimensiones del Test BDSM — Glosario Completo',
      description: 'Explora la guía completa de las 20 categorías y dimensiones del test BDSM. Definiciones detalladas de Dominante, Sumiso, Switch, Sádico, Masoquista y más.'
    },
    header: {
      eyebrow: 'Taxonomía y Base de Conocimiento',
      h1: 'Biblioteca de Categorías y Dimensiones BDSM',
      subtitle: 'El BDSM consensuado abarca un amplio espectro de roles psicológicos, emocionales y físicos. Conoce el significado auténtico de cada dimensión, sus complementariedades y pautas de seguridad esenciales.'
    },
    card: {
      characteristicsLabel: 'Características Habituales:',
      communicationLabel: 'Comunicación y Acuerdos:'
    },
    cta: {
      title: 'Descubre Tu Perfil en Estas 20 Dimensiones',
      subtitle: 'Realiza nuestro test online gratuito y anónimo para calcular tu afinidad en cada uno de estos arquetipos.',
      quickBtn: 'Hacer Test Rápido (3 min)',
      compBtn: 'Hacer Test Completo (10 min)'
    }
  },
  ja: {
    meta: {
      title: 'BDSM診断カテゴリー＆全20タイプ詳細図鑑 — 用語解説',
      description: 'BDSMテストで測定される20種類の属性・タイプを徹底解説。ドミナント、サブミッシブ、スイッチ、サディスト、マゾヒストなどの心理と安全な実践方法。'
    },
    header: {
      eyebrow: 'BDSM体系＆ナレッジベース',
      h1: 'BDSM診断カテゴリー＆20の属性タイプ図鑑',
      subtitle: '合意に基づくBDSMは、心理的・感情的・身体的な多様な役割を含みます。それぞれのタイプの本質的な意味、相性の良い組み合わせ、安全な実践のための重要事項を解説します。'
    },
    card: {
      characteristicsLabel: '主な特徴と傾向：',
      communicationLabel: '対話と事前交渉のポイント：'
    },
    cta: {
      title: 'あなた自身の20タイプのスコアを測定してみませんか？',
      subtitle: '完全無料・匿名のオンラインテストで、あなたのパーソナライズされた性向グラフを算出します。',
      quickBtn: 'クイック診断を受ける（3分）',
      compBtn: '精密総合診断を受ける（10分）'
    }
  },
  fr: {
    meta: {
      title: 'Catégories & Dimensions du Test BDSM — Lexique Complet',
      description: 'Explorez le guide exhaustif des 20 catégories du test BDSM. Définitions détaillées de Dominant, Soumis, Switch, Sadique, Masochiste et bien d’autres.'
    },
    header: {
      eyebrow: 'Taxonomie & Base de Connaissances',
      h1: 'Bibliothèque des 20 Catégories et Rôles BDSM',
      subtitle: 'Le BDSM consensuel rassemble une riche palette de postures psychologiques, sensorielles et relationnelles. Découvrez la signification de chaque dimension, ses affinités et ses principes de sécurité.'
    },
    card: {
      characteristicsLabel: 'Caractéristiques Fréquentes :',
      communicationLabel: 'Dialogue & Négociation Préalable :'
    },
    cta: {
      title: 'Découvrez Vos Affinités sur Ces 20 Dimensions',
      subtitle: 'Passez notre test en ligne gratuit et anonyme pour calculer votre profil personnalisé sur tous les archétypes.',
      quickBtn: 'Faire le Test Rapide (3 min)',
      compBtn: 'Faire le Test Complet (10 min)'
    }
  },
  de: {
    meta: {
      title: 'BDSM Test Kategorien & Dimensionen — Vollständiges Kink-Glossar',
      description: 'Umfassender Leitfaden zu allen 20 BDSM Test Kategorien und Dimensionen. Detaillierte Definitionen von Dominant, Submissiv, Switch, Sadist, Masochist und mehr.'
    },
    header: {
      eyebrow: 'Taxonomie & Wissensdatenbank',
      h1: 'Bibliothek der 20 BDSM Test Kategorien',
      subtitle: 'Einvernehmliches BDSM umfasst ein weites Spektrum psychologischer, emotionaler und körperlicher Rollen. Entdecken Sie die Bedeutung jeder Dimension, harmonierende Paare und essenzielle Sicherheitshinweise.'
    },
    card: {
      characteristicsLabel: 'Typische Merkmale:',
      communicationLabel: 'Kommunikation & Absprachen:'
    },
    cta: {
      title: 'Finden Sie heraus, wo Sie auf diesen 20 Dimensionen stehen',
      subtitle: 'Starten Sie unseren kostenlosen, privaten Online-Test, um Ihr individuelles Profil zu berechnen.',
      quickBtn: 'Schnelltest starten (3 Min.)',
      compBtn: 'Ausführlichen Test starten (10 Min.)'
    }
  },
  pt: {
    meta: {
      title: 'Categorias e Dimensões do Teste BDSM — Glossário Completo',
      description: 'Guia completo sobre todas as 20 categorias e dimensões do teste BDSM. Definições aprofundadas de Dominante, Submisso, Switch, Sádico, Masoquista e mais.'
    },
    header: {
      eyebrow: 'Taxonomia & Base de Conhecimento',
      h1: 'Biblioteca de Categorias e Dimensões BDSM',
      subtitle: 'O BDSM consensual abrange uma rica diversidade de papéis psicológicos, emocionais e físicos. Conheça o significado autêntico de cada dimensão, pares complementares e diretrizes de segurança essenciais.'
    },
    card: {
      characteristicsLabel: 'Características Típicas:',
      communicationLabel: 'Comunicação e Acordos:'
    },
    cta: {
      title: 'Descubra Como Você se Posiciona Nessas 20 Dimensões',
      subtitle: 'Faça nosso teste online gratuito e anônimo para mapear suas pontuações em todos os arquétipos.',
      quickBtn: 'Iniciar Teste Rápido (3 min)',
      compBtn: 'Iniciar Teste Completo (10 min)'
    }
  },
  ko: {
    meta: {
      title: 'BDSM 성향 카테고리 & 20가지 유형 사전 — 완벽 가이드',
      description: 'BDSM 테스트에서 측정하는 20가지 성향 카테고리와 차원을 탐색해 보세요. 도미넌트, 서브미시브, 스위치, 새디스트, 마조히스트 등의 상세한 해설을 제공합니다.'
    },
    header: {
      eyebrow: 'BDSM 성향 지식 사전',
      h1: 'BDSM 테스트 20가지 성향 유형 사전',
      subtitle: '상호 합의에 기반한 BDSM은 심리적, 정서적, 신체적인 다채로운 스펙트럼을 포괄합니다. 각 성향의 본질적인 의미와 상호 보완적인 관계, 안전한 소통 수칙을 알아보세요.'
    },
    card: {
      characteristicsLabel: '주요 특징과 성향:',
      communicationLabel: '사전 소통 및 합의 팁:'
    },
    cta: {
      title: '20가지 유형 중 당신의 성향을 직접 확인해 보세요',
      subtitle: '완전 무료 익명 온라인 검사를 통해 20가지 유형 전체에 대한 맞춤형 분석 그래프를 확인하세요.',
      quickBtn: '빠른 테스트 시작 (3분)',
      compBtn: '정밀 종합 테스트 시작 (10분)'
    }
  },
  it: {
    meta: {
      title: 'Categorie e Dimensioni del Test BDSM — Glossario Completo',
      description: 'Esplora la guida completa a tutte le 20 categorie del test BDSM. Definizioni dettagliate di Dominante, Sottomesso, Switch, Sadico, Masochista e molti altri.'
    },
    header: {
      eyebrow: 'Tassonomia & Conoscenza',
      h1: 'Libreria delle 20 Categorie e Dimensioni BDSM',
      subtitle: 'Il BDSM consensuale abbraccia una vasta gamma di ruoli psicologici, emotivi e fisici. Scopri il significato autentico di ogni dimensione, le affinità complementari e le regole fondamentali di sicurezza.'
    },
    card: {
      characteristicsLabel: 'Caratteristiche Comuni:',
      communicationLabel: 'Comunicazione & Negoziazione:'
    },
    cta: {
      title: 'Scopri il Tuo Profilo in Queste 20 Dimensioni',
      subtitle: 'Esegui il nostro test online gratuito e anonimo per calcolare le tue percentuali su tutti gli archetipi.',
      quickBtn: 'Fai il Test Rapido (3 min)',
      compBtn: 'Fai il Test Completo (10 min)'
    }
  }
};

export function getDimensionsPageContent(lang: SupportedLanguage): DimensionsPageContent {
  return DIMENSIONS_PAGE_TRANSLATIONS[lang] || DIMENSIONS_PAGE_TRANSLATIONS.en;
}

