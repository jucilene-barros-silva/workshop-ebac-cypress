/// <reference types="cypress" />

describe('DevFinance', () => {
    it('Adicionar uma nova transação de entrada', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')

        //get & contains
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('12')
        cy.get ('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length', 1)

    });
});

describe('DevFinance', () => {
    it('Excluir uma transação de entrada', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('12')
        cy.get ('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr td:last img').should('have.length', 1).click('center')
        

    });
});


// Position may only be topLeft, top, topRight, left, center, right, bottomLeft, bottom, bottomRight
describe('DevFinance', () => {
    it('Adicionar uma nova transação de saída', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')

        //get & contains
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Café')
        cy.get('#amount').type('-5')
        cy.get ('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length', 1)

    });
});

describe('DevFinance', () => {
    it('Excluir uma transação de saída', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Café')
        cy.get('#amount').type('-5')
        cy.get ('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        // cy.get('table tbody tr td:last').should('have.length', 1).click()
        cy.get('table tbody tr td:last img').should('have.length', 1).click('center')

    });
});

