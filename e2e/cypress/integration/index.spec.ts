/// <reference types="Cypress" />

// Index E2E Testing
describe('Index e2e test', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000');
    cy.findByTestId('app').should('exist');
  });
});
