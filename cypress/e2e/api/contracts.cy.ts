const postSchema = require("../../fixtures/contracts/jsonplaceholder-post.schema.json");

describe("API contracts - JSONPlaceholder", () => {
  const apiBaseUrl = Cypress.env("apiBaseUrl");

  it("valida contrato do GET /posts/1", () => {
    cy.request(`${apiBaseUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
      cy.validateJsonSchema(response.body, postSchema);
      expect(response.body.id).to.eq(1);
    });
  });

  it("valida contrato do POST /posts", () => {
    cy.request("POST", `${apiBaseUrl}/posts`, {
      userId: 10,
      title: "novo post",
      body: "payload de contrato",
    }).then((response) => {
      expect(response.status).to.eq(201);

      const postResponseSchema = {
        ...postSchema,
        required: ["userId", "title", "body", "id"],
      };

      cy.validateJsonSchema(response.body, postResponseSchema);
    });
  });
});
