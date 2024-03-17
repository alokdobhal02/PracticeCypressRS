/// <references types="Cypress"/>
describe("feature", () => {
  it("feature : Click Help dropdown and Select Store Finder", () => {
    cy.visit("https://www.woolworths.com.au/");
    cy.get('button[data-menu-key="help"]').click();
  });
});
