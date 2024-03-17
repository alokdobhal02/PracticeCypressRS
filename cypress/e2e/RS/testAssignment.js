describe("My First Test Suite", function () {
  // Add few items into cart , go to the bag , proceed to checkout and place order
  it("Add items", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
  });
});
