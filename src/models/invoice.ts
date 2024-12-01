class Invoice{
    name: string;
    quantity: number;
    unit?: Unit;
    netto: number;
    tax?: Tax;
    brutto: number;

    constructor(name1: string, quantity1: number, unit1: Unit, netto1: number, tax1: Tax, brutto1: number){
        this.name = name1;
        this.quantity = quantity1;
        this.unit = unit1;
        this.netto = netto1;
        this.tax = tax1;
        this.brutto = brutto1;
    }
}