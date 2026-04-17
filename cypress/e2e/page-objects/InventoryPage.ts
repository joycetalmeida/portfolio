export class InventoryPage {
  addItemToCart(itemName: string): void {
    cy.contains(".inventory_item", itemName)
      .should("be.visible")
      .within(() => {
        cy.contains("button", /add to cart/i).click();
      });
  }

  openCart(): void {
    cy.get("[data-test=shopping-cart-link]").should("be.visible").click();
  }
}
