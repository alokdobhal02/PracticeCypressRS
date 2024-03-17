describe("Automation Practise", function () {
  it("CheckBox - RS", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    // multiple selection of checkbox
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);
    cy.get("#checkBoxOption2")
      .should("be.checked")
      .and("have.value", "option2");
    cy.get("#checkBoxOption1")
      .should("not.be.checked")
      .and("have.value", "option1");
  });

  it("Dynamic Dropdown - RS", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#autocomplete").type("Ind").as("DynamicDropdown");
    cy.get("@DynamicDropdown")
      .get(".ui-menu-item div")
      .each(($el, index, $list) => {
        // cy.wrap($el);
        if ($el.text() === "India") {
          cy.wrap($el).click();
          cy.log("Gotch you");
        }
      });
    cy.get("#autocomplete").should("have.value", "India");
  });

  it("Hidden - RS", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  });

  it("Radio Button - RS", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('[value="radio2"]').check().should("be.checked");

    /* cy.get("#radio-btn-example")
      .find(".radioButton")
      .each(($el, index, $list) => {
        if ($el.text() === "Radio1") {
          cy.wrap($el).click();
        }
      });
      */
  });
  it("Should handle child window", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });
});
