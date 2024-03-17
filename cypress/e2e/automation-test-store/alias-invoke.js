describe("Alias and Invoke", () => {
  it("Automation Test Store : Validate a specific Haircare product", () => {
    cy.visit("https://automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Automation Test Store : Validate Product Thumbnail", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".thumbnail").as("AlokThumbnail");
    cy.get("@AlokThumbnail").should("have.length", 16);
    cy.get("@AlokThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it("Automation Test Store : Calculate total Normal and Sale Product", () => {
    cy.visit("https://automationteststore.com");
    // cy.get(".thumbnail").as("AlokThumbnail");

    // $el is a wrapped jQuery element and using jquery text() method
    // Below code to get information on Non Sale item
    /*
    cy.get("@AlokThumbnail")
      .find(".oneprice")
      .each(($el, index, $list) => {
        cy.log($el.text());
      });
    */
    // invoke : Cypress command
    // Below code will extract and add the prices for all Sale item
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");

    // By using .then we are initializing a promise()
    var totalCount = 0;
    cy.get("@itemPrice").then(($linkText) => {
      var totalItemPrice = 0;
      var itemPrice = $linkText.split("$");
      var i;

      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        //totalItemPrice = totalItemPrice + itemPrice[i];
        totalItemPrice += Number(itemPrice[i]);
      }
      totalCount += totalItemPrice;
      cy.log("The total price : " + totalItemPrice);
    });
  });

  it("Assignment - Thumbnal", () => {
    cy.visit("https://automationteststore.com");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    // cy.get(".thumbnail").eq(0).invoke("text").as("AlokThumbnail");

    cy.get(".thumbnail").as("AlokThumbnail");
    cy.get("@AlokThumbnail").its("length").should("be.below", 18);
    cy.get("@AlokThumbnail").should("have.length", 16);
    // invoke in here is used to invoke a attribute in this case 'attr'
    cy.get("@AlokThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
    // cy.get('@AlokThumbnail')
  });
});
