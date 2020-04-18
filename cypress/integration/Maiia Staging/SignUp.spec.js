describe('Registration Maiia', () => {

    var phone = "0658868551"
    var Email = "testmaiia@yopmail.com"
    var password = "Azeqsdwxc123!"

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
    
      it('Check des règles de formulaire', () => {
        //check champs obligatoires
        cy.get('[name="phone"]').click()
        cy.get('[class="left"]').click()
        cy.contains('Vous devez entrer un numéro de téléphone').should('exist')
        cy.contains('Vous devez entrer un mot de passe').should('exist')
        cy.get('form').within(() => {
          cy.get('[name="phone"]').type('a') 
          cy.get('[name="username"]').type('quentin')
          cy.get('[name="confirmUsername"]').type('quentin@laudrain.org')
        })  
        cy.contains('Votre numéro de téléphone doit contenir 10 caractères au minimum').should('exist')
       
        //!Problème de Locale : anglais au lieu de français
        cy.contains('Mail must be a valid email').should('exist')
        cy.contains('L\'email de confirmation doit correspondre à l\'email renseigné').should('exist')
  
        //Check bouton submit non clickable
        cy.get('[type="submit"]').should('be.disabled')
  
        //Check password strength et progress bar
        cy.get('[name="password"]').type('a')
        cy.contains('Votre mot de passe doit contenir 8 caractères au minimum').should('exist')
        cy.get('[name="password"]').type('aaaaaaa')
        cy.contains('Pour sécuriser votre mot de passe, vous pouvez ajouter une majuscule ou un caractère spécial ou un numéro').should('exist')
        cy.get('[name="password"]').type('1')
        cy.contains('La sécurité de votre mot de passe est moyenne. Elle est suffisante pour valider votre inscription').should('exist')
        cy.get('[role="progressbar"]').should('have.attr','aria-valuenow','33')      
        cy.get('[name="password"]').type('A')
        cy.contains('la sécurité de votre mot de passe est forte.').should('exist')
        cy.get('[role="progressbar"]').should('have.attr','aria-valuenow','66')
        cy.get('[name="password"]').type('!')
        cy.contains('Votre mot de passe est super ! Félicitation !').should('exist')
        cy.get('[role="progressbar"]').should('have.attr','aria-valuenow','100')
  
        //Check visibilité password
        cy.get('[name="password"]').should('have.attr','type','password')
        cy.get('[class="MuiSvgIcon-root"]').click()
        cy.get('[name="password"]').should('have.attr','type','text')
      })
        //Check formulaire valide avec Login déjà enregistré 
    it('Compléter le formulaire', () => {
        cy.get('form').within(() => {
          cy.get('[name="phone"]').clear().type(phone) // Only yield inputs within form
          cy.get('[name="username"]').clear().type(Email)
          cy.get('[name="confirmUsername"]').clear().type(Email)
          cy.get('[name="password"]').clear().type(password)
          cy.get('[name="check"]').click()
          cy.get('[type="submit"]').click()
        })     
      })

    it('Check compte déjà créé'), () => {
        cy.contains('sont déjà utilisés').should('exist')
    }
})