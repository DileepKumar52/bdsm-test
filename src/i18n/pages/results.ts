import type { SupportedLanguage } from '../languages';

export interface ResultsPageContent {
  meta: {
    title: string;
    description: string;
  };
  loading: string;
  empty: {
    title: string;
    description: string;
    quickBtn: string;
    compBtn: string;
  };
  executiveCard: {
    badge: string;
    title: string;
    subtitle: string;
    dominantTraitLabel: string;
    topThreeLabel: string;
    spectrumLabel: string;
  };
  breakdown: {
    title: string;
    subtitle: string;
    highMatch: string;
    moderateMatch: string;
    lowMatch: string;
  };
  actions: {
    shareTitle: string;
    shareSubtitle: string;
    copyLinkBtn: string;
    linkCopiedBtn: string;
    compareBtn: string;
    retakeBtn: string;
  };
}

export const RESULTS_PAGE_TRANSLATIONS: Record<SupportedLanguage, ResultsPageContent> = {
  en: {
    meta: {
      title: 'BDSM Test Results — Your Kink Dynamics Profile & Analysis',
      description: 'Explore your comprehensive BDSM test results, archetype breakdown, power balance, and practical partner communication guidelines.'
    },
    loading: 'Calculating your dynamic profile...',
    empty: {
      title: 'No Test Results Found',
      description: 'You haven\'t completed an assessment yet, or your link is missing result parameters. Take our assessment to generate your personalized profile.',
      quickBtn: 'Start Quick Test (3 min)',
      compBtn: 'Start Comprehensive Test (10 min)'
    },
    executiveCard: {
      badge: 'Your Intimacy Profile',
      title: 'Dynamic Archetype Summary',
      subtitle: 'Based on your client-side questionnaire responses, here is your primary intimacy orientation.',
      dominantTraitLabel: 'Leading Orientation',
      topThreeLabel: 'Top 3 Dimensions',
      spectrumLabel: 'Power Dynamic Balance'
    },
    breakdown: {
      title: 'Granular Score Breakdown (All 20 Dimensions)',
      subtitle: 'Review your calculated preference percentages across each evaluated archetype.',
      highMatch: 'Strong Affinity (70%–100%)',
      moderateMatch: 'Moderate Interest (40%–69%)',
      lowMatch: 'Low Interest / Boundary (0%–39%)'
    },
    actions: {
      shareTitle: 'Save & Compare Your Results',
      shareSubtitle: 'Your results are encoded securely in this link. Share it with a partner to compare compatibility.',
      copyLinkBtn: 'Copy Result Link',
      linkCopiedBtn: 'Link Copied!',
      compareBtn: 'Compare with Partner',
      retakeBtn: 'Retake Assessment'
    }
  },
  es: {
    meta: {
      title: 'Resultados del Test BDSM — Tu Perfil de Dinámicas y Análisis',
      description: 'Explora tus resultados completos del test BDSM, desglose de arquetipos, balance de poder y pautas de comunicación para parejas.'
    },
    loading: 'Calculando tu perfil de dinámicas...',
    empty: {
      title: 'No se encontraron resultados del test',
      description: 'Aún no has completado la evaluación o tu enlace no contiene los parámetros de resultado. Haz el test para generar tu perfil personalizado.',
      quickBtn: 'Hacer Test Rápido (3 min)',
      compBtn: 'Hacer Test Completo (10 min)'
    },
    executiveCard: {
      badge: 'Tu Perfil Íntimo',
      title: 'Resumen de Arquetipos Dinámicos',
      subtitle: 'Con base en tus respuestas procesadas localmente en tu navegador, este es tu perfil predominante.',
      dominantTraitLabel: 'Inclinación Principal',
      topThreeLabel: 'Top 3 Dimensiones',
      spectrumLabel: 'Balance de Intercambio de Poder'
    },
    breakdown: {
      title: 'Desglose Detallado (Las 20 Dimensiones)',
      subtitle: 'Revisa tus porcentajes calculados para cada uno de los arquetipos evaluados.',
      highMatch: 'Fuerte Afinidad (70%–100%)',
      moderateMatch: 'Interés Moderado (40%–69%)',
      lowMatch: 'Bajo Interés / Límite (0%–39%)'
    },
    actions: {
      shareTitle: 'Guarda y Compara tus Resultados',
      shareSubtitle: 'Tus resultados están codificados de forma segura en este enlace. Compártelo con tu pareja para evaluar su compatibilidad.',
      copyLinkBtn: 'Copiar Enlace de Resultados',
      linkCopiedBtn: '¡Enlace Copiado!',
      compareBtn: 'Comparar con tu Pareja',
      retakeBtn: 'Repetir Evaluación'
    }
  },
  ja: {
    meta: {
      title: 'BDSM診断結果 — あなたのタイプ・スコア分析レポート',
      description: 'あなたのBDSM診断結果、詳細なタイプ別パーセンテージ、主従バランス、パートナーとのコミュニケーション指針を確認できます。'
    },
    loading: '診断プロファイルを計算中...',
    empty: {
      title: '診断結果が見つかりません',
      description: 'まだ診断を完了していないか、URLに結果データが含まれていません。テストを受けてあなた専用の診断レポートを作成してください。',
      quickBtn: 'クイック診断を受ける（3分）',
      compBtn: '精密総合診断を受ける（10分）'
    },
    executiveCard: {
      badge: 'あなたの診断プロファイル',
      title: '主要タイプ・スコア総括',
      subtitle: 'ブラウザ内での回答処理に基づき、あなたの主要な役割と嗜好性のバランスを算出しました。',
      dominantTraitLabel: '最も顕著な特性',
      topThreeLabel: '上位3タイプ',
      spectrumLabel: 'パワーエクスチェンジ（主従）バランス'
    },
    breakdown: {
      title: '全20タイプの詳細スコア内訳',
      subtitle: '各属性におけるあなたの適合度・関心度パーセンテージ一覧です。',
      highMatch: '強い親和性・関心（70%〜100%）',
      moderateMatch: '中程度の興味・可能性（40%〜69%）',
      lowMatch: '低い関心・境界線（0%〜39%）'
    },
    actions: {
      shareTitle: '結果の保存とパートナーとの比較',
      shareSubtitle: 'あなたの診断結果はURL内に安全にエンコードされています。パートナーに共有して相性を比較しましょう。',
      copyLinkBtn: '結果URLをコピーする',
      linkCopiedBtn: 'コピーしました！',
      compareBtn: 'パートナーと相性を比較する',
      retakeBtn: 'もう一度診断を受ける'
    }
  },
  fr: {
    meta: {
      title: 'Résultats du Test BDSM — Votre Profil de Rôles & Analyse',
      description: 'Consultez vos résultats de test BDSM, votre répartition par archétype, votre équilibre relationnel et vos conseils de communication.'
    },
    loading: 'Calcul de votre profil dynamique...',
    empty: {
      title: 'Aucun Résultat de Test Trouvé',
      description: 'Vous n’avez pas encore complété le test ou votre lien est incomplet. Répondez au questionnaire pour générer votre profil personnalisé.',
      quickBtn: 'Lancer le Test Rapide (3 min)',
      compBtn: 'Lancer le Test Complet (10 min)'
    },
    executiveCard: {
      badge: 'Votre Profil Intime',
      title: 'Synthèse des Archétypes Prédominants',
      subtitle: 'Sur la base de vos réponses calculées localement dans votre navigateur, voici vos orientations principales.',
      dominantTraitLabel: 'Orientation Majeure',
      topThreeLabel: 'Top 3 Dimensions',
      spectrumLabel: 'Équilibre de Pouvoir'
    },
    breakdown: {
      title: 'Ventilation Détaillée (Les 20 Dimensions)',
      subtitle: 'Examinez vos pourcentages d’affinité pour chacun des archétypes évalués.',
      highMatch: 'Forte Affinité (70%–100%)',
      moderateMatch: 'Intérêt Modéré (40%–69%)',
      lowMatch: 'Faible Intérêt / Limite (0%–39%)'
    },
    actions: {
      shareTitle: 'Sauvegarder & Comparer Vos Résultats',
      shareSubtitle: 'Vos scores sont encodés de façon sécurisée dans ce lien. Partagez-le avec un(e) partenaire pour mesurer vos synergies.',
      copyLinkBtn: 'Copier le Lien des Résultats',
      linkCopiedBtn: 'Lien Copié !',
      compareBtn: 'Comparer avec un(e) Partenaire',
      retakeBtn: 'Recommencer le Test'
    }
  },
  de: {
    meta: {
      title: 'BDSM Test Ergebnisse — Ihr Profil & Detaillierte Auswertung',
      description: 'Entdecken Sie Ihre BDSM-Testergebnisse, die Auswertung nach Archetypen, Machtbalance und nützliche Tipps für das Gespräch mit dem Partner.'
    },
    loading: 'Ihr dynamisches Profil wird berechnet...',
    empty: {
      title: 'Keine Testergebnisse gefunden',
      description: 'Sie haben noch keinen Test abgeschlossen oder Ihr Link enthält keine Parameter. Starten Sie den Test, um Ihr Profil zu erstellen.',
      quickBtn: 'Schnelltest starten (3 Min.)',
      compBtn: 'Ausführlichen Test starten (10 Min.)'
    },
    executiveCard: {
      badge: 'Ihr persönliches Profil',
      title: 'Zusammenfassung Ihrer Kernorientierung',
      subtitle: 'Basierend auf Ihren im Browser berechneten Antworten zeigt diese Übersicht Ihre wichtigsten Neigungen.',
      dominantTraitLabel: 'Haupteigenschaft',
      topThreeLabel: 'Top 3 Dimensionen',
      spectrumLabel: 'Machtbalance (Dominant / Devot)'
    },
    breakdown: {
      title: 'Detaillierte Punkteübersicht (Alle 20 Dimensionen)',
      subtitle: 'Prüfen Sie Ihre berechneten Prozentwerte für alle 20 BDSM-Kategorien.',
      highMatch: 'Starke Neigung (70%–100%)',
      moderateMatch: 'Mäßiges Interesse (40%–69%)',
      lowMatch: 'Geringes Interesse / Grenze (0%–39%)'
    },
    actions: {
      shareTitle: 'Ergebnisse speichern & mit Partner vergleichen',
      shareSubtitle: 'Ihre Ergebnisse sind fälschungssicher im Link codiert. Teilen Sie ihn mit einem Partner für den direkten Abgleich.',
      copyLinkBtn: 'Ergebnis-Link kopieren',
      linkCopiedBtn: 'Link kopiert!',
      compareBtn: 'Mit Partner vergleichen',
      retakeBtn: 'Test wiederholen'
    }
  },
  pt: {
    meta: {
      title: 'Resultados do Teste BDSM — Seu Perfil de Dinâmicas e Análise',
      description: 'Explore seus resultados completos do teste BDSM, divisão por arquétipos, equilíbrio de poder e recomendações de diálogo.'
    },
    loading: 'Calculando seu perfil dinâmico...',
    empty: {
      title: 'Nenhum Resultado Encontrado',
      description: 'Você ainda não concluiu uma avaliação ou o link está sem parâmetros. Faça nosso teste para gerar seu perfil personalizado.',
      quickBtn: 'Iniciar Teste Rápido (3 min)',
      compBtn: 'Iniciar Teste Completo (10 min)'
    },
    executiveCard: {
      badge: 'Seu Perfil Íntimo',
      title: 'Resumo dos Arquétipos Predominantes',
      subtitle: 'Com base nas suas respostas processadas no próprio navegador, este é o seu mapa de orientação íntima.',
      dominantTraitLabel: 'Tendência Principal',
      topThreeLabel: 'Top 3 Dimensões',
      spectrumLabel: 'Balanço da Troca de Poder'
    },
    breakdown: {
      title: 'Pontuação Detalhada (Todas as 20 Dimensões)',
      subtitle: 'Confira as suas porcentagens para cada um dos arquétipos avaliados.',
      highMatch: 'Forte Afinidade (70%–100%)',
      moderateMatch: 'Interesse Moderado (40%–69%)',
      lowMatch: 'Baixo Interesse / Limite (0%–39%)'
    },
    actions: {
      shareTitle: 'Salvar & Comparar Seus Resultados',
      shareSubtitle: 'Seus resultados estão codificados com segurança neste link. Compartilhe com seu parceiro para analisar a compatibilidade.',
      copyLinkBtn: 'Copiar Link do Resultado',
      linkCopiedBtn: 'Link Copiado!',
      compareBtn: 'Comparar com Parceiro',
      retakeBtn: 'Refazer Avaliação'
    }
  },
  ko: {
    meta: {
      title: 'BDSM 테스트 결과 — 성향 프로필 분석 보고서',
      description: 'BDSM 테스트 결과, 세부 유형별 백분율 점수, 주종 성향 밸런스, 파트너 소통 가이드를 확인하세요.'
    },
    loading: '성향 프로필을 계산하고 있습니다...',
    empty: {
      title: '테스트 결과를 찾을 수 없습니다',
      description: '아직 검사를 완료하지 않았거나 링크에 결과 데이터가 없습니다. 테스트를 진행하여 맞춤형 결과표를 생성하세요.',
      quickBtn: '빠른 테스트 시작 (3분)',
      compBtn: '정밀 종합 테스트 시작 (10분)'
    },
    executiveCard: {
      badge: '나의 성향 분석표',
      title: '핵심 성향 유형 요약',
      subtitle: '브라우저 로컬 연산을 통해 분석된 당신의 핵심 성향과 주종 밸런스입니다.',
      dominantTraitLabel: '가장 두드러진 성향',
      topThreeLabel: '상위 3개 유형',
      spectrumLabel: '권력 교환 (주종) 밸런스'
    },
    breakdown: {
      title: '20가지 유형 전체 세부 점수',
      subtitle: '평가된 20개 성향 카테고리별 일치도 백분율을 확인하세요.',
      highMatch: '강한 선호도 및 적합 (70%–100%)',
      moderateMatch: '중도적 관심 및 잠재성 (40%–69%)',
      lowMatch: '낮은 관심 / 바운더리 (0%–39%)'
    },
    actions: {
      shareTitle: '결과 저장 및 파트너 매칭 비교',
      shareSubtitle: '결과 데이터가 링크 안에 안전하게 암호화되어 있습니다. 파트너에게 전달하여 성향을 비교해 보세요.',
      copyLinkBtn: '결과 링크 복사하기',
      linkCopiedBtn: '복사 완료!',
      compareBtn: '파트너와 결과 비교하기',
      retakeBtn: '테스트 다시 받기'
    }
  },
  it: {
    meta: {
      title: 'Risultati del Test BDSM — Profilo delle Dinamiche & Analisi',
      description: 'Scopri i tuoi risultati del test BDSM, la scomposizione per archetipi, l’equilibrio di potere e i consigli di comunicazione.'
    },
    loading: 'Calcolo del tuo profilo in corso...',
    empty: {
      title: 'Nessun Risultato Trovato',
      description: 'Non hai ancora completato il questionario o il link non include i parametri di risultato. Effettua il test per generare il tuo profilo.',
      quickBtn: 'Fai il Test Rapido (3 min)',
      compBtn: 'Fai il Test Completo (10 min)'
    },
    executiveCard: {
      badge: 'Il Tuo Profilo Intimo',
      title: 'Riepilogo degli Archetipi Principali',
      subtitle: 'Sulla base delle risposte elaborate nel tuo browser, ecco la tua configurazione intima principale.',
      dominantTraitLabel: 'Inclinazione Primaria',
      topThreeLabel: 'Top 3 Dimensioni',
      spectrumLabel: 'Equilibrio Scambio di Potere'
    },
    breakdown: {
      title: 'Dettaglio Punteggi (Tutte le 20 Dimensioni)',
      subtitle: 'Esamina le percentuali calcolate per ciascuno degli archetipi analizzati.',
      highMatch: 'Forte Affinità (70%–100%)',
      moderateMatch: 'Interesse Moderato (40%–69%)',
      lowMatch: 'Basso Interesse / Limite (0%–39%)'
    },
    actions: {
      shareTitle: 'Salva & Confronta i Tuoi Risultati',
      shareSubtitle: 'I tuoi risultati sono codificati in modo sicuro in questo link. Invialo al partner per misurare le compatibilità.',
      copyLinkBtn: 'Copia Link Risultato',
      linkCopiedBtn: 'Link Copiato!',
      compareBtn: 'Confronta con il Partner',
      retakeBtn: 'Ripeti il Test'
    }
  }
};

export function getResultsPageContent(lang: SupportedLanguage): ResultsPageContent {
  return RESULTS_PAGE_TRANSLATIONS[lang] || RESULTS_PAGE_TRANSLATIONS.en;
}

