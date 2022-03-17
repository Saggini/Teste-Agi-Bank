describe('Agi Blog busca artigos', () => {
    
    beforeEach(() => {
      cy.viewport(1024, 768)
      cy.visit('https://blogdoagi.com.br')
      
    })
  
    it('buscar artigo de Chave Pix', () => {
        cy.get('#overlay-open').click()
        cy.get('.mobile-search > .search-form > label > .search-field').type('Chave Pix no app da Agi').type('{enter}')
        cy.get('.archive-title').should('contain', 'Chave Pix no app da Agi')
        cy.get('article').should('be.visible')
         
    })
  
    it('buscar artigo de batata frita', () => {
        cy.get('#overlay-open').click()
        cy.get('.mobile-search > .search-form > label > .search-field').type('batata frita').type('{enter}')
        cy.get('.entry-title').should('contain', 'Nenhum resultado')
        cy.get('article').should('not.exist')
  })
})