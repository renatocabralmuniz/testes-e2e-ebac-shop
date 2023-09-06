/// <reference types="cypress" />
import checkoutPageCy, { CheckoutPage } from "../support/page_objects/checkout.page.cy.js";
const perfil = require('../fixtures/perfil.json')
const dadosCheckoutPage = require('../fixtures/checkout.json')

describe('Deve realizar pedido com sucesso', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });


    it('Teste e2e', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.screenshot('01 - Login')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain',  'Olá, alunorenato_ebac (não é alunorenato_ebac? Sair)')
    
        //Selecionar 4 produtos

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutos('Abominable Hoodie', 'XL', 'Red', 1)
        cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foi adicionado no seu carrinho.')
        
        
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.addProdutos('Atomic Endurance Running Tee (V-neck)', 'S', 'Green', 2)
        cy.get('.woocommerce-message').should('contain', '2 × “Atomic Endurance Running Tee (V-neck)” foram adicionados no seu carrinho.')


        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.addProdutos('Augusta Pullover Jacket', 'M', 'Blue', 1)
        cy.get('.woocommerce-message').should('contain', '“Augusta Pullover Jacket” foi adicionado no seu carrinho.')


        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.addProdutos('Cassia Funnel Sweatshirt', 'S', 'Purple', 1)
        cy.get('.woocommerce-message').should('contain', '“Cassia Funnel Sweatshirt” foi adicionado no seu carrinho.')


        cy.get('.woocommerce-message > .button').click()
        cy.screenshot('02 - Carrinho de compras')
        cy.get('.checkout-button').click()

        //Realizar Checkout

        checkoutPageCy.checkoutPage(
                dadosCheckoutPage[0].nome,
                dadosCheckoutPage[0].sobrenome,
                dadosCheckoutPage[0].empresa,
                dadosCheckoutPage[0].pais,
                dadosCheckoutPage[0].endereco,
                dadosCheckoutPage[0].numero,
                dadosCheckoutPage[0].cidade,
                dadosCheckoutPage[0].estado,
                dadosCheckoutPage[0].cep,
                dadosCheckoutPage[0].telefone,
                dadosCheckoutPage[0].email
            )
            
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').click()
        cy.get('#place_order').click( { force:true })
        cy.screenshot('03 - Checkout')
        cy.get('[data-cypress-el="true"]').should('not.exist')
        //cy.wait(6000)
        //cy.get('.page-title').should('contain', 'PEDIDO RECEBIDO')
        //cy.get('.woocommerce-order-overview').should('exist')
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.screenshot('04 - Pedido Recebido')
        
    });
    
    
});
