const postSchema = require("../../fixtures/contracts/jsonplaceholder-post.schema.json");

describe("API contracts - JSONPlaceholder", () => {
  const apiBaseUrl = Cypress.env("apiBaseUrl");

  it("validates GET /posts/1 contract", () => {
    cy.request(`${apiBaseUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
      cy.validateJsonSchema(response.body, postSchema);
      expect(response.body.id).to.eq(1);
    });
  });

  it("validates POST /posts contract", () => {
    cy.request("POST", `${apiBaseUrl}/posts`, {
      userId: 10,
      title: "new post",
      body: "contract payload",
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
