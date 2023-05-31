
// should pass the test
describe("log to wiki homepage", () => {
  it("should show nickname liram100", () => {
    cy.visit(
      "https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page"
    );
    cy.get('input[id="wpPassword1"]').type("liram123");
    cy.get('input[id="wpName1"]').type("Liram100");
    cy.get('button[id="wpLoginAttempt"]').click();
    cy.get('#pt-userpage-2').should(($el) => {
        expect($el.eq(0)).to.contain('Liram100')
     })
  });
});
