/// <reference types="cypress" />

export function navigateToCheckers() {
    cy.visit('/');
}

export function checkersIsWorking() {
    cy.get('h1')
            .invoke('text')
            .should('equal', 'Checkers');

    cy.request({
        method: 'GET',
        url: '/'
      }).then((response) => {expect(response.status).to.eq(200)});
      
}

export function playFiveCheckerMoves() {
    cy.get('[name="space42"]').click();
    cy.get('[name="space53"]').click();

    //*[@id="board"]/div[6]/img[4]

    cy.wait(4 * 1000);

    cy.get('[name="space22"]').click();
    cy.get('[name="space33"]').click();

    cy.wait(4 * 1000);

    //blue piece is taken in this move
    cy.get('[name="space42"]').click();
    cy.get('[name="space51"]').click();
    cy.get('[name="space33"]').click();

    cy.wait(4 * 1000);

    cy.get('[name="space31"]').click();
    cy.get('[name="space42"]').click();

    cy.wait(4 * 1000);

    cy.get('[name="space60"]').click();
    cy.get('[name="space51"]').click();

}

export function resetCheckersGame() {
    cy.contains('Restart').click();
    cy.get('#message')
            .invoke('text')
            .should('equal', 'Select an orange piece to move.');
}