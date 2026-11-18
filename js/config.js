/* =====================================================================
   CONFIGURAÇÃO CENTRALIZADA DE DADOS (FÁCIL MANUTENÇÃO)
   Substitua os valores abaixo pelos dados oficiais da academia.
   Todos os links de WhatsApp, Instagram, Maps e textos dinâmicos
   serão atualizados automaticamente.
   ===================================================================== */

const ACADEMY_CONFIG = {
  nome: "[NOME DA ACADEMIA]",
  slogan: "Treinamento orientado com critério técnico, estrutura completa e foco contínuo na sua saúde.",
  whatsappNumero: "5500999999999",
  whatsappExibicao: "([DDD]) [99999-9999]",
  telefoneExibicao: "([DDD]) [3333-3333]",
  email: "[contato@suaacademia.com.br]",
  instagramUrl: "https://instagram.com/",
  instagramUsuario: "@[perfil_da_academia]",
  enderecoCompleto: "[Rua Exemplo, 123 — Bairro, Cidade - UF, CEP 00000-000]",
  googleMapsLink: "https://maps.google.com/?q=-23.550520,-46.633308",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197587029927!2d-46.6564943!3d-23.5613462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQwLjgiUyA0NsKwMzknMjMuNCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  horarios: [
    { dias: "Segunda a Sexta", horas: "[06h00 às 22h00]" },
    { dias: "Sábados", horas: "[08h00 às 14h00]" },
    { dias: "Domingos e Feriados", horas: "[Fechado / Horário Especial]" }
  ]
};

/* =====================================================================
   BASE DE PUBLICAÇÕES — PÁGINA 2 (NOVIDADES E ATUALIZAÇÕES)
   Para adicionar um novo comunicado, duplique um bloco abaixo e
   preencha título, data, categoria e texto.
   ===================================================================== */
const ACADEMY_UPDATES = [
  {
    id: "comunicado-01",
    data: "[DD/MM/AAAA]",
    categoria: "Horários e Funcionamento",
    titulo: "[Comunicado sobre funcionamento em feriado ou recesso]",
    resumo: "[Espaço reservado para informar aos alunos alterações pontuais de horário de abertura e fechamento da unidade.]",
    conteudoCompleto: "[Utilize este campo para detalhar o horário especial de funcionamento, turmas afetadas e orientações gerais para os alunos durante a data informada.]",
    destaque: true
  },
  {
    id: "comunicado-02",
    data: "[DD/MM/AAAA]",
    categoria: "Estrutura e Equipamentos",
    titulo: "[Atualização na sala de musculação e novos equipamentos]",
    resumo: "[Espaço para comunicar a chegada de novos aparelhos, manutenções preventivas ou melhorias nos ambientes de treino.]",
    conteudoCompleto: "[Descreva aqui as melhorias realizadas na infraestrutura da academia, novos equipamentos disponíveis para treino e benefícios para a rotina dos alunos.]",
    destaque: false
  },
  {
    id: "comunicado-03",
    data: "[DD/MM/AAAA]",
    categoria: "Modalidades e Grade",
    titulo: "[Abertura de novos horários para aulas coletivas]",
    resumo: "[Informação sobre inclusão de novas turmas na grade semanal de atividades.]",
    conteudoCompleto: "[Informe os dias da semana, horários, professor responsável e como os alunos podem confirmar presença ou agendar uma aula experimental.]",
    destaque: false
  },
  {
    id: "comunicado-04",
    data: "[DD/MM/AAAA]",
    categoria: "Informativo aos Alunos",
    titulo: "[Campanha de avaliação física e reavaliação periódica]",
    resumo: "[Orientações para agendamento de avaliação física com a equipe técnica da academia.]",
    conteudoCompleto: "[Explique a importância do acompanhamento periódico e informe como o aluno pode agendar seu horário diretamente na recepção ou pelo WhatsApp.]",
    destaque: false
  }
];
