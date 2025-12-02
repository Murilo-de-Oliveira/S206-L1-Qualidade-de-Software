// função obrigatória
function fazerLogin(usuario, senha) {
  cy.get('[data-test="username"]').clear().type(usuario);
  cy.get('[data-test="password"]').clear().type(senha);
  cy.get('[data-test="login-button"]').click();
}

describe("Suite - Login SauceDemo", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Login válido, redirecionar para /inventory", () => {
    fazerLogin("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory");
    cy.get(".inventory_list").should("exist");
  });

  it("Login inválido, mostrar mensagem de erro", () => {
    fazerLogin("standard_user", "senha_errada");
    cy.get('[data-test="error"]').should("be.visible")
      .and("contain.text", "Username and password do not match");
  });

  it("Mostrar 6 produtos no inventário após login", () => {
    fazerLogin("standard_user", "secret_sauce");
    cy.get(".inventory_item").should("have.length", 6);
  });

});
