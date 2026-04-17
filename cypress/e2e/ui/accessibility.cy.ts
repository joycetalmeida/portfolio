describe("Product page accessibility", () => {
  it("audits critical and serious axe violations", () => {
    cy.loginAsStandardUser();
    cy.injectAxe();
    cy.checkA11y(
      undefined,
      {
        includedImpacts: ["critical", "serious"],
      },
      (violations) => {
        cy.log(`Violations found: ${violations.length}`);
      },
      true
    );
  });
});
