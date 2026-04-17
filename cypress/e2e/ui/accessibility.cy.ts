describe("Acessibilidade da tela de produtos", () => {
  it("audita violacoes criticas com axe", () => {
    cy.loginAsStandardUser();
    cy.injectAxe();
    cy.checkA11y(
      undefined,
      {
        includedImpacts: ["critical", "serious"],
      },
      (violations) => {
        cy.log(`Violacoes encontradas: ${violations.length}`);
      },
      true
    );
  });
});
