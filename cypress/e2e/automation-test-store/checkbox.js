/// <reference types="Cypress" />
describe("Web Security - Checkbox", () => {
  it("Automation Test Store : Validate Clicking checkbox", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check().should("be.checked");
    //cy.get("#dropdown-checkboxes-radiobuttons").click();
  });
  it("Automation Test Store : Uncheck and validate checkbox", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#checkboxes > :nth-child(5) > input").as("option-5");
    cy.get("@option-5").uncheck().should("not.be.checked");
    //cy.get("#dropdown-checkboxes-radiobuttons").click();
  });

  it("Automation Test Store : Multiple Checkboxes", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
