
// Die classe importieren
const Table = require('./Table');

const columns =
[
    {
        key:'id',
        title:'#',
        width:10
    },
    {
        key:'name',
        title:'Name',
        width:25
    },
    {
        key:'group',
        title:'Group',
        width:15 
    },
    {
        key:'role',
        title:'Role',
        width:50
    }
    
];
const rows=
[
    {
        id:1,
        name:'Camilia',
        group:'Class',
        role:'Student',
    },
    {
        id:2,
        name:'Mustapha',
        group:'Class',
        role:'Student',
    },
    {
        id:3,
        name:'Mandy',
        group:'Class',
        role:'Assistant',
    }
    

];

// eine neu instanz der klasse erstellen
const table= new Table();

// const table= new Table({title: 'TestTabelle})

// ein array mit spalten erstellen
table.setColumns(columns);

// ein array mit zeilen erstellen
table.setRows(rows);

// den titel der tabelle einstellen
table.setTitle('Unsere Tabelle');

// optional die breite der tabelle einstellen
table.setWidth(100);

// die tabelle ausgeben
console.log(table);
// die tabelle anzeigen
table.showTable();