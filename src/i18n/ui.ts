import type { SupportedLanguage } from './languages';

export interface UIDictionary {
  nav: {
    home: string;
    quickTest: string;
    comprehensiveTest: string;
    dimensions: string;
    compare: string;
    about: string;
  };
  header: {
    ageBadge: string;
    switchThemeLight: string;
    switchThemeDark: string;
    selectLanguage: string;
    menu: string;
  };
  footer: {
    brandBio: string;
    privacyBadge: string;
    colAssessments: string;
    colAbout: string;
    colLegal: string;
    homeOverview: string;
    quickTestName: string;
    comprehensiveTestName: string;
    dimensionsName: string;
    compareName: string;
    aboutUs: string;
    contact: string;
    disclaimer: string;
    privacyPolicy: string;
    termsOfService: string;
    ethicalPrinciples: string;
    copyright: string;
  };
  likert: {
    stronglyDisagree: string;
    stronglyDisagreeHint: string;
    disagree: string;
    disagreeHint: string;
    neutral: string;
    neutralHint: string;
    agree: string;
    agreeHint: string;
    stronglyAgree: string;
    stronglyAgreeHint: string;
  };
  onboarding: {
    badge: string;
    title: string;
    description: string;
    privacyNotice: string;
    privacyNoticeBold: string;
    q1Title: string;
    q1Required: string;
    ageConfirmText: string;
    ageConfirmSub: string;
    ageConfirmError: string;
    ageSelectLabel: string;
    q2Title: string;
    q2Optional: string;
    q2Subtitle: string;
    q3Title: string;
    q3Optional: string;
    q4Title: string;
    q4Optional: string;
    startButton: string;
    changeExpBtn: string;
    expModeLabel: string;
  };
  experienceOptions: {
    new: { label: string; tag: string; description: string };
    exploring: { label: string; tag: string; description: string };
    some: { label: string; tag: string; description: string };
    experienced: { label: string; tag: string; description: string };
    unspecified: { label: string; tag: string; description: string };
  };
  ageGroups: {
    a18_24: string;
    a25_34: string;
    a35_44: string;
    a45_54: string;
    a55_plus: string;
    preferNotToSay: string;
  };
  previousTesting: {
    firstTime: string;
    takenOnce: string;
    takenSeveral: string;
    preferNotToSay: string;
  };
  testReasons: {
    understandSelf: string;
    exploreInterests: string;
    learnMore: string;
    comparePartner: string;
    curious: string;
    preferNotToSay: string;
  };
  questionnaire: {
    questionLabel: string;
    of: string;
    previousBtn: string;
    nextBtn: string;
    finishBtn: string;
    retakeConfirm: string;
  };
  common: {
    loading: string;
    error: string;
    backHome: string;
    freeBadge: string;
    recommended: string;
  };
}

export const UI_TRANSLATIONS: Record<SupportedLanguage, UIDictionary> = {
  en: {
    nav: {
      home: 'Home',
      quickTest: 'Quick Test',
      comprehensiveTest: 'Comprehensive Test',
      dimensions: 'Dimensions',
      compare: 'Partner Compare',
      about: 'About'
    },
    header: {
      ageBadge: '18+',
      switchThemeLight: 'Switch to light theme',
      switchThemeDark: 'Switch to dark theme',
      selectLanguage: 'Language',
      menu: 'Toggle Navigation Menu'
    },
    footer: {
      brandBio: 'An anonymous, research-grounded intimacy assessment for consenting adults (18+) exploring relationship roles and power dynamics.',
      privacyBadge: '100% Client-Side Privacy',
      colAssessments: 'Assessments & Tools',
      colAbout: 'About & Support',
      colLegal: 'Legal & Privacy',
      homeOverview: 'BDSM Test Overview',
      quickTestName: 'Quick Test (24 Questions)',
      comprehensiveTestName: 'Comprehensive Test (64 Questions)',
      dimensionsName: 'Dimensions & Roles Library',
      compareName: 'Partner Sync & Comparison',
      aboutUs: 'About Us',
      contact: 'Contact & Feedback',
      disclaimer: 'Assessment Disclaimer',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      ethicalPrinciples: 'Principles: Safe, Sane, Consensual (SSC) & RACK',
      copyright: 'All calculations run locally on your device.'
    },
    likert: {
      stronglyDisagree: 'Strongly Disagree',
      stronglyDisagreeHint: 'Not for me / Dislike',
      disagree: 'Disagree',
      disagreeHint: 'Uninterested / Unlikely',
      neutral: 'Neutral',
      neutralHint: 'Neutral / Indifferent / Unsure',
      agree: 'Agree',
      agreeHint: 'Interested / Enjoy',
      stronglyAgree: 'Strongly Agree',
      stronglyAgreeHint: 'Core desire / Passion'
    },
    onboarding: {
      badge: 'Pre-Test Setup',
      title: 'Before You Begin',
      description: 'Please review the setup questions below. Questions 1–4 are optional, but you must confirm you are at least 18 years old. We use your experience level to adapt terminology and provide helpful definitions throughout the test.',
      privacyNoticeBold: 'Zero Scoring Impact:',
      privacyNotice: 'None of these onboarding answers affect your score, categories, or results. They are used exclusively in your local browser to tailor question phrasing.',
      q1Title: '1. Age Group & Confirmation',
      q1Required: '18+ Required',
      ageConfirmText: 'I confirm that I am at least 18 years of age.',
      ageConfirmSub: 'This assessment explores adult themes and is strictly intended for individuals 18 years or older.',
      ageConfirmError: 'You must confirm that you are at least 18 years old to proceed.',
      ageSelectLabel: 'Age Group (Optional)',
      q2Title: '2. BDSM Experience',
      q2Optional: 'Optional — Adapts question terminology',
      q2Subtitle: 'Select the description that best fits you. This adjusts question phrasing and adds definitions for complex concepts.',
      q3Title: '3. Previous Testing Experience',
      q3Optional: 'Optional',
      q4Title: '4. Reason for Taking the Test',
      q4Optional: 'Optional',
      startButton: 'Start Assessment',
      changeExpBtn: 'Change',
      expModeLabel: 'Terminology:'
    },
    experienceOptions: {
      new: {
        label: "I'm completely new to BDSM.",
        tag: 'Beginner',
        description: 'We will provide simpler language and helpful contextual definitions.'
      },
      exploring: {
        label: "I'm curious and currently exploring.",
        tag: 'Exploring',
        description: 'We will include helpful contextual explanations alongside scenarios.'
      },
      some: {
        label: 'I have some experience.',
        tag: 'Intermediate',
        description: 'Standard, balanced terminology throughout the questions.'
      },
      experienced: {
        label: 'I have considerable experience.',
        tag: 'Experienced',
        description: 'Concise phrasing utilizing familiar community terminology.'
      },
      unspecified: {
        label: 'Prefer not to say.',
        tag: 'Standard',
        description: 'Standard terminology without specialized adaptation.'
      }
    },
    ageGroups: {
      a18_24: '18–24',
      a25_34: '25–34',
      a35_44: '35–44',
      a45_54: '45–54',
      a55_plus: '55+',
      preferNotToSay: 'Prefer not to say'
    },
    previousTesting: {
      firstTime: 'No, this is my first BDSM test.',
      takenOnce: "Yes, I've taken one before.",
      takenSeveral: "Yes, I've taken several BDSM tests.",
      preferNotToSay: 'Prefer not to say.'
    },
    testReasons: {
      understandSelf: 'I want to understand myself better.',
      exploreInterests: 'I want to explore my interests and preferences.',
      learnMore: 'I want to learn more about BDSM.',
      comparePartner: 'I want to compare my results with a partner.',
      curious: "I'm simply curious.",
      preferNotToSay: 'Prefer not to say.'
    },
    questionnaire: {
      questionLabel: 'Question',
      of: 'of',
      previousBtn: '← Previous',
      nextBtn: 'Next →',
      finishBtn: 'Calculate My Results →',
      retakeConfirm: 'Restart assessment from question 1? Your current answers will be reset.'
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred.',
      backHome: 'Return to Homepage',
      freeBadge: '100% Free & Private',
      recommended: 'Recommended'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      quickTest: 'Test Rápido',
      comprehensiveTest: 'Test Completo',
      dimensions: 'Dimensiones',
      compare: 'Comparar Pareja',
      about: 'Nosotros'
    },
    header: {
      ageBadge: '18+',
      switchThemeLight: 'Cambiar a modo claro',
      switchThemeDark: 'Cambiar a modo oscuro',
      selectLanguage: 'Idioma',
      menu: 'Abrir menú de navegación'
    },
    footer: {
      brandBio: 'Una evaluación de intimidad anónima y respaldada por investigación para adultos con consentimiento (18+) que exploran roles de pareja y dinámicas de poder.',
      privacyBadge: 'Privacidad 100% en el Navegador',
      colAssessments: 'Tests y Herramientas',
      colAbout: 'Información y Ayuda',
      colLegal: 'Legal y Privacidad',
      homeOverview: 'Descripción del Test BDSM',
      quickTestName: 'Test Rápido (24 Preguntas)',
      comprehensiveTestName: 'Test Completo (64 Preguntas)',
      dimensionsName: 'Biblioteca de Dimensiones y Roles',
      compareName: 'Sincronización y Comparación en Pareja',
      aboutUs: 'Acerca de Nosotros',
      contact: 'Contacto y Comentarios',
      disclaimer: 'Aviso Legal del Test',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      ethicalPrinciples: 'Principios: Seguro, Sano y Consensuado (SSC) y RACK',
      copyright: 'Todos los cálculos se realizan localmente en tu dispositivo.'
    },
    likert: {
      stronglyDisagree: 'Totalmente en desacuerdo',
      stronglyDisagreeHint: 'No es para mí / Me desagrada',
      disagree: 'En desacuerdo',
      disagreeHint: 'Sin interés / Poco probable',
      neutral: 'Neutral',
      neutralHint: 'Indiferente / Inseguro',
      agree: 'De acuerdo',
      agreeHint: 'Interesado / Me agrada',
      stronglyAgree: 'Totalmente de acuerdo',
      stronglyAgreeHint: 'Deseo central / Pasión'
    },
    onboarding: {
      badge: 'Configuración Previa',
      title: 'Antes de Comenzar',
      description: 'Por favor revisa estas preguntas iniciales. Las preguntas 1 a 4 son opcionales, pero debes confirmar que eres mayor de 18 años. Usamos tu experiencia para adaptar la terminología y brindar explicaciones claras.',
      privacyNoticeBold: 'Cero impacto en el puntaje:',
      privacyNotice: 'Ninguna de estas respuestas afecta tu puntuación, categorías o resultados. Se procesan de forma estrictamente local para adecuar la redacción.',
      q1Title: '1. Rango de Edad y Confirmación',
      q1Required: '18+ Obligatorio',
      ageConfirmText: 'Confirmo que tengo al menos 18 años de edad.',
      ageConfirmSub: 'Esta evaluación explora temas adultos y está destinada estrictamente a personas de 18 años o más.',
      ageConfirmError: 'Debes confirmar que tienes al menos 18 años para continuar.',
      ageSelectLabel: 'Rango de Edad (Opcional)',
      q2Title: '2. Experiencia en BDSM',
      q2Optional: 'Opcional — Adapta la terminología de las preguntas',
      q2Subtitle: 'Elige la opción que mejor te describa. Ajustará el vocabulario y añadirá definiciones a conceptos clave.',
      q3Title: '3. Experiencia Previa en Tests',
      q3Optional: 'Opcional',
      q4Title: '4. Motivo del Test',
      q4Optional: 'Opcional',
      startButton: 'Comenzar Evaluación',
      changeExpBtn: 'Cambiar',
      expModeLabel: 'Terminología:'
    },
    experienceOptions: {
      new: {
        label: 'Soy totalmente principiante en BDSM.',
        tag: 'Principiante',
        description: 'Usaremos un lenguaje sencillo con definiciones contextuales útiles.'
      },
      exploring: {
        label: 'Tengo curiosidad y actualmente estoy explorando.',
        tag: 'Explorando',
        description: 'Incluiremos explicaciones útiles junto a las situaciones planteadas.'
      },
      some: {
        label: 'Tengo algo de experiencia.',
        tag: 'Intermedio',
        description: 'Terminología estándar y equilibrada en todas las preguntas.'
      },
      experienced: {
        label: 'Tengo considerable experiencia.',
        tag: 'Experimentado',
        description: 'Redacción concisa con terminología habitual de la comunidad.'
      },
      unspecified: {
        label: 'Prefiero no decirlo.',
        tag: 'Estándar',
        description: 'Terminología estándar sin adaptaciones específicas.'
      }
    },
    ageGroups: {
      a18_24: '18–24',
      a25_34: '25–34',
      a35_44: '35–44',
      a45_54: '45–54',
      a55_plus: '55+',
      preferNotToSay: 'Prefiero no decirlo'
    },
    previousTesting: {
      firstTime: 'No, este es mi primer test BDSM.',
      takenOnce: 'Sí, he realizado uno anteriormente.',
      takenSeveral: 'Sí, he realizado varios tests BDSM.',
      preferNotToSay: 'Prefiero no decirlo.'
    },
    testReasons: {
      understandSelf: 'Quiero comprenderme mejor a mí mismo/a.',
      exploreInterests: 'Quiero explorar mis intereses y preferencias.',
      learnMore: 'Quiero aprender más sobre el BDSM.',
      comparePartner: 'Quiero comparar mis resultados con mi pareja.',
      curious: 'Simplemente tengo curiosidad.',
      preferNotToSay: 'Prefiero no decirlo.'
    },
    questionnaire: {
      questionLabel: 'Pregunta',
      of: 'de',
      previousBtn: '← Anterior',
      nextBtn: 'Siguiente →',
      finishBtn: 'Calcular Mis Resultados →',
      retakeConfirm: '¿Reiniciar la evaluación desde la pregunta 1? Tus respuestas actuales se restablecerán.'
    },
    common: {
      loading: 'Cargando...',
      error: 'Ocurrió un error.',
      backHome: 'Volver al Inicio',
      freeBadge: '100% Gratis y Privado',
      recommended: 'Recomendado'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      quickTest: 'クイック診断',
      comprehensiveTest: '総合診断',
      dimensions: 'タイプ解説',
      compare: 'パートナー比較',
      about: 'サイト概要'
    },
    header: {
      ageBadge: '18禁',
      switchThemeLight: 'ライトモードに切替',
      switchThemeDark: 'ダークモードに切替',
      selectLanguage: '言語',
      menu: 'ナビゲーションメニューを開閉'
    },
    footer: {
      brandBio: '18歳以上の成人を対象とした、パートナーシップと力関係・嗜好性を探求するための完全匿名・プライバシー重視のBDSM診断テストです。',
      privacyBadge: '100%端末内プライバシー処理',
      colAssessments: '診断＆ツール',
      colAbout: '当サイトについて',
      colLegal: '法的情報・プライバシー',
      homeOverview: 'BDSM診断の概要',
      quickTestName: 'クイック診断（24問）',
      comprehensiveTestName: '総合診断（64問）',
      dimensionsName: '20の属性・タイプ一覧',
      compareName: 'パートナー相性比較',
      aboutUs: '運営者情報',
      contact: 'お問い合わせ・フィードバック',
      disclaimer: '免責事項',
      privacyPolicy: 'プライバシーポリシー',
      termsOfService: '利用規約',
      ethicalPrinciples: '基本原則：合意（SSC / RACK）とアフターケア',
      copyright: 'すべての計算はお手元のブラウザ内で安全に行われます。'
    },
    likert: {
      stronglyDisagree: '全くそう思わない',
      stronglyDisagreeHint: '自分には合わない・苦手',
      disagree: 'そう思わない',
      disagreeHint: '興味がない・可能性が低い',
      neutral: 'どちらでもない',
      neutralHint: '中立・未定・わからない',
      agree: 'そう思う',
      agreeHint: '興味がある・好ましい',
      stronglyAgree: '強くそう思う',
      stronglyAgreeHint: '強い願望・情熱がある'
    },
    onboarding: {
      badge: '診断前アンケート',
      title: '診断を始める前に',
      description: '以下の事前確認をご確認ください。質問1〜4は任意ですが、18歳以上であることの確認は必須です。あなたの経験レベルに合わせて専門用語の解説や表現を最適化します。',
      privacyNoticeBold: 'スコアへの影響はありません：',
      privacyNotice: 'ここでの回答は診断結果やスコア計算には一切影響しません。ブラウザ内で設問の表現を調整するためにのみ使用されます。',
      q1Title: '1. 年齢層と成人確認',
      q1Required: '18歳以上限定',
      ageConfirmText: '私は18歳以上の成人であることを確認します。',
      ageConfirmSub: '本診断は成人向けのテーマを含んでおり、18歳以上の方のみご利用いただけます。',
      ageConfirmError: '診断を開始するには18歳以上であることへの同意が必要です。',
      ageSelectLabel: '年齢層（任意）',
      q2Title: '2. BDSMに関する経験',
      q2Optional: '任意 — 設問の用語表現を最適化します',
      q2Subtitle: '最も当てはまるものを選択してください。初心者向けには用語解説が追加され、経験者には標準的なコミュニティ用語が使用されます。',
      q3Title: '3. 過去の診断経験',
      q3Optional: '任意',
      q4Title: '4. 診断を受ける理由',
      q4Optional: '任意',
      startButton: '診断を開始する',
      changeExpBtn: '変更',
      expModeLabel: '用語モード:'
    },
    experienceOptions: {
      new: {
        label: 'BDSMについては全くの初心者です。',
        tag: '初心者',
        description: '分かりやすい平易な言葉遣いと、親切な用語解説を表示します。'
      },
      exploring: {
        label: '興味があり、現在色々と調べています。',
        tag: '探求中',
        description: 'シチュエーションに応じた補足説明を交えて質問を表示します。'
      },
      some: {
        label: 'ある程度の経験や知識があります。',
        tag: '標準',
        description: 'バランスのとれた標準的な用語で設問を表示します。'
      },
      experienced: {
        label: '十分な経験と知識を持っています。',
        tag: '経験者',
        description: '馴染みのあるコミュニティ専門用語を用いた簡潔な設問を表示します。'
      },
      unspecified: {
        label: '回答しない。',
        tag: '標準',
        description: '標準的な表現を使用します。'
      }
    },
    ageGroups: {
      a18_24: '18〜24歳',
      a25_34: '25〜34歳',
      a35_44: '35〜44歳',
      a45_54: '45〜54歳',
      a55_plus: '55歳以上',
      preferNotToSay: '回答しない'
    },
    previousTesting: {
      firstTime: 'いいえ、BDSM診断は今回が初めてです。',
      takenOnce: 'はい、過去に1回受けたことがあります。',
      takenSeveral: 'はい、過去に複数回受けたことがあります。',
      preferNotToSay: '回答しない'
    },
    testReasons: {
      understandSelf: '自分自身の性向や欲求を深く理解したい。',
      exploreInterests: '自分の興味や境界線（リミット）を探求したい。',
      learnMore: 'BDSMの世界や概念についてもっと知りたい。',
      comparePartner: 'パートナーと結果を見比べて共有したい。',
      curious: '純粋な好奇心から。',
      preferNotToSay: '回答しない'
    },
    questionnaire: {
      questionLabel: '問',
      of: '/',
      previousBtn: '← 前へ',
      nextBtn: '次へ →',
      finishBtn: '診断結果を計算する →',
      retakeConfirm: '第1問からやり直しますか？現在の回答内容はリセットされます。'
    },
    common: {
      loading: '読み込み中...',
      error: 'エラーが発生しました。',
      backHome: 'トップページに戻る',
      freeBadge: '完全無料・匿名',
      recommended: 'おすすめ'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      quickTest: 'Test Rapide',
      comprehensiveTest: 'Test Complet',
      dimensions: 'Dimensions',
      compare: 'Comparer à Deux',
      about: 'À Propos'
    },
    header: {
      ageBadge: '18+',
      switchThemeLight: 'Passer au thème clair',
      switchThemeDark: 'Passer au thème sombre',
      selectLanguage: 'Langue',
      menu: 'Ouvrir le menu de navigation'
    },
    footer: {
      brandBio: 'Une évaluation d’intimité anonyme et rigoureuse pour adultes consentants (18+) explorant les rôles relationnels et les dynamiques de pouvoir.',
      privacyBadge: 'Confidentialité 100% Locale',
      colAssessments: 'Tests & Outils',
      colAbout: 'À Propos & Aide',
      colLegal: 'Légal & Confidentialité',
      homeOverview: 'Présentation du Test BDSM',
      quickTestName: 'Test Rapide (24 Questions)',
      comprehensiveTestName: 'Test Complet (64 Questions)',
      dimensionsName: 'Bibliothèque des 20 Dimensions',
      compareName: 'Synchronisation et Comparaison Partenaire',
      aboutUs: 'À Propos de Nous',
      contact: 'Contact & Retours',
      disclaimer: 'Avertissement Légal',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions d’Utilisation',
      ethicalPrinciples: 'Principes : Sain, Sûr et Consenti (SSC) & RACK',
      copyright: 'Tous les calculs sont effectués localement sur votre appareil.'
    },
    likert: {
      stronglyDisagree: 'Pas du tout d’accord',
      stronglyDisagreeHint: 'Pas pour moi / Répulsif',
      disagree: 'Pas d’accord',
      disagreeHint: 'Peu d’intérêt / Improbable',
      neutral: 'Neutre',
      neutralHint: 'Indifférent / Incertain',
      agree: 'D’accord',
      agreeHint: 'Intéressé / Apprécié',
      stronglyAgree: 'Tout à fait d’accord',
      stronglyAgreeHint: 'Désir essentiel / Passion'
    },
    onboarding: {
      badge: 'Configuration Initiale',
      title: 'Avant de Commencer',
      description: 'Veuillez lire les questions préalables ci-dessous. Les questions 1 à 4 sont facultatives, mais vous devez impérativement confirmer avoir au moins 18 ans. Votre niveau d’expérience nous permet d’adapter le vocabulaire.',
      privacyNoticeBold: 'Aucun impact sur le score :',
      privacyNotice: 'Aucune de ces réponses n’influence votre score, vos pourcentages ou vos résultats finaux. Elles servent uniquement à adapter la formulation locale.',
      q1Title: '1. Tranche d’Âge et Confirmation',
      q1Required: '18+ Obligatoire',
      ageConfirmText: 'Je confirme avoir au moins 18 ans révolus.',
      ageConfirmSub: 'Cette évaluation aborde des thématiques pour adultes et est strictement réservée aux personnes majeures.',
      ageConfirmError: 'Vous devez confirmer avoir au moins 18 ans pour commencer.',
      ageSelectLabel: 'Tranche d’Âge (Facultatif)',
      q2Title: '2. Expérience BDSM',
      q2Optional: 'Facultatif — Adapte la terminologie des questions',
      q2Subtitle: 'Sélectionnez la description qui vous correspond le mieux. Cela ajuste le vocabulaire et ajoute des explications claires.',
      q3Title: '3. Tests Précédents',
      q3Optional: 'Facultatif',
      q4Title: '4. Raison de votre démarche',
      q4Optional: 'Facultatif',
      startButton: 'Commencer l’Évaluation',
      changeExpBtn: 'Modifier',
      expModeLabel: 'Terminologie :'
    },
    experienceOptions: {
      new: {
        label: 'Je débute totalement dans le BDSM.',
        tag: 'Débutant',
        description: 'Nous fournirons un langage simple accompagné de définitions contextuelles utiles.'
      },
      exploring: {
        label: 'Je suis curieux(se) et j’explore actuellement.',
        tag: 'En exploration',
        description: 'Nous ajouterons des explications utiles le long des scénarios.'
      },
      some: {
        label: 'J’ai une certaine expérience.',
        tag: 'Intermédiaire',
        description: 'Terminologie équilibrée et standard pour toutes les questions.'
      },
      experienced: {
        label: 'J’ai une solide expérience.',
        tag: 'Expérimenté',
        description: 'Formulations concises utilisant le vocabulaire usuel de la communauté.'
      },
      unspecified: {
        label: 'Je préfère ne pas répondre.',
        tag: 'Standard',
        description: 'Terminologie standard sans adaptation particulière.'
      }
    },
    ageGroups: {
      a18_24: '18–24 ans',
      a25_34: '25–34 ans',
      a35_44: '35–44 ans',
      a45_54: '45–54 ans',
      a55_plus: '55 ans et plus',
      preferNotToSay: 'Préfère ne pas répondre'
    },
    previousTesting: {
      firstTime: 'Non, c’est mon tout premier test BDSM.',
      takenOnce: 'Oui, j’en ai déjà fait un par le passé.',
      takenSeveral: 'Oui, j’ai déjà fait plusieurs tests BDSM.',
      preferNotToSay: 'Préfère ne pas répondre.'
    },
    testReasons: {
      understandSelf: 'Je souhaite mieux me comprendre moi-même.',
      exploreInterests: 'Je souhaite explorer mes désirs et mes limites.',
      learnMore: 'Je souhaite en apprendre davantage sur le BDSM.',
      comparePartner: 'Je souhaite comparer mes résultats avec un(e) partenaire.',
      curious: 'Simple curiosité personnelle.',
      preferNotToSay: 'Préfère ne pas répondre.'
    },
    questionnaire: {
      questionLabel: 'Question',
      of: 'sur',
      previousBtn: '← Précédent',
      nextBtn: 'Suivant →',
      finishBtn: 'Calculer Mes Résultats →',
      retakeConfirm: 'Recommencer l’évaluation depuis la question 1 ? Vos réponses actuelles seront réinitialisées.'
    },
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue.',
      backHome: 'Retour à l’Accueil',
      freeBadge: '100% Gratuit & Confidentiel',
      recommended: 'Recommandé'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      quickTest: 'Schnelltest',
      comprehensiveTest: 'Ausführlicher Test',
      dimensions: 'Dimensionen',
      compare: 'Partner-Vergleich',
      about: 'Über uns'
    },
    header: {
      ageBadge: '18+',
      switchThemeLight: 'Zu hellem Design wechseln',
      switchThemeDark: 'Zu dunklem Design wechseln',
      selectLanguage: 'Sprache',
      menu: 'Navigationsmenü öffnen'
    },
    footer: {
      brandBio: 'Eine anonyme, forschungsbasierte Selbsteinschätzung für einwilligende Erwachsene (18+) zur Erkundung von Beziehungsrollen und Machtdynamiken.',
      privacyBadge: '100% Lokale Browser-Privatsphäre',
      colAssessments: 'Tests & Werkzeuge',
      colAbout: 'Über uns & Hilfe',
      colLegal: 'Rechtliches & Datenschutz',
      homeOverview: 'BDSM Test Übersicht',
      quickTestName: 'Schnelltest (24 Fragen)',
      comprehensiveTestName: 'Ausführlicher Test (64 Fragen)',
      dimensionsName: 'Bibliothek der 20 Dimensionen',
      compareName: 'Partner-Vergleich & Abgleich',
      aboutUs: 'Über uns',
      contact: 'Kontakt & Feedback',
      disclaimer: 'Haftungsausschluss',
      privacyPolicy: 'Datenschutzerklärung',
      termsOfService: 'Nutzungsbedingungen',
      ethicalPrinciples: 'Prinzipien: Safe, Sane, Consensual (SSC) & RACK',
      copyright: 'Alle Berechnungen finden ausschließlich lokal auf Ihrem Gerät statt.'
    },
    likert: {
      stronglyDisagree: 'Stimme überhaupt nicht zu',
      stronglyDisagreeHint: 'Nichts für mich / Unangenehm',
      disagree: 'Stimme nicht zu',
      disagreeHint: 'Uninteressiert / Eher unwahrscheinlich',
      neutral: 'Neutral',
      neutralHint: 'Gleichgültig / Unsicher',
      agree: 'Stimme zu',
      agreeHint: 'Interessiert / Gefällt mir',
      stronglyAgree: 'Stimme vollkommen zu',
      stronglyAgreeHint: 'Zentrales Verlangen / Leidenschaft'
    },
    onboarding: {
      badge: 'Vorbereitung',
      title: 'Bevor Sie beginnen',
      description: 'Bitte überprüfen Sie die folgenden kurzen Fragen. Fragen 1–4 sind freiwillig, aber die Bestätigung der Volljährigkeit (18+) ist zwingend erforderlich. Ihre Erfahrungsstufe hilft uns, Fachbegriffe verständlich zu halten.',
      privacyNoticeBold: 'Keinerlei Auswirkung auf das Testergebnis:',
      privacyNotice: 'Keine dieser Angaben beeinflusst Ihre Punktzahl oder Rollenauswertung. Sie dienen nur dazu, die Fragestellungen in Ihrem Browser passend zu formulieren.',
      q1Title: '1. Altersgruppe & Bestätigung',
      q1Required: '18+ Erforderlich',
      ageConfirmText: 'Ich bestätige, dass ich mindestens 18 Jahre alt bin.',
      ageConfirmSub: 'Dieser Fragebogen behandelt Inhalte für Erwachsene und richtet sich ausschließlich an Personen ab 18 Jahren.',
      ageConfirmError: 'Sie müssen bestätigen, dass Sie mindestens 18 Jahre alt sind, um fortzufahren.',
      ageSelectLabel: 'Altersgruppe (Freiwillig)',
      q2Title: '2. BDSM-Erfahrung',
      q2Optional: 'Freiwillig — Passt die Terminologie an',
      q2Subtitle: 'Wählen Sie die zutreffende Beschreibung. Dies passt Fachbegriffe an und blendet bei Bedarf Begriffserklärungen ein.',
      q3Title: '3. Bisherige Testerfahrung',
      q3Optional: 'Freiwillig',
      q4Title: '4. Grund für die Teilnahme',
      q4Optional: 'Freiwillig',
      startButton: 'Fragebogen starten',
      changeExpBtn: 'Ändern',
      expModeLabel: 'Begrifflichkeit:'
    },
    experienceOptions: {
      new: {
        label: 'Ich bin völlig neu im Bereich BDSM.',
        tag: 'Einsteiger',
        description: 'Wir verwenden verständliche Sprache und blenden hilfreiche Definitionen ein.'
      },
      exploring: {
        label: 'Ich bin neugierig und erkunde das Thema derzeit.',
        tag: 'Erkundend',
        description: 'Wir stellen hilfreiche Kontextbeschreibungen zu den Szenarien bereit.'
      },
      some: {
        label: 'Ich habe bereits etwas Erfahrung.',
        tag: 'Fortgeschritten',
        description: 'Ausgewogene Standard-Terminologie bei allen Fragen.'
      },
      experienced: {
        label: 'Ich habe beträchtliche Erfahrung.',
        tag: 'Erfahren',
        description: 'Prägnante Formulierungen mit gängiger Szene-Terminologie.'
      },
      unspecified: {
        label: 'Keine Angabe.',
        tag: 'Standard',
        description: 'Standard-Terminologie ohne spezifische Anpassung.'
      }
    },
    ageGroups: {
      a18_24: '18–24',
      a25_34: '25–34',
      a35_44: '35–44',
      a45_54: '45–54',
      a55_plus: '55+',
      preferNotToSay: 'Keine Angabe'
    },
    previousTesting: {
      firstTime: 'Nein, dies ist mein erster BDSM-Test.',
      takenOnce: 'Ja, ich habe schon einmal einen gemacht.',
      takenSeveral: 'Ja, ich habe bereits mehrere BDSM-Tests absolviert.',
      preferNotToSay: 'Keine Angabe.'
    },
    testReasons: {
      understandSelf: 'Ich möchte mich selbst und meine Wünsche besser verstehen.',
      exploreInterests: 'Ich möchte meine Interessen und Grenzen ausloten.',
      learnMore: 'Ich möchte mehr über BDSM erfahren.',
      comparePartner: 'Ich möchte meine Ergebnisse mit einem Partner abgleichen.',
      curious: 'Ich bin einfach neugierig.',
      preferNotToSay: 'Keine Angabe.'
    },
    questionnaire: {
      questionLabel: 'Frage',
      of: 'von',
      previousBtn: '← Zurück',
      nextBtn: 'Weiter →',
      finishBtn: 'Ergebnisse berechnen →',
      retakeConfirm: 'Möchten Sie den Test ab Frage 1 neu starten? Ihre bisherigen Antworten werden zurückgesetzt.'
    },
    common: {
      loading: 'Wird geladen...',
      error: 'Ein Fehler ist aufgetreten.',
      backHome: 'Zurück zur Startseite',
      freeBadge: '100% Kostenlos & Privat',
      recommended: 'Empfohlen'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      quickTest: 'Teste Rápido',
      comprehensiveTest: 'Teste Completo',
      dimensions: 'Dimensões',
      compare: 'Comparar Parceiro',
      about: 'Sobre'
    },
    header: {
      ageBadge: '18+',
      switchThemeLight: 'Alternar para tema claro',
      switchThemeDark: 'Alternar para tema escuro',
      selectLanguage: 'Idioma',
      menu: 'Abrir menu de navegação'
    },
    footer: {
      brandBio: 'Uma avaliação de intimidade anônima e fundamentada para adultos consentientes (18+) explorando papéis relacionais e dinâmicas de poder.',
      privacyBadge: 'Privacidade 100% no Navegador',
      colAssessments: 'Testes e Ferramentas',
      colAbout: 'Sobre & Suporte',
      colLegal: 'Legal & Privacidade',
      homeOverview: 'Visão Geral do Teste BDSM',
      quickTestName: 'Teste Rápido (24 Perguntas)',
      comprehensiveTestName: 'Teste Completo (64 Perguntas)',
      dimensionsName: 'Biblioteca de 20 Dimensões',
      compareName: 'Sincronização e Comparação de Parceiros',
      aboutUs: 'Sobre Nós',
      contact: 'Contato & Feedback',
      disclaimer: 'Aviso Legal',
      privacyPolicy: 'Política de Privacidade',
      termsOfService: 'Termos de Serviço',
      ethicalPrinciples: 'Princípios: Seguro, Sensato e Consensual (SSC) & RACK',
      copyright: 'Todos os cálculos ocorrem localmente no seu dispositivo.'
    },
    likert: {
      stronglyDisagree: 'Discordo totalmente',
      stronglyDisagreeHint: 'Não é para mim / Desagradável',
      disagree: 'Discordo',
      disagreeHint: 'Sem interesse / Pouco provável',
      neutral: 'Neutro',
      neutralHint: 'Indiferente / Incerto',
      agree: 'Concordo',
      agreeHint: 'Interessado / Agradável',
      stronglyAgree: 'Concordo totalmente',
      stronglyAgreeHint: 'Desejo central / Paixão'
    },
    onboarding: {
      badge: 'Configuração Inicial',
      title: 'Antes de Começar',
      description: 'Por favor, revise as perguntas preliminares abaixo. As perguntas 1 a 4 são opcionais, mas é obrigatório confirmar que você tem pelo menos 18 anos. Usamos seu nível de experiência para adaptar o vocabulário.',
      privacyNoticeBold: 'Zero impacto na pontuação:',
      privacyNotice: 'Nenhuma dessas respostas altera sua pontuação, categorias ou resultados. Elas são processadas exclusivamente no seu navegador para ajustar a linguagem.',
      q1Title: '1. Faixa Etária e Confirmação',
      q1Required: '18+ Obrigatório',
      ageConfirmText: 'Confirmo que tenho pelo menos 18 anos de idade.',
      ageConfirmSub: 'Esta avaliação aborda temas adultos e destina-se estritamente a maiores de 18 anos.',
      ageConfirmError: 'Você precisa confirmar que tem pelo menos 18 anos para continuar.',
      ageSelectLabel: 'Faixa Etária (Opcional)',
      q2Title: '2. Experiência com BDSM',
      q2Optional: 'Opcional — Adapta a terminologia das perguntas',
      q2Subtitle: 'Selecione a opção que melhor descreve você. Isso ajusta a linguagem e inclui notas explicativas úteis.',
      q3Title: '3. Experiência Anterior com Testes',
      q3Optional: 'Opcional',
      q4Title: '4. Motivo para fazer o Teste',
      q4Optional: 'Opcional',
      startButton: 'Iniciar Avaliação',
      changeExpBtn: 'Alterar',
      expModeLabel: 'Terminologia:'
    },
    experienceOptions: {
      new: {
        label: 'Sou completamente iniciante em BDSM.',
        tag: 'Iniciante',
        description: 'Usaremos linguagem acessível e definições contextuais úteis.'
      },
      exploring: {
        label: 'Tenho curiosidade e estou explorando atualmente.',
        tag: 'Explorando',
        description: 'Incluiremos explicações claras junto aos cenários.'
      },
      some: {
        label: 'Tenho alguma experiência.',
        tag: 'Intermediário',
        description: 'Terminologia padrão e equilibrada ao longo das perguntas.'
      },
      experienced: {
        label: 'Tenho bastante experiência.',
        tag: 'Experiente',
        description: 'Redação concisa com termos consolidados da comunidade.'
      },
      unspecified: {
        label: 'Prefiro não dizer.',
        tag: 'Padrão',
        description: 'Terminologia padrão sem adaptações específicas.'
      }
    },
    ageGroups: {
      a18_24: '18–24',
      a25_34: '25–34',
      a35_44: '35–44',
      a45_54: '45–54',
      a55_plus: '55+',
      preferNotToSay: 'Prefiro não dizer'
    },
    previousTesting: {
      firstTime: 'Não, este é meu primeiro teste BDSM.',
      takenOnce: 'Sim, já fiz um anteriormente.',
      takenSeveral: 'Sim, já fiz vários testes BDSM.',
      preferNotToSay: 'Prefiro não dizer.'
    },
    testReasons: {
      understandSelf: 'Quero me compreender melhor.',
      exploreInterests: 'Quero explorar meus interesses e limites.',
      learnMore: 'Quero aprender mais sobre BDSM.',
      comparePartner: 'Quero comparar meus resultados com um parceiro.',
      curious: 'Apenas curiosidade.',
      preferNotToSay: 'Prefiro não dizer.'
    },
    questionnaire: {
      questionLabel: 'Pergunta',
      of: 'de',
      previousBtn: '← Anterior',
      nextBtn: 'Próxima →',
      finishBtn: 'Calcular Meus Resultados →',
      retakeConfirm: 'Reiniciar a avaliação a partir da pergunta 1? Suas respostas atuais serão redefinidas.'
    },
    common: {
      loading: 'Carregando...',
      error: 'Ocorreu um erro.',
      backHome: 'Voltar ao Início',
      freeBadge: '100% Gratuito & Anônimo',
      recommended: 'Recomendado'
    }
  },
  ko: {
    nav: {
      home: '홈',
      quickTest: '빠른 테스트',
      comprehensiveTest: '정밀 종합 테스트',
      dimensions: '성향 유형 사전',
      compare: '파트너 비교',
      about: '소개'
    },
    header: {
      ageBadge: '18세 이상',
      switchThemeLight: '라이트 모드로 전환',
      switchThemeDark: '다크 모드로 전환',
      selectLanguage: '언어',
      menu: '내비게이션 메뉴 열기'
    },
    footer: {
      brandBio: '18세 이상 성인을 위한, 파트너십과 친밀감 및 권력 역학 관계를 탐구하는 100% 비공개 연구 기반 BDSM 성향 테스트입니다.',
      privacyBadge: '100% 브라우저 로컬 프라이버시',
      colAssessments: '테스트 & 분석 도구',
      colAbout: '소개 & 지원',
      colLegal: '법적 고지 & 개인정보',
      homeOverview: 'BDSM 테스트 개요',
      quickTestName: '빠른 테스트 (24문항)',
      comprehensiveTestName: '정밀 종합 테스트 (64문항)',
      dimensionsName: '20가지 성향 유형 사전',
      compareName: '파트너 성향 매칭 및 비교',
      aboutUs: '사이트 소개',
      contact: '문의 & 피드백',
      disclaimer: '면책 조항',
      privacyPolicy: '개인정보처리방침',
      termsOfService: '이용약관',
      ethicalPrinciples: '원칙: 안전, 이성, 상호동의 (SSC) 및 RACK',
      copyright: '모든 점수 계산은 귀하의 브라우저 로컬에서 안전하게 처리됩니다.'
    },
    likert: {
      stronglyDisagree: '전혀 동의하지 않음',
      stronglyDisagreeHint: '나에게 맞지 않음 / 거부감',
      disagree: '동의하지 않음',
      disagreeHint: '흥미 없음 / 가능성 낮음',
      neutral: '보통 / 중립',
      neutralHint: '무관심 / 잘 모르겠음',
      agree: '동의함',
      agreeHint: '흥미 있음 / 긍정적',
      stronglyAgree: '매우 동의함',
      stronglyAgreeHint: '핵심적인 갈망 / 열정'
    },
    onboarding: {
      badge: '사전 설정',
      title: '테스트 시작 전 확인',
      description: '아래의 사전 질문을 확인해 주세요. 1~4번 문항은 선택 사항이지만, 만 18세 이상 성인임은 반드시 확인해야 합니다. 선택하신 경험 수준에 따라 질문 용어와 해설이 맞춤형으로 제공됩니다.',
      privacyNoticeBold: '점수 계산에 영향 없음:',
      privacyNotice: '사전 질문의 답변은 점수나 성향 결과에 전혀 영향을 미치지 않으며, 오직 브라우저 내에서 맞춤형 문장을 제공하는 용도로만 사용됩니다.',
      q1Title: '1. 연령대 및 성인 인증',
      q1Required: '18세 이상 필수',
      ageConfirmText: '본인은 만 18세 이상의 성인임을 확인합니다.',
      ageConfirmSub: '본 테스트는 성인용 주제를 다루며 만 18세 이상 성인만을 대상으로 합니다.',
      ageConfirmError: '테스트를 진행하려면 만 18세 이상 성인임을 확인해야 합니다.',
      ageSelectLabel: '연령대 (선택 사항)',
      q2Title: '2. BDSM 경험 수준',
      q2Optional: '선택 — 질문 표현과 용어 해설을 조율합니다',
      q2Subtitle: '자신에게 가장 잘 맞는 설명을 선택하세요. 초심자에게는 쉬운 설명과 용어 정의가 제공됩니다.',
      q3Title: '3. 이전 테스트 경험',
      q3Optional: '선택 사항',
      q4Title: '4. 테스트 목적',
      q4Optional: '선택 사항',
      startButton: '테스트 시작하기',
      changeExpBtn: '변경',
      expModeLabel: '용어 모드:'
    },
    experienceOptions: {
      new: {
        label: 'BDSM에 대해 완전히 처음입니다.',
        tag: '초심자',
        description: '쉬운 문장과 함께 유용한 맥락적 용어 해설을 제공합니다.'
      },
      exploring: {
        label: '호기심이 있어 현재 탐색 중입니다.',
        tag: '탐색 중',
        description: '상황별 보충 설명을 함께 제공하여 이해를 돕습니다.'
      },
      some: {
        label: '어느 정도의 경험과 지식이 있습니다.',
        tag: '중급',
        description: '균형 잡힌 표준적인 용어로 질문을 진행합니다.'
      },
      experienced: {
        label: '풍부한 경험을 가지고 있습니다.',
        tag: '숙련자',
        description: '커뮤니티 전문 용어를 사용한 간결한 문장으로 질문을 진행합니다.'
      },
      unspecified: {
        label: '답변을 원하지 않음.',
        tag: '표준',
        description: '별도의 조정 없이 표준적인 질문 용어를 사용합니다.'
      }
    },
    ageGroups: {
      a18_24: '18–24세',
      a25_34: '25–34세',
      a35_44: '35–44세',
      a45_54: '45–54세',
      a55_plus: '55세 이상',
      preferNotToSay: '답변하지 않음'
    },
    previousTesting: {
      firstTime: '아니오, BDSM 테스트는 이번이 처음입니다.',
      takenOnce: '예, 이전에 한 번 받아본 적이 있습니다.',
      takenSeveral: '예, 여러 번 테스트를 받아보았습니다.',
      preferNotToSay: '답변하지 않음'
    },
    testReasons: {
      understandSelf: '나 자신의 성향과 욕구를 더 깊이 이해하고 싶습니다.',
      exploreInterests: '나의 관심사와 바운더리(한계선)를 탐색하고 싶습니다.',
      learnMore: 'BDSM의 개념과 분야에 대해 더 배우고 싶습니다.',
      comparePartner: '파트너와 결과를 비교하고 소통하고 싶습니다.',
      curious: '단순한 호기심 때문입니다.',
      preferNotToSay: '답변하지 않음'
    },
    questionnaire: {
      questionLabel: '문항',
      of: '/',
      previousBtn: '← 이전',
      nextBtn: '다음 →',
      finishBtn: '결과 계산하기 →',
      retakeConfirm: '1번 문항부터 다시 시작하시겠습니까? 현재 입력된 답변은 초기화됩니다.'
    },
    common: {
      loading: '불러오는 중...',
      error: '오류가 발생했습니다.',
      backHome: '홈으로 돌아가기',
      freeBadge: '100% 무료 & 익명',
      recommended: '추천'
    }
  },
  it: {
    nav: {
      home: 'Home',
      quickTest: 'Test Rapido',
      comprehensiveTest: 'Test Completo',
      dimensions: 'Dimensioni',
      compare: 'Confronta Coppia',
      about: 'Chi Siamo'
    },
    header: {
      ageBadge: '18+',
      switchThemeLight: 'Passa al tema chiaro',
      switchThemeDark: 'Passa al tema scuro',
      selectLanguage: 'Lingua',
      menu: 'Apri menu di navigazione'
    },
    footer: {
      brandBio: 'Una valutazione dell’intimità anonima e fondata per adulti consenzienti (18+) che esplorano ruoli relazionali e dinamiche di potere.',
      privacyBadge: 'Privacy 100% nel Browser',
      colAssessments: 'Test & Strumenti',
      colAbout: 'Informazioni & Supporto',
      colLegal: 'Legale & Privacy',
      homeOverview: 'Panoramica del Test BDSM',
      quickTestName: 'Test Rapido (24 Domande)',
      comprehensiveTestName: 'Test Completo (64 Domande)',
      dimensionsName: 'Libreria delle 20 Dimensioni',
      compareName: 'Sincronizzazione e Confronto Partner',
      aboutUs: 'Chi Siamo',
      contact: 'Contatti & Feedback',
      disclaimer: 'Disclaimer del Test',
      privacyPolicy: 'Informativa sulla Privacy',
      termsOfService: 'Termini di Servizio',
      ethicalPrinciples: 'Principi: Sicuro, Sano e Consensuale (SSC) & RACK',
      copyright: 'Tutti i calcoli avvengono localmente sul tuo dispositivo.'
    },
    likert: {
      stronglyDisagree: 'Fortemente in disaccordo',
      stronglyDisagreeHint: 'Non fa per me / Sgradevole',
      disagree: 'In disaccordo',
      disagreeHint: 'Nessun interesse / Improbabile',
      neutral: 'Neutrale',
      neutralHint: 'Indifferente / Incerto',
      agree: 'D’accordo',
      agreeHint: 'Interessato / Gradito',
      stronglyAgree: 'Pienamente d’accordo',
      stronglyAgreeHint: 'Desiderio fondamentale / Passione'
    },
    onboarding: {
      badge: 'Configurazione Iniziale',
      title: 'Prima di Iniziare',
      description: 'Ti preghiamo di verificare le domande preliminari qui sotto. Le domande 1–4 sono facoltative, ma è obbligatorio confermare di avere almeno 18 anni. Utilizziamo il tuo livello di esperienza per adattare la terminologia.',
      privacyNoticeBold: 'Nessun impatto sul punteggio:',
      privacyNotice: 'Nessuna di queste risposte influisce sul tuo punteggio, sulle percentuali o sui risultati. Vengono usate esclusivamente nel tuo browser per adattare il linguaggio.',
      q1Title: '1. Fascia d’Età e Conferma',
      q1Required: '18+ Obbligatorio',
      ageConfirmText: 'Confermo di avere almeno 18 anni compiuti.',
      ageConfirmSub: 'Questa valutazione esplora tematiche per adulti ed è rigorosamente destinata a persone maggiorenni.',
      ageConfirmError: 'Devi confermare di avere almeno 18 anni per procedere.',
      ageSelectLabel: 'Fascia d’Età (Facoltativo)',
      q2Title: '2. Esperienza con il BDSM',
      q2Optional: 'Facoltativo — Adatta la terminologia delle domande',
      q2Subtitle: 'Seleziona la descrizione più adatta a te. Questo adatterà il linguaggio e aggiungerà note esplicative utili.',
      q3Title: '3. Esperienza Precedente con Test',
      q3Optional: 'Facoltativo',
      q4Title: '4. Motivo del Test',
      q4Optional: 'Facoltativo',
      startButton: 'Inizia Valutazione',
      changeExpBtn: 'Modifica',
      expModeLabel: 'Terminologia:'
    },
    experienceOptions: {
      new: {
        label: 'Sono completamente principiante nel BDSM.',
        tag: 'Principiante',
        description: 'Forniremo un linguaggio semplice accompagnato da spiegazioni contestuali.'
      },
      exploring: {
        label: 'Sono curioso/a e sto attualmente esplorando.',
        tag: 'In esplorazione',
        description: 'Includeremo spiegazioni utili accanto agli scenari proposti.'
      },
      some: {
        label: 'Ho un po’ di esperienza.',
        tag: 'Intermedio',
        description: 'Terminologia standard ed equilibrata in tutte le domande.'
      },
      experienced: {
        label: 'Ho una notevole esperienza.',
        tag: 'Esperto',
        description: 'Formulazioni concise con la consueta terminologia di settore.'
      },
      unspecified: {
        label: 'Preferisco non rispondere.',
        tag: 'Standard',
        description: 'Terminologia standard senza adattamenti particolari.'
      }
    },
    ageGroups: {
      a18_24: '18–24',
      a25_34: '25–34',
      a35_44: '35–44',
      a45_54: '45–54',
      a55_plus: '55+',
      preferNotToSay: 'Preferisco non rispondere'
    },
    previousTesting: {
      firstTime: 'No, questo è il mio primo test BDSM.',
      takenOnce: 'Sì, ne ho già fatto uno in passato.',
      takenSeveral: 'Sì, ho fatto diversi test BDSM.',
      preferNotToSay: 'Preferisco non rispondere.'
    },
    testReasons: {
      understandSelf: 'Voglio comprendere meglio me stesso/a.',
      exploreInterests: 'Voglio esplorare i miei desideri e i miei limiti.',
      learnMore: 'Voglio saperne di più sul BDSM.',
      comparePartner: 'Voglio confrontare i miei risultati con il/la partner.',
      curious: 'Semplice curiosità.',
      preferNotToSay: 'Preferisco non rispondere.'
    },
    questionnaire: {
      questionLabel: 'Domanda',
      of: 'di',
      previousBtn: '← Precedente',
      nextBtn: 'Successiva →',
      finishBtn: 'Calcola i Miei Risultati →',
      retakeConfirm: 'Vuoi ricominciare la valutazione dalla domanda 1? Le risposte correnti verranno azzerate.'
    },
    common: {
      loading: 'Caricamento...',
      error: 'Si è verificato un errore.',
      backHome: 'Torna alla Home',
      freeBadge: '100% Gratuito e Anonimo',
      recommended: 'Consigliato'
    }
  }
};

export function getTranslations(lang: SupportedLanguage): UIDictionary {
  return UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
}

