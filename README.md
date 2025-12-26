# Test Automation Front – Cypress + Cucumber – Automation Exercise

Projeto de automação de testes E2E para o site público **[Automation Exercise](https://automationexercise.com/)**, utilizando **Cypress** e **Cucumber (BDD)**.  
O objetivo é validar fluxos de um e-commerce (login, cadastro, navegação, etc.) e servir como **portfólio profissional na área de QA**.

---

## 🎯 Objetivos do projeto

- Exercitar e demonstrar **boas práticas de automação de testes**.
- Escrever cenários em **Gherkin (Cucumber)** para descrever o comportamento do sistema em linguagem próxima do negócio.
- Simular um fluxo real de time ágil, com **Jira**, sprints, backlog e documentação das entregas.

---

## 🧱 Status atual

- ✅ Configuração inicial do projeto (Node + Cypress + Cucumber).
- ✅ Mapeamento inicial das páginas:
  - `HomePage`
  - `LoginPage`
  - `RegisterPage`
- ✅ Primeiros testes de:
  - Login (cenário feliz + cenários negativos iniciais)
  - Cadastro (mapeamento e primeiros casos)
- ✅ Criação do arquivo `login.feature` com cenários BDD relacionados à funcionalidade de login.

---

## 🛠️ Tecnologias principais

- **Cypress** – Testes E2E de interface.
- **Cucumber (Gherkin)** – BDD integrado ao Cypress.
- **JavaScript/TypeScript** – Linguagem de implementação dos testes.
- **@faker-js/faker** – Geração de massa de dados dinâmica (e-mails, nomes, etc.).
- **Jira** – Gestão de backlog, épicos, user stories e sprints.

---

## 🚀 Instalação

**Pré-requisitos**

- Node.js **18+**
- npm (gerenciador de pacotes do Node)

```bash
# Clonar o repositório
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA_DO_PROJETO>

# Instalar dependências
npm install
