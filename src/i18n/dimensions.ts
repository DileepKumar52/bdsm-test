import type { SupportedLanguage } from './languages';
import { DIMENSIONS as BASE_DIMENSIONS, type Dimension } from '../data/dimensions';

export interface LocalizedDimensionCategory {
  id: 'Power Exchange' | 'Physical & Sensation' | 'Psychological & Verbal' | 'Exploration & Play';
  label: string;
}

export const CATEGORY_TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    'All Categories': 'All Categories',
    'Power Exchange': 'Power Exchange',
    'Physical & Sensation': 'Physical & Sensation',
    'Psychological & Verbal': 'Psychological & Verbal',
    'Exploration & Play': 'Exploration & Play'
  },
  es: {
    'All Categories': 'Todas las Categorías',
    'Power Exchange': 'Intercambio de Poder',
    'Physical & Sensation': 'Físico y Sensaciones',
    'Psychological & Verbal': 'Psicológico y Verbal',
    'Exploration & Play': 'Exploración y Juego'
  },
  ja: {
    'All Categories': '全カテゴリー',
    'Power Exchange': 'パワーエクスチェンジ（主従）',
    'Physical & Sensation': '感覚・身体的刺激',
    'Psychological & Verbal': '心理的・言語的ダイナミクス',
    'Exploration & Play': '探索・ロールプレイ'
  },
  fr: {
    'All Categories': 'Toutes les Catégories',
    'Power Exchange': 'Échange de Pouvoir',
    'Physical & Sensation': 'Physique & Sensations',
    'Psychological & Verbal': 'Psychologique & Verbal',
    'Exploration & Play': 'Exploration & Jeu'
  },
  de: {
    'All Categories': 'Alle Kategorien',
    'Power Exchange': 'Machtaustausch',
    'Physical & Sensation': 'Körper & Empfindung',
    'Psychological & Verbal': 'Psychologisch & Verbal',
    'Exploration & Play': 'Erkundung & Spiel'
  },
  pt: {
    'All Categories': 'Todas as Categorias',
    'Power Exchange': 'Troca de Poder',
    'Physical & Sensation': 'Físico & Sensações',
    'Psychological & Verbal': 'Psicológico & Verbal',
    'Exploration & Play': 'Exploração & Jogo'
  },
  ko: {
    'All Categories': '전체 카테고리',
    'Power Exchange': '권력 교환 (주종 관계)',
    'Physical & Sensation': '신체적 감각 & 자극',
    'Psychological & Verbal': '심리적 & 언어적 역학',
    'Exploration & Play': '탐색 & 역할극'
  },
  it: {
    'All Categories': 'Tutte le Categorie',
    'Power Exchange': 'Scambio di Potere',
    'Physical & Sensation': 'Fisico & Sensazioni',
    'Psychological & Verbal': 'Psicologico & Verbale',
    'Exploration & Play': 'Esplorazione & Gioco'
  }
};

export interface LocalizedDimensionData {
  name: string;
  shortDescription: string;
  fullDescription: string;
  characteristics: string[];
  communicationTips: string;
}

// Translations per language for each dimension
export const DIMENSION_TRANSLATIONS: Record<SupportedLanguage, Record<string, LocalizedDimensionData>> = {
  en: Object.entries(BASE_DIMENSIONS).reduce((acc, [id, dim]) => {
    acc[id] = {
      name: dim.name,
      shortDescription: dim.shortDescription,
      fullDescription: dim.fullDescription,
      characteristics: dim.characteristics,
      communicationTips: dim.communicationTips
    };
    return acc;
  }, {} as Record<string, LocalizedDimensionData>),

  es: {
    dominant: {
      name: 'Dominante',
      shortDescription: 'Asume naturalmente el liderazgo, el control y la toma de decisiones durante la intimidad.',
      fullDescription: 'Los dominantes disfrutan guiando el ritmo, estableciendo límites y manteniendo el control en las escenas o relaciones. Un dominante saludable equilibra la autoridad con la empatía, garantizando la seguridad y la gratificación mutua.',
      characteristics: [
        'Disfruta tomando la iniciativa y dirigiendo la dinámica íntima',
        'Encuentra placer en que la pareja ceda el control voluntariamente',
        'Valora los límites claros, la confianza y la autoridad responsable',
        'Atento/a a las respuestas emocionales y el bienestar de su pareja'
      ],
      communicationTips: 'Enfócate en la negociación previa, órdenes claras y un chequeo constante durante el aftercare.'
    },
    submissive: {
      name: 'Sumiso / Sumisa',
      shortDescription: 'Encuentra calma, excitación y plenitud erótica al ceder el control a una pareja de confianza.',
      fullDescription: 'Los sumisos encuentran una profunda satisfacción al entregarse a alguien en quien confían plenamente. Liberarse de la carga de decidir genera un desahogo emocional y eleva las sensaciones placenteras.',
      characteristics: [
        'Encuentra relajación o excitación al seguir instrucciones y complacer',
        'Valora profundamente la confianza, la seguridad emocional y los límites firmes',
        'Desea ser guiado/a o liderado/a por una pareja segura',
        'Vive la vulnerabilidad como una fuente de conexión y entrega'
      ],
      communicationTips: 'Establece claramente tus límites duros y suaves de antemano; usa tu palabra clave sin dudar.'
    },
    switch: {
      name: 'Switch (Versátil)',
      shortDescription: 'Disfruta de forma fluida tanto de liderar como de someterse, según el momento o la pareja.',
      fullDescription: 'Los switches no encajan en una única etiqueta fija. Pueden asumir el mando en ciertas situaciones y ser completamente receptivos en otras. Esta versatilidad les otorga una gran empatía hacia ambos lados del intercambio de poder.',
      characteristics: [
        'Disfruta tanto de ejercer el control como de entregarlo',
        'Se adapta con facilidad a parejas con distintas dinámicas y energías',
        'Comprende a fondo los procesos emocionales de dominar y de rendirse',
        'Aprecia el juego recíproco y por capas'
      ],
      communicationTips: 'Comunica tu estado mental actual antes de cada sesión, ya que tu preferencia puede variar.'
    },
    master_mistress: {
      name: 'Amo / Ama (Master / Mistress)',
      shortDescription: 'Busca una jerarquía estructurada, lealtad y autoridad continua más allá del dormitorio.',
      fullDescription: 'Representa una vertiente formal de la dominación, caracterizada por protocolos, disciplina y a menudo una dinámica de vida (24/7 o estructurada). Se basa en la devoción mutua y el cuidado responsable.',
      characteristics: [
        'Aprecia los rituales formales, normas claras y etiquetas de conducta',
        'Asume la responsabilidad del bienestar integral de su pareja sumisa',
        'Valora la obediencia motivada por el respeto mutuo',
        'Prefiere relaciones jerárquicas estables y duraderas'
      ],
      communicationTips: 'Mantén revisiones periódicas fuera del rol para evaluar el funcionamiento de las reglas acordadas.'
    },
    slave: {
      name: 'Esclavo / Esclava',
      shortDescription: 'Desea una entrega profunda y devota, a menudo guiada por reglas y servicio continuo.',
      fullDescription: 'Una forma intensa de sumisión donde la persona encuentra realización en pertenecer a su amo/ama, sirviendo con lealtad y subordinando sus decisiones dentro de los límites pactados de manera consensuada.',
      characteristics: [
        'Encuentra paz en el servicio devoto y la rendición total de autonomía',
        'Florece bajo protocolos claros, tareas asignadas y disciplina',
        'Busca una pertenencia emocional y física profunda',
        'Exige niveles extraordinarios de confianza y consistencia'
      ],
      communicationTips: 'Ten siempre pactados canales de comunicación neutros para expresar inquietudes sin romper el protocolo.'
    },
    sadist: {
      name: 'Sádico / Sádica',
      shortDescription: 'Experimenta satisfacción o excitación al administrar sensaciones intensas o dolor consensuado.',
      fullDescription: 'El sadismo consensuado implica disfrutar provocando dolor físico controlado, agobio sensorial o catarsis emocional en una pareja que lo desea. La destreza técnica y la empatía son indispensables para garantizar una experiencia segura.',
      characteristics: [
        'Encuentra estímulo en las reacciones corporales y emocionales de la pareja',
        'Disfruta aplicando azotes, impacto, pinzas o cera caliente con precisión',
        'Monitorea meticulosamente la tolerancia y respiración de la pareja',
        'Mantiene una atención técnica impecable para evitar lesiones reales'
      ],
      communicationTips: 'Calibra previamente las herramientas y zonas del cuerpo; define señales numéricas de intensidad (1 al 10).'
    },
    masochist: {
      name: 'Masoquista',
      shortDescription: 'Encuentra placer, liberación mental y euforia física en recibir sensaciones intensas o dolor.',
      fullDescription: 'Los masoquistas transforman el estímulo doloroso en endorfinas, relajación profunda o trance emocional (subspace). El dolor físico actúa como un ancla para salir de la mente cotidiana y conectarse con el cuerpo.',
      characteristics: [
        'Experimenta placer o catarsis a través de sensaciones corporales intensas',
        'Alcanza estados de relajación profunda (subspace) inducidos por endorfinas',
        'Disfruta explorando y ampliando su umbral de tolerancia física',
        'Asocia el dolor consensuado con liberación emocional'
      ],
      communicationTips: 'Comunica el ritmo deseado y avisa cuando sientas que te acercas a tu límite de resistencia.'
    },
    rigger: {
      name: 'Rigger (Atador/a)',
      shortDescription: 'Le apasiona el arte de inmovilizar, atar y suspender a la pareja con cuerdas o ataduras.',
      fullDescription: 'El rigger combina precisión técnica, estética y control. El arte del bondage japonés (shibari/kinbaku) o de cuerdas occidentales requiere un conocimiento riguroso de anatomía, nudos y seguridad nerviosa y circulatoria.',
      characteristics: [
        'Fascinación por el tejido de cuerdas, los nudos y la estética visual',
        'Enfoque metódico en la inmovilización segura y la contención física',
        'Atento a la circulación, temperatura de extremidades y comodidad',
        'Disfruta del estado de vulnerabilidad que la cuerda produce en la pareja'
      ],
      communicationTips: 'Ten siempre tijeras de rescate a mano; revisa la circulación distal cada pocos minutos.'
    },
    rope_bunny: {
      name: 'Rope Bunny (Atado/a)',
      shortDescription: 'Ama ser atado/a, contenido/a o suspendido/a, alcanzando estados de meditación y entrega.',
      fullDescription: 'Disfruta de la sensación de inmovilidad, el abrazo de la cuerda sobre la piel y la imposibilidad de moverse. La restricción física permite un apagado mental profundo y una relajación sin responsabilidades.',
      characteristics: [
        'Encuentra calma y abandono al no poder moverse por cuenta propia',
        'Aprecia la presión uniforme de las ataduras sobre el cuerpo',
        'Confía plenamente en la habilidad técnica de quien le ata',
        'Sensible a estados de trance y desconexión meditativa'
      ],
      communicationTips: 'Informa inmediatamente de hormigueos o pérdida de sensibilidad en dedos o extremidades.'
    },
    primal_hunter: {
      name: 'Cazador / Depredador Primal',
      shortDescription: 'Canaliza instintos viscerales, persecución física, mordiscos y forcejeo lúdico.',
      fullDescription: 'El juego primal prescinde de protocolos elaborados para conectar con impulsos animales: perseguir, derribar, gruñir y forcejear de manera consentida pero intensa y visceral.',
      characteristics: [
        'Atracción por la lucha consentida, persecución y agarres firmes',
        'Uso de vocalizaciones instintivas, mordiscos suaves y contacto rudo',
        'Conexión con instintos primarios sin reglas complejas',
        'Gran despliegue de energía física y resistencia'
      ],
      communicationTips: 'Establece límites claros sobre zonas de agarre, mordiscos y el uso de safewords gestuales.'
    },
    primal_prey: {
      name: 'Presa Primal',
      shortDescription: 'Se excita con la adrenalina de huir, ser perseguido/a, capturado/a y dominado/a físicamente.',
      fullDescription: 'La presa primal disfruta del subidón de adrenalina que produce escapar, resistirse de forma pactada y finalmente ser atrapada y reducida por un depredador de confianza.',
      characteristics: [
        'Disfruta de la adrenalina de huir y luchar juguetonamente',
        'Encuentra excitación al ser vencida y contenida físicamente',
        'Le atrae el contacto corporal visceral y la intensidad física',
        'Vive la captura como una rendición emocional'
      ],
      communicationTips: 'Acuerda de antemano el espacio físico seguro y confirma la disponibilidad de aire en todo momento.'
    },
    degrader: {
      name: 'Degradador/a',
      shortDescription: 'Disfruta del juego psicológico de humillación consentida, lenguaje soez y desprecio fingido.',
      fullDescription: 'El degradador utiliza palabras, comparaciones o actos humillantes de forma consensuada para provocar una intensa reacción psicológica en la pareja que encuentra placer en ello.',
      characteristics: [
        'Habilidad verbal para formular humillaciones consentidas efectivas',
        'Uso deliberado del lenguaje despectivo o la desvalorización temporal',
        'Distinción absoluta entre la fantasía y el respeto real a la persona',
        'Compromiso firme con el aftercare emocional tras la sesión'
      ],
      communicationTips: 'Haz una lista estricta de palabras tabú que nunca deben cruzarse durante el juego.'
    },
    degradee: {
      name: 'Degradado/a (Receptor/a)',
      shortDescription: 'Encuentra excitación y alivio emocional al ser humillado/a o insultado/a consensuadamente.',
      fullDescription: 'Ser llamado con términos degradantes o reducido a un objeto dentro de un entorno seguro permite despojarse del orgullo y expectativas sociales, generando una catarsis emocional placentera.',
      characteristics: [
        'Excitación provocada por insultos eróticos consensuados o trato despectivo',
        'Alivio al renunciar a la dignidad social dentro de la escena',
        'Fuerte necesidad de reafirmación afectiva en el aftercare',
        'Sensibilidad a dinámicas de vergüenza consentida'
      ],
      communicationTips: 'Define con total claridad los insultos permitidos y aquellos que tocan traumas reales.'
    },
    praise_giver: {
      name: 'Dador/a de Elogios (Praise Giver)',
      shortDescription: 'Lidera o premia mediante palabras de aprobación, ternura, validación y aliento constante.',
      fullDescription: 'Opuesto a la degradación, el praise giver domina o acompaña a través del refuerzo positivo, reconociendo el esfuerzo, la belleza y la devoción de su pareja.',
      characteristics: [
        'Uso de palabras de afirmación amorosas ("buen chico/a", "lo haces perfecto")',
        'Liderazgo motivado por la empatía, el orgullo y la recompensa',
        'Crea un entorno de seguridad emocional cálido y estimulante',
        'Atento a reforzar la autoestima de la pareja'
      ],
      communicationTips: 'Pregunta a tu pareja qué frases exactas le generan mayor emoción y bienestar.'
    },
    praise_receiver: {
      name: 'Receptor/a de Elogios (Praise Receiver)',
      shortDescription: 'Florece al recibir aprobación verbal, palabras tiernas de reconocimiento y validación.',
      fullDescription: 'Se siente profundamente motivado/a y excitado/a cuando su esfuerzo o sumisión es reconocido con cariño sincero ("buena niña", "buen chico").',
      characteristics: [
        'Deseo profundo de agradar y ser felicitado/a por su desempeño',
        'Sensibilidad muy positiva a palabras dulces de confirmación',
        'Florece en dinámicas de ternura, paciencia y afecto verbal',
        'Vive el reconocimiento como una recompensa suprema'
      ],
      communicationTips: 'Comparte con tu pareja los apodos y frases que más te emocionan.'
    },
    caregiver: {
      name: 'Cuidador/a (Daddy / Mommy)',
      shortDescription: 'Ofrece una guía afectuosa, protectora y estructurada, brindando contención y cuidado tierno.',
      fullDescription: 'El caregiver ejerce una autoridad paternal o maternal consentida, centrada en el bienestar, los límites saludables, la escucha activa y la protección de su pareja.',
      characteristics: [
        'Instinto protector, paciente y comprensivo',
        'Establece límites con amor y benevolencia',
        'Proporciona consuelo emocional y rutinas tranquilizadoras',
        'Disfruta mimando y guiando a su pareja'
      ],
      communicationTips: 'Establece claramente la frontera entre el rol de cuidado consentido y la vida adulta compartida.'
    },
    pet_ageplay: {
      name: 'Petplay / Little (Mascota / Juego de Rol)',
      shortDescription: 'Adopta una mentalidad lúdica, despreocupada o de mascota para descansar de la vida adulta.',
      fullDescription: 'Esta dimensión abarca personas que disfrutan asumiendo roles de cachorros, gatitos o mentalidad lúdica infantil no sexual para evadir el estrés de la vida adulta y recibir afecto puro.',
      characteristics: [
        'Atracción por adoptar actitudes juguetonas de mascota o inocencia',
        'Descanso de las responsabilidades adultas y decisiones complejas',
        'Uso de accesorios lúdicos (orejas, colas, correas, mantas)',
        'Búsqueda de mimos, juegos simples y afecto incondicional'
      ],
      communicationTips: 'Define qué aspectos son estrictamente inocentes/lúdicos y cuáles se vinculan con el erotismo.'
    },
    voyeur_exhibitionist: {
      name: 'Voyeur / Exhibicionista',
      shortDescription: 'Encuentra placer visual en observar actos íntimos o en ser observado/a con consentimiento.',
      fullDescription: 'Esta dimensión engloba la excitación de exhibir el cuerpo o la intimidad ante miradas consentidas, así como el placer erótico derivado de contemplar a otros.',
      characteristics: [
        'Excitación al saberse observado/a por otros con consentimiento',
        'Placer en la contemplación visual de cuerpos o escenas eróticas',
        'Atracción por la desnudez compartida, espejos o sesiones fotográficas',
        'Respeto estricto por la privacidad de observadores no participantes'
      ],
      communicationTips: 'Asegura siempre el consentimiento explícito de terceros antes de cualquier práctica exhibicionista.'
    },
    sensory_explorer: {
      name: 'Explorador/a Sensorial',
      shortDescription: 'Investiga texturas, contrastes térmicos, privación sensorial y estímulos variados.',
      fullDescription: 'Centrado en los matices físicos más allá del dolor puro: antifaces, vendas, susurros, plumas, cera tibia, cubitos de hielo, electroestimulación suave o texturas de látex y seda.',
      characteristics: [
        'Gusto por vendas oculares, tapones y privación sensorial completa',
        'Exploración de contrastes de frío y calor (hielo, cera baja temperatura)',
        'Aprecia el tacto sutil, cosquilleos, masajes y texturas diversas',
        'Búsqueda de hiperestesia mediante la concentración sensorial'
      ],
      communicationTips: 'Prueba siempre la temperatura de la cera en tu propia muñeca antes de aplicarla sobre la pareja.'
    },
    vanilla: {
      name: 'Vainilla (Convencional)',
      shortDescription: 'Prefiere una intimidad afectuosa tradicional sin dinámicas de dominación, sumisión ni dolor.',
      fullDescription: 'Valora la igualdad simétrica, el romanticismo convencional y la cercanía emocional sin recurrir a roles de poder, ataduras ni sensaciones intensas.',
      characteristics: [
        'Preferencia por la reciprocidad afectiva y física simétrica',
        'Poco o nulo interés en dolor físico, restricciones o jerarquías',
        'Enfocado en la ternura, el romanticismo y el contacto mutuo directo',
        'Cómodo/a en dinámicas sexuales sin protocolos complejos'
      ],
      communicationTips: 'Sé honesto/a con tus límites si una pareja te propone prácticas que no resuenan contigo.'
    }
  },

  ja: {
    dominant: {
      name: 'ドミナント（支配・主導側）',
      shortDescription: '親密な関係において主導権を握り、指示やコントロールを行うことに喜びを感じるタイプ。',
      fullDescription: 'セッションや関係性においてリード役を務め、境界線を守りながら相手を導くことを好みます。健全なドミナントは、権威と相手への配慮・安全確認のバランスを常に保ちます。',
      characteristics: [
        '親密な場での流れを決め、自ら主導権を握ることを好む',
        '相手が自分に身を委ね、コントロールを譲ることに興奮を覚える',
        '明確なルール、自信、責任あるリーダーシップを重んじる',
        'パートナーの体調や感情の変化に細かく気を配る'
      ],
      communicationTips: '事前交渉、明確な指示、そしてセッション後の丁寧なアフターケアを大切にしましょう。'
    },
    submissive: {
      name: 'サブミッシブ（従属・委ね側）',
      shortDescription: '信頼する相手に主導権を委ね、従うことに安心感と興奮、深い充足感を抱くタイプ。',
      fullDescription: '深く信頼する相手にコントロールを明け渡すことで、日々の判断の重圧から解放され、感情的な癒やしと強い快感を得ることができます。',
      characteristics: [
        '指示に従い、相手を喜ばせることに安らぎや興奮を覚える',
        '信頼関係、心理的安全性、明確な境界線を何より大切にする',
        '頼れる相手に導かれ、支配されたいという願望を持つ',
        '無防備になる（弱みを見せる）ことを繋がりとして感じる'
      ],
      communicationTips: '絶対にNGな限界（ハードリミット）を事前に伝え、セーフワードを躊躇なく使えるようにしましょう。'
    },
    switch: {
      name: 'スイッチ（両刀・可変）',
      shortDescription: '気分や相手、状況に応じて、支配側と従属側の両方を流動的に楽しむタイプ。',
      fullDescription: '固定的な役割にとらわれず、ある時は主導的に相手をリードし、ある時は完全に相手に委ねます。両方の心理を深く理解できる共感性の高さが特徴です。',
      characteristics: [
        '主導権を握ることも、手放して委ねることも両方好む',
        '相手の特性やエネルギーに合わせて柔軟に役割を変えられる',
        '攻め（トップ）と受け（ボトム）両方の心理を実感として理解できる',
        '双方向で多層的なプレイを楽しむ'
      ],
      communicationTips: 'その日の気分がどちら寄りか（攻めたいか・委ねたいか）をセッション前に共有しましょう。'
    },
    master_mistress: {
      name: 'マスター / ミストレス（主人・指導者）',
      shortDescription: '寝室に留まらず、礼儀や規律、継続的な主従関係と責任ある庇護を重視するタイプ。',
      fullDescription: '主従関係のフォーマルな形態であり、プロトコル（作法）、規律、そして継続的な生活の枠組みを大切にします。相互の敬意と絶対的な責任感が伴います。',
      characteristics: [
        '正式な作法、礼儀、明確な規律を重んじる',
        '従属側の生活や精神的な健康全般に責任を持つ',
        '恐怖ではなく、敬意に基づいた服従を求める',
        '長期的で安定した階層関係を好む'
      ],
      communicationTips: '役割から離れた「通常モード」の話し合いを定期的に行い、ルールの見直しをしましょう。'
    },
    slave: {
      name: 'スレイブ（隷属・奉仕者）',
      shortDescription: '自己の決定権を委ね、主人のために尽くし、完全な帰属に深い平穏を見出すタイプ。',
      fullDescription: '自発的な合意のもとで主人の所有となり、規律や奉仕を通じて自己を捧げることに至上の喜びを感じる深い服従の形態です。',
      characteristics: [
        '奉仕すること、自己の決定権を手放すことに平穏を覚える',
        '明確な作法、課された義務、規律のなかで輝く',
        '心身ともに深く「誰かのもの」でありたいと望む',
        '主人に対する極めて高い信頼と誠実さを必要とする'
      ],
      communicationTips: 'プロトコル外で不調や懸念を率直に伝えられる非常用連絡手段を決めておきましょう。'
    },
    sadist: {
      name: 'サディスト（加虐・刺激供与）',
      shortDescription: '合意に基づき、パートナーに強い感覚刺激や痛みを与え、その反応を引き出すことに興奮するタイプ。',
      fullDescription: '相手が望む範囲で計算された痛みや強い感覚、感情の揺らぎを与え、カタルシスを共に味わいます。技術の習得と相手への深い観察力が不可欠です。',
      characteristics: [
        '相手の身体反応や表情、声に強い刺激・興奮を覚える',
        'スパンキング、緊縛、ピンチ、蝋燭などを正確に使いこなす',
        '相手の呼吸や痛みの許容限界を常に細かく観察する',
        '怪我を防ぐための技術と解剖学的知識に敬意を払う'
      ],
      communicationTips: '道具や部位ごとの許容度を確認し、痛みの強さを1〜10などの数値で報告してもらいましょう。'
    },
    masochist: {
      name: 'マゾヒスト（被虐・感覚受容）',
      shortDescription: '合意された痛みや強い刺激を受けることで、脳内物質の分泌や忘我の快楽を得るタイプ。',
      fullDescription: '痛みを快感、精神的解放、エンドルフィンによる陶酔状態（サブスペース）へと変換します。身体的な刺激によって雑念から解放される体験を好みます。',
      characteristics: [
        '強い身体刺激を通じて深い快感や感情の解放を経験する',
        'エンドルフィンによる心地よい陶酔感（サブスペース）に入る',
        '自分の限界値を探求し、乗り越えるプロセスを楽しむ',
        '合意された痛みを精神的な浄化（デトックス）と感じる'
      ],
      communicationTips: '刺激のペースを相手に伝え、限界（ドロップ）が近づいたら無理せず合図を出しましょう。'
    },
    rigger: {
      name: 'リガー（縛り手・縄師）',
      shortDescription: '縄を用いて相手を拘束・緊縛・吊り上げ、美しさと身体的拘束を追求する技術者。',
      fullDescription: '日本の緊縛（柴里）や西洋のロープワークに基づき、幾何学的な美しさ、安全管理、解剖学的知識を融合させて相手の身体と心を拘束します。',
      characteristics: [
        '縄の結び方、テンション、視覚的な美しさに情熱を注ぐ',
        '安全な固定と、相手の自由を奪うことに主眼を置く',
        '血流、四肢の体温、神経圧迫のリスクを常に監視する',
        '縄の中で相手が無防備になっていく様子に喜びを感じる'
      ],
      communicationTips: '必ず救助用安全ハサミを手元に置き、数分ごとに指先の感覚と血色を確認しましょう。'
    },
    rope_bunny: {
      name: 'ロープバニー（受け手・被縛者）',
      shortDescription: '縄で拘束・吊られることで、完全な無力感と瞑想的なリラクゼーションに浸るタイプ。',
      fullDescription: '身動きが取れなくなる感覚、皮膚にかかる縄の均一な圧力を愛し、思考を完全に停止させてリガーに身を委ねます。',
      characteristics: [
        '自分で動けない状態に安心感と深い放棄感を覚える',
        '縄が身体を包み込む心地よい圧力とフィット感を好む',
        '縛り手の技術と判断力に全幅の信頼を置く',
        '日常のプレッシャーから切り離され、瞑想的なトランスに入る'
      ],
      communicationTips: '指先や足先に痺れや冷えを感じたら、我慢せず直ちにリガーへ伝えましょう。'
    },
    primal_hunter: {
      name: 'プライマル・ハンター（野性・捕食者）',
      shortDescription: '本能的な衝動、追いかけっこ、格闘、甘噛みなどの野性的なスキンシップを好むタイプ。',
      fullDescription: '形式的なルールよりも、動物的な直感やレスリングのような力比べ、獲物を追い詰めて捕獲するスリルを重視します。',
      characteristics: [
        '合意の上での取っ組み合い、力比べ、強いホールドを好む',
        '声による威嚇、甘噛み、荒々しいスキンシップに興奮する',
        '複雑な儀礼よりも、純粋な野生の本能を重視する',
        '高い運動量とダイナミックな触れ合いを楽しむ'
      ],
      communicationTips: '噛んでいい強さや掴んでいい部位を事前に決め、ジェスチャーによるセーフサインを用意しましょう。'
    },
    primal_prey: {
      name: 'プライマル・プレイ（獲物・逃走者）',
      shortDescription: '逃げるアドレナリン、追いかけられて捕まるスリル、力で制圧されることに興奮するタイプ。',
      fullDescription: '捕食者から逃げ回り、必死に抵抗し、最終的に捕らえられて力で圧倒されるという野生的なドラマに快感を覚えます。',
      characteristics: [
        '逃げること、じゃれ合いながら抵抗することにアドレナリンを感じる',
        '力で制圧され、抱え込まれることに強い安心感と興奮を得る',
        '身体と身体がぶつかり合う熱い接触を好む',
        '捕獲されることを「究極の降伏」として楽しむ'
      ],
      communicationTips: '安全なスペースを確保し、息苦しくならないよう顔や首への圧迫に注意しましょう。'
    },
    degrader: {
      name: 'デグレーダー（侮辱・言葉攻め）',
      shortDescription: '合意の上で、相手を言葉で辱めたり軽蔑的な態度を取ることで心理的な刺激を与えるタイプ。',
      fullDescription: '汚い言葉や屈辱的なシチュエーションを意図的に演出し、相手のプライドを揺さぶることで背徳感やエロティシズムを引き出します。',
      characteristics: [
        '相手の琴線に触れる言葉攻めや侮辱のボキャブラリーを持つ',
        '軽蔑や支配的な態度を巧みに演じ分ける',
        'ファンタジーとしての演技と、本物の人間的敬意を厳格に区別できる',
        'セッション後の精神的なアフターケアを極めて大切にする'
      ],
      communicationTips: '過去のトラウマに触れるNGワード（使ってはいけない言葉）を厳格に決めておきましょう。'
    },
    degradee: {
      name: 'デグレーディ（被侮辱・屈辱受容）',
      shortDescription: '言葉で罵られたり、屈辱的な扱いを合意の上で受けることで強い興奮と解放感を抱くタイプ。',
      fullDescription: '普段のプライドや社会的立場を脱ぎ捨て、「価値のない存在」として扱われることで、常識から解放された独特のカタルシスを体験します。',
      characteristics: [
        '性的な侮辱や軽蔑される言葉に強い興奮を覚える',
        'プライドを完全に捨てることで深い解放感を得る',
        'セッション後の愛情あるフォロー（アフターケア）を強く必要とする',
        '羞恥心とエロティシズムが強く結びついている'
      ],
      communicationTips: '興奮する罵倒表現と、本当に傷つくトラウマ表現の違いを明確に伝えましょう。'
    },
    praise_giver: {
      name: 'プレイズ・ギバー（褒め・肯定主導）',
      shortDescription: '愛情あふれる称賛や肯定の言葉（「いい子だね」等）で相手を導き、育てる支配タイプ。',
      fullDescription: '侮辱とは対照的に、相手の努力や従順さをポジティブに認め、安心感と自己肯定感を与えながら関係性をリードします。',
      characteristics: [
        '「いい子」「よくできたね」といった肯定・承認の言葉を多用する',
        '相手を誇らしく思い、報酬と愛情でリードする',
        '温かく肯定的な心理的安全空間を作り出す',
        '相手の自己肯定感を高めることに喜びを感じる'
      ],
      communicationTips: 'どのような褒め言葉が一番心に響くか、事前に相手にヒアリングしましょう。'
    },
    praise_receiver: {
      name: 'プレイズ・レシーバー（褒め受容・承認欲求）',
      shortDescription: 'パートナーからの温かい称賛、承認、優しい声かけを受けることで最も意欲が高まるタイプ。',
      fullDescription: '相手に喜んでもらいたいという純粋な気持ちを持ち、褒められること（「賢いね」「可愛いね」）で満たされ、さらに尽くしたくなります。',
      characteristics: [
        'パートナーを喜ばせ、認められたいという強い願望',
        '優しい肯定の言葉や頭を撫でられることに強い幸福感を感じる',
        '厳しさよりも優しさと安心感のある環境で心を開く',
        '称賛されることを最大の報酬と感じる'
      ],
      communicationTips: '言われて一番嬉しい呼び名や褒めフレーズをパートナーに伝えておきましょう。'
    },
    caregiver: {
      name: 'ケアギバー（保護者・ダディ/マミィ）',
      shortDescription: '親のような温かい保護心、包容力、健全なルールを持ってパートナーを世話し見守るタイプ。',
      fullDescription: '甘えたい相手に対し、安全な環境、健康管理、優しいルールを提供し、親や保護者のような無条件の受容と保護を行います。',
      characteristics: [
        '保護的で忍耐強く、面倒見が良い',
        '愛情を持って健全な境界線やルールを設定する',
        '精神的な安心感と穏やかな日常のルーティンを提供する',
        'パートナーを甘やかし、見守ることに幸福を感じる'
      ],
      communicationTips: 'ごっこ遊び（プレイ）としての保護者役と、対等な大人同士の現実生活の境界を明確にしましょう。'
    },
    pet_ageplay: {
      name: 'ペットプレイ / リトル（甘え・役割退行）',
      shortDescription: 'ペット（犬や猫）や無邪気な子どもの役割を取り、日常の責任から解放されて甘えるタイプ。',
      fullDescription: '成人の重い責任やストレスを脱ぎ捨て、首輪をつけて可愛がられたり、無邪気に甘えることで、純粋な癒やしと無条件の愛を受け取ります。',
      characteristics: [
        '犬や猫のような仕草や、無邪気で子どもっぽい甘え方を好む',
        '大人としての決断やストレスから完全に解放されたい願望',
        '耳やしっぽ、首輪、ぬいぐるみなどの小物を楽しむ',
        '純粋な愛情、抱擁、無条件の可愛がりを求める'
      ],
      communicationTips: '性的な要素を含めるのか、純粋な癒やし・退行プレイとするのかを明確に分けておきましょう。'
    },
    voyeur_exhibitionist: {
      name: 'ボイヤー / エキシビショニスト（視覚的嗜好）',
      shortDescription: '他者の親密な行為を合意の上で眺めること、または見られることに性的興奮を覚えるタイプ。',
      fullDescription: '身体やプレイを見られることによる背徳感や高揚感、あるいは他者の美しい姿や行為を鑑賞することによる視覚的快楽を楽しみます。',
      characteristics: [
        '見られているという状況に強い興奮を感じる（露出・見せびらかし）',
        '他者の身体やセッションをじっくり鑑賞することに快感を得る（鑑賞）',
        '鏡、写真、動画、露出度の高い衣装などを好む',
        '合意のない第三者を巻き込まない絶対的なマナーと倫理観を持つ'
      ],
      communicationTips: '第三者が関わる場合は、全員の明確な事前合意があることを必ず徹底してください。'
    },
    sensory_explorer: {
      name: 'センサリー・エクスプローラー（感覚探求）',
      shortDescription: '目隠し、温度差（氷・低温蝋燭）、羽、電気など、多彩な身体感覚を探求するタイプ。',
      fullDescription: '激しい痛みではなく、感覚の鋭敏化や質感の違いを楽しみます。視覚を遮断された状態での未知の触覚刺激や、極端な温度差に没頭します。',
      characteristics: [
        'アイマスクや耳栓を用いた感覚遮断（ブラインドフォールド）を好む',
        '氷や低温蝋燭による温冷のギャップや刺激を楽しむ',
        '羽、革、絹、ピンホイールなどの質感の探求',
        '感覚が研ぎ澄まされるトランス状態を味わう'
      ],
      communicationTips: '蝋燭を使用する際は、必ず自身の腕で温度を確かめてから相手に使用してください。'
    },
    vanilla: {
      name: 'ヴァニラ（一般的・ノーマル嗜好）',
      shortDescription: '主従関係や身体的拘束、痛みを伴わない、対等で伝統的なロマンチックな愛を好むタイプ。',
      fullDescription: '権力の偏りや特殊な道具を使わず、対等なパートナーシップ、優しいスキンシップ、自然体の愛情表現を何より大切にします。',
      characteristics: [
        '対等で平等な関係性とお互いのスキンシップを大切にする',
        '痛み、拘束、役割分担（攻め・受け）に興味がない、または苦手',
        'ロマンチックで温かい感情の交流を好む',
        '複雑な儀礼やルールを必要としない自然な関係を好む'
      ],
      communicationTips: '自分にとって無理のある提案をされた時は、曖昧にせず正直に気持ちを伝えましょう。'
    }
  },

  fr: {
    dominant: {
      name: 'Dominant(e)',
      shortDescription: 'Prend naturellement les rênes, guide le rythme et assume les décisions dans l’intimité.',
      fullDescription: 'Les dominants aiment fixer le cadre, rythmer les scènes et tenir le contrôle. Un dominant équilibré allie autorité sereine, écoute attentive et bienveillance.',
      characteristics: [
        'Aime prendre l’initiative et diriger la dynamique intime',
        'Prend plaisir à voir un(e) partenaire lâcher prise volontairement',
        'Privilégie des limites nettes, l’assurance et la responsabilité',
        'Attentif(ve) au ressenti émotionnel et à la sécurité de l’autre'
      ],
      communicationTips: 'Misez sur la négociation préalable, des consignes claires et un aftercare attentionné.'
    },
    submissive: {
      name: 'Soumis(e)',
      shortDescription: 'Trouve apaisement, excitation et épanouissement en remettant le contrôle à un(e) partenaire de confiance.',
      fullDescription: 'Les soumis(es) s’épanouissent lorsqu’ils s’abandonnent à une personne digne de confiance. Déposer le fardeau des choix quotidiens procure un soulagement profond.',
      characteristics: [
        'Trouve le calme ou l’excitation dans l’obéissance consentie',
        'Accorde une valeur immense à la confiance et à la sécurité affective',
        'Désire être guidé(e) ou dirigé(e) par une présence rassurante',
        'Vit la vulnérabilité comme une source de connexion intime'
      ],
      communicationTips: 'Établissez fermement vos limites (hard/soft limits) et utilisez votre safeword sans retenue.'
    },
    switch: {
      name: 'Switch (Polyvalent)',
      shortDescription: 'Apprécie alternativement de diriger et d’obéir selon l’humeur, la dynamique ou le partenaire.',
      fullDescription: 'Les switches ne se confinent pas à un rôle figé. Ils peuvent être directifs dans un contexte et totalement réceptifs dans un autre, offrant une grande empathie.',
      characteristics: [
        'Prend plaisir à détenir l’autorité autant qu’à s’abandonner',
        'S’adapte avec aisance aux partenaires aux profils variés',
        'Comprend intimement les enjeux du dessus (top) et du dessous (bottom)',
        'Apprécie les dynamiques relationnelles riches et modulables'
      ],
      communicationTips: 'Précisez votre disposition d’esprit (headspace) avant chaque séance.'
    },
    master_mistress: {
      name: 'Maître / Maîtresse (Master / Mistress)',
      shortDescription: 'Recherche une autorité formelle, une discipline continue et un dévouement qui dépasse le lit.',
      fullDescription: 'Une expression codifiée de la domination reposant sur des protocoles, des rituels et une prise en charge globale du ou de la partenaire, dans le respect mutuel.',
      characteristics: [
        'Valorise l’étiquette, les rituels et les règles précises',
        'Assume la responsabilité du bien-être global de la personne soumise',
        'Recherche une loyauté fondée sur l’estime et non la contrainte',
        'Privilégie les relations hiérarchiques structurées et durables'
      ],
      communicationTips: 'Planifiez des points d’étape hors-rôle réguliers pour ajuster les règles établies.'
    },
    slave: {
      name: 'Esclave',
      shortDescription: 'Aspire à un don de soi absolu et à une appartenance consentie guidée par le service et les règles.',
      fullDescription: 'Une forme poussée de soumission où la personne trouve sa plénitude dans le dévouement envers son maître/sa maîtresse au sein d’un cadre strictement consenti.',
      characteristics: [
        'Trouve la sérénité dans le service et le renoncement aux décisions',
        'S’épanouit dans des protocoles précis et une discipline exigeante',
        'Recherche un sentiment profond d’appartenance consentie',
        'Nécessite un niveau de confiance et de constance exceptionnel'
      ],
      communicationTips: 'Prévoyez un canal d’échange neutre pour exprimer un malaise sans enfreindre le protocole.'
    },
    sadist: {
      name: 'Sadique',
      shortDescription: 'Prend plaisir à dispenser des sensations intenses ou de la douleur consentie pour susciter des réactions.',
      fullDescription: 'Le sadisme consensuel consiste à provoquer une stimulation physique soutenue ou une catharsis émotionnelle chez un(e) partenaire qui la recherche délibérément.',
      characteristics: [
        'Stimulé(e) par les expressions corporelles et émotionnelles de l’autre',
        'Applique fessées, pinces, impact ou cire chaude avec précision',
        'Observe continuellement le souffle et les réactions physiologiques',
        'Fait preuve d’une maîtrise technique rigoureuse pour éviter toute blessure'
      ],
      communicationTips: 'Calibrez les outils au préalable ; instaurez une échelle d’intensité chiffrée (de 1 à 10).'
    },
    masochist: {
      name: 'Masochiste',
      shortDescription: 'Trouve de la volupté, un lâcher-prise mental et de l’euphorie dans la douleur consentie.',
      fullDescription: 'Les masochistes transforment les sensations physiques intenses en endorphines et en état second (subspace), permettant une déconnexion des tensions quotidiennes.',
      characteristics: [
        'Ressent du plaisir ou une catharsis à travers des sensations vives',
        'Atteint une détente profonde grâce aux endorphines libérées',
        'Aime explorer et repousser ses seuils d’endurance corporelle',
        'Associe la douleur consentie à une libération mentale'
      ],
      communicationTips: 'Signalez le rythme souhaité et prévenez dès que vous approchez de votre seuil critique.'
    },
    rigger: {
      name: 'Rigger (Attacheur / Cordiste)',
      shortDescription: 'Passionné(e) par l’art de lier, restreindre et suspendre un(e) partenaire au moyen de cordes.',
      fullDescription: 'Le rigger allie esthétique, géométrie et maîtrise anatomique pour envelopper et immobiliser le corps de l’autre avec sécurité.',
      characteristics: [
        'Fascination pour les motifs de cordes, les tensions et l’esthétique',
        'Approche méticuleuse de l’immobilisation et de la sécurité nerveuse',
        'Vérifie constamment la circulation sanguine et la température des extrémités',
        'Prend plaisir à voir l’autre s’abandonner complètement dans les cordes'
      ],
      communicationTips: 'Gardez toujours des ciseaux de sécurité à portée de main ; contrôlez les extrémités.'
    },
    rope_bunny: {
      name: 'Rope Bunny (Attaché(e))',
      shortDescription: 'Adore être lié(e), contenu(e) ou suspendu(e), accédant à un état de méditation et d’abandon complet.',
      fullDescription: 'Apprécie l’étreinte des cordes, la pression corporelle uniforme et l’incapacité totale de bouger, offrant un repos cérébral absolu.',
      characteristics: [
        'Trouve le calme dans l’impossibilité physique de se mouvoir',
        'Aime la sensation enveloppante des cordes sur l’épiderme',
        'Accorde une confiance totale aux compétences du rigger',
        'Sujet(te) aux états de transe et de flottement méditatif'
      ],
      communicationTips: 'Indiquez immédiatement tout fourmillement ou engourdissement dans les doigts ou orteils.'
    },
    primal_hunter: {
      name: 'Chasseur / Prédateur Primal',
      shortDescription: 'Canalise des instincts bruts : poursuite, lutte complice, morsures douces et empoignades.',
      fullDescription: 'Le jeu primal délaisse les étiquettes pour renouer avec l’instinct animal : traquer, plaquer au sol et lutter dans un corps-à-corps intense et consenti.',
      characteristics: [
        'Attirance pour la lutte consentie et les prises fermes',
        'Usage d’expressions instinctives, de morsures mesurées et de force',
        'Connexion à des réflexes viscéraux sans formalisme pesant',
        'Dépense d’énergie physique et intensité motrice'
      ],
      communicationTips: 'Définissez les zones de prise et de morsure autorisées, et convenez d’un safeword gestuel.'
    },
    primal_prey: {
      name: 'Proie Primale',
      shortDescription: 'Stimulé(e) par l’adrénaline de fuir, d’être pourchassé(e), capturé(e) et maîtrisé(e) physiquement.',
      fullDescription: 'La proie primale savoure la montée d’adrénaline procurée par la fuite, la résistance de jeu, et l’issue où elle se fait rattraper et dominer physiquement.',
      characteristics: [
        'Exaltation dans la course, la feinte et la fuite complice',
        'Soulagement excité au moment d’être immobilisé(e) et vaincu(e)',
        'Recherche le contact corporel fougueux et direct',
        'Vit la capture comme une reddition physique libératrice'
      ],
      communicationTips: 'Sécurisez l’espace de jeu et veillez à ne jamais entraver les voies respiratoires.'
    },
    degrader: {
      name: 'Dégradateur/trice',
      shortDescription: 'Utilise la provocation verbale, l’humiliation consentie et les termes crus pour susciter le trouble.',
      fullDescription: 'Fait usage de mots crus ou d’attitudes dédaigneuses convenues d’avance pour procurer à l’autre un vertige psychologique transgressif.',
      characteristics: [
        'Aisance verbale pour formuler des piques humiliantes adaptées',
        'Maîtrise du mépris théâtral au service de l’érotisme',
        'Scission absolue entre le fantasme incarné et l’estime réelle',
        'Engagement scrupuleux envers le réconfort affectif post-séance'
      ],
      communicationTips: 'Établissez une liste formelle de mots strictement proscrits touchant aux vrais traumatismes.'
    },
    degradee: {
      name: 'Dégradé(e)',
      shortDescription: 'Trouve de l’excitation et un soulagement intime à être rabaissé(e) ou insulté(e) de manière consentie.',
      fullDescription: 'Se dépouiller temporairement de son statut et de sa dignité sociale procure une décharge mentale et un sentiment de vulnérabilité érotique intense.',
      characteristics: [
        'Trouble érotique déclenché par des qualificatifs crus et méprisants',
        'Soulagement à déposer toute fierté dans l’intimité protégée',
        'Grand besoin de bienveillance et de réassurance après la scène',
        'Lien étroit entre sentiment de honte consentie et désir'
      ],
      communicationTips: 'Déterminez précisément les insultes excitantes et celles qui réveillent des blessures réelles.'
    },
    praise_giver: {
      name: 'Donneur/se d’Éloges (Praise Giver)',
      shortDescription: 'Guide et valorise par des compliments sincères, de la tendresse et des encouragements bienveillants.',
      fullDescription: 'À l’opposé de la dégradation, le praise giver encadre et stimule par le renforcement positif (« c’est bien », « tu es parfait(e) »), créant un cocon d’épanouissement.',
      characteristics: [
        'Utilisation généreuse de marques de reconnaissance vocales',
        'Autorité bienveillante nourrie de fierté pour l’autre',
        'Instaure une bulle de confiance et de douceur stimulante',
        'Sensible au rayonnement et au confort affectif de l’autre'
      ],
      communicationTips: 'Demandez à votre partenaire quelles tournures précises réchauffent le plus son cœur.'
    },
    praise_receiver: {
      name: 'Receveur/se d’Éloges (Praise Receiver)',
      shortDescription: 'S’épanouit pleinement lorsqu’il/elle reçoit validation, mots doux et compliments affectueux.',
      fullDescription: 'Profondément motivé(e) par le désir de bien faire, cette personne trouve dans les compliments (« bonne fille », « bon garçon ») une source puissante de plaisir et d’apaisement.',
      characteristics: [
        'Désir profond de satisfaire et de se sentir approuvé(e)',
        'Forte réceptivité aux mots tendres et aux marques de fierté',
        'S’épanouit dans une ambiance sécurisante et encourageante',
        'Considère la reconnaissance comme la récompense suprême'
      ],
      communicationTips: 'Exprimez clairement les petits surnoms et compliments qui vous transportent le plus.'
    },
    caregiver: {
      name: 'Protecteur/trice (Caregiver / Daddy / Mommy)',
      shortDescription: 'Offre une présence enveloppante, bienveillante et protectrice, posant des repères rassurants.',
      fullDescription: 'Incarne une autorité douce et protectrice, attentive aux besoins fondamentaux de l’autre, offrant réconfort, écoute et structure chaleureuse.',
      characteristics: [
        'Tempérament attentionné, protecteur et patient',
        'Fixe des repères avec amour et calme',
        'Apporte un soutien émotionnel constant et réconfortant',
        'Aime dorloter, guider et préserver son/sa partenaire'
      ],
      communicationTips: 'Séparez distinctement le jeu protecteur consenti de la gestion de votre vie commune d’adultes.'
    },
    pet_ageplay: {
      name: 'Petplay / Régressif (Pet / Little)',
      shortDescription: 'Adopte une posture espiègle, candide ou animale pour s’extraire du stress des responsabilités adultes.',
      fullDescription: 'Permet de mettre sur pause les exigences de la vie adulte en incarnant un petit animal affectueux ou un tempérament enfantin innocent, en quête de câlins purs.',
      characteristics: [
        'Goût pour des attitudes joueuses (chaton, chiot) ou régressives',
        'Échappatoire salutaire aux obligations et décisions lourdes',
        'Apprécie les accessoires doux (oreilles, colliers, peluches)',
        'Recherche de caresses, de complicité simple et d’affection brute'
      ],
      communicationTips: 'Précisez si la dynamique est strictement affective et platonique ou si elle s’articule à l’érotisme.'
    },
    voyeur_exhibitionist: {
      name: 'Voyeur / Exhibitionniste',
      shortDescription: 'Excite ses sens par le regard : observer des ébats consentis ou être regardé(e) dans son intimité.',
      fullDescription: 'Englobe la sensualité du regard, qu’il s’agisse du frisson de dévoiler son corps devant un public complice ou de contempler avec délectation la beauté d’autrui.',
      characteristics: [
        'Frisson érotique à être vu(e) et admiré(e) avec accord',
        'Plaisir visuel intense à observer les corps et les ébats d’autrui',
        'Sensibilité aux miroirs, tenues révélatrices et photographies',
        'Respect scrupuleux du consentement absolu de toute personne présente'
      ],
      communicationTips: 'Ne pratiquez jamais en présence de tiers sans leur accord formel préalable.'
    },
    sensory_explorer: {
      name: 'Explorateur/trice Sensoriel(le)',
      shortDescription: 'Explore les contrastes thermiques, textures tactiles, sons et privations sensorielles diverses.',
      fullDescription: 'Se concentre sur le spectre des sensations au-delà de la douleur : bandeaux occultants, plumes, cire tiède, glaçons, stimulation douce et matières sensuelles.',
      characteristics: [
        'Prédilection pour l’obscurité des bandeaux et l’ouïe isolée',
        'Recherche les contrastes thermiques marqués (froid de la glace, tiédeur de la cire)',
        'Apprécie la variété des touchers, effleurements et textures',
        'Atteint une hypersensibilité par concentration sur un sens unique'
      ],
      communicationTips: 'Vérifiez toujours la température de la cire sur l’intérieur de votre poignet avant application.'
    },
    vanilla: {
      name: 'Vanilla (Classique)',
      shortDescription: 'Privilégie une intimité complice et symétrique sans jeux de pouvoir, contrainte ni douleur.',
      fullDescription: 'Accorde la priorité à la réciprocité spontanée, à la douceur affective et au romantisme, sans recourir aux rôles hiérarchiques ni aux accessoires intenses.',
      characteristics: [
        'Valorise l’égalité parfaite et l’échange tendre et équilibré',
        'Désintérêt pour la douleur corporelle, les cordes ou la soumission',
        'Centré(e) sur l’émotion partagée et la spontanéité sensuelle',
        'Très à l’aise dans une sexualité dépourvue de codes complexes'
      ],
      communicationTips: 'Exprimez vos limites avec sérénité dès qu’une proposition ne correspond pas à vos envies.'
    }
  },

  // Remaining languages (de, pt, ko, it) will receive native structured translations
  de: {
    dominant: {
      name: 'Dominant',
      shortDescription: 'Übernimmt auf natürliche Weise Führung, Kontrolle und Entscheidungen während der Intimität.',
      fullDescription: 'Dominante leiten das Geschehen, setzen Grenzen und führen die Dynamik an. Ein gesunder Dominanter verbindet Autorität mit aufmerksamer Fürsorge und Partner-Sicherheit.',
      characteristics: [
        'Ergreift gerne die Initiative und bestimmt den Ablauf',
        'Findet Genugtuung darin, wenn der Partner freiwillig Kontrolle abgibt',
        'Schätzt klare Grenzen, Selbstsicherheit und verantwortungsvolle Führung',
        'Achtet aufmerksam auf die emotionalen Reaktionen des Partners'
      ],
      communicationTips: 'Setzen Sie auf klare Vorabsprachen, verständliche Kommandos und gründliches Aftercare.'
    },
    submissive: {
      name: 'Devot / Submissiv',
      shortDescription: 'Findet Erfüllung, Ruhe und Erregung darin, die Kontrolle an einen vertrauten Partner abzugeben.',
      fullDescription: 'Submissive blühen auf, wenn sie die Last eigener Entscheidungen ablegen und sich ganz in die Hände eines vertrauenswürdigen Menschen begeben können.',
      characteristics: [
        'Findet Entspannung und Lust im Befolgen von Anweisungen',
        'Legt höchsten Wert auf Vertrauen, Sicherheit und feste Grenzen',
        'Möchte von einem selbstsicheren Partner geführt werden',
        'Erlebt eigene Verletzlichkeit als Quelle von Nähe und Hingabe'
      ],
      communicationTips: 'Formulieren Sie Hard- und Soft-Limits vorab klar; zögern Sie nie mit dem Safeword.'
    },
    switch: {
      name: 'Switch',
      shortDescription: 'Genießt je nach Stimmung, Situation oder Partner sowohl das Führen als auch das Dienen.',
      fullDescription: 'Switches lassen sich nicht auf eine einzige Seite festlegen. Sie können fordernd und dominant sein oder sich vollkommen hingeben, was ihnen tiefes Einfühlungsvermögen verleiht.',
      characteristics: [
        'Freude sowohl am Ausüben von Macht als auch am Abgeben von Kontrolle',
        'Passt sich flexibel an unterschiedliche Partner und Stimmungen an',
        'Versteht die Gefühlswelt von Tops und Bottoms aus eigener Anschauung',
        'Schätzt vielschichtige, wechselseitige Dynamiken'
      ],
      communicationTips: 'Teilen Sie vor einer Session mit, in welcher Gemütslage (Top/Bottom) Sie sich befinden.'
    },
    master_mistress: {
      name: 'Master / Mistress (Herr / Herrin)',
      shortDescription: 'Sucht strukturierte Hierarchie, Disziplin und dauerhafte Autorität über das Schlafzimmer hinaus.',
      fullDescription: 'Eine formelle Ausprägung von Dominanz mit Protokollen, Verhaltensregeln und oft einer ganzheitlichen Beziehungsführung im gegenseitigen Einvernehmen.',
      characteristics: [
        'Schätzt Etikette, feste Rituale und klare Verhaltensregeln',
        'Übernimmt Verantwortung für das seelische und körperliche Wohl des Partners',
        'Verlangt Gehorsam aus Respekt, nicht aus Angst',
        'Bevorzugt feste, verlässliche hierarchische Bindungen'
      ],
      communicationTips: 'Führen Sie regelmäßige Gespräche auf neutraler Augenhöhe zur Überprüfung der Regeln.'
    },
    slave: {
      name: 'Sklave / Sklavin (Slave)',
      shortDescription: 'Wünscht sich tiefe, dienende Hingabe und einvernehmliche Zugehörigkeit zu einem Partner.',
      fullDescription: 'Eine intensive Form der Unterordnung, bei der eigene Autonomie im Rahmen klarer Absprachen vertrauensvoll abgegeben wird.',
      characteristics: [
        'Findet Seelenruhe im Dienen und Abgeben aller Alltagsentscheidungen',
        'Entfaltet sich unter klaren Vorgaben und Aufgaben',
        'Sucht das Gefühl tiefer Zugehörigkeit',
        'Bedarf eines Höchstmaßes an partnerschaftlicher Verlässlichkeit'
      ],
      communicationTips: 'Vereinbaren Sie einen neutralen Notfall-Kommunikationskanal außerhalb des Protokolls.'
    },
    sadist: {
      name: 'Sadist / Sadistin',
      shortDescription: 'Zieht Befriedigung daraus, dem Partner im Konsens intensive Reize oder Schmerz zuzufügen.',
      fullDescription: 'Konsensueller Sadismus bedeutet, Reaktionen auf kontrollierte Schmerzreize oder Sinnesüberflutung hervorzulocken, wobei technische Präzision und Fürsorge essenziell sind.',
      characteristics: [
        'Wird stimuliert durch körperliche Reaktionen und Geräusche des Partners',
        'Nutzt Spanking, Klammern, Rattan oder Wachs mit Bedacht und Können',
        'Überwacht Atmung und Belastungsgrenzen des Partners lückenlos',
        'Beherrscht anatomische Grundlagen zur Vermeidung von Verletzungen'
      ],
      communicationTips: 'Legen Sie Intensitätsskalen fest (z.B. 1 bis 10) und testen Sie Reize stufenweise.'
    },
    masochist: {
      name: 'Masochist / Masochistin',
      shortDescription: 'Findet Lust, geistige Befreiung und Euphorie im Erleben konsensueller Schmerzreize.',
      fullDescription: 'Masochisten wandeln starke Sinnesreize in Endorphine und einen meditativen Rauschzustand (Subspace) um, der Alltagsstress vollständig auflöst.',
      characteristics: [
        'Erlebt intensive körperliche Reize als befreiend und erregend',
        'Erreicht tiefe Entspannung durch körpereigene Schmerzhemmung',
        'Erkundet gern die eigenen körperlichen und mentalen Grenzen',
        'Verbindet Schmerz mit emotionalem Loslassen'
      ],
      communicationTips: 'Kommunizieren Sie das gewünschte Tempo und melden Sie frühzeitig das Nahen der Grenze.'
    },
    rigger: {
      name: 'Rigger (Fesseler / Seilkünstler)',
      shortDescription: 'Beherrscht die Kunst des Bindens, Fixierens und Suspendierens mit Seilen.',
      fullDescription: 'Verbindet Ästhetik, Geometrie und anatomisches Fachwissen, um den Partner sicher in Seilen einzuschließen und ihm die Bewegungsfreiheit zu nehmen.',
      characteristics: [
        'Faszination für Knotentechniken, Seilspannung und visuelle Ästhetik',
        'Konsequenter Fokus auf sichere Fixierung und Nervenschutz',
        'Laufende Kontrolle von Durchblutung und Gliedmaßentemperatur',
        'Genießt die Wehrlosigkeit des gefesselten Partners'
      ],
      communicationTips: 'Halten Sie stets eine Sicherheitsschere griffbereit und prüfen Sie regelmäßig den Puls.'
    },
    rope_bunny: {
      name: 'Rope Bunny (Gefesselte/r)',
      shortDescription: 'Liebt das Gefühl, in Seilen bewegungsunfähig fixiert oder aufgehängt zu sein.',
      fullDescription: 'Schätzt den gleichmäßigen Druck der Seile auf der Haut und die völlige Unfähigkeit sich zu bewegen, was zu tiefer mentaler Entlastung führt.',
      characteristics: [
        'Ruhe und Geborgenheit im Verlust der eigenen Handlungsfähigkeit',
        'Genießt den festen Halt und die umschließende Wärme der Seile',
        'Schenkt dem Rigger vollkommenes Vertrauen',
        'Erreicht leicht meditative Trancezustände'
      ],
      communicationTips: 'Melden Sie Taubheitsgefühle oder Kribbeln in Fingern oder Zehen umgehend.'
    },
    primal_hunter: {
      name: 'Primal Hunter (Jäger)',
      shortDescription: 'Liebt instinktives Rangeln, Jagdspiele, spielerisches Kräftemessen und sanftes Beißen.',
      fullDescription: 'Verzichtet auf steife Rituale zugunsten wilder, animalischer Energie: Nachstellen, Fangen, Ringen und kraftvoller Körperkontakt.',
      characteristics: [
        'Vorliebe für spielerisches Ringen und festen Griff',
        'Einsatz von Knurren, spielerischem Zubeißen und roher Energie',
        'Verbindung zu unmittelbaren körperlichen Instinkten',
        'Hoher körperlicher Einsatz und Bewegungsfreude'
      ],
      communicationTips: 'Klären Sie Tabuzonen für Bisse und Griffe und legen Sie ein physisches Notsignal fest.'
    },
    primal_prey: {
      name: 'Primal Prey (Beute)',
      shortDescription: 'Wird durch das Adrenalin der Flucht, des Gejagtwerdens und des Unterliegens erregt.',
      fullDescription: 'Genießt den Nervenkitzel des Weglaufens, des verzweifelten Widerstands und des schließlichen Gepackt- und Überwältigtwerdens.',
      characteristics: [
        'Adrenalinkick beim Flüchten und spielerischen Gegenwehr',
        'Erregung beim finalen Überwältigt- und Festgehaltenwerden',
        'Sucht intensiven, direkten und schwungvollen Körperkontakt',
        'Erlebt das Gefangenwerden als befreiende Kapitulation'
      ],
      communicationTips: 'Sorgen Sie für eine sichere Umgebung ohne Stolperfallen und achten Sie auf freie Atmung.'
    },
    degrader: {
      name: 'Degrader (Erniedriger)',
      shortDescription: 'Nutzt verbale Schärfe, gespielte Verachtung und Demütigung als psychologisches Spiel.',
      fullDescription: 'Setzt verabredete Schimpfworte oder herablassendes Verhalten ein, um beim empfangenden Partner eine intensive emotionale Erregung zu erzeugen.',
      characteristics: [
        'Treffsicherer sprachlicher Ausdruck für erotische Demütigung',
        'Gespielte Kälte und Verachtung im Rahmen der Szene',
        'Strikte Trennung zwischen Phantasie und realer Wertschätzung',
        'Zuverlässiges, wärmendes Aftercare nach der Session'
      ],
      communicationTips: 'Erstellen Sie eine No-Go-Liste für Wörter, die persönliche Traumata berühren.'
    },
    degradee: {
      name: 'Degradee (Erniedrigte/r)',
      shortDescription: 'Findet Erregung und emotionale Entlastung darin, im Konsens herabgewürdigt zu werden.',
      fullDescription: 'Das vorübergehende Ablegen von sozialem Stolz und Anspruchshaltung im geschützten Raum führt zu einer intensiven, kathartischen Befreiung.',
      characteristics: [
        'Erregung durch verabredete verbale Herabsetzung oder Scham',
        'Erleichterung durch das Aufgeben von Würde im intimen Spiel',
        'Großes Bedürfnis nach liebevoller Bestätigung im Aftercare',
        'Verknüpfung von Schamgefühl und Verlangen'
      ],
      communicationTips: 'Trennen Sie klar zwischen anturnenden Kosenamen und real verletzenden Beleidigungen.'
    },
    praise_giver: {
      name: 'Praise Giver (Lobender Partner)',
      shortDescription: 'Führt und belohnt durch Zuspruch, liebevolle Anerkennung und stetige Bestätigung.',
      fullDescription: 'Im Gegensatz zur Erniedrigung lenkt der Praise Giver durch positives Feedback („braves Mädchen“, „guter Junge“), was Geborgenheit und Stolz stiftet.',
      characteristics: [
        'Häufige ermutigende Worte und Zärtlichkeit',
        'Führung durch Stolz, Belohnung und Zuneigung',
        'Schafft einen warmen, bestärkenden Schutzraum',
        'Freude daran, das Selbstwertgefühl des Partners zu heben'
      ],
      communicationTips: 'Fragen Sie den Partner, welche Worte und Kosenamen ihm die meiste Freude bereiten.'
    },
    praise_receiver: {
      name: 'Praise Receiver (Lob-Empfänger)',
      shortDescription: 'Blüht auf, wenn Hingabe und Leistung mit warmem Lob und Anerkennung bedacht werden.',
      fullDescription: 'Wird von dem Wunsch angetrieben zu gefallen, und erfährt durch sanftes Lob tiefste Zufriedenheit und ein Gefühl liebevoller Geborgenheit.',
      characteristics: [
        'Starkes Verlangen nach Bestätigung und Wohlgefallen des Partners',
        'Hohe Empfänglichkeit für tröstende, anerkennende Worte',
        'Entfaltet sich in einer wohlwollenden Atmosphäre',
        'Empfindet Lob als die schönste aller Belohnungen'
      ],
      communicationTips: 'Sagen Sie Ihrem Partner genau, welches Lob bei Ihnen die größte Wirkung hat.'
    },
    caregiver: {
      name: 'Caregiver (Fürsorger / Daddy / Mommy)',
      shortDescription: 'Bietet liebevolle, beschützende Führung, emotionale Geborgenheit und verlässliche Fürsorge.',
      fullDescription: 'Nimmt eine elterliche, beschützende Rolle ein, achtet auf das Wohlergehen des Partners und schenkt bedingungslose Geborgenheit und Struktur.',
      characteristics: [
        'Beschützend, geduldig und verständnisvoll',
        'Setzt Grenzen aus Liebe und Wohlwollen',
        'Schenkt emotionale Zuflucht und beruhigende Alltagsrituale',
        'Freude am Umsorgen und Verwöhnen des Partners'
      ],
      communicationTips: 'Trennen Sie das einvernehmliche Fürsorge-Rollenspiel klar von gleichberechtigten Alltagsentscheidungen.'
    },
    pet_ageplay: {
      name: 'Petplay / Little (Haustier / Rollenspiel)',
      shortDescription: 'Schlüpft in die Rolle eines verspielten Haustieres oder Kindes, um dem Alltagsdruck zu entfliehen.',
      fullDescription: 'Ermöglicht eine Auszeit von Erwachsenen-Verantwortung und Stress, um bedingungslose Zuneigung, Streicheleinheiten und Unbeschwertheit zu genießen.',
      characteristics: [
        'Freude an verspieltem, unschuldigem Verhalten (Welpe, Kätzchen)',
        'Befreiung von komplizierten Entscheidungen und Verantwortung',
        'Nutzung von Ohren, Halsbändern, Schwänzchen oder Kuscheltieren',
        'Sucht reine Zuneigung, Streicheleinheiten und Geborgenheit'
      ],
      communicationTips: 'Klären Sie, ob das Spiel rein platonisch-kuschelig oder erotisch gefärbt sein soll.'
    },
    voyeur_exhibitionist: {
      name: 'Voyeur / Exhibitionist',
      shortDescription: 'Zieht Erregung aus dem Sehen intimer Handlungen oder dem einvernehmlichen Gesehenwerden.',
      fullDescription: 'Umfasst den Nervenkitzel, den eigenen Körper vor einwilligenden Blicken zu entblößen, sowie die visuelle Faszination am Betrachten anderer.',
      characteristics: [
        'Kitzel beim Zeigen des Körpers vor einwilligenden Zuschauern',
        'Intensive visuelle Lust beim Beobachten intimer Szenen',
        'Freude an Spiegeln, Kameras oder aufreizender Kleidung',
        'Strikter Respekt vor der Privatsphäre Nichteingeweihter'
      ],
      communicationTips: 'Holen Sie stets das explizite Einverständnis aller anwesenden Personen ein.'
    },
    sensory_explorer: {
      name: 'Sensory Explorer (Sinnesforscher)',
      shortDescription: 'Erforscht Texturen, Temperaturgegensätze, Sinnesentzug und feine Reize.',
      fullDescription: 'Konzentriert sich auf die Vielfalt körperlicher Empfindungen abseits von reinem Schmerz: Augenbinden, Federn, Eiswürfel, warmes Wachs und Seide.',
      characteristics: [
        'Liebe zu Augenbinden, Kopfhörern und Sinnesentzug',
        'Erkundung von Kälte- und Wärmereizen (Eis, Tieftemperatur-Wachs)',
        'Schätzt feine Berührungen, Kitzeln und verschiedene Materialien',
        'Erreicht gesteigerte Sinneswahrnehmung durch Fokussierung'
      ],
      communicationTips: 'Prüfen Sie Wachstemperaturen immer zuerst am eigenen Handgelenk.'
    },
    vanilla: {
      name: 'Vanilla (Traditionell)',
      shortDescription: 'Bevorzugt zärtliche, gleichberechtigte Intimität ohne Machtgefälle, Fesseln oder Schmerz.',
      fullDescription: 'Schätzt partnerschaftliche Augenhöhe, gegenseitige Zärtlichkeit und Romantik ohne hierarchische Rollen oder extreme Reize.',
      characteristics: [
        'Vorliebe für symmetrische, gegenseitige Zuwendung',
        'Kein Interesse an Schmerz, Fesseln oder Dominanz',
        'Fokus auf Romantik, Zärtlichkeit und emotionale Nähe',
        'Fühlt sich in unkomplizierten Begegnungen am wohlsten'
      ],
      communicationTips: 'Bleiben Sie Ihren Grenzen treu, wenn Vorschläge nicht Ihren Wünschen entsprechen.'
    }
  },

  pt: {
    dominant: {
      name: 'Dominante',
      shortDescription: 'Assume naturalmente a liderança, o controle e a tomada de decisões na intimidade.',
      fullDescription: 'Dominantes apreciam conduzir o ritmo, estabelecer limites e manter a direção das cenas. Um dominante saudável equilibra firmeza com cuidado e respeito mútuo.',
      characteristics: [
        'Gosta de tomar a iniciativa e conduzir o encontro',
        'Sente satisfação quando o parceiro cede o controle voluntariamente',
        'Valoriza limites claros, autoconfiança e autoridade responsável',
        'Atento às reações emocionais e ao bem-estar do parceiro'
      ],
      communicationTips: 'Foque em acordos prévios, comandos claros e um aftercare atencioso.'
    },
    submissive: {
      name: 'Submisso / Submissa',
      shortDescription: 'Encontra paz, excitação e realização erótica ao entregar o controle a quem confia.',
      fullDescription: 'Submissos florescem ao ceder sua autonomia a um parceiro de extrema confiança, aliviando a sobrecarga de decisões cotidianas.',
      characteristics: [
        'Sente prazer e relaxamento ao seguir instruções e agradar',
        'Valoriza profundamente a confiança, a segurança e limites firmes',
        'Deseja ser conduzido(a) por alguém seguro e confiável',
        'Vivencia a vulnerabilidade como fonte de conexão e entrega'
      ],
      communicationTips: 'Defina limites rígidos (hard limits) com clareza; use sua safeword sem hesitar.'
    },
    switch: {
      name: 'Switch (Flexível)',
      shortDescription: 'Aprecia de forma fluida tanto liderar quanto se entregar, conforme o momento ou o parceiro.',
      fullDescription: 'Switches não se limitam a um único papel. Podem assumir o comando com firmeza ou se entregar totalmente, demonstrando empatia por ambos os lados.',
      characteristics: [
        'Gosta tanto de exercer autoridade quanto de se entregar',
        'Adapta-se facilmente a parceiros com energias distintas',
        'Compreende a vivência emocional de comandar e de obedecer',
        'Aprecia dinâmicas variadas e multifacetadas'
      ],
      communicationTips: 'Informe sua inclinação (se quer comandar ou ser guiado) antes de cada sessão.'
    },
    master_mistress: {
      name: 'Mestre / Senhora (Master / Mistress)',
      shortDescription: 'Busca hierarquia estruturada, fidelidade e autoridade contínua além do quarto.',
      fullDescription: 'Uma manifestação formal da dominação com protocolos, regras claras e responsabilidade contínua sobre a vida e o bem-estar do parceiro submisso.',
      characteristics: [
        'Aprecia rituais, etiqueta e regras estruturadas',
        'Assume a responsabilidade pelo bem-estar integral do submisso',
        'Valoriza a obediência nascida do respeito mútuo',
        'Prefere relações hierárquicas estáveis e duradouras'
      ],
      communicationTips: 'Realize conversas periódicas fora do papel para reavaliar os acordos.'
    },
    slave: {
      name: 'Escravo / Escrava (Slave)',
      shortDescription: 'Deseja uma entrega profunda e contínua, servindo com devoção sob regras pactuadas.',
      fullDescription: 'Uma forma intensa de submissão em que a pessoa encontra paz ao pertencer consensualmente a um mestre, subordinando suas vontades aos acordos.',
      characteristics: [
        'Paz interior no servir e abrir mão de escolhas próprias',
        'Floresce sob protocolos claros e disciplina consistente',
        'Busca uma profunda sensação de pertencimento',
        'Demanda confiança absoluta e estabilidade mútua'
      ],
      communicationTips: 'Mantenha um canal seguro de comunicação fora do personagem para expor dúvidas.'
    },
    sadist: {
      name: 'Sádico / Sádica',
      shortDescription: 'Sente prazer em administrar estímulos intensos ou dor consensual em um parceiro que deseja.',
      fullDescription: 'O sadismo consensual envolve provocar dor física calculada ou sobrecarga sensorial para gerar catarse em um parceiro complacente.',
      characteristics: [
        'Estimulado pelas reações corporais e vocais do parceiro',
        'Aplica impactos, grampos, cordas ou cera com perícia',
        'Monitora constantemente a respiração e os sinais vitais',
        'Mantém rigor técnico para evitar lesões reais'
      ],
      communicationTips: 'Alinhe a intensidade em escalas de 1 a 10 e teste gradualmente os impactos.'
    },
    masochist: {
      name: 'Masoquista',
      shortDescription: 'Encontra prazer, alívio mental e euforia física ao receber dor e sensações intensas consensuais.',
      fullDescription: 'Masoquistas transformam a dor em endorfinas e num estado meditativo (subspace) que silencia preocupações e renova as energias.',
      characteristics: [
        'Sente prazer e catarse em sensações físicas intensas',
        'Atinge estados de relaxamento profundo induzidos por endorfinas',
        'Gosta de explorar e expandir seus limites de tolerância',
        'Associa o sofrimento consensual a um desabafo emocional'
      ],
      communicationTips: 'Comunique o ritmo ideal e avise imediatamente ao se aproximar do seu limite.'
    },
    rigger: {
      name: 'Rigger (Amarrador/a)',
      shortDescription: 'Domina a arte de imobilizar, amarrar e suspender o parceiro com cordas.',
      fullDescription: 'Combina técnica, estética visual e conhecimento anatômico para conter o corpo do parceiro com segurança e elegância.',
      characteristics: [
        'Fascínio pela geometria dos nós e tensão das cordas',
        'Foco meticuloso na contenção segura e preservação de nervos',
        'Supervisão contínua da circulação e temperatura das extremidades',
        'Aprecia o estado de vulnerabilidade do parceiro amarrado'
      ],
      communicationTips: 'Tenha sempre uma tesoura de resgate ao alcance e cheque a circulação com frequência.'
    },
    rope_bunny: {
      name: 'Rope Bunny (Amarrado/a)',
      shortDescription: 'Ama ser atado(a), contido(a) ou suspenso(a), entrando em estado meditativo e de entrega.',
      fullDescription: 'Aprecia a pressão das cordas e a impossibilidade de se mover, o que proporciona um desligamento mental profundo e prazeroso.',
      characteristics: [
        'Tranquilidade no abandono de não poder se mover',
        'Conforto na pressão uniforme das amarras sobre o corpo',
        'Confiança total na habilidade técnica do rigger',
        'Facilidade para alcançar estados de transe meditativo'
      ],
      communicationTips: 'Avise imediatamente qualquer formigamento ou dormência em mãos ou pés.'
    },
    primal_hunter: {
      name: 'Caçador Primal',
      shortDescription: 'Canaliza instintos viscerais : perseguição, luta corporal, mordidas e força física lúdica.',
      fullDescription: 'Dispensa formalidades em favor de uma energia instintiva : perseguir, derrubar e imobilizar o parceiro de maneira visceral e consensual.',
      characteristics: [
        'Aração por luta corporal e pegadas firmes',
        'Uso de rosnados, mordidas leves e energia física pura',
        'Conexão com impulsos animais sem burocracias',
        'Grande disposição física e vigor'
      ],
      communicationTips: 'Defina limites para mordidas e golpes e combine um sinal corporal de emergência.'
    },
    primal_prey: {
      name: 'Presa Primal',
      shortDescription: 'Excita-se com a adrenalina de fugir, ser perseguido(a), capturado(a) e dominado(a).',
      fullDescription: 'Aprecia a adrenalina de tentar escapar, lutar de brincadeira e, ao final, ser capturado(a) e dominado(a) por um parceiro de confiança.',
      characteristics: [
        'Adrenalina ao fugir e resistir ludicamente',
        'Excitação ao ser derrotado(a) e imobilizado(a) pela força',
        'Busca contato físico firme, quente e direto',
        'Sente a captura como uma rendição prazerosa'
      ],
      communicationTips: 'Certifique-se de que o espaço esteja livre de obstáculos e preserve a respiração.'
    },
    degrader: {
      name: 'Degradador/a',
      shortDescription: 'Utiliza humilhação verbal consentida, palavras duras e desdém teatral como estímulo.',
      fullDescription: 'Emprega termos depreciativos acordados previamente para causar uma vertigem psicológica erótica no parceiro que deseja ser humilhado.',
      characteristics: [
        'Habilidade verbal para formular provocações estimulantes',
        'Postura teatral de desprezo dentro do contexto da cena',
        'Separação total entre a fantasia encenada e o afeto real',
        'Compromisso estrito com um acolhimento caloroso pós-cena'
      ],
      communicationTips: 'Mantenha uma lista rígida de palavras proibidas que toquem em feridas reais.'
    },
    degradee: {
      name: 'Degradado/a',
      shortDescription: 'Encontra excitação e alívio ao ser repreendido(a) ou rebaixado(a) consensualmente.',
      fullDescription: 'Despir-se do orgulho e da compostura social num ambiente seguro propicia uma sensação profunda de libertação e entrega erótica.',
      characteristics: [
        'Excitação com xingamentos e palavras eróticas depreciativas',
        'Alívio ao abrir mão da dignidade dentro da cena protegida',
        'Necessidade de carinho e validação afetiva no aftercare',
        'Forte ligação entre vergonha consentida e desejo'
      ],
      communicationTips: 'Esclareça a diferença entre termos estimulantes e ofensas que machucam de verdade.'
    },
    praise_giver: {
      name: 'Dador/a de Elogios (Praise Giver)',
      shortDescription: 'Conduz e premia com palavras doces de aprovação, carinho e validação contínua.',
      fullDescription: 'Ao contrário da humilhação, lidera através do reforço positivo (« bom garoto », « boa garota »), criando um ambiente seguro e acolhedor.',
      characteristics: [
        'Uso constante de frases carinhosas de incentivo e aprovação',
        'Liderança pautada em orgulho e recompensa afetiva',
        'Gera uma atmosfera emocionalmente segura e calorosa',
        'Prazer em elevar a autoestima do parceiro'
      ],
      communicationTips: 'Descubra quais elogios e apelidos despertam maior comoção no seu parceiro.'
    },
    praise_receiver: {
      name: 'Receptor/a de Elogios (Praise Receiver)',
      shortDescription: 'Floresce ao receber aprovação sincera, palavras carinhosas e reconhecimento.',
      fullDescription: 'Movido pelo desejo genuíno de agradar, encontra em elogios carinhosos (« você foi perfeito/a ») uma fonte extraordinária de prazer e paz.',
      characteristics: [
        'Desejo constante de agradar e obter aprovação amorosa',
        'Sensibilidade elevada a palavras de carinho e orgulho',
        'Floresce em ambientes de apoio, calma e ternura',
        'Considera o elogio a melhor de todas as recompensas'
      ],
      communicationTips: 'Conte ao parceiro quais palavras e tons de voz mais tocam o seu coração.'
    },
    caregiver: {
      name: 'Cuidador/a (Daddy / Mommy)',
      shortDescription: 'Oferece orientação afetuosa, proteção acolhedora e limites saudáveis.',
      fullDescription: 'Exerce uma presença protetora e carinhosa, focada nas necessidades básicas, conforto e segurança do parceiro que deseja ser cuidado.',
      characteristics: [
        'Postura protetora, paciente e acolhedora',
        'Estabelece limites com carinho e serenidade',
        'Oferece apoio emocional e rotinas pacificadoras',
        'Aprecia mimar, guiar e proteger o parceiro'
      ],
      communicationTips: 'Separe o papel afetivo de cuidado das decisões adultas cotidianas em conjunto.'
    },
    pet_ageplay: {
      name: 'Petplay / Little (Mascote / Regressão)',
      shortDescription: 'Adota postura lúdica de animal de estimação ou infantil para descansar das pressões adultas.',
      fullDescription: 'Uma pausa saudável nas responsabilidades da vida madura, assumindo atitudes de filhote dócil para receber carinho puro e descomplicado.',
      characteristics: [
        'Apego a atitudes dóceis de filhote (gatinho, cachorrinho) ou brincadeiras',
        'Alívio total do estresse e do fardo de decisões complexas',
        'Apreço por acessórios como orelhas, coleiras e pelúcias',
        'Busca por carinho incondicional, afagos e simplicidade'
      ],
      communicationTips: 'Defina se a interação será estritamente afetuosa/platônica ou terá viés erótico.'
    },
    voyeur_exhibitionist: {
      name: 'Voyeur / Exibicionista',
      shortDescription: 'Excita-se com o olhar : contemplar atos íntimos ou ser observado com consentimento.',
      fullDescription: 'Aprecia a adrenalina de exibir o corpo para olhares cúmplices ou o deleite visual de contemplar a intimidade e a sensualidade de terceiros.',
      characteristics: [
        'Frisson ao saber-se observado(a) com consentimento',
        'Prazer visual intenso em assistir a cenas íntimas',
        'Apreço por espelhos, registros visuais e roupas ousadas',
        'Respeito rigoroso ao consentimento de todas as partes'
      ],
      communicationTips: 'Garanta sempre a autorização prévia e explícita de todos os presentes.'
    },
    sensory_explorer: {
      name: 'Explorador/a Sensorial',
      shortDescription: 'Investiga texturas, variações térmicas, sons e privação de sentidos.',
      fullDescription: 'Focado em nuances além da dor : vendas nos olhos, plumas, cera morna, gelo e texturas suaves para despertar sensações amplificadas.',
      characteristics: [
        'Gosto por vendas e isolamento sensorial (tapa-olhos, protetores auriculares)',
        'Contraste térmico instigante (calor suave de velas e frio do gelo)',
        'Sensibilidade ao toque de plumas, massagens e sedas',
        'Alcança hiperestesia ao concentrar a atenção num único sentido'
      ],
      communicationTips: 'Teste a cera de vela no próprio antebraço antes de utilizá-la no parceiro.'
    },
    vanilla: {
      name: 'Vanilla (Tradicional)',
      shortDescription: 'Prefere uma intimidade carinhosa e equilibrada sem hierarquias, amarras ou dor.',
      fullDescription: 'Valoriza o romance espontâneo, a igualdade de papéis e o aconchego mútuo sem recorrer a dinâmicas de poder ou acessórios intensos.',
      characteristics: [
        'Apreço por carinho recíproco e simetria física',
        'Nenhum interesse em sofrimento corporal, cordas ou ordens',
        'Foco na ternura, no diálogo e no afeto espontâneo',
        'Totalmente à vontade em encontros íntimos desprovidos de regras complexas'
      ],
      communicationTips: 'Seja sincero(a) sobre seus limites caso algo proposto não faça sentido para você.'
    }
  },

  ko: {
    dominant: {
      name: '도미넌트 (지배 / 리드형)',
      shortDescription: '친밀한 관계에서 자연스럽게 주도권을 잡고, 상황을 이끌며 결정을 내리는 유형.',
      fullDescription: '세션과 관계에서 속도를 조율하고 한계를 설정하며 이끄는 역할을 선호합니다. 성숙한 도미넌트는 당당한 리더십과 세심한 배려의 균형을 유지합니다.',
      characteristics: [
        '분위기와 흐름을 주도적으로 이끄는 것을 즐김',
        '상대방이 신뢰를 바탕으로 통제권을 양보할 때 깊은 만족을 느낌',
        '명확한 규칙, 자신감, 책임감 있는 리더십을 중시함',
        '상대방의 감정 상태와 안전을 기민하게 살핌'
      ],
      communicationTips: '사전 협의, 명확한 지시, 그리고 정성 어린 애프터케어를 필수적으로 실천하세요.'
    },
    submissive: {
      name: '서브미시브 (복종 / 수용형)',
      shortDescription: '신뢰할 수 있는 파트너에게 통제권을 넘기고 따르는 것에서 평온과 흥분을 느끼는 유형.',
      fullDescription: '깊이 신뢰하는 상대에게 선택의 부담을 내려놓고 온전히 순응할 때, 심리적 해방감과 깊은 쾌감을 경험합니다.',
      characteristics: [
        '지시를 따르고 상대를 기쁘게 하는 것에서 안도감과 흥분을 느낌',
        '신뢰, 정서적 안정감, 명확한 한계선을 가장 중요하게 여김',
        '의지할 수 있는 당당한 파트너에게 이끌리기를 바람',
        '자신의 취약한 모습을 드러내는 것을 깊은 유대로 경험함'
      ],
      communicationTips: '자신의 한계(하드 리미트)를 명확히 알리고 세이프워드를 주저 없이 사용하세요.'
    },
    switch: {
      name: '스위치 (양방향 / 전환형)',
      shortDescription: '기분, 상황, 파트너에 따라 지배하는 역할과 복종하는 역할을 유연하게 오가는 유형.',
      fullDescription: '한 가지 고정된 역할에 얽매이지 않고, 주도할 때와 온전히 따를 때 모두에서 매력을 느낍니다. 양쪽의 심리를 잘 이해하는 공감 능력이 뛰어납니다.',
      characteristics: [
        '권력을 행사하는 것과 내려놓는 것 모두를 즐김',
        '다양한 성향의 파트너에게 유연하게 맞춰갈 수 있음',
        '탑(Top)과 바텀(Bottom) 양쪽의 심리적 과정을 깊이 이해함',
        '상호적이고 입체적인 플레이를 선호함'
      ],
      communicationTips: '세션을 시작하기 전에 오늘의 심리 상태(리드하고 싶은지, 맡기고 싶은지)를 솔직히 공유하세요.'
    },
    master_mistress: {
      name: '마스터 / 미스트리스 (주인 / 지도자)',
      shortDescription: '단순한 침실 플레이를 넘어 예절, 규율, 지속적인 위계질서와 책임을 중시하는 유형.',
      fullDescription: '지배의 가장 격식 있는 형태로, 프로토콜(예법)과 규율, 그리고 상호 신뢰에 기반한 지속적 관계를 지향합니다.',
      characteristics: [
        '공식적인 예의범절, 의식, 엄격한 규율을 중시함',
        '상대방의 전반적인 삶과 정서적 안정에 책임을 짐',
        '두려움이 아닌 존경에서 우러나오는 복종을 원함',
        '안정적이고 장기적인 위계 관계를 선호함'
      ],
      communicationTips: '역할에서 벗어난 일상적 대화 시간을 정기적으로 갖고 규칙을 점검하세요.'
    },
    slave: {
      name: '슬레이브 (노예 / 헌신형)',
      shortDescription: '자신의 결정권을 온전히 내려놓고 주인에게 헌신하며 소속되는 것에서 궁극의 평온을 찾는 유형.',
      fullDescription: '합의된 틀 안에서 주인에게 소속되어 봉사하고 순종할 때 가장 큰 행복을 느끼는 깊은 형태의 복종입니다.',
      characteristics: [
        '자신의 자율성을 맡기고 헌신하는 것에서 마음의 평화를 얻음',
        '명확한 규칙과 지시, 규율 속에서 안정감을 느낌',
        '누군가에게 깊이 속해 있다는 소속감을 갈망함',
        '상대방에 대한 절대적인 신뢰와 일관성을 요구함'
      ],
      communicationTips: '프로토콜 외에 비상 상황이나 컨디션 난조를 알릴 수 있는 중립적 신호를 마련해 두세요.'
    },
    sadist: {
      name: '새디스트 (가학 / 자극 부여형)',
      shortDescription: '합의된 한도 내에서 파트너에게 강한 감각 자극이나 통증을 주며 반응을 이끌어내는 유형.',
      fullDescription: '파트너가 원하는 강도의 통증이나 감각적 압박을 통제된 방식으로 선사하며 교감합니다. 세밀한 관찰력과 안전 기술이 필수적입니다.',
      characteristics: [
        '파트너의 신체적 반응, 표정, 숨소리에서 강한 흥분을 느낌',
        '스팽킹, 왁스, 클램프 등의 도구를 정확하고 능숙하게 다룸',
        '상대방의 호흡과 통증 한계를 끊임없이 모니터링함',
        '부상을 방지하기 위한 해부학적 지식과 안전 수칙을 준수함'
      ],
      communicationTips: '강도를 1~10 수치로 소통하도록 하고, 도구와 부위별 허용 범위를 사전에 조율하세요.'
    },
    masochist: {
      name: '마조히스트 (피학 / 감각 수용형)',
      shortDescription: '합의된 통증과 강한 자극을 수용함으로써 뇌내 마약(엔도르핀)과 무아지경의 쾌감을 얻는 유형.',
      fullDescription: '통증을 쾌감과 정서적 해방, 서브스페이스(Subspace) 상태로 전환합니다. 신체적 자극을 통해 일상의 번뇌를 비우는 경험을 선호합니다.',
      characteristics: [
        '강한 신체적 자극을 통해 카타르시스와 깊은 쾌감을 경험함',
        '엔도르핀 분비로 인한 깊은 이완과 무아지경(서브스페이스)에 도달함',
        '자신의 한계치를 탐색하고 버텨내는 과정을 즐김',
        '합의된 통증을 정서적 정화의 수단으로 여김'
      ],
      communicationTips: '원하는 자극의 속도를 알리고, 한계에 다다르면 망설이지 말고 신호를 보내세요.'
    },
    rigger: {
      name: '리거 (결박 / 밧줄 예술가)',
      shortDescription: '밧줄을 사용해 상대방의 몸을 아름답고 안전하게 묶고 고정하며 속박하는 예술가.',
      fullDescription: '기하학적인 밧줄 매듭과 해부학적 지식을 결합하여 상대방의 자유를 뺏고 심리적 무력감과 미적 쾌감을 선사합니다.',
      characteristics: [
        '매듭의 장력, 기하학적 형태, 시각적 아름다움에 매료됨',
        '안전한 고정과 신경 및 혈액 순환 보호에 집중함',
        '말초 부위의 혈색과 체온을 지속적으로 확인함',
        '밧줄 안에서 상대방이 무방비하게 기대어 오는 모습을 즐김'
      ],
      communicationTips: '항상 응급 가위를 손닿는 곳에 두고, 몇 분마다 손끝과 발끝의 감각을 체크하세요.'
    },
    rope_bunny: {
      name: '로프 버니 (피결박 / 밧줄 수용형)',
      shortDescription: '밧줄에 묶이거나 매달려 몸을 움직일 수 없을 때, 명상적인 이완과 깊은 굴복감을 느끼는 유형.',
      fullDescription: '온몸을 감싸는 밧줄의 압력과 스스로 움직일 수 없는 상태를 사랑하며, 머릿속의 모든 스위치를 끄고 리거에게 몸을 맡깁니다.',
      characteristics: [
        '움직일 수 없는 상태에서 오는 깊은 안도감과 포기감을 즐김',
        '밧줄이 신체를 감싸는 균일한 압력을 편안하게 느낌',
        '리거의 기술과 안전 판단에 전적인 신뢰를 보냄',
        '깊은 명상적 트랜스 상태에 쉽게 빠져듦'
      ],
      communicationTips: '손가락이나 발가락에 저림이나 감각 이상이 느껴지면 즉시 리거에게 알리세요.'
    },
    primal_hunter: {
      name: '프라이멀 헌터 (야성 / 포식자)',
      shortDescription: '본능적인 야성, 추격전, 레슬링 같은 몸싸움, 가벼운 물기 등 원초적 스킨십을 선호하는 유형.',
      fullDescription: '격식 있는 룰보다는 원초적인 동물적 감각으로 상대를 쫓고 제압하며 힘을 겨루는 짜릿함을 즐깁니다.',
      characteristics: [
        '합의된 거친 몸싸움과 단단한 포옹을 선호함',
        '소리를 내거나 장난스럽게 깨무는 등 본능적인 접촉에 흥분함',
        '복잡한 예법보다 직접적인 신체 교감을 중요시함',
        '풍부한 에너지와 역동적인 스킨십을 즐김'
      ],
      communicationTips: '물어도 되는 부위와 강도를 미리 정하고, 몸짓으로 할 수 있는 비상 신호를 약속하세요.'
    },
    primal_prey: {
      name: '프라이멀 프레이 (야성 / 사냥감)',
      shortDescription: '도망치는 아드레날린, 쫓기다 붙잡히는 스릴, 힘으로 제압당할 때의 해방감에 흥분하는 유형.',
      fullDescription: '포식자로부터 필사적으로 도망치고 저항하다가 결국 붙잡혀 제압당하는 야생의 드라마 속에서 깊은 카타르시스를 느낍니다.',
      characteristics: [
        '도망치며 장난스럽게 저항할 때 솟구치는 아드레날린을 즐김',
        '물리적으로 제압당해 꼼짝 못 하게 되었을 때의 흥분과 안도감',
        '체온이 강하게 부딪히는 역동적인 접촉을 선호함',
        '사냥당하는 순간을 완벽한 항복이자 쾌감으로 받아들임'
      ],
      communicationTips: '주변에 부딪힐 위험이 없는 안전한 공간을 확보하고 호흡이 방해받지 않도록 주의하세요.'
    },
    degrader: {
      name: '디그레이더 (수치심 / 모욕 부여형)',
      shortDescription: '합의된 언어적 모욕과 경멸 어린 태도로 상대방에게 심리적 자극과 수치심을 선사하는 유형.',
      fullDescription: '사전에 허용된 거친 표현과 경멸적인 뉘앙스를 사용하여 상대방의 자존심을 흔들고 배덕감 넘치는 흥분을 유도합니다.',
      characteristics: [
        '수치심을 자극하는 언어적 연출과 뉘앙스 조율에 능숙함',
        '플레이 중 경멸하는 태도를 실감 나게 연기함',
        '판타지 연기와 실제 인간적 존중을 철저하게 구분함',
        '세션 종료 후 따뜻한 정서적 지지와 애프터케어에 충실함'
      ],
      communicationTips: '상대방의 실제 트라우마를 건드리지 않도록 금지 단어 목록을 철저히 정해 두세요.'
    },
    degradee: {
      name: '디그레이디 (수치심 수용형)',
      shortDescription: '합의된 모욕과 경멸을 받으며 사회적 가면을 벗어던지고 심리적 굴복과 흥분을 느끼는 유형.',
      fullDescription: '자존심과 체면을 내려놓고 철저하게 낮아질 때, 일상의 긴장에서 벗어나 원초적인 해방감과 에로티시즘을 느낍니다.',
      characteristics: [
        '선정적이고 거친 모욕적 호칭에 강한 흥분을 느낌',
        '보호된 공간에서 자존심을 내려놓을 때 오는 안도감',
        '플레이 후 파트너의 따뜻한 애정 확인(애프터케어)을 절실히 필요로 함',
        '수치심과 성적 쾌감이 밀접하게 연결되어 있음'
      ],
      communicationTips: '흥분되는 호칭과 실제로 상처가 되는 표현의 경계를 파트너에게 분명히 밝히세요.'
    },
    praise_giver: {
      name: '프레이즈 기버 (칭찬 / 긍정 주도형)',
      shortDescription: '따뜻한 칭찬, 다정한 인정, 끊임없는 지지로 파트너를 이끌고 보상하는 리더형.',
      fullDescription: '모욕 대신 "착하지", "정말 잘했어" 같은 긍정적인 피드백을 통해 파트너에게 자부심과 안도감을 선사하며 관계를 이끕니다.',
      characteristics: [
        '애정 어린 칭찬과 인정의 언어를 적극적으로 사용함',
        '자부심과 다정한 보상으로 상대를 이끎',
        '심리적으로 안전하고 따뜻한 공간을 조성함',
        '파트너의 자존감을 북돋우는 것에서 보람을 느낌'
      ],
      communicationTips: '어떤 칭찬과 표현이 파트너의 마음에 가장 와닿는지 사전에 물어보세요.'
    },
    praise_receiver: {
      name: '프레이즈 레시버 (칭찬 갈망 / 인정 수용형)',
      shortDescription: '파트너의 진심 어린 인정, 다정한 칭찬, 격려를 받을 때 가장 큰 행복과 의욕을 느끼는 유형.',
      fullDescription: '상대를 기쁘게 해주고 싶다는 마음을 품고, "착한 아이네", "정말 예뻐" 같은 인정의 말을 들을 때 무한한 평온과 쾌감을 얻습니다.',
      characteristics: [
        '파트너를 만족시키고 칭찬받고 싶은 강한 욕구',
        '다정한 인정과 칭찬의 언어에 매우 민감하게 반응함',
        '엄격함보다는 따뜻함과 신뢰가 있는 환경에서 능력을 발휘함',
        '칭찬받는 것을 최고의 보상이자 쾌락으로 여김'
      ],
      communicationTips: '자신이 가장 듣고 싶은 애칭과 칭찬 표현을 파트너에게 솔직히 공유하세요.'
    },
    caregiver: {
      name: '케어기버 (보호자 / 대디 / 마미)',
      shortDescription: '부모처럼 따뜻하고 보호적인 태도로 파트너를 돌보고, 안전한 울타리를 제공하는 유형.',
      fullDescription: '의지하고 싶어 하는 파트너에게 정서적 안식처와 따뜻한 보살핌, 그리고 건강한 규칙을 제공하며 자상하게 이끕니다.',
      characteristics: [
        '보호적이고 인내심이 강하며 보살피기를 좋아함',
        '사랑과 배려를 바탕으로 건강한 한계를 제시함',
        '정서적 안도감과 편안한 일상의 규칙을 제공함',
        '파트너를 아끼고 보듬는 것에서 행복을 느낌'
      ],
      communicationTips: '합의된 보호자 롤플레잉과 동등한 성인으로서의 현실 생활을 명확히 구분하세요.'
    },
    pet_ageplay: {
      name: '펫플레이 / 리틀 (반려동물 / 역할 퇴행)',
      shortDescription: '반려동물(강아지, 고양이)이나 어린아이의 역할을 통해 어른의 무게를 내려놓고 어리광을 부리는 유형.',
      fullDescription: '복잡한 사회적 책임과 결정을 잠시 잊고, 무조건적인 애정과 귀여움을 받으며 순수한 힐링을 누립니다.',
      characteristics: [
        '강아지나 고양이처럼 천진난만한 행동을 좋아함',
        '어른으로서의 책임과 선택의 스트레스에서 벗어나고자 함',
        '귀, 꼬리, 목줄, 인형 같은 아기자기한 소품을 즐김',
        '조건 없는 순수한 쓰다듬과 따뜻한 애정을 갈망함'
      ],
      communicationTips: '순수한 힐링/애착 위주의 플레이인지 성적인 요소가 포함되는지 명확히 조율하세요.'
    },
    voyeur_exhibitionist: {
      name: '보이어 / 엑시비셔니스트 (시각적 향유형)',
      shortDescription: '타인의 친밀한 행위를 합의하에 바라보거나, 타인의 시선 앞에 자신을 드러내는 것을 즐기는 유형.',
      fullDescription: '타인의 시선 앞에서 느껴지는 긴장감과 해방감, 혹은 관찰자로서 타인의 관능적인 모습을 바라볼 때의 시각적 쾌감을 추구합니다.',
      characteristics: [
        '합의된 시선 앞에서 자신을 드러낼 때 강한 스릴을 느낌',
        '아름다운 신체나 정사 장면을 관찰하는 것에서 오는 시각적 쾌감',
        '거울, 과감한 의상, 카메라 촬영 등을 선호함',
        '비합의된 제3자를 절대 연루시키지 않는 엄격한 윤리의식을 지님'
      ],
      communicationTips: '제3자가 관여할 경우, 모든 참여자의 명확한 사전 동의를 반드시 확인하세요.'
    },
    sensory_explorer: {
      name: '센서리 익스플로러 (감각 탐험가)',
      shortDescription: '안대, 온도 차이(얼음, 저온 왁스), 깃털, 미세 전류 등 다채로운 신체 감각을 탐구하는 유형.',
      fullDescription: '극단적인 통증보다는 감각의 고조와 다양한 질감의 대비를 즐깁니다. 시각을 차단한 상태에서 미세한 자극에 집중하는 트랜스 상태를 좋아합니다.',
      characteristics: [
        '안대나 귀마개를 통한 감각 차단(블라인드폴드)을 선호함',
        '얼음의 차가움과 왁스의 따스함 같은 온도 대비를 즐김',
        '깃털, 실크, 브러시 등 다양한 촉각 자극을 음미함',
        '하나의 감각에 몰입하여 감각이 극대화되는 경험을 추구함'
      ],
      communicationTips: '왁스를 사용할 때는 반드시 자신의 손목 안쪽에 온도를 먼저 테스트하세요.'
    },
    vanilla: {
      name: '바닐라 (전통적 / 기본형)',
      shortDescription: '권력 교환, 결박, 통증 없이 평등하고 다정한 스킨십과 로맨틱한 교감을 선호하는 유형.',
      fullDescription: '지배나 복종의 도구 없이, 두 사람 사이의 대등한 애정과 자연스러운 친밀감, 따뜻한 교감을 가장 가치 있게 여깁니다.',
      characteristics: [
        '대등하고 상호적인 신체적 교감을 중시함',
        '신체적 통증, 밧줄 결박, 위계질서에 거부감이 있거나 관심이 없음',
        '로맨틱하고 따뜻한 정서적 연결에 집중함',
        '복잡한 룰이나 도구 없이 편안하게 나누는 사랑을 선호함'
      ],
      communicationTips: '자신에게 맞지 않는 제안을 받았을 때는 망설이지 말고 솔직하게 거절하세요.'
    }
  },

  it: {
    dominant: {
      name: 'Dominante',
      shortDescription: 'Assume naturalmente la guida, il controllo e le decisioni nei momenti di intimità.',
      fullDescription: 'I dominanti amano guidare il ritmo, stabilire confini sicuri e mantenere il controllo. Un partner dominante maturo bilancia autorevolezza ed empatia.',
      characteristics: [
        'Ama prendere l’iniziativa e guidare la dinamica intima',
        'Prova appagamento quando il partner cede il controllo spontaneamente',
        'Apprezza confini precisi, fermezza e responsabilità',
        'Attento alle reazioni emotive e alla sicurezza dell’altro'
      ],
      communicationTips: 'Punta su negoziazioni preliminari, indicazioni chiare e un attento aftercare.'
    },
    submissive: {
      name: 'Sottomesso / Sottomessa',
      shortDescription: 'Trova serenità, eccitazione e appagamento nell’affidare il controllo a un partner di fiducia.',
      fullDescription: 'I sottomessi traggono profondo beneficio dall’abbandonarsi a una persona fidata, liberandosi dal carico quotidiano delle scelte.',
      characteristics: [
        'Trova calma o eccitazione nell’obbedire e nel compiacere',
        'Dà immenso valore alla fiducia, alla sicurezza e a limiti chiari',
        'Desidera essere guidato/a da una presenza sicura',
        'Vive la vulnerabilità come fonte di autentica connessione'
      ],
      communicationTips: 'Definisci in anticipo i tuoi limiti invalicabili (hard limits) e usa la safeword senza timore.'
    },
    switch: {
      name: 'Switch (Versatile)',
      shortDescription: 'Apprezza fluidamente sia il ruolo dominante sia quello sottomesso, a seconda dell’intesa.',
      fullDescription: 'Gli switch non appartengono a un’unica categoria rigida. Possono essere autorevoli o completamente cedevoli, mostrando profonda empatia per entrambi i lati.',
      characteristics: [
        'Ama sia detenere l’autorità sia cederla del tutto',
        'Si adatta con facilità a partner dalle energie differenti',
        'Comprende a fondo le emozioni di chi guida e di chi si affida',
        'Predilige dinamiche reciproche e sfaccettate'
      ],
      communicationTips: 'Comunica la tua propensione del momento prima di iniziare una sessione.'
    },
    master_mistress: {
      name: 'Padrone / Padrona (Master / Mistress)',
      shortDescription: 'Ricerca una gerarchia codificata, devozione continua e autorevolezza anche oltre la camera.',
      fullDescription: 'Una forma strutturata di dominazione basata su etichetta, rituali e una dedizione reciproca duratura nel rispetto del consenso.',
      characteristics: [
        'Apprezza regole formali, rispetto ed etichetta di condotta',
        'Si assume la piena responsabilità per il benessere del sottomesso',
        'Cerca un’obbedienza fondata sulla stima reciproca',
        'Predilige legami gerarchici stabili e continuativi'
      ],
      communicationTips: 'Programma verifiche periodiche fuori dal ruolo per valutare la validità degli accordi.'
    },
    slave: {
      name: 'Schiavo / Schiava (Slave)',
      shortDescription: 'Desidera una totale dedizione e sottomissione consensuale, servendo con devozione.',
      fullDescription: 'Una forma intensa di sottomissione in cui la persona trova pace nell’appartenere consensualmente a un padrone e nel mettersi al suo servizio.',
      characteristics: [
        'Trova serenità nel servire e nell’abbandonare ogni decisione',
        'Fiorisce all’interno di protocolli precisi e disciplina costante',
        'Cerca un senso profondo di appartenenza',
        'Richiede un livello straordinario di fiducia e coerenza'
      ],
      communicationTips: 'Stabilisci un canale neutro per esprimere dubbi o malesseri al di fuori del protocollo.'
    },
    sadist: {
      name: 'Sadico / Sadica',
      shortDescription: 'Prova appagamento nel somministrare stimoli intensi o dolore consensuale al partner.',
      fullDescription: 'Il sadismo consensuale consiste nel provocare reazioni corporee ed emotive attraverso stimoli intensi concordati, unendo perizia e cura.',
      characteristics: [
        'Stimolato dalle espressioni e dalle reazioni fisiche del partner',
        'Usa frustini, pinze o cera calda con precisione e controllo',
        'Monitora costantemente il respiro e le soglie di sopportazione',
        'Possiede una solida preparazione per evitare danni fisici'
      ],
      communicationTips: 'Stabilisci una scala numerica da 1 a 10 per dosare la forza dei colpi.'
    },
    masochist: {
      name: 'Masochista',
      shortDescription: 'Trova piacere, catarsi ed euforia nel ricevere dolore e sensazioni fisiche intense consensuali.',
      fullDescription: 'I masochisti trasformano gli stimoli intensi in endorfine e in uno stato di trance rilassante (subspace) che azzera lo stress quotidiano.',
      characteristics: [
        'Prova piacere e catarsi attraverso sensazioni corporali intense',
        'Raggiunge una profonda distensione grazie alle endorfine',
        'Ama esplorare ed estendere la propria soglia di resistenza',
        'Associa il dolore consensuale a una liberazione emotiva'
      ],
      communicationTips: 'Comunica il ritmo desiderato e avvisa prontamente quando ti avvicini al limite.'
    },
    rigger: {
      name: 'Rigger (Legatore / Artista delle Corde)',
      shortDescription: 'Padroneggia l’arte di legare, immobilizzare e sospendere il partner con corde.',
      fullDescription: 'Unisce rigore geometrico, estetica visiva e anatomia per avvolgere e bloccare il corpo del partner in totale sicurezza.',
      characteristics: [
        'Passione per nodi, tensione delle corde ed equilibrio visivo',
        'Massima attenzione alla sicurezza circolatoria e nervosa',
        'Controlla costantemente polsi, calore e colorito delle estremità',
        'Gode della totale vulnerabilità del partner legato'
      ],
      communicationTips: 'Tieni sempre forbici di sicurezza a portata di mano e controlla il battito.'
    },
    rope_bunny: {
      name: 'Rope Bunny (Legato/a)',
      shortDescription: 'Ama essere legato/a, contenuto/a o sospeso/a, entrando in uno stato di meditazione e resa.',
      fullDescription: 'Adora la pressione delle corde sulla pelle e l’impossibilità di muoversi, vivendo una pausa mentale totale priva di responsabilità.',
      characteristics: [
        'Trova quiete nell’impossibilità fisica di muoversi',
        'Apprezza l’abbraccio saldo e uniforme delle corde sul corpo',
        'Nutre una fiducia incondizionata nelle capacità del rigger',
        'Facilmente incline a stati meditativi di trance'
      ],
      communicationTips: 'Segnala all’istante qualsiasi formicolio o intorpidimento a dita o piedi.'
    },
    primal_hunter: {
      name: 'Cacciatore Primal',
      shortDescription: 'Esprime un’energia animalesca : inseguimenti, prese di lotta, morsi giocosi e contatto ruvido.',
      fullDescription: 'Abbandona formalismi a favore dell’istinto puro : inseguire, atterrare e bloccare fisicamente il partner in un corpo a corpo consenziente e vivace.',
      characteristics: [
        'Attrazione per la lotta consenziente e le prese decise',
        'Uso di ringhi, morsi calibrati e contatto energico',
        'Connessione a riflessi viscerali senza schemi rigidi',
        'Grande dispendio di energia fisica e vigore'
      ],
      communicationTips: 'Definisci in anticipo i limiti per i morsi e concorda un gesto di emergenza.'
    },
    primal_prey: {
      name: 'Preda Primal',
      shortDescription: 'Si eccita con l’adrenalina della fuga, dell’essere braccato/a, catturato/a e sottomesso/a.',
      fullDescription: 'Assapora il brivido di scappare, resistere giocosamente e infine farsi acciuffare e sopraffare con forza da un partner di cui si fida.',
      characteristics: [
        'Brivido nella fuga e nella resistenza simulata',
        'Eccitazione nel momento della cattura e dell’immobilizzazione',
        'Ricerca un contatto corporeo caldo, irruento e schietto',
        'Vive l’essere sopraffatta come una liberatoria resa fisica'
      ],
      communicationTips: 'Verifica che l’ambiente sia sicuro e assicurati che le vie respiratorie siano sempre libere.'
    },
    degrader: {
      name: 'Degradatore/trice',
      shortDescription: 'Usa l’umiliazione verbale consensuale, epiteti crudi e disprezzo recitato come stimolo.',
      fullDescription: 'Impiega espressioni concordate in precedenza per creare un vertiginoso turbamento psicologico nella persona che ama sentirsi degradata.',
      characteristics: [
        'Capacità verbale di formulare provocazioni pungenti',
        'Recitazione calibrata di disprezzo all’interno del contesto erotico',
        'Separazione assoluta tra fantasia recitata e rispetto reale',
        'Impegno costante nell’accudimento affettivo a fine sessione'
      ],
      communicationTips: 'Stila una lista severa di parole tabù che tocchino traumi personali reali.'
    },
    degradee: {
      name: 'Degradato/a',
      shortDescription: 'Trova eccitazione e sollievo intimo nell’essere rimproverato/a o insultato/a consensualmente.',
      fullDescription: 'Spogliarsi dell’orgoglio e delle aspettative sociali in un contesto protetto genera una profonda liberazione mentale ed erotica.',
      characteristics: [
        'Eccitazione destata da insulti erotici e parole di disprezzo',
        'Sollievo nel deporre ogni dignità all’interno della scena',
        'Forte bisogno di rassicurazione e affetto durante l’aftercare',
        'Stretto legame tra vergogna consensuale e desiderio'
      ],
      communicationTips: 'Chiarisci con precisione quali espressioni eccitano e quali feriscono davvero.'
    },
    praise_giver: {
      name: 'Praise Giver (Dispensatore/trice di Lodi)',
      shortDescription: 'Guida e premia con parole affettuose di stima, tenerezza e approvazione costante.',
      fullDescription: 'Al contrario della degradazione, stimola e accompagna attraverso il rinforzo positivo (« bravo ragazzo », « brava ragazza »), creando un rifugio protetto.',
      characteristics: [
        'Uso costante di elogi sinceri e parole incoraggianti',
        'Guida fondata sull’orgoglio e sulla ricompensa affettuosa',
        'Crea un ambiente rassicurante e stimolante',
        'Piacere nell’accrescere l’autostima del partner'
      ],
      communicationTips: 'Chiedi al partner quali parole o nomignoli gli riscaldano maggiormente il cuore.'
    },
    praise_receiver: {
      name: 'Praise Receiver (Ricevente di Lodi)',
      shortDescription: 'Fiorisce quando riceve approvazione autentica, parole dolci e riconoscimento affettuoso.',
      fullDescription: 'Spinto dal desiderio di compiacere, trova negli elogi (« sei stato/a bravissimo/a ») una fonte impareggiabile di pace e piacere.',
      characteristics: [
        'Desiderio profondo di rendersi utile e ricevere approvazione',
        'Grande sensibilità alle parole dolci e ai gesti di stima',
        'Fiorisce in climi sereni, accoglienti e pazienti',
        'Considera l’apprezzamento verbale la massima gratificazione'
      ],
      communicationTips: 'Condividi con il partner i complimenti e i toni di voce che preferisci ascoltare.'
    },
    caregiver: {
      name: 'Caregiver (Protettore / Daddy / Mommy)',
      shortDescription: 'Offre una presenza affettuosa, protettiva e rassicurante, stabilendo confini sani.',
      fullDescription: 'Esercita un’autorità calda e accudente, concentrata sui bisogni primari, sulla sicurezza emotiva e sul riposo del partner.',
      characteristics: [
        'Carattere protettivo, paziente e premuroso',
        'Fissa limiti con dolcezza e costanza',
        'Offre conforto emotivo e routine distensive',
        'Ama coccolare, accudire e guidare il partner'
      ],
      communicationTips: 'Distingui con chiarezza il gioco d’accudimento dalle scelte adulte di vita quotidiana.'
    },
    pet_ageplay: {
      name: 'Petplay / Little (Cucciolo / Gioco Regressivo)',
      shortDescription: 'Assume atteggiamenti da cucciolo o infantili per svuotare la mente dalle responsabilità adulte.',
      fullDescription: 'Una benefica pausa dalle incombenze quotidiane, incarnando un cucciolo giocoso o una dolce ingenuità per ricevere coccole pure e sincere.',
      characteristics: [
        'Gusto per atteggiamenti giocosi e spensierati (gattino, cagnolino)',
        'Sospensione delle scelte faticose e dello stress adulto',
        'Uso di accessori simpatici (orecchie, collari, pupazzi)',
        'Ricerca di tenerezze, coccole disinteressate e semplicità'
      ],
      communicationTips: 'Concorda se il gioco debba essere puramente affettivo o comprendere risvolti erotici.'
    },
    voyeur_exhibitionist: {
      name: 'Voyeur / Esibizionista',
      shortDescription: 'Trova appagamento visivo : ammirare atti intimi o farsi guardare con il dovuto consenso.',
      fullDescription: 'Apprezza il brivido di mostrare la propria intimità a sguardi complici o la delizia visiva di contemplare il corpo e i giochi altrui.',
      characteristics: [
        'Brivido nel sapersi ammirato/a con consenso',
        'Intenso piacere visivo nell’osservare l’intimità altrui',
        'Predilezione per specchi, scatti fotografici e abiti audaci',
        'Rispetto assoluto della privacy e del consenso di chiunque sia presente'
      ],
      communicationTips: 'Assicurati sempre del consenso esplicito e preventivo di ogni persona coinvolta.'
    },
    sensory_explorer: {
      name: 'Esploratore/trice Sensoriale',
      shortDescription: 'Esplora consistenze, contrasti termici, suoni e deprivazione sensoriale.',
      fullDescription: 'Focalizzato sullo spettro delle sensazioni al di là del dolore : bende, piume, cera tiepida, ghiaccio e tessuti pregiati.',
      characteristics: [
        'Predilezione per bende e isolamento sensoriale',
        'Esplorazione di contrasti termici (freddo del ghiaccio e calore della cera)',
        'Apprezza sfioramenti delicati, solletico e consistenze morbide',
        'Raggiunge un’ipersensibilità acuendo i sensi rimanenti'
      ],
      communicationTips: 'Testa sempre la temperatura della cera sull’interno del polso prima di usarla.'
    },
    vanilla: {
      name: 'Vanilla (Classico)',
      shortDescription: 'Predilige un’intimità affettuosa, romantica e paritaria, priva di giochi di potere o dolore.',
      fullDescription: 'Assegna la massima importanza alla spontaneità, alla dolcezza reciproca e al romanticismo, senza ricorrere a ruoli rigidi o accessori.',
      characteristics: [
        'Predilezione per un affetto reciproco e paritario',
        'Nessun interesse per sofferenza fisica, corde o comandi',
        'Focalizzato su tenerezza, dialogo ed empatia spontanea',
        'A proprio agio in un’intimità priva di etichette e codici complessi'
      ],
      communicationTips: 'Comunica i tuoi limiti con serenità se ti vengono proposte pratiche estranee ai tuoi gusti.'
    }
  }
};

/**
 * Returns localized dimension by ID and Language
 */
export function getLocalizedDimension(id: string, lang: SupportedLanguage): Dimension {
  const base = BASE_DIMENSIONS[id] || BASE_DIMENSIONS.dominant;
  const locMap = DIMENSION_TRANSLATIONS[lang] || DIMENSION_TRANSLATIONS.en;
  const loc = locMap[id] || locMap.dominant || {
    name: base.name,
    shortDescription: base.shortDescription,
    fullDescription: base.fullDescription,
    characteristics: base.characteristics,
    communicationTips: base.communicationTips
  };

  return {
    ...base,
    name: loc.name,
    shortDescription: loc.shortDescription,
    fullDescription: loc.fullDescription,
    characteristics: loc.characteristics,
    communicationTips: loc.communicationTips
  };
}

/**
 * Returns all 20 dimensions localized for a given language
 */
export function getLocalizedDimensions(lang: SupportedLanguage): Record<string, Dimension> {
  const result: Record<string, Dimension> = {};
  for (const id of Object.keys(BASE_DIMENSIONS)) {
    result[id] = getLocalizedDimension(id, lang);
  }
  return result;
}

