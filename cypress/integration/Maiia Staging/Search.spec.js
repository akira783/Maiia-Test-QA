describe('Fonction de recherche', () => {
  
    it('Aller sur staging.maiia.com', () => {
        cy.visit("https://www.staging.maiia.com/")
        cy.title().should('eq','Maiia - RDV en ligne et Téléconsultation - Professionnels de santé')
    })

    it('Recherche praticien', () => {
        
        cy.get('[placeholder="Spécialité, praticien, établissement"]').type('test QATECHNIQUE{enter}', {force: true, delay: 50})
        cy.get('.access__content--address > h4').should('contain','Cabinet qatechnique')
        cy.get('.spe').should('contain','généraliste')    
    })


})