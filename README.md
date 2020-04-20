# Maiia-Test-QA
Repo Test Technique QA Maiia

Utilisation : 

# # clonez ce repo dans un répertoire local 
git clone https://github.com/akira783/Maiia-Test-QA.git

# # allez dans le repertoire cloné 
cd Maiia-Test-QA

# # installez les node_modules
npm install package-lock.json

# # démarrer Cypress
Depuis la racine du repertoire du projet exécutez: 
./node_modules/.bin/cypress open

--> si vous rencontrez le message suivant : "./node_modules/.bin/cypress : Impossible de charger le fichier ...PS1"
Dévérouillez l'exectution des scripts dans la Registry via la commande PS (en mode Admin) suivante : "set-executionpolicy unrestricted" 
