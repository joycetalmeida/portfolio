import Ajv2020 from "ajv/dist/2020";

const ajv = new Ajv2020({ allErrors: true, strict: false });

Cypress.Commands.add("loginAsStandardUser", () => {
  cy.visit("/");
  cy.get("[data-test=username]").should("be.visible").clear().type("standard_user");
  cy.get("[data-test=password]").should("be.visible").clear().type("secret_sauce", { log: false });
  cy.get("[data-test=login-button]").should("be.enabled").click();
  cy.url().should("include", "/inventory.html");
});

Cypress.Commands.add("addItemToCartByName", (itemName: string) => {
  cy.contains(".inventory_item", itemName)
    .should("be.visible")
    .within(() => {
      cy.contains("button", /add to cart/i).should("be.visible").click();
    });
});

Cypress.Commands.add(
  "completeCheckout",
  (firstName: string, lastName: string, postalCode: string) => {
    cy.get("[data-test=shopping-cart-link]").should("be.visible").click();
    cy.get("[data-test=checkout]").should("be.visible").click();

    cy.get("[data-test=firstName]").should("be.visible").clear().type(firstName);
    cy.get("[data-test=lastName]").should("be.visible").clear().type(lastName);
    cy.get("[data-test=postalCode]").should("be.visible").clear().type(postalCode);

    cy.get("[data-test=continue]").should("be.visible").click();
    cy.get("[data-test=finish]").should("be.visible").click();
  }
);

Cypress.Commands.add("validateJsonSchema", (payload: unknown, schema: Record<string, unknown>) => {
  const validate = ajv.compile(schema);
  const valid = validate(payload);

  if (!valid) {
    throw new Error(`Schema validation failed: ${ajv.errorsText(validate.errors)}`);
  }

  expect(valid).to.eq(true);
});
