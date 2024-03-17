/// <reference types="Cypress" />

describe("Test Contact US form Webdriver Uni", () => {
  it("WebDriver UNI- Contact US page submission", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type("Alok123WebDriver"); // FirstName
    cy.get('[name="last_name"]').type("Dobhal321"); // LastName
    cy.get('[name="email"]').type("abc@123xyx.com"); // Email
    cy.get('[name="message"]').type("Learning to code in Cypress"); // Comments
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Negative Scenarion : Mandatory field missing - WebDriver UNI- Contact US page submission", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Alok123WebDriver"); // FirstName
    cy.get('[name="last_name"]').type("Dobhal321"); // LastName
    cy.get("textarea.feedback-input").type("How can I learn Cypress ?");
    //cy.get('[name="email"]').type("abc@123xyx.com"); // Email
    // cy.get('[name="message"]').type("Learning to code in Cypress"); // Comments
    cy.get('[type="submit"]').click();
    // Error: all fields are required , Error: Invalid email address
    cy.get("body").contains("Error: all fields are required");
    cy.get("body").contains("Error: Invalid email address");
    //cy.get("body").should("have.text", "Error: all fields are required");
    //cy.get("body").should("have.text", "Error: Invalid email address");
    // cy.get("h1").should("have.text", "Thank You for your Message!");
  });
});
