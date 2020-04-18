describe('Fonction de recherche', () => {
  
    it('Aller sur staging.maiia.com', () => {
        cy.visit("https://www.staging.maiia.com/")
        cy.title().should('eq','Maiia - RDV en ligne et Téléconsultation - Professionnels de santé')
    })

    it('Recherche praticien', () => {
        
        cy.get('[placeholder="Spécialité, praticien, établissement"]').type('test QATECHNIQUE{enter}', {force: true, delay: 50}) //Utilisation de "force" sinon KO
        cy.get('.access__content--address > h4').should('contain','Cabinet qatechnique')
        cy.get('.spe').should('contain','généraliste')   //Check généraliste 
    })

    //selection du motif avec test de visibilité du tableau
    it('Selection Motif consultation', () => {
        cy.get('.rdv__availability').should('not.be.visible')
        cy.get('#consultationReasonName').select('Ablation de fils')
        cy.get('.rdv__availability').should('be.visible')
    })

    it('Selection heure du RDV', () => {
        cy.contains('08:00').click() //Selectionne le premier créneau de 8h00 dispo
    })


})