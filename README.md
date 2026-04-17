# QA Automation Portfolio with CI/CD

This project demonstrates modern test automation practices with a strong portfolio focus:

- GitHub Actions CI/CD on every push and pull request
- E2E tests running in multiple browsers (headless)
- API testing with JSON contract (schema) validation
- Maintainable project patterns (Page Objects and Custom Commands)
- Data-driven testing using JSON fixtures
- Allure reports published automatically to GitHub Pages
- Automated accessibility auditing with cypress-axe

## Stack

- Cypress
- TypeScript
- AJV (JSON schema validation)
- Allure Report
- GitHub Actions

## Main Structure

- `.github/workflows/qa-cicd.yml`: CI/CD test pipeline
- `cypress/e2e/ui/checkout.cy.ts`: critical checkout flow (resilient + data-driven)
- `cypress/e2e/ui/accessibility.cy.ts`: accessibility tests
- `cypress/e2e/api/contracts.cy.ts`: API and contract tests
- `cypress/e2e/page-objects/`: Page Objects
- `cypress/support/commands.ts`: Custom Commands
- `cypress/fixtures/`: test data and JSON contracts

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Run the full headless suite (electron):

```bash
npm run cy:run
```

3. Run API + contracts only:

```bash
npm run cy:api
```

4. Generate local Allure report:

```bash
npm run allure:generate
```

## Automated CI/CD

Pipeline in `.github/workflows/qa-cicd.yml`:

- Triggers on push/pull_request to `main`
- Runs browser matrix:
  - `chrome`
  - `firefox`
- Publishes result artifacts
- Consolidates results and publishes Allure to GitHub Pages

## Allure Publication on GitHub Pages

After the first push to `main`, the workflow publishes the report to the `gh-pages` branch.

In GitHub, configure:

- Settings > Pages > Source: `Deploy from a branch`
- Branch: `gh-pages` / folder `/ (root)`

## Note

This repository also keeps a simple Python automation example in `scripts/automation.py`, which can coexist with the QA suite.
