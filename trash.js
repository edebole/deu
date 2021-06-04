var textArray = [
    'images/trash/monton_de_basura.png',
    'images/trash/bolsa_de_basura_1.png',
    'images/trash/cajas_rotas.png',
    'images/trash/bolsa_de_basura_2.png',
    'images/trash/cascara_de_banana.png',
    'images/trash/diarios_1.png',
    'images/trash/diarios_2.png',
    'images/trash/lata_de_gaseosa.png',
];

var altArray = [
    'Monton de basura',
    'Bolsas de basura',
    'Cajas rotas',
    'Bolsas de basura',
    'Cascara de banana',
    'Diarios y revistas rotas',
    'Revistas y diarios sucios',
    'lata de gaseosa',
]

function randomNumberTrash() {return (Math.floor(Math.random()*textArray.length))};

function pathTrash(n) { return textArray[n]; }

function descriptionTrash(n) { return altArray[n] ;}
