/**
 * EventZella BI — Configuration des dashboards
 * =============================================
 * Pour chaque dashboard, remplis le champ iframeUrl avec l'URL
 * que tu obtiens depuis Power BI Service :
 *   Rapport → Fichier → Incorporer le rapport → Site web ou portail
 *   → copier l'URL src de l'iframe
 *
 * Format : https://app.powerbi.com/reportEmbed?reportId=XXX&autoAuth=true&ctid=YYY
 */
const USERS = [
  {
    email:    "productmanager@eventzella.com",
    password: "pm2025",
    role:     "Product Manager",
    icon:     "📊",
    dashboard: 0
  },
  {
    email:    "ceo@eventzella.com",
    password: "ceo2025",
    role:     "CEO",
    icon:     "🏆",
    dashboard: 1
  },
  {
    email:    "marketing@eventzella.com",
    password: "mkt2025",
    role:     "Marketing",
    icon:     "📣",
    dashboard: 2
  },
  {
    email:    "providers@eventzella.com",
    password: "prov2025",
    role:     "Prestataires & Qualité",
    icon:     "⭐",
    dashboard: 3
  }
];
const DASHBOARDS = [
  {
    label:       "Product Manager",
    icon:        "📊",
    description: "UX Performance & Algorithme de budgétisation",
    iframeUrl:   "https://app.powerbi.com/reportEmbed?reportId=68f66a0e-b7f8-4a47-8536-629fda101ab8&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730"
  },
  {
    label:       "CEO",
    icon:        "🏆",
    description: "Vision stratégique & KPIs business",
    iframeUrl:   ""   // ← coller ici l'URL iframe du rapport CEO
  },
  {
    label:       "Marketing",
    icon:        "📣",
    description: "Acquisition, conversion & rétention",
    iframeUrl:   ""   // ← coller ici l'URL iframe du rapport Marketing
  },
  {
    label:       "Prestataires & Qualité",
    icon:        "⭐",
    description: "Performance & qualité de service",
    iframeUrl:   ""   // ← coller ici l'URL iframe du rapport Providers
  }
];
