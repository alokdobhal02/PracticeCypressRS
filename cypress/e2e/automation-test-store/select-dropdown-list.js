/// <reference types="Cypress" />
describe("Web Security - Interact with dropdown list", () => {
  it("Automation Test Store : Select specific value from select list", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // Select on the basis of attribute value
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng");
    cy.get("#dropdowm-menu-3").select("jquery");
    // Select based on Text
    cy.get("#dropdowm-menu-2").select("JUnit");

    // Select based on Attribute value and then Assertion and validation
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
    // Select based on Text and then Assertion and validation
    cy.get("#dropdowm-menu-3").select("CSS").contains("CSS");
  });

  it("Automation Test Store - Challenge to select based on Attribute value and Text", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // Select on the basis of attribute value
    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven");
    // Select based on Text
    cy.get("#dropdowm-menu-2").select("TestNG").contains("TestNG");
    // The above is not working for me.
    // https://glebbahmutov.com/cypress-examples/commands/assertions.html#have-text-vs-contain
    // The above link is good for Assertion information

    cy.get("#dropdowm-menu-2")
      .select("TestNG")
      .should("contain.text", "TestNG");
  });
});
