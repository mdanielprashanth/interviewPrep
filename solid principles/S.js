// *   S - Single Responsibility Principle (SRP):
 
// * A class should have only one reason to change, meaning it should have only one job or responsibility
  

// * ex:- Violation of SRP

// ! Problem: A class Invoice has multiple responsibilities: calculating the total and printing the invoice.

class Invoice {
    constructor(items) {
      this.items = items;
    }
  
    calculateTotal() {
      return this.items.reduce((acc, item) => acc + item.price, 0);
    }
  
    printInvoice() {
      console.log('Printing Invoice...');
      console.log('Items:', this.items);
      console.log('Total:', this.calculateTotal());
    }
}

// ? Solution: Separate the concerns by moving the printing responsibility to a Printer class.

class Invoice {
constructor(items) {
    this.items = items;
}

calculateTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
}
}
  
class Printer {
printInvoice(invoice) {
    console.log('Printing Invoice...');
    console.log('Items:', invoice.items);
    console.log('Total:', invoice.calculateTotal());
}
}
