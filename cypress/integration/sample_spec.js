it("should render Swagger UI", () => {
  cy.visit("/")
    .get("h2.title")
    .contains("Swagger Petstore")
})
