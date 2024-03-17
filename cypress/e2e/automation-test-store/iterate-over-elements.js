/// <reference types="Cypress" />

describe("Learning Variables", () => {
  it("Automation Test Store - Log Information for all Hair care", () => {
    cy.visit("https://automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index : " + index + " :  " + +$el.text);
    });
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .subcategories > :nth-child(1) > :nth-child(1) > a').click();
    cy.get(':nth-child(1) > .thumbnail > .pricetag > .price > .oneprice').click();
    cy.get(':nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click();
    cy.get('[for="option344747"]').click();
    cy.get('#option344747').check();
    cy.get('#option344748').check();
    cy.get('#option344749').check();
    cy.get('[for="option344750"]').click();
    cy.get('#option344750').check();
    cy.get('#product > fieldset').click();
    cy.get('#product_details > :nth-child(1) > :nth-child(2) > .row > .col-md-12').click();
    cy.get('#product_quantity').clear('2');
    cy.get('#product_quantity').type('20');
    cy.get('.cart').click();
    /* ==== End Cypress Studio ==== */
  });

  it("Automation Test Store - Add Specific product to basket", () => {
    cy.visit("https://automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo")) {
        cy.wrap($el).click();
      }
    });
  });
});
