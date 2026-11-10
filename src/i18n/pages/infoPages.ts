import type { SupportedLanguage } from '../languages';

export interface InfoPagesContent {
  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    subtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    subtitle: string;
    directTitle: string;
    directDesc: string;
    formTitle: string;
    formDesc: string;
    topicLabel: string;
    topicFeedback: string;
    topicBug: string;
    topicPrivacy: string;
    topicGeneral: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sentNotice: string;
  };
  privacy: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lastUpdated: string;
    summaryTitle: string;
    summaryDesc: string;
    zeroStorageTitle: string;
    zeroStorageDesc: string;
    localStorageTitle: string;
    localStorageDesc: string;
  };
  terms: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lastUpdated: string;
    ageTitle: string;
    ageDesc: string;
    natureTitle: string;
    natureDesc: string;
  };
  disclaimer: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lastUpdated: string;
    importantTitle: string;
    importantDesc: string;
    noMedicalTitle: string;
    noMedicalDesc: string;
    safetyTitle: string;
    safetyDesc: string;
  };
  notFound: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    message: string;
    backHomeBtn: string;
    takeTestBtn: string;
  };
}

export const INFO_PAGES_TRANSLATIONS: Record<SupportedLanguage, InfoPagesContent> = {
  en: {
    about: {
      metaTitle: 'About Our Free BDSM Test — Purpose, Ethics & Methodology',
      metaDescription: 'Learn about our client-side, anonymous BDSM test, our multi-factor scoring methodology, and our commitment to consensual, ethical self-discovery.',
      eyebrow: 'About The Project',
      h1: 'Clear, objective self-discovery for adult intimate dynamics.',
      subtitle: 'BDSM Test is an educational self-reflection platform designed to help consenting adults (18+) understand their relationship roles, power exchange preferences, and personal boundaries with nuance and precision.',
      pillar1Title: 'Absolute Privacy',
      pillar1Desc: 'All computations run locally in your browser. No questionnaire answers, scores, or identifiers are transmitted to or stored on any server.',
      pillar2Title: 'Multidimensional Nuance',
      pillar2Desc: 'Rather than forcing users into a simplistic binary (Dominant vs. Submissive), we measure 20 distinct psychological, sensory, and role-based dimensions.',
      pillar3Title: 'Ethical & Non-Judgmental',
      pillar3Desc: 'We celebrate healthy, consensual exploration grounded in mutual respect, clear communication, and ongoing consent.'
    },
    contact: {
      metaTitle: 'Contact Us — BDSM Test Feedback & Inquiries',
      metaDescription: 'Get in touch with the BDSM Test team for feedback, question suggestions, bug reports, or privacy inquiries.',
      eyebrow: 'Get in Touch',
      h1: 'Contact & Feedback',
      subtitle: 'We welcome your feedback, question suggestions, bug reports, and accessibility improvements.',
      directTitle: 'Direct Communication',
      directDesc: 'For general inquiries, bug reports, or partnership suggestions, email us directly at:',
      formTitle: 'Send a Message',
      formDesc: 'Submit your thoughts or feedback. We read every thoughtful message.',
      topicLabel: 'Topic',
      topicFeedback: 'Questionnaire Feedback & Suggestions',
      topicBug: 'Bug Report / Technical Issue',
      topicPrivacy: 'Privacy & Data Handling Inquiry',
      topicGeneral: 'General Question',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Share your feedback or questions in detail...',
      submitBtn: 'Send Message',
      sentNotice: 'Thank you for your feedback! Your message has been recorded locally.'
    },
    privacy: {
      metaTitle: 'Privacy Policy — 100% Client-Side Privacy Guarantee',
      metaDescription: 'Our strict privacy policy guarantees that all test calculations occur locally on your device with zero server tracking or storage.',
      h1: 'Privacy Policy',
      lastUpdated: 'Last Updated: November 2026',
      summaryTitle: 'Zero-Storage Privacy Architecture',
      summaryDesc: 'BDSM Test is architected around absolute client-side confidentiality. We do not require registration, do not collect personal names or emails, and never transmit your questionnaire answers to our servers.',
      zeroStorageTitle: 'No Server-Side Database of Intimate Preferences',
      zeroStorageDesc: 'All calculations of trait percentages and category assignments execute locally inside your browser memory using JavaScript.',
      localStorageTitle: 'Local Storage & Browser Cookies',
      localStorageDesc: 'If you choose to save your results or onboarding preferences, they are stored strictly within your browser\'s local web storage (localStorage).'
    },
    terms: {
      metaTitle: 'Terms of Service — BDSM Test Usage Terms',
      metaDescription: 'Read the terms of service governing the usage of the free, educational BDSM Test platform.',
      h1: 'Terms of Service',
      lastUpdated: 'Last Updated: November 2026',
      ageTitle: '1. Age Requirement (Strict 18+ Only)',
      ageDesc: 'You must be at least 18 years of age or the age of legal majority in your jurisdiction to access or take this assessment.',
      natureTitle: '2. Educational & Exploratory Nature',
      natureDesc: 'This website is provided solely for educational self-discovery and personal reflection between consenting adults.'
    },
    disclaimer: {
      metaTitle: 'Assessment Disclaimer — Educational Scope & Consent',
      metaDescription: 'Important disclaimer regarding the non-clinical, educational nature of our BDSM test results.',
      h1: 'Assessment Disclaimer',
      lastUpdated: 'Last Updated: November 2026',
      importantTitle: 'Non-Clinical & Non-Diagnostic Tool',
      importantDesc: 'The BDSM Test is an educational self-assessment tool designed for introspection. It does not constitute medical, psychological, psychiatric, or clinical relationship advice.',
      noMedicalTitle: 'No Substitute for Professional Counseling',
      noMedicalDesc: 'If you or your partner are experiencing emotional distress or relationship trauma, please consult a qualified mental health professional.',
      safetyTitle: 'Consent and Personal Responsibility',
      safetyDesc: 'Results reflect personal interest indicators, not behavioral directives. All intimate activities must remain voluntary, safe, and fully consensual.'
    },
    notFound: {
      metaTitle: '404 — Page Not Found | BDSM Test',
      metaDescription: 'The page you are looking for does not exist. Return to the homepage or start the free BDSM test.',
      h1: 'Page Not Found (404)',
      message: 'The link you followed may be broken or the page may have been moved. Return to the homepage or take our free assessment.',
      backHomeBtn: 'Return to Homepage',
      takeTestBtn: 'Start Free BDSM Test'
    }
  },

  es: {
    about: {
      metaTitle: 'Acerca de Nuestro Test BDSM — Propósito, Ética y Metodología',
      metaDescription: 'Conoce nuestro test BDSM anónimo con cálculo en el navegador, nuestra metodología objetiva y nuestro compromiso con el autodescubrimiento ético y consensuado.',
      eyebrow: 'Sobre el Proyecto',
      h1: 'Autodescubrimiento claro y objetivo para dinámicas íntimas de adultos.',
      subtitle: 'BDSM Test es una plataforma de autorreflexión diseñada para que adultos con consentimiento (18+) comprendan sus roles, preferencias de poder y límites personales con rigor y precisión.',
      pillar1Title: 'Privacidad Absoluta',
      pillar1Desc: 'Todos los cálculos se ejecutan localmente en tu navegador. Ninguna respuesta ni puntuación se envía ni se almacena en servidores externos.',
      pillar2Title: 'Matices Multidimensionales',
      pillar2Desc: 'En lugar de forzar a los usuarios en una división simplista (Dominante vs. Sumiso), evaluamos 20 dimensiones psicológicas, sensoriales y de roles.',
      pillar3Title: 'Ético y Libre de Prejuicios',
      pillar3Desc: 'Promovemos una exploración saludable basada en el respeto mutuo, la comunicación clara y el consentimiento continuado.'
    },
    contact: {
      metaTitle: 'Contacto — Test BDSM Sugerencias y Consultas',
      metaDescription: 'Ponte en contacto con el equipo de BDSM Test para enviar comentarios, sugerencias sobre preguntas o consultas de privacidad.',
      eyebrow: 'Contacto',
      h1: 'Contacto y Sugerencias',
      subtitle: 'Agradecemos tus comentarios, sugerencias de preguntas, avisos de fallos y mejoras de accesibilidad.',
      directTitle: 'Comunicación Directa',
      directDesc: 'Para consultas generales o reportes técnicos, puedes escribirnos a:',
      formTitle: 'Envía un Mensaje',
      formDesc: 'Comparte tus impresiones o dudas con nuestro equipo.',
      topicLabel: 'Asunto',
      topicFeedback: 'Comentarios y Sugerencias sobre el Cuestionario',
      topicBug: 'Reporte de Fallo Técnico',
      topicPrivacy: 'Consulta sobre Privacidad y Datos',
      topicGeneral: 'Pregunta General',
      messageLabel: 'Tu Mensaje',
      messagePlaceholder: 'Escribe tu consulta o sugerencia con detalle...',
      submitBtn: 'Enviar Mensaje',
      sentNotice: '¡Gracias por tus comentarios! Tu mensaje ha sido registrado localmente.'
    },
    privacy: {
      metaTitle: 'Política de Privacidad — Privacidad 100% en el Navegador',
      metaDescription: 'Nuestra política de privacidad garantiza que todos los cálculos ocurren localmente en tu dispositivo, sin almacenamiento ni rastreo en servidores.',
      h1: 'Política de Privacidad',
      lastUpdated: 'Última actualización: Noviembre 2026',
      summaryTitle: 'Arquitectura de Privacidad sin Almacenamiento en Servidor',
      summaryDesc: 'BDSM Test está diseñado bajo un principio estricto de confidencialidad en el cliente. No requerimos registro, no recopilamos nombres ni emails, y jamás transmitimos tus respuestas a nuestros servidores.',
      zeroStorageTitle: 'Sin Bases de Datos Externas de Preferencias Íntimas',
      zeroStorageDesc: 'Todas las operaciones de cálculo porcentual y asignación de categorías se ejecutan localmente en la memoria de tu navegador mediante JavaScript.',
      localStorageTitle: 'Almacenamiento Local (localStorage)',
      localStorageDesc: 'Si decides guardar tus resultados o configuración previa, estos se conservan estrictamente dentro del almacenamiento local de tu propio navegador.'
    },
    terms: {
      metaTitle: 'Términos de Servicio — Condiciones de Uso del Test BDSM',
      metaDescription: 'Consulta los términos y condiciones de uso de la plataforma educativa BDSM Test.',
      h1: 'Términos de Servicio',
      lastUpdated: 'Última actualización: Noviembre 2026',
      ageTitle: '1. Requisito de Mayoría de Edad (Estrictamente 18+)',
      ageDesc: 'Debes tener al menos 18 años o la mayoría de edad legal en tu país de residencia para acceder o realizar esta evaluación.',
      natureTitle: '2. Carácter Educativo y Exploratorio',
      natureDesc: 'Este sitio web se proporciona únicamente con fines de autorreflexión personal y diálogo mutuo entre adultos con consentimiento.'
    },
    disclaimer: {
      metaTitle: 'Aviso Legal y Médico — Alcance Educativo y Consentimiento',
      metaDescription: 'Aviso importante sobre el carácter no clínico y divulgativo de los resultados de nuestro test BDSM.',
      h1: 'Aviso Legal del Test',
      lastUpdated: 'Última actualización: Noviembre 2026',
      importantTitle: 'Herramienta No Clínica ni Diagnóstica',
      importantDesc: 'El Test BDSM es un recurso de autorreflexión divulgativo. No constituye asesoramiento médico, psicológico, psiquiátrico ni de terapia de pareja.',
      noMedicalTitle: 'No Sustituye la Ayuda Profesional',
      noMedicalDesc: 'Si tú o tu pareja experimentáis dificultades emocionales o vivencias traumáticas, os aconsejamos acudir a profesionales de la salud mental.',
      safetyTitle: 'Consentimiento y Responsabilidad Personal',
      safetyDesc: 'Los resultados expresan indicadores de afinidad subjetiva, no directrices obligatorias. Toda interacción íntima debe ser voluntaria y plenamente consensuada.'
    },
    notFound: {
      metaTitle: '404 — Página No Encontrada | Test BDSM',
      metaDescription: 'La página que buscas no existe. Vuelve al inicio o realiza el test BDSM gratuito.',
      h1: 'Página No Encontrada (404)',
      message: 'El enlace que has seguido puede estar roto o la página se ha trasladado. Vuelve a la página principal o haz nuestro test gratuito.',
      backHomeBtn: 'Volver al Inicio',
      takeTestBtn: 'Hacer Test BDSM Gratis'
    }
  },

  ja: {
    about: {
      metaTitle: '当サイトについて — BDSM診断の目的・倫理・算出方法',
      metaDescription: '端末内完結のプライバシー設計、客観的な多変量スコア算出システム、相互合意を最優先とする当サイトの理念をご紹介します。',
      eyebrow: 'プロジェクトの概要',
      h1: '成人向けの親密な関係性と嗜好性を、客観的かつクリアに探求する。',
      subtitle: 'BDSM診断は、18歳以上の成人が自らの役割、主従の志向、個人の境界線（リミット）を客観的・多面的に理解できるように設計された自己分析プラットフォームです。',
      pillar1Title: '完全なプライバシー保護',
      pillar1Desc: 'すべての計算はお使いのブラウザ内部で行われます。設問の回答や算出スコアが外部サーバーに送信されることは一切ありません。',
      pillar2Title: '20の多角的なタイプ分析',
      pillar2Desc: '単純な「攻め／受け」「S／M」の二項対立ではなく、心理的・感覚的・役割別の20種類に細分化された属性を測定します。',
      pillar3Title: '倫理的かつ偏見のない姿勢',
      pillar3Desc: '相互の敬意、明確なコミュニケーション、そして継続的な合意に基づく健全な探求をサポートします。'
    },
    contact: {
      metaTitle: 'お問い合わせ — BDSM診断へのご意見・フィードバック',
      metaDescription: '当サイトへのご質問、設問に関するフィードバック、不具合のご報告はこちらからお寄せください。',
      eyebrow: 'お問い合わせ',
      h1: 'お問い合わせ・フィードバック',
      subtitle: 'サイトの改善点、設問へのご意見、誤字・脱字や技術的不具合のご報告を歓迎しております。',
      directTitle: 'メールでのお問い合わせ',
      directDesc: '一般的なご質問やご提案は、下記アドレス宛に直接ご連絡ください：',
      formTitle: 'メッセージを送信する',
      formDesc: 'ご意見やメッセージをお気軽にお送りください。',
      topicLabel: 'お問い合わせの種類',
      topicFeedback: '診断の設問に関するご意見・改善提案',
      topicBug: 'システムの不具合・表示エラー報告',
      topicPrivacy: 'プライバシー・データ保護に関するご質問',
      topicGeneral: 'その他全般のご質問',
      messageLabel: 'メッセージ内容',
      messagePlaceholder: '詳細なご意見・ご質問をご記入ください...',
      submitBtn: 'メッセージを送信する',
      sentNotice: 'フィードバックをいただきありがとうございます！ブラウザ内に記録されました。'
    },
    privacy: {
      metaTitle: 'プライバシーポリシー — 100%端末内ローカル処理保証',
      metaDescription: '当サイトの診断は回答データをサーバーに一切保存せず、お使いの端末内でのみ安全に計算されることを保証します。',
      h1: 'プライバシーポリシー',
      lastUpdated: '最終改訂：2026年11月',
      summaryTitle: '外部保存ゼロのローカルプライバシー構造',
      summaryDesc: '当サイトは利用者の完全な匿名性とプライバシーを最優先に設計されています。会員登録やメールアドレスの収集は行わず、診断回答をサーバーへ送信することもありません。',
      zeroStorageTitle: 'サーバー側での個人データ保管なし',
      zeroStorageDesc: 'スコアのパーセンテージ計算やタイプ判定は、JavaScriptを用いてお使いの端末（スマートフォン・PC）のブラウザメモリ内だけで実行されます。',
      localStorageTitle: 'ローカルストレージ（localStorage）の使用',
      localStorageDesc: '診断途中の進捗やお好みの設定は、外部サーバーではなく、ご自身のブラウザのlocalStorage内にのみ安全に保持されます。'
    },
    terms: {
      metaTitle: '利用規約 — BDSM診断サイトご利用にあたって',
      metaDescription: '無料のBDSM診断プラットフォームをご利用いただく際の利用規約と免責事項をご確認ください。',
      h1: '利用規約',
      lastUpdated: '最終改訂：2026年11月',
      ageTitle: '1. 年齢要件（18歳以上限定）',
      ageDesc: '本サイトの診断を利用するには、18歳以上（または居住地域の成人年齢以上）である必要があります。',
      natureTitle: '2. 教育的・自己探求目的のサービス',
      natureDesc: '本サイトは成人間における健全な対話と自己理解を支援するための啓発ツールとして提供されています。'
    },
    disclaimer: {
      metaTitle: '免責事項 — 診断の非医療性と合意の原則',
      metaDescription: '当サイトの診断結果は医療的・精神医学的な診断ではなく、自己探求と対話のための参考情報です。',
      h1: '免責事項',
      lastUpdated: '最終改訂：2026年11月',
      importantTitle: '非臨床的・非医療的な分析ツール',
      importantDesc: '本テストは自己内省のための参考指標であり、医学的、精神医学的、心理療法的な診断を提供するものではありません。',
      noMedicalTitle: '専門的なカウンセリングの代替ではありません',
      noMedicalDesc: '精神的な苦痛や人間関係の深刻な悩みをお抱えの場合は、専門の医師や公認心理師にご相談ください。',
      safetyTitle: '合意と自己責任の原則',
      safetyDesc: '診断結果は興味の指標であり、行動を強制するものではありません。あらゆる親密な行為は自発的かつ安全に行われる必要があります。'
    },
    notFound: {
      metaTitle: '404 — ページが見つかりません | BDSM診断',
      metaDescription: 'お探しのページは存在しないか移動された可能性があります。トップページへお戻りいただくか、診断をお試しください。',
      h1: 'ページが見つかりません (404)',
      message: 'アクセスされたURLが無効であるか、ページが削除された可能性があります。トップページから再度アクセスしてください。',
      backHomeBtn: 'トップページに戻る',
      takeTestBtn: '無料BDSM診断を受ける'
    }
  },

  fr: {
    about: {
      metaTitle: 'À Propos de Notre Test BDSM — Objectifs, Éthique & Méthodologie',
      metaDescription: 'Découvrez notre démarche : un test BDSM anonyme fonctionnant dans votre navigateur, une méthode d’évaluation objective et un engagement éthique fort.',
      eyebrow: 'À Propos du Projet',
      h1: 'Un regard clair et objectif sur vos dynamiques intimes.',
      subtitle: 'BDSM Test est une plateforme d’introspection conçue pour aider les adultes consentants (18+) à comprendre leurs rôles, leurs souhaits et leurs limites relationnelles avec finesse.',
      pillar1Title: 'Confidentialité Totale',
      pillar1Desc: 'Toutes les opérations se déroulent localement dans votre navigateur. Aucune réponse ni score n’est jamais envoyé vers un serveur.',
      pillar2Title: 'Richesse Multidimensionnelle',
      pillar2Desc: 'Loin des approches simplistes (Dominant vs Soumis), nous évaluons 20 dimensions psychologiques, sensorielles et comportementales distinctes.',
      pillar3Title: 'Éthique & Bienveillance',
      pillar3Desc: 'Nous valorisons une exploration intime saine, fondée sur le respect d’autrui, l’écoute mutuelle et le consentement permanent.'
    },
    contact: {
      metaTitle: 'Contact — Retours & Questions sur le Test BDSM',
      metaDescription: 'Contactez l’équipe de BDSM Test pour nous faire part de vos retours, suggestions de questions ou remarques techniques.',
      eyebrow: 'Écrivez-Nous',
      h1: 'Contact & Retours',
      subtitle: 'Nous accueillons avec intérêt vos remarques, propositions de questions, signalements de bugs et suggestions d’accessibilité.',
      directTitle: 'Contact Direct',
      directDesc: 'Pour toute demande générale ou suggestion technique, écrivez-nous directement à :',
      formTitle: 'Envoyer un Message',
      formDesc: 'Partagez vos réflexions avec notre équipe.',
      topicLabel: 'Objet du message',
      topicFeedback: 'Commentaires et Suggestions sur le Questionnaire',
      topicBug: 'Signalement d’un Bug Technique',
      topicPrivacy: 'Question sur la Confidentialité et les Données',
      topicGeneral: 'Question Générale',
      messageLabel: 'Votre Message',
      messagePlaceholder: 'Rédigez votre message avec précision...',
      submitBtn: 'Envoyer le Message',
      sentNotice: 'Merci pour votre retour ! Votre message a été consigné localement.'
    },
    privacy: {
      metaTitle: 'Politique de Confidentialité — Garantie 100% Locale',
      metaDescription: 'Notre politique garantit que tous les scores sont calculés localement sur votre appareil, sans stockage sur serveur ni pistage.',
      h1: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : Novembre 2026',
      summaryTitle: 'Architecture Sans Données Distantes',
      summaryDesc: 'BDSM Test repose sur une confidentialité absolue côté client. Nous ne demandons aucune inscription, ne collectons aucun nom ni courriel et ne transmettons aucune réponse.',
      zeroStorageTitle: 'Aucune Base de Données des Préférences Intimes',
      zeroStorageDesc: 'Tous les calculs de scores s’exécutent dans la mémoire de votre navigateur via JavaScript, sans intervention de nos serveurs.',
      localStorageTitle: 'Stockage Local (localStorage)',
      localStorageDesc: 'Si vous choisissez d’enregistrer vos scores, ceux-ci demeurent confinés dans le stockage local de votre propre navigateur.'
    },
    terms: {
      metaTitle: 'Conditions d’Utilisation — Règles de la Plateforme BDSM Test',
      metaDescription: 'Consultez les conditions régissant l’usage de notre plateforme éducative BDSM Test.',
      h1: 'Conditions d’Utilisation',
      lastUpdated: 'Dernière mise à jour : Novembre 2026',
      ageTitle: '1. Majorité Requise (18 ans et plus)',
      ageDesc: 'Vous devez impérativement avoir au moins 18 ans ou l’âge de la majorité légale dans votre juridiction pour utiliser ce service.',
      natureTitle: '2. Vocation Éducative et Exploratoire',
      natureDesc: 'Ce site est mis à disposition uniquement pour faciliter la réflexion personnelle et le dialogue intime entre adultes consentants.'
    },
    disclaimer: {
      metaTitle: 'Avertissement — Portée Éducative & Consentement',
      metaDescription: 'Avertissement relatif à la nature non médicale et non clinique des résultats de notre test BDSM.',
      h1: 'Avertissement Légal',
      lastUpdated: 'Dernière mise à jour : Novembre 2026',
      importantTitle: 'Outil Éducatif et Non Médical',
      importantDesc: 'Le Test BDSM est un questionnaire d’auto-évaluation. Il ne constitue en aucun cas un avis médical, psychologique ou psychiatrique.',
      noMedicalTitle: 'Ne Remplace Pas un Professionnel de Santé',
      noMedicalDesc: 'Si vous ou votre partenaire traversez des traumatismes ou des détresses émotionnelles, consultez un professionnel qualifié.',
      safetyTitle: 'Consentement & Responsabilité Personnelle',
      safetyDesc: 'Les résultats traduisent des indicateurs de curiosité, jamais des injonctions. Toute pratique intime doit demeurer libre, consentie et sécurisée.'
    },
    notFound: {
      metaTitle: '404 — Page Non Trouvée | Test BDSM',
      metaDescription: 'La page recherchée n’existe pas. Revenez à l’accueil ou lancez le test BDSM gratuit.',
      h1: 'Page Non Trouvée (404)',
      message: 'Le lien suivi est peut-être erroné ou la page a été déplacée. Revenez à l’accueil ou effectuez notre test gratuit.',
      backHomeBtn: 'Retour à l’Accueil',
      takeTestBtn: 'Faire le Test BDSM Gratuit'
    }
  },

  de: {
    about: {
      metaTitle: 'Über unseren BDSM Test — Zweck, Ethik & Methodik',
      metaDescription: 'Erfahren Sie mehr über unseren anonymen BDSM Test mit lokaler Berechnung, unser fundiertes Bewertungssystem und unseren ethischen Ansatz.',
      eyebrow: 'Über das Projekt',
      h1: 'Klare, objektive Selbsterkenntnis für intime Beziehungsrollen.',
      subtitle: 'BDSM Test ist eine pädagogische Reflexionsplattform, die einwilligenden Erwachsenen (18+) hilft, persönliche Machtdynamiken, Vorlieben und Grenzen differenziert zu verstehen.',
      pillar1Title: 'Absolute Privatsphäre',
      pillar1Desc: 'Alle Berechnungen laufen lokal in Ihrem Browser. Keine Antworten, Scores oder Kennungen werden jemals an externe Server übertragen.',
      pillar2Title: 'Mehrdimensionale Vielfalt',
      pillar2Desc: 'Statt Nutzer in einfache Schubladen (Dominant vs. Devot) zu zwängen, erfassen wir 20 eigenständige psychologische, sensorische und rollenbezogene Dimensionen.',
      pillar3Title: 'Ethisch & Vorurteilsfrei',
      pillar3Desc: 'Wir unterstützen eine respektvolle, einvernehmliche Erkundung, basierend auf klarer Kommunikation und kontinuierlichem Konsens.'
    },
    contact: {
      metaTitle: 'Kontakt — BDSM Test Feedback & Anfragen',
      metaDescription: 'Nehmen Sie Kontakt mit unserem Team auf für Feedback, Fragenvorschläge, Fehlerberichte oder Datenschutzanliegen.',
      eyebrow: 'Kontakt',
      h1: 'Kontakt & Feedback',
      subtitle: 'Wir freuen uns über Anregungen, Vorschläge für neue Fragen, Fehlerhinweise und Verbesserungen zur Barrierefreiheit.',
      directTitle: 'Direkte Kontaktaufnahme',
      directDesc: 'Für allgemeine Fragen oder technische Hinweise schreiben Sie uns gern direkt an:',
      formTitle: 'Nachricht senden',
      formDesc: 'Teilen Sie uns Ihre Gedanken oder Fragen mit.',
      topicLabel: 'Thema',
      topicFeedback: 'Feedback & Vorschläge zum Fragebogen',
      topicBug: 'Fehlermeldung / Technisches Problem',
      topicPrivacy: 'Datenschutz & Datenverarbeitung',
      topicGeneral: 'Allgemeine Anfrage',
      messageLabel: 'Ihre Nachricht',
      messagePlaceholder: 'Beschreiben Sie Ihr Anliegen detailliert...',
      submitBtn: 'Nachricht absenden',
      sentNotice: 'Vielen Dank für Ihr Feedback! Ihre Nachricht wurde lokal im Browser erfasst.'
    },
    privacy: {
      metaTitle: 'Datenschutzerklärung — 100% Lokale Browser-Privatsphäre',
      metaDescription: 'Unsere Richtlinie garantiert: Alle Berechnungen erfolgen lokal auf Ihrem Gerät ohne Tracking oder Speicherung auf Servern.',
      h1: 'Datenschutzerklärung',
      lastUpdated: 'Zuletzt aktualisiert: November 2026',
      summaryTitle: 'Datenschutzarchitektur ohne externe Datenspeicherung',
      summaryDesc: 'BDSM Test basiert auf absoluter Vertraulichkeit auf Benutzerseite. Wir verlangen keine Registrierung, erheben keine E-Mail-Adressen und übertragen keine Antworten.',
      zeroStorageTitle: 'Keine Server-Datenbank für intime Vorlieben',
      zeroStorageDesc: 'Sämtliche Auswertungen werden rein clientseitig mit JavaScript im Arbeitsspeicher Ihres Browsers durchgeführt.',
      localStorageTitle: 'Lokaler Browserspeicher (localStorage)',
      localStorageDesc: 'Ihre Einstellungen oder gespeicherten Ergebnisse verbleiben ausschließlich im lokalen Speicher Ihres eigenen Webbrowsers.'
    },
    terms: {
      metaTitle: 'Nutzungsbedingungen — BDSM Test Plattform',
      metaDescription: 'Lesen Sie die Nutzungsbedingungen für unsere kostenlose, aufklärerische BDSM Test Plattform.',
      h1: 'Nutzungsbedingungen',
      lastUpdated: 'Zuletzt aktualisiert: November 2026',
      ageTitle: '1. Mindestalter (Ausschließlich ab 18 Jahren)',
      ageDesc: 'Sie müssen mindestens 18 Jahre alt sein, um diesen Test aufzurufen oder durchzuführen.',
      natureTitle: '2. Aufklärerischer & Selbsterkundender Charakter',
      natureDesc: 'Dieses Angebot dient ausschließlich der persönlichen Reflexion und dem partnerschaftlichen Gespräch mündiger Erwachsener.'
    },
    disclaimer: {
      metaTitle: 'Haftungsausschluss — Aufklärerischer Charakter & Konsens',
      metaDescription: 'Wichtiger Hinweis zum nicht-medizinischen Charakter unserer BDSM Test Auswertungen.',
      h1: 'Haftungsausschluss',
      lastUpdated: 'Zuletzt aktualisiert: November 2026',
      importantTitle: 'Nicht-klinisches Selbsterkundungs-Instrument',
      importantDesc: 'Der BDSM Test stellt keine medizinische, psychologische oder paartherapeutische Diagnose dar.',
      noMedicalTitle: 'Kein Ersatz für professionelle Beratung',
      noMedicalDesc: 'Bei emotionalen Belastungen oder Traumata wenden Sie sich bitte an qualifizierte Fachkräfte.',
      safetyTitle: 'Konsens & Eigenverantwortung',
      safetyDesc: 'Ergebnisse zeigen Neigungen auf, sind aber keine Handlungsanweisungen. Jede intime Handlung muss stets freiwillig und sicher sein.'
    },
    notFound: {
      metaTitle: '404 — Seite Nicht Gefunden | BDSM Test',
      metaDescription: 'Die gesuchte Seite existiert nicht. Zurück zur Startseite oder kostenlosen BDSM Test starten.',
      h1: 'Seite Nicht Gefunden (404)',
      message: 'Der aufgerufene Link ist möglicherweise veraltet oder die Seite wurde verschoben.',
      backHomeBtn: 'Zur Startseite',
      takeTestBtn: 'Kostenlosen Test starten'
    }
  },

  pt: {
    about: {
      metaTitle: 'Sobre Nosso Teste BDSM — Propósito, Ética e Metodologia',
      metaDescription: 'Conheça nosso teste BDSM anônimo executado no navegador, nosso sistema de pontuação objetivo e nosso compromisso com o autoconhecimento ético.',
      eyebrow: 'Sobre o Projeto',
      h1: 'Autodescoberta clara e objetiva para dinâmicas íntimas adultas.',
      subtitle: 'O BDSM Test é uma plataforma de autorreflexão voltada a adultos consentientes (18+) para compreender papéis relacionais e limites com rigor.',
      pillar1Title: 'Privacidade Absoluta',
      pillar1Desc: 'Todas as operações ocorrem no seu próprio navegador. Nenhuma resposta é transmitida ou salva em servidores externos.',
      pillar2Title: 'Riqueza Multidimensional',
      pillar2Desc: 'Em vez de simplificações binárias, medimos 20 dimensões psicológicas, sensoriais e comportamentais.',
      pillar3Title: 'Ético e Livre de Julgamentos',
      pillar3Desc: 'Incentivamos uma exploração saudável pautada no respeito, diálogo aberto e consentimento ininterrupto.'
    },
    contact: {
      metaTitle: 'Contato — Sugestões e Dúvidas sobre o Teste BDSM',
      metaDescription: 'Entre em contato com nossa equipe para enviar comentários, sugestões ou relatar problemas.',
      eyebrow: 'Fale Conosco',
      h1: 'Contato & Feedback',
      subtitle: 'Apreciamos suas sugestões, propostas de perguntas, avisos de bugs e melhorias de acessibilidade.',
      directTitle: 'Comunicação Direta',
      directDesc: 'Para dúvidas gerais ou contato formal, escreva diretamente para:',
      formTitle: 'Envie uma Mensagem',
      formDesc: 'Compartilhe suas ideias com nossa equipe.',
      topicLabel: 'Assunto',
      topicFeedback: 'Comentários e Sugestões sobre o Questionário',
      topicBug: 'Relato de Falha Técnica',
      topicPrivacy: 'Dúvidas sobre Privacidade e Dados',
      topicGeneral: 'Dúvida Geral',
      messageLabel: 'Sua Mensagem',
      messagePlaceholder: 'Descreva sua mensagem com detalhes...',
      submitBtn: 'Enviar Mensagem',
      sentNotice: 'Obrigado pelo contato! Sua mensagem foi registrada localmente.'
    },
    privacy: {
      metaTitle: 'Política de Privacidade — Garantia de Privacidade no Navegador',
      metaDescription: 'Nossa política assegura que todos os cálculos ocorrem localmente no seu dispositivo sem gravação em servidores.',
      h1: 'Política de Privacidade',
      lastUpdated: 'Última atualização: Novembro 2026',
      summaryTitle: 'Arquitetura sem Armazenamento Externo',
      summaryDesc: 'O BDSM Test foi concebido sob princípios estritos de confidencialidade no cliente. Não exigimos cadastro nem enviamos dados íntimos para servidores.',
      zeroStorageTitle: 'Sem Banco de Dados de Preferências Íntimas',
      zeroStorageDesc: 'Todas as operações matemáticas são processadas pelo JavaScript do seu navegador na memória local.',
      localStorageTitle: 'Armazenamento Local (localStorage)',
      localStorageDesc: 'Se optar por salvar resultados, eles ficam restritos à memória local do seu próprio navegador.'
    },
    terms: {
      metaTitle: 'Termos de Serviço — Condições de Uso do Teste BDSM',
      metaDescription: 'Leia os termos de serviço que regem o uso da plataforma educativa BDSM Test.',
      h1: 'Termos de Serviço',
      lastUpdated: 'Última atualização: Novembro 2026',
      ageTitle: '1. Requisito de Maioridade (Estritamente 18+)',
      ageDesc: 'Você deve ter pelo menos 18 anos ou a maioridade legal em seu país para utilizar esta avaliação.',
      natureTitle: '2. Natureza Educativa e Exploratória',
      natureDesc: 'Este site é fornecido exclusivamente para reflexão pessoal e diálogo íntimo entre adultos consentientes.'
    },
    disclaimer: {
      metaTitle: 'Aviso Legal — Caráter Educativo e Consentimento',
      metaDescription: 'Esclarecimento importante sobre o escopo não clínico das avaliações do nosso teste BDSM.',
      h1: 'Aviso Legal',
      lastUpdated: 'Última atualização: Novembro 2026',
      importantTitle: 'Ferramenta de Autoconhecimento Não Clínica',
      importantDesc: 'O Teste BDSM não substitui diagnóstico médico, psicológico ou aconselhamento terapêutico profissional.',
      noMedicalTitle: 'Não Substitui Ajuda Profissional',
      noMedicalDesc: 'Caso você ou seu parceiro enfrentem sofrimento emocional ou traumas, busquem profissionais de saúde mental.',
      safetyTitle: 'Consentimento e Responsabilidade',
      safetyDesc: 'Os resultados indicam afinidades de interesse e não constituem ordens de conduta. Práticas íntimas devem ser sempre seguras e consensuais.'
    },
    notFound: {
      metaTitle: '404 — Página Não Encontrada | Teste BDSM',
      metaDescription: 'A página solicitada não existe. Volte à página inicial ou inicie o teste BDSM gratuito.',
      h1: 'Página Não Encontrada (404)',
      message: 'O link que você acessou pode estar desatualizado ou a página mudou de endereço.',
      backHomeBtn: 'Voltar ao Início',
      takeTestBtn: 'Fazer Teste BDSM Gratuito'
    }
  },

  ko: {
    about: {
      metaTitle: 'BDSM 테스트 소개 — 개발 목적, 윤리적 기준 및 분석 방식',
      metaDescription: '브라우저 로컬 연산을 통한 완벽한 프라이버시, 20가지 성향 분석 모델, 상호 합의에 기반한 본 사이트의 철학을 안내합니다.',
      eyebrow: '프로젝트 소개',
      h1: '성인들의 친밀한 관계성과 성향을 객관적이고 명확하게 탐구합니다.',
      subtitle: 'BDSM 테스트는 만 18세 이상 성인들이 자신의 관계 역할, 권력 역학 관계, 개인적 한계선(리미트)을 정밀하게 이해할 수 있도록 설계된 자기 성찰 플랫폼입니다.',
      pillar1Title: '완벽한 프라이버시 보장',
      pillar1Desc: '모든 점수 계산은 사용자의 기기 브라우저에서만 수행됩니다. 어떠한 답변이나 점수도 외부 서버로 전송되거나 저장되지 않습니다.',
      pillar2Title: '20가지 입체적 성향 분석',
      pillar2Desc: '단순한 이분법적 분류를 지양하고 심리적, 감각적, 역할적 특성을 아우르는 20가지 세부 유형을 정밀하게 측정합니다.',
      pillar3Title: '윤리적이며 편견 없는 접근',
      pillar3Desc: '상호 존중, 투명한 소통, 그리고 지속적인 자발적 동의에 기반한 건강한 탐색을 지향합니다.'
    },
    contact: {
      metaTitle: '문의하기 — BDSM 테스트 피드백 및 건의사항',
      metaDescription: '사이트 이용 문의, 문항 개선 제안, 시스템 오류 제보는 이 페이지를 통해 남겨주세요.',
      eyebrow: '문의 및 의견',
      h1: '문의 & 피드백',
      subtitle: '사이트 개선을 위한 의견, 문항 개선 제안, 오탈자 및 기술적 오류 제보를 언제나 환영합니다.',
      directTitle: '직접 이메일 문의',
      directDesc: '일반 문의 및 기술 제휴 관련 사항은 아래 주소로 연락해 주세요:',
      formTitle: '메시지 남기기',
      formDesc: '의견이나 제안사항을 자유롭게 작성해 주세요.',
      topicLabel: '문의 유형',
      topicFeedback: '테스트 문항 관련 피드백 및 제안',
      topicBug: '시스템 버그 및 표시 오류 제보',
      topicPrivacy: '개인정보 및 데이터 관련 문의',
      topicGeneral: '기타 일반 문의',
      messageLabel: '문의 내용',
      messagePlaceholder: '내용을 상세히 작성해 주세요...',
      submitBtn: '메시지 전송하기',
      sentNotice: '소중한 의견 감사합니다! 브라우저 로컬에 안전하게 기록되었습니다.'
    },
    privacy: {
      metaTitle: '개인정보처리방침 — 100% 브라우저 로컬 처리 보장',
      metaDescription: '본 사이트는 사용자 답변 데이터를 서버에 일절 저장하지 않으며 오직 사용자 기기 내에서만 처리됨을 보증합니다.',
      h1: '개인정보처리방침',
      lastUpdated: '최종 개정일: 2026년 11월',
      summaryTitle: '외부 저장소가 없는 프라이버시 아키텍처',
      summaryDesc: 'BDSM 테스트는 완전한 익명성과 브라우저 로컬 연산을 원칙으로 합니다. 회원가입이나 개인정보 입력을 요구하지 않으며 어떠한 결과도 서버로 보내지 않습니다.',
      zeroStorageTitle: '민감한 성향 데이터의 서버 저장 없음',
      zeroStorageDesc: '모든 백분율 점수 연산은 자바스크립트를 통해 사용자의 브라우저 메모리 안에서만 일회성으로 처리됩니다.',
      localStorageTitle: '로컬 스토리지 (localStorage) 안내',
      localStorageDesc: '결과 저장 기능을 사용하실 경우 해당 정보는 외부 서버가 아닌 사용자의 브라우저 로컬 공간에만 보관됩니다.'
    },
    terms: {
      metaTitle: '이용약관 — BDSM 테스트 플랫폼 이용 규정',
      metaDescription: '무료 BDSM 테스트 플랫폼 이용과 관련된 약관 및 주의사항을 안내합니다.',
      h1: '이용약관',
      lastUpdated: '최종 개정일: 2026년 11월',
      ageTitle: '1. 연령 제한 (만 18세 이상 성인 전용)',
      ageDesc: '본 서비스를 이용하려면 만 18세 이상(또는 해당 국가의 법적 성인)이어야 합니다.',
      natureTitle: '2. 교육적 목적 및 자기 탐색 성격',
      natureDesc: '본 웹사이트는 성인 간의 상호 이해와 건강한 대화를 돕기 위한 교육적 탐색 도구로 제공됩니다.'
    },
    disclaimer: {
      metaTitle: '면책 조항 — 비의료적 성격 및 상호 동의 원칙',
      metaDescription: '본 검사는 의료적·임상적 진단이 아니며 자기 탐색을 위한 참고 자료임을 안내합니다.',
      h1: '면책 조항',
      lastUpdated: '최종 개정일: 2026년 11월',
      importantTitle: '비임상적 자기 성찰 도구',
      importantDesc: 'BDSM 테스트는 의학적, 정신과적 또는 심리치료적 진단을 제공하는 전문 의료 서비스가 아닙니다.',
      noMedicalTitle: '전문가 상담의 대체물이 아닙니다',
      noMedicalDesc: '심리적 고통이나 관계의 심각한 어려움을 겪고 계신 경우 공인된 전문 상담 기관의 도움을 받으시기 바랍니다.',
      safetyTitle: '동의와 개인의 책임',
      safetyDesc: '결과는 성향에 대한 선호 지표일 뿐 행동을 강제하지 않습니다. 모든 친밀한 행위는 반드시 자발적 동의 하에 안전하게 이루어져야 합니다.'
    },
    notFound: {
      metaTitle: '404 — 페이지를 찾을 수 없습니다 | BDSM 테스트',
      metaDescription: '요청하신 페이지가 존재하지 않습니다. 홈페이지로 이동하거나 무료 BDSM 테스트를 시작하세요.',
      h1: '페이지를 찾을 수 없습니다 (404)',
      message: '입력하신 주소가 잘못되었거나 페이지가 삭제 또는 이동되었을 수 있습니다.',
      backHomeBtn: '홈으로 돌아가기',
      takeTestBtn: '무료 BDSM 테스트 시작하기'
    }
  },

  it: {
    about: {
      metaTitle: 'Chi Siamo — Scopo, Etica e Metodologia del Test BDSM',
      metaDescription: 'Scopri il nostro test BDSM anonimo con calcolo nel browser, la nostra metodologia obiettiva e il nostro impegno verso un’esplorazione etica e consensuale.',
      eyebrow: 'Sul Progetto',
      h1: 'Autoconsapevolezza chiara e obiettiva per le dinamiche intime adulte.',
      subtitle: 'BDSM Test è una piattaforma di autoriflessione concepita per aiutare adulti consenzienti (18+) a comprendere ruoli, preferenze di potere e confini intimi con precisione.',
      pillar1Title: 'Privacy Assoluta',
      pillar1Desc: 'Tutti i calcoli avvengono localmente nel tuo browser. Nessuna risposta né punteggio viene trasmesso o salvato su server remoti.',
      pillar2Title: 'Approccio Multidimensionale',
      pillar2Desc: 'Anziché limitarsi a schemi binari (Dominatore vs Sottomesso), analizziamo 20 dimensioni psicologiche, sensoriali e comportamentali distinte.',
      pillar3Title: 'Etico e Privo di Pregiudizi',
      pillar3Desc: 'Promuoviamo un’esplorazione serena basata su rispetto reciproco, dialogo sincero e consenso continuativo.'
    },
    contact: {
      metaTitle: 'Contatti — Feedback e Domande sul Test BDSM',
      metaDescription: 'Contatta il team di BDSM Test per condividere suggerimenti, proposte di domande o segnalazioni tecniche.',
      eyebrow: 'Scrivici',
      h1: 'Contatti & Feedback',
      subtitle: 'Accogliamo con piacere le tue osservazioni, suggerimenti per i quesiti, segnalazioni di bug o miglioramenti di accessibilità.',
      directTitle: 'Comunicazione Diretta',
      directDesc: 'Per richieste generali o comunicazioni formali, scrivici direttamente a:',
      formTitle: 'Invia un Messaggio',
      formDesc: 'Invia le tue considerazioni al nostro team.',
      topicLabel: 'Argomento',
      topicFeedback: 'Feedback e Suggerimenti sul Questionario',
      topicBug: 'Segnalazione di un Problema Tecnico',
      topicPrivacy: 'Domande su Privacy e Trattamento Dati',
      topicGeneral: 'Domanda Generale',
      messageLabel: 'Il Tuo Messaggio',
      messagePlaceholder: 'Scrivi qui il tuo messaggio in dettaglio...',
      submitBtn: 'Invia Messaggio',
      sentNotice: 'Grazie per il tuo feedback! Il messaggio è stato registrato localmente.'
    },
    privacy: {
      metaTitle: 'Informativa sulla Privacy — Garanzia di Privacy Locale al 100%',
      metaDescription: 'La nostra politica garantisce che tutti i calcoli del test avvengono sul tuo dispositivo, senza tracciamento o archiviazione remota.',
      h1: 'Informativa sulla Privacy',
      lastUpdated: 'Ultimo aggiornamento: Novembre 2026',
      summaryTitle: 'Architettura Priva di Archiviazione Remota',
      summaryDesc: 'BDSM Test è costruito sul principio della riservatezza nel browser dell’utente. Non richiediamo registrazione, non raccogliamo e-mail e non salviamo risposte sui nostri server.',
      zeroStorageTitle: 'Nessun Database Remoto delle Preferenze Intime',
      zeroStorageDesc: 'Tutti i conteggi dei punteggi avvengono nella memoria volatile del tuo browser tramite JavaScript.',
      localStorageTitle: 'Archiviazione Locale (localStorage)',
      localStorageDesc: 'Se decidi di memorizzare le risposte, esse rimarranno confinate nello spazio locale del tuo specifico browser web.'
    },
    terms: {
      metaTitle: 'Termini di Servizio — Regolamento della Piattaforma BDSM Test',
      metaDescription: 'Leggi i termini di servizio che regolano l’uso della piattaforma divulgativa BDSM Test.',
      h1: 'Termini di Servizio',
      lastUpdated: 'Ultimo aggiornamento: Novembre 2026',
      ageTitle: '1. Requisito di Età (Rigorosamente Maggiorenni 18+)',
      ageDesc: 'È necessario avere almeno 18 anni compiuti per poter accedere a questa valutazione.',
      natureTitle: '2. Scopo Divulgativo ed Esplorativo',
      natureDesc: 'Il sito è destinato unicamente all’introspezione e al dialogo costruttivo tra adulti consenzienti.'
    },
    disclaimer: {
      metaTitle: 'Disclaimer Legale — Ambito Divulgativo & Consenso',
      metaDescription: 'Nota informativa importante sulla natura non clinica né terapeutica del nostro test BDSM.',
      h1: 'Disclaimer del Test',
      lastUpdated: 'Ultimo aggiornamento: Novembre 2026',
      importantTitle: 'Strumento di Autoriflessione Non Clinico',
      importantDesc: 'Il Test BDSM non fornisce diagnosi mediche, psichiatriche o psicoterapeutiche né consulenze di coppia professionali.',
      noMedicalTitle: 'Non Sostituisce il Parere di Uno Specialista',
      noMedicalDesc: 'In presenza di sofferenze emotive o traumi, consigliamo di rivolgersi a professionisti qualificati della salute mentale.',
      safetyTitle: 'Consenso e Responsabilità Personale',
      safetyDesc: 'I risultati segnalano inclinazioni personali e non istruzioni vincolanti. Ogni pratica intima deve rimanere volontaria, sicura e consensuale.'
    },
    notFound: {
      metaTitle: '404 — Pagina Non Trovata | Test BDSM',
      metaDescription: 'La pagina cercata non esiste. Torna alla home page o inizia il test BDSM gratuito.',
      h1: 'Pagina Non Trovata (404)',
      message: 'Il link seguito potrebbe essere obsoleto o la pagina è stata rimossa. Ritorna alla pagina principale o inizia il test.',
      backHomeBtn: 'Torna alla Home',
      takeTestBtn: 'Inizia il Test BDSM Gratuito'
    }
  }
};

export function getInfoPagesContent(lang: SupportedLanguage): InfoPagesContent {
  return INFO_PAGES_TRANSLATIONS[lang] || INFO_PAGES_TRANSLATIONS.en;
}

