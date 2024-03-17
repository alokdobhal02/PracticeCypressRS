/// <reference types="Cypress" />
describe("Learning Variables", () => {
  it("Automation Test Store - Product identifications", () => {
    cy.visit("https://automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
  });

  it("Automation Test Store - Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    // The below code faills
    /*const header=cy.get("h1 .mainText");
    cy.log(header.text());
    */

    // The below one passes
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("The header Text => " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it("Automation Test Store - Validate Properties of Contact US page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    // Use Cypress Chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    // Using Jquery
    // Embeded commands Closure
  });
});
