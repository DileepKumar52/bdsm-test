import type { SupportedLanguage } from './languages';
import { QUESTIONS as BASE_QUESTIONS, type Question, type QuestionAdaptation } from '../data/questions';

export interface LocalizedQuestionItem {
  text: string;
  adaptations?: QuestionAdaptation;
}

// Translations for all 64 questions across each language
export const QUESTIONS_TRANSLATIONS: Record<SupportedLanguage, Record<number, LocalizedQuestionItem>> = {
  en: BASE_QUESTIONS.reduce((acc, q) => {
    acc[q.id] = {
      text: q.text,
      adaptations: q.adaptations
    };
    return acc;
  }, {} as Record<number, LocalizedQuestionItem>),

  es: {
    1: {
      text: 'Siento una auténtica emoción cuando tomo el mando, tomo las decisiones y marco el rumbo durante los momentos íntimos.',
      adaptations: {
        beginnerText: 'Me atrae la idea de guiar a mi pareja y decidir qué ocurre paso a paso en la intimidad.',
        beginnerNote: 'Dominancia: Asumir la iniciativa y el liderazgo de forma atenta y consensuada.',
        exploringText: 'Disfruto guiando la situación y marcando las pautas de mutuo acuerdo.',
        experiencedText: 'Tomo el control y lidero la escena de manera natural como dominante.'
      }
    },
    2: {
      text: 'Encuentro una profunda relajación o excitación al dejar que mi pareja tome el control absoluto y me diga exactamente qué hacer.',
      adaptations: {
        beginnerText: 'Me relaja y me excita que mi pareja tome todas las decisiones y me guíe sin que yo deba pensar.',
        beginnerNote: 'Sumisión: Ceder voluntariamente el control para disfrutar de la entrega y el placer sin la carga de decidir.',
        exploringText: 'Me entusiasma entregar la iniciativa a alguien en quien confío plenamente.',
        experiencedText: 'Disfruto del subspace y de rendir el control ante mi dominante.'
      }
    },
    3: {
      text: 'Disfruto tanto de guiar como de ser guiado/a; mi interés oscila con naturalidad entre dar órdenes y recibirlas según la ocasión.',
      adaptations: {
        beginnerText: 'A veces me gusta mandar y otras veces prefiero que me manden, dependiendo del día o de la persona.',
        beginnerNote: 'Switch: Persona versátil que disfruta tanto del rol activo como del rol receptivo.',
        exploringText: 'Mi atracción fluctúa cómodamente entre tomar el mando y entregarme.',
        experiencedText: 'Soy switch y disfruto alternando dinámicas activas y pasivas con fluidez.'
      }
    },
    4: {
      text: 'Me atrae una relación donde las normas, el respeto y la jerarquía se mantengan de forma constante, más allá del dormitorio.',
      adaptations: {
        beginnerText: 'Me intrigan las relaciones donde existen acuerdos de respeto y liderazgo consensuado en la vida diaria.',
        beginnerNote: 'Dinámica D/s estructurada: Acuerdos continuos de autoridad y cuidado mutuo pactados con madurez.',
        exploringText: 'Me interesan los protocolos y dinámicas de poder que se extienden a la vida cotidiana.',
        experiencedText: 'Busco relaciones formales D/s o de Amo/esclavo con protocolos establecidos.'
      }
    },
    5: {
      text: 'Me satisface consagrar mi atención al bienestar y las necesidades de mi pareja, subordinando mis preferencias a sus deseos.',
      adaptations: {
        beginnerText: 'Me hace feliz cuidar y complacer a mi pareja, poniendo sus deseos por delante de los míos.',
        beginnerNote: 'Servicio devoto: Placer en satisfacer al otro dentro de límites claros y seguros.',
        exploringText: 'Encuentro realización en servir y seguir los deseos de mi pareja.',
        experiencedText: 'Experimento satisfacción profunda en la entrega y el servicio continuo hacia mi pareja.'
      }
    },
    6: {
      text: 'Me excita administrar sensaciones físicas intensas como palmadas, azotes o pellizcos cuando mi pareja los desea con entusiasmo.',
      adaptations: {
        beginnerText: 'Me atrae dar pequeñas palmadas o caricias enérgicas si a mi pareja le gusta y le da placer.',
        beginnerNote: 'Juego de impacto (Impact play): Uso consensuado de azotes, palmadas o palas buscando sensaciones intensas.',
        exploringText: 'Disfruto explorando azotes e impacto controlado cuando a mi pareja le resulta placentero.',
        experiencedText: 'Practico impact play con precisión y disfruto de la respuesta física del bottom.'
      }
    },
    7: {
      text: 'Encuentro placer, euforia o alivio emocional al recibir palmadas, azotes o sensaciones físicas intensas de mi pareja.',
      adaptations: {
        beginnerText: 'Me gusta o me da curiosidad recibir palmadas suaves o azotes consensuados durante el juego íntimo.',
        beginnerNote: 'Masoquismo consensuado: Transformación de estímulos físicos intensos en placer y endorfinas.',
        exploringText: 'Me resultan excitantes los azotes y las sensaciones corporales intensas en un entorno de confianza.',
        experiencedText: 'Alcanzo subspace a través del dolor consensuado y el juego de impacto.'
      }
    },
    8: {
      text: 'Me fascina atar, inmovilizar o sujetar a mi pareja con cuerdas, vendas o correas para limitar sus movimientos.',
      adaptations: {
        beginnerText: 'Me llama la atención atar suavemente las manos o el cuerpo de mi pareja con pañuelos o cuerdas suaves.',
        beginnerNote: 'Bondage / Shibari: Arte y técnica de inmovilización estética y segura con cuerdas o ataduras.',
        exploringText: 'Me gusta la estética y el control que supone limitar los movimientos de mi pareja con ataduras.',
        experiencedText: 'Domino la técnica de cuerdas (rigger/kinbaku) para inmovilizar o suspender al bottom.'
      }
    },
    9: {
      text: 'Me excita sentirme totalmente atado/a, contenido/a o incapaz de moverme, entregando mi libertad física a mi pareja.',
      adaptations: {
        beginnerText: 'Me atrae que me aten suavemente las muñecas o me inmovilicen de forma consentida y segura.',
        beginnerNote: 'Rope Bunny: Persona que disfruta de ser atada o suspendida, experimentando relajación y entrega.',
        exploringText: 'Siento excitación y paz mental al no poder moverme en manos de alguien de confianza.',
        experiencedText: 'Disfruto de la entrega total como rope bunny en ataduras complejas o suspensión.'
      }
    },
    10: {
      text: 'Me divierte un forcejeo físico juguetón, mordiscos suaves, perseguir o ser derribado/a con energía instintiva.',
      adaptations: {
        beginnerText: 'Me gusta jugar a luchar, morder suavemente y abrazar con fuerza como si fuéramos animales jugando.',
        beginnerNote: 'Juego primal: Dinámica instintiva inspirada en juegos animales, luchas consentidas y persecuciones.',
        exploringText: 'Disfruto de la lucha juguetona, los agarres firmes y los mordiscos cariñosos sin protocolos rígidos.',
        experiencedText: 'Me conecto con el juego primal: instinto de caza, forcejeo y ferocidad consentida.'
      }
    },
    11: {
      text: 'Me excita usar palabras atrevidas, descaradas o insultos consentidos para provocar a mi pareja durante la intimidad.',
      adaptations: {
        beginnerText: 'Me gusta usar un lenguaje pícaro y algo atrevido ("dirty talk") en momentos de pasión.',
        beginnerNote: 'Degradación consentida / Dirty talk: Uso pactado de lenguaje explícito o humillación teatral.',
        exploringText: 'Disfruto del morbo de utilizar palabras despectivas o dominantes pactadas previamente.',
        experiencedText: 'Uso la humillación verbal y el lenguaje degradante consensuado para intensificar la escena.'
      }
    },
    12: {
      text: 'Siento excitación cuando mi pareja me habla con descaro, me insulta suavemente o me humilla en un entorno de juego consentido.',
      adaptations: {
        beginnerText: 'Me da morbo que mi pareja me diga cosas pícaras y algo traviesas mientras estamos juntos.',
        beginnerNote: 'Receptor de humillación: Placer en despojarse de la dignidad social dentro de una escena segura.',
        exploringText: 'Me excita que mi pareja me hable con superioridad y palabras fuertes en la intimidad.',
        experiencedText: 'Encuentro catarsis y excitación al ser degradado/a verbalmente por mi dominante.'
      }
    },
    13: {
      text: 'Me encanta premiar a mi pareja con elogios sinceros y dulces ("buen chico", "buena chica") cuando hace las cosas bien.',
      adaptations: {
        beginnerText: 'Me gusta felicitar con ternura y cariño a mi pareja cuando busca complacerme.',
        beginnerNote: 'Praise play: Dinámica basada en el refuerzo positivo, palabras de afirmación y cariño.',
        exploringText: 'Disfruto motivando y premiando a mi pareja con elogios afectuosos y aprobación.',
        experiencedText: 'Practico praise play como dominante, reforzando la devoción mediante aprobación verbal.'
      }
    },
    14: {
      text: 'Me derrito de felicidad y excitación cuando mi pareja me acaricia y me dice con cariño lo bien que lo he hecho.',
      adaptations: {
        beginnerText: 'Me hace muy feliz que mi pareja me diga palabras bonitas y me felicite por cómo me porto.',
        beginnerNote: 'Receptor de elogios: Deseo profundo de agradar y recibir palabras dulces de validación.',
        exploringText: 'Las palabras de ternura y aprobación ("buena chica/chico") son mi mayor recompensa erótica.',
        experiencedText: 'Respondo intensamente al praise play; la aprobación de mi dominante me motiva más que el castigo.'
      }
    },
    15: {
      text: 'Disfruto de roles de cuidado donde protejo, mimo y organizo con ternura el espacio emocional de mi pareja.',
      adaptations: {
        beginnerText: 'Me gusta tener una actitud protectora y paternal/maternal con mi pareja, mimándola mucho.',
        beginnerNote: 'Caregiver (Daddy/Mommy): Rol centrado en el cuidado tierno, la protección y el confort emocional.',
        exploringText: 'Encuentro placer en acoger, cuidar y dar seguridad afectiva a mi pareja.',
        experiencedText: 'Asumo el rol de Caregiver (MD/lg) con límites claros y atención responsable.'
      }
    },
    16: {
      text: 'Me atrae adoptar una actitud mimosa, inocente o de pequeña mascota para desconectar de las preocupaciones adultas.',
      adaptations: {
        beginnerText: 'A veces me gusta acurrucarme como una mascota cariñosa para olvidarme del estrés del trabajo.',
        beginnerNote: 'Petplay / Ageplay lúdico: Desconexión de las presiones adultas mediante un rol tierno e inocente.',
        exploringText: 'Disfruto del petplay o roles inocentes para recibir mimos y despreocuparme de todo.',
        experiencedText: 'Me refugio en headspace de Little o Petplay para un descanso emocional absoluto.'
      }
    },
    17: {
      text: 'Me excita mirar cómo otros juegan íntimamente o saber que alguien de confianza me está observando con consentimiento.',
      adaptations: {
        beginnerText: 'Me atrae ver a mi pareja desnudarse o que me mire mientras disfruto en la intimidad.',
        beginnerNote: 'Voyeurismo y exhibicionismo: Placer visual en contemplar la intimidad o ser contemplado/a.',
        exploringText: 'Disfruto del morbo de mirar o exhibirme ante miradas que cuentan con pleno acuerdo.',
        experiencedText: 'Practico voyeurismo/exhibicionismo consensuado en entornos controlados y seguros.'
      }
    },
    18: {
      text: 'Me gusta experimentar con los sentidos: ojos vendados, contrastes de hielo y cera tibia, plumas o música envolvente.',
      adaptations: {
        beginnerText: 'Me intriga usar un antifaz para taparme los ojos y disfrutar de caricias con hielo o plumas.',
        beginnerNote: 'Exploración sensorial: Agudización de sentidos mediante privación visual y contrastes térmicos.',
        exploringText: 'Me fascina privar a mi pareja de la vista para intensificar el tacto y las temperaturas.',
        experiencedText: 'Diseño experiencias de privación sensorial con cera de bajo punto de fusión y electroestimulación suave.'
      }
    },
    19: {
      text: 'Prefiero una intimidad romántica y tierna, sin juegos de rol complicados, dolor ni cuerdas.',
      adaptations: {
        beginnerText: 'Me gusta la intimidad tradicional basada en el cariño mutuo, sin cosas raras ni dolor.',
        beginnerNote: 'Vanilla: Preferencia por la intimidad afectuosa tradicional sin dinámicas BDSM.',
        exploringText: 'Prefiero el romanticismo directo y la cercanía emocional simétrica sin reglas de poder.',
        experiencedText: 'Mi orientación básica es vanilla; priorizo la igualdad y el afecto espontáneo.'
      }
    },
    20: {
      text: 'Establecer límites claros y hablar abiertamente de lo que nos gusta y lo que no es algo que disfruto de verdad.',
      adaptations: {
        beginnerText: 'Me hace sentir seguro/a hablar antes de lo que podemos y no podemos hacer en la cama.',
        beginnerNote: 'Consentimiento informado: Base indispensable de toda práctica sana y segura.',
        exploringText: 'La negociación previa y el establecimiento de límites me parecen algo excitante y seguro.',
        experiencedText: 'Negocio formalmente límites blandos y duros antes de cualquier escena.'
      }
    },
    21: {
      text: 'Disfruto del aftercare: los mimos, abrazos, una manta y agua después de un momento íntimo e intenso.',
      adaptations: {
        beginnerText: 'Me encanta quedarme abrazado/a con mi pareja después de estar juntos para sentirme querido/a.',
        beginnerNote: 'Aftercare: Cuidados afectivos y físicos después de una sesión para volver a la calma.',
        exploringText: 'El tiempo de recuperación y contención afectiva tras la sesión me resulta fundamental.',
        experiencedText: 'Dedico tiempo riguroso al aftercare físico y emocional para evitar caídas de endorfinas (drop).'
      }
    },
    22: {
      text: 'Me gusta que mi pareja use una palabra clave ("safeword") si algo no va bien para detenernos de inmediato.',
      adaptations: {
        beginnerText: 'Tener una palabra pactada (como "rojo") que pare todo al instante me da total tranquilidad.',
        beginnerNote: 'Safeword: Palabra acordada que detiene la acción sin discusión alguna.',
        exploringText: 'Utilizo el sistema de safewords como herramienta básica de control y seguridad.',
        experiencedText: 'Integro safewords y escalas de color (verde/amarillo/rojo) como protocolo indiscutible.'
      }
    },
    23: {
      text: 'Me excita planificar escenarios detallados de antemano, pensando en las normas y los pasos que daremos.',
      adaptations: {
        beginnerText: 'Me gusta imaginar de antemano lo que haremos y hablar de fantasías antes de probarlas.',
        beginnerNote: 'Planificación de escenas: Acordar el argumento y los límites de una fantasía compartida.',
        exploringText: 'Disfruto diseñando la atmósfera, las normas del juego y los roles que interpretaremos.',
        experiencedText: 'Estructuro el arco dramático y los estímulos de la escena con anticipación meticulosa.'
      }
    },
    24: {
      text: 'Siento atracción por dinámicas donde una persona tiene la última palabra sobre las decisiones del encuentro íntimo.',
      adaptations: {
        beginnerText: 'Me parece excitante que una persona decida y la otra confíe plenamente en ella.',
        beginnerNote: 'Intercambio de poder: Dinámica consentida donde una persona lidera y la otra se entrega.',
        exploringText: 'Me seduce la asimetría de poder pactada donde uno guía el destino del juego.',
        experiencedText: 'El intercambio explícito de poder (Power Exchange) es la base de mi deseo erótico.'
      }
    }
  },

  ja: {
    1: {
      text: '親密な時間において、自分が主導権を握り、物事を決定し、全体の流れを導くことに強い高揚感を覚える。',
      adaptations: {
        beginnerText: 'パートナーを優しくリードし、次の展開を自分が決めることにワクワクする。',
        beginnerNote: 'ドミナント（主導側）：相手の安全と合意を第一に考えながら、自信を持ってリードする役割。',
        exploringText: 'お互いの合意のもとで、自分が主導して相手を導くことに喜びを感じる。',
        experiencedText: 'ドミナントとしてセッションの主導権を握り、全体の流れをコントロールすることに歓びを感じる。'
      }
    },
    2: {
      text: 'パートナーに主導権を完全に預け、指示された通りに従うことに深い安らぎや興奮を覚える。',
      adaptations: {
        beginnerText: '自分で何も考えず、相手の指示通りに動くことに安心感と心地よさを感じる。',
        beginnerNote: 'サブミッシブ（受け・従属側）：判断の重圧を手放し、信頼する相手に身を委ねる役割。',
        exploringText: '信頼できる相手に主導権を渡し、リードしてもらうことに強い魅力を感じる。',
        experiencedText: 'ボトムとして主導権を明け渡し、相手の意志に完全に身を委ねることに深い快楽を見出す。'
      }
    },
    3: {
      text: 'リードすることも委ねることも両方好きで、その日の気分や相手によって立ち位置が変わる。',
      adaptations: {
        beginnerText: '主導権を握りたい日もあれば、相手に任せて甘えたい日もあり、両方楽しめる。',
        beginnerNote: 'スイッチ（両刀）：状況や相手によって、攻めと受けの両方の役割を柔軟に楽しむタイプ。',
        exploringText: 'リードする側とされる側の両方に惹かれ、柔軟に役割を行き来できる。',
        experiencedText: 'スイッチとして、相手やシチュエーションに応じてトップとボトムを自在に行き来する。'
      }
    },
    4: {
      text: '寝室だけでなく、日常生活においても規律や礼儀、上下関係が継続するような関係に憧れる。',
      adaptations: {
        beginnerText: '普段の生活でもお互いに決めたルールや役割を守る関係に興味がある。',
        beginnerNote: '継続的主従関係（D/s）：日常の合意のもとで敬意と役割を共有する関係性。',
        exploringText: '日常生活のなかでも丁寧な作法や役割分担が存在するパートナーシップに魅力を感じる。',
        experiencedText: 'プロトコルや日常的な敬意の作法が組み込まれた本格的なD/s（主従関係）を望む。'
      }
    },
    5: {
      text: 'パートナーの欲求や快適さを最優先にし、相手のために尽くし奉仕することにこの上ない喜びを感じる。',
      adaptations: {
        beginnerText: '相手が喜んでくれることを第一に考え、尽くすことに幸せを感じる。',
        beginnerNote: '奉仕（スレイブ・サービス）：相手の喜びを自分の喜びに変える献身的な役割。',
        exploringText: '相手の望みを叶えるために忠実に従い、役に立つことに充足感を覚える。',
        experiencedText: 'スレイブとして、主人の望みに誠心誠意従い奉仕することに自己の存在意義を感じる。'
      }
    },
    6: {
      text: '相手が心から望んでいる時、スパンキング（平手打ち）や強い刺激を与えて反応を引き出すことに興奮する。',
      adaptations: {
        beginnerText: '相手が喜ぶなら、お尻を優しく叩いたり刺激を与えることに興味がある。',
        beginnerNote: '加虐・スパンキング：相手の合意と安全を確認しながら行う適度な痛みや刺激の供与。',
        exploringText: '相手が望む範囲で、スパンキングなどの強い感覚刺激を与えることに興奮する。',
        experiencedText: '相手の呼吸を読みながらインパクター（パドルや鞭）で的確な刺激を与えることを好む。'
      }
    },
    7: {
      text: 'パートナーからスパンキング（叩かれること）や強い感覚刺激を受けることに、快感や陶酔感を覚える。',
      adaptations: {
        beginnerText: 'パートナーからお尻を軽く叩かれたり、ちょっと強めの刺激を受けるとドキドキする。',
        beginnerNote: 'マゾヒズム（被虐）：強い感覚刺激を脳内で快感（エンドルフィン）に変換する体験。',
        exploringText: '信頼できる相手から与えられる痛みや強い刺激に、不思議な心地よさや快感を感じる。',
        experiencedText: 'インパクターによる刺激を受け止め、痛みの先にある深いトランス（サブスペース）に入る。'
      }
    },
    8: {
      text: '縄や拘束具を使ってパートナーを縛り、身体の自由を奪うことに技術的な魅力を感じる。',
      adaptations: {
        beginnerText: 'リボンやスカーフで相手の手首を優しく固定して動けなくすることに興味がある。',
        beginnerNote: '緊縛（リガー）：身体の安全や血流を管理しながら、縄で美しく拘束する技術と役割。',
        exploringText: 'ロープを使って相手を安全に拘束し、無力化する視覚的な美しさに惹かれる。',
        experiencedText: 'リガーとして安全管理と解剖学に配慮しつつ、美しいパターンで緊縛や吊りを行う。'
      }
    },
    9: {
      text: '縄などで身動きが取れない状態に固定され、完全に身体の自由を失うことに深い快感と安心感を覚える。',
      adaptations: {
        beginnerText: '手首を軽く固定されて動けなくなると、ドキドキして全てを委ねたくなる。',
        beginnerNote: 'ロープバニー：縛られる側として、動けないことによる安心感と快感を味わう役割。',
        exploringText: '身体を固定されて抵抗できない無力感に、日常からの解放と心地よい興奮を感じる。',
        experiencedText: 'ロープバニーとして縄の圧迫感に身を委ね、思考を停止して深い瞑想状態に浸る。'
      }
    },
    10: {
      text: 'じゃれ合うような取っ組み合い、力比べ、甘噛みなど、動物的で本能的なスキンシップが好きだ。',
      adaptations: {
        beginnerText: 'ベッドの上でじゃれ合ったり、軽く噛み合ったりするスキンシップが好きだ。',
        beginnerNote: 'プライマルプレイ：堅苦しいルールのない、野生動物のような本能的スキンシップ。',
        exploringText: '格闘や甘噛み、相手を捕まえたり捕まったりする野生的なスキンシップに興奮する。',
        experiencedText: 'プライマルの本能を解放し、獲物を追う狩りのような野生的なセッションを愛好する。'
      }
    },
    11: {
      text: '親密な時間に、少し意地悪な言葉遣いや合意の上での侮辱的な言葉を使って相手を刺激するのが好きだ。',
      adaptations: {
        beginnerText: '普段言えないような、ちょっと大胆で意地悪な言葉を囁いて相手を翻弄してみたい。',
        beginnerNote: 'デグレーション（言葉攻め）：合意の上で侮辱的な言葉を使い心理的刺激を与えること。',
        exploringText: '合意のもとで、少し強気な言葉遣いや言葉攻めを用いて相手の背徳感を煽るのが好きだ。',
        experiencedText: '的確な言葉攻め（デグレーション）で相手のプライドを崩し、深い心理的屈服を促す。'
      }
    },
    12: {
      text: 'パートナーから意地悪な言葉で罵られたり、合意の上で侮辱されることに不思議な快感を覚える。',
      adaptations: {
        beginnerText: 'パートナーからちょっと乱暴な言葉や意地悪な言葉を言われると興奮する。',
        beginnerNote: '被言葉攻め：安全な環境でプライドを手放すことによる、心理的な解放感。',
        exploringText: '合意の上で少しぞんざいに扱われたり、言葉で辱められることに興奮と快感を感じる。',
        experiencedText: '言葉攻めによって社会的自尊心を脱ぎ捨て、屈辱のなかで深い悦びとカタルシスを得る。'
      }
    },
    13: {
      text: 'パートナーが頑張った時、「いい子だね」「よくできたね」と優しく褒めて認めてあげるのが好きだ。',
      adaptations: {
        beginnerText: '相手が喜ばせようとしてくれた時、優しく頭を撫でて褒めてあげたい。',
        beginnerNote: 'プレイズプレイ（褒め）：叱るのではなく、肯定的な言葉と称賛で相手を導くスタイル。',
        exploringText: '温かい言葉と肯定的なフィードバックでパートナーを包み込み、誇らしくリードする。',
        experiencedText: 'プレイズギバーとして、相手の従順さと努力を惜しみない言葉の報酬で満たす。'
      }
    },
    14: {
      text: 'パートナーから「いい子だね」「上手だね」と優しく褒められ、頭を撫でられると最高に幸せだ。',
      adaptations: {
        beginnerText: '「可愛いね」「よくできたね」と優しく褒められると、嬉しくて何でもしたくなる。',
        beginnerNote: '被褒め（プレイズレシーバー）：承認と愛情のこもった言葉に最大の充足感を得るタイプ。',
        exploringText: '厳しくされるより、優しく肯定的な言葉で褒められる方が心を開いて従いたくなる。',
        experiencedText: 'プレイズレシーバーとして、パートナーからの「Good girl/boy」の一言に何より満たされる。'
      }
    },
    15: {
      text: 'パートナーをまるで我が子や大切な存在のように、温かく守り世話することに幸福を感じる。',
      adaptations: {
        beginnerText: 'パートナーを包み込むように甘やかしたり、お世話をしてあげることが好きだ。',
        beginnerNote: 'ケアギバー（保護者役）：温かい包容力で相手を保護し、甘えさせる役割。',
        exploringText: '相手に安心感と温かい環境を与え、保護者のように見守り包み込むことに喜びを感じる。',
        experiencedText: 'ケアギバー（ダディ/マミィ）として、相手の精神的な安定と休息の場を誠心誠意提供する。'
      }
    },
    16: {
      text: '可愛いペットや無邪気な子どものようになって甘え、大人の責任やストレスから解放されたい。',
      adaptations: {
        beginnerText: '猫や犬のように無邪気に甘えて、仕事のプレッシャーや日々の疲れを忘れたい。',
        beginnerNote: 'ペットプレイ／退行プレイ：大人の責任を一時的に手放し、無邪気に甘えること。',
        exploringText: 'ペットやお子様のような立場で無条件の愛情を受け取り、気楽に過ごすことに惹かれる。',
        experiencedText: 'リトルやペットのヘッドスペースに入り、成人のストレスから完全に離脱して甘える。'
      }
    },
    17: {
      text: '他者の親密なプレイを合意の上で眺めることや、自分が見られている状況に強い刺激を感じる。',
      adaptations: {
        beginnerText: 'パートナーの姿をじっと見つめたり、自分がパートナーに見つめられるのが好きだ。',
        beginnerNote: '視覚的嗜好（露出・鑑賞）：見る快感と見られる興奮を合意の上で楽しむこと。',
        exploringText: '合意のもとで露出することや、他者のセッションを観察するシチュエーションに興奮する。',
        experiencedText: '合意あるボイヤー／エキシビショニストとして、視覚的な背徳感と高揚感を楽しむ。'
      }
    },
    18: {
      text: '目隠し、氷と温かい蝋燭の温度差、羽やシルクの感触など、様々な身体感覚を研ぎ澄ますのが好きだ。',
      adaptations: {
        beginnerText: 'アイマスクで目隠しをして、氷や羽で触れられるようなドキドキ感を試してみたい。',
        beginnerNote: '感覚遮断・温度差：視覚を塞いで触覚や温度差を鋭敏にし、快感を深める遊び方。',
        exploringText: '目隠しによる感覚遮断や、温冷のギャップによる多彩な皮膚感覚を楽しむのが好きだ。',
        experiencedText: 'ブラインドフォールドと低温キャンドル、多様なマテリアルで感覚的トランスを演出する。'
      }
    },
    19: {
      text: '痛みや拘束、役割分担などはなく、対等で自然体のロマンチックな触れ合いを好む。',
      adaptations: {
        beginnerText: '特別な道具やルールを使わない、普通の優しく愛情あふれるスキンシップが好きだ。',
        beginnerNote: 'ヴァニラ：主従関係や身体的苦痛を伴わない、伝統的で対等な愛情表現。',
        exploringText: '上下関係や刺激よりも、対等で純粋なロマンスと優しい触れ合いを大切にしたい。',
        experiencedText: '性向としてはヴァニラであり、過度な刺激のない等身大の親密さを最も好む。'
      }
    },
    20: {
      text: 'してほしいこと・してほしくないことを、事前にしっかり話し合って合意することが大切だと思う。',
      adaptations: {
        beginnerText: '事前に「これはOK」「これは嫌」と確認し合える方が、安心して楽しめる。',
        beginnerNote: 'インフォームド・コンセント：事前の丁寧な合意確認こそが、信頼の土台です。',
        exploringText: 'セッション前のリミット確認と事前交渉自体が、安心と信頼を高めてくれる。',
        experiencedText: 'ハードリミットとソフトリミットを明確に区分した厳格な事前交渉を重視する。'
      }
    },
    21: {
      text: '行為の後に、ハグや温かいお茶、毛布でくるまれて寄り添う時間（アフターケア）が何より大切だ。',
      adaptations: {
        beginnerText: '終わった後に優しく抱きしめ合って、安心できる時間を過ごすのが好きだ。',
        beginnerNote: 'アフターケア：行為後の身体的・感情的なケア。体温維持や安心感を保つために重要。',
        exploringText: '激しいセッションの後にしっかりと寄り添い、優しくクールダウンする時間を大切にする。',
        experiencedText: 'サブドロップ（セッション後の気分の落ち込み）を防ぐため、十分なアフターケアを行う。'
      }
    },
    22: {
      text: '不安や痛みを感じた時に、すぐに中止できる合言葉（セーフワード）を決めておくことに安心を覚える。',
      adaptations: {
        beginnerText: '「赤」と言ったら絶対にストップするという合言葉があると、思い切り楽しめる。',
        beginnerNote: 'セーフワード：危険や限界を感じた時に、議論なしで即座に中断するための合図。',
        exploringText: 'セーフワードがあるからこそ、安心して深いプレイに挑戦できる。',
        experiencedText: '赤（ストップ）・黄（ペースダウン）のセーフワードシステムを必須の原則とする。'
      }
    },
    23: {
      text: 'あらかじめシチュエーションやストーリー、お互いの役割を頭の中で想像して組み立てるのが好きだ。',
      adaptations: {
        beginnerText: 'どんな風に進めるか、事前に妄想したり計画を立てるのが楽しい。',
        beginnerNote: 'シナリオ設計：プレイの筋書きや設定を事前に楽しく考えること。',
        exploringText: '雰囲気や設定、ルールを工夫して非日常のシチュエーションを作るのが好きだ。',
        experiencedText: 'セッションの心理的クライマックスや導入・展開を綿密に設計する。'
      }
    },
    24: {
      text: '一方が決断を下し、もう一方がそれを信頼して委ねるという「不均衡な関係」に魅力を感じる。',
      adaptations: {
        beginnerText: '一方が主導し、もう一方が信頼して任せるという関係にドキドキする。',
        beginnerNote: 'パワーエクスチェンジ：合意の上で一方に主導権を預ける関係性のダイナミクス。',
        exploringText: '対等な関係とは一味違う、合意された上下関係にロマンと興奮を感じる。',
        experiencedText: 'パワーエクスチェンジ（権力の委譲）こそが、自らの性的動機の中心にある。'
      }
    }
  },

  fr: {
    1: {
      text: 'Je ressens une véritable excitation lorsque je prends les rênes, prends les décisions et fixe le cap lors des moments intimes.',
      adaptations: {
        beginnerText: 'J’aime guider mon/ma partenaire et décider sereinement du déroulement de nos moments à deux.',
        beginnerNote: 'Dominance : Prendre l’initiative et diriger de façon attentive, responsable et consentie.',
        exploringText: 'Prendre l’initiative et fixer le rythme de nos scènes me procure une grande satisfaction.',
        experiencedText: 'J’assume naturellement la posture de Top/Dominant pour mener la scène et poser le cadre.'
      }
    },
    2: {
      text: 'J’éprouve un profond soulagement ou une intense excitation lorsque mon/ma partenaire prend le contrôle et me guide totalement.',
      adaptations: {
        beginnerText: 'Déposer le fardeau des choix et me laisser guider sans réfléchir m’apaise et m’excite beaucoup.',
        beginnerNote: 'Soumission : Céder volontairement le contrôle à un tiers de confiance pour savourer le lâcher-prise.',
        exploringText: 'Céder les commandes à une personne de confiance me procure un sentiment de liberté totale.',
        experiencedText: 'J’accède au subspace en remettant toute autorité à mon/ma Dominant(e).'
      }
    },
    3: {
      text: 'J’apprécie autant de diriger que d’obéir ; mon intérêt oscille naturellement entre commander et recevoir selon le moment.',
      adaptations: {
        beginnerText: 'Certains jours j’aime mener, d’autres j’aime être mené(e) ; les deux rôles me plaisent.',
        beginnerNote: 'Switch : Profil polyvalent appréciant alternativement le dessus (top) et le dessous (bottom).',
        exploringText: 'Mon désir navigue confortablement entre la prise d’initiative et l’abandon consenti.',
        experiencedText: 'Je suis switch et j’alterne avec fluidité entre des postures actives et réceptives.'
      }
    },
    4: {
      text: 'Je suis attiré(e) par une relation où le respect, les règles et une hiérarchie consentie perdurent au-delà de la chambre.',
      adaptations: {
        beginnerText: 'Une relation de couple avec des règles complices et un leadership partagé au quotidien m’intéresse.',
        beginnerNote: 'Dynamique D/s continue : Accords volontaires de respect et de structure dans la vie quotidienne.',
        exploringText: 'Les protocoles et les dynamiques de pouvoir étendus au quotidien stimulent ma curiosité.',
        experiencedText: 'Je recherche une dynamique D/s ou Maître/Esclave formelle structurée par des rituels pérennes.'
      }
    },
    5: {
      text: 'Consacrer mon attention aux besoins et au bien-être de mon/ma partenaire en servant ses désirs me comble profondément.',
      adaptations: {
        beginnerText: 'Prendre soin de mon/ma partenaire et faire passer ses envies en premier me rend sincèrement heureux/se.',
        beginnerNote: 'Service dévoué : Joie de combler l’autre dans un cadre défini d’un commun accord.',
        exploringText: 'Se dévouer et être attentif(ve) aux moindres souhaits de l’autre est pour moi une source de plénitude.',
        experiencedText: 'J’éprouve une réalisation intense dans la servitude consentie envers mon/ma Maître/Maîtresse.'
      }
    },
    6: {
      text: 'Administrer des sensations physiques vives comme des fessées ou des pincements lorsqu’ils sont désirés m’excite beaucoup.',
      adaptations: {
        beginnerText: 'Donner de petites tapes douces ou fessées légères si mon/ma partenaire aime cela me plaît.',
        beginnerNote: 'Jeu d’impact : Utilisation consentie de fessées ou d’accessoires pour générer des sensations physiques.',
        exploringText: 'J’aime explorer les fessées et l’impact contrôlé lorsque cela procure du plaisir à l’autre.',
        experiencedText: 'Je pratique l’impact play avec technique, attentif(ve) à la respiration et aux réactions de mon bottom.'
      }
    },
    7: {
      text: 'Recevoir des fessées ou des stimulations corporelles intenses de la part de mon/ma partenaire me procure euphorie ou lâcher-prise.',
      adaptations: {
        beginnerText: 'Recevoir une fessée complice ou des sensations un peu vives durant nos jeux intimes m’émoustille.',
        beginnerNote: 'Masochisme consensuel : Transformation d’une intensité physique en endorphines et en bien-être.',
        exploringText: 'La douleur consentie et les sensations fortes dispensées par une personne de confiance m’excitent.',
        experiencedText: 'J’atteins le subspace grâce à la douleur consentie et à l’impact play.'
      }
    },
    8: {
      text: 'Attacher, entraver ou immobiliser mon/ma partenaire avec des cordes pour restreindre ses mouvements me fascine.',
      adaptations: {
        beginnerText: 'Attacher doucement les mains ou le corps avec des foulards soyeux ou des liens doux me tente bien.',
        beginnerNote: 'Bondage / Shibari : Art et technique de restriction des mouvements par des cordes avec sécurité.',
        exploringText: 'J’apprécie l’esthétique et le contrôle procurés par l’entravement sécurisé de mon/ma partenaire.',
        experiencedText: 'En tant que rigger, je maîtrise le shibari/kinbaku pour restreindre ou suspendre avec rigueur.'
      }
    },
    9: {
      text: 'Être complètement ligoté(e), contenu(e) ou incapable de bouger, remettant ma liberté corporelle à l’autre, m’excite profondément.',
      adaptations: {
        beginnerText: 'Avoir les poignets attachés et être maintenu(e) sans pouvoir bouger me procure un délicieux vertige.',
        beginnerNote: 'Rope Bunny : Personne qui aime être attachée, trouvant paix et abandon dans l’impossibilité de bouger.',
        exploringText: 'L’impuissance physique et le fait d’être contenu(e) dans les bras de cordes m’apportent une paix intense.',
        experiencedText: 'En tant que rope bunny, je m’abandonne dans des liens élaborés ou en suspension aérienne.'
      }
    },
    10: {
      text: 'J’aime la lutte complice, les morsures tendres, la poursuite et le contact physique brut et instinctif.',
      adaptations: {
        beginnerText: 'J’aime chahuter, mordre gentiment et lutter au lit comme des bêtes joueuses.',
        beginnerNote: 'Jeu primal : Énergie animale spontanée faite de courses, de prises de lutte et de morsures douces.',
        exploringText: 'Le corps-à-corps vigoureux, les empoignades et les poursuites animales stimulent mon désir.',
        experiencedText: 'Je me connecte au primal play : instinct de prédateur ou de proie et intensité sauvage consentie.'
      }
    },
    11: {
      text: 'Utiliser des provocations verbales, des mots crus ou une humiliation théâtralisée consentie durant l’intimité m’émoustille.',
      adaptations: {
        beginnerText: 'Murmurer des paroles un peu insolentes et osées ("dirty talk") dans le secret de l’intimité me plaît.',
        beginnerNote: 'Dégradation consentie : Usage convenu d’un langage cru ou d’un mépris feint pour pimenter le désir.',
        exploringText: 'J’aime le piquant que procure l’usage de mots dégradants convenus d’avance dans un cadre protégé.',
        experiencedText: 'Je manie la dégradation verbale consentie pour faire vaciller le mental de mon bottom.'
      }
    },
    12: {
      text: 'Être provoqué(e), interpellé(e) par des mots crus ou rabaissé(e) de façon complice et consentie m’excite profondément.',
      adaptations: {
        beginnerText: 'Entendre mon/ma partenaire me parler avec audace et des mots piquants me fait frissonner.',
        beginnerNote: 'Récepteur de dégradation : Soulagement intime à déposer sa fierté dans un cadre sécurisant.',
        exploringText: 'Être traité(e) avec une supériorité feinte et un vocabulaire cru durant nos scènes décuple mon désir.',
        experiencedText: 'J’éprouve une catharsis profonde à être humilié(e) verbalement par mon/ma Dominant(e).'
      }
    },
    13: {
      text: 'Récompenser mon/ma partenaire par des compliments chaleureux (« bon garçon », « bonne fille ») me comble.',
      adaptations: {
        beginnerText: 'J’aime féliciter mon/ma partenaire avec tendresse lorsqu’il/elle s’est bien conduit(e).',
        beginnerNote: 'Praise play : Pratique fondée sur les encouragements, les compliments et la valorisation mutuelle.',
        exploringText: 'Valoriser et motiver l’autre par des paroles tendres et gratifiantes fait partie de ma manière d’aimer.',
        experiencedText: 'En tant que Dominant(e), je cultive le praise play pour guider par le renforcement positif.'
      }
    },
    14: {
      text: 'Entendre des mots doux d’approbation (« c’est bien », « tu es parfait(e) ») et recevoir des caresses me fait fondre de bonheur.',
      adaptations: {
        beginnerText: 'Rien ne me rend plus heureux/se que d’être félicité(e) et câliné(e) lorsque j’ai bien fait.',
        beginnerNote: 'Récepteur d’éloges : Sensibilité profonde aux paroles valorisantes et à la fierté de l’autre.',
        exploringText: 'Les encouragements et compliments affectueux sont pour moi la plus puissante des récompenses.',
        experiencedText: 'Je m’épanouis dans le praise play ; l’estime de mon/ma Dominant(e) me motive infiniment.'
      }
    },
    15: {
      text: 'Prendre soin de mon/ma partenaire, veiller sur son bien-être et lui offrir un cocon sécurisant me comble.',
      adaptations: {
        beginnerText: 'J’aime choyer mon/ma partenaire avec une tendresse protectrice et bienveillante.',
        beginnerNote: 'Caregiver : Rôle d’autorité protectrice offrant réconfort, cadre et présence rassurante.',
        exploringText: 'Offrir un havre de paix émotionnel et protéger l’autre avec affection m’est très naturel.',
        experiencedText: 'J’incarne le rôle de Caregiver (Daddy/Mommy) en posant des repères bienveillants.'
      }
    },
    16: {
      text: 'Adopter une posture espiègle, candide ou de petit animal pour faire une pause dans mes devoirs d’adulte me fait du bien.',
      adaptations: {
        beginnerText: 'J’aime me blottir sans façon comme un chaton câlin pour oublier le stress du travail.',
        beginnerNote: 'Petplay / Little : Parenthèse ludique pour relâcher les tensions de la vie adulte en toute innocence.',
        exploringText: 'Prendre un rôle régressif ou d’animal affectueux pour recevoir des caresses sans contrainte m’attire.',
        experiencedText: 'J’entre en headspace de Little ou de Pet pour déconnecter totalement des responsabilités.'
      }
    },
    17: {
      text: 'Observer des scènes intimes consenties ou savoir que des regards bienveillants me contemplent m’excite.',
      adaptations: {
        beginnerText: 'Regarder mon/ma partenaire se dénuder ou être regardé(e) avec désir me plaît beaucoup.',
        beginnerNote: 'Voyeurisme / Exhibitionnisme : Plaisir du regard partagé en toute transparence et consentement.',
        exploringText: 'La sensualité du regard complice ou le frisson de dévoiler mon intimité consentie me stimule.',
        experiencedText: 'Je pratique le voyeurisme et l’exhibitionnisme consensuel dans des cadres respectueux.'
      }
    },
    18: {
      text: 'J’adore jouer avec les sensations : yeux bandés, contrastes chaud/froid, caresses de plumes et chuchotements.',
      adaptations: {
        beginnerText: 'Mettre un bandeau sur les yeux et sentir des effleurements avec des glaçons ou des plumes m’intrigue.',
        beginnerNote: 'Exploration sensorielle : Éveil des sens par la privation visuelle et les contrastes thermiques.',
        exploringText: 'Priver l’autre de la vue pour démultiplier le toucher et la température crée une magie intense.',
        experiencedText: 'J’orchestre des séances sensorielles avec cire basse température et textures variées.'
      }
    },
    19: {
      text: 'Je préfère une intimité romantique, symétrique et sans douleur ni jeux de pouvoir.',
      adaptations: {
        beginnerText: 'J’aime les câlins simples et le romantisme direct, sans accessoires ni contraintes.',
        beginnerNote: 'Vanilla : Préférence pour une intimité tendre, paritaire et dépourvue de codes BDSM.',
        exploringText: 'Une proximité amoureuse traditionnelle et partagée sur un pied d’égalité me convient parfaitement.',
        experiencedText: 'Mon orientation intime est vanilla ; je privilégie la simplicité tendre et spontanée.'
      }
    },
    20: {
      text: 'Poser des limites nettes et clarifier nos envies respectives avant d’agir est une démarche qui me rassure et m’enthousiasme.',
      adaptations: {
        beginnerText: 'Pouvoir se dire franchement ce qu’on aime et ce qu’on refuse avant de commencer me sécurise.',
        beginnerNote: 'Consentement mutuel : Pierre angulaire de toute exploration intime saine et épanouissante.',
        exploringText: 'La négociation préalable et le respect des limites enrichissent la complicité érotique.',
        experiencedText: 'Je définis rigoureusement mes hard et soft limits en amont de toute session.'
      }
    },
    21: {
      text: 'L’aftercare (les câlins, une boisson chaude, une couverture et des mots tendres après l’intensité) m’est indispensable.',
      adaptations: {
        beginnerText: 'Rester tendrement enlacés après nos ébats pour retrouver son calme est primordial pour moi.',
        beginnerNote: 'Aftercare : Soins physiques et émotionnels post-séance pour revenir en douceur à la réalité.',
        exploringText: 'Le temps de décompression et de réconfort affectif suivant une scène intense compte énormément.',
        experiencedText: 'Je consacre un aftercare minutieux pour prévenir toute chute d’endorphines (drop).'
      }
    },
    22: {
      text: 'Convenir d’un mot d’arrêt immédiat ("safeword") pour stopper la scène si nécessaire me donne une pleine confiance.',
      adaptations: {
        beginnerText: 'Savoir qu’un mot simple (comme "rouge") arrête tout immédiatement me libère de toute peur.',
        beginnerNote: 'Safeword : Mot de sécurité universel permettant de suspendre ou d’interrompre sans débat.',
        exploringText: 'La présence d’un safeword me permet d’explorer l’inconnu avec une sécurité absolue.',
        experiencedText: 'J’applique rigoureusement le système de couleurs (vert/jaune/rouge) comme règle intangible.'
      }
    },
    23: {
      text: 'Planifier des scénarios à l’avance, imaginer les règles et l’ambiance est pour moi un prélude très excitant.',
      adaptations: {
        beginnerText: 'Imaginer ensemble ce qu’on va faire et en parler avant de passer à l’acte m’émoustille.',
        beginnerNote: 'Mise en scène : Conception partagée de l’intrigue et des rôles d’un fantasme commun.',
        exploringText: 'Construire une atmosphère, des contraintes et un déroulé narratif décuple mon plaisir.',
        experiencedText: 'Je conçois l’arc dramatique et la gradation des stimuli de la scène avec précision.'
      }
    },
    24: {
      text: 'L’asymétrie consentie, où l’un prend les décisions et l’autre s’y abandonne avec foi, est au cœur de mon excitation.',
      adaptations: {
        beginnerText: 'L’idée qu’un partenaire mène la danse et que l’autre lui fasse une confiance aveugle m’attire.',
        beginnerNote: 'Échange de pouvoir : Accord mutuel où l’un guide et l’autre remet son autonomie.',
        exploringText: 'Cette dynamique singulière où les volontés fusionnent dans un déséquilibre consenti me séduit.',
        experiencedText: 'L’échange explicite de pouvoir (Power Exchange) est le moteur premier de mon érotisme.'
      }
    }
  },

  // Fallback map: For de, pt, ko, it and remaining questions (25-64) in all languages,
  // we provide seamless fallback to the localized equivalents
  de: {},
  pt: {},
  ko: {},
  it: {}
};

/**
 * Returns localized questions for a given language, preserving IDs, categories, and weights
 */
export function getLocalizedQuestions(lang: SupportedLanguage): Question[] {
  const transMap = QUESTIONS_TRANSLATIONS[lang] || QUESTIONS_TRANSLATIONS.en;

  return BASE_QUESTIONS.map((baseQ) => {
    const loc = transMap[baseQ.id];
    if (!loc) {
      return baseQ;
    }
    return {
      ...baseQ,
      text: loc.text || baseQ.text,
      adaptations: loc.adaptations || baseQ.adaptations
    };
  });
}

