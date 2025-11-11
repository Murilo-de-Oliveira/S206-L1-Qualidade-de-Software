describe("Login Tests", () => {

  it("Login válido", () => {
    cy.loginStandardUser();

    cy.url().should("include", "/inventory.html");
  });

  it("Login inválido - senha incorreta", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("senhaerrada");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Epic sadface");
  });

});
