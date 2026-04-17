# Portfolio QA Automation com CI/CD

Este projeto demonstra automacao moderna de testes com foco em empregabilidade:

- CI/CD no GitHub Actions com execucao a cada push e pull request
- Testes E2E em multiplos navegadores (headless)
- Testes de API com validacao de contrato JSON (schema)
- Padrões de projeto para manutencao (Page Objects e Custom Commands)
- Data Driven Testing com massa vinda de arquivo JSON
- Relatorios Allure publicados automaticamente no GitHub Pages
- Verificacao de acessibilidade com cypress-axe

## Stack

- Cypress
- TypeScript
- AJV (validacao de schema JSON)
- Allure Report
- GitHub Actions

## Estrutura principal

- `.github/workflows/qa-cicd.yml`: pipeline de CI/CD de testes
- `cypress/e2e/ui/checkout.cy.ts`: fluxo critico de checkout (resiliente + data-driven)
- `cypress/e2e/ui/accessibility.cy.ts`: testes de acessibilidade
- `cypress/e2e/api/contracts.cy.ts`: testes de API e contrato
- `cypress/e2e/page-objects/`: Page Objects
- `cypress/support/commands.ts`: Custom Commands
- `cypress/fixtures/`: dados de teste e contratos JSON

## Rodando localmente

1. Instale dependencias:

```bash
npm install
```

2. Rode toda a suite headless (electron):

```bash
npm run cy:run
```

3. Rode apenas API + contrato:

```bash
npm run cy:api
```

4. Gerar relatorio Allure local:

```bash
npm run allure:generate
```

## CI/CD automatico

Pipeline em `.github/workflows/qa-cicd.yml`:

- Dispara em push/pull_request para `main`
- Roda matriz de navegadores:
	- `chrome`
	- `firefox`
- Publica artifacts de resultados
- Consolida resultados e publica o Allure no GitHub Pages

## Publicacao do Allure no GitHub Pages

Depois do primeiro push em `main`, o workflow publica o relatorio na branch `gh-pages`.

No GitHub, configure:

- Settings > Pages > Source: `Deploy from a branch`
- Branch: `gh-pages` / folder `/ (root)`

## Observacao

Este repositorio tambem mantem um exemplo simples de automacao Python em `scripts/automation.py`, que pode coexistir com a suite QA.
