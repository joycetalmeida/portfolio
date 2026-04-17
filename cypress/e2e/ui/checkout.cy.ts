import { CheckoutPage } from "../page-objects/CheckoutPage";
import { InventoryPage } from "../page-objects/InventoryPage";

type CheckoutScenario = {
  name: string;
  items: string[];
  firstName: string;
  lastName: string;
  postalCode: string;
};

const checkoutScenarios: CheckoutScenario[] = require("../../fixtures/checkout-scenarios.json");

describe("Resilient E2E checkout", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.loginAsStandardUser();
    cy.get(".title").should("contain.text", "Products");
  });

  checkoutScenarios.forEach((scenario) => {
    it(`runs ${scenario.name}`, () => {
      const inventoryPage = new InventoryPage();
      const checkoutPage = new CheckoutPage();

      scenario.items.forEach((item) => inventoryPage.addItemToCart(item));

      inventoryPage.openCart();
      cy.get(".cart_item").should("have.length", scenario.items.length);

      checkoutPage.startCheckout();
      checkoutPage.fillCheckoutInfo(scenario.firstName, scenario.lastName, scenario.postalCode);
      checkoutPage.finishCheckout();

      checkoutPage.getCompleteHeader().should("contain.text", "Thank you for your order!");
      cy.url().should("include", "checkout-complete");
    });
  });
});
