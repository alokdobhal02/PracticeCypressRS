/// <references types="Cypress"/>
describe("Automation Practise", function () {
  before(function () {
    cy.fixture("example.json");
  });

  it.only("Positive - RS", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(".form-group").find('input[name="name"]').type("Bob");
    cy.get('input[name="name"]:nth-Child(2)').type("Alok");
    cy.get(".form-group")
      .find('input[name="email"]')
      .type("dobhal.alok@gmail.com");
    cy.get("#exampleInputPassword1").type("Alok");
    cy.get("#exampleCheck1").check();
    cy.get("#exampleFormControlSelect1").select("Female");
    cy.get("select").select("Male");
  });

  it("Negative - RS", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(".form-group").find('input[name="name"]').type("1");
    cy.get(".form-group").find('input[name="email"]').type("1");
    cy.get(".alert-danger").should(
      "contain",
      "Name should be at least 2 characters"
    );
    //expect()

    cy.get(".form-group").find('input[name="name"]').type("Bob");
    cy.get('input[name="name"]:nth-Child(2)').type("Alok");
    cy.get(".form-group").find('input[name="name"]').type("Neha");
  });
  it.only("Using Fixture Json File : Positive - RS", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(".form-group").find('input[name="name"]').type("Bob");
    cy.get('input[name="name"]:nth-Child(2)').type("Alok");
    cy.get(".form-group")
      .find('input[name="email"]')
      .type("dobhal.alok@gmail.com");
    cy.get("#exampleInputPassword1").type("Alok");
    cy.get("#exampleCheck1").check();
    cy.get("#exampleFormControlSelect1").select("Female");
    cy.get("select").select("Male");
  });
});
