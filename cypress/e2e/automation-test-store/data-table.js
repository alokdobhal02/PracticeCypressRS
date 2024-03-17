/// <reference types="Cypress" />

const { should } = require("chai");

describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  // Lets store everything in the array and while storing check if its a number,
  // If yes then store it in the array and add to the previous count
  //const sum;

  it("Calculate and assert the total ages of all Users", () => {
    var userDetails = [];
    let numb = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        cy.log(userDetails.length);
        var i;
        for (i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            numb += Number(userDetails[i]);
          }
        }
        expect(numb).to.eq(322);
        cy.log("The total age is = " + numb);
      });
  });
});
