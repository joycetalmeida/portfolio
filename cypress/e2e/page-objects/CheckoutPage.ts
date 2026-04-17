export class CheckoutPage {
  startCheckout(): void {
    cy.get("[data-test=checkout]").should("be.visible").click();
  }

  fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): void {
    cy.get("[data-test=firstName]").should("be.visible").clear().type(firstName);
    cy.get("[data-test=lastName]").should("be.visible").clear().type(lastName);
    cy.get("[data-test=postalCode]").should("be.visible").clear().type(postalCode);
    cy.get("[data-test=continue]").should("be.visible").click();
  }

  finishCheckout(): void {
    cy.get("[data-test=finish]").should("be.visible").click();
  }

  getCompleteHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("[data-test=complete-header]");
  }
}
