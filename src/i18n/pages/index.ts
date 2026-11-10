import type { SupportedLanguage } from '../languages';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HomePageContent {
  meta: {
    title: string;
    description: string;
    primaryKeyword: string;
  };
  hero: {
    eyebrow: string;
    privacyNotice: string;
    h1: string;
    subtitle: string;
    quickBtn: string;
    quickMeta: string;
    compBtn: string;
    compMeta: string;
    trust1: string;
    trust2: string;
    trust3: string;
  };
  dualTest: {
    eyebrow: string;
    h2: string;
    subtitle: string;
    quickBadge: string;
    quickTime: string;
    quickTitle: string;
    quickDesc: string;
    quickFeature1: string;
    quickFeature2: string;
    quickFeature3: string;
    quickFeature4: string;
    quickStartBtn: string;
    compBadge: string;
    compRecBadge: string;
    compTime: string;
    compTitle: string;
    compDesc: string;
    compFeature1: string;
    compFeature2: string;
    compFeature3: string;
    compFeature4: string;
    compStartBtn: string;
  };
  benefits: {
    eyebrow: string;
    h2: string;
    subtitle: string;
    b1Title: string;
    b1Desc: string;
    b2Title: string;
    b2Desc: string;
    b3Title: string;
    b3Desc: string;
  };
  dimensionsPreview: {
    eyebrow: string;
    h2: string;
    subtitle: string;
    viewAllLink: string;
  };
  faq: {
    eyebrow: string;
    h2: string;
    subtitle: string;
    items: FAQItem[];
  };
  principles: {
    badge: string;
    h2: string;
    desc: string;
    sscTitle: string;
    sscDesc: string;
    rackTitle: string;
    rackDesc: string;
    safewordsTitle: string;
    safewordsDesc: string;
    aftercareTitle: string;
    aftercareDesc: string;
  };
  bottomCta: {
    h2: string;
    subtitle: string;
    quickBtn: string;
    compBtn: string;
  };
}

export const HOME_PAGE_TRANSLATIONS: Record<SupportedLanguage, HomePageContent> = {
  en: {
    meta: {
      title: 'BDSM Test — Free BDSM Test Online & Dynamics Assessment',
      description: 'Take the free BDSM test online to discover your kink BDSM test results, explore 20 nuanced BDSM test categories, and understand the meaning of your intimate dynamics with 100% client-side privacy.',
      primaryKeyword: 'BDSM Test'
    },
    hero: {
      eyebrow: 'Free BDSM Test Online',
      privacyNotice: '100% Client-Side Privacy • 18+',
      h1: 'BDSM Test: Free, Anonymous Online Dynamics Assessment',
      subtitle: 'Discover your relationship roles, power balance affinities, and personal boundaries with our comprehensive kink BDSM test. Evaluate 20 distinct categories with reliable, non-arbitrary scoring—completely free, private, and with zero registration.',
      quickBtn: 'Take Quick BDSM Test',
      quickMeta: '24 Qs • ~3 min',
      compBtn: 'Comprehensive BDSM Test',
      compMeta: '64 Qs • ~10 min',
      trust1: 'No Server Storage or Tracking',
      trust2: 'Free BDSM Test — No Sign-Up',
      trust3: 'Instant Results & Partner Sync'
    },
    dualTest: {
      eyebrow: 'Choose Your Depth',
      h2: 'Two Formats Designed for Your Schedule',
      subtitle: 'Whether you want a rapid overview of your core power dynamics or an exhaustive breakdown of subtle kink archetypes, both tests are free and private.',
      quickBadge: 'Quick Assessment',
      quickTime: '24 Questions • ~3 min',
      quickTitle: 'Quick BDSM Test: Core Orientation',
      quickDesc: 'Best for those wanting a fast snapshot of their baseline dominant, submissive, switch, or sensory preferences without a lengthy time commitment.',
      quickFeature1: 'Evaluates core power-exchange spectrum',
      quickFeature2: 'Intuitive 5-point Likert response scale',
      quickFeature3: 'Immediate BDSM test results breakdown',
      quickFeature4: 'Fully shareable private URL token',
      quickStartBtn: 'Start Quick BDSM Test (Free)',
      compBadge: 'Comprehensive Assessment',
      compRecBadge: 'Recommended',
      compTime: '64 Questions • ~10 min',
      compTitle: 'Comprehensive BDSM Test: Deep Analysis',
      compDesc: 'The ultimate in-depth exploration covering all 20 BDSM test categories, subtle psychological desires, protocol structures, and sensation boundaries.',
      compFeature1: 'Exhaustive 64-question assessment',
      compFeature2: 'Granular ratings across all 20 dimensions',
      compFeature3: 'Personalized communication and safety tips',
      compFeature4: 'Side-by-side partner compatibility sync',
      compStartBtn: 'Start Comprehensive BDSM Test'
    },
    benefits: {
      eyebrow: 'Engineered for Integrity',
      h2: 'Why Take Our Online BDSM Test?',
      subtitle: 'Built with modern web standards, ethical design, and complete transparency.',
      b1Title: '100% Client-Side Privacy',
      b1Desc: 'Unlike other quizzes, your questionnaire answers never leave your browser. All calculations run locally on your device for absolute confidentiality.',
      b2Title: 'Multidimensional Scoring',
      b2Desc: 'Calculated using non-arbitrary mathematical weightings and cross-correlations, accurately modeling complex dynamics like versatile Switches and Devotees.',
      b3Title: 'Partner Compatibility Sync',
      b3Desc: 'Compare your BDSM test results with a partner side-by-side using private URL parameters without exchanging passwords or saving data to external servers.'
    },
    dimensionsPreview: {
      eyebrow: 'Taxonomy & Dimensions',
      h2: 'BDSM Test Categories & Dimensions',
      subtitle: 'Explore how our assessment evaluates 20 nuanced archetypes across the BDSM spectrum.',
      viewAllLink: 'View All 20 BDSM Categories'
    },
    faq: {
      eyebrow: 'Common Inquiries',
      h2: 'Frequently Asked Questions About the BDSM Test',
      subtitle: 'Original, clear answers regarding BDSM test meaning, results, privacy, and assessment categories.',
      items: [
        {
          question: 'What is a BDSM test?',
          answer: 'A BDSM test is an exploratory self-assessment tool designed for consenting adults to evaluate their personal interests, boundaries, and inclinations across the spectrum of BDSM (Bondage & Discipline, Dominance & Submission, Sadism & Masochism). By answering standardized scenario-based questions, individuals can identify specific relationship roles and communicate their intimate preferences more clearly with partners.'
        },
        {
          question: 'What is the BDSM test and how did it originate?',
          answer: 'The BDSM test refers to the popular genre of online kink questionnaires that emerged in the early 2000s to help people discover where they fit within alternative relationship dynamics. Our modern BDSM test enhances this legacy by offering client-side privacy, multi-dimensional weighted scoring, and 20 distinct categories that go far beyond primitive top/bottom dichotomies.'
        },
        {
          question: 'What is BDSM test meaning and how should results be interpreted?',
          answer: 'The meaning of BDSM test results lies in personal reflection and dialogue rather than rigid labels. Your scores reflect self-reported comfort levels and curiosities on a 0% to 100% scale at this specific moment. A high score represents an affinity to explore, not a mandate or an obligation, while a low score highlights clear boundaries.'
        },
        {
          question: 'What are the primary BDSM test categories evaluated?',
          answer: 'Our assessment measures 20 nuanced categories organized into four realms: Power Exchange (Dominant, Submissive, Switch, Master/Mistress, Slave, Vanilla), Physical & Sensation (Sadist, Masochist, Rigger, Rope Bunny, Sensory Explorer), Psychological & Verbal (Degrader, Degradee, Praise Giver, Praise Receiver), and Exploration (Primal Hunter, Primal Prey, Caregiver, Pet/Ageplay, Voyeur/Exhibitionist).'
        },
        {
          question: 'Is this BDSM test free and completely anonymous?',
          answer: 'Yes, our BDSM test is 100% free with no paywalls, hidden fees, or email requirements. More importantly, all scoring calculations take place entirely within your local browser memory. Your answers and intimate preferences are never sent to or stored on our servers, ensuring total privacy.'
        },
        {
          question: 'How do partners compare their BDSM test results?',
          answer: 'After completing the test, you receive an encoded, tamper-proof link that you can share with a partner. Using our Partner Sync feature, you can view your scorecards side-by-side to highlight complementary synergies (such as Sadist and Masochist or Praise Giver and Praise Receiver) and identify areas requiring proactive boundary negotiation.'
        }
      ]
    },
    principles: {
      badge: 'Ethical Foundations',
      h2: 'Consent and Communication Are Paramount',
      desc: 'A BDSM test is an aid for mutual dialogue, never an obligation or permission slip. Responsible kink requires ongoing, voluntary consent, active safewords, and dedicated aftercare.',
      sscTitle: 'SSC Model',
      sscDesc: 'Safe, Sane, and Consensual principles for baseline interactions.',
      rackTitle: 'RACK Model',
      rackDesc: 'Risk-Aware Consensual Kink recognizing personal responsibility.',
      safewordsTitle: 'Safewords',
      safewordsDesc: 'Clear, unambiguous verbal cues to modify or immediately halt scenes.',
      aftercareTitle: 'Aftercare',
      aftercareDesc: 'Post-scene emotional grounding, physical comfort, and hydration.'
    },
    bottomCta: {
      h2: 'Ready to Take the Free BDSM Test Online?',
      subtitle: 'Start your anonymous assessment in seconds. Choose between the 3-minute Quick Test or the 10-minute Comprehensive Assessment.',
      quickBtn: 'Start Quick BDSM Test (3 min)',
      compBtn: 'Start Comprehensive Assessment'
    }
  },

  es: {
    meta: {
      title: 'Test BDSM — Test BDSM Gratis Online y Evaluación de Dinámicas',
      description: 'Haz el test BDSM gratis online para descubrir tus resultados, explorar 20 categorías de roles íntimos y comprender el significado de tus preferencias con 100% privacidad en el navegador.',
      primaryKeyword: 'Test BDSM'
    },
    hero: {
      eyebrow: 'Test BDSM Gratis Online',
      privacyNotice: 'Privacidad 100% en el Navegador • 18+',
      h1: 'Test BDSM: Evaluación Anónima y Gratuita de Dinámicas Íntimas',
      subtitle: 'Descubre tus roles relacionales, preferencias de poder y límites personales con nuestro test BDSM riguroso. Evalúa 20 categorías diferenciadas con un sistema de puntuación matemático y objetivo, sin registro y de forma totalmente privada.',
      quickBtn: 'Hacer Test BDSM Rápido',
      quickMeta: '24 Preguntas • ~3 min',
      compBtn: 'Test BDSM Completo',
      compMeta: '64 Preguntas • ~10 min',
      trust1: 'Sin Almacenamiento en Servidor ni Rastreo',
      trust2: 'Test BDSM Gratuito — Sin Registro',
      trust3: 'Resultados Inmediatos y Comparativa de Pareja'
    },
    dualTest: {
      eyebrow: 'Elige tu Nivel de Profundidad',
      h2: 'Dos Formatos Adaptados a tu Tiempo',
      subtitle: 'Tanto si buscas un vistazo rápido a tus inclinaciones principales como un análisis exhaustivo de los 20 arquetipos, ambos tests son gratuitos y anónimos.',
      quickBadge: 'Evaluación Rápida',
      quickTime: '24 Preguntas • ~3 min',
      quickTitle: 'Test BDSM Rápido: Orientación Básica',
      quickDesc: 'Ideal para quienes desean una visión concisa de su tendencia dominante, sumisa, switch o sensorial sin invertir demasiado tiempo.',
      quickFeature1: 'Evalúa el espectro esencial de intercambio de poder',
      quickFeature2: 'Escala Likert intuitiva de 5 niveles',
      quickFeature3: 'Desglose inmediato de tus resultados del test BDSM',
      quickFeature4: 'Enlace privado y seguro para compartir',
      quickStartBtn: 'Comenzar Test BDSM Rápido (Gratis)',
      compBadge: 'Evaluación Exhaustiva',
      compRecBadge: 'Recomendado',
      compTime: '64 Preguntas • ~10 min',
      compTitle: 'Test BDSM Completo: Análisis en Profundidad',
      compDesc: 'La exploración más completa que abarca las 20 categorías del test BDSM, deseos psicológicos, estructuras protocolares y umbrales sensoriales.',
      compFeature1: 'Evaluación exhaustiva de 64 preguntas',
      compFeature2: 'Puntuaciones detalladas en las 20 dimensiones',
      compFeature3: 'Consejos de comunicación y límites personalizados',
      compFeature4: 'Sincronización y comparativa con tu pareja en paralelo',
      compStartBtn: 'Comenzar Test BDSM Completo'
    },
    benefits: {
      eyebrow: 'Diseñado con Integridad',
      h2: '¿Por Qué Hacer Nuestro Test BDSM Online?',
      subtitle: 'Desarrollado con estándares web modernos, enfoque ético y total transparencia técnica.',
      b1Title: 'Privacidad 100% en el Navegador',
      b1Desc: 'A diferencia de otros cuestionarios, tus respuestas jamás salen de tu dispositivo. Todos los cálculos se efectúan en tu navegador con total confidencialidad.',
      b2Title: 'Puntuación Multidimensional',
      b2Desc: 'Calculada mediante ponderaciones matemáticas y correlaciones cruzadas, reflejando fielmente roles polivalentes como switches o devotos.',
      b3Title: 'Comparador de Compatibilidad',
      b3Desc: 'Compara tus resultados del test BDSM con tu pareja lado a lado mediante parámetros encriptados en la URL, sin compartir contraseñas ni almacenar datos externos.'
    },
    dimensionsPreview: {
      eyebrow: 'Taxonomía y Dimensiones',
      h2: 'Categorías y Dimensiones del Test BDSM',
      subtitle: 'Descubre cómo nuestro cuestionario evalúa 20 arquetipos a lo largo del espectro BDSM.',
      viewAllLink: 'Ver las 20 Categorías BDSM'
    },
    faq: {
      eyebrow: 'Preguntas Frecuentes',
      h2: 'Preguntas Frecuentes sobre el Test BDSM',
      subtitle: 'Respuestas originales y claras sobre el significado del test BDSM, los resultados, la privacidad y las categorías.',
      items: [
        {
          question: '¿Qué es un test BDSM?',
          answer: 'Un test BDSM es una herramienta de autoevaluación dirigida a adultos con consentimiento para explorar sus intereses, límites e inclinaciones dentro del espectro BDSM (Bondage y Disciplina, Dominación y Sumisión, Sadismo y Masoquismo). Al responder preguntas de situaciones prácticas, las personas pueden identificar roles específicos y comunicar sus deseos íntimos con mayor claridad a su pareja.'
        },
        {
          question: '¿Qué es el test BDSM y cuál es su origen?',
          answer: 'El test BDSM hace referencia a los cuestionarios online que surgieron a principios de los años 2000 para orientar a las personas sobre sus dinámicas de pareja no convencionales. Nuestro test moderno perfecciona este formato aportando privacidad total en el cliente, ponderación multidimensional y 20 categorías que superan la simple división de arriba/abajo.'
        },
        {
          question: '¿Qué significado tienen los resultados del test BDSM?',
          answer: 'El significado de los resultados del test BDSM radica en la autorreflexión y el diálogo, no en etiquetas inamovibles. Tu porcentaje (de 0% a 100%) refleja tu nivel de interés y comodidad en este momento. Una puntuación alta expresa curiosidad o afinidad por explorar, mientras que una puntuación baja señala un límite claro.'
        },
        {
          question: '¿Cuáles son las categorías principales evaluadas en el test BDSM?',
          answer: 'Evaluamos 20 dimensiones agrupadas en cuatro áreas: Intercambio de Poder (Dominante, Sumiso, Switch, Amo/Ama, Esclavo, Vainilla), Físico y Sensaciones (Sádico, Masoquista, Rigger, Rope Bunny, Explorador Sensorial), Psicológico y Verbal (Degradador, Degradado, Praise Giver, Praise Receiver) y Exploración (Cazador Primal, Presa Primal, Cuidador, Petplay, Voyeur/Exhibicionista).'
        },
        {
          question: '¿Es este test BDSM gratuito y verdaderamente anónimo?',
          answer: 'Sí, nuestro test BDSM es 100% gratuito, sin pagos ocultos ni petición de correos electrónicos. Además, el cálculo de las puntuaciones ocurre íntegramente en la memoria de tu navegador, garantizando confidencialidad absoluta sin enviar datos a nuestros servidores.'
        },
        {
          question: '¿Cómo pueden las parejas comparar sus resultados del test BDSM?',
          answer: 'Al finalizar la prueba, obtendrás un enlace cifrado que puedes compartir con tu pareja. Mediante nuestra función de Sincronización, podréis ver vuestros perfiles en paralelo para destacar complementariedades (como Sádico y Masoquista) y dialogar sobre los límites que requieren negociación previa.'
        }
      ]
    },
    principles: {
      badge: 'Bases Éticas',
      h2: 'El Consentimiento y la Comunicación son Fundamentales',
      desc: 'Un test BDSM es una ayuda para el diálogo mutuo, nunca una obligación ni una autorización implícita. Las relaciones BDSM sanas requieren consentimiento continuado, palabras clave activas y un aftercare afectuoso.',
      sscTitle: 'Modelo SSC',
      sscDesc: 'Seguro, Sano y Consensuado como marco de referencia básico.',
      rackTitle: 'Modelo RACK',
      rackDesc: 'Riesgo Asumido y Consensuado, promoviendo la responsabilidad personal.',
      safewordsTitle: 'Palabras Clave (Safewords)',
      safewordsDesc: 'Señales verbales inequívocas para moderar o detener la sesión al instante.',
      aftercareTitle: 'Aftercare (Cuidados Posteriores)',
      aftercareDesc: 'Acompañamiento afectivo, contención física e hidratación tras la sesión.'
    },
    bottomCta: {
      h2: '¿Listo/a para Hacer el Test BDSM Gratis Online?',
      subtitle: 'Inicia tu evaluación anónima en segundos. Elige entre el Test Rápido de 3 minutos o el Test Completo de 10 minutos.',
      quickBtn: 'Hacer Test Rápido (3 min)',
      compBtn: 'Hacer Test Completo'
    }
  },

  ja: {
    meta: {
      title: 'BDSM診断 — 無料オンラインBDSMテスト＆タイプ分析',
      description: '完全無料・匿名のBDSM診断テスト。20種類の詳細なカテゴリーからあなたの嗜好性、主従関係の志向、パートナーとの相性を100%端末内プライバシーで安全に測定します。',
      primaryKeyword: 'BDSM診断'
    },
    hero: {
      eyebrow: '無料オンラインBDSM診断',
      privacyNotice: '100%端末内処理・完全匿名 • 18禁',
      h1: 'BDSM診断：無料・匿名のオンライン嗜好性テスト',
      subtitle: '20種類の詳細なカテゴリーを通じて、あなたの主従・感覚・心理的な役割や境界線（リミット）を客観的に測定します。サーバーへの回答送信や会員登録は一切不要。お手元のブラウザ内で安全・確実に診断します。',
      quickBtn: 'クイックBDSM診断を受ける',
      quickMeta: '24問 • 約3分',
      compBtn: '総合BDSM診断を受ける',
      compMeta: '64問 • 約10分',
      trust1: 'サーバー保存・追跡なしの完全ローカル処理',
      trust2: '登録・メルマガ不要の完全無料テスト',
      trust3: '即時スコア算出＆パートナー相性比較'
    },
    dualTest: {
      eyebrow: '選べる2つの診断スタイル',
      h2: 'あなたの時間や目的に合わせた2つのテスト',
      subtitle: '大まかな主従・攻め受けの傾向を手早く知りたい方も、20種類の深い嗜好性を網羅的に探求したい方も、どちらも完全無料でご利用いただけます。',
      quickBadge: 'クイック診断',
      quickTime: '24問 • 約3分',
      quickTitle: 'クイックBDSM診断：基本志向チェック',
      quickDesc: '忙しい方や初めて診断を受ける方に最適。ドミナント、サブミッシブ、スイッチ、感覚派のベースラインを数分で判定します。',
      quickFeature1: '主従関係・攻め受けの中核を測定',
      quickFeature2: '直感的な5段階の回答スケール',
      quickFeature3: '診断後すぐに結果グラフと詳細を表示',
      quickFeature4: '安全な共有用URLでパートナーとシェア可能',
      quickStartBtn: 'クイック診断を開始する（無料）',
      compBadge: '総合診断',
      compRecBadge: 'おすすめ',
      compTime: '64問 • 約10分',
      compTitle: '総合BDSM診断：精密タイプ分析',
      compDesc: '20種類すべてのBDSMカテゴリー、心理的欲求、プロトコル志向、身体感覚の許容度を徹底的に判定する決定版テストです。',
      compFeature1: '全64問の多面的・精密なアセスメント',
      compFeature2: '全20タイプにおける詳細なパーセンテージ算出',
      compFeature3: 'タイプ別のコミュニケーション法と安全アドバイス',
      compFeature4: 'パートナーとの相性スコア並列比較ツール対応',
      compStartBtn: '総合診断を開始する'
    },
    benefits: {
      eyebrow: '徹底した信頼性と設計',
      h2: '当サイトのBDSM診断が選ばれる理由',
      subtitle: '最新のWeb標準技術と倫理的なプライバシー保護設計に基づき開発されています。',
      b1Title: '100%端末内プライバシー処理',
      b1Desc: '回答内容が外部サーバーに送信されることは一切ありません。すべての計算はお手元のスマートフォンやPCのブラウザ内で行われます。',
      b2Title: '多次元・重み付けスコア計算',
      b2Desc: '単純な足し算ではなく、質問ごとに精密な重み付けを行い、スイッチや複雑な複合タイプも正確にモデル化します。',
      b3Title: 'パートナー相性マッチング機能',
      b3Desc: 'お互いの結果URLを照合するだけで、サーバーに個人データを保存することなく、2人の補完関係や安全な境界線を画面上で比較できます。'
    },
    dimensionsPreview: {
      eyebrow: '体系と全タイプ一覧',
      h2: 'BDSM診断で測定される20のタイプ',
      subtitle: '主従、身体刺激、言葉攻め、ロールプレイなど多岐にわたる属性を網羅しています。',
      viewAllLink: '全20タイプの解説一覧を見る'
    },
    faq: {
      eyebrow: 'よくある質問',
      h2: 'BDSM診断（テスト）に関するQ&A',
      subtitle: 'BDSMテストの意味、スコアの読み方、プライバシー、診断カテゴリーに関する確かな解説です。',
      items: [
        {
          question: 'BDSM診断（BDSMテスト）とは何ですか？',
          answer: 'BDSM診断とは、成人（18歳以上）がお互いの合意のもとで、主従関係（D/s）、身体拘束や感覚刺激、心理的な言葉攻めなどの嗜好性や境界線（リミット）を客観的に探求するための自己分析ツールです。具体的なシチュエーションへの質問に答えることで、自分のタイプや求める関係性を言語化できます。'
        },
        {
          question: 'BDSMテストの起源と当サイトの特徴は何ですか？',
          answer: 'BDSMテストは2000年代初頭の海外ネットコミュニティで広まり、自身の性向を把握する指標として親しまれてきました。当サイトの診断は、回答を一切サーバーに送信しない完全端末内プライバシー処理と、20種類の精密なカテゴリー評価により、従来の一面的なテストを大幅に進化させています。'
        },
        {
          question: '診断結果のスコアはどのように解釈すべきですか？',
          answer: '結果のパーセンテージ（0%〜100%）は、固定的なレッテルではなく「現在のあなたがどれだけそのプレイや役割に前向きか」という関心度を表しています。高いスコアは探求したい興味を示し、低いスコアは無理にする必要のない明確なリミット（限界）を示しています。'
        },
        {
          question: 'どのようなカテゴリーが診断されますか？',
          answer: '当診断では20のタイプを測定します。ドミナント・サブミッシブ・スイッチ・スレイブ・マスター等の「主従・権力関係」、サディスト・マゾヒスト・リガー・ロープバニー等の「感覚・身体刺激」、デグレーダー・プレイズギバー等の「言葉・心理的役割」、プライマル・ペットプレイ等の「本能・ロールプレイ」に分類されています。'
        },
        {
          question: '診断は本当に無料で、匿名性は守られますか？',
          answer: 'はい、完全無料であり、氏名やメールアドレスの入力は一切不要です。最も重要な点として、診断結果の計算はすべてあなたのお使いのブラウザ内で行われるため、親密な嗜好データがネット上に漏洩することはありません。'
        },
        {
          question: 'パートナーと結果を比較するにはどうすればよいですか？',
          answer: '診断完了後に発行される専用の結果コードまたはURLをパートナーと共有してください。「パートナー比較」機能を利用すると、2人の診断結果を画面上で並べ、相性の良いポイント（例：サディストとマゾヒスト）や事前のすり合わせが必要な項目を一目で確認できます。'
        }
      ]
    },
    principles: {
      badge: '基本理念と倫理',
      h2: '合意とコミュニケーションは何よりも優先されます',
      desc: '診断結果は相互理解のための手がかりであり、無理強いや義務ではありません。健全な関係には、自発的な合意、いつでも中断できるセーフワード、そしてセッション後の丁寧なアフターケアが欠かせません。',
      sscTitle: 'SSCモデル',
      sscDesc: 'Safe（安全）、Sane（正気・健全）、Consensual（相互合意）の基本原則。',
      rackTitle: 'RACKモデル',
      rackDesc: 'Risk-Aware Consensual Kink（リスクを自覚した上での合意）の実践。',
      safewordsTitle: 'セーフワード',
      safewordsDesc: '危険や限界を感じた時に、理由を問わず即座に中止・調整するための合言葉。',
      aftercareTitle: 'アフターケア',
      aftercareDesc: '行為後の体温回復、水分補給、精神的な安心感を保つための抱擁や対話。'
    },
    bottomCta: {
      h2: '無料のBDSM診断を今すぐ試してみませんか？',
      subtitle: '完全匿名で数分で完了します。3分のクイック診断、または10分の精密総合診断からお選びください。',
      quickBtn: 'クイック診断を始める（3分）',
      compBtn: '総合診断を始める（10分）'
    }
  },

  fr: {
    meta: {
      title: 'Test BDSM — Test BDSM Gratuit en Ligne & Évaluation des Rôles',
      description: 'Faites le test BDSM gratuit en ligne. Découvrez vos résultats de kink, explorez 20 catégories détaillées et comprenez vos dynamiques intimes avec 100% de confidentialité locale.',
      primaryKeyword: 'Test BDSM'
    },
    hero: {
      eyebrow: 'Test BDSM Gratuit en Ligne',
      privacyNotice: 'Confidentialité 100% Locale • 18+',
      h1: 'Test BDSM : Évaluation Anonyme et Gratuite de Vos Dynamiques',
      subtitle: 'Explorez vos rôles intimes, équilibres de pouvoir et limites personnelles avec notre test BDSM rigoureux. Évaluez 20 catégories distinctes grâce à un calcul transparent et objectif, sans inscription et dans l’anonymat le plus total.',
      quickBtn: 'Faire le Test BDSM Rapide',
      quickMeta: '24 Qs • ~3 min',
      compBtn: 'Test BDSM Complet',
      compMeta: '64 Qs • ~10 min',
      trust1: 'Aucun enregistrement sur serveur ni traçage',
      trust2: 'Test BDSM Gratuit — Sans Inscription',
      trust3: 'Résultats Immédiats & Comparateur Partenaire'
    },
    dualTest: {
      eyebrow: 'Choisissez Votre Rythme',
      h2: 'Deux Formats Conçus pour Votre Emploi du Temps',
      subtitle: 'Que vous souhaitiez un aperçu concis de vos orientations principales ou une analyse approfondie des 20 archétypes, les deux tests sont gratuits et confidentiels.',
      quickBadge: 'Évaluation Rapide',
      quickTime: '24 Questions • ~3 min',
      quickTitle: 'Test BDSM Rapide : Orientation Fondamentale',
      quickDesc: 'Parfait pour obtenir rapidement une vue d’ensemble de vos préférences dominantes, soumises, switch ou sensorielles sans y passer trop de temps.',
      quickFeature1: 'Évalue le spectre de base de l’échange de pouvoir',
      quickFeature2: 'Échelle de réponse Likert intuitive à 5 degrés',
      quickFeature3: 'Bilan immédiat de vos résultats de test BDSM',
      quickFeature4: 'Lien privé sécurisé pour partager vos scores',
      quickStartBtn: 'Lancer le Test BDSM Rapide (Gratuit)',
      compBadge: 'Évaluation Approfondie',
      compRecBadge: 'Recommandé',
      compTime: '64 Questions • ~10 min',
      compTitle: 'Test BDSM Complet : Analyse Détaillée',
      compDesc: 'L’exploration de référence couvrant l’ensemble des 20 catégories du test BDSM, les désirs psychologiques fins, les protocoles et les seuils sensoriels.',
      compFeature1: 'Questionnaire approfondi de 64 questions',
      compFeature2: 'Scores détaillés pour chacune des 20 dimensions',
      compFeature3: 'Conseils personnalisés de négociation et de sécurité',
      compFeature4: 'Outil de synchronisation et de compatibilité de couple',
      compStartBtn: 'Lancer le Test BDSM Complet'
    },
    benefits: {
      eyebrow: 'Rigueur & Éthique',
      h2: 'Pourquoi Choisir Notre Test BDSM en Ligne ?',
      subtitle: 'Développé selon les standards web modernes, dans une démarche transparente et respectueuse.',
      b1Title: 'Confidentialité 100% Locale',
      b1Desc: 'Contrairement à d’autres sites, vos réponses ne quittent jamais votre navigateur. Tous les scores sont calculés localement sur votre appareil.',
      b2Title: 'Scoring Multidimensionnel',
      b2Desc: 'Calculé à partir de pondérations mathématiques objectives et de corrélations croisées, modélisant avec finesse les profils polyvalents comme les switches.',
      b3Title: 'Comparateur de Partenaire',
      b3Desc: 'Comparez vos résultats de test BDSM côte à côte grâce à des liens chiffrés, sans échanger de mots de passe ni stocker de données sur des serveurs tiers.'
    },
    dimensionsPreview: {
      eyebrow: 'Taxonomie & Rôles',
      h2: 'Catégories et Dimensions du Test BDSM',
      subtitle: 'Découvrez comment notre questionnaire évalue 20 archétypes à travers le spectre BDSM.',
      viewAllLink: 'Découvrir les 20 Catégories BDSM'
    },
    faq: {
      eyebrow: 'Questions Fréquentes',
      h2: 'Foire Aux Questions sur le Test BDSM',
      subtitle: 'Des explications claires et transparentes sur la signification, les résultats, la confidentialité et les catégories du test BDSM.',
      items: [
        {
          question: 'Qu’est-ce qu’un test BDSM ?',
          answer: 'Un test BDSM est un questionnaire d’auto-évaluation pour adultes consentants destiné à explorer leurs désirs, limites et penchants dans les domaines du BDSM (Bondage et Discipline, Domination et Soumission, Sadisme et Masochisme). En répondant à des scénarios concrets, chacun peut identifier ses rôles de prédilection et mieux communiquer avec son/sa partenaire.'
        },
        {
          question: 'Qu’est-ce que le test BDSM et quelle est son origine ?',
          answer: 'Le test BDSM renvoie aux célèbres questionnaires en ligne nés dans les années 2000 pour aider chacun à situer ses affinités relationnelles. Notre test moderne modernise ce concept en garantissant une confidentialité totale sur votre appareil et un barème à 20 catégories bien plus riche qu’un simple clivage actif/passif.'
        },
        {
          question: 'Quelle est la signification des résultats d’un test BDSM ?',
          answer: 'Les résultats d’un test BDSM doivent être perçus comme un outil de dialogue et d’introspection, non comme des étiquettes rigides. Votre score (de 0% à 100%) traduit votre niveau d’intérêt à un instant T. Un pourcentage élevé signale une envie d’explorer, tandis qu’un score faible marque une limite ferme.'
        },
        {
          question: 'Quelles sont les catégories évaluées par le test ?',
          answer: 'Le test mesure 20 dimensions réparties en 4 univers : Échange de Pouvoir (Dominant, Soumis, Switch, Maître/Maîtresse, Esclave, Vanilla), Physique et Sensations (Sadique, Masochiste, Rigger, Rope Bunny, Explorateur Sensoriel), Psychologique et Verbal (Dégradateur, Dégradé, Praise Giver, Praise Receiver) et Exploration (Chasseur Primal, Proie Primale, Caregiver, Petplay, Voyeur/Exhibitionniste).'
        },
        {
          question: 'Ce test BDSM est-il gratuit et réellement anonyme ?',
          answer: 'Oui, notre test BDSM est entièrement gratuit, sans options payantes ni recueil d’adresse email. Tous les calculs s’effectuent exclusivement dans la mémoire de votre navigateur, assurant qu’aucune donnée intime ne parvienne à nos serveurs.'
        },
        {
          question: 'Comment comparer ses résultats avec un(e) partenaire ?',
          answer: 'À la fin du test, vous recevez un lien chiffré infalsifiable à transmettre à votre partenaire. Grâce à notre outil de comparaison, vous visualisez vos fiches côte à côte pour identifier vos complémentarités évidentes (comme Sadique et Masochiste) ainsi que les sujets appelant une discussion préalable.'
        }
      ]
    },
    principles: {
      badge: 'Principes Éthiques',
      h2: 'Consentement et Dialogue sont Incontournables',
      desc: 'Un test BDSM est un support d’échange, jamais une permission ou une contrainte. Une pratique responsable repose sur un consentement explicite et renouvelé, des safewords actifs et un aftercare bienveillant.',
      sscTitle: 'Modèle SSC',
      sscDesc: 'Sain, Sûr et Consenti : le socle de référence pour toute pratique.',
      rackTitle: 'Modèle RACK',
      rackDesc: 'Risk-Aware Consensual Kink : la conscience partagée des risques et de la responsabilité.',
      safewordsTitle: 'Safewords (Mots de Sécurité)',
      safewordsDesc: 'Signaux verbaux ou gestuels clairs permettant d’ajuster ou d’interrompre sans délai.',
      aftercareTitle: 'Aftercare (Suivi Post-Séance)',
      aftercareDesc: 'Retour au calme affectif, réhydratation et réconfort corporel après l’intensité.'
    },
    bottomCta: {
      h2: 'Prêt(e) à Passer le Test BDSM Gratuit en Ligne ?',
      subtitle: 'Commencez votre évaluation anonyme en quelques instants. Choisissez entre le Test Rapide (3 min) et le Test Complet (10 min).',
      quickBtn: 'Lancer le Test Rapide (3 min)',
      compBtn: 'Lancer le Test Complet'
    }
  },

  de: {
    meta: {
      title: 'BDSM Test — Kostenloser Online BDSM Test & Rollen-Analyse',
      description: 'Machen Sie den kostenlosen BDSM Test online. Entdecken Sie Ihre Kink-Ergebnisse, erkunden Sie 20 detaillierte BDSM-Kategorien und verstehen Sie Ihre Vorlieben mit 100% lokaler Privatsphäre.',
      primaryKeyword: 'BDSM Test'
    },
    hero: {
      eyebrow: 'Kostenloser BDSM Test Online',
      privacyNotice: '100% Lokale Browser-Privatsphäre • 18+',
      h1: 'BDSM Test: Kostenlose, Anonyme Online-Selbsteinschätzung',
      subtitle: 'Erkunden Sie Ihre Beziehungsrollen, Machtdynamiken und persönlichen Grenzen mit unserem fundierten BDSM Test. Bewerten Sie 20 differenzierte Kategorien mit verlässlicher, nicht-willkürlicher Punkteberechnung – völlig kostenlos, diskret und ohne Registrierung.',
      quickBtn: 'BDSM Schnelltest starten',
      quickMeta: '24 Fragen • ~3 Min.',
      compBtn: 'Ausführlicher BDSM Test',
      compMeta: '64 Fragen • ~10 Min.',
      trust1: 'Keine Speicherung auf Servern oder Tracking',
      trust2: 'Kostenloser BDSM Test — Ohne Anmeldung',
      trust3: 'Sofortiges Ergebnis & Partner-Vergleich'
    },
    dualTest: {
      eyebrow: 'Wählen Sie Ihre Tiefe',
      h2: 'Zwei Formate Passend für Ihren Zeitplan',
      subtitle: 'Ob Sie einen raschen Überblick über Ihre grundlegenden Machtdynamiken wünschen oder eine detaillierte Aufschlüsselung aller 20 Archetypen – beide Tests sind kostenlos und vertraulich.',
      quickBadge: 'Schnelltest',
      quickTime: '24 Fragen • ~3 Min.',
      quickTitle: 'BDSM Schnelltest: Kernorientierung',
      quickDesc: 'Ideal für alle, die eine schnelle Bestandsaufnahme ihrer dominanten, devoten, switch- oder sensorischen Neigungen suchen.',
      quickFeature1: 'Bewertet das Kernspektrum des Machtaustauschs',
      quickFeature2: 'Intuitive 5-stufige Likert-Antwortskala',
      quickFeature3: 'Sofortige Auswertung Ihrer BDSM Test Ergebnisse',
      quickFeature4: 'Vollständig teilbarer privater Ergebnis-Link',
      quickStartBtn: 'Schnelltest starten (Kostenlos)',
      compBadge: 'Ausführlicher Test',
      compRecBadge: 'Empfohlen',
      compTime: '64 Fragen • ~10 Min.',
      compTitle: 'Ausführlicher BDSM Test: Tiefenanalyse',
      compDesc: 'Die umfassende Selbsteinschätzung für alle 20 BDSM Test Kategorien, psychologische Wünsche, Protokolle und sensorische Belastungsgrenzen.',
      compFeature1: 'Umfassende Auswertung anhand von 64 Fragen',
      compFeature2: 'Detaillierte Prozentwerte für alle 20 Dimensionen',
      compFeature3: 'Individuelle Kommunikations- und Sicherheitshinweise',
      compFeature4: 'Direkter Partner-Kompatibilitätsabgleich',
      compStartBtn: 'Ausführlichen Test starten'
    },
    benefits: {
      eyebrow: 'Entwickelt für Integrität',
      h2: 'Warum Unseren Online BDSM Test Wählen?',
      subtitle: 'Entwickelt nach modernen Webstandards, mit ethischem Fokus und absoluter Transparenz.',
      b1Title: '100% Lokale Browser-Privatsphäre',
      b1Desc: 'Im Gegensatz zu vielen anderen Tests verlassen Ihre Antworten niemals Ihr Gerät. Sämtliche Berechnungen laufen lokal in Ihrem Browser ab.',
      b2Title: 'Mehrdimensionale Punkteberechnung',
      b2Desc: 'Mathematisch gewichtet und kreuzkorreliert, um auch vielseitige Rollen wie Switches oder Devotees realistisch abzubilden.',
      b3Title: 'Partner-Kompatibilitätsabgleich',
      b3Desc: 'Vergleichen Sie Ihre BDSM Test Ergebnisse direkt mit einem Partner über verschlüsselte URL-Parameter, ganz ohne Passwörter oder Serverdaten.'
    },
    dimensionsPreview: {
      eyebrow: 'Taxonomie & Dimensionen',
      h2: 'BDSM Test Kategorien & Dimensionen',
      subtitle: 'Erfahren Sie, wie unser Fragebogen 20 differenzierte Rollen im BDSM-Spektrum analysiert.',
      viewAllLink: 'Alle 20 BDSM Kategorien ansehen'
    },
    faq: {
      eyebrow: 'Häufige Fragen',
      h2: 'Häufig Gestellte Fragen zum BDSM Test',
      subtitle: 'Klare, fundierte Antworten zu Bedeutung, Auswertung, Datenschutz und den Dimensionen des BDSM Tests.',
      items: [
        {
          question: 'Was ist ein BDSM Test?',
          answer: 'Ein BDSM Test ist ein Selbstbewertungsinstrument für einwilligende Erwachsene, um persönliche Neigungen, Grenzen und Interessen im Spektrum von BDSM (Bondage & Disziplin, Dominanz & Unterwerfung, Sadismus & Masochismus) zu erkunden. Durch situationsbezogene Fragen hilft er, die eigenen Rollen zu verstehen und offener mit Partnern darüber zu kommunizieren.'
        },
        {
          question: 'Was ist der BDSM Test und wie ist er entstanden?',
          answer: 'Der Begriff bezieht sich auf die beliebten Online-Kink-Fragebögen, die Anfang der 2000er Jahre aufkamen. Unser moderner BDSM Test führt diese Tradition mit vollständiger Browser-Privatsphäre und einem fundierten 20-Kategorien-System fort, das weit über einfache Top/Bottom-Schubladen hinausgeht.'
        },
        {
          question: 'Welche Bedeutung haben die Ergebnisse des BDSM Tests?',
          answer: 'Die Ergebnisse sollen als Gesprächsgrundlage und zur Selbstreflexion dienen, nicht als starre Schubladen. Die Prozentwerte (0% bis 100%) spiegeln Ihre momentane Neigung wider. Ein hoher Wert zeigt eine Vorliebe zum Erkunden an, ein niedriger Wert markiert eine klare persönliche Grenze.'
        },
        {
          question: 'Welche Kategorien werden im Test bewertet?',
          answer: 'Wir bewerten 20 Dimensionen in vier Kernbereichen: Machtaustausch (Dominant, Submissiv, Switch, Master/Mistress, Slave, Vanilla), Körper & Empfindung (Sadist, Masochist, Rigger, Rope Bunny, Sinnesforscher), Psychologisch & Verbal (Degrader, Degradee, Praise Giver, Praise Receiver) sowie Erkundung & Spiel (Jäger, Beute, Caregiver, Petplay, Voyeur/Exhibitionist).'
        },
        {
          question: 'Ist dieser BDSM Test wirklich kostenlos und anonym?',
          answer: 'Ja, unser BDSM Test ist zu 100% kostenlos – ohne Bezahlbarrieren, versteckte Kosten oder Mail-Abfragen. Sämtliche Berechnungen finden im lokalen Speicher Ihres Browsers statt, sodass intime Daten niemals an unsere Server gesendet werden.'
        },
        {
          question: 'Wie können Partner ihre Testergebnisse vergleichen?',
          answer: 'Nach Abschluss erhalten Sie einen privaten, fälschungssicheren Link. Mit unserer Partner-Sync-Funktion können Sie beide Auswertungen nebeneinanderlegen, um harmonierende Schnittmengen (wie Sadist und Masochist) zu entdecken und besprechungswürdige Grenzen zu identifizieren.'
        }
      ]
    },
    principles: {
      badge: 'Ethische Grundlagen',
      h2: 'Einvernehmlichkeit und Kommunikation Stehen an Erster Stelle',
      desc: 'Ein BDSM Test ist eine Hilfe für das gemeinsame Gespräch, niemals eine Verpflichtung oder ein Freibrief. Verantwortungsvoller Kink erfordert fortlaufenden Konsens, aktive Safewords und fürsorgliches Aftercare.',
      sscTitle: 'SSC-Prinzip',
      sscDesc: 'Safe, Sane, Consensual (Sicher, Vernünftig, Einvernehmlich) als ethisches Fundament.',
      rackTitle: 'RACK-Prinzip',
      rackDesc: 'Risk-Aware Consensual Kink: Bewusstes Eingehen von Risiken im gegenseitigen Konsens.',
      safewordsTitle: 'Safewords',
      safewordsDesc: 'Unmissverständliche Signale, um eine Szene sofort zu verlangsamen oder zu beenden.',
      aftercareTitle: 'Aftercare (Nachsorge)',
      aftercareDesc: 'Körperliches Aufwärmen, Zuwendung und seelische Erdung nach intensiven Erfahrungen.'
    },
    bottomCta: {
      h2: 'Bereit für den Kostenlosen BDSM Test Online?',
      subtitle: 'Starten Sie Ihre anonyme Selbsteinschätzung in Sekunden. Wählen Sie zwischen dem 3-minütigen Schnelltest und dem 10-minütigen ausführlichen Test.',
      quickBtn: 'BDSM Schnelltest starten (3 Min.)',
      compBtn: 'Ausführlichen Test starten'
    }
  },

  pt: {
    meta: {
      title: 'Teste BDSM — Teste BDSM Grátis Online & Avaliação de Dinâmicas',
      description: 'Faça o teste BDSM grátis online para descobrir seus resultados, explorar 20 categorias de papéis íntimos e compreender suas preferências com 100% de privacidade no navegador.',
      primaryKeyword: 'Teste BDSM'
    },
    hero: {
      eyebrow: 'Teste BDSM Grátis Online',
      privacyNotice: 'Privacidade 100% no Navegador • 18+',
      h1: 'Teste BDSM: Avaliação Anônima e Gratuita de Dinâmicas Íntimas',
      subtitle: 'Descubra seus papéis relacionais, inclinações de poder e limites pessoais com nosso teste BDSM completo. Avalie 20 categorias exclusivas com pontuação matemática confiável, sem cadastro e com privacidade absoluta.',
      quickBtn: 'Fazer Teste BDSM Rápido',
      quickMeta: '24 Perguntas • ~3 min',
      compBtn: 'Teste BDSM Completo',
      compMeta: '64 Perguntas • ~10 min',
      trust1: 'Sem Armazenamento em Servidor ou Rastreamento',
      trust2: 'Teste BDSM Gratuito — Sem Cadastro',
      trust3: 'Resultados Imediatos & Comparação de Parceiros'
    },
    dualTest: {
      eyebrow: 'Escolha a Profundidade',
      h2: 'Dois Formatos Criados para o Seu Tempo',
      subtitle: 'Quer você deseje uma visão rápida de suas inclinações fundamentais ou uma análise aprofundada dos 20 arquétipos, ambos os testes são gratuitos e confidenciais.',
      quickBadge: 'Avaliação Rápida',
      quickTime: '24 Perguntas • ~3 min',
      quickTitle: 'Teste BDSM Rápido: Orientação Essencial',
      quickDesc: 'Ideal para quem busca um panorama ágil de suas preferências dominantes, submissas, switch ou sensoriais sem demandar muito tempo.',
      quickFeature1: 'Avalia o espectro central da troca de poder',
      quickFeature2: 'Escala Likert intuitiva de 5 níveis',
      quickFeature3: 'Detalhamento imediato dos resultados do teste BDSM',
      quickFeature4: 'Link privado e seguro para compartilhamento',
      quickStartBtn: 'Iniciar Teste BDSM Rápido (Grátis)',
      compBadge: 'Avaliação Completa',
      compRecBadge: 'Recomendado',
      compTime: '64 Perguntas • ~10 min',
      compTitle: 'Teste BDSM Completo: Análise Aprofundada',
      compDesc: 'A análise definitiva abrangendo as 20 categorias do teste BDSM, anseios psicológicos, protocolos e limiares de sensibilidade.',
      compFeature1: 'Avaliação aprofundada com 64 perguntas',
      compFeature2: 'Pontuações pormenorizadas nas 20 dimensões',
      compFeature3: 'Dicas de comunicação e segurança personalizadas',
      compFeature4: 'Ferramenta de sincronização e compatibilidade de casal',
      compStartBtn: 'Iniciar Teste BDSM Completo'
    },
    benefits: {
      eyebrow: 'Desenvolvido com Integridade',
      h2: 'Por Que Fazer Nosso Teste BDSM Online?',
      subtitle: 'Construído sob modernos padrões web, com ética e transparência absoluta.',
      b1Title: 'Privacidade 100% no Navegador',
      b1Desc: 'Diferente de outros testes, suas respostas nunca saem do seu dispositivo. Todas as operações rodam localmente para seu total sigilo.',
      b2Title: 'Pontuação Multidimensional',
      b2Desc: 'Calculada por pesos matemáticos e correlações cruzadas, refletindo com precisão perfis versáteis como switches e dedicados.',
      b3Title: 'Comparação de Casal',
      b3Desc: 'Compare seus resultados do teste BDSM lado a lado com seu parceiro através de parâmetros protegidos na URL, sem senhas ou armazenamento externo.'
    },
    dimensionsPreview: {
      eyebrow: 'Taxonomia & Papéis',
      h2: 'Categorias e Dimensões do Teste BDSM',
      subtitle: 'Explore como nosso questionário avalia 20 arquétipos pelo espectro do BDSM.',
      viewAllLink: 'Ver Todas as 20 Categorias BDSM'
    },
    faq: {
      eyebrow: 'Dúvidas Frequentes',
      h2: 'Perguntas Frequentes sobre o Teste BDSM',
      subtitle: 'Respostas claras e originais sobre o significado, resultados, privacidade e categorias do teste BDSM.',
      items: [
        {
          question: 'O que é um teste BDSM?',
          answer: 'Um teste BDSM é uma ferramenta de autoavaliação para adultos consentientes explorarem seus interesses, limites e afinidades nas áreas de BDSM (Bondage e Disciplina, Dominação e Submissão, Sadismo e Masoquismo). Ao responder a cenários práticos, a pessoa identifica papéis específicos e consegue dialogar com mais clareza com seus parceiros.'
        },
        {
          question: 'O que é o teste BDSM e qual sua origem?',
          answer: 'O teste BDSM remete aos populares questionários online que surgiram nos anos 2000 para orientar curiosos sobre dinâmicas afetivas alternativas. Nossa versão moderniza esse formato com privacidade total no cliente e 20 categorias ricas que vão além da dicotomia ativo/passivo.'
        },
        {
          question: 'Qual o significado dos resultados do teste BDSM?',
          answer: 'Os resultados devem ser encarados como instrumento de reflexão e conversa, não como rótulos rígidos. As porcentagens (de 0% a 100%) retratam seu nível de interesse no momento. Notas altas apontam curiosidade e afinidade para explorar, enquanto notas baixas marcam limites nítidos.'
        },
        {
          question: 'Quais categorias são avaliadas pelo teste?',
          answer: 'Avaliamos 20 dimensões em 4 grupos: Troca de Poder (Dominante, Submisso, Switch, Mestre/Senhora, Escravo, Vanilla), Físico e Sensações (Sádico, Masoquista, Rigger, Rope Bunny, Explorador Sensorial), Psicológico e Verbal (Degradador, Degradado, Praise Giver, Praise Receiver) e Exploração (Caçador Primal, Presa Primal, Cuidador, Petplay, Voyeur/Exibicionista).'
        },
        {
          question: 'Este teste BDSM é gratuito e totalmente anônimo?',
          answer: 'Sim, nosso teste BDSM é 100% gratuito, sem taxas ocultas ou solicitação de e-mail. Todos os cálculos ocorrem na memória do seu próprio navegador, assegurando que nenhuma informação íntima seja gravada em servidores.'
        },
        {
          question: 'Como os parceiros comparam seus resultados do teste BDSM?',
          answer: 'Após finalizar, você recebe um link codificado para compartilhar. Com a ferramenta de Comparação, vocês visualizam os dois perfis lado a lado para encontrar sinergias evidentes (como Sádico e Masoquista) e alinhar limites que requerem conversa prévia.'
        }
      ]
    },
    principles: {
      badge: 'Fundamentos Éticos',
      h2: 'Consentimento e Diálogo São Inegociáveis',
      desc: 'Um teste BDSM serve de auxílio para o diálogo, nunca como obrigação ou autorização prévia. Práticas sadias exigem consentimento ativo e contínuo, safewords eficazes e aftercare dedicado.',
      sscTitle: 'Modelo SSC',
      sscDesc: 'Seguro, Sensato e Consensual como fundamento básico.',
      rackTitle: 'Modelo RACK',
      rackDesc: 'Risk-Aware Consensual Kink: consciência dos riscos assumidos em consenso mútuo.',
      safewordsTitle: 'Safewords (Palavras de Segurança)',
      safewordsDesc: 'Sinais inequívocos para desacelerar ou encerrar a prática de imediato.',
      aftercareTitle: 'Aftercare (Acolhimento Pós-Cena)',
      aftercareDesc: 'Aconchego afetivo, repouso físico e hidratação após momentos de intensidade.'
    },
    bottomCta: {
      h2: 'Pronto(a) para Fazer o Teste BDSM Grátis Online?',
      subtitle: 'Inicie sua autoavaliação anônima em instantes. Escolha entre o Teste Rápido de 3 minutos e o Teste Completo de 10 minutos.',
      quickBtn: 'Iniciar Teste Rápido (3 min)',
      compBtn: 'Iniciar Teste Completo'
    }
  },

  ko: {
    meta: {
      title: 'BDSM 테스트 — 무료 온라인 BDSM 성향 테스트 & 유형 분석',
      description: '무료 온라인 BDSM 테스트를 통해 성향 결과를 확인하세요. 20가지 상세한 성향 카테고리와 권력 역학 관계를 100% 브라우저 로컬 프라이버시로 안전하게 분석합니다.',
      primaryKeyword: 'BDSM 테스트'
    },
    hero: {
      eyebrow: '무료 온라인 BDSM 테스트',
      privacyNotice: '100% 브라우저 로컬 연산 • 만 18세 이상',
      h1: 'BDSM 테스트: 무료·익명 온라인 성향 분석 검사',
      subtitle: '객관적인 BDSM 성향 테스트를 통해 당신의 관계 역할, 주종 성향, 감각적 선호도와 한계선(리미트)을 탐색해 보세요. 20가지 정밀 카테고리를 회원가입 없이 완전 무료로, 브라우저 내에서 안전하게 분석합니다.',
      quickBtn: '빠른 BDSM 테스트 시작',
      quickMeta: '24문항 • 약 3분',
      compBtn: '정밀 종합 BDSM 테스트',
      compMeta: '64문항 • 약 10분',
      trust1: '서버 저장 및 사용자 추적이 없는 100% 로컬 연산',
      trust2: '회원가입이나 이메일 요구 없는 완전 무료 검사',
      trust3: '즉각적인 결과 확인 & 파트너 성향 매칭 비교'
    },
    dualTest: {
      eyebrow: '원하는 깊이를 선택하세요',
      h2: '목적에 맞춰 설계된 두 가지 테스트 방식',
      subtitle: '자신의 핵심 성향을 빠르게 확인하고 싶은 분도, 20가지 유형을 정밀하게 탐구하고 싶은 분도 모두 무료로 익명 검사를 진행할 수 있습니다.',
      quickBadge: '빠른 검사',
      quickTime: '24문항 • 약 3분',
      quickTitle: '빠른 BDSM 테스트: 핵심 성향 확인',
      quickDesc: '도미넌트, 서브미시브, 스위치, 감각적 성향 등 자신의 기본적인 성향 지향점을 단 몇 분 만에 확인하고 싶은 분께 추천합니다.',
      quickFeature1: '핵심 권력 교환(주종) 스펙트럼 분석',
      quickFeature2: '직관적인 5점 척도 선택 방식',
      quickFeature3: '검사 완료 즉시 성향 결과 요약 제공',
      quickFeature4: '안전한 비공개 링크로 파트너와 공유 가능',
      quickStartBtn: '빠른 BDSM 테스트 시작 (무료)',
      compBadge: '정밀 종합 검사',
      compRecBadge: '추천',
      compTime: '64문항 • 약 10분',
      compTitle: '정밀 종합 BDSM 테스트: 심층 유형 분석',
      compDesc: '20가지 BDSM 성향 카테고리 전체, 심리적 욕구, 프로토콜 선호도, 신체 감각 한계선까지 입체적으로 파악하는 종합 분석 검사입니다.',
      compFeature1: '심층 64개 문항 정밀 분석',
      compFeature2: '20개 세부 성향별 백분율 점수 산출',
      compFeature3: '성향 맞춤형 소통 팁 및 안전 수칙 제공',
      compFeature4: '파트너와의 1:1 성향 궁합 비교 도구 지원',
      compStartBtn: '정밀 종합 BDSM 테스트 시작'
    },
    benefits: {
      eyebrow: '신뢰와 윤리를 바탕으로 한 설계',
      h2: '우리 사이트의 BDSM 테스트를 선택하는 이유',
      subtitle: '최신 웹 표준 기술과 철저한 개인정보 보호 원칙을 기반으로 정직하게 구축되었습니다.',
      b1Title: '100% 브라우저 로컬 프라이버시',
      b1Desc: '타 사이트와 달리 사용자의 답변은 절대로 외부 서버로 전송되지 않습니다. 모든 점수 계산은 사용자의 기기 내부에서만 안전하게 실행됩니다.',
      b2Title: '다차원 가중치 점수 산출',
      b2Desc: '단순한 점수 합산이 아닌 정교한 수학적 가중치와 상관관계를 적용하여 스위치나 복합 성향도 왜곡 없이 정확하게 분석합니다.',
      b3Title: '파트너 1:1 궁합 매칭 비교',
      b3Desc: '서버에 개인정보를 남기지 않고 암호화된 URL 파라미터를 통해 두 사람의 테스트 결과를 나란히 비교하고 소통할 수 있습니다.'
    },
    dimensionsPreview: {
      eyebrow: '성향 사전 및 카테고리',
      h2: 'BDSM 테스트 20가지 성향 유형',
      subtitle: '우리 검사가 측정하는 20가지 세부 성향 유형과 그 의미를 살펴보세요.',
      viewAllLink: '20가지 성향 전체 사전 보기'
    },
    faq: {
      eyebrow: '자주 묻는 질문',
      h2: 'BDSM 테스트 관련 자주 묻는 질문',
      subtitle: 'BDSM 테스트의 의미, 결과 해석, 개인정보 보호, 성향 분류에 관한 명확한 안내입니다.',
      items: [
        {
          question: 'BDSM 테스트란 무엇인가요?',
          answer: 'BDSM 테스트는 성인들이 상호 동의 하에 BDSM(결박과 훈육, 지배와 복종, 가학과 피학) 영역에서 자신의 관심사, 성향, 한계선(리미트)을 파악하도록 돕는 자가 진단 도구입니다. 구체적인 상황 질문에 답함으로써 자신의 성향을 객관적으로 이해하고 파트너와 솔직하게 대화할 수 있습니다.'
        },
        {
          question: 'BDSM 테스트는 어떻게 시작되었나요?',
          answer: 'BDSM 테스트는 2000년대 초반 온라인 커뮤니티에서 대안적 관계 성향을 확인하기 위해 등장했습니다. 본 사이트의 테스트는 데이터를 일절 저장하지 않는 강력한 프라이버시 기술과 20가지 다차원 카테고리를 도입하여 기존의 단순한 이분법을 뛰어넘었습니다.'
        },
        {
          question: 'BDSM 테스트 결과 점수는 어떻게 해석해야 하나요?',
          answer: '테스트 결과는 고정된 낙인이 아니라 자아 성찰과 대화를 위한 지표입니다. 백분율(0%~100%)은 현재 시점에서 특정 성향에 대한 선호도를 나타냅니다. 높은 점수는 탐색하고 싶은 호기심이나 친화성을 의미하며, 낮은 점수는 존중받아야 할 명확한 경계선(리미트)을 의미합니다.'
        },
        {
          question: '어떤 카테고리들이 평가되나요?',
          answer: '권력 교환(도미넌트, 서브미시브, 스위치, 마스터, 슬레이브, 바닐라), 신체적 감각(새디스트, 마조히스트, 리거, 로프버니, 감각 탐험가), 심리적 역학(디그레이더, 디그레이디, 칭찬 주도형, 칭찬 수용형), 탐색과 역할(프라이멀 헌터, 프라이멀 프레이, 보호자, 펫플레이, 시각적 향유형) 등 20가지 유형을 평가합니다.'
        },
        {
          question: '테스트는 정말 무료이며 익명이 보장되나요?',
          answer: '네, 100% 무료이며 결제나 이메일 등록을 요구하지 않습니다. 무엇보다 모든 계산이 브라우저 내부에서만 수행되므로 귀하의 은밀한 성향 정보가 서버로 전송되거나 기록될 위험이 전혀 없습니다.'
        },
        {
          question: '파트너와 결과를 어떻게 비교할 수 있나요?',
          answer: '테스트를 마치면 암호화된 전용 결과 링크가 제공됩니다. 파트너 비교 페이지에서 두 사람의 결과를 나란히 조회하여 상호 보완적인 강점(예: 새디스트와 마조히스트)을 확인하고 사전 대화가 필요한 부분을 점검할 수 있습니다.'
        }
      ]
    },
    principles: {
      badge: '윤리적 기본 원칙',
      h2: '상호 동의와 소통은 그 무엇보다 우선합니다',
      desc: 'BDSM 테스트는 소통을 돕는 도구일 뿐 의무나 허가증이 아닙니다. 건강한 관계는 끊임없는 자발적 동의, 명확한 세이프워드, 그리고 세심한 애프터케어를 필수적으로 요구합니다.',
      sscTitle: 'SSC 원칙',
      sscDesc: 'Safe, Sane, Consensual (안전하고, 이성적이며, 상호 동의된 관계).',
      rackTitle: 'RACK 원칙',
      rackDesc: 'Risk-Aware Consensual Kink (위험을 자각하고 합의하는 관계).',
      safewordsTitle: '세이프워드 (안전 단어)',
      safewordsDesc: '위험이나 한계를 느꼈을 때 즉시 상황을 조율하거나 멈추는 명확한 신호.',
      aftercareTitle: '애프터케어 (사후 돌봄)',
      aftercareDesc: '플레이 후 체온 유지, 정서적 안정감과 포옹을 통해 일상으로 복귀하는 과정.'
    },
    bottomCta: {
      h2: '무료 온라인 BDSM 테스트를 시작할 준비가 되셨나요?',
      subtitle: '몇 초 만에 익명 검사를 시작할 수 있습니다. 3분 빠른 테스트와 10분 정밀 종합 테스트 중 선택하세요.',
      quickBtn: '빠른 BDSM 테스트 시작 (3분)',
      compBtn: '정밀 종합 테스트 시작'
    }
  },

  it: {
    meta: {
      title: 'Test BDSM — Test BDSM Gratis Online & Analisi delle Dinamiche',
      description: 'Fai il test BDSM gratis online per scoprire i tuoi risultati, esplorare 20 categorie di ruoli intimi e comprendere le tue preferenze con privacy al 100% nel browser.',
      primaryKeyword: 'Test BDSM'
    },
    hero: {
      eyebrow: 'Test BDSM Gratis Online',
      privacyNotice: 'Privacy 100% nel Browser • 18+',
      h1: 'Test BDSM: Valutazione Anonima e Gratuita delle Dinamiche Intime',
      subtitle: 'Esplora i tuoi ruoli relazionali, inclinazioni di potere e confini personali con il nostro accurato test BDSM. Valuta 20 categorie distinte con un punteggio matematico trasparente, senza registrazione e nella massima riservatezza.',
      quickBtn: 'Fai il Test BDSM Rapido',
      quickMeta: '24 Domande • ~3 min',
      compBtn: 'Test BDSM Completo',
      compMeta: '64 Domande • ~10 min',
      trust1: 'Nessun salvataggio su server né tracciamento',
      trust2: 'Test BDSM Gratuito — Senza Registrazione',
      trust3: 'Risultati Immediati & Confronto Partner'
    },
    dualTest: {
      eyebrow: 'Scegli la Profondità',
      h2: 'Due Formati Pensati per i Tuoi Tempi',
      subtitle: 'Sia che tu cerchi una panoramica veloce delle tue inclinazioni sia un’analisi dettagliata di tutti i 20 archetipi, entrambi i test sono gratuiti e riservati.',
      quickBadge: 'Valutazione Rapida',
      quickTime: '24 Domande • ~3 min',
      quickTitle: 'Test BDSM Rapido: Orientamento Base',
      quickDesc: 'Ideale per chi desidera una panoramica chiara delle proprie preferenze dominanti, sottomesse, switch o sensoriali senza richiedere troppo tempo.',
      quickFeature1: 'Valuta lo spettro fondamentale dello scambio di potere',
      quickFeature2: 'Scala Likert intuitiva a 5 livelli',
      quickFeature3: 'Resoconto immediato dei risultati del tuo test BDSM',
      quickFeature4: 'Link privato sicuro per condividere i tuoi punteggi',
      quickStartBtn: 'Inizia Test BDSM Rapido (Gratis)',
      compBadge: 'Valutazione Completa',
      compRecBadge: 'Consigliato',
      compTime: '64 Domande • ~10 min',
      compTitle: 'Test BDSM Completo: Analisi Approfondita',
      compDesc: 'L’indagine completa su tutte le 20 categorie del test BDSM, desideri psicologici profondi, protocolli e soglie sensoriali.',
      compFeature1: 'Valutazione approfondita di 64 domande',
      compFeature2: 'Punteggi percentuali precisi per tutte le 20 dimensioni',
      compFeature3: 'Consigli personalizzati di comunicazione e sicurezza',
      compFeature4: 'Strumento di sincronizzazione e compatibilità di coppia',
      compStartBtn: 'Inizia Test BDSM Completo'
    },
    benefits: {
      eyebrow: 'Progettato con Trasparenza',
      h2: 'Perché Scegliere il Nostro Test BDSM Online?',
      subtitle: 'Sviluppato secondo i moderni standard web, con un approccio etico e rispetto per la riservatezza.',
      b1Title: 'Privacy 100% nel Browser',
      b1Desc: 'A differenza di altri quiz, le tue risposte non lasciano mai il tuo dispositivo. Tutte le operazioni avvengono localmente sul tuo browser.',
      b2Title: 'Punteggio Multidimensionale',
      b2Desc: 'Calcolato mediante ponderazioni matematiche ed equilibri incrociati, rispecchiando fedelmente anche ruoli versatili come switch e devoti.',
      b3Title: 'Confronto Compatibilità di Coppia',
      b3Desc: 'Confronta i risultati del test BDSM fianco a fianco con il tuo partner tramite parametri URL sicuri, senza memorizzare dati su server remoti.'
    },
    dimensionsPreview: {
      eyebrow: 'Tassonomia & Ruoli',
      h2: 'Categorie e Dimensioni del Test BDSM',
      subtitle: 'Scopri come il nostro questionario valuta 20 archetipi lungo lo spettro BDSM.',
      viewAllLink: 'Vedi Tutte le 20 Categorie BDSM'
    },
    faq: {
      eyebrow: 'Domande Frequenti',
      h2: 'Domande Frequenti sul Test BDSM',
      subtitle: 'Spiegazioni chiare e accurate sul significato, sui risultati, sulla privacy e sulle categorie del test BDSM.',
      items: [
        {
          question: 'Che cos’è un test BDSM?',
          answer: 'Un test BDSM è uno strumento di autovalutazione per adulti consenzienti che desiderano esplorare i propri interessi, confini e preferenze nell’ambito del BDSM (Bondage e Disciplina, Dominazione e Sottomissione, Sadismo e Masochismo). Rispondendo a situazioni pratiche, è possibile individuare i propri ruoli ideali e dialogare più chiaramente con il partner.'
        },
        {
          question: 'Cos’è il test BDSM e qual è la sua origine?',
          answer: 'Il test BDSM si ispira ai noti questionari nati nei primi anni 2000 per aiutare le persone a orientarsi nelle dinamiche intime non convenzionali. Il nostro test aggiorna questo modello garantendo totale privacy locale e 20 categorie dettagliate che superano la semplice divisione attivo/passivo.'
        },
        {
          question: 'Che significato hanno i risultati del test BDSM?',
          answer: 'I risultati sono uno spunto di dialogo e riflessione, non etichette vincolanti. Le percentuali (da 0% a 100%) riflettono il tuo interesse in questo momento. Un punteggio elevato segnala curiosità e desiderio di esplorare, mentre un punteggio basso indica un limite netto da rispettare.'
        },
        {
          question: 'Quali sono le categorie valutate dal test?',
          answer: 'Misuriamo 20 dimensioni in 4 ambiti: Scambio di Potere (Dominante, Sottomesso, Switch, Master/Mistress, Slave, Vanilla), Fisico e Sensazioni (Sadico, Masochista, Rigger, Rope Bunny, Esploratore Sensoriale), Psicologico e Verbale (Degradatore, Degradato, Praise Giver, Praise Receiver) ed Esplorazione (Cacciatore Primal, Preda Primal, Caregiver, Petplay, Voyeur/Esibizionista).'
        },
        {
          question: 'Questo test BDSM è gratuito e davvero anonimo?',
          answer: 'Sì, il nostro test BDSM è gratuito al 100%, senza pagamenti nascosti né richiesta di e-mail. I calcoli avvengono esclusivamente nella memoria del tuo browser, impedendo qualsiasi trasmissione di informazioni intime ai nostri server.'
        },
        {
          question: 'Come possono due partner confrontare i risultati del test BDSM?',
          answer: 'Al termine del test ricevi un link codificato da condividere con il partner. Nella sezione Confronto potrete visualizzare i due profili affiancati per evidenziare le affinità complementari (come Sadico e Masochista) e individuare i limiti su cui dialogare preventivamente.'
        }
      ]
    },
    principles: {
      badge: 'Basi Etiche',
      h2: 'Consenso e Comunicazione Sono Essenziali',
      desc: 'Un test BDSM è un aiuto al dialogo reciproco, mai un obbligo né un’autorizzazione implicita. Relazioni sane richiedono consenso attivo e continuativo, safeword affidabili e un affettuoso aftercare.',
      sscTitle: 'Modello SSC',
      sscDesc: 'Sicuro, Sano e Consensuale come regola fondamentale di convivenza.',
      rackTitle: 'Modèle RACK',
      rackDesc: 'Risk-Aware Consensual Kink: consapevolezza dei rischi assunti in pieno accordo.',
      safewordsTitle: 'Safeword (Parole di Sicurezza)',
      safewordsDesc: 'Segnali verbali chiari per rallentare o interrompere immediatamente la scena.',
      aftercareTitle: 'Aftercare (Cura Post-Scena)',
      aftercareDesc: 'Rassicurazione emotiva, comfort fisico e idratazione dopo momenti intensi.'
    },
    bottomCta: {
      h2: 'Pronto/a a Fare il Test BDSM Gratis Online?',
      subtitle: 'Inizia la tua valutazione anonima in pochi secondi. Scegli tra il Test Rapido da 3 minuti e il Test Completo da 10 minuti.',
      quickBtn: 'Inizia Test Rapido (3 min)',
      compBtn: 'Inizia Test Completo'
    }
  }
};

export function getHomePageContent(lang: SupportedLanguage): HomePageContent {
  return HOME_PAGE_TRANSLATIONS[lang] || HOME_PAGE_TRANSLATIONS.en;
}

