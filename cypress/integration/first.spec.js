/// <reference types="Cypress" />

describe("First test", () => {
  it("should open Google", () => {
    cy.visit("https://google.com");
    cy.title().should("be.equal", "Google");
  });
});
