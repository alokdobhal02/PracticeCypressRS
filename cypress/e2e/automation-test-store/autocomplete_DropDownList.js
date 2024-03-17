/// <reference types="Cypress" />
describe("Automation Test Store - AutoComplete Dropdown list", () => {
  it("Select specific product from DropdownList", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list >*")
      .each(($el, index, $list) => {
        const product = $el.text();
        console.log(product);
        const productToSelect = "Avacado";
        if (product === productToSelect) {
          cy.wrap($el).click();
          cy.get("#submit-button").click();
          cy.url().should("include", product);
        }
      })
      .then(() => {
        cy.get("#myInput").type("g");
        cy.get("#myInputautocomplete-list >*").each(($el, index, $list) => {
          const product = $el.text();
          console.log(product);
          const productToSelect = "Grapes";
          if (product === productToSelect) {
            $el.trigger("click");
            cy.get("#submit-button").click();
            cy.url().should("include", product);
          }
        });
      });
  });
});
