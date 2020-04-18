describe('Registration Maiia', () => {
    
    it('Allez sur Staging.Maiia.com', () => {
        cy.visit("https://www.staging.maiia.com/")
        cy.title().should('eq','Maiia - RDV en ligne et Téléconsultation - Professionnels de santé')
      })
  
      it('Acceder au Signup', () => {
        cy.get('[name="account"]').click()
        cy.title().should('eq','Maiia - RDV en ligne et Téléconsultation - Professionnels de santé')
        cy.get('[class="title"]').contains("Connexion")
      })

      it('Accès à "Créer mon compte', () => {
        cy.get('[class="btn register"]').click()
        cy.get('[class="left"]').contains("Nouveau sur Maiia ?")     
      })
    

})