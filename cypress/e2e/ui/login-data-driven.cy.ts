import { LoginPage } from "../page-objects/LoginPage";

type UserScenario = {
  username: string;
  password: string;
  expected: "success" | "error";
};

const users: UserScenario[] = require("../../fixtures/users.json");

describe("Login data-driven", () => {
  const loginPage = new LoginPage();

  users.forEach((user) => {
    it(`valida login para ${user.username}`, () => {
      loginPage.visit();
      loginPage.login(user.username, user.password);

      if (user.expected === "success") {
        cy.url().should("include", "/inventory.html");
      } else {
        cy.get("[data-test=error]").should("be.visible");
      }
    });
  });
});
