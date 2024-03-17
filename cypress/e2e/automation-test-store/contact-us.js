/// < reference types="Cypress" />
describe("Test Contact US form Webdriver Uni", () => {
  it("Automation Test Store - Contact US page submission", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get('[name="first_name"]').type("Alok123Automation"); // FirstName
    //  cy.get('[name="last_name"]').type("Dobhal321"); // LastName
    cy.get("#ContactUsFrm_email").type("abc@123xyx.com"); // Email
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");

    //  cy.get('[name="message"]').type("Learning to code in Cypress"); // Comments
    cy.get("#ContactUsFrm_enquiry").type("abc@123xyx.com"); // Email
    //  cy.get('[type="submit"]').click();
    cy.get('[title="Submit"]').click();
    // Test to be validated : "Your enquiry has been successfully sent to the store owner!"
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });

  it("Automation Test Store - Contact US page submission", () => {
    cy.visit("https://automationteststore.com");
    cy.get("a[href$='contact']")
      .click()
      .then(function (validateLinkText) {
        console.log("Clicked on the link : " + validateLinkText.text());
      });
  });
});
