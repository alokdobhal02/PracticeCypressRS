/// <reference types="Cypress" />

describe("Web Security - Origin", () => {
  it("Automation Test Store : Validate Same origin", () => {
    cy.visit("https://automationteststore.com");
    cy.visit("https://google.com");
  });
  it("Automation Test Store : Validate a specific Haircare product", () => {
    cy.visit(" https://webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });

  it("Automation Test Store : Validate a specific Haircare product", () => {
    cy.origin("Vistin Automation Uni page", () => {
      cy.visit("https://automationteststore.com");
    });

    cy.origin("Vistin WebDriver Uni page", () => {
      cy.visit("https://www.webdriveruniversity.com/");
    });
  });
});
