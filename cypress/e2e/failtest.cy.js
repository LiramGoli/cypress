// should fail the test
describe("should check if i will ever give you up", () => {
  it("enter youtube to check wether i will ever or never will give you up", () => {
    cy.visit("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

    cy.title().then((title) => {
      expect(title,"failed to find the word ever").to.include("Ever");
    });
  });
});
