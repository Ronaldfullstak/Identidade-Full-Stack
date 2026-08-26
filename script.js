const timeEngenharia = [
  {
    id: 1,
    nome: 'Andrey Goulart',
    categoria: 'Backend',
    badgeEspecialidade: 'Java & Spring Boot',
    cargo: 'Programador Back-end',
    descricao: 'Desenvolvimento de sistemas embarcados, TypeScript, consumo de APIs RESTful e integração com ecossistema Spring Boot.',
    skills: ['Python', 'Java 17', 'Spring Boot', 'React'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=AndreyGoulart',
    github: 'https://github.com/andreygomesg',
    linkedin: 'https://linkedin.com/in/andreygomesg'
  },
  {
    id: 2,
    nome: 'Mariana',
    categoria: 'infra-qa',
    badgeEspecialidade: 'QA & Test Automation',
    cargo: 'Engenheira de Qualidade (QA)',
    descricao: 'Elaboração e execução de suítes de testes unitários, testes de integração E2E e validação rigorosa de contratos de API REST.',
    skills: ['JUnit 5', 'Jest', 'Cypress', 'Postman', 'Testes E2E'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=BeatrizSantos',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 3,
    nome: 'Camila Duarte',
    categoria: 'frontend',
    badgeEspecialidade: 'UI & Design Systems',
    cargo: 'Design Engineer & Frontend',
    descricao: 'Padronização de Design Tokens corporativos, arquitetura de CSS moderno, responsividade multiplataforma e conformidade com diretrizes WCAG.',
    skills: ['Figma', 'CSS Moderno', 'Design Tokens', 'Acessibilidade WCAG', 'HTML5 Semântico'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=CamilaDuarte',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 4,
    nome: 'Felipe Souza',
    categoria: 'backend',
    badgeEspecialidade: 'Back-end Node.js',
    cargo: 'Desenvolvedor Node.js',
    descricao: 'Criação de microsserviços orientados a eventos, rotinas assíncronas de alto rendimento, autenticação JWT e comunicação via Webhooks.',
    skills: ['Node.js', 'Express', 'JWT', 'TypeScript', 'Redis'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=FelipeSouza',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 5,
    nome: 'Gabriel Ramos',
    categoria: 'backend',
    badgeEspecialidade: 'Back-end Java & APIs',
    cargo: 'Desenvolvedor Back-end',
    descricao: 'Desenvolvimento de regras de negócio transacionais, APIs RESTful com documentação OpenAPI/Swagger e testes automatizados de integração.',
    skills: ['Java 17', 'Spring Boot', 'RESTful APIs', 'Docker', 'Maven'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=GabrielRamos',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 6,
    nome: 'Juliana Lima',
    categoria: 'frontend',
    badgeEspecialidade: 'Front-end React & TS',
    cargo: 'Desenvolvedora Front-end',
    descricao: 'Construção de Single Page Applications escaláveis com React, gerenciamento previsível de estado, tipagem estrita com TypeScript e memoização.',
    skills: ['React', 'TypeScript', 'Context API', 'Tailwind CSS', 'Vite'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=JulianaLima',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 7,
    nome: 'Larissa Moreira',
    categoria: 'data',
    badgeEspecialidade: 'Data & Analytics',
    cargo: 'Analista de Dados & Python',
    descricao: 'Extração e vetorização de dados estruturados com Python e Pandas, modelagem dimensional e geração de insights analíticos de performance.',
    skills: ['Python', 'Pandas', 'SQL', 'Dashboards Analíticos', 'Data Wrangling'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=LarissaMoreira',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 8,
    nome: 'Lucas Silva',
    categoria: 'backend',
    badgeEspecialidade: 'Back-end Java & Spring',
    cargo: 'Desenvolvedor Java / Spring',
    descricao: 'Construção de microsserviços escaláveis, injeção de dependências, arquitetura em camadas e persistência relacional com Spring Data JPA.',
    skills: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'JUnit 5'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=LucasSilva',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 9,
    nome: 'Mariana Costa',
    categoria: 'data',
    badgeEspecialidade: 'Data Engineering & ETL',
    cargo: 'Engenheira de Dados',
    descricao: 'Criação de pipelines de extração, transformação e carga (ETL), processamento em lote e estruturação de data warehouses relacionais.',
    skills: ['Python', 'SQL Avançado', 'Pipelines ETL', 'Data Modeling', 'PostgreSQL'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=MarianaCosta',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 10,
    nome: 'Matheus Oliveira',
    categoria: 'infra-qa',
    badgeEspecialidade: 'DevOps & Contêineres',
    cargo: 'Especialista Cloud & CI/CD',
    descricao: 'Automação de pipelines de integração contínua (CI/CD), conteinerização multi-stage com Docker e gerenciamento de infraestrutura em nuvem.',
    skills: ['Docker', 'GitHub Actions', 'Linux', 'CI/CD', 'Azure'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=MatheusOliveira',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 11,
    nome: 'Rafael Nogueira',
    categoria: 'backend',
    badgeEspecialidade: 'Back-end & Microsserviços',
    cargo: 'Desenvolvedor Back-end Java',
    descricao: 'Construção de serviços resilientes com Java e Spring Boot, mensageria assíncrona com RabbitMQ/Kafka e arquiteturas escaláveis.',
    skills: ['Java 17', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Docker'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=RafaelNogueira',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 12,
    nome: 'Rodrigo Rocha',
    categoria: 'data',
    badgeEspecialidade: 'Database & SQL Architect',
    cargo: 'Arquiteto de Banco de Dados',
    descricao: 'Modelagem entidade-relacionamento (3FN), criação de índices B-Tree de alta performance, planos de execução de query e controle de transações ACID.',
    skills: ['PostgreSQL', 'SQL Tuning', 'Modelagem ER', 'Migrations', 'Database Indexing'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=RodrigoRocha',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 13,
    nome: 'Thiago Mendes',
    categoria: 'frontend',
    badgeEspecialidade: 'Full Stack & Mobile Web',
    cargo: 'Engenheiro Full Stack',
    descricao: 'Desenvolvimento de aplicações web responsivas e multiplataforma, sincronização de dados offline e consumo otimizado de APIs REST.',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Node.js', 'Mobile Web', 'REST APIs'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=ThiagoMendes',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 14,
    nome: 'Vinícius Castro',
    categoria: 'infra-qa',
    badgeEspecialidade: 'AppSec & Segurança',
    cargo: 'Engenheiro de Segurança',
    descricao: 'Auditoria estática de código, sanitização rigorosa contra OWASP Top 10 (SQL Injection, XSS), controle de autenticação OAuth2 e logs seguros.',
    skills: ['OWASP Top 10', 'Sanitização XSS', 'OAuth2 / JWT', 'Criptografia', 'Auditoria'],
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=ViniciusCastro',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  }
];

const teamGrid = document.getElementById('team-grid');
const cardTemplate = document.getElementById('member-card-template');
const searchInput = document.getElementById('search-input');
const filterChips = document.querySelectorAll('.chip');

let filtroCategoria = 'all';
let termoBusca = '';

function renderizarEquipe() {
  teamGrid.innerHTML = '';

  const busca = termoBusca.toLowerCase().trim();

  const membrosFiltrados = timeEngenharia
    .filter(membro => {
      const bateCategoria = (filtroCategoria === 'all') || (membro.categoria === filtroCategoria);

      const bateBusca = 
        membro.nome.toLowerCase().includes(busca) ||
        membro.badgeEspecialidade.toLowerCase().includes(busca) ||
        membro.cargo.toLowerCase().includes(busca) ||
        membro.descricao.toLowerCase().includes(busca) ||
        membro.skills.some(s => s.toLowerCase().includes(busca));

      return bateCategoria && bateBusca;
    })
    .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));

  if (membrosFiltrados.length === 0) {
    teamGrid.innerHTML = '<p class="no-results">Nenhum desenvolvedor encontrado com os critérios pesquisados.</p>';
    return;
  }

  membrosFiltrados.forEach(membro => {
    const clone = cardTemplate.content.cloneNode(true);

    const img = clone.querySelector('.member-avatar');
    img.src = membro.avatar;
    img.alt = `Foto de ${membro.nome}`;

    clone.querySelector('.role-badge').textContent = membro.badgeEspecialidade;
    clone.querySelector('.member-name').textContent = membro.nome;
    clone.querySelector('.member-role-title').textContent = membro.cargo;
    clone.querySelector('.member-desc').textContent = membro.descricao;

    const skillsContainer = clone.querySelector('.skills-container');
    membro.skills.forEach(skill => {
      const span = document.createElement('span');
      span.className = 'skill-pill';
      span.textContent = skill;
      skillsContainer.appendChild(span);
    });

    clone.querySelector('.btn-github').href = membro.github;
    clone.querySelector('.btn-linkedin').href = membro.linkedin;

    teamGrid.appendChild(clone);
  });
}

filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    filtroCategoria = chip.dataset.filter;
    renderizarEquipe();
  });
});

searchInput.addEventListener('input', (e) => {
  termoBusca = e.target.value;
  renderizarEquipe();
});

renderizarEquipe();