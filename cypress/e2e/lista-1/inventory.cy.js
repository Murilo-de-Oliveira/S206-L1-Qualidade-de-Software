describe("Inventário", () => {

  beforeEach(() => {
    cy.loginStandardUser();
  });

  it("Listagem possui 6+ produtos", () => {
    cy.get(".inventory_item").should("have.length.at.least", 6);
  });

});
