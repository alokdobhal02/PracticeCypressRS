describe("Promise Concept", function () {
  it("get Log Text : Promise Concept", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    const logoText = cy.get(".brand");
    // Below statement is wrong as it is not resolving the promise
    //  cy.log(cy.get(".brand").text());

    // Assertion one option is should
    cy.get(".brand").should("have.text", "GREENKART");
    cy.get(".brand").then(function (logoTextElement) {
      console.log("User In the then loop to extract logo text");
      cy.log(logoTextElement.text());
    });
    console.log("Out of the loop");
  });
});
