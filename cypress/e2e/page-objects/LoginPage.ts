export class LoginPage {
  visit(): void {
    cy.visit("/");
  }

  login(username: string, password: string): void {
    cy.get("[data-test=username]").should("be.visible").clear().type(username);
    cy.get("[data-test=password]").should("be.visible").clear().type(password, { log: false });
    cy.get("[data-test=login-button]").should("be.enabled").click();
  }
}
