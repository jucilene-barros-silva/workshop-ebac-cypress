/// <reference types="cypress" />

const { remove } = require("lodash");

describe('DevFinance', () => {

    // antes de cada Teste - beforeEach

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')
    });

    it('Adicionar uma nova transação de entrada', () => {

        //get & contains
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('12')
        cy.get ('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length', 1)

    });

    it('Excluir uma transação de entrada', () => {

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('12')
        cy.get ('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()
        cy.get('img[onclick*=remove]').click()
        // cy.get('table tbody tr td:last img').should('have.length', 1).click('center')
        
        cy.get('table tbody tr').should('have.length', 0)
    });

    it('Adicionar uma nova transação de saída', () => {

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Café')
        cy.get('#amount').type('-5')
        cy.get ('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length', 1)

    });

    it('Excluir uma transação de saída', () => {

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Café')
        cy.get('#amount').type('-5')
        cy.get ('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr td:last img').should('have.length', 1).click('center')

        cy.get('table tbody tr').should('have.length', 0)

    });

    //Possibilidade apresentada na correção do projeto

    it('Excluir uma transação da listagem', () => {
        
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('12')
        cy.get ('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length', 1)

        cy.contains('td', 'Freela') //  a partir de um texto ()
          .parent() //voltarpara o elemento pai
          .find('img[onclick*=remove]') // depois buscar com (find) um elemento específico
          .click()

        cy.get('table tbody tr').should('have.length', 0)

    });

    it('Excluir uma transação da listagem 2', () => {
        
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('12')
        cy.get ('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length', 1)

        cy.contains('td', 'Freela')
          .siblings() // lista os elementos irmãos 
          .children('img[onclick*=remove]')
          .click() 

        cy.get('table tbody tr').should('have.length', 0)

    });
});
