/// < reference types="Cypress" />
describe("Parctising Cypress", () => {
  it("extract Text Value", () => {
    cy.visit("https://www.woolworths.com.au/");
  });

  it.only("Giani Contact US page : Enter Value", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Alok123"); // FirstName
    cy.get('[name="last_name"]').type("Dobhal321"); // LastName
    cy.get('[name="email"]').type("abc@123xyx.com"); // Email
    cy.get('[name="message"]').type("Learning to code in Cypress"); // Comments
    cy.get('[type="submit"]').click();
  });
});
