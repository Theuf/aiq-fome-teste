

describe('home page', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    it ('fluxo de pedido magalu', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://www.magazineluiza.com.br')
        cy.get('[data-testid="logo-magalu"]')
        cy.xpath("//a[text()='Todos os departamentos']").trigger('mouseover')
        cy.xpath("//li/a[text()='Ar e Ventilação']").click()

        cy.xpath('//div[@data-testid="product-list"]/ul/li[3]/a/div[3]/h2').invoke('text').then((texto) => {
            cy.log(texto)
            cy.xpath('//div[@data-testid="product-list"]/ul/li[3]').click()
            cy.get('#variation-label').select('020470100')
            cy.get('button.button__buy.button__buy-product-detail.js-add-cart-button.js-main-add-cart-button.js-add-box-prime').click()
            cy.get('div.BasketItemProduct > div > a > p:nth-child(1)').contains(texto)
            cy.get('div.BasketItemProduct-quantity > select').should('have.value', '1')
            cy.get('div.BasketItemProduct-price').should('have.text', 'De R$ 164,90 porR$ 95,00')
          })
    })
})