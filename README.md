# EventZella BI — Version iFrame (sans Azure AD)

## Lancer l'application
Double-cliquer sur `index.html` → s'ouvre dans le navigateur.
Ou : clic droit → Ouvrir avec → Chrome / Edge / Firefox

## Ajouter d'autres dashboards
Ouvrir `config.js` et remplir les champs `iframeUrl` :

1. Sur app.powerbi.com → ton rapport → Fichier → Incorporer le rapport → Site web ou portail
2. Copier l'URL src de l'iframe généré
3. Coller dans `config.js` dans le bon champ

## Structure
eventzella-bi-iframe/
├── index.html   → application complète (sidebar + iframe)
└── config.js    → URLs des rapports Power BI (à modifier)
