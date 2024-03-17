describe("Automation Test Store - Inpect Items using chain of commands", () => {
  it("Click on the first item using item Header", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .then(function (itemHeaderText) {
        console.log("Selected the following Item : " + itemHeaderText);
      });
    console.log("Out of the Loop : Sorry ");
  });
});
