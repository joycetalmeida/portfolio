declare namespace Cypress {
  interface Chainable {
    loginAsStandardUser(): Chainable<void>;
    addItemToCartByName(itemName: string): Chainable<void>;
    completeCheckout(firstName: string, lastName: string, postalCode: string): Chainable<void>;
    validateJsonSchema(payload: unknown, schema: Record<string, unknown>): Chainable<void>;
  }
}

export {};
