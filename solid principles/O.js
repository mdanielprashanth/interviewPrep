// * O - Open/Closed Principle (OCP)
 
// * Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
  

// * ex:- Violation of OCP

// ! Problem: Adding a discount would require modifying the existing Invoice class.
class Invoice {
    constructor(items) {
      this.items = items;
    }
  
    calculateTotal() {
      return this.items.reduce((acc, item) => acc + item.price, 0);
    }
  }
  

// ? Solution: By using inheritance or strategy, the class can be extended without being modified.

class Invoice {
    constructor(items) {
      this.items = items;
    }
  
    calculateTotal() {
      return this.items.reduce((acc, item) => acc + item.price, 0);
    }
  }
  
class DiscountedInvoice extends Invoice {
constructor(items, discount) {
    super(items);
    this.discount = discount;
}

calculateTotal() {
    const total = super.calculateTotal();
    return total - (total * this.discount);
}
}
  
