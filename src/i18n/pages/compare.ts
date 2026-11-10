import type { SupportedLanguage } from '../languages';

export interface ComparePageContent {
  meta: {
    title: string;
    description: string;
  };
  header: {
    eyebrow: string;
    h1: string;
    subtitle: string;
  };
  setup: {
    profileATitle: string;
    profileALoadBtn: string;
    profileAPlaceholder: string;
    profileAStatusEmpty: string;
    profileAStatusLoaded: string;
    profileBTitle: string;
    profileBPlaceholder: string;
    profileBStatusEmpty: string;
    profileBStatusLoaded: string;
    compareBtn: string;
    clearBtn: string;
  };
  results: {
    overallSynergy: string;
    complementaryTitle: string;
    complementaryDesc: string;
    neutralTitle: string;
    boundaryTitle: string;
    boundaryDesc: string;
    noComparisonTitle: string;
    noComparisonDesc: string;
    shareComparisonBtn: string;
    copiedNotice: string;
  };
}

export const COMPARE_PAGE_TRANSLATIONS: Record<SupportedLanguage, ComparePageContent> = {
  en: {
    meta: {
      title: 'Partner BDSM Test Comparison — Sync Results & Compatibility',
      description: 'Compare two BDSM test results anonymously and side-by-side to discover complementary desires, mutual kink synergy, and relationship communication points.'
    },
    header: {
      eyebrow: 'Dynamic Sync Engine',
      h1: 'Partner Dynamics Comparison',
      subtitle: 'Compare two profiles anonymously to discover complementary dynamics, mutual excitement, and areas where proactive communication will help create safe, thrilling experiences.'
    },
    setup: {
      profileATitle: 'Your Result Code or URL',
      profileALoadBtn: 'Load My Latest Test',
      profileAPlaceholder: 'Paste your test link or results code here...',
      profileAStatusEmpty: 'No profile loaded',
      profileAStatusLoaded: 'Your profile loaded successfully',
      profileBTitle: 'Partner Result Code or URL',
      profileBPlaceholder: 'Paste partner test link or results code here...',
      profileBStatusEmpty: 'No partner profile loaded',
      profileBStatusLoaded: 'Partner profile loaded successfully',
      compareBtn: 'Compare Profiles',
      clearBtn: 'Clear'
    },
    results: {
      overallSynergy: 'Overall Dynamic Synergy',
      complementaryTitle: 'Complementary Dynamics (High Synergy)',
      complementaryDesc: 'Dimensions where one partner holds high desire that fits naturally with the other partner’s complementary role.',
      neutralTitle: 'Shared Moderate Interests',
      boundaryTitle: 'Potential Boundary Considerations',
      boundaryDesc: 'Areas where desires differ significantly or where either partner indicates lower comfort. Discuss boundaries proactively.',
      noComparisonTitle: 'Load Both Profiles to View Comparison',
      noComparisonDesc: 'Paste both results links or codes into the fields above to unlock side-by-side analysis.',
      shareComparisonBtn: 'Share This Comparison Link',
      copiedNotice: 'Comparison link copied to clipboard!'
    }
  },
  es: {
    meta: {
      title: 'Comparador de Test BDSM en Pareja — Compatibilidad y Sincronización',
      description: 'Compara dos resultados del test BDSM de forma anónima y en paralelo para descubrir deseos complementarios, sinergias y aspectos a dialogar.'
    },
    header: {
      eyebrow: 'Motor de Sincronización',
      h1: 'Comparación de Dinámicas en Pareja',
      subtitle: 'Compara dos perfiles de forma confidencial para descubrir compatibilidades naturales, áreas de entusiasmo compartido y puntos de acuerdo mutuo.'
    },
    setup: {
      profileATitle: 'Tu Código o Enlace de Resultados',
      profileALoadBtn: 'Cargar Mi Último Test',
      profileAPlaceholder: 'Pega aquí tu enlace de resultados o código...',
      profileAStatusEmpty: 'Ningún perfil cargado',
      profileAStatusLoaded: 'Tu perfil se cargó correctamente',
      profileBTitle: 'Código o Enlace de tu Pareja',
      profileBPlaceholder: 'Pega aquí el enlace de tu pareja o su código...',
      profileBStatusEmpty: 'Ningún perfil de pareja cargado',
      profileBStatusLoaded: 'Perfil de pareja cargado correctamente',
      compareBtn: 'Comparar Perfiles',
      clearBtn: 'Limpiar'
    },
    results: {
      overallSynergy: 'Sinergia Global de Pareja',
      complementaryTitle: 'Dinámicas Complementarias (Alta Sinergia)',
      complementaryDesc: 'Dimensiones donde un miembro tiene un deseo alto que encaja naturalmente con el rol complementario del otro.',
      neutralTitle: 'Intereses Compartidos Moderados',
      boundaryTitle: 'Puntos de Negociación y Límites',
      boundaryDesc: 'Áreas donde las preferencias difieren o alguno muestra menor afinidad. Hablad previamente sobre estos límites.',
      noComparisonTitle: 'Carga Ambos Perfiles para Ver la Comparativa',
      noComparisonDesc: 'Pega los enlaces o códigos en los campos superiores para desbloquear el análisis paralelo.',
      shareComparisonBtn: 'Compartir Enlace de Comparación',
      copiedNotice: '¡Enlace de comparación copiado al portapapeles!'
    }
  },
  ja: {
    meta: {
      title: 'パートナーBDSM診断結果比較 — 2人の相性マッチング分析',
      description: '2人のBDSMテスト結果を完全に匿名かつ画面上で並べて比較。お互いの補完関係、相乗効果、事前に話し合うべき境界線を客観的に可視化します。'
    },
    header: {
      eyebrow: 'ダイナミック相性エンジン',
      h1: 'パートナーとのBDSM相性比較',
      subtitle: 'お互いの結果URLを入力するだけで、2人の補完的な関係性、共通の興味、安全に楽しむための対話ポイントを安全に分析します。'
    },
    setup: {
      profileATitle: 'あなたの結果コードまたはURL',
      profileALoadBtn: '直近の診断結果を読み込む',
      profileAPlaceholder: 'あなたの診断結果URLまたはコードを貼り付けてください...',
      profileAStatusEmpty: 'プロフィール未読込',
      profileAStatusLoaded: 'あなたの結果を読み込みました',
      profileBTitle: 'パートナーの結果コードまたはURL',
      profileBPlaceholder: 'お相手の診断結果URLまたはコードを貼り付けてください...',
      profileBStatusEmpty: 'パートナーの結果未読込',
      profileBStatusLoaded: 'パートナーの結果を読み込みました',
      compareBtn: '2人の結果を比較する',
      clearBtn: 'リセット'
    },
    results: {
      overallSynergy: '全体的な相乗シナジー度',
      complementaryTitle: '補完関係にある相性抜群のタイプ',
      complementaryDesc: '一方が求める役割と、もう一方が喜んで応じる役割が美しくマッチしているカテゴリーです。',
      neutralTitle: '共通して興味のある中程度のカテゴリー',
      boundaryTitle: '事前のすり合わせが必要な境界線',
      boundaryDesc: '好みの差が大きい、またはどちらかが苦手とする分野です。セーフワードを含め事前に話し合いましょう。',
      noComparisonTitle: '両方の結果を入力して比較を開始してください',
      noComparisonDesc: '上記に2人分の結果コードまたはURLを入力すると、並列分析が表示されます。',
      shareComparisonBtn: 'この比較リンクを共有する',
      copiedNotice: '比較用リンクをクリップボードにコピーしました！'
    }
  },
  fr: {
    meta: {
      title: 'Comparateur de Test BDSM en Couple — Synchronisation & Synergies',
      description: 'Comparez deux résultats de test BDSM anonymement et côte à côte pour révéler vos complémentarités, vos désirs partagés et vos sujets d’échange.'
    },
    header: {
      eyebrow: 'Moteur de Synchronisation',
      h1: 'Comparaison des Rôles en Couple',
      subtitle: 'Croisez vos profils dans l’anonymat pour identifier vos complémentarités naturelles, vos complicités et les limites à négocier sereinement.'
    },
    setup: {
      profileATitle: 'Votre Lien ou Code de Résultats',
      profileALoadBtn: 'Charger Mon Dernier Test',
      profileAPlaceholder: 'Collez votre lien ou code de résultats ici...',
      profileAStatusEmpty: 'Aucun profil chargé',
      profileAStatusLoaded: 'Votre profil a été chargé avec succès',
      profileBTitle: 'Lien ou Code de Votre Partenaire',
      profileBPlaceholder: 'Collez le lien ou code de votre partenaire ici...',
      profileBStatusEmpty: 'Aucun profil partenaire chargé',
      profileBStatusLoaded: 'Profil partenaire chargé avec succès',
      compareBtn: 'Comparer les Profils',
      clearBtn: 'Effacer'
    },
    results: {
      overallSynergy: 'Synergie Globale du Couple',
      complementaryTitle: 'Dynamiques Complémentaires (Forte Synergie)',
      complementaryDesc: 'Dimensions où l’attente de l’un rencontre naturellement le rôle de prédilection de l’autre.',
      neutralTitle: 'Intérêts Partagés Modérés',
      boundaryTitle: 'Points de Vigilance et Limites à Échanger',
      boundaryDesc: 'Zones où les envies divergent ou pour lesquelles l’un exprime une réticence. Établissez vos limites en amont.',
      noComparisonTitle: 'Renseignez les Deux Profils pour Afficher le Comparatif',
      noComparisonDesc: 'Collez vos deux liens ou codes ci-dessus pour révéler l’analyse croisée.',
      shareComparisonBtn: 'Partager Ce Lien de Comparaison',
      copiedNotice: 'Lien de comparaison copié dans le presse-papier !'
    }
  },
  de: {
    meta: {
      title: 'BDSM Test Partner-Vergleich — Auswertung & Kompatibilität',
      description: 'Vergleichen Sie zwei BDSM-Testergebnisse anonym nebeneinander, um harmonierende Rollen, gemeinsame Vorlieben und Absprache-Punkte zu entdecken.'
    },
    header: {
      eyebrow: 'Abgleich-System',
      h1: 'Partner-Vergleich & Dynamik-Abgleich',
      subtitle: 'Vergleichen Sie zwei Profile anonym, um harmonierende Rollen, gemeinsame Kinks und Themen für eine proaktive Absprache zu erkennen.'
    },
    setup: {
      profileATitle: 'Ihr Ergebnis-Code oder Link',
      profileALoadBtn: 'Mein letztes Ergebnis laden',
      profileAPlaceholder: 'Ergebnis-Link oder Code hier einfügen...',
      profileAStatusEmpty: 'Kein Profil geladen',
      profileAStatusLoaded: 'Ihr Profil wurde erfolgreich geladen',
      profileBTitle: 'Ergebnis-Code oder Link des Partners',
      profileBPlaceholder: 'Ergebnis-Link des Partners hier einfügen...',
      profileBStatusEmpty: 'Kein Partner-Profil geladen',
      profileBStatusLoaded: 'Partner-Profil erfolgreich geladen',
      compareBtn: 'Profile vergleichen',
      clearBtn: 'Zurücksetzen'
    },
    results: {
      overallSynergy: 'Gesamte Partner-Synergie',
      complementaryTitle: 'Komplementäre Dynamiken (Hohe Synergie)',
      complementaryDesc: 'Bereiche, in denen der ausgeprägte Wunsch des einen Partners optimal zur Neigung des anderen passt.',
      neutralTitle: 'Gemeinsame mittlere Interessen',
      boundaryTitle: 'Punkte für Grenzen & Absprachen',
      boundaryDesc: 'Themen mit deutlichen Unterschieden oder geringerem Wohlbefinden. Besprechen Sie hier Ihre Grenzen vorab.',
      noComparisonTitle: 'Beide Profile laden, um den Vergleich zu sehen',
      noComparisonDesc: 'Fügen Sie oben beide Links oder Codes ein, um den direkten Abgleich freizuschalten.',
      shareComparisonBtn: 'Diesen Vergleichs-Link teilen',
      copiedNotice: 'Vergleichs-Link in die Zwischenablage kopiert!'
    }
  },
  pt: {
    meta: {
      title: 'Comparador de Teste BDSM em Casal — Sincronização e Compatibilidade',
      description: 'Compare dois resultados de teste BDSM anonimamente e lado a lado para encontrar dinâmicas complementares e alinhar limites.'
    },
    header: {
      eyebrow: 'Mecanismo de Sincronização',
      h1: 'Comparação de Dinâmicas de Casal',
      subtitle: 'Compare dois perfis com total privacidade para identificar complementaridades naturais, entusiasmo comum e assuntos que pedem conversa prévia.'
    },
    setup: {
      profileATitle: 'Seu Código ou Link de Resultados',
      profileALoadBtn: 'Carregar Meu Último Teste',
      profileAPlaceholder: 'Cole aqui seu link ou código de teste...',
      profileAStatusEmpty: 'Nenhum perfil carregado',
      profileAStatusLoaded: 'Seu perfil foi carregado com sucesso',
      profileBTitle: 'Código ou Link do(a) Parceiro(a)',
      profileBPlaceholder: 'Cole aqui o link ou código do parceiro...',
      profileBStatusEmpty: 'Nenhum perfil de parceiro carregado',
      profileBStatusLoaded: 'Perfil do parceiro carregado com sucesso',
      compareBtn: 'Comparar Perfis',
      clearBtn: 'Limpar'
    },
    results: {
      overallSynergy: 'Sinergia Geral do Casal',
      complementaryTitle: 'Dinâmicas Complementares (Alta Afinidade)',
      complementaryDesc: 'Dimensões em que o desejo intenso de um se encaixa de forma harmoniosa no papel preferido do outro.',
      neutralTitle: 'Interesses Moderados Compartilhados',
      boundaryTitle: 'Pontos de Atenção e Limites Pessoais',
      boundaryDesc: 'Áreas com divergência acentuada ou menor receptividade. Conversem abertamente sobre esses limites.',
      noComparisonTitle: 'Carregue Ambos os Perfis para Visualizar a Comparação',
      noComparisonDesc: 'Insira os dois links ou códigos nos campos acima para desbloquear a análise comparativa.',
      shareComparisonBtn: 'Compartilhar Este Link de Comparação',
      copiedNotice: 'Link de comparação copiado para a área de transferência!'
    }
  },
  ko: {
    meta: {
      title: '파트너 BDSM 테스트 결과 비교 — 성향 매칭 & 궁합 분석',
      description: '두 사람의 BDSM 테스트 결과를 익명으로 나란히 비교하여 상호 보완적인 성향, 공통 관심사, 사전 협의가 필요한 한계선을 확인하세요.'
    },
    header: {
      eyebrow: '실시간 성향 매칭 엔진',
      h1: '파트너와의 BDSM 성향 비교 분석',
      subtitle: '두 사람의 성향 프로필을 익명으로 비교하여 자연스러운 상호 보완성, 공통의 흥미, 안전한 교감을 위해 소통할 포인트를 확인하세요.'
    },
    setup: {
      profileATitle: '내 테스트 결과 코드 또는 링크',
      profileALoadBtn: '최근 내 결과 불러오기',
      profileAPlaceholder: '결과 링크 또는 코드를 입력하세요...',
      profileAStatusEmpty: '프로필 미입력',
      profileAStatusLoaded: '내 프로필을 성공적으로 불러왔습니다',
      profileBTitle: '파트너의 결과 코드 또는 링크',
      profileBPlaceholder: '파트너의 결과 링크 또는 코드를 입력하세요...',
      profileBStatusEmpty: '파트너 프로필 미입력',
      profileBStatusLoaded: '파트너 프로필을 성공적으로 불러왔습니다',
      compareBtn: '프로필 비교하기',
      clearBtn: '초기화'
    },
    results: {
      overallSynergy: '종합 성향 시너지 점수',
      complementaryTitle: '상호 보완적인 강점 (높은 시너지)',
      complementaryDesc: '한 사람의 강한 선호도가 상대방의 보완적 역할과 자연스럽게 부합하는 영역입니다.',
      neutralTitle: '공통의 중도적 관심사',
      boundaryTitle: '사전 대화 및 한계선 조율이 필요한 영역',
      boundaryDesc: '서로의 선호도 차이가 크거나 한쪽이 부담을 느끼는 영역입니다. 세이프워드와 한계선을 미리 의논하세요.',
      noComparisonTitle: '두 사람의 결과를 모두 입력해 주세요',
      noComparisonDesc: '상단 입력창에 두 결과 링크 또는 코드를 넣으시면 1:1 비교 분석이 표시됩니다.',
      shareComparisonBtn: '이 비교 링크 공유하기',
      copiedNotice: '비교 링크가 클립보드에 복사되었습니다!'
    }
  },
  it: {
    meta: {
      title: 'Confronto Test BDSM di Coppia — Compatibilità & Sincronizzazione',
      description: 'Confronta due risultati di test BDSM anonimamente e fianco a fianco per individuare desideri complementari, affinità e limiti da chiarire.'
    },
    header: {
      eyebrow: 'Motore di Sincronizzazione',
      h1: 'Confronto delle Dinamiche di Coppia',
      subtitle: 'Confronta due profili nel massimo riserbo per scoprire compatibilità naturali, intese condivise e temi su cui dialogare preventivamente.'
    },
    setup: {
      profileATitle: 'Il Tuo Codice o Link di Risultato',
      profileALoadBtn: 'Carica il Mio Ultimo Test',
      profileAPlaceholder: 'Incolla qui il tuo link o codice di test...',
      profileAStatusEmpty: 'Nessun profilo caricato',
      profileAStatusLoaded: 'Il tuo profilo è stato caricato con successo',
      profileBTitle: 'Codice o Link del Partner',
      profileBPlaceholder: 'Incolla qui il link o codice del partner...',
      profileBStatusEmpty: 'Nessun profilo partner caricato',
      profileBStatusLoaded: 'Profilo del partner caricato con successo',
      compareBtn: 'Confronta Profili',
      clearBtn: 'Cancella'
    },
    results: {
      overallSynergy: 'Sinergia Globale di Coppia',
      complementaryTitle: 'Dinamiche Complementari (Alta Sinergia)',
      complementaryDesc: 'Aree in cui il vivo desiderio di uno si sposa perfettamente con il ruolo prediletto dell’altro.',
      neutralTitle: 'Interessi Comuni Moderati',
      boundaryTitle: 'Punti di Accordo e Limiti Personali',
      boundaryDesc: 'Ambiti in cui le preferenze divergono o uno dei partner avverte esitazione. Parlate con cura di questi confini.',
      noComparisonTitle: 'Carica Entrambi i Profili per Vedere il Confronto',
      noComparisonDesc: 'Inserisci entrambi i link o codici in alto per sbloccare l’analisi comparata.',
      shareComparisonBtn: 'Condividi Questo Link di Confronto',
      copiedNotice: 'Link di confronto copiato negli appunti!'
    }
  }
};

export function getComparePageContent(lang: SupportedLanguage): ComparePageContent {
  return COMPARE_PAGE_TRANSLATIONS[lang] || COMPARE_PAGE_TRANSLATIONS.en;
}

