class Customer {
    companyName: string = "";
    nip: string = "";
    city: string = "";
    street: string = "";
    flatNumber: string = "";
    areaCode: string = "";
    comments: string = "";
    industry: string = "";
    active: string = "";

    getAddress(): string {
        return `${this.street} ${this.flatNumber}, ${this.areaCode} ${this.city}`;
    }

    getData(): string {
        return `${this.companyName} ${this.nip}, ${this.getAddress()} ${this.comments} 
        ${this.industry} ${this.active}`;
    }
}

class Supplier extends Customer {
    nrKonta: string;
    faktura: Customer[] = [];

    constructor(nrKonta: string) {
        super();
        this.nrKonta = nrKonta;
    }
}







// class Customer {
//     companyName = "";
//     nip = "";
//     city = "";
//     street = "";
//     flatNumber = "";
//     areaCode = "";
//     comments = "";
//     industry = "";
//     active = "";

//     getAddress() {
//         return `${this.street} ${this.flatNumber}, ${this.areaCode} ${this.city}`;
//     }
    
//     getData() {
//         return `${this.companyName} ${this.nip}, ${this.getAddress()} ${this.comments} 
//         ${this.industry} ${this.active}`;
//     }
// }

// class Supplier extends Customer {
//     constructor(nrKonta){
//         super(this.nrKonta = nrKonta);
//     }
//     nrKonta = "";
//     faktura = [];
// }















// function Customer (){
//     this.name = "";
//     this.nip = "";
//     this.city = "";
//     this.street = "";
//     this.houseNumber = "";
//     this.zipCode = "";
//     this.comments = "";
//     this.industry = "";
//     this.active = "";
// }

// function Supplier(accountNumber){
//     this.accountNumber = accountNumber;
//     this.invoices = [];
// }
// Supplier.prototype = new Customer();



// function Customer() {
//     this.companyName = function() {
//         return "XYZ";
//     };
//     this.nip = function() {
//         return "54636456456";
//     };
//     this.city = function() {
//         return "Kraków";
//     };
//     this.street = function() {
//         return "Krakowska";
//     };
//     this.houseNumber = function() {
//         return 10;
//     };
//     this.flatNumber = function() {
//         return 3;
//     };
//     this.areaCode = function() {
//         return "45-123"; 
//     };
// }

// function Supplier() {
//     this.numerKonta = function() {
//         return "4454354354354343";
//     };
//     this.faktury = function() {
//         return [];
//     };
// }
// Supplier.prototype = new Customer();


