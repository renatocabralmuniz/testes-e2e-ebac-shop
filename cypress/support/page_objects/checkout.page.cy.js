class CheckoutPage {

    checkoutPage(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email) {
        //elementos + açoes

        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').click().clear().type(cep)
        cy.get('#billing_phone').click().clear().type(telefone)
        cy.get('#billing_email').click().clear().type(email)
        
    }
} 

export default new CheckoutPage()