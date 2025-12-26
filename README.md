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

A organização do projeto separa claramente **features**, **steps**, **page objects** e **configurações**, facilitando manutenção, leitura e escalabilidade.

cypress/
  e2e/
    features/
      login.feature        # Cenários BDD de login
    login.cy.js            # Testes de login (casos técnicos)
    register.cy.js         # Testes de cadastro

  support/
    pageObjects/
      homePage.js          # Page Object da home
      loginPage.js         # Page Object de login
      registerPage.js      # Page Object de cadastro

docs/
  project-management/      # Planejamento de sprints, backlog e anotações (em construção)

cypress.config.{js,ts}     # Configuração do Cypress + Cucumber
package.json               # Dependências e scripts do projeto
