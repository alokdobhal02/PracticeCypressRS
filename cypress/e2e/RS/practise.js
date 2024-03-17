describe("My First Test Suite", function () {
  it("My firstTestCase with Visible", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    // The below step will fails hence commented
    //cy.get(".product").should("have.length", 4);

    cy.get(".product:visible").should("have.length", 4); // This will pass
  });

  it("Parent Child concept Get and Find", function () {
    // Here we will get the Parent and then look for a specific child in it
    // Find : Get the specific DOM decemdent of the selected selector
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        console.log("Clicked the button");
      });
  });

  it("Parent Child concept Get and Find", function () {
    // Here we will make it dynamic and less hardcoded values
    // Search and find for Cashews and it to the cart
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products").find(".product").as("ALOK");
    cy.get("@ALOK")
      .get("h4.product-name")
      .each(($el, index, $list) => {
        if ($el.find().text().includes("Capsicum")) {
          console.log("Found IT");
        } else {
          console.log("Found Nothing");
        }
      });
  });

  it("Different Approach - Parent Child concept Get and Find", function () {
    // Here we will make it dynamic and less hardcoded values
    // Search and find for Cashews and it to the cart
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products").find(".product").as("ALOK");
    cy.get("@ALOK").each(($el, index, $list) => {
      const textItem = $el.find("h4.product-name").text();
      if (textItem.includes("Cashews")) {
        cy.wrap($el).find("button").click();
      }
    });
  });
});
