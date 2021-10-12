/**
 * @class Table
 * @description
 * Eine Applikation zum anzeigen von Tabellen in der Konsole
 */
class Table
{
    // constructor
    constructor({title, width, columns, rows}={})// konfigurationsobject
    {

    
    this.tableTitle = title || 'Default ';
    this.tableWidth = width || process.stdout.columns; // breite des terminals
    this.tableColumns = columns || [];
    this.tableRows = rows || [];
    
    }
    // getter/setter für unsere eigenschaften
    getTitle =() => this.tableTitle;
    setTitle =(title) => this.tableTitle = title;
    getWidth=() => this.tableWidth;
    setWidth=(width) => this.tableWidth = width;
    getColumns=() => this.tableColumns;
    setColumns=(columns) => this.tableColumns = columns;
    getRows=() => this.tableRows;
    setRows=(rows) => this.tableRows = rows;

   
    /**
     * 
     * @returns @method createTitle();
     * @description Erstellet den tabellentitel anhand der breite der tabelle
     * @returns { string }
     */

    createTitle = () =>
    {
        const padding = Math.round((this.tableWidth- this.tableTitle.length)/2);
        return `\n${' '.repeat(padding) }${this.tableTitle} `
    }


    
    /**
     * @method createColumn();
     * @description Erstellt eine spalte
     * @param { string } text 
     * @param { number } width 
     * @returns { string }
     */
    createColumn =(text,width) =>
    {
        const columnWidth= width- text.toString().length;

        return ' ' + text.toString() + ' '.repeat(columnWidth <= 0 ? 20: columnWidth- 3) + '|';
        //wir fügen den string zusammen, und damit wir nicht negativ wiederholen, setzen wir einen ausweichert von 20 
    }


    /**
     * @method createRow();
     * @description Erstellt eine komplette Zeile mit dazugehörigen spalten
     * @param { object } rowContent 
     * @returns { string }
     */

    createRow =(rowContent) =>
    {
        let tempstring='|'; // Der template string für eine Zeile

       
        for(let content in rowContent)
        {
            let width = this.tableWidth;
            this.tableColumns.forEach((column,i) =>
            {
                if(column.key === content)
                {
                    if(this.tableColumns.length === i + 1)
                    {
                        tempstring += this.createColumn(rowContent[ content ], width + 2)
                    }
                    else
                    {
                        tempstring += this.createColumn(rowContent[ content ], column.width)
                    }
                }
                width -= column.width// wir ziehen die breite der spalte von der tabellenbreite ab
            })
        }
        return tempstring
    }

    /**
     * @method createHeader();
     * @description Erstellt den Header 
     * @returns { string }
     */

    createHeader = () =>
    {
        let tempstring = '|';
        let width = this.tableWidth;
        this.tableColumns.forEach((column,i) =>
        {
            if(this.tableColumns.length === i+ 1)
            {
                tempstring += this.createColumn(column.title, width + 2);
            }
            else
            {
                tempstring += this.createColumn(column.title, column.width)
            }
            width -= column.width;
        })
        return tempstring
    }
    
    /**
     * @method createDivider();
     * @description Erstellt divider
     * @returns { string }
     */

    createDivider = () =>
    {
        let tempstring = '|';
        let width =this.tableWidth;
        this.tableColumns.forEach((column, i)=>
        {
            if(this.tableColumns.length === i+ 1)
            {
                tempstring += '-'.repeat(width)+ '|';
            }
            else
            {
                tempstring += '-'.repeat(column.width -2 || 20)+ '|';
            }
            width -=column.width;
        });
        return tempstring

    }
   /**
    * @method showTable();
    * @description Show the alle methoden im terminal
    */

    showTable = () =>
    {
        console.log(this.createTitle());
        console.log(this.createHeader());
        console.log(this.createDivider());
        this.tableRows.forEach((row, i)=>
        {
            console.log(this.createRow(row));
        })

    }
}
/**
 * @exports
 * @description Exportiert die klasse Table für di externe Benutzung
 */
module.exports = Table;
