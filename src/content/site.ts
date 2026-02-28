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
  // PLANOS
  // ----------------------------------------------------------
  plans: [
    {
      id: "gladiador",
      name: "Gladiador",
      subtitle: "Mensal",
      icon: "/assets/plans/gladiador.svg",
      price: 599,
      priceLabel: "R$ 599",
      period: "/mês",
      highlight: false,
      badge: null,
      description:
        "A porta de entrada para o método Pacholok. Compromisso mensal, entrega imediata.",
      features: [
        { text: "Treino 100% personalizado via app", included: true },
        { text: "Dieta ajustada aos seus objetivos", included: true },
        { text: "Acesso ao aplicativo exclusivo", included: true },
        { text: "Vídeos de execução dos exercícios", included: true },
        { text: "Suporte por WhatsApp", included: true },
        { text: "Check-in mensal de progresso", included: true },
        { text: "Guia de suplementação", included: false },
        { text: "Grupos nichados (Cutting / Bulking)", included: false },
        { text: "Orientação hormonal", included: false },
        { text: "Participação em competições e sorteios", included: false },
      ],
      ctaText: "Quero ser Gladiador",
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse no plano *Gladiador* (Mensal). Pode me dar mais informações?",
    },
    {
      id: "espartano",
      name: "Espartano",
      subtitle: "Trimestral",
      icon: "/assets/plans/espartano.svg",
      price: 399,
      priceLabel: "R$ 399",
      period: "/mês",
      totalLabel: "R$ 1.197 no trimestre",
      highlight: false,
      badge: "Mais popular",
      description:
        "Três meses de metodologia Espartana. Disciplina contínua, resultados consistentes.",
      features: [
        { text: "Treino 100% personalizado via app", included: true },
        { text: "Dieta ajustada aos seus objetivos", included: true },
        { text: "Acesso ao aplicativo exclusivo", included: true },
        { text: "Vídeos de execução dos exercícios", included: true },
        { text: "Suporte por WhatsApp", included: true },
        { text: "Check-ins semanais de progresso", included: true },
        { text: "Guia de suplementação", included: true },
        { text: "Grupos nichados (Cutting / Bulking)", included: true },
        { text: "Orientação hormonal", included: false },
        { text: "Participação em competições e sorteios", included: false },
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
      price: 299,
      priceLabel: "R$ 299",
      period: "/mês",
      totalLabel: "R$ 1.794 no semestre",
      highlight: true,
      badge: "Melhor custo-benefício",
      description:
        "Seis meses com o método completo. Quem chega até aqui, transforma de verdade.",
      features: [
        { text: "Treino 100% personalizado via app", included: true },
        { text: "Dieta ajustada aos seus objetivos", included: true },
        { text: "Acesso ao aplicativo exclusivo", included: true },
        { text: "Vídeos de execução dos exercícios", included: true },
        { text: "Suporte prioritário por WhatsApp", included: true },
        { text: "Check-ins semanais de progresso", included: true },
        { text: "Guia de suplementação", included: true },
        { text: "Grupos nichados (Cutting / Bulking)", included: true },
        { text: "Orientação hormonal", included: true },
        { text: "Participação em competições e sorteios", included: true },
      ],
      ctaText: "Quero ser Centurião",
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse no plano *Centurião* (Semestral). Pode me dar mais informações?",
    },
    {
      id: "olimpo",
      name: "Olímpo",
      subtitle: "Anual",
      icon: "/assets/plans/olimpo.svg",
      price: 199,
      priceLabel: "R$ 199",
      period: "/mês",
      totalLabel: "R$ 2.388 no ano",
      highlight: false,
      badge: "Maior economia",
      description:
        "O topo. Para quem sabe que resultados reais exigem compromisso real.",
      features: [
        { text: "Treino 100% personalizado via app", included: true },
        { text: "Dieta ajustada aos seus objetivos", included: true },
        { text: "Acesso ao aplicativo exclusivo", included: true },
        { text: "Vídeos de execução dos exercícios", included: true },
        { text: "Suporte VIP por WhatsApp", included: true },
        { text: "Check-ins semanais de progresso", included: true },
        { text: "Guia de suplementação", included: true },
        { text: "Grupos nichados (Cutting / Bulking)", included: true },
        { text: "Orientação hormonal", included: true },
        { text: "Participação em competições e sorteios", included: true },
        {
          text: "Cupons exclusivos com parceiros",
          included: true,
        },
        { text: "Programa de indicações (mais chances no sorteio)", included: true },
      ],
      ctaText: "Quero alcançar o Olímpo",
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse no plano *Olímpo* (Anual). Pode me dar mais informações?",
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
  // O QUE VOCÊ RECEBE
  // ----------------------------------------------------------
  deliverables: [
    {
      icon: "Dumbbell",
      title: "Treino personalizado",
      description:
        "Montado com base na sua anamnese, seus equipamentos disponíveis e seu histórico de treinamento. Nenhum protocolo é igual ao outro.",
    },
    {
      icon: "Salad",
      title: "Dieta ajustada",
      description:
        "Macros e refeições calibrados para seus objetivos e estilo de vida. Sem dietas da moda, sem cortes drásticos sem propósito.",
    },
    {
      icon: "Pill",
      title: "Suplementação",
      description:
        "Orientação sobre quais suplementos fazem sentido para você, sem empurrar produto sem necessidade.",
    },
    {
      icon: "Smartphone",
      title: "Aplicativo exclusivo",
      description:
        "Seu protocolo no seu bolso: treino com vídeos de execução, dieta para ticar, registro de sono e conteúdo exclusivo do Pacho.",
    },
    {
      icon: "Users",
      title: "Comunidade ativa",
      description:
        "Grupo no WhatsApp com alunos de perfil similar (Cutting / Bulking). Stories, fotos, engajamento real com pessoas no mesmo processo que você.",
    },
    {
      icon: "TrendingUp",
      title: "Check-ins de progresso",
      description:
        "Avaliações periódicas com ajustes no protocolo conforme sua evolução. Acompanhamento real, não automático.",
    },
    {
      icon: "Trophy",
      title: "Competições e sorteios",
      description:
        "Prêmios reais: iPhones, anuidade de academia paga, viagens. Para quem está dentro do processo.",
    },
    {
      icon: "Tag",
      title: "Benefícios com parceiros",
      description:
        "Cupons e descontos em suplementação e produtos de qualidade. Só para alunos ativos.",
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
        "Os planos têm períodos mínimos de contrato (mensal, trimestral, semestral, anual). A política de cancelamento e reembolso é detalhada no contrato e pode ser esclarecida com a equipe antes da sua inscrição.",
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
        "Via WhatsApp. Há grupos nichados por objetivo (Cutting / Bulking) e suporte direto com a equipe para dúvidas sobre o protocolo. O tempo de resposta e SLA são informados no onboarding.",
    },
    {
      question: "A orientação inclui suplementação e hormônios?",
      answer:
        "Suplementação está incluída a partir do plano Espartano. Orientação hormonal está disponível a partir do plano Centurião. Esses tópicos são tratados com responsabilidade e seriedade — sem indicação irresponsável.",
    },
    {
      question: "O que acontece no check-in?",
      answer:
        "Você apresenta dados de progresso (fotos, medidas, performance) e a equipe avalia se o protocolo precisa de ajuste. Não é só confirmação de que você está 'seguindo' — é uma análise real para otimizar sua evolução.",
    },
    {
      question: "Posso participar das competições e sorteios no plano Mensal?",
      answer:
        "As competições e sorteios estão disponíveis a partir do plano Centurião (semestral). Os prêmios incluem iPhones, anuidade de academia paga e viagens — para quem está comprometido com o processo.",
    },
    {
      question: "Como funciona o programa de indicações?",
      answer:
        "Alunos ativos que indicam novos membros recebem descontos na renovação e mais chances nos sorteios mensais. Os detalhes são fornecidos após a entrada no time.",
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
