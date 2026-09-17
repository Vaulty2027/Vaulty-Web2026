// ==========================================================
// MAPLIBRE
// ==========================================================

import * as maplibregl from
  'https://unpkg.com/maplibre-gl@6.9.0/dist/maplibre-gl.mjs';

// ================================================================
//  SISTEMA DE IDIOMAS DEL MAPA ATM
// ================================================================

const ATM_TRANSLATIONS = {
    es: {
    pageTitle: "ATMs en Panamá",
    subtitle: "Todas las provincias",
    search: "Buscar por nombre o dirección...",
    cityZone: "Ciudad / Zona",
    allZones: "Todas las zonas",
    filterBank: "Filtrar por banco",
    showing: "Mostrando",
    of: "de",
    atms: "ATMs",
    address: "Dirección",
    hours: "Horario",
    noResults: "No se encontraron ATMs",
    noHours: "Horario no disponible",
    back: "Volver a ATM",
    results: "Resultados"
},

en: {
    pageTitle: "ATMs in Panama",
    subtitle: "All provinces",
    search: "Search by name or address...",
    cityZone: "City / Area",
    allZones: "All areas",
    filterBank: "Filter by bank",
    showing: "Showing",
    of: "of",
    atms: "ATMs",
    address: "Address",
    hours: "Hours",
    noResults: "No ATMs found",
    noHours: "Hours not available",
    back: "Back to ATM",
    results: "Results"
},

pt: {
    pageTitle: "ATMs no Panamá",
    subtitle: "Todas as províncias",
    search: "Pesquisar por nome ou endereço...",
    cityZone: "Cidade / Área",
    allZones: "Todas as áreas",
    filterBank: "Filtrar por banco",
    showing: "Mostrando",
    of: "de",
    atms: "ATMs",
    address: "Endereço",
    hours: "Horário",
    noResults: "Nenhum ATM encontrado",
    noHours: "Horário não disponível",
    back: "Voltar para ATM",
    results: "Resultados"
},

fr: {
    pageTitle: "Distributeurs au Panama",
    subtitle: "Toutes les provinces",
    search: "Rechercher par nom ou adresse...",
    cityZone: "Ville / Zone",
    allZones: "Toutes les zones",
    filterBank: "Filtrer par banque",
    showing: "Affichage",
    of: "sur",
    atms: "DAB",
    address: "Adresse",
    hours: "Horaires",
    noResults: "Aucun distributeur trouvé",
    noHours: "Horaires non disponibles",
    back: "Retour à ATM",
    results: "Résultats"
},

al: {
    pageTitle: "Geldautomaten in Panama",
    subtitle: "Alle Provinzen",
    search: "Nach Name oder Adresse suchen...",
    cityZone: "Stadt / Gebiet",
    allZones: "Alle Gebiete",
    filterBank: "Nach Bank filtern",
    showing: "Angezeigt",
    of: "von",
    atms: "Geldautomaten",
    address: "Adresse",
    hours: "Öffnungszeiten",
    noResults: "Keine Geldautomaten gefunden",
    noHours: "Öffnungszeiten nicht verfügbar",
    back: "Zurück zu ATM",
    results: "Ergebnisse"
},

zh: {
    pageTitle: "巴拿马ATM",
    subtitle: "所有省份",
    search: "按名称或地址搜索...",
    cityZone: "城市 / 区域",
    allZones: "所有区域",
    filterBank: "按银行筛选",
    showing: "显示",
    of: "共",
    atms: "ATM",
    address: "地址",
    hours: "营业时间",
    noResults: "未找到ATM",
    noHours: "营业时间不可用",
    back: "返回ATM",
    results: "结果"
}
};


// Idioma actual guardado por Vaulty+
let ATM_LANGUAGE = localStorage.getItem("lang") || "es";

// Si el idioma guardado no existe, usamos español
if (!ATM_TRANSLATIONS[ATM_LANGUAGE]) {
    ATM_LANGUAGE = "es";
}


// Obtener traducciones actuales
function atmT(key) {
    return ATM_TRANSLATIONS[ATM_LANGUAGE]?.[key]
        || ATM_TRANSLATIONS.es[key]
        || key;
}

// ==========================================================
// COLORES POR BANCO
// ==========================================================

const BANK_COLORS = {

  "Banco General": "#2dd4bf",

  "Banistmo": "#f97316",

  "Banco Nacional de Panamá": "#60a5fa",

  "Scotiabank": "#ef4444",

  "BAC Credomatic": "#a78bfa",

  "Caja de Ahorros": "#facc15",

  "Global Bank": "#22c55e",

  "Credicorp Bank": "#f472b6",

  "CanalBank": "#38bdf8",

  "Otro": "#94a3b8"

};


// ==========================================================
// DATOS DE ATMs
// ==========================================================

const atms = [

  // ================= CIUDAD DE PANAMÁ =================

  {
    name:"ATM Banco General",
    bank:"Banco General",
    city:"Ciudad de Panamá",
    lat:8.9891103,
    lng:-79.5229442,
    addr:"Vía España, Panamá",
    hours:"7:00 AM - 10:00 PM"
  },

  {
    name:"Banco General ATM",
    bank:"Banco General",
    city:"Ciudad de Panamá",
    lat:8.9947074,
    lng:-79.5586701,
    addr:"Av. Demetrio Basilio Lakas, Panamá",
    hours:"24 horas"
  },

  {
    name:"Banco General ATM",
    bank:"Banco General",
    city:"Ciudad de Panamá",
    lat:8.9981449,
    lng:-79.5330880,
    addr:"Panamá",
    hours:"24 horas"
  },

  {
    name:"Banco General ATM",
    bank:"Banco General",
    city:"Ciudad de Panamá",
    lat:9.0007027,
    lng:-79.5166752,
    addr:"Panamá",
    hours:""
  },

  {
    name:"Banco General ATM",
    bank:"Banco General",
    city:"Ciudad de Panamá",
    lat:9.0085741,
    lng:-79.5369279,
    addr:"Av. 17B Nte., Panamá",
    hours:"24 horas"
  },

  {
    name:"Banco General ATM",
    bank:"Banco General",
    city:"Ciudad de Panamá",
    lat:9.0136239,
    lng:-79.5222809,
    addr:"San Miguelito, Panamá",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM | Super 99 - Río Abajo",
    bank:"Banistmo",
    city:"Ciudad de Panamá",
    lat:9.0129536,
    lng:-79.5000244,
    addr:"Super 99, Río Abajo, Panamá",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM | Super 99 - Albrook",
    bank:"Banistmo",
    city:"Ciudad de Panamá",
    lat:8.9770154,
    lng:-79.5508434,
    addr:"Albrook Mall, Panamá",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM | Terminal Albrook #3",
    bank:"Banistmo",
    city:"Ciudad de Panamá",
    lat:8.9736210,
    lng:-79.5516480,
    addr:"Terminal de Albrook, Panamá",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM | Hotel Hilton",
    bank:"Banistmo",
    city:"Ciudad de Panamá",
    lat:8.9760974,
    lng:-79.5226619,
    addr:"Frente al Hotel Hilton, Panamá",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM | Multicentro",
    bank:"Banistmo",
    city:"Ciudad de Panamá",
    lat:8.9766092,
    lng:-79.5176613,
    addr:"Multicentro, Av. Balboa, Panamá",
    hours:""
  },

  {
    name:"Banistmo ATM | Terminal Albrook #1",
    bank:"Banistmo",
    city:"Ciudad de Panamá",
    lat:8.9743630,
    lng:-79.5516450,
    addr:"Terminal de Albrook, Panamá",
    hours:"24 horas"
  },

  {
    name:"ATM Banco Nacional de Panamá",
    bank:"Banco Nacional de Panamá",
    city:"Ciudad de Panamá",
    lat:9.0338021,
    lng:-79.4998886,
    addr:"Calle de Circunvalación, Panamá",
    hours:"24 horas"
  },

  {
    name:"ATM Banco Nacional",
    bank:"Banco Nacional de Panamá",
    city:"Ciudad de Panamá",
    lat:9.0198339,
    lng:-79.5325533,
    addr:"Av. Universidad Tecnológica, Panamá",
    hours:"24 horas"
  },

  {
    name:"ATM Banco Nacional",
    bank:"Banco Nacional de Panamá",
    city:"Ciudad de Panamá",
    lat:8.9902720,
    lng:-79.5162535,
    addr:"Panamá",
    hours:""
  },

  {
    name:"ATM Banco Nacional",
    bank:"Banco Nacional de Panamá",
    city:"Ciudad de Panamá",
    lat:9.0031403,
    lng:-79.5163506,
    addr:"Vía España, Panamá",
    hours:"24 horas"
  },

  {
    name:"ATM Scotiabank - Sucursal Bella Vista",
    bank:"Scotiabank",
    city:"Ciudad de Panamá",
    lat:8.9780633,
    lng:-79.5230257,
    addr:"Calle Aquilino de la Guardia, Panamá",
    hours:"24 horas"
  },

  {
    name:"ATM Scotiabank - Branch Dorado",
    bank:"Scotiabank",
    city:"Ciudad de Panamá",
    lat:9.0074751,
    lng:-79.5367163,
    addr:"Av. 17B Nte., Panamá",
    hours:"24 horas"
  },

  {
    name:"Credomatic | Terminal de Albrook",
    bank:"BAC Credomatic",
    city:"Ciudad de Panamá",
    lat:8.9744106,
    lng:-79.5513740,
    addr:"Terminal de Albrook, Panamá",
    hours:"24 horas"
  },

  {
    name:"BAC ATM",
    bank:"BAC Credomatic",
    city:"Ciudad de Panamá",
    lat:9.0112110,
    lng:-79.5341448,
    addr:"Calle 74 Oeste, Panamá",
    hours:"No 24h"
  },


  // ================= DAVID, CHIRIQUÍ =================

  {
    name:"Cajero Banco Nacional de Panamá | Super Extra",
    bank:"Banco Nacional de Panamá",
    city:"David, Chiriquí",
    lat:8.4288088,
    lng:-82.4442848,
    addr:"Super Extra, David",
    hours:""
  },

  {
    name:"General Bank ATM",
    bank:"Banco General",
    city:"David, Chiriquí",
    lat:8.4286773,
    lng:-82.4443573,
    addr:"David centro",
    hours:"7:00 AM - 11:00 PM"
  },

  {
    name:"ATM 24h (David Sur)",
    bank:"Otro",
    city:"David, Chiriquí",
    lat:8.4242708,
    lng:-82.4312159,
    addr:"David Sur",
    hours:"24 horas"
  },

  {
    name:"Cajero (Savings Bank)",
    bank:"Caja de Ahorros",
    city:"David, Chiriquí",
    lat:8.4345368,
    lng:-82.4219254,
    addr:"David",
    hours:"24 horas"
  },

  {
    name:"ATM Banco General",
    bank:"Banco General",
    city:"David, Chiriquí",
    lat:8.4454928,
    lng:-82.4194547,
    addr:"El Terronal, David",
    hours:"24 horas"
  },

  {
    name:"Banco General David (C. F Sur)",
    bank:"Banco General",
    city:"David, Chiriquí",
    lat:8.4284802,
    lng:-82.4384242,
    addr:"Calle F Sur, David",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Cajero ATM Banistmo",
    bank:"Banistmo",
    city:"David, Chiriquí",
    lat:8.4353061,
    lng:-82.4400801,
    addr:"Carr. Interamericana, David",
    hours:"24 horas"
  },

  {
    name:"BAC ATM (Av. Obaldía)",
    bank:"BAC Credomatic",
    city:"David, Chiriquí",
    lat:8.4410716,
    lng:-82.4236017,
    addr:"Av. Obaldía, David",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM | Xtra David",
    bank:"Banistmo",
    city:"David, Chiriquí",
    lat:8.4287571,
    lng:-82.4442518,
    addr:"Xtra David, Terminal, Calle 19 de Octubre",
    hours:"24 horas"
  },

  {
    name:"Cajero Global Bank | Hospital Chiriquí",
    bank:"Global Bank",
    city:"David, Chiriquí",
    lat:8.4311618,
    lng:-82.4324109,
    addr:"Sala de espera, Hosp. Chiriquí, David",
    hours:"24 horas"
  },

  {
    name:"Banco General David (C. B Nte)",
    bank:"Banco General",
    city:"David, Chiriquí",
    lat:8.4302111,
    lng:-82.4271248,
    addr:"Calle B Nte., David",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Banco General San Mateo",
    bank:"Banco General",
    city:"David, Chiriquí",
    lat:8.4284265,
    lng:-82.4387562,
    addr:"Av. 6a Oeste, David",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"ATMs BAC | Banco General | Global",
    bank:"Otro",
    city:"David, Chiriquí",
    lat:8.4443407,
    lng:-82.4212954,
    addr:"David (dentro de Super 99)",
    hours:""
  },

  {
    name:"Banco General David Terronal",
    bank:"Banco General",
    city:"David, Chiriquí",
    lat:8.4454507,
    lng:-82.4194956,
    addr:"Carr. Panamericana, El Terronal",
    hours:"11:30 AM - 6:00 PM"
  },

  {
    name:"Banistmo ATM (Av. Bolívar)",
    bank:"Banistmo",
    city:"David, Chiriquí",
    lat:8.4292230,
    lng:-82.4245580,
    addr:"Av. Bolívar, David centro",
    hours:"24 horas"
  },

  {
    name:"Banistmo | David Centro",
    bank:"Banistmo",
    city:"David, Chiriquí",
    lat:8.4292212,
    lng:-82.4245751,
    addr:"Av. Bolívar, David centro",
    hours:"8:00 AM - 3:30 PM"
  },

  {
    name:"Banistmo ATM | Suc. David Terronal",
    bank:"Banistmo",
    city:"David, Chiriquí",
    lat:8.4460355,
    lng:-82.4210321,
    addr:"Plaza Terronal, detrás de Friday's",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM (Av. 5a Este)",
    bank:"Banistmo",
    city:"David, Chiriquí",
    lat:8.4253968,
    lng:-82.4254649,
    addr:"Av. 5a Este, David",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM (Calle F Sur)",
    bank:"Banistmo",
    city:"David, Chiriquí",
    lat:8.4278900,
    lng:-82.4371000,
    addr:"Calle F Sur, David",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM (Pan-American Hwy)",
    bank:"Banistmo",
    city:"David, Chiriquí",
    lat:8.4351166,
    lng:-82.4416933,
    addr:"Carretera Interamericana, David",
    hours:"24 horas"
  },

  {
    name:"Banco Nacional (Calle B Nte)",
    bank:"Banco Nacional de Panamá",
    city:"David, Chiriquí",
    lat:8.4286610,
    lng:-82.4250400,
    addr:"Calle B Nte., David",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Banco Nacional de Panamá (C. H Nte)",
    bank:"Banco Nacional de Panamá",
    city:"David, Chiriquí",
    lat:8.4373064,
    lng:-82.4256750,
    addr:"Calle H Nte., David",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Auto Banco Nacional Doleguita",
    bank:"Banco Nacional de Panamá",
    city:"David, Chiriquí",
    lat:8.4377992,
    lng:-82.4259061,
    addr:"Av. 3a Oeste, David",
    hours:"9:00 AM - 4:00 PM"
  },

  {
    name:"ATM Banco Nacional Revilla",
    bank:"Banco Nacional de Panamá",
    city:"David, Chiriquí",
    lat:8.4283240,
    lng:-82.4248394,
    addr:"Av. Obaldía, David",
    hours:""
  },

  {
    name:"Banco Nacional (Av. 1a Este)",
    bank:"Banco Nacional de Panamá",
    city:"David, Chiriquí",
    lat:8.4242710,
    lng:-82.4311362,
    addr:"Av. 1a Este, David Sur",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Cajero Banco Nacional | Fcia. YADI",
    bank:"Banco Nacional de Panamá",
    city:"David, Chiriquí",
    lat:8.4322339,
    lng:-82.4616083,
    addr:"San Pablo Viejo, Chiriquí",
    hours:""
  },

  {
    name:"Scotiabank ATM",
    bank:"Scotiabank",
    city:"David, Chiriquí",
    lat:8.4306635,
    lng:-82.4281140,
    addr:"David centro",
    hours:""
  },

  {
    name:"Caja de Ahorros | David Centro",
    bank:"Caja de Ahorros",
    city:"David, Chiriquí",
    lat:8.4290722,
    lng:-82.4265844,
    addr:"Av. 2a Este, David",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Cajero Caja de Ahorros (Av. 2a Este)",
    bank:"Caja de Ahorros",
    city:"David, Chiriquí",
    lat:8.4291379,
    lng:-82.4264368,
    addr:"Av. 2a Este, David",
    hours:"24 horas"
  },

  {
    name:"Caja de Ahorros | David Interamericana",
    bank:"Caja de Ahorros",
    city:"David, Chiriquí",
    lat:8.4446791,
    lng:-82.4209316,
    addr:"Vía Interamericana y Av. Francisco Clark",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Caja de Ahorros #2710",
    bank:"Caja de Ahorros",
    city:"David, Chiriquí",
    lat:8.4282259,
    lng:-82.4298324,
    addr:"Central, David",
    hours:""
  },

  {
    name:"BAC Panamá | Metro Plaza",
    bank:"BAC Credomatic",
    city:"David, Chiriquí",
    lat:8.4409052,
    lng:-82.4236665,
    addr:"PH Metro Plaza, Av. Obaldía",
    hours:"9:00 AM - 4:30 PM"
  },

  {
    name:"ATM Global Bank",
    bank:"Global Bank",
    city:"David, Chiriquí",
    lat:8.4448292,
    lng:-82.4193344,
    addr:"David",
    hours:""
  },

  {
    name:"ATM Global Bank | Super 99 Corotú",
    bank:"Global Bank",
    city:"David, Chiriquí",
    lat:8.4458671,
    lng:-82.4197928,
    addr:"Plaza Corotú, Carr. Panamericana",
    hours:""
  },

  {
    name:"ATM Global Bank | Super 99 David",
    bank:"Global Bank",
    city:"David, Chiriquí",
    lat:8.4278868,
    lng:-82.4371711,
    addr:"Super 99, Calle F Sur",
    hours:""
  },

  {
    name:"Cajero Global Bank",
    bank:"Global Bank",
    city:"David, Chiriquí",
    lat:8.4449174,
    lng:-82.4194534,
    addr:"David",
    hours:""
  },

  {
    name:"ATM Global Bank | FETRATEDA",
    bank:"Global Bank",
    city:"David, Chiriquí",
    lat:8.4337022,
    lng:-82.4232765,
    addr:"Terminal de Transporte de David, Av. Obaldía",
    hours:""
  },

  {
    name:"ATM Global Bank | Hospital Chiriquí",
    bank:"Global Bank",
    city:"David, Chiriquí",
    lat:8.4219383,
    lng:-82.4380785,
    addr:"Torre nueva, Av. 4a Oeste",
    hours:""
  },

  {
    name:"ATM Global Bank | Farmacias Arrocha San Mateo",
    bank:"Global Bank",
    city:"David, Chiriquí",
    lat:8.4274124,
    lng:-82.4386845,
    addr:"Plaza PH 507, Calle F Sur",
    hours:""
  },

  {
    name:"ATM Global Bank | Cinépolis Federal Mall",
    bank:"Global Bank",
    city:"David, Chiriquí",
    lat:8.4550744,
    lng:-82.4266716,
    addr:"Federal Mall, Av. Belisario Porras",
    hours:""
  },

  {
    name:"CanalBank",
    bank:"CanalBank",
    city:"David, Chiriquí",
    lat:8.4296510,
    lng:-82.4268469,
    addr:"Calle B Nte., David",
    hours:"8:30 AM - 3:30 PM"
  },

  {
    name:"BAC Panamá | Edificio Multibank",
    bank:"BAC Credomatic",
    city:"David, Chiriquí",
    lat:8.4298921,
    lng:-82.4280623,
    addr:"Urb. Aristides Romero, David",
    hours:"8:00 AM - 6:00 PM"
  },

  {
    name:"Credicorp Bank | Chiriquí Mall",
    bank:"Credicorp Bank",
    city:"David, Chiriquí",
    lat:8.4315261,
    lng:-82.4612286,
    addr:"Vía Interamericana, Chiriquí Mall",
    hours:"9:30 AM - 5:00 PM"
  },

  {
    name:"Centro de Préstamos David",
    bank:"Credicorp Bank",
    city:"David, Chiriquí",
    lat:8.4312807,
    lng:-82.4276854,
    addr:"Calle C Nte., David",
    hours:"8:00 AM - 4:00 PM"
  },

  {
    name:"Cajero Credicorp",
    bank:"Credicorp Bank",
    city:"David, Chiriquí",
    lat:8.4319400,
    lng:-82.4610169,
    addr:"San Pablo Viejo, Chiriquí",
    hours:"24 horas"
  },


  // ================= SANTIAGO, VERAGUAS =================

  {
    name:"Plaza Banconal (Banco Nacional)",
    bank:"Banco Nacional de Panamá",
    city:"Santiago, Veraguas",
    lat:8.1058598,
    lng:-80.9710236,
    addr:"Carr. Interamericana, Santiago, Veraguas",
    hours:"8:00 AM - 4:00 PM"
  },

  {
    name:"Banco General Santiago",
    bank:"Banco General",
    city:"Santiago, Veraguas",
    lat:8.0975318,
    lng:-80.9792816,
    addr:"Av. Central y Calle 8, Santiago, Veraguas",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"BAC Credomatic | Santiago",
    bank:"BAC Credomatic",
    city:"Santiago, Veraguas",
    lat:8.0991686,
    lng:-80.9641484,
    addr:"Plaza Corotú, Carr. Interamericana, Santiago",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Banco Nacional | Avenida Central",
    bank:"Banco Nacional de Panamá",
    city:"Santiago, Veraguas",
    lat:8.0972738,
    lng:-80.9828160,
    addr:"Av. Héctor A. Santacoloma, Santiago, Veraguas",
    hours:"8:00 AM - 3:00 PM"
  },


  // ================= PENONOMÉ, COCLÉ =================

  {
    name:"ATM Banco Nacional | Plaza Esmeralda",
    bank:"Banco Nacional de Panamá",
    city:"Penonomé, Coclé",
    lat:8.5099932,
    lng:-80.3630150,
    addr:"Plaza Esmeralda, Penonomé, Coclé",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM | Suc. Penonomé",
    bank:"Banistmo",
    city:"Penonomé, Coclé",
    lat:8.5160085,
    lng:-80.3523854,
    addr:"Av. Juan D. Arosemena, Penonomé, Coclé",
    hours:"24 horas"
  },

  {
    name:"ATM Caja de Ahorros",
    bank:"Caja de Ahorros",
    city:"Penonomé, Coclé",
    lat:8.5207384,
    lng:-80.3583730,
    addr:"Penonomé, Coclé",
    hours:"24 horas"
  },

  {
    name:"Banco General Penonomé",
    bank:"Banco General",
    city:"Penonomé, Coclé",
    lat:8.5028527,
    lng:-80.3645685,
    addr:"Boulevard Penonomé, Carr. Panamericana, Coclé",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Banistmo ATM",
    bank:"Banistmo",
    city:"Penonomé, Coclé",
    lat:8.5155273,
    lng:-80.3525440,
    addr:"Calle Manuel Amador Guerrero, Penonomé, Coclé",
    hours:"24 horas"
  },


  // ================= COLÓN =================

  {
    name:"Banco Nacional de Panamá | Colón",
    bank:"Banco Nacional de Panamá",
    city:"Colón",
    lat:9.3567233,
    lng:-79.9037645,
    addr:"Colón centro",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Banco General Colón",
    bank:"Banco General",
    city:"Colón",
    lat:9.3558538,
    lng:-79.9044134,
    addr:"Av. del Frente, Colón",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Banco General Plaza La Rotonda",
    bank:"Banco General",
    city:"Colón",
    lat:9.3378989,
    lng:-79.8796146,
    addr:"Av. Randolph, Colón",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Credicorp Bank | Cuatro Altos",
    bank:"Credicorp Bank",
    city:"Colón",
    lat:9.3387467,
    lng:-79.8858941,
    addr:"Plaza Cuatro Altos, Colón",
    hours:"8:00 AM - 3:00 PM"
  },


  // ================= CHITRÉ, HERRERA =================

  {
    name:"ATM Banco General",
    bank:"Banco General",
    city:"Chitré, Herrera",
    lat:7.9641571,
    lng:-80.4318590,
    addr:"Calle Melitón Martín, Chitré, Herrera",
    hours:"7:00 AM - 9:00 PM"
  },

  {
    name:"Cajeros Banco General | Sede BG",
    bank:"Banco General",
    city:"Chitré, Herrera",
    lat:7.9656370,
    lng:-80.4337155,
    addr:"Plaza Carola, Chitré, Herrera",
    hours:"24 horas"
  },

  {
    name:"ATM Caja de Ahorros",
    bank:"Caja de Ahorros",
    city:"Chitré, Herrera",
    lat:7.9623487,
    lng:-80.4286746,
    addr:"Chitré, Herrera",
    hours:"24 horas"
  },

  {
    name:"ATM Caja de Ahorros",
    bank:"Caja de Ahorros",
    city:"Chitré, Herrera",
    lat:7.9540270,
    lng:-80.4308609,
    addr:"Chitré, Herrera",
    hours:"24 horas"
  },

  {
    name:"ATM Banco General",
    bank:"Banco General",
    city:"Chitré, Herrera",
    lat:7.9537799,
    lng:-80.4241775,
    addr:"Chitré, Herrera",
    hours:""
  },


  // ================= LAS TABLAS, LOS SANTOS =================

  {
    name:"Banistmo ATM",
    bank:"Banistmo",
    city:"Las Tablas, Los Santos",
    lat:7.7662027,
    lng:-80.2774600,
    addr:"Av. Dr. Belisario Porras, Las Tablas, Los Santos",
    hours:"24 horas"
  },

  {
    name:"Banco Nacional de Panamá | Las Tablas",
    bank:"Banco Nacional de Panamá",
    city:"Las Tablas, Los Santos",
    lat:7.7694892,
    lng:-80.2763700,
    addr:"Calle Ramón Mora, Las Tablas, Los Santos",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"Banco General Las Tablas",
    bank:"Banco General",
    city:"Las Tablas, Los Santos",
    lat:7.7676787,
    lng:-80.2774897,
    addr:"Frente al Parque Belisario Porras, Las Tablas",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"ATM Scotiabank / Caja de Ahorros / BAC",
    bank:"Scotiabank",
    city:"Las Tablas, Los Santos",
    lat:7.7654842,
    lng:-80.2725338,
    addr:"Las Tablas, Los Santos",
    hours:""
  },


  // ================= PANAMÁ OESTE =================

  {
    name:"ATM Banco General",
    bank:"Banco General",
    city:"Panamá Oeste",
    lat:8.8794763,
    lng:-79.7815503,
    addr:"La Chorrera, Panamá Oeste",
    hours:"24 horas"
  },

  {
    name:"Banistmo ATM | Xtra La Chorrera, El Coco",
    bank:"Banistmo",
    city:"Panamá Oeste",
    lat:8.8705367,
    lng:-79.8003624,
    addr:"Xtra El Coco, La Chorrera, Panamá Oeste",
    hours:"24 horas"
  },

  {
    name:"Banco Nacional | Cajero Automático",
    bank:"Banco Nacional de Panamá",
    city:"Panamá Oeste",
    lat:8.8764034,
    lng:-79.7873052,
    addr:"Las Américas, La Chorrera, Panamá Oeste",
    hours:"24 horas"
  },

  {
    name:"Banco General La Chorrera",
    bank:"Banco General",
    city:"Panamá Oeste",
    lat:8.8794171,
    lng:-79.7815662,
    addr:"Carr. Panamericana, La Chorrera",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"National Bank ATM | Policlínica Dr. Santiago Barraza",
    bank:"Banco Nacional de Panamá",
    city:"Panamá Oeste",
    lat:8.8897804,
    lng:-79.7606342,
    addr:"Policlínica, La Chorrera, Panamá Oeste",
    hours:"24 horas"
  },


  // ================= BOCAS DEL TORO =================

  {
    name:"ATM (frente a banco)",
    bank:"Caja de Ahorros",
    city:"Bocas del Toro",
    lat:9.3410502,
    lng:-82.2414436,
    addr:"Calle 4ta, Bocas del Toro",
    hours:"24 horas"
  },


  // ================= DARIÉN =================

  {
    name:"Banco Nacional de Panamá | Metetí",
    bank:"Banco Nacional de Panamá",
    city:"Darién",
    lat:8.5170661,
    lng:-77.9804048,
    addr:"Metetí, Darién",
    hours:"8:00 AM - 3:00 PM"
  },

  {
    name:"ATM Banco Nacional",
    bank:"Banco Nacional de Panamá",
    city:"Darién",
    lat:8.5175365,
    lng:-77.9806713,
    addr:"Metetí, Darién",
    hours:""
  },

  {
    name:"ATM Caja de Ahorros",
    bank:"Caja de Ahorros",
    city:"Darién",
    lat:8.6577710,
    lng:-78.1544705,
    addr:"Darién",
    hours:""
  }

];


// ==========================================================
// MAPA
// ==========================================================

const map = new maplibregl.Map({

  container: 'map',

  style: 'https://tiles.openfreemap.org/styles/liberty',

  center: [-80.9, 8.75],

  zoom: 7.4,

  attributionControl: {
    compact: true
  }

});


// ==========================================================
// CONTROLES DEL MAPA
// ==========================================================

map.addControl(
  new maplibregl.NavigationControl(),
  'bottom-right'
);


// ==========================================================
// VARIABLES
// ==========================================================

let markers = [];

let activeBanks = new Set(
  Object.keys(BANK_COLORS)
);


// ==========================================================
// ESPERAR A QUE EL MAPA ESTÉ LISTO
// ==========================================================

map.on('load', () => {

  renderMarkers();

});


// ==========================================================
// CREAR MARCADOR
// ==========================================================

function makeMarker(color) {

  const element = document.createElement('div');

  element.className = 'atm-map-marker';

  element.style.width = '16px';

  element.style.height = '16px';

  element.style.background = color;

  element.style.border = '2px solid #0f1720';

  element.style.borderRadius = '50% 50% 50% 0';

  element.style.transform = 'rotate(-45deg)';

  element.style.boxShadow =
    '0 0 6px rgba(0,0,0,0.5)';

  element.style.cursor = 'pointer';

  return element;

}


// ==========================================================
// LIMPIAR MARCADORES
// ==========================================================

function clearMarkers() {

  markers.forEach(marker => {

    marker.remove();

  });

  markers = [];

}


// ==========================================================
// FILTRO DE CIUDADES
// ==========================================================

const citySelect =
  document.getElementById('citySelect');


// Crear ciudades automáticamente
// usando el campo city de todos los ATMs.

const cities = [
  ...new Set(
    atms.map(atm => atm.city)
  )
].sort((a, b) =>
  a.localeCompare(b, 'es')
);


// Agregar opciones al select

cities.forEach(city => {

  const option =
    document.createElement('option');

  option.value = city;

  option.textContent = city;

  citySelect.appendChild(option);

});


// ==========================================================
// CAMBIO DE CIUDAD
// ==========================================================

citySelect.addEventListener(
  'change',
  () => {

    const search =
      document.getElementById(
        'searchInput'
      ).value.toLowerCase();

    renderMarkers(search);

    zoomToCity(
      citySelect.value
    );

  }
);


// ==========================================================
// ZOOM A CIUDAD
// ==========================================================

function zoomToCity(city) {

  if (city === 'all') {

    map.flyTo({

      center: [-80.9, 8.75],

      zoom: 7.4,

      essential: true

    });

    return;

  }


  const cityAtms =
    atms.filter(
      atm => atm.city === city
    );


  if (!cityAtms.length) {
    return;
  }


  const bounds =
    new maplibregl.LngLatBounds();


  cityAtms.forEach(atm => {

    bounds.extend([
      atm.lng,
      atm.lat
    ]);

  });


  map.fitBounds(
    bounds,
    {
      padding: 80,
      maxZoom: 14,
      duration: 900
    }
  );

}


// ==========================================================
// RENDERIZAR MARCADORES Y LISTA
// ==========================================================

function renderMarkers(
  filterText = ''
) {

  clearMarkers();


  const list =
    document.getElementById(
      'atmList'
    );

  list.innerHTML = '';


  const selectedCity =
    citySelect.value;


  const filtered =
    atms.filter(atm => {

      const bankMatch =
        activeBanks.has(atm.bank);


      const cityMatch =
        selectedCity === 'all' ||
        atm.city === selectedCity;


      const searchMatch =
        atm.name
          .toLowerCase()
          .includes(filterText) ||

        atm.addr
          .toLowerCase()
          .includes(filterText) ||

        atm.bank
          .toLowerCase()
          .includes(filterText) ||

        atm.city
          .toLowerCase()
          .includes(filterText);


      return (
        bankMatch &&
        cityMatch &&
        searchMatch
      );

    });


  // ========================================================
  // CREAR MARCADORES
  // ========================================================

  filtered.forEach(atm => {

    const color =
      BANK_COLORS[atm.bank] ||
      '#94a3b8';


    const markerElement =
      makeMarker(color);


    // Popup

    const popupContent = `

      <div
        class="popup-bank-tag"
        style="
          background:${color}22;
          color:${color};
          border:1px solid ${color}55;
        "
      >
        ${escapeHTML(atm.bank)}
      </div>

      <div class="popup-title">
        ${escapeHTML(atm.name)}
      </div>

      <div class="popup-addr">
        ${escapeHTML(atm.addr)}
        ·
        ${escapeHTML(atm.city)}
      </div>

      ${
        atm.hours
          ? `
            <div class="popup-hours">
              🕐 ${escapeHTML(atm.hours)}
            </div>
          `
          : ''
      }

    `;


    const popup =
      new maplibregl.Popup({
        offset: 18,
        closeButton: true
      })
      .setHTML(popupContent);


    const marker =
      new maplibregl.Marker({
        element: markerElement,
        anchor: 'bottom'
      })

      .setLngLat([
        atm.lng,
        atm.lat
      ])

      .setPopup(popup)

      .addTo(map);


    markers.push(marker);


    // ======================================================
    // CARD DEL SIDEBAR
    // ======================================================

    const card =
      document.createElement('div');


    card.className =
      'atm-card';


    card.innerHTML = `

      <div class="name">

        <span
          class="sw"
          style="background:${color}">
        </span>

        ${escapeHTML(atm.name)}

      </div>

      <div class="addr">
        ${escapeHTML(atm.addr)}
      </div>

      <div class="city-tag">
        📍 ${escapeHTML(atm.city)}
      </div>

      ${
        atm.hours
          ? `
            <div class="hours">
              🕐 ${escapeHTML(atm.hours)}
            </div>
          `
          : ''
      }

    `;


    // Al hacer clic en la tarjeta

    card.addEventListener(
      'click',
      () => {

        map.flyTo({

          center: [
            atm.lng,
            atm.lat
          ],

          zoom: 16,

          essential: true

        });


        popup.addTo(map);

      }
    );


    list.appendChild(card);

  });


  // ========================================================
  // CONTADORES
  // ========================================================

  document.getElementById(
    'countShown'
  ).textContent =
    filtered.length;


  document.getElementById(
    'countTotal'
  ).textContent =
    atms.length;

}


// ==========================================================
// FILTROS DE BANCOS
// ==========================================================

const filtersDiv =
  document.getElementById(
    'bankFilters'
  );


Object.keys(BANK_COLORS)
  .forEach(bank => {


    const chip =
      document.createElement('div');


    chip.className =
      'bank-chip active';


    chip.style.setProperty(
      '--chip-color',
      BANK_COLORS[bank]
    );


    chip.innerHTML = `

      <span class="sw"></span>

      ${escapeHTML(bank)}

    `;


    chip.addEventListener(
      'click',
      () => {


        if (
          activeBanks.has(bank)
        ) {

          activeBanks.delete(bank);

          chip.classList.remove(
            'active'
          );

        }

        else {

          activeBanks.add(bank);

          chip.classList.add(
            'active'
          );

        }


        const search =
          document.getElementById(
            'searchInput'
          ).value.toLowerCase();


        renderMarkers(search);

      }
    );


    filtersDiv.appendChild(chip);

  });


// ==========================================================
// BÚSQUEDA
// ==========================================================

document
  .getElementById('searchInput')
  .addEventListener(
    'input',
    event => {

      renderMarkers(
        event.target.value
          .toLowerCase()
          .trim()
      );

    }
  );


// ==========================================================
// PROTECCIÓN DEL TEXTO
// ==========================================================

function escapeHTML(value) {

  return String(value)

    .replaceAll('&', '&amp;')

    .replaceAll('<', '&lt;')

    .replaceAll('>', '&gt;')

    .replaceAll('"', '&quot;')

    .replaceAll("'", '&#039;');

}

// ================================================================
// 🌐 ACTUALIZAR IDIOMA DEL MAPA ATM
// ================================================================

function updateATMMapLanguage(newLanguage = null) {

    const savedLanguage = newLanguage || localStorage.getItem("lang") || "es";

    ATM_LANGUAGE = ATM_TRANSLATIONS[savedLanguage]
        ? savedLanguage
        : "es";

    document.documentElement.lang = ATM_LANGUAGE;

    // Título de la página
    document.title = atmT("pageTitle");

    // Textos que tengan data-atm-i18n
    document.querySelectorAll("[data-atm-i18n]").forEach(element => {
        const key = element.dataset.atmI18n;

        if (ATM_TRANSLATIONS[ATM_LANGUAGE][key]) {
            element.textContent = atmT(key);
        }
    });

    // Placeholders
    document.querySelectorAll("[data-atm-i18n-placeholder]").forEach(element => {
        const key = element.dataset.atmI18nPlaceholder;

        element.placeholder = atmT(key);
    });

    // Volver a dibujar los elementos dinámicos del mapa
    if (typeof renderMarkers === "function") {
        renderMarkers(
            document.getElementById("searchInput")?.value || ""
        );
    }
}


// Detecta cambios de idioma desde otra página o pestaña
window.addEventListener("storage", event => {

    if (event.key === "lang") {
        updateATMMapLanguage(event.newValue);
    }

});


// Evento para cambios de idioma dentro de la misma página
window.addEventListener("vaulty:language-changed", event => {

    const newLanguage = event.detail?.lang;

    if (newLanguage) {
        updateATMMapLanguage(newLanguage);
    }

});


// Aplicar idioma al cargar
updateATMMapLanguage();
