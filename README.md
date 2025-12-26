# Test Automation Front – Cypress + Cucumber – Automation Exercise

Projeto de automação de testes E2E para o site público **[Automation Exercise](https://automationexercise.com/)**, utilizando **Cypress** e **Cucumber (BDD)**.  
O objetivo é validar fluxos de um e-commerce (login, cadastro, navegação, etc.) e servir como **portfólio profissional na área de QA**.

---

## 🎯 Objetivos do projeto

- Exercitar e demonstrar **boas práticas de automação de testes**.
- Escrever cenários em **Gherkin (Cucumber)** para descrever o comportamento do sistema em linguagem próxima do negócio.
- Aplicar o padrão **Page Object Model (POM)** para melhor organização e reutilização de código.
- Simular um fluxo real de time ágil, com **Jira**, sprints, backlog e documentação das entregas.
- Evoluir o projeto de forma incremental, como em um ambiente profissional.

---

## 🧱 Status atual

- ✅ Configuração inicial do projeto (Node + Cypress + Cucumber).
- ✅ Estrutura base organizada seguindo boas práticas.
- ✅ Mapeamento inicial das páginas:
  - `HomePage`
  - `LoginPage`
  - `RegisterPage`
- ✅ Primeiros testes de:
  - Login (cenário feliz e cenários negativos iniciais)
  - Cadastro (mapeamento e primeiros casos)
- ✅ Criação do arquivo `login.feature` com cenários BDD.

---

## 🛠️ Tecnologias principais

- **Cypress** – Testes E2E de interface.
- **Cucumber (Gherkin)** – BDD integrado ao Cypress.
- **JavaScript** – Linguagem de implementação dos testes.
- **@faker-js/faker** – Geração de massa de dados dinâmica (e-mails, nomes, etc.).
- **Node.js** – Ambiente de execução.
- **Jira** – Gestão de backlog, épicos, user stories e sprints.

---

## 📁 Estrutura do Projeto

```
automationexercise-cypress-e2e/
├── cypress/                             # Diretório principal do Cypress
│   ├── e2e/                             # Testes End-to-End
│   │   ├── features/                    # Arquivos BDD (Gherkin)
│   │   │   └── login.feature            # Cenários de login em linguagem de negócio
│   │   │
│   │   ├── exemple.cy.js                # Teste de exemplo do Cypress
│   │   ├── login.cy.js                  # Testes E2E de login (sem BDD)
│   │   └── register.cy.js               # Testes E2E de cadastro (sem BDD)
│   │
│   ├── fixtures/                        # Massa de dados estática
│   │   └── example.json                 # Dados de exemplo para os testes
│   │
│   └── support/                         # Arquivos de suporte e configuração
│       ├── pageObjects/                 # Page Object Model (POM)
│       │   ├── homePage.js              # Mapeamento e ações da Home Page
│       │   ├── loginPage.js             # Mapeamento e ações da página de Login
│       │   └── registerPage.js          # Mapeamento e ações da página de Cadastro
│       │
│       ├── stepDefinitions/             # Implementação dos steps do Cucumber
│       │   └── loginSteps.js            # Steps relacionados aos cenários de login
│       │
│       ├── commands.js                  # Comandos customizados do Cypress
│       └── e2e.js                       # Configurações globais dos testes E2E
│
├── node_modules/                        # Dependências do projeto
├── .gitignore                           # Arquivos e pastas ignorados pelo Git
├── cypress-cucumber-preprocessor.config.js # Configuração do Cucumber + Cypress
├── cypress.config.js                    # Configurações gerais do Cypress
├── package.json                         # Dependências, scripts e metadados do projeto
├── package-lock.json                    # Versões exatas das dependências
└── README.md                            # Documentação do projeto
```

