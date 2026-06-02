// ============================================================
// PACHOLOK TEAM — CONFIGURAÇÃO CENTRAL
// Edite este arquivo para atualizar todo o conteúdo da página
// ============================================================

export const siteConfig = {
  // ----------------------------------------------------------
  // MARCA
  // ----------------------------------------------------------
  brand: {
    name: "Pacholok Team",
    tagline: "O melhor shape da sua vida. Forjado. Construído. Não fabricado.",
    logo: "/assets/logo.png",
    favicon: "/assets/logo.png",
    heroImage: "/assets/hero.jpg", // Substitua por imagem real do Pacho
    ogImage: "/assets/og-image.jpg", // Para Open Graph (redes sociais)
  },

  // ----------------------------------------------------------
  // SEO
  // ----------------------------------------------------------
  seo: {
    title: "Pacholok Team | Assessoria Personalizada de Treino e Dieta",
    description:
      "Assessoria online de treino, dieta e suplementação com o método Pacholok. Protocolos 100% personalizados, sem atalhos, sem promessas vazias. Para quem quer resultado real.",
    keywords:
      "assessoria fitness, treino personalizado, dieta personalizada, Fabrício Pacholok, consultoria fitness online",
  },

  // ----------------------------------------------------------
  // CONTATO E WHATSAPP
  // ----------------------------------------------------------
  contact: {
    whatsappNumber: "5515991906439", // Substitua pelo número real com DDI (ex: 5511999999999)
    whatsappDefaultMessageBase:
      "Olá! Vim pelo site da Pacholok Team e quero saber mais sobre a assessoria.",
    email: "contato@pacholokteam.com", // placeholder
  },

  // ----------------------------------------------------------
  // FLAGS DE FUNCIONALIDADES
  // ----------------------------------------------------------
  flags: {
    enableDirectPurchaseCTA: false, // Se true, exibe botão "Quero comprar direto"
    enableBeforeAfterSection: false, // Se true, exibe seção de antes/depois
    enableAppScreenshots: true, // Se true, exibe prints do aplicativo
    enableLeadWebhook: false, // Se true, envia dados para n8n antes de abrir WhatsApp
  },

  // ----------------------------------------------------------
  // WEBHOOK (n8n ou similar)
  // ----------------------------------------------------------
  leadWebhookUrl: "https://placeholder.n8n.io/webhook/pacholok-lead", // Substitua pela URL real

  // ----------------------------------------------------------
  // LINK DE COMPRA DIRETA (se enableDirectPurchaseCTA = true)
  // ----------------------------------------------------------
  directPurchaseUrl: "https://checkout.placeholder.com/pacholok-team",

  // ----------------------------------------------------------
  // TYPEFORM — destino do form da landing (teste V3-Bruno).
  // O submit do LeadGate redireciona pra cá com hidden fields:
  // name/email/phone/outside_brazil + UTMs (last-touch) + src (first-touch).
  // ----------------------------------------------------------
  typeformUrl: "https://form.typeform.com/to/yTkifQ5j",

  // ----------------------------------------------------------
  // PLANOS — espelhados da página oficial pacholokacademy.com.br/pacholok-team-v2
  // Features variam levemente entre planos (ver v2). Preço só mensal — sem "à vista".
  // ----------------------------------------------------------
  plans: [
    {
      id: "espartano",
      name: "Espartano",
      subtitle: "Trimestral",
      icon: "/assets/plans/espartano.svg",
      price: 299.05,
      priceLabel: "R$ 299,05",
      period: "/mês",
      highlight: false,
      badge: null,
      description: "Três meses de método Pacholok.",
      features: [
        { text: "Treino 100% personalizado", included: true },
        { text: "Dieta 100% ajustada à sua rotina, contexto e objetivo", included: true },
        { text: "Acesso completo ao app exclusivo da Consultoria", included: true },
        { text: "Vídeos de execução dos exercícios", included: true },
        { text: "Acesso direto ao treinador para tirar dúvidas", included: true },
        { text: "Check-ins semanais de progresso", included: true },
      ],
      ctaText: "Quero ser Espartano",
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse no plano *Espartano* (Trimestral). Pode me dar mais informações?",
    },
    {
      id: "centuriao",
      name: "Centurião",
      subtitle: "Semestral",
      icon: "/assets/plans/centuriao.svg",
      price: 279.35,
      priceLabel: "R$ 279,35",
      period: "/mês",
      highlight: true,
      badge: null,
      description: "Seis meses de método Pacholok.",
      features: [
        { text: "Treino 100% personalizado", included: true },
        { text: "Dieta 100% ajustada à sua rotina, contexto e objetivo", included: true },
        { text: "Acesso completo ao app exclusivo da Consultoria", included: true },
        { text: "Vídeos de execução dos exercícios", included: true },
        { text: "Acesso direto ao treinador para tirar dúvidas", included: true },
        { text: "Check-ins semanais de progresso", included: true },
      ],
      ctaText: "Quero ser Centurião",
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse no plano *Centurião* (Semestral). Pode me dar mais informações?",
    },
    {
      id: "olimpo",
      name: "Olimpo",
      subtitle: "Anual",
      icon: "/assets/plans/olimpo.svg",
      price: 246.97,
      priceLabel: "R$ 246,97",
      period: "/mês",
      highlight: false,
      badge: null,
      description: "Doze meses de método Pacholok.",
      features: [
        { text: "Treino 100% personalizado", included: true },
        { text: "Dieta 100% ajustada à sua rotina, contexto e objetivo", included: true },
        { text: "Acesso completo ao app exclusivo da Consultoria", included: true },
        { text: "Vídeos de execução dos exercícios", included: true },
        { text: "Acesso direto ao treinador para tirar dúvidas", included: true },
        { text: "Check-ins semanais de progresso", included: true },
        { text: "Sorteios de kits de suplementação, roupas e acessórios fitness", included: true },
      ],
      ctaText: "Quero ser Olimpo",
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse no plano *Olimpo* (Anual). Pode me dar mais informações?",
    },
  ],

  // ----------------------------------------------------------
  // COMO FUNCIONA (stepper)
  // ----------------------------------------------------------
  howItWorks: [
    {
      step: "01",
      title: "Anamnese completa",
      description:
        "Você preenche uma ficha de avaliação detalhada: histórico, objetivos, rotina, restrições e exames. Nada é genérico aqui.",
      sla: "Dentro de [X] dias após inscrição",
    },
    {
      step: "02",
      title: "Montagem do protocolo",
      description:
        "Nossa equipe, treinada pelo método Pacholok, monta seu treino e dieta personalizados com base na anamnese. Leva o tempo necessário para ser feito direito.",
      sla: "Protocolo entregue em [X] dias úteis",
    },
    {
      step: "03",
      title: "Acesso ao aplicativo",
      description:
        "Seu treino, dieta, registros de sono e conteúdos exclusivos disponíveis no app. Tudo em um único lugar, sem planilhas improvisadas.",
      sla: "Acesso liberado junto com o protocolo",
    },
    {
      step: "04",
      title: "Acompanhamento contínuo",
      description:
        "Check-ins periódicos, ajustes de protocolo conforme sua evolução e suporte direto com a equipe. Você não fica largado.",
      sla: "Check-ins a cada [X] semanas",
    },
    {
      step: "05",
      title: "Evolução e renovação",
      description:
        "Resultados monitorados, protocolos ajustados. Quem quer continuar evoluindo, continua no time.",
      sla: "Avaliação de renovação com antecedência",
    },
  ],

  // ----------------------------------------------------------
  // O QUE VOCÊ RECEBE — espelho dos 9 benefícios oficiais
  // ----------------------------------------------------------
  deliverables: [
    {
      icon: "Dumbbell",
      title: "Treino 100% personalizado",
      description:
        "Montado com base na sua anamnese, seu histórico, seus equipamentos disponíveis e seu objetivo. Nenhum protocolo sai igual ao anterior.",
    },
    {
      icon: "Salad",
      title: "Dieta 100% ajustada",
      description:
        "Macros e refeições calibrados pra sua rotina, contexto e objetivo. Sem dietas da moda, sem cortes drásticos sem propósito.",
    },
    {
      icon: "Smartphone",
      title: "App exclusivo da Consultoria",
      description:
        "Treino, dieta e seu protocolo completo num único lugar. Sem planilhas improvisadas, sem PDF desatualizado.",
    },
    {
      icon: "PlayCircle",
      title: "Vídeos de execução",
      description:
        "Cada exercício do seu treino vem com vídeo demonstrando a execução correta. Você nunca fica na dúvida de como fazer.",
    },
    {
      icon: "MessageCircle",
      title: "Acesso direto ao treinador",
      description:
        "Canal aberto pra tirar dúvidas sobre o protocolo. Quem responde é a pessoa que conhece seu plano — não bot, não atendente.",
    },
    {
      icon: "TrendingUp",
      title: "Check-ins semanais",
      description:
        "Avaliações de progresso toda semana com ajustes no protocolo conforme sua evolução. Acompanhamento real, não automático.",
    },
    {
      icon: "Gift",
      title: "Sorteios pra alunos do Olimpo",
      description:
        "Kits de suplementação, roupas e outros acessórios fitness sorteados pra alunos do plano anual.",
    },
  ],

  // ----------------------------------------------------------
  // APP SCREENSHOTS
  // ----------------------------------------------------------
  appScreenshots: [
    "/assets/app/screenshot-1.png",
    "/assets/app/screenshot-2.png",
    "/assets/app/screenshot-3.png",
    "/assets/app/screenshot-4.png",
    "/assets/app/screenshot-5.png",
    "/assets/app/screenshot-6.png",
    "/assets/app/screenshot-7.png",
    "/assets/app/screenshot-8.png",
    "/assets/app/screenshot-9.png",
    "/assets/app/screenshot-10.png",
  ],

  // ----------------------------------------------------------
  // EQUIPE / ATLETAS
  // ----------------------------------------------------------
  team: {
    founder: {
      name: "Fabrício Pacholok",
      role: "Fundador & Método Pacholok",
      image: "/assets/athletes/dino.png", // Substitua pela foto real do Pacho
      bio: "Profissional de educação física com trajetória dedicada ao fisiculturismo e à assessoria de alto nível. O método Pacholok é resultado de [X] anos construindo protocolos que funcionam de verdade — sem atalhos, sem protocolos copiados, sem estagiário respondendo no seu lugar.",
    },
    athletes: [
      {
        name: "Dino",
        role: "Atleta Pacholok Team",
        image: "/assets/athletes/dino.png",
        result: "Placeholder de resultado",
      },
      {
        name: "Zanca",
        role: "Atleta Pacholok Team",
        image: "/assets/athletes/zanca.png",
        result: "Placeholder de resultado",
      },
    ],
  },

  // ----------------------------------------------------------
  // DEPOIMENTOS
  // ----------------------------------------------------------
  testimonials: [
    {
      name: "Placeholder — Nome do aluno",
      role: "Plano Centurião · [X] meses",
      text: "Placeholder de depoimento real. Substitua pelo texto autêntico do aluno descrevendo sua experiência e resultado com o método Pacholok.",
      avatar: null,
    },
    {
      name: "Placeholder — Nome do aluno",
      role: "Plano Espartano · [X] meses",
      text: "Placeholder de depoimento real. Substitua pelo texto autêntico do aluno descrevendo sua experiência e resultado com o método Pacholok.",
      avatar: null,
    },
    {
      name: "Placeholder — Nome do aluno",
      role: "Plano Olímpo · [X] meses",
      text: "Placeholder de depoimento real. Substitua pelo texto autêntico do aluno descrevendo sua experiência e resultado com o método Pacholok.",
      avatar: null,
    },
  ],

  // ----------------------------------------------------------
  // FAQ
  // ----------------------------------------------------------
  faq: [
    {
      question: "Quem são os profissionais que vão montar meu protocolo?",
      answer:
        "Nossa equipe é treinada e supervisionada diretamente pelo método Pacholok. Não entregamos seu protocolo para estagiários ou assistentes sem qualificação. Cada profissional que assina um protocolo passou pelo processo de seleção e formação da nossa equipe.",
    },
    {
      question: "Quanto tempo leva para eu receber meu protocolo?",
      answer:
        "Após a anamnese completa, seu protocolo é montado em [X] dias úteis. Não prometemos rapidez — prometemos que vai ser feito do jeito certo. Protocolo bom leva o tempo que precisa.",
    },
    {
      question: "O protocolo é realmente personalizado ou é um template?",
      answer:
        "100% personalizado. Montamos com base na sua anamnese, histórico, objetivos, restrições e disponibilidade de equipamentos. Nenhum protocolo sai igual ao anterior.",
    },
    {
      question: "Como funciona o aplicativo?",
      answer:
        "Você acessa seu treino diário com vídeos de execução, visualiza e marca sua dieta, registra o sono e acessa conteúdos exclusivos do Pacho. Tudo em um lugar, sem planilhas, sem PDF desatualizado.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Os planos têm períodos mínimos de contrato (trimestral, semestral ou anual). A política de cancelamento e reembolso é detalhada no contrato e pode ser esclarecida com a equipe antes da sua inscrição.",
    },
    {
      question: "Atende quem mora fora do Brasil?",
      answer:
        "Sim. Atendemos alunos em diferentes fusos horários e países. Durante o onboarding, alinhamos horários e preferências de comunicação. Informe seu país e fuso ao entrar em contato.",
    },
    {
      question: "Tenho acesso direto ao Fabrício Pacholok?",
      answer:
        "O método é do Pacho, a equipe é treinada por ele e os protocolos seguem o padrão que ele estabeleceu. Para casos específicos e complexos, há trilha de escalonamento para avaliação direta. Entenda: o valor do Pacholok Team não está no acesso ao nome, mas na aplicação real do método.",
    },
    {
      question: "Preciso ter experiência na academia para entrar?",
      answer:
        "Não. Sua anamnese captura seu nível atual e o protocolo é calibrado para onde você está hoje — não para onde você deveria estar. O processo é personalizado justamente para isso.",
    },
    {
      question: "O suporte acontece de que forma?",
      answer:
        "Você tem acesso direto ao treinador para tirar dúvidas sobre o protocolo, além de check-ins semanais de progresso. Mensalmente há também o plantão de dúvidas com o próprio Fabrício Pacholok.",
    },
    {
      question: "O que acontece no check-in?",
      answer:
        "Você apresenta dados de progresso (fotos, medidas, performance) e a equipe avalia se o protocolo precisa de ajuste. Não é só confirmação de que você está 'seguindo' — é uma análise real para otimizar sua evolução.",
    },
    {
      question: "Por que vocês não mostram o protocolo antes de eu me inscrever?",
      answer:
        "Porque um protocolo sem anamnese é um protocolo genérico — exatamente o que criticamos. Não existe 'exemplo de treino' que faça sentido para você sem te conhecer primeiro. Converse com a equipe e entenda o processo antes de decidir.",
    },
  ],

  // ----------------------------------------------------------
  // PARA QUEM É / NÃO É
  // ----------------------------------------------------------
  forWho: {
    isFor: [
      "Você quer resultado real e entende que isso leva tempo",
      "Está disposto a seguir um protocolo sem improvisar",
      "Quer ser tratado como um indivíduo, não como mais um número",
      "Já teve experiências ruins com consultorias genéricas",
      "Está comprometido com o processo, não apenas com a esperança",
      "Quer acompanhamento de verdade — não mensagem automática",
    ],
    isNotFor: [
      "Quem quer resultado em semanas sem esforço",
      "Quem procura o protocolo mais barato do mercado",
      "Quem vai comprar e não seguir o que foi prescrito",
      "Quem quer apenas um PDF e sumir sem responsabilidade",
      "Quem não está disposto a passar pela anamnese e check-ins",
    ],
  },

  // ----------------------------------------------------------
  // NAVEGAÇÃO
  // ----------------------------------------------------------
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Para quem é", href: "#para-quem" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Planos", href: "#planos" },
    { label: "O que você recebe", href: "#entregas" },
    { label: "Equipe", href: "#equipe" },
    { label: "FAQ", href: "#faq" },
    { label: "Falar no WhatsApp", href: "#contato", cta: true },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
