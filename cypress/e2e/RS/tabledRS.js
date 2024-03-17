describe("Automation Practise", function () {
  it("CheckBox : Alok version - RS", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#product").find("tr td:nth-child(2)").as("table");
    cy.get("@table").each(($el, index, $list) => {
      cy.wrap($el);
      //cy.log($el.text());
      if (
        $el.text() === "Master Selenium Automation in simple Python Language"
      ) {
        cy.log(index + " - " + $el.text());
      }
    });
  });

  it("CheckBox : RS version - RS", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("tr td:nth-child(2)").as("Parent");
    cy.get("@Parent").each(($el, index, $list) => {
      cy.wrap($el);
      const text = $el.text();
      if (text.includes("Python")) {
        cy.log(index + " - " + text);
        cy.get("@Parent")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            cy.log("Price" + " - " + priceText);
            expect(priceText).to.equal("25");
          });
        // cy.log(Price + " - " + price);
      }
    });
  });

  it.only("Mousehover RS version - RS", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
